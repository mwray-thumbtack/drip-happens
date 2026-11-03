# Drip Happens Plumbing Co.

A responsive one-page website for a fictional plumbing company.

The site includes service prices, generated team photos, fictional reviews, a
quote estimator, and an interactive plumbing chaos animation.

## Start the site

The project has no package dependencies. It uses Python's local HTTP server
through an npm script.

```bash
cd /Users/mwray/Thumbtack/drip-happens
npm run dev
```

Then open [http://127.0.0.1:4173](http://127.0.0.1:4173).

Press `Ctrl+C` in the terminal to stop the server.

## Main files

- `index.html` contains the page content and structured data.
- `styles.css` contains the layout, responsive styles, and animations.
- `app.js` contains the menu, quote estimator, FAQ, and chaos interactions.
- `assets/team/` contains the generated team portraits.
- `assets/reviews/` contains the generated review photos.
- `llms.txt` gives AI assistants a concise business summary.
- `robots.txt` and `sitemap.xml` contain crawler metadata.

## Interactive features

- Select a problem in the quote estimator to see a typical price range.
- Click a review photo or **Activate plumbing chaos** to start the animation.
- Use **Drain the chaos** or press `Escape` to stop the animation.

## Important

The company, reviews, prices, address, phone number, license, and service claims
are fictional. Do not present them as real business information.
