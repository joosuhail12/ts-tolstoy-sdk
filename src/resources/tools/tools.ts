// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthAPI from './auth';
import {
  Auth,
  AuthDeleteParams,
  AuthDeleteResponse,
  AuthRetrieveParams,
  AuthRetrieveResponse,
  AuthUpsertParams,
  AuthUpsertResponse,
} from './auth';
import * as SecretsAPI from './secrets';
import {
  SecretListResponse,
  SecretRetrieveParams,
  SecretRetrieveResponse,
  SecretStoreParams,
  SecretStoreResponse,
  Secrets,
} from './secrets';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tools extends APIResource {
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);

  /**
   * Register a new external tool for use in workflows
   *
   * @example
   * ```ts
   * const tool = await client.tools.create({
   *   authType: 'apiKey',
   *   baseUrl: 'https://hooks.slack.com/services',
   *   name: 'Slack Notifier',
   * });
   * ```
   */
  create(body: ToolCreateParams, options?: RequestOptions): APIPromise<ToolCreateResponse> {
    return this._client.post('/tools', { body, ...options });
  }

  /**
   * Get a specific tool by ID
   *
   * @example
   * ```ts
   * const tool = await client.tools.retrieve('tool_abc123');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ToolRetrieveResponse> {
    return this._client.get(path`/tools/${id}`, options);
  }

  /**
   * Update tool configuration
   *
   * @example
   * ```ts
   * await client.tools.update('tool_abc123');
   * ```
   */
  update(id: string, body: ToolUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/tools/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all registered tools for the organization
   *
   * @example
   * ```ts
   * const tools = await client.tools.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ToolListResponse> {
    return this._client.get('/tools', options);
  }

  /**
   * Delete a tool permanently (will affect workflows using this tool)
   *
   * @example
   * ```ts
   * await client.tools.delete('tool_abc123');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/tools/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ToolCreateResponse {
  id?: string;

  authType?: string;

  baseUrl?: string;

  createdAt?: string;

  name?: string;

  orgId?: string;

  updatedAt?: string;
}

export interface ToolRetrieveResponse {
  id?: string;

  configuration?: unknown;

  createdAt?: string;

  description?: string;

  name?: string;

  type?: string;

  updatedAt?: string;

  version?: string;
}

export type ToolListResponse = Array<ToolListResponse.ToolListResponseItem>;

export namespace ToolListResponse {
  export interface ToolListResponseItem {
    id?: string;

    configuration?: unknown;

    createdAt?: string;

    description?: string;

    name?: string;

    type?: string;

    updatedAt?: string;

    version?: string;
  }
}

export interface ToolCreateParams {
  /**
   * Authentication type (apiKey, oauth2, basic)
   */
  authType: string;

  /**
   * Base URL for the tool API
   */
  baseUrl: string;

  /**
   * Tool name
   */
  name: string;
}

export interface ToolUpdateParams {}

Tools.Secrets = Secrets;
Tools.Auth = Auth;

export declare namespace Tools {
  export {
    type ToolCreateResponse as ToolCreateResponse,
    type ToolRetrieveResponse as ToolRetrieveResponse,
    type ToolListResponse as ToolListResponse,
    type ToolCreateParams as ToolCreateParams,
    type ToolUpdateParams as ToolUpdateParams,
  };

  export {
    Secrets as Secrets,
    type SecretRetrieveResponse as SecretRetrieveResponse,
    type SecretListResponse as SecretListResponse,
    type SecretStoreResponse as SecretStoreResponse,
    type SecretRetrieveParams as SecretRetrieveParams,
    type SecretStoreParams as SecretStoreParams,
  };

  export {
    Auth as Auth,
    type AuthRetrieveResponse as AuthRetrieveResponse,
    type AuthDeleteResponse as AuthDeleteResponse,
    type AuthUpsertResponse as AuthUpsertResponse,
    type AuthRetrieveParams as AuthRetrieveParams,
    type AuthDeleteParams as AuthDeleteParams,
    type AuthUpsertParams as AuthUpsertParams,
  };
}
