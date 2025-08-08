// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Create a reusable action template for workflows. Actions define API calls that
   * can be executed within workflow steps.
   *
   * @example
   * ```ts
   * const action = await client.actions.create({
   *   endpoint: '/api/chat.postMessage',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     Authorization: 'Bearer {token}',
   *   },
   *   inputSchema: [{}, {}],
   *   key: 'slack_send_message',
   *   method: 'POST',
   *   name: 'Send Slack Message',
   *   toolId: 'tool_slack_123',
   * });
   * ```
   */
  create(body: ActionCreateParams, options?: RequestOptions): APIPromise<ActionCreateResponse> {
    return this._client.post('/actions', { body, ...options });
  }

  /**
   * Get a specific action template by ID
   *
   * @example
   * ```ts
   * const action = await client.actions.retrieve(
   *   'action_abc123',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ActionRetrieveResponse> {
    return this._client.get(path`/actions/${id}`, options);
  }

  /**
   * Update an action template configuration
   *
   * @example
   * ```ts
   * await client.actions.update('action_abc123');
   * ```
   */
  update(id: string, body: ActionUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/actions/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all reusable action templates for the organization
   *
   * @example
   * ```ts
   * const actions = await client.actions.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ActionListResponse> {
    return this._client.get('/actions', options);
  }

  /**
   * Delete an action template permanently. This will affect any workflows that use
   * this action.
   *
   * @example
   * ```ts
   * await client.actions.delete('action_abc123');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/actions/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ActionCreateResponse {
  id?: string;

  createdAt?: string;

  endpoint?: string;

  executeIf?: unknown;

  headers?: unknown;

  inputSchema?: Array<unknown>;

  key?: string;

  method?: string;

  name?: string;

  toolId?: string;

  updatedAt?: string;

  version?: number;
}

export interface ActionRetrieveResponse {
  id?: string;

  createdAt?: string;

  endpoint?: string;

  executeIf?: unknown;

  headers?: unknown;

  inputSchema?: Array<unknown>;

  key?: string;

  method?: string;

  name?: string;

  toolId?: string;

  updatedAt?: string;

  version?: number;
}

export type ActionListResponse = Array<ActionListResponse.ActionListResponseItem>;

export namespace ActionListResponse {
  export interface ActionListResponseItem {
    id?: string;

    createdAt?: string;

    endpoint?: string;

    executeIf?: unknown;

    headers?: unknown;

    inputSchema?: Array<unknown>;

    key?: string;

    method?: string;

    name?: string;

    toolId?: string;

    updatedAt?: string;

    version?: number;
  }
}

export interface ActionCreateParams {
  /**
   * API endpoint URL or path
   */
  endpoint: string;

  /**
   * HTTP headers required for the action
   */
  headers: unknown;

  /**
   * Schema defining input parameters for the action
   */
  inputSchema: Array<ActionCreateParams.InputSchema>;

  /**
   * Unique identifier for the action
   */
  key: string;

  /**
   * HTTP method for the action
   */
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

  /**
   * Human-readable action name
   */
  name: string;

  /**
   * ID of the associated tool
   */
  toolId: string;

  /**
   * Conditional execution rules (optional)
   */
  executeIf?: unknown;

  /**
   * Action version number
   */
  version?: number;
}

export namespace ActionCreateParams {
  export interface InputSchema {
    description?: string;

    name?: string;

    required?: boolean;

    type?: string;
  }
}

export interface ActionUpdateParams {
  /**
   * API endpoint URL or path
   */
  endpoint?: string;

  /**
   * Conditional execution rules (optional)
   */
  executeIf?: unknown;

  /**
   * HTTP headers required for the action
   */
  headers?: unknown;

  /**
   * Schema defining input parameters for the action
   */
  inputSchema?: Array<ActionUpdateParams.InputSchema>;

  /**
   * Unique identifier for the action
   */
  key?: string;

  /**
   * HTTP method for the action
   */
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

  /**
   * Human-readable action name
   */
  name?: string;

  /**
   * ID of the associated tool
   */
  toolId?: string;

  /**
   * Action version number
   */
  version?: number;
}

export namespace ActionUpdateParams {
  export interface InputSchema {
    description?: string;

    name?: string;

    required?: boolean;

    type?: string;
  }
}

export declare namespace Actions {
  export {
    type ActionCreateResponse as ActionCreateResponse,
    type ActionRetrieveResponse as ActionRetrieveResponse,
    type ActionListResponse as ActionListResponse,
    type ActionCreateParams as ActionCreateParams,
    type ActionUpdateParams as ActionUpdateParams,
  };
}
