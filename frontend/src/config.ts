import { requireHostApi } from './host';

/** Scalar TOML values supported by OmniPlayr plugin config.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/config.html#config)
 */
export type TomlPrimitive = string | number | boolean | null;

/** TOML value shape returned by plugin config helpers.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/config.html#config)
 */
export type TomlValue = TomlPrimitive | TomlObject;

/** Nested TOML object shape.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/config.html#config)
 */
export interface TomlObject {
  [key: string]: TomlValue;
}

/** Base config types supported by OmniPlayr plugin config type files.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/config.html#supported-base-types)
 */
export type PluginConfigBaseType = 'str' | 'string' | 'int' | 'integer' | 'float' | 'bool' | 'boolean' | 'dict' | 'object' | 'eval';

/** Flattened config entry used by settings UIs and config editors.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/config.html#config)
 */
export interface FlatConfigItem {
  /** Dot-notated key path, for example `display.items_per_page`. */
  key: string;
  /** Parsed base type from the matching config_types entry. */
  type: string;
  /** Current config value. */
  value: TomlValue;
  /** Default value, if defined. */
  default: TomlValue;
  /** Human-readable comment from the type string, if defined. */
  comment: string | null;
  /** Whether this config key supports live updates. */
  liveupdate: boolean;
  /** Minimum numeric value from a minmax constraint. */
  min: number | null;
  /** Maximum numeric value from a minmax constraint. */
  max: number | null;
  /** Numeric step value from a step constraint. */
  step: number | null;
  /** Allowed values from an in constraint. */
  in_values: TomlValue[] | null;
  /** TOML file stem that owns this setting. */
  file: string;
}

/** Read a plugin config value using dot notation. Returns `defaultValue` when the key is missing.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/config.html#reading-config)
 */
export function getPluginConfig<T = TomlValue>(pluginId: string, keyPath: string, defaultValue?: T): T | undefined {
  return requireHostApi('getPluginConfig')(pluginId, keyPath, defaultValue);
}

/** Clear and reload cached frontend config for a plugin.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/config.html#caching-and-reloading)
 */
export function reloadPluginConfig(pluginId: string): void {
  return requireHostApi('reloadPluginConfig')(pluginId);
}

/** Return all typed config values for a plugin as a flat list. Useful for settings UIs.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/config.html#config)
 */
export function flattenPluginConfigs(pluginId: string): FlatConfigItem[] {
  return requireHostApi('flattenPluginConfigs')(pluginId);
}
