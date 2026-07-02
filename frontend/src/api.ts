import { requireHostApi } from './host';

/** HTTP method override accepted by the OmniPlayr API helper.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/api.html#api-requests)
 */
export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS' | string;

/** URL parameter values used to replace `{placeholder}` segments in API paths.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/api.html#url-parameters)
 */
export type ApiParams = Record<string, string | number | boolean | null | undefined>;

/** JSON object body sent by the API helper.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/api.html#api-requests)
 */
export type ApiBody = object;

/** Error thrown by the API helper for non-2xx responses when `throwErrors` is true.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/api.html#handling-errors-manually)
 */
export interface ApiError extends Error {
  /** HTTP status code returned by the backend. */
  status: number;
}

/**
 * OmniPlayr API helper type. Prefer this over fetch so configured backend URL,
 * Authorization, and X-Account-Token headers are handled automatically.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/api.html#signature)
 */
export interface ApiClient {
  /** Call an API path or named route and parse the JSON response. */
  (
    idOrPath: string,
    data?: ApiBody,
    params?: ApiParams,
    throwErrors?: boolean,
    stream?: false,
    methodOverride?: ApiMethod
  ): Promise<unknown>;
  /** Call an API path or named route and return the raw Response for streams/blobs. */
  (
    idOrPath: string,
    data: ApiBody | undefined,
    params: ApiParams | undefined,
    throwErrors: boolean | undefined,
    stream: true,
    methodOverride?: ApiMethod
  ): Promise<Response>;
}

/**
 * Make an authenticated request to the OmniPlayr backend.
 * Use `/plugin/...` paths for plugin routes, for example `api('/plugin/my-plugin/tracks')`.
 *
 * [Read documentation](https://omniplayr.wokki20.nl/docs/plugins/building/frontend/api.html#api-requests)
 */
export const api: ApiClient = ((...args: Parameters<ApiClient>) => {
  return requireHostApi('api')(...args);
}) as ApiClient;

export default api;
