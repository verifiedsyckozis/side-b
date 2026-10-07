# Side B

A quiet single-page Sudoku. Static files only, no sound: `index.html`, `style.css`, `app.js` (puzzle data included), plus `sw.js` so it keeps working offline after the first visit.

Host: push to GitHub and turn on Pages for the branch root. No build step.

Puzzles: 30 each for Easy (38–46 clues), Medium (30–31), Hard (25–29). Every puzzle has exactly one solution and can be solved by logic without guessing.

- `node tools/verify.mjs` re-checks the shipped list.
- `node tools/make-puzzles.mjs 30 > out.json` makes a fresh batch (offline tool, not part of the app).

When shipping changes, bump `VERSION` in `sw.js` so iPads pick up the new files.

Tiles: the 1–9 / Animals switch in the header swaps digits for nine animal silhouettes (cat, fish, bird, rabbit, turtle, snail, owl, elephant, butterfly). Animals is the default; the choice is saved. The animals are inline SVG in `app.js`, so still no external assets.

Keys: arrows move, 1–9 place (1 = cat … 9 = butterfly), N notes, Backspace erase, Z undo, Shift+Z or Y redo, H hint.
