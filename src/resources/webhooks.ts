// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Webhooks extends APIResource {
  /**
   * Create a new webhook to receive event notifications
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.create({
   *   eventTypes: [
   *     'flow.execution.completed',
   *     'flow.execution.failed',
   *   ],
   *   url: 'https://api.example.com/webhook',
   * });
   * ```
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookCreateResponse> {
    return this._client.post('/webhooks', { body, ...options });
  }

  /**
   * Get a specific webhook by ID
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.retrieve(
   *   'webhook_abc123',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WebhookRetrieveResponse> {
    return this._client.get(path`/webhooks/${id}`, options);
  }

  /**
   * Update webhook configuration
   *
   * @example
   * ```ts
   * await client.webhooks.update('webhook_abc123');
   * ```
   */
  update(id: string, body: WebhookUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/webhooks/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all webhooks for the organization, optionally filtered by event type
   *
   * @example
   * ```ts
   * const webhooks = await client.webhooks.list();
   * ```
   */
  list(
    query: WebhookListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookListResponse> {
    return this._client.get('/webhooks', { query, ...options });
  }

  /**
   * Delete a webhook permanently
   *
   * @example
   * ```ts
   * await client.webhooks.delete('webhook_abc123');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get list of all valid event types that can be subscribed to via webhooks
   *
   * @example
   * ```ts
   * const response = await client.webhooks.getValidEventTypes();
   * ```
   */
  getValidEventTypes(options?: RequestOptions): APIPromise<WebhookGetValidEventTypesResponse> {
    return this._client.get('/webhooks/event-types', options);
  }

  /**
   * Send a test payload to verify webhook endpoint is working
   *
   * @example
   * ```ts
   * const response = await client.webhooks.test(
   *   'webhook_abc123',
   * );
   * ```
   */
  test(id: string, options?: RequestOptions): APIPromise<WebhookTestResponse> {
    return this._client.post(path`/webhooks/${id}/test`, options);
  }

  /**
   * Enable or disable a webhook
   *
   * @example
   * ```ts
   * const response = await client.webhooks.toggle(
   *   'webhook_abc123',
   * );
   * ```
   */
  toggle(id: string, options?: RequestOptions): APIPromise<WebhookToggleResponse> {
    return this._client.patch(path`/webhooks/${id}/toggle`, options);
  }
}

export interface WebhookCreateResponse {
  id?: string;

  createdAt?: string;

  enabled?: boolean;

  eventTypes?: Array<string>;

  updatedAt?: string;

  url?: string;
}

export interface WebhookRetrieveResponse {
  id?: string;

  createdAt?: string;

  enabled?: boolean;

  eventTypes?: Array<string>;

  updatedAt?: string;

  url?: string;
}

export type WebhookListResponse = Array<WebhookListResponse.WebhookListResponseItem>;

export namespace WebhookListResponse {
  export interface WebhookListResponseItem {
    id?: string;

    createdAt?: string;

    enabled?: boolean;

    eventTypes?: Array<string>;

    updatedAt?: string;

    url?: string;
  }
}

export interface WebhookGetValidEventTypesResponse {
  eventTypes?: Array<string>;
}

export interface WebhookTestResponse {
  message?: string;

  statusCode?: number;

  success?: boolean;
}

export interface WebhookToggleResponse {
  id?: string;

  enabled?: boolean;

  updatedAt?: string;
}

export interface WebhookCreateParams {
  /**
   * Event types to subscribe to
   */
  eventTypes: Array<string>;

  /**
   * Webhook endpoint URL
   */
  url: string;

  /**
   * Whether the webhook is active
   */
  enabled?: boolean;

  /**
   * Optional secret for webhook signature verification
   */
  secret?: string;
}

export interface WebhookUpdateParams {
  /**
   * Whether the webhook is active
   */
  enabled?: boolean;

  /**
   * Event types to subscribe to
   */
  eventTypes?: Array<string>;

  /**
   * Optional secret for webhook signature verification
   */
  secret?: string;

  /**
   * Webhook endpoint URL
   */
  url?: string;
}

export interface WebhookListParams {
  /**
   * Filter webhooks by event type
   */
  eventType?: string;
}

export declare namespace Webhooks {
  export {
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookRetrieveResponse as WebhookRetrieveResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookGetValidEventTypesResponse as WebhookGetValidEventTypesResponse,
    type WebhookTestResponse as WebhookTestResponse,
    type WebhookToggleResponse as WebhookToggleResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
  };
}
