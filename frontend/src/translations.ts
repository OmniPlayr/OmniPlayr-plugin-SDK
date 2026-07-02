import { requireHostApi } from './host';
import type { PluginTranslationsApi } from './plugins';

/** Create translation helpers scoped to one plugin id. The id must match the plugin folder/package id.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/translations.html#translations)
 */
export function definePluginTranslations(pluginId: string): PluginTranslationsApi {
  return requireHostApi('definePluginTranslations')(pluginId);
}
