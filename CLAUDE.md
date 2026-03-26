# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**AI & Dev Glossary** — a single-file vanilla HTML/CSS/JS flashcard app. 78 terms across AI, Git, Code, Infra, and Claude Code categories. No build system, no framework, no npm. Everything lives in `index.html`.

## Architecture

Single file: `index.html` contains all CSS (in `<style>`), HTML structure, card data, and JavaScript (in `<script>`). No external dependencies except Geist Mono from Google Fonts.

### Key design patterns

- **Flip mechanism**: `.card-back { transform: scaleX(-1); opacity: 0 }`. When the card parent does `rotateY(180deg)`, the two mirror ops cancel so text reads normally. Face visibility toggled via JS `opacity` at the 240ms midpoint of the flip animation — NOT via `backface-visibility` (which breaks when `filter` is on an ancestor).
- **Scale vs. tilt separation**: `.card-outer` handles smooth `scale(1.02)` hover via CSS transition + `.lifted` class. `.card` inside handles tilt with `transition: none` set in JS on mousemove. This prevents tilt lag.
- **Shadow**: A `.card-shadow` sibling div uses `box-shadow` (not `filter: drop-shadow` — that flattens 3D context in Chrome/Safari).
- **Card stack**: `#stackCards` div holds dynamically-generated `.stack-card[data-pos="1–4"]` elements behind the main card. Pure vertical stacking (`translateY + scale`), no rotation. Rebuilt by `updateStack()` on each card advance.
- **Swipe animation**: `swipeCard("got"|"miss")` animates `$cardOuter` (translateX ±120% + rotate ±8deg), then calls `showCard()` after 350ms which resets `$cardOuter` inline styles before showing the next card.
- **localStorage**: key `ai_flashcards_v4`. State shape: `{ deck, index, got, miss, flipped }`.

### Views / sections

| Element | Shown when |
|---|---|
| `#landing` | App start, or after ← Back |
| `#progressWrap` | During card game only |
| `#stage` | During card game only |
| `#results` | After deck is exhausted |
| `#dictionary` | Browse mode |

Back navigation uses event delegation on `.js-back` class — a single `document.addEventListener("click")` handles all ← Back buttons across views.

### Typography

Two sizes only: `24px` (`.landing-title`, `.term`, `.score-num`) and `12px` (everything else). Font: Geist Mono 400/500.

### Layout

Cards and progress bar are capped at `400px` wide, centered. Landing cards use a 2-column CSS grid.

### Keyboard shortcuts (card game only)

- `Space` / `Enter`: flip card
- `→`: Got it (swipe right)
- `←`: Still learning (swipe left)

## Card data

Each card object: `{ cat, term, full, def, ex }`. Categories: `"AI & Claude"`, `"Git & GitHub"`, `"Code & Dev"`, `"Infra & Process"`, `"Claude Code Commands"`.
