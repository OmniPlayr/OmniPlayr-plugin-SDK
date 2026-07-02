# OmniPlayr Plugin SDK

Official SDK packages for building OmniPlayr plugins.

This repository currently contains the frontend TypeScript SDK published as
`@omniplayr/plugins`. It gives plugin authors one stable import path for the
host bridge APIs exposed by OmniPlayr.

## Packages

| Package | Location | Description |
| --- | --- | --- |
| `@omniplayr/plugins` | `frontend/` | Frontend SDK for OmniPlayr plugin UI, host API calls, player events, config, translations, notifications, popups, and responsive helpers. |

## Install

```powershell
npm install @omniplayr/plugins
```

## Usage

Import the public SDK from the package root:

```ts
import {
  api,
  player,
  registerPluginsMenuItem,
  registerRoute,
  type SourcePlugin,
} from '@omniplayr/plugins';
```

The package is intentionally split into focused source modules, but plugin code
should import from `@omniplayr/plugins` instead of individual files. The root
export is the supported public API.

## Frontend SDK

The frontend SDK includes helpers for:

- Calling backend plugin routes through `api`
- Registering tabs, routes, and plugin menu items
- Reading and flattening plugin configuration
- Defining plugin translations
- Listening to host events and controlling playback
- Displaying notifications and popups
- Working with responsive state and DOM hooks

See [frontend/README.md](frontend/README.md) for the package API map and links
to the full OmniPlayr plugin documentation.

## Development

From the frontend package directory:

```powershell
cd frontend
npm install
npm run build
npm run typecheck
```

The package builds TypeScript declarations and ESM output into `frontend/dist`.

## Publishing

The GitHub Actions workflow in `.github/workflows/publish-frontend.yml`
publishes `@omniplayr/plugins` to npm when changes under `frontend/` are pushed
to `main`.

Repository setup required:

- Add an npm automation token as the `NPM_TOKEN` repository secret.
- Ensure the package version in `frontend/package.json` is bumped before merging
  a publishable change.
