// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExecutionsAPI from './executions';
import {
  ExecutionCancelParams,
  ExecutionListResponse,
  ExecutionRetrieveParams,
  ExecutionRetrieveResponse,
  ExecutionRetryParams,
  ExecutionRetryResponse,
  Executions,
} from './executions';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Flows extends APIResource {
  executions: ExecutionsAPI.Executions = new ExecutionsAPI.Executions(this._client);

  /**
   * Create a new workflow with steps and configuration
   *
   * @example
   * ```ts
   * const flow = await client.flows.create({
   *   name: 'User Onboarding Flow',
   *   steps: [{}],
   * });
   * ```
   */
  create(body: FlowCreateParams, options?: RequestOptions): APIPromise<FlowCreateResponse> {
    return this._client.post('/flows', { body, ...options });
  }

  /**
   * Get a specific workflow by ID
   *
   * @example
   * ```ts
   * await client.flows.retrieve('flow_abc123');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/flows/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update workflow definition and configuration
   *
   * @example
   * ```ts
   * await client.flows.update('flow_abc123');
   * ```
   */
  update(id: string, body: FlowUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/flows/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all workflows for the organization
   *
   * @example
   * ```ts
   * const flows = await client.flows.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<FlowListResponse> {
    return this._client.get('/flows', options);
  }

  /**
   * Delete a workflow permanently
   *
   * @example
   * ```ts
   * await client.flows.delete('flow_abc123');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/flows/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Execute a workflow either synchronously or asynchronously with optional input
   * variables
   *
   * @example
   * ```ts
   * const response = await client.flows.execute('flow_abc123');
   * ```
   */
  execute(id: string, body: FlowExecuteParams, options?: RequestOptions): APIPromise<FlowExecuteResponse> {
    return this._client.post(path`/flows/${id}/execute`, { body, ...options });
  }

  /**
   * Get execution metrics and statistics for a flow
   *
   * @example
   * ```ts
   * const response = await client.flows.getMetrics(
   *   'flow_abc123',
   * );
   * ```
   */
  getMetrics(id: string, options?: RequestOptions): APIPromise<FlowGetMetricsResponse> {
    return this._client.get(path`/flows/${id}/metrics`, options);
  }
}

export interface FlowCreateResponse {
  id?: string;

  createdAt?: string;

  description?: string;

  name?: string;

  settings?: unknown;

  steps?: Array<unknown>;

  updatedAt?: string;

  version?: number;
}

export type FlowListResponse = Array<FlowListResponse.FlowListResponseItem>;

export namespace FlowListResponse {
  export interface FlowListResponseItem {
    id?: string;

    createdAt?: string;

    name?: string;

    steps?: Array<unknown>;

    updatedAt?: string;

    version?: number;
  }
}

export interface FlowExecuteResponse {
  executionId?: string;

  mode?: string;

  status?: string;
}

export interface FlowGetMetricsResponse {
  averageExecutionTime?: number;

  failedExecutions?: number;

  lastExecutionAt?: string;

  successfulExecutions?: number;

  successRate?: number;

  totalExecutions?: number;
}

export interface FlowCreateParams {
  /**
   * Flow name
   */
  name: string;

  /**
   * Workflow steps definition
   */
  steps: Array<FlowCreateParams.Step>;

  /**
   * Flow description
   */
  description?: string;

  /**
   * Flow execution settings
   */
  settings?: unknown;

  /**
   * Flow version number
   */
  version?: number;
}

export namespace FlowCreateParams {
  export interface Step {
    id?: string;

    actionId?: string;

    config?: unknown;

    type?: string;
  }
}

export interface FlowUpdateParams {}

export interface FlowExecuteParams {
  /**
   * Whether to use durable (async) execution
   */
  useDurable?: boolean;

  /**
   * Input variables for the flow execution
   */
  variables?: unknown;
}

Flows.Executions = Executions;

export declare namespace Flows {
  export {
    type FlowCreateResponse as FlowCreateResponse,
    type FlowListResponse as FlowListResponse,
    type FlowExecuteResponse as FlowExecuteResponse,
    type FlowGetMetricsResponse as FlowGetMetricsResponse,
    type FlowCreateParams as FlowCreateParams,
    type FlowUpdateParams as FlowUpdateParams,
    type FlowExecuteParams as FlowExecuteParams,
  };

  export {
    Executions as Executions,
    type ExecutionRetrieveResponse as ExecutionRetrieveResponse,
    type ExecutionListResponse as ExecutionListResponse,
    type ExecutionRetryResponse as ExecutionRetryResponse,
    type ExecutionRetrieveParams as ExecutionRetrieveParams,
    type ExecutionCancelParams as ExecutionCancelParams,
    type ExecutionRetryParams as ExecutionRetryParams,
  };
}
