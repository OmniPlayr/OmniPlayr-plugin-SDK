import { requireHostApi } from './host';

/** Button shown in a popup footer.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/popups.html#button-shape)
 */
export interface PopupButton {
  label: string;
  type: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
}

/** OmniPlayr-styled popup definition.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/popups.html#popup-shape)
 */
export interface Popup {
  id: string;
  title: string;
  subtitle?: string | string[];
  close_button: boolean;
  content?: unknown;
  buttons?: PopupButton[];
  onClose?: () => void;
  mobileFullscreen?: boolean;
  group?: string;
  navigationIndex?: number;
}

/** Create or transition an OmniPlayr-styled popup.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/popups.html#basic-popup)
 */
export function createPopup(popup: Popup): void {
  return requireHostApi('createPopup')(popup);
}

/** Close an open popup by id.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/popups.html#closing-a-popup)
 */
export function closePopup(id: string): void {
  return requireHostApi('closePopup')(id);
}

/** Move a grouped popup back to its previous step.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/popups.html#grouped-popup-navigation)
 */
export function goBackPopup(id: string): void {
  return requireHostApi('goBackPopup')(id);
}

