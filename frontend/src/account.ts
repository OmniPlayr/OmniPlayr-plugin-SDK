import { requireHostApi } from './host';

/** Return the currently selected OmniPlayr account token, or null when no account is selected.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/api.html#api-requests)
 */
export function getAccount(): string | null {
  return requireHostApi('getAccount')();
}
