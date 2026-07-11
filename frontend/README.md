# @omniplayr/plugins

Frontend SDK for OmniPlayr plugins.

Plugin authors import everything from one public package:

```ts
import {
  api,
  modify,
  player,
  registerRoute,
  registerPluginsMenuItem,
  type SourcePlugin,
} from '@omniplayr/plugins'
```

The SDK source is split into focused files, but `src/index.ts` re-exports the public API so plugin code can use one import path. Runtime functions are lightweight bridges that call the OmniPlayr host API exposed by the app.

## Documentation

Read the full frontend plugin documentation for more explanation and examples:

https://omniplayr.wokki20.nl/docs/plugins/building/frontend/#frontend-plugin-overview

## API Map

- `registerTab`, `registerPluginsMenuItem`, `registerRoute`, `PluginTab`, `PluginMenuItem`, `PluginRoute`  
  Docs: https://omniplayr.wokki20.nl/docs/plugins/building/frontend/ui.html#sidebar-routes

- `getPluginConfig`, `reloadPluginConfig`, `flattenPluginConfigs`, `FlatConfigItem`, `TomlValue`  
  Docs: https://omniplayr.wokki20.nl/docs/plugins/building/frontend/config.html#config

- `definePluginTranslations`, `PluginTranslationsApi`  
  Docs: https://omniplayr.wokki20.nl/docs/plugins/building/frontend/translations.html#translations

- `api`, `ApiClient`, `ApiParams`, `ApiError`  
  Docs: https://omniplayr.wokki20.nl/docs/plugins/building/frontend/api.html#api-requests

- `emit`, `on`, `player`, `playSong`, `SourcePlugin`, `AudioOutputPlugin`, `AudioOutputDevice`, `TrackMetadata`, `QueueItem`, `HistoryItem`  
  Docs: https://omniplayr.wokki20.nl/docs/plugins/building/frontend/events.html#event-bus-player

- `modify`, `DOMHook`  
  Docs: https://omniplayr.wokki20.nl/docs/plugins/building/frontend/dom-hooks.html#dom-hooks

## Local Testing

From this package:

```powershell
npm install
npm run build
npm run typecheck
```

Then install it into the OmniPlayr frontend for local plugin development:

```powershell
cd G:\github\OmniPlayr-server\frontend
npm install G:\github\OmniPlayr-plugin-SDK\frontend
```

After installing, restart the TypeScript server in VS Code if autocomplete does not update immediately.

