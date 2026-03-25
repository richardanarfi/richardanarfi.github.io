# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A static HTML/CSS portfolio site for Richard Anarfi, deployed via GitHub Pages from the `main` branch (root folder). No build step, no framework, no package manager.

## Development

Open `index.html` directly in a browser or use any local static server. There is no build, lint, or test command.

## Architecture

- **`index.html`** — Single-page homepage with sections: hero (typing effect), projects, writing, about. Anchor links for navigation.
- **`projects/*.html`** — Three project showcase pages: ToolEval (agenteval.html), SynthEval (synthbench.html), PromptLab (researchflow.html). Each has architecture diagrams, tabbed content sections, code snippets, result cards, and expandable lessons.
- **`writing/*.html`** — Two technical essay pages.
- **`assets/styles.css`** — All styling. CSS custom properties in `:root` (light) and `[data-theme="dark"]` (dark mode). Responsive breakpoint at 940px. Includes component styles for tabs, expandables, architecture diagrams, code blocks with labels, result cards, and scroll-reveal animations.
- **`assets/site.js`** — All interactivity (~150 lines): dark mode toggle (localStorage-persisted), scroll progress bar, IntersectionObserver-based reveal animations, tab component, expandable sections, hero typing effect. Respects `prefers-reduced-motion`.
- **`images/`** — Project card images.
- **`resume.pdf`** — Linked from nav and hero.

## Key Conventions

- No build tools or dependencies — all changes are direct edits to HTML/CSS/JS files.
- Dark mode: toggle via `.theme-toggle` button, stored in localStorage, CSS vars swap via `[data-theme="dark"]` on `<html>`.
- All pages must include: `<body class="loading">`, `<div class="scroll-progress">`, theme toggle in nav, and the shared footer with links.
- Scroll reveal: add `.reveal` class to elements that should animate in on scroll. Use `.reveal-delay-1` through `.reveal-delay-4` for stagger.
- Tabs: `.tab-group` with `.tab-btn[data-tab]` buttons + `.tab-panel[data-panel]` content. JS handles switching.
- Expandables: `.expandable` wrapper with `.expandable-header` button + `.expandable-body` content.
- Architecture diagrams: `.arch-diagram` with `.arch-node` and `.arch-arrow` elements.
- Code snippets: `.code-block` wrapper with `.code-label` span + `<pre><code>`.
- Result metrics: `.results-grid` with `.result-card` containing `.result-label`, `.result-value`, `.result-note`.
- Design palette: warm neutral light (`--bg: #f4f1ea`, `--accent: #174c43`) / dark (`--bg: #111315`, `--accent: #3bb5a3`).
- Card components share border/shadow/radius via grouped CSS rule. Hover lifts cards with translateY(-4px).
