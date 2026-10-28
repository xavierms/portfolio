# Xavier Mejia — Portfolio

An English-first portfolio for software engineering, architecture, applied AI, and cloud engineering. Built with React, Vite, and Mantine. The page has responsive section navigation, scroll progress, reduced-motion-aware reveals, a RAG architecture view, project details, and configurable profile data.

## Run locally

```sh
yarn install
yarn dev
```

Build and preview:

```sh
yarn build
yarn preview
```

## Deploy to GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and publishes the site whenever a commit reaches `main`. The Vite base path is configured for the `portfolio` repository.

GitHub Pages serves the site publicly. GitHub Free supports Pages from public repositories; publishing from a private repository requires a supported paid plan. If the repository is private and the account does not support Pages for private repositories, keep the site public by changing the repository visibility, or use a Pages-capable plan.

## Update portfolio content

- `src/data/profile.js`: name, headline, value proposition, biography, contact links, CV path, and navigation.
- `src/data/skills.js`: skill groups and optional confirmed levels. Levels are `null` until confirmed.
- `src/data/projects.js`: projects and the reusable empty `projectTemplate` shape.
- `src/data/journey.js`: experience, education, certifications, article entries, and empty templates. Journey and Writing sections stay hidden while their arrays are empty.
- `src/theme.js`: Mantine color palette and type defaults.
- `src/styles.css`: responsive visual details, motion, focus states, and architecture diagram styling.

The RAG project is described as functional and not deployed to production. Its repository and demo links are intentionally blank. The CHEI-RD website is linked as a live project; specific technical contributions and its technology stack remain blank until confirmed.

## Source layout

- `src/sections/` contains the page sections.
- `src/components/` contains reusable presentation components.
- `src/data/` contains editable portfolio content.
- `src/hooks/` contains page interaction logic.
- `src/App.jsx` composes the page.
- `src/main.jsx` mounts React and Mantine styles.

There are no lint or test scripts configured in this project yet.
