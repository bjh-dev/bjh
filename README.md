# A new website built with Gatsby and Sanity

## 🦅 Overview

**UPDATE: due to my old old laptop being unable to stream video while doing web dev, I've had to scrap the live coding of this project. Sorry 😿**

This is a website built with [Gatsby](https://www.gatsbyjs.com/) and [Sanity](https://www.sanity.io/), using [TypeScript](https://www.typescriptlang.org/) wherever possible.

The plan is to create a YouTube series for the whole process. I'd love to live code this but, alas, I don't have that good YouTube juice yet. If you're interested in seeing the live code happen, please [follow my Channel](https://www.youtube.com/channel/UCCU0ZjxaE0AVWikDcS1EoQA), or not. It's really up to you :-)

Some of the things this project will be using or plans to use are:

Planned

- 🐶 Husky (project wide) — Use git hooks with ease
- 📄 Commitizen (project wide) - Conventional commit messages CLI
- 🚓 Commitlint (project wide) - Lint commit messages
- 🚫 lint-staged (project wide) - Run linters against staged git files
- 🗂 Root import (Gatsby only) - Import folders and files using the @ prefix.
- ⚙️ ESLint (Gatsby and Sanity independently) - Pluggable JavaScript linter
- 💖 Prettier (Gatsby and Sanity independently) - Opinionated Code Formatter

Unknown Implementation Date

- 🐐 Tests (Gatsby only, I think) - Jest and Testing Library
- 🖌 Renovate (Gatsby and Sanity independently) - Dependency update tool
- 👷 PR Workflow (project wide) - Run Type Check & Linters on pull requests

## 🚀 Quickstart Guide (when we have the project started)

Git started by cloning this repo

```
$ git clone git@github.com:bjh-dev/bjh.dev.git
$ cd bjh
$ pnpm i -r
$ pnpm run dev -r
```

To view the project you can open [http://localhost:8000](http://localhost:8000).

## ✅ TODOs for New Website

### First Session

- [x] Create monorepo for project `$ mkdir bjh`.
- [x] Config initialise Git, add monorepo and push to remote.
- [x] Publish link to repo on socials for those interested.
- [ ] Config [commitlint and husky](https://commitlint.js.org/#/guides-local-setup) for commit linting and convention enforcement in project root.
- [x] Install and config [Sanity](https://www.sanity.io/docs/getting-started) .
- [x] Install and config [Gatsby](https://www.gatsbyjs.com/docs/quick-start/) .
- [x] Get a cup of coffee!

### Second Session

- [x] Refresher on Headless CMS and Static Site Generators.
- [x] Quick tour of sanity.
- [x] Create sanity objects schemas.
- [x] Create sanity document schemas

### Third Session

- [ ] Configure Gatsby plugins
- [ ] Create our first Graphql query and display data to font end.
- [ ] Review Sanity schemas for feature completeness and optimisation.

## Sanity Config Planning

### Schema Types

- 🛠️ Objects
  - OpenGraph
  - seo
  - excerptPortableText
  - bodyPortableText
  - mainImage
- 📝 Document Types (Caution: these are rough lists!)

  - Pages (generic builder for all landing pages)
    - 🏡 Home
    - 🙋🏼‍♂️ About
    - 💼 Work
    - 🧰 Services
    - 🔥 Uses (ala Wes Bos)
  - Services (the business)
    - 🖥️ Websites
    - ⭐ Brand Identity Design
    - ✏️ Graphic Design
    - 💭 Consulting
  - Posts (Caution: this is a rough list!)
    - 📽 YouTube Posts
    - 📜 Long-form Opinion Articles
    - 🗒 Short-form Code Articles

- 🔌 Plugs ??

**TypeScript in Sanity?**

## ⚠️ Requirements

- Node.js 14.15 (LTS) or higher. I recommend Homebrew on Mac's ([install guide](https://brew.sh/))
- [pnpm](https://pnpm.io/installation) package manager

---

Made with ♥ by bjh
