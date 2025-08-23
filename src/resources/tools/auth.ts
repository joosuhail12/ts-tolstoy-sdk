// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Auth extends APIResource {
  /**
   * Retrieves authentication configuration(s) for a specific tool within an
   * organization. Use configName query parameter to get a specific configuration, or
   * omit to list all configurations.
   *
   * @example
   * ```ts
   * const auth = await client.tools.auth.retrieve('tool-123');
   * ```
   */
  retrieve(
    toolID: string,
    query: AuthRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AuthRetrieveResponse> {
    return this._client.get(path`/tools/${toolID}/auth`, { query, ...options });
  }

  /**
   * Removes authentication configuration(s) for a specific tool within an
   * organization. Use configName query parameter to delete a specific configuration,
   * or use deleteAll=true to delete all configurations.
   *
   * @example
   * ```ts
   * const auth = await client.tools.auth.delete('tool-123');
   * ```
   */
  delete(
    toolID: string,
    params: AuthDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AuthDeleteResponse> {
    const { configName, deleteAll } = params ?? {};
    return this._client.delete(path`/tools/${toolID}/auth`, { query: { configName, deleteAll }, ...options });
  }

  /**
   * Configures authentication settings (API Key or OAuth2) for a specific tool
   * within an organization. API Key auth requires headerName and headerValue. OAuth2
   * auth requires clientId, clientSecret, and accessToken. A default callback URL is
   * automatically added for OAuth2 configurations.
   *
   * @example
   * ```ts
   * const response = await client.tools.auth.upsert(
   *   'tool-123',
   *   {
   *     config: {
   *       headerName: 'Authorization',
   *       headerValue: 'Bearer sk-1234567890abcdef',
   *     },
   *     name: 'production',
   *     type: 'apiKey',
   *   },
   * );
   * ```
   */
  upsert(toolID: string, body: AuthUpsertParams, options?: RequestOptions): APIPromise<AuthUpsertResponse> {
    return this._client.post(path`/tools/${toolID}/auth`, { body, ...options });
  }
}

export type AuthRetrieveResponse = AuthRetrieveResponse.AuthConfigResponseDto | unknown;

export namespace AuthRetrieveResponse {
  export interface AuthConfigResponseDto {
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
     * Whether this is the default configuration for the tool
     */
    isDefault: boolean;

    /**
     * Configuration name
     */
    name: string;

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
   * Whether this is the default configuration for the tool
   */
  isDefault: boolean;

  /**
   * Configuration name
   */
  name: string;

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

export interface AuthRetrieveParams {
  /**
   * Name of specific configuration to retrieve (optional)
   */
  configName?: string;
}

export interface AuthDeleteParams {
  /**
   * Name of specific configuration to delete (optional)
   */
  configName?: string;

  /**
   * Delete all configurations for the tool (optional)
   */
  deleteAll?: boolean;
}

export interface AuthUpsertParams {
  /**
   * Authentication configuration (structure depends on type)
   */
  config: AuthUpsertParams.APIKeyConfiguration | AuthUpsertParams.OAuth2Configuration;

  /**
   * Name for this configuration (e.g., "production", "staging", "development")
   */
  name: string;

  /**
   * Type of authentication configuration
   */
  type: 'apiKey' | 'oauth2';

  /**
   * Whether this should be the default configuration for the tool
   */
  isDefault?: boolean;
}

export namespace AuthUpsertParams {
  export interface APIKeyConfiguration {
    headerName: string;

    headerValue: string;
  }

  export interface OAuth2Configuration {
    accessToken: string;

    clientId: string;

    clientSecret: string;

    expiresAt?: string;

    refreshToken?: string;

    scopes?: string;
  }
}

export declare namespace Auth {
  export {
    type AuthRetrieveResponse as AuthRetrieveResponse,
    type AuthDeleteResponse as AuthDeleteResponse,
    type AuthUpsertResponse as AuthUpsertResponse,
    type AuthRetrieveParams as AuthRetrieveParams,
    type AuthDeleteParams as AuthDeleteParams,
    type AuthUpsertParams as AuthUpsertParams,
  };
}
