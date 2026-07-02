import type { PluginComponent } from './components';
import { requireHostApi } from './host';

/** Function returned by SDK subscriptions. Call it to remove the listener.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/events.html#plugin-event-bus)
 */
export type Unsubscribe = () => void;

/** Receives a payload emitted through the OmniPlayr plugin event bus.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/events.html#plugin-event-bus)
 */
export type PluginEventListener<TPayload = unknown> = (payload: TPayload) => void;

/** Callback used by DOM hooks to modify a matched core OmniPlayr element.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/dom-hooks.html#registering-a-hook)
 */
export type DOMHook = (el: Element) => void;

/** Metadata from a plugin's package.json file. The plugin id must match the folder name, usually `name@author`.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/#frontend-plugin-overview)
 */
export interface PluginConfig {
  /** Full plugin key, usually `name@author`. */
  id: string;
  /** Human-readable plugin name shown in OmniPlayr. */
  name: string;
  /** Plugin author. This should match the author segment in the folder name. */
  author: string;
  /** Plugin version string. */
  version: string;
  /** Short plugin description shown to users. */
  description: string;
}

/** A full-page route registered by a plugin. Use plugin-specific paths to avoid collisions.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/ui.html#registering-routes)
 */
export interface PluginRoute {
  /** URL path, for example `/my-plugin/:id`. */
  path: string;
  /** React component rendered for this route. */
  component: PluginComponent;
}

/** Sidebar tab after OmniPlayr has registered and normalized it.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/ui.html#adding-a-sidebar-tab)
 */
export interface PluginTab {
  /** Plugin id that owns the tab. */
  id: string;
  /** Display label. Defaults to the plugin name from package.json when omitted during registration. */
  label: string;
  /** Icon component, commonly a lucide-react icon. */
  icon: PluginComponent;
  /** Main React view rendered when the tab is active. */
  view: PluginComponent;
  /** Backend source type used by the player, if this tab is tied to a playback source. */
  sourceType?: string;
  /** Optional URL for direct navigation to the tab. */
  url?: string;
}

/** Options passed to register a plugin sidebar tab.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/ui.html#adding-a-sidebar-tab)
 */
export interface PluginTabRegistration {
  /** Icon component, commonly a lucide-react icon. */
  icon: PluginComponent;
  /** Main React view rendered when the tab is active. */
  view: PluginComponent;
  /** Backend source type used by the player, if this plugin provides playable media. */
  sourceType?: string;
  /** Optional label override. By default OmniPlayr uses the plugin name from package.json. */
  label?: string;
  /** Optional URL for direct navigation to the tab. */
  url?: string;
}

/** Menu item shown on OmniPlayr's plugins page after registration.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/ui.html#adding-a-menu-option-in-the-plugins-page)
 */
export interface PluginMenuItem {
  /** Plugin id that owns the menu item. */
  id: string;
  /** Icon component, commonly a lucide-react icon. */
  icon: PluginComponent;
  /** View component to render when selected. Required unless `function` is provided. */
  view?: PluginComponent | null;
  /** Display label. Defaults to the plugin name from package.json when omitted during registration. */
  label?: string;
  /** Click handler. Required unless `view` is provided. */
  function?: () => void;
  /** Whether clicking the item requires a direct user interaction. */
  needsInteraction?: boolean;
  /** Whether the item should only be available to admins. */
  adminOnly?: boolean;
}

/** Options passed to register a plugin-page menu item. Provide either `view` or `function`.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/ui.html#adding-a-menu-option-in-the-plugins-page)
 */
export interface PluginMenuItemRegistration {
  /** Icon component, commonly a lucide-react icon. */
  icon: PluginComponent;
  /** View component to render when selected. Required unless `function` is provided. */
  view?: PluginComponent | null;
  /** Optional label override. By default OmniPlayr uses the plugin name from package.json. */
  label?: string;
  /** Click handler. Required unless `view` is provided. */
  function?: () => void;
  /** Whether clicking the item requires a direct user interaction. */
  needsInteraction?: boolean;
  /** Whether the item should only be available to admins. */
  adminOnly?: boolean;
}

/** Translation helpers scoped to a single plugin id.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/translations.html#translations)
 */
export interface PluginTranslationHookResult {
  /** Translation function for use inside React components. */
  t: (key: string, options?: unknown) => string;
  /** i18n instance or implementation-specific translation object. */
  i18n?: unknown;
  /** Whether translations are ready, when provided by the host i18n layer. */
  ready?: boolean;
}

/** Translation helpers scoped to a single plugin id. */
export interface PluginTranslationsApi {
  /** React hook for translated text inside components. */
  useTranslation: () => PluginTranslationHookResult;
  /** Translation function for use outside React components. */
  t: (key: string, options?: unknown) => string;
}

/** Locale map shape for plugin translation files.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/translations.html#translations)
 */
export type PluginTranslations = Record<string, Record<string, string>>;

/** Register a sidebar tab for your plugin. The plugin id must match your package.json id.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/ui.html#adding-a-sidebar-tab)
 */
export function registerTab(pluginId: string, tab: PluginTabRegistration): void {
  return requireHostApi('registerTab')(pluginId, tab);
}

/** Register an item on the plugins page. Provide either a view component or a click function.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/ui.html#adding-a-menu-option-in-the-plugins-page)
 */
export function registerPluginsMenuItem(pluginId: string, menuItem: PluginMenuItemRegistration): void {
  return requireHostApi('registerPluginsMenuItem')(pluginId, menuItem);
}

/** Return all registered plugin-page menu items. Mostly useful for OmniPlayr internals.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/ui.html#adding-a-menu-option-in-the-plugins-page)
 */
export function getPluginsMenuItems(): PluginMenuItem[] {
  return requireHostApi('getPluginsMenuItems')();
}

/** Return all registered sidebar tabs. Mostly useful for OmniPlayr internals.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/ui.html#adding-a-sidebar-tab)
 */
export function getTabs(): PluginTab[] {
  return requireHostApi('getTabs')();
}

/** Find a registered sidebar tab by plugin id.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/ui.html#adding-a-sidebar-tab)
 */
export function getTab(id: string): PluginTab | undefined {
  return requireHostApi('getTab')(id);
}

/** Find a registered sidebar tab by its URL.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/ui.html#adding-a-sidebar-tab)
 */
export function getTabByUrl(url: string): PluginTab | undefined {
  return requireHostApi('getTabByUrl')(url);
}

/** Register a full-page route outside the sidebar layout, such as a detail or settings page.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/ui.html#registering-routes)
 */
export function registerRoute(route: PluginRoute): void {
  return requireHostApi('registerRoute')(route);
}

/** Return all plugin routes. Mostly useful for OmniPlayr internals.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/ui.html#registering-routes)
 */
export function getRoutes(): PluginRoute[] {
  return requireHostApi('getRoutes')();
}

/** Emit an event on the plugin event bus. Prefix events you own with your plugin id.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/events.html#plugin-event-bus)
 */
export function emit<TPayload = unknown>(event: string, payload?: TPayload): void {
  return requireHostApi('emit')(event, payload);
}

/** Subscribe to an event on the plugin event bus. Call the returned function to unsubscribe.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/events.html#plugin-event-bus)
 */
export function on<TPayload = unknown>(event: string, listener: PluginEventListener<TPayload>): Unsubscribe {
  return requireHostApi('on')(event, listener as PluginEventListener<unknown>);
}

/** Register a DOM hook in `ComponentName.css-class` format. Keep callbacks idempotent.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/dom-hooks.html#registering-a-hook)
 */
export function modify(pluginId: string, selector: string, fn: DOMHook): void {
  return requireHostApi('modify')(pluginId, selector, fn);
}

/** Run a callback after frontend plugins finish loading. Returns a cleanup function.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/events.html#event-bus-player)
 */
export function onPluginsLoaded(fn: () => void): Unsubscribe {
  return requireHostApi('onPluginsLoaded')(fn);
}

/** Check whether a frontend plugin with the given id is installed and validated.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/#frontend-plugin-overview)
 */
export function hasFrontendPlugin(id: string): boolean {
  return requireHostApi('hasFrontendPlugin')(id);
}


