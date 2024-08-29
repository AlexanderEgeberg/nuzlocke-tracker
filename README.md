# Nuzlocke tracker

_Live Example: <https://vite-react-example.vercel.app>_

This project is a tracker for the Nuzlocke challenge in Pokemon games.
Currently it is a work in progress.
With focus on gen 1 only.

## Getting started

TODO

## Description

The Nuzlocke challenge is a set of rules that make the game more challenging.
The main rules are:

- If a Pokemon faints, it is considered dead and must be released.
- You can only catch the first Pokemon you encounter in each route.
- You must nickname all Pokemon.

### Features

- Track Pokemon caught in each route.
- Track Pokemon that have died.
- Track Pokemon in your party.
- Track Pokemon in your PC.
- Track badges obtained.
- Track the number of Pokemon caught.
- Track the number of Pokemon that have died.
- Track Rival matches.

## Tech Stack

This project is a SPA using the following technologies:

### Frontend

- React
- Vite

### Routing

- Tanstack Router

### State Management

- Zustand
- Tanstack Query

### Types

- TypeScript
- Zod

### UI

- TailwindCSS [x]
- TailwindUI - To consider
- Heroicons [X]
- Headless UI [X]
- Shadcn - To consider
- React Icons - To consider
- React Toastify - To consider
- React Aria - To consider
- React Hook form - To consider

### Linting

- ESlint
- Prettier - To consider

### Testing

- Vitest - TODO
- Playwright - TODO

### Automation

- Github Actions - TODO
- Husky - TODO
- Git Hooks - TODO
- Auto deploy (vercel) - TODO

### Architecture

- Components
- Pages
- Hooks
- Utils
- Services
- Types
- Tests

### Backend - TODO

For now we're using localstorage

- Firebase
- Node
- Express
- Prisma
- Postgres

### External APIs

- Pokemon API - TODO find a good one

### Hosting

- Vercel

### Tools

- Figma
- Github
- Github Actions
- Github Projects
- Trello
- Notion

## Deploy Your Own

Deploy your own Vite project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/vite-react&template=vite-react)
TODO

### Deploying From Your Terminal

You can deploy your new Vite project with a single command from your terminal using [Vercel CLI](https://vercel.com/download):

```shell
vercel
```

## Next Steps

- [ ] Add git hooks (husky) for linting and testing
- [ ] Add CI/CD with Github Actions (linting, testing, deploy)
- [ ] Add Firebase for authentication (with backend done)
