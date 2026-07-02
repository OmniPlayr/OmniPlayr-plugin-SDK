/** Promise or plain value.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/#frontend-plugin-overview)
 */
export type MaybePromise<T> = T | Promise<T>;

/** Primitive JSON value.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/#frontend-plugin-overview)
 */
export type JsonPrimitive = string | number | boolean | null;

/** JSON-compatible value.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/#frontend-plugin-overview)
 */
export type JsonValue = JsonPrimitive | JsonValue[] | { [key: string]: JsonValue };

/** Generic object with unknown values.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/#frontend-plugin-overview)
 */
export type UnknownRecord = Record<string, unknown>;

/** Options for HostApiMissingError.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/#frontend-plugin-overview)
 */
export interface HostApiMissingErrorOptions {
  /** Name of the missing host API, when known. */
  apiName?: string;
}

/** Error thrown when SDK runtime functions are used outside the OmniPlayr host app.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/#frontend-plugin-overview)
 */
export class HostApiMissingError extends Error {
  constructor(options: HostApiMissingErrorOptions = {}) {
    const suffix = options.apiName ? ` for "${options.apiName}"` : '';
    super(`OmniPlayr plugin host API${suffix} is not available. This SDK must run inside OmniPlayr.`);
    this.name = 'HostApiMissingError';
  }
}
