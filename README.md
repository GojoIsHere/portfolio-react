# Portfolio React

This is a modern React portfolio scaffold for Sushil Thanet with animations, smooth scrolling, and a download resume button.

How to use

1. Put your resume PDF at `public/Sushil_Thanet_Resume.pdf`
2. From the `portfolio-react` folder run:

```bash
npm install
npm start
```

Build and deploy to GitHub Pages:

```bash
npm run build
# then deploy the build/ output to GitHub Pages (configure repo settings or use gh-pages)
```

Files of interest

- [portfolio-react/package.json](portfolio-react/package.json)
- [portfolio-react/src/App.js](portfolio-react/src/App.js)
- [portfolio-react/src/components/About.js](portfolio-react/src/components/About.js)

To deploy to GitHub Pages directly from this repo (recommended):

1. Install the new dependency (already added to `package.json`):

```bash
npm install
```

2. Update `homepage` in `package.json` to `https://<your-github-username>.github.io/portfolio-react`.

3. Deploy:

```bash
npm run deploy
```

This will build the app and publish the `build/` directory to the `gh-pages` branch.

If you want me to commit and create the repository and run the deploy for you, I can do that next.
