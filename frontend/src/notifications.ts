import { requireHostApi } from './host';

/** In-app notification shown by OmniPlayr.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/notifications.html#notification-shape)
 */
export interface Notification {
  id: number;
  icon: string;
  title: string;
  text: string;
  action_type: string | null;
  action_url: string | null;
  read: boolean;
  created_at: string;
}

/** Result returned by useNotificationsContext.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/notifications.html#returned-values)
 */
export interface UseNotificationsResult {
  notifications: Notification[];
  unreadCount: number;
  unreadDisplay: string;
  deleteNotification: (id: number) => void;
  markRead: (id: number) => void;
  connected: boolean;
  toastQueue: Notification[];
  dismissToast: (id: number) => void;
  refreshNotifications: () => void;
}

/** Read OmniPlayr's notification state from inside a React component.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/notifications.html#notifications)
 */
export function useNotificationsContext(): UseNotificationsResult {
  return requireHostApi('useNotificationsContext')();
}
