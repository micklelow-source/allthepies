# The Pie Atlas

A comprehensive, static reference site about pie: history, savory, sweet, regional (including all 50 US states), world & historical pies, and a pie for every holiday.

## Structure

```
index.html        Home
historical.html   Historical pies (medieval, apple-pie lineage, Depression-era)
savory.html       Savory pies, incl. a "through history" collection
sweet.html        Sweet pies, incl. frozen & icebox pies
regional.html     US regional pies + all 50 states (with interactive map)
world.html        Europe, Canada, Asia & Latin America (with region picker)
holidays.html     A pie for every major holiday
css/style.css     Shared stylesheet (design tokens, layout, print styles)
js/main.js        Print-single-recipe logic + map/menu navigation
```

## Notes

- No build step — plain HTML/CSS/JS. Open `index.html` directly or serve the folder with any static host (GitHub Pages, Netlify, etc.).
- Every recipe card has a **Print recipe** button that isolates just that card for a single, image-free printed page.
- Fonts load from Google Fonts via CDN (`css/style.css`); an internet connection is needed for the intended typography, though the site is fully usable without it.

## Publishing to GitHub Pages

After pushing, enable Pages in **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**. The site will be live at `https://<username>.github.io/allthepies/`.
