# Side B

A quiet single-page Sudoku. Static files only: `index.html`, `style.css`, `app.js` (puzzle data included), plus `sw.js` so it keeps working offline after the first visit.

Host: push to GitHub and turn on Pages for the branch root. No build step.

Puzzles: 30 each for Easy (38–46 clues), Medium (30–31), Hard (25–29). Every puzzle has exactly one solution and can be solved by logic without guessing.

- `node tools/verify.mjs` re-checks the shipped list.
- `node tools/make-puzzles.mjs 30 > out.json` makes a fresh batch (offline tool, not part of the app).

When shipping changes, bump `VERSION` in `sw.js` so iPads pick up the new files.

Keys: arrows move, 1–9 place, N notes, Backspace erase, Z undo, Shift+Z or Y redo, H hint, M mute.
