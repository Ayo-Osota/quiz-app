# UI conventions

Recorded at commit db40dc8, 2026-11-02. Conventions only.

## Stack
React 19, Vite, React Router 7, Tailwind v4 (`src/index.css` is the token source), lucide-react icons. No component library.

## Tokens (src/index.css)
- Palette generated from seed #0F766E with the skill's palette script. Role tokens: `bg-surface`, `bg-surface-raised`, `text-ink`, `text-ink-muted`, `bg-action`/`text-on-action`, `bg-soft`, `bg-error-soft`/`text-on-error-soft`, `bg-success-soft`/`text-on-success-soft`. Light and dark via `light-dark()`, follows the system.
- Fonts: Fraunces (headings, `font-brand`), DM Sans (everything else, `font-text`), loaded from Google Fonts in index.html.
- Spacing: 8 px grid (`--spacing: 0.5rem`, so `gap-2` = 16 px, `gap-3` = 24, `gap-5` = 40). Type scale utilities: `display-fluid`, `headline-*`, `title-*`, `label-*`, `body-*`.

## Shared pieces
- `Page.tsx`: skip link, `<main>`, document title. Wrap every route in it.
- `EmptyState.tsx`: page shown when no quiz is in progress.
- `QuizTimer.tsx`: countdown readout and bar; exports `QUESTION_SECONDS` (10).
- Component classes in index.css: `btn` (+ `btn-primary`, `btn-secondary`, `btn-compact`), `card`, `badge` (+ `-success`, `-error`), `alert-error`, `choice` (module checkbox), `option` (quiz answer, `data-state` = correct | wrong | dim), `action-bar`.

## Icons
lucide-react, 16 px beside text, 24 px as a leading icon. Decorative icons use `aria-hidden`; status is always also written as text.

## Copy
Sentence case. Buttons are verb + object ("Start quiz", "Next question", "Choose modules").

## Quiz behaviour
Each question has a timer (off, or 5 to 30 s, chosen on Home). Correct answer: moves on after 500 ms. Wrong answer or timeout: timer pauses, the correct answer and explanation show, and the user presses Next. A timeout is stored as an empty-string answer.

## Decisions
| Decision | Date |
|---|---|
| Added lucide-react (approved) | 2026-11-02 |
| Teal primary, Fraunces + DM Sans, light and dark | 2026-11-02 |
