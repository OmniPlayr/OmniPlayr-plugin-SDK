# OmniPlayr Plugin SDK

Official SDK packages for building OmniPlayr plugins.

This repository contains the official frontend and backend SDK packages for
OmniPlayr plugins. They give plugin authors stable import paths for the host
APIs exposed by OmniPlayr.

## Packages

| Package | Location | Description |
| --- | --- | --- |
| `@omniplayr/plugins` | `frontend/` | Frontend SDK for OmniPlayr plugin UI, host API calls, player events, config, translations, notifications, popups, and responsive helpers. |
| `omniplayr-plugins` | `backend/` | Backend development SDK for OmniPlayr plugin typing, route decorators, source plugin interfaces, config, database access, and cross-plugin function helpers. |

## Install

```powershell
npm install @omniplayr/plugins
pip install omniplayr-plugins
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

```python
from omniplayr.plugins import BackendPlugin, api, register
```

Each package is intentionally split into focused source modules, but plugin code
should import from the package root instead of individual files. The root export
is the supported public API.

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

## Backend SDK

The backend SDK includes typed development helpers for:

- Defining backend source plugins with `BackendPlugin`
- Registering plugin API routes through `api`
- Exposing and calling cross-plugin functions
- Reading plugin configuration
- Requesting plugin-scoped database access
- Importing server-provided runtime names during local development

The backend SDK does not contain the real OmniPlayr backend implementation. The
server/Docker runtime provides the actual route registration, database access,
plugin loading, and cross-plugin function registry.

See [backend/README.md](backend/README.md) for the package API map and links to
the full OmniPlayr plugin documentation.

## Development

From the frontend package directory:

```powershell
cd frontend
npm install
npm run build
npm run typecheck
```

The package builds TypeScript declarations and ESM output into `frontend/dist`.

From the backend package directory:

```powershell
cd backend
python -m pip install -e .
python -m compileall src
```

## Publishing

The GitHub Actions workflow in `.github/workflows/publish-frontend.yml`
publishes `@omniplayr/plugins` to npm when changes under `frontend/` are pushed
to `main`. The GitHub Actions workflow in `.github/workflows/publish-backend.yml`
publishes `omniplayr-plugins` to PyPI when changes under `backend/` are pushed
to `main`.

Repository setup required:

- Add an npm automation token as the `NPM_TOKEN` repository secret.
- Ensure the package version in `frontend/package.json` is bumped before merging
  a publishable change.
- Configure PyPI Trusted Publishing for `omniplayr-plugins` with repository
  `OmniPlayr/OmniPlayr-plugin-SDK` and workflow `publish-backend.yml`.
- The backend SDK version in `backend/pyproject.toml` is generated from the
  OmniPlayr server backend version.
