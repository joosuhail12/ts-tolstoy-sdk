// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Users extends APIResource {
  /**
   * Create a new user in the organization
   *
   * @example
   * ```ts
   * const user = await client.users.create({
   *   email: 'john.doe@example.com',
   *   name: 'John Doe',
   * });
   * ```
   */
  create(body: UserCreateParams, options?: RequestOptions): APIPromise<UserCreateResponse> {
    return this._client.post('/users', { body, ...options });
  }

  /**
   * Get a specific user by ID
   *
   * @example
   * ```ts
   * const user = await client.users.retrieve('user_abc123');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get(path`/users/${id}`, options);
  }

  /**
   * Update user details
   *
   * @example
   * ```ts
   * await client.users.update('user_abc123');
   * ```
   */
  update(id: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/users/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all users in the organization
   *
   * @example
   * ```ts
   * const users = await client.users.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<UserListResponse> {
    return this._client.get('/users', options);
  }

  /**
   * Delete a user permanently
   *
   * @example
   * ```ts
   * await client.users.delete('user_abc123');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/users/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UserCreateResponse {
  id?: string;

  createdAt?: string;

  email?: string;

  name?: string;

  profile?: unknown;

  role?: string;

  updatedAt?: string;
}

export interface UserRetrieveResponse {
  id?: string;

  createdAt?: string;

  email?: string;

  name?: string;

  profile?: unknown;

  role?: string;

  updatedAt?: string;
}

export type UserListResponse = Array<UserListResponse.UserListResponseItem>;

export namespace UserListResponse {
  export interface UserListResponseItem {
    id?: string;

    createdAt?: string;

    email?: string;

    name?: string;

    profile?: unknown;

    role?: string;

    updatedAt?: string;
  }
}

export interface UserCreateParams {
  /**
   * User email address
   */
  email: string;

  /**
   * User full name
   */
  name: string;

  /**
   * User profile information
   */
  profile?: unknown;

  /**
   * User role
   */
  role?: 'admin' | 'member' | 'viewer';
}

export interface UserUpdateParams {}

export declare namespace Users {
  export {
    type UserCreateResponse as UserCreateResponse,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
  };
}
