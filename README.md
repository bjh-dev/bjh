# A new website built with Gatsby and Sanity

## 🦅 Overview

This is a website built with [Gatsby](https://www.gatsbyjs.com/) and [Sanity](https://www.sanity.io/), using [TypeScript](https://www.typescriptlang.org/) wherever possible.

Some of the things this project will be using or plans to use are:

Planned

- 🐶 Husky (project wide) — Use git hooks with ease
- 📄 Commitizen (project wide) - Conventional commit messages CLI
- 🚓 Commitlint (project wide) - Lint commit messages
- 🚫 lint-staged (project wide) - Run linters against staged git files
- 🗂 Root import (Gatsby only) - Import folders and files using the @ prefix.
- ⚙️ ESLint (Gatsby and Sanity independently) - Pluggable JavaScript linter
- 💖 Prettier (Gatsby and Sanity independently) - Opinionated Code Formatter
- 🐐 Tests (Gatsby only, I think) - Jest and Testing Library

Unknown Implementation Date

- 🖌 Renovate (Gatsby and Sanity independently) - Dependency update tool
- 👷 PR Workflow (project wide) - Run Type Check & Linters on pull requests

## 🚀 Quickstart Guide (when we have the project started)

Git started by cloning this repo

```
$ git clone git@github.com:bjh-dev/bjh.dev.git
$ cd bjh
$ yarn
$ yarn dev
```

To view the project you can open [http://localhost:8000](http://localhost:8000).

## ✅ TODOs for New Website

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

## ⚠️ Requirements

- Node.js 14.15 (LTS) or higher. I recommend Homebrew on Mac's ([install guide](https://brew.sh/))

---

Made with ♥ by bjh
