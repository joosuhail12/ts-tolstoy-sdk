// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ExecutionLogs extends APIResource {
  /**
   * Create a log entry for workflow step execution. This tracks the execution
   * history, inputs, outputs, and any errors.
   *
   * @example
   * ```ts
   * const executionLog = await client.executionLogs.create({
   *   executionId: 'exec_xyz789',
   *   flowId: 'flow_abc123',
   *   inputs: {
   *     channel: '#general',
   *     message: 'Workflow started',
   *     userId: 'user_123',
   *   },
   *   status: 'completed',
   *   stepKey: 'send_notification',
   * });
   * ```
   */
  create(body: ExecutionLogCreateParams, options?: RequestOptions): APIPromise<ExecutionLogCreateResponse> {
    return this._client.post('/execution-logs', { body, ...options });
  }

  /**
   * Get a specific execution log entry by ID
   *
   * @example
   * ```ts
   * const executionLog = await client.executionLogs.retrieve(
   *   'log_def456',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ExecutionLogRetrieveResponse> {
    return this._client.get(path`/execution-logs/${id}`, options);
  }

  /**
   * Update execution log entry. Typically used to add outputs or update status after
   * step completion.
   *
   * @example
   * ```ts
   * await client.executionLogs.update('log_def456');
   * ```
   */
  update(id: string, body: ExecutionLogUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/execution-logs/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all execution logs for the organization. This provides a complete history of
   * workflow step executions.
   *
   * @example
   * ```ts
   * const executionLogs = await client.executionLogs.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ExecutionLogListResponse> {
    return this._client.get('/execution-logs', options);
  }

  /**
   * Delete an execution log entry. Use with caution as this removes audit trail
   * information.
   *
   * @example
   * ```ts
   * await client.executionLogs.delete('log_def456');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/execution-logs/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ExecutionLogCreateResponse {
  id?: string;

  createdAt?: string;

  error?: unknown;

  executionId?: string;

  flowId?: string;

  inputs?: unknown;

  outputs?: unknown;

  status?: string;

  stepKey?: string;

  updatedAt?: string;
}

export interface ExecutionLogRetrieveResponse {
  id?: string;

  createdAt?: string;

  error?: unknown;

  executionId?: string;

  flowId?: string;

  inputs?: unknown;

  outputs?: unknown;

  status?: string;

  stepKey?: string;

  updatedAt?: string;
}

export type ExecutionLogListResponse = Array<ExecutionLogListResponse.ExecutionLogListResponseItem>;

export namespace ExecutionLogListResponse {
  export interface ExecutionLogListResponseItem {
    id?: string;

    createdAt?: string;

    error?: unknown;

    executionId?: string;

    flowId?: string;

    inputs?: unknown;

    outputs?: unknown;

    status?: string;

    stepKey?: string;

    updatedAt?: string;
  }
}

export interface ExecutionLogCreateParams {
  /**
   * Unique execution instance ID
   */
  executionId: string;

  /**
   * ID of the workflow being executed
   */
  flowId: string;

  /**
   * Input data provided to the step
   */
  inputs: unknown;

  /**
   * Execution status
   */
  status: 'pending' | 'running' | 'completed' | 'failed';

  /**
   * Unique identifier for the step within the workflow
   */
  stepKey: string;

  /**
   * Error information if step failed
   */
  error?: unknown;

  /**
   * Output data produced by the step
   */
  outputs?: unknown;
}

export interface ExecutionLogUpdateParams {}

export declare namespace ExecutionLogs {
  export {
    type ExecutionLogCreateResponse as ExecutionLogCreateResponse,
    type ExecutionLogRetrieveResponse as ExecutionLogRetrieveResponse,
    type ExecutionLogListResponse as ExecutionLogListResponse,
    type ExecutionLogCreateParams as ExecutionLogCreateParams,
    type ExecutionLogUpdateParams as ExecutionLogUpdateParams,
  };
}
