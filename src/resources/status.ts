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

  /**
   * Get comprehensive health status including database, environment, and system
   * information
   */
  retrieveDetailed(options?: RequestOptions): APIPromise<StatusRetrieveDetailedResponse> {
    return this._client.get('/status/detailed', options);
  }
}

export interface StatusRetrieveResponse {
  status?: string;

  timestamp?: string;

  uptime?: number;

  version?: string;
}

export interface StatusRetrieveDetailedResponse {
  application?: StatusRetrieveDetailedResponse.Application;

  database?: StatusRetrieveDetailedResponse.Database;

  /**
   * Environment configuration (sensitive values masked)
   */
  environment?: unknown;

  /**
   * System information
   */
  system?: unknown;
}

export namespace StatusRetrieveDetailedResponse {
  export interface Application {
    status?: string;

    timestamp?: string;

    uptime?: number;

    version?: string;
  }

  export interface Database {
    connection?: string;

    responseTime?: number;

    status?: string;
  }
}

export declare namespace Status {
  export {
    type StatusRetrieveResponse as StatusRetrieveResponse,
    type StatusRetrieveDetailedResponse as StatusRetrieveDetailedResponse,
  };
}
