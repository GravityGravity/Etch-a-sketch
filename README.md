# Etch-A-Sketch

![Etch-A-Sketch banner](banner.jpg)

A browser-based recreation of the classic Etch-A-Sketch toy, built with vanilla HTML, CSS, and JavaScript. The drawing surface is a dynamically generated grid of `div` elements that darken on hover to simulate the stylus tracing a line.

## Features

- **Dynamic grid generation** — the canvas is built at runtime via the DOM API, so resolution can scale on demand.
- **Adjustable resolution** — prompt-driven input lets the user set a new grid size (e.g. 16×16 up to 100×100).
- **Hover-to-draw interaction** — cells darken incrementally on `mouseenter`, mimicking pressure buildup on repeated passes.
- **Reset control** — clears the canvas and regenerates a blank grid without a full page reload.

## Tech Stack

HTML5, CSS3, and vanilla JavaScript (ES6+) — no build tools, frameworks, or dependencies.

## Usage

1. Move the cursor over the grid to draw.
2. Click **New Grid** to specify a custom grid dimension.
3. Click **Reset** to clear the canvas.
