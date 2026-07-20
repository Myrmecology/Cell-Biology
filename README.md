# Cell Biology
# FOR A VIDEO DEMO PLEASE VISIT: https://www.youtube.com/watch?v=__wksJuQPos

An interactive, museum-quality 3D exploration of eukaryotic and prokaryotic cells — built for the browser.

Explore fully three-dimensional **animal**, **plant**, and **prokaryotic (bacterial)** cells. Click any organelle to zoom in, read deep and accurate educational content, watch short animations of organelle behavior, and test your understanding with built-in quizzes. An AI-powered tutor panel is available to answer open-ended questions as you explore.

## Features

- **True 3D interaction** — orbit, pan, and zoom around fully modeled cells
- **Deep educational content** — structure, function, and real scientific detail for every organelle
- **Guided tours & free roam** — structured walkthroughs or open exploration, your choice
- **Quizzes** — test your understanding as you go, with progress saved locally in your browser
- **Behavioral animations** — see organelles in action (e.g. ATP production, protein synthesis, vesicle transport)
- **Real scientific imagery** — supplementary images pulled from a science imaging API
- **AI tutor** — ask free-form questions about any organelle or concept

## Tech Stack

**Client**
- React + TypeScript
- React Three Fiber / Three.js / drei (3D rendering)
- Framer Motion (UI transitions)
- Vite (build tooling)

**Server**
- Node.js + Express + TypeScript
- Acts as a secure proxy for all third-party API calls (Gemini AI tutor, science image API) — no API keys are ever exposed client-side

## Project Structure

Cell-Biology/
├── client/     # React + Three.js frontend
├── server/     # Node/Express API proxy backend
└── docs/       # Project documentation

## Getting Started

Setup instructions will be added here once the initial build is complete.

## Security

This project follows strict secret-handling practices:
- No credentials, keys, or tokens are ever committed to version control
- All third-party API keys live server-side only, in untracked `.env` files
- See `.gitignore` for the full list of excluded sensitive file patterns

## License

TBD