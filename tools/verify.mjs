// Independent check of the puzzle list shipped in app.js.
// Usage: node tools/verify.mjs
import { readFileSync } from 'node:fs';
import { countSolutions, grade } from './make-puzzles.mjs';

const src = readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const PUZZLES = new Function(src.slice(0, src.indexOf('(function')) + '; return PUZZLES;')();

const units = [];
for (let r = 0; r < 9; r++) units.push([...Array(9)].map((_, c) => r * 9 + c));
for (let c = 0; c < 9; c++) units.push([...Array(9)].map((_, r) => r * 9 + c));
for (let b = 0; b < 9; b++) units.push([...Array(9)].map((_, k) => (Math.floor(b / 3) * 3 + Math.floor(k / 3)) * 9 + (b % 3) * 3 + (k % 3)));

let bad = 0;
const all = new Set();
for (const [level, list] of Object.entries(PUZZLES)) {
  const clues = [];
  list.forEach(([p, s], n) => {
    const fail = (why) => { bad++; console.log(`${level} #${n}: ${why}`); };
    if (!/^[0-9]{81}$/.test(p)) return fail('puzzle not 81 digits');
    if (!/^[1-9]{81}$/.test(s)) return fail('solution not 81 digits 1-9');
    if (all.has(p)) fail('duplicate'); all.add(p);
    for (const u of units) if (new Set(u.map((i) => s[i])).size !== 9) return fail('solution breaks a row/col/box');
    for (let i = 0; i < 81; i++) if (p[i] !== '0' && p[i] !== s[i]) return fail('given disagrees with solution');
    const g = [...p].map(Number);
    const n2 = countSolutions(g.slice(), 2);
    if (n2 !== 1) return fail(`${n2} solutions`);
    clues.push(81 - [...p].filter((c) => c === '0').length);
    const t = grade(g);
    if (t === Infinity) fail('needs guessing');
  });
  console.log(`${level}: ${list.length} puzzles, clues ${Math.min(...clues)}–${Math.max(...clues)}`);
}
console.log(bad ? `${bad} problems` : 'All puzzles verified: valid, unique, solvable by logic.');
process.exit(bad ? 1 : 0);
