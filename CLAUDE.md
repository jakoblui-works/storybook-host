# storybook-host

Composed Storybook at storybook.jakoblui.com. It has a small Welcome story of its own and pulls in each frontend's published Storybook via `refs` in `.storybook/main.ts`.

## Commands
```sh
pnpm install
pnpm storybook         # :6006
pnpm build-storybook
```

## Gotchas
- Adding a frontend means adding a `refs` entry and making sure that repo publishes its `*-storybook` image (served on its own subdomain).
- No CI tests here; pushing to `main` builds the image and triggers the infra deploy.
