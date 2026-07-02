import { requireHostApi } from './host';

/** React hook that returns true when OmniPlayr is currently using the mobile layout.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/ui.html#sidebar-routes)
 */
export function useIsMobile(): boolean {
  return requireHostApi('useIsMobile')();
}
