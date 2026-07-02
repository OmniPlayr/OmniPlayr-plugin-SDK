import type { ApiClient } from './api';
import type { FlatConfigItem, TomlValue } from './config';
import type { UseNotificationsResult } from './notifications';
import type { Player } from './player';
import type { Popup } from './popups';
import type {
  DOMHook,
  PluginMenuItem,
  PluginMenuItemRegistration,
  PluginRoute,
  PluginTab,
  PluginTabRegistration,
  PluginTranslations,
  PluginTranslationsApi,
  Unsubscribe,
} from './plugins';
import { HostApiMissingError } from './types';

/** Window property used by OmniPlayr to expose the real plugin host implementation.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/#frontend-plugin-overview)
 */
export const OMNIPLAYR_PLUGIN_API_KEY = '__OMNIPLAYR_PLUGIN_API__';

/** Runtime API provided by OmniPlayr. SDK functions forward into this host object.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/#frontend-plugin-overview)
 */
export interface OmniPlayrPluginHostApi {
  api: ApiClient;
  player: Player;
  registerTab(pluginId: string, tab: PluginTabRegistration): void;
  registerPluginsMenuItem(pluginId: string, menuItem: PluginMenuItemRegistration): void;
  getPluginsMenuItems(): PluginMenuItem[];
  getTabs(): PluginTab[];
  getTab(id: string): PluginTab | undefined;
  getTabByUrl(url: string): PluginTab | undefined;
  registerRoute(route: PluginRoute): void;
  getRoutes(): PluginRoute[];
  emit(event: string, payload?: unknown): void;
  on(event: string, listener: (payload: unknown) => void): Unsubscribe;
  modify(pluginId: string, selector: string, fn: DOMHook): void;
  onPluginsLoaded(fn: () => void): Unsubscribe;
  hasFrontendPlugin(id: string): boolean;
  definePluginTranslations(pluginId: string): PluginTranslationsApi;
  getPluginConfig<T = TomlValue>(pluginId: string, keyPath: string, defaultValue?: T): T | undefined;
  reloadPluginConfig(pluginId: string): void;
  flattenPluginConfigs(pluginId: string): FlatConfigItem[];
  getAccount(): string | null;
  getVolumeStorage(): Storage | null;
  useIsMobile(): boolean;
  navigate(to: string): void;
  useNotificationsContext(): UseNotificationsResult;
  createPopup(popup: Popup): void;
  closePopup(id: string): void;
  goBackPopup(id: string): void;
}

declare global {
  interface Window {
    __OMNIPLAYR_PLUGIN_API__?: Partial<OmniPlayrPluginHostApi>;
  }
}

function getGlobalHost(): Partial<OmniPlayrPluginHostApi> | undefined {
  if (typeof window === 'undefined') return undefined;
  return window[OMNIPLAYR_PLUGIN_API_KEY];
}

/** Return the raw host API object currently exposed by OmniPlayr, if any.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/#frontend-plugin-overview)
 */
export function getHostApi(): Partial<OmniPlayrPluginHostApi> {
  return getGlobalHost() ?? {};
}

/** Return a required host API member or throw HostApiMissingError when unavailable.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/#frontend-plugin-overview)
 */
export function requireHostApi<K extends keyof OmniPlayrPluginHostApi>(apiName: K): OmniPlayrPluginHostApi[K] {
  const value = getHostApi()[apiName];
  if (value === undefined || value === null) {
    throw new HostApiMissingError({ apiName: String(apiName) });
  }
  return value as OmniPlayrPluginHostApi[K];
}

export type { PluginTranslations };


