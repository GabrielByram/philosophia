# Philosophia

An interactive philosophy encyclopedia covering major thinkers across Western and Eastern philosophical traditions. Two complementary views — a structured encyclopedia and a chronological network — unified in a single app.

## Views

### Encyclopedia
A domain-first reference interface. Browse by philosophical domain (Metaphysics, Epistemology, Ethics, Logic, Aesthetics, Political Philosophy), drill into subtopics and entries, and follow inline concept links. Includes dedicated pages for each philosopher.

### Network
A philosopher-first exploration interface. Philosophers are laid out chronologically on a scrollable canvas, color-coded by tradition (Ancient, Rationalism, Empiricism, German Idealism, Existentialism, Analytic, Continental, and more). Click any philosopher to see their biography, key ideas, subtopics, primary sources, and influence relationships.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Other commands

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  data/
    encyclopediaData.js   # PHILOSOPHERS + domain entry DATA (encyclopedia format)
    networkData.js        # TRADITIONS + PHILOSOPHERS + layout data (network format)
  Encyclopedia.jsx        # Encyclopedia view component
  NetworkExplorer.jsx     # Network view component
  App.jsx                 # Root — header + Encyclopedia/Network toggle
  main.jsx                # React entry point
index.html
vite.config.js
```

## Content

- **37 philosophers** — from Socrates and Buddha to Derrida and Rawls
- **11 traditions** — Ancient, Medieval, Rationalism, Empiricism, German Idealism, Existentialism, Analytic, Continental, Pragmatism, Eastern, Political
- **6 domains** — Metaphysics, Epistemology, Ethics, Political Philosophy, Aesthetics, Logic
- Each philosopher has a biography, key ideas, subtopics, primary sources, and influence graph edges

## Stack

- [React 18](https://react.dev/)
- [Vite 6](https://vitejs.dev/)
- No CSS framework — all styles are inline React
- No external data dependencies — all content is bundled
