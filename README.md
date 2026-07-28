# Cristian Velásquez Portfolio

React + TypeScript + Vite portfolio with a cinematic responsive hero.

## Run

```bash
npm install
npm run dev
```

The included portrait is located at:

```text
public/images/portrait/cristian-portrait.png
```

Place the downloadable resume at:

```text
public/Cristian-Velasquez-CV.pdf
```

All visible portfolio copy is in English. The hero and Skills section share one continuous black-to-navy/indigo background canvas, with no floating overlap or hard section break.

## Continuous section backgrounds
The page now uses full-width gradient bands for Skills, Projects, Experience, Chat, and Contact. Each band begins with the exact final color of the previous band, while a short top color shield prevents radial glows from creating visible seams.

## Unified continuous background

The page now uses one background canvas on `main.portfolio-page`. Content sections are transparent and only add soft radial ambient lights, preventing horizontal bands or visible seams between Skills, Projects, Experience, Chat and Contact.
