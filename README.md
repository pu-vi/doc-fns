# Flour n Sugar — Documentation

[![CI Build & Typecheck](https://github.com/vishal-/doc-fns/actions/workflows/ci.yml/badge.svg)](https://github.com/vishal-/doc-fns/actions/workflows/ci.yml)
[![Docusaurus](https://img.shields.io/badge/built%20with-Docusaurus%20v3-green.svg)](https://docusaurus.io/)
[![Node.js](https://img.shields.io/badge/node-%3E%3D24.0-blue.svg)](https://nodejs.org/)
[![Live Staging](https://img.shields.io/badge/staging-puza.shop-orange.svg)](https://puza.shop)

> **A community and discovery platform for local, home, and independent bakers.**

This repository hosts the product, architectural, user journey, and operational release documentation for **Flour n Sugar**, built using [Docusaurus](https://docusaurus.io/).

---

## Documentation Structure

```text
docs/
├── intro.mdx                                # Welcome, mission & documentation sitemap
├── 01-overview/                             # Market problem, dual-concept, principles & personas
├── 02-user-experience/                      # Customer lifecycle, baker onboarding & WhatsApp flows
├── 03-mvp-specifications/                   # MVP 1 scope matrix, tenant storefronts, units & SEO
├── 04-roadmap-and-vision/                   # 5-phase roadmap, industry ecosystem & North Star
├── 05-business-strategy/                    # Marketplace flywheel, Lucknow rollout & monetization
├── 06-technical-architecture/               # Next.js, PostgreSQL, Prisma, Firebase Auth & R2
└── mvp-1-release-checklist/                 # 10 Hard Gates, 24-section checklist & launch playbook
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) version **24.0** or above
- `npm` (or `pnpm` / `yarn`)

### Installation

Install dependencies using `npm ci`:

```bash
npm ci
```

### Local Development

Start the local development server:

```bash
npm start
```

The site will be available at [http://localhost:3000/](http://localhost:3000/). Changes to documentation in `docs/` reload automatically.

---

## Quality Checks & Verification

Before opening a pull request or pushing changes, run the following verification scripts:

### 1. TypeScript Typecheck
Verify type validity across all Docusaurus configurations and TypeScript definitions:

```bash
npm run typecheck
```

### 2. Production Build
Verify that static HTML bundles compile cleanly with zero broken links:

```bash
npm run build
```

### 3. Local Production Preview
Test and preview the generated production output locally:

```bash
npm run serve
```

---

## Continuous Integration (CI)

A GitHub Actions workflow is configured at [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

Every `push` and `pull_request` automatically triggers:
- Clean checkout & dependency installation (`npm ci`)
- TypeScript type-safety audit (`npm run typecheck`)
- Production documentation compilation & link verification (`npm run build`)

---

## Useful Links

- **Staging Platform:** [puza.shop](https://puza.shop)
- **Documentation Domain:** [docs.puza.shop](https://docs.puza.shop)
- **Framework:** [Docusaurus 3](https://docusaurus.io/)
