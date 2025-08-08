// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Secrets extends APIResource {
  /**
   * Retrieve stored credentials for a tool. By default returns masked values for
   * security. Use unmask=true to get actual values (use carefully).
   *
   * @example
   * ```ts
   * const secret = await client.tools.secrets.retrieve(
   *   'tool_slack_123',
   * );
   * ```
   */
  retrieve(
    toolID: string,
    query: SecretRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SecretRetrieveResponse> {
    return this._client.get(path`/tools/${toolID}/secrets`, { query, ...options });
  }

  /**
   * Get all tools in the organization with their credential status. Shows which
   * tools have credentials stored and which ones need setup.
   *
   * @example
   * ```ts
   * const secrets = await client.tools.secrets.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<SecretListResponse> {
    return this._client.get('/tools/secrets', options);
  }

  /**
   * Permanently delete stored credentials for a tool. This will affect any workflows
   * that use this tool.
   *
   * @example
   * ```ts
   * await client.tools.secrets.delete('tool_slack_123');
   * ```
   */
  delete(toolID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/tools/${toolID}/secrets`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Securely store encrypted credentials for an external tool. These credentials
   * will be used when the tool is executed in workflows.
   *
   * @example
   * ```ts
   * const response = await client.tools.secrets.store(
   *   'tool_slack_123',
   *   {
   *     credentials: {
   *       apiKey: 'your-api-key-here',
   *       webhookUrl:
   *         'https://hooks.slack.com/services/YOUR/WEBHOOK/URL',
   *       botToken: 'your-bot-token-here',
   *     },
   *   },
   * );
   * ```
   */
  store(toolID: string, body: SecretStoreParams, options?: RequestOptions): APIPromise<SecretStoreResponse> {
    return this._client.post(path`/tools/${toolID}/secrets`, { body, ...options });
  }
}

export type SecretRetrieveResponse =
  | SecretRetrieveResponse.MaskedCredentialsResponse
  | SecretRetrieveResponse.UnmaskedCredentialsResponseUnmaskTrue;

export namespace SecretRetrieveResponse {
  export interface MaskedCredentialsResponse {
    createdAt?: string;

    maskedCredentials?: unknown;

    toolId?: string;

    toolName?: string;

    updatedAt?: string;
  }

  export interface UnmaskedCredentialsResponseUnmaskTrue {
    createdAt?: string;

    credentials?: unknown;

    maskedCredentials?: unknown;

    toolId?: string;

    toolName?: string;

    updatedAt?: string;
  }
}

export type SecretListResponse = Array<SecretListResponse.SecretListResponseItem>;

export namespace SecretListResponse {
  export interface SecretListResponseItem {
    /**
     * List of credential keys (if credentials exist)
     */
    credentialKeys?: Array<string>;

    /**
     * Whether credentials are stored for this tool
     */
    hasCredentials?: boolean;

    /**
     * When credentials were last updated (if they exist)
     */
    lastUpdated?: string;

    toolId?: string;

    toolName?: string;

    toolType?: string;
  }
}

export interface SecretStoreResponse {
  createdAt?: string;

  maskedCredentials?: unknown;

  toolId?: string;

  toolName?: string;

  updatedAt?: string;
}

export interface SecretRetrieveParams {
  /**
   * Whether to return unmasked credential values (use with extreme caution)
   */
  unmask?: 'true' | 'false';
}

export interface SecretStoreParams {
  /**
   * Key-value pairs of credentials (will be encrypted)
   */
  credentials: unknown;
}

export declare namespace Secrets {
  export {
    type SecretRetrieveResponse as SecretRetrieveResponse,
    type SecretListResponse as SecretListResponse,
    type SecretStoreResponse as SecretStoreResponse,
    type SecretRetrieveParams as SecretRetrieveParams,
    type SecretStoreParams as SecretStoreParams,
  };
}
