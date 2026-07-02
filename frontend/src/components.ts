/** React-compatible component type used by OmniPlayr plugin UI registrations.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/ui.html#sidebar-routes)
 */
export type PluginComponent<TProps = any> = (props: TProps) => unknown;
