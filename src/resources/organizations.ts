// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Organizations extends APIResource {
  /**
   * Create a new organization
   *
   * @example
   * ```ts
   * const organization = await client.organizations.create({
   *   name: 'Acme Corp',
   * });
   * ```
   */
  create(body: OrganizationCreateParams, options?: RequestOptions): APIPromise<OrganizationCreateResponse> {
    return this._client.post('/organizations', { body, ...options });
  }

  /**
   * Get a specific organization by ID
   *
   * @example
   * ```ts
   * const organization = await client.organizations.retrieve(
   *   'org_abc123',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<OrganizationRetrieveResponse> {
    return this._client.get(path`/organizations/${id}`, options);
  }

  /**
   * Update organization details
   *
   * @example
   * ```ts
   * await client.organizations.update('org_abc123');
   * ```
   */
  update(id: string, body: OrganizationUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/organizations/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all organizations
   *
   * @example
   * ```ts
   * const organizations = await client.organizations.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<OrganizationListResponse> {
    return this._client.get('/organizations', options);
  }

  /**
   * Delete an organization permanently
   *
   * @example
   * ```ts
   * await client.organizations.delete('org_abc123');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/organizations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OrganizationCreateResponse {
  id?: string;

  createdAt?: string;

  description?: string;

  name?: string;

  settings?: unknown;

  updatedAt?: string;
}

export interface OrganizationRetrieveResponse {
  id?: string;

  createdAt?: string;

  description?: string;

  name?: string;

  settings?: unknown;

  updatedAt?: string;
}

export type OrganizationListResponse = Array<OrganizationListResponse.OrganizationListResponseItem>;

export namespace OrganizationListResponse {
  export interface OrganizationListResponseItem {
    id?: string;

    createdAt?: string;

    description?: string;

    name?: string;

    settings?: unknown;

    updatedAt?: string;
  }
}

export interface OrganizationCreateParams {
  /**
   * Organization name
   */
  name: string;

  /**
   * Organization description
   */
  description?: string;

  /**
   * Organization settings
   */
  settings?: unknown;
}

export interface OrganizationUpdateParams {
  /**
   * Organization description
   */
  description?: string;

  /**
   * Organization name
   */
  name?: string;

  /**
   * Organization settings
   */
  settings?: unknown;
}

export declare namespace Organizations {
  export {
    type OrganizationCreateResponse as OrganizationCreateResponse,
    type OrganizationRetrieveResponse as OrganizationRetrieveResponse,
    type OrganizationListResponse as OrganizationListResponse,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
  };
}
