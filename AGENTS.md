# Repository Guidelines

## Project Structure & Module Organization
This repository is a lightweight, static frontend app.
- `index.html`: single-page shell and DOM anchors.
- `src/main.js`: app bootstrap, state, event wiring.
- `src/core/`: domain logic (`card-service.js`, `history-store.js`).
- `src/ui/`: rendering utilities (`render.js`).
- `src/data/cards.js`: card dataset.
- `src/styles.css`: theme system and responsive styles.
- `scripts/check-ui-chinese.js`: UI text guard script.
- `docs/plans/`: planning notes.

Keep new logic in `src/core/` and keep `src/main.js` focused on orchestration.

## Build, Test, and Development Commands
No bundler or framework is required.
- `start index.html` (Windows): open directly for quick checks (`file://`).
- `python -m http.server 5173`: run local static server (`http://localhost:5173`).
- `node scripts/check-ui-chinese.js`: fail if UI-facing strings contain unintended English words.

Run the Chinese UI check before every PR.

## Coding Style & Naming Conventions
- JavaScript/CSS use 4-space indentation and semicolons.
- Use ES modules (`import`/`export`), `const`/`let`, and small single-purpose functions.
- JS identifiers: `camelCase`; constants: `UPPER_SNAKE_CASE`.
- CSS classes: `kebab-case` (e.g., `history-item`, `theme-option-btn`).
- Prefer extending existing modules over duplicating logic (DRY/KISS).

## Testing Guidelines
Current testing is script + manual verification.
- Automated check: `node scripts/check-ui-chinese.js`.
- Manual smoke test: draw card, save answer, share copy, clear history, switch themes, mobile viewport.
- If adding complex logic, add a test script under `scripts/` and document usage here.

## Commit & Pull Request Guidelines
Recent history favors concise, imperative subjects with optional prefixes:
- `feat: improve Chinese UI flow and theme switching`
- `Update to 100 cards`

PRs should include:
- Purpose and scope.
- Affected paths (e.g., `src/core/card-service.js`).
- UI screenshots/GIFs for visual changes.
- Verification steps and command outputs.

## Security & Configuration Tips
- Do not commit secrets; this project should run fully client-side.
- `localStorage` is used for history; avoid storing sensitive personal data.
