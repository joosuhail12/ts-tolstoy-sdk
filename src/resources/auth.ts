// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Auth extends APIResource {
  /**
   * Processes the authorization code returned by the OAuth provider, exchanges it
   * for access tokens, and stores the user credentials.
   */
  oauthCallback(
    toolKey: string,
    query: AuthOAuthCallbackParams,
    options?: RequestOptions,
  ): APIPromise<AuthOAuthCallbackResponse> {
    return this._client.get(path`/auth/${toolKey}/callback`, { query, ...options });
  }

  /**
   * Redirects the user to the OAuth provider authorization page. The user must grant
   * permission, after which they will be redirected back to the callback endpoint.
   */
  oauthLogin(toolKey: string, query: AuthOAuthLoginParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/auth/${toolKey}/login`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AuthOAuthCallbackResponse {
  /**
   * Whether OAuth callback was successful
   */
  success: boolean;

  /**
   * User credential ID that was created/updated
   */
  credentialId?: string;

  /**
   * Success message
   */
  message?: string;
}

export interface AuthOAuthCallbackParams {
  /**
   * Authorization code from OAuth provider
   */
  code: string;

  /**
   * State parameter to validate request origin
   */
  state: string;

  /**
   * Error code if authorization was denied
   */
  error?: string;

  /**
   * Human-readable error description
   */
  error_description?: string;
}

export interface AuthOAuthLoginParams {
  /**
   * User ID for whom to initiate OAuth
   */
  userId: string;
}

export declare namespace Auth {
  export {
    type AuthOAuthCallbackResponse as AuthOAuthCallbackResponse,
    type AuthOAuthCallbackParams as AuthOAuthCallbackParams,
    type AuthOAuthLoginParams as AuthOAuthLoginParams,
  };
}
