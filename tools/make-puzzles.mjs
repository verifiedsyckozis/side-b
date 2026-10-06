// Offline puzzle builder for Side B. Not loaded by the app.
// Usage: node tools/make-puzzles.mjs > tools/puzzles.json
// Produces puzzles with exactly one solution, graded by which human techniques they need.

const N = 81;
const ROW = (i) => Math.floor(i / 9);
const COL = (i) => i % 9;
const BOX = (i) => Math.floor(ROW(i) / 3) * 3 + Math.floor(COL(i) / 3);

const UNITS = [];
for (let r = 0; r < 9; r++) UNITS.push([...Array(9)].map((_, c) => r * 9 + c));
for (let c = 0; c < 9; c++) UNITS.push([...Array(9)].map((_, r) => r * 9 + c));
for (let b = 0; b < 9; b++) {
  const r0 = Math.floor(b / 3) * 3, c0 = (b % 3) * 3;
  const u = [];
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) u.push((r0 + r) * 9 + c0 + c);
  UNITS.push(u);
}
const PEERS = [...Array(N)].map((_, i) => {
  const s = new Set();
  for (const u of UNITS) if (u.includes(i)) u.forEach((j) => j !== i && s.add(j));
  return [...s];
});

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function canPlace(g, i, d) {
  for (const p of PEERS[i]) if (g[p] === d) return false;
  return true;
}

// Counts solutions up to `limit`.
function countSolutions(g, limit = 2) {
  let best = -1, bestCount = 10;
  for (let i = 0; i < N; i++) {
    if (g[i]) continue;
    let n = 0;
    for (let d = 1; d <= 9; d++) if (canPlace(g, i, d)) n++;
    if (n < bestCount) { best = i; bestCount = n; if (n === 0) return 0; }
  }
  if (best < 0) return 1;
  let total = 0;
  for (let d = 1; d <= 9; d++) {
    if (!canPlace(g, best, d)) continue;
    g[best] = d;
    total += countSolutions(g, limit - total);
    g[best] = 0;
    if (total >= limit) break;
  }
  return total;
}

function fullGrid() {
  const g = new Array(N).fill(0);
  (function fill(i) {
    if (i === N) return true;
    for (const d of shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])) {
      if (canPlace(g, i, d)) {
        g[i] = d;
        if (fill(i + 1)) return true;
      }
    }
    g[i] = 0;
    return false;
  })(0);
  return g;
}

// Human-style solver. Returns the hardest technique tier needed, or Infinity if stuck.
// 1 = naked/hidden singles, 2 = + locked candidates and naked pairs.
function grade(puzzle) {
  const g = puzzle.slice();
  const cand = [...Array(N)].map((_, i) => {
    if (g[i]) return new Set();
    const s = new Set();
    for (let d = 1; d <= 9; d++) if (canPlace(g, i, d)) s.add(d);
    return s;
  });
  const place = (i, d) => {
    g[i] = d;
    cand[i].clear();
    for (const p of PEERS[i]) cand[p].delete(d);
  };
  let tier = 1;
  for (;;) {
    if (g.every((v) => v)) return tier;
    let progressed = false;
    // Naked singles
    for (let i = 0; i < N; i++) {
      if (!g[i] && cand[i].size === 1) { place(i, [...cand[i]][0]); progressed = true; }
    }
    if (progressed) continue;
    // Hidden singles
    for (const u of UNITS) {
      for (let d = 1; d <= 9; d++) {
        const spots = u.filter((i) => cand[i].has(d));
        if (spots.length === 1) { place(spots[0], d); progressed = true; }
      }
    }
    if (progressed) continue;
    // Locked candidates (pointing / claiming)
    for (const a of UNITS) {
      for (const b of UNITS) {
        if (a === b) continue;
        const inter = a.filter((i) => b.includes(i));
        if (inter.length < 2) continue;
        for (let d = 1; d <= 9; d++) {
          const spots = a.filter((i) => cand[i].has(d));
          if (spots.length && spots.every((i) => inter.includes(i))) {
            for (const j of b) {
              if (!inter.includes(j) && cand[j].has(d)) { cand[j].delete(d); progressed = true; }
            }
          }
        }
      }
    }
    // Naked pairs
    for (const u of UNITS) {
      const pairs = u.filter((i) => cand[i].size === 2);
      for (let x = 0; x < pairs.length; x++) {
        for (let y = x + 1; y < pairs.length; y++) {
          const A = [...cand[pairs[x]]], B = cand[pairs[y]];
          if (A.every((d) => B.has(d))) {
            for (const j of u) {
              if (j === pairs[x] || j === pairs[y]) continue;
              for (const d of A) if (cand[j].delete(d)) progressed = true;
            }
          }
        }
      }
    }
    if (progressed) { tier = 2; continue; }
    return Infinity;
  }
}

function makePuzzle(minClues, maxClues, wantTier) {
  for (;;) {
    const solution = fullGrid();
    const p = solution.slice();
    // Remove in symmetric pairs for a tidy look.
    const order = shuffle([...Array(41)].map((_, i) => i));
    let clues = 81;
    for (const i of order) {
      if (clues <= minClues) break;
      const j = 80 - i;
      const saved = [p[i], p[j]];
      p[i] = 0; p[j] = 0;
      const removed = i === j ? 1 : 2;
      if (clues - removed < minClues || countSolutions(p.slice()) !== 1) {
        p[i] = saved[0]; p[j] = saved[1];
      } else {
        clues -= removed;
        // Stop early for easy puzzles once inside the band, at a random point.
        if (clues <= maxClues && wantTier === 1 && minClues >= 36 && Math.random() < 0.25) break;
      }
    }
    if (clues > maxClues || clues < minClues) continue;
    const t = grade(p);
    if (t !== wantTier) continue;
    return { puzzle: p.join(''), solution: solution.join(''), clues };
  }
}

import { pathToFileURL } from 'node:url';
if (import.meta.url === pathToFileURL(process.argv[1]).href) main();

function main() {
const COUNT = Number(process.argv[2] || 30);
const spec = {
  easy: [38, 46, 1],
  medium: [30, 35, 1],
  hard: [25, 29, 2],
};
const out = {};
for (const [name, [lo, hi, tier]] of Object.entries(spec)) {
  const seen = new Set();
  out[name] = [];
  while (out[name].length < COUNT) {
    const r = makePuzzle(lo, hi, tier);
    if (seen.has(r.puzzle)) continue;
    seen.add(r.puzzle);
    out[name].push(r);
    process.stderr.write(`${name} ${out[name].length}/${COUNT} (${r.clues} clues)\n`);
  }
}
process.stdout.write(JSON.stringify(out));
}

export { countSolutions, grade };
