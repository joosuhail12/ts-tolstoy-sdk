// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Executions extends APIResource {
  /**
   * Get detailed status of a specific flow execution
   *
   * @example
   * ```ts
   * const execution = await client.flows.executions.retrieve(
   *   'exec_abc123',
   *   { id: 'flow_abc123' },
   * );
   * ```
   */
  retrieve(
    executionID: string,
    params: ExecutionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ExecutionRetrieveResponse> {
    const { id } = params;
    return this._client.get(path`/flows/${id}/executions/${executionID}`, options);
  }

  /**
   * Get execution history for a specific flow
   *
   * @example
   * ```ts
   * const executions = await client.flows.executions.list(
   *   'flow_abc123',
   * );
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<ExecutionListResponse> {
    return this._client.get(path`/flows/${id}/executions`, options);
  }

  /**
   * Cancel a running flow execution
   *
   * @example
   * ```ts
   * await client.flows.executions.cancel('exec_abc123', {
   *   id: 'flow_abc123',
   * });
   * ```
   */
  cancel(executionID: string, params: ExecutionCancelParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.post(path`/flows/${id}/executions/${executionID}/cancel`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retry a failed flow execution
   *
   * @example
   * ```ts
   * const response = await client.flows.executions.retry(
   *   'exec_abc123',
   *   { id: 'flow_abc123' },
   * );
   * ```
   */
  retry(
    executionID: string,
    params: ExecutionRetryParams,
    options?: RequestOptions,
  ): APIPromise<ExecutionRetryResponse> {
    const { id } = params;
    return this._client.post(path`/flows/${id}/executions/${executionID}/retry`, options);
  }
}

export interface ExecutionRetrieveResponse {
  currentStep?: string;

  executionId?: string;

  output?: unknown;

  progress?: number;

  startedAt?: string;

  status?: string;

  variables?: unknown;
}

export type ExecutionListResponse = Array<ExecutionListResponse.ExecutionListResponseItem>;

export namespace ExecutionListResponse {
  export interface ExecutionListResponseItem {
    completedAt?: string;

    executionId?: string;

    startedAt?: string;

    status?: string;

    variables?: unknown;
  }
}

export interface ExecutionRetryResponse {
  newExecutionId?: string;

  retryAttempt?: number;

  status?: string;
}

export interface ExecutionRetrieveParams {
  /**
   * Flow ID
   */
  id: string;
}

export interface ExecutionCancelParams {
  /**
   * Flow ID
   */
  id: string;
}

export interface ExecutionRetryParams {
  /**
   * Flow ID
   */
  id: string;
}

export declare namespace Executions {
  export {
    type ExecutionRetrieveResponse as ExecutionRetrieveResponse,
    type ExecutionListResponse as ExecutionListResponse,
    type ExecutionRetryResponse as ExecutionRetryResponse,
    type ExecutionRetrieveParams as ExecutionRetrieveParams,
    type ExecutionCancelParams as ExecutionCancelParams,
    type ExecutionRetryParams as ExecutionRetryParams,
  };
}
