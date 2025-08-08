// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Auth extends APIResource {
  /**
   * Retrieves the authentication configuration for a specific tool within an
   * organization. Sensitive values may be masked in the response.
   *
   * @example
   * ```ts
   * const auth = await client.tools.auth.retrieve('tool-123');
   * ```
   */
  retrieve(toolID: string, options?: RequestOptions): APIPromise<AuthRetrieveResponse> {
    return this._client.get(path`/tools/${toolID}/auth`, options);
  }

  /**
   * Removes the authentication configuration for a specific tool within an
   * organization. This action also cleans up associated secrets and cache entries.
   *
   * @example
   * ```ts
   * const auth = await client.tools.auth.delete('tool-123');
   * ```
   */
  delete(toolID: string, options?: RequestOptions): APIPromise<AuthDeleteResponse> {
    return this._client.delete(path`/tools/${toolID}/auth`, options);
  }

  /**
   * Configures authentication settings (API Key or OAuth2) for a specific tool
   * within an organization. This endpoint supports both creating new configurations
   * and updating existing ones.
   *
   * @example
   * ```ts
   * const response = await client.tools.auth.upsert(
   *   'tool-123',
   *   { config: {}, type: 'apiKey' },
   * );
   * ```
   */
  upsert(toolID: string, body: AuthUpsertParams, options?: RequestOptions): APIPromise<AuthUpsertResponse> {
    return this._client.post(path`/tools/${toolID}/auth`, { body, ...options });
  }
}

export interface AuthRetrieveResponse {
  /**
   * Unique identifier for the auth config
   */
  id: string;

  /**
   * Authentication configuration (sensitive values may be masked)
   */
  config: unknown;

  /**
   * Creation timestamp
   */
  createdAt: string;

  /**
   * Organization ID
   */
  orgId: string;

  /**
   * Tool ID
   */
  toolId: string;

  /**
   * Type of authentication configuration
   */
  type: 'apiKey' | 'oauth2';

  /**
   * Last update timestamp
   */
  updatedAt: string;
}

export interface AuthDeleteResponse {
  /**
   * Success message
   */
  message: string;

  /**
   * Operation success status
   */
  success: boolean;
}

export interface AuthUpsertResponse {
  /**
   * Unique identifier for the auth config
   */
  id: string;

  /**
   * Authentication configuration (sensitive values may be masked)
   */
  config: unknown;

  /**
   * Creation timestamp
   */
  createdAt: string;

  /**
   * Organization ID
   */
  orgId: string;

  /**
   * Tool ID
   */
  toolId: string;

  /**
   * Type of authentication configuration
   */
  type: 'apiKey' | 'oauth2';

  /**
   * Last update timestamp
   */
  updatedAt: string;
}

export interface AuthUpsertParams {
  /**
   * Authentication configuration JSON
   */
  config: unknown;

  /**
   * Type of authentication configuration
   */
  type: 'apiKey' | 'oauth2';
}

export declare namespace Auth {
  export {
    type AuthRetrieveResponse as AuthRetrieveResponse,
    type AuthDeleteResponse as AuthDeleteResponse,
    type AuthUpsertResponse as AuthUpsertResponse,
    type AuthUpsertParams as AuthUpsertParams,
  };
}
