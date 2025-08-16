// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Status extends APIResource {
  /**
   * Get basic application health status
   */
  retrieve(options?: RequestOptions): APIPromise<StatusRetrieveResponse> {
    return this._client.get('/status', options);
  }
}

export interface StatusRetrieveResponse {
  status?: string;

  timestamp?: string;

  uptime?: number;

  version?: string;
}

export declare namespace Status {
  export { type StatusRetrieveResponse as StatusRetrieveResponse };
}
