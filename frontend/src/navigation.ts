import { requireHostApi } from './host';

/** Navigate to an OmniPlayr route from code that cannot use React Router hooks.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/navigation.html#navigation)
 */
export function navigate(to: string): void {
  return requireHostApi('navigate')(to);
}
