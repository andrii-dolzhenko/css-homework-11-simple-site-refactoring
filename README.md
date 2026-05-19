# CSS Homework 11 - Simple Site Refactoring

A refactored version of the **Simple Site** landing page with a SCSS-based workflow and build automation using Gulp.

## Project Description

This project contains a responsive landing page built with semantic HTML and a CSS architecture refactored into modular SCSS files.
The source styles are maintained in `src/scss/`, and the Gulp build pipeline compiles them into `assets/css/style.css` and a minified `style.min.css`.

The page includes:
- header navigation
- hero section
- about section
- project statistics block
- process/video section
- footer

## Key Features

- SCSS-driven stylesheet structure with reusable partials
- Gulp task for compile + minify + live reload
- responsive layout for desktop, tablet, and mobile
- adaptive navigation and typography
- modern image handling with `aspect-ratio`
- smooth hover states for interactive elements

## Project Structure

```text
css-homework-11-simple-site-refactoring/
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── style.min.css
│   └── img/
├── src/
│   └── scss/
│       ├── abstracts/
│       ├── base/
│       ├── components/
│       ├── layout/
│       └── style.scss
├── gulpfile.js
├── index.html
├── package.json
└── README.md
```

## How to Use

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development workflow:
   ```bash
   npx gulp
   ```
3. Open the local server in the browser and edit SCSS files in `src/scss/`.

The Gulp task automatically recompiles SCSS, generates a minified stylesheet, and reloads the browser on HTML or SCSS changes.

## Technologies

- `HTML5` for semantic page structure
- `SCSS` for modular and maintainable styles
- `Gulp` for build automation and live reload
- `browser-sync` for local development server
- `gulp-clean-css` for CSS minification
- `gulp-rename` for producing `style.min.css`

## Notes

- The page is built with responsive breakpoints at 1024px, 768px, 480px, and 320px.
- The navigation and hero area adapt to smaller screens using flex wrapping and fluid sizing.
- The statistics block uses a CSS grid layout for a balanced presentation on wide and narrow viewports.

## Author

Andrii Dolzhenko

© 2026 All Rights Reserved.
