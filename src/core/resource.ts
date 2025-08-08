// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { TolstoyAPI } from '../client';

export abstract class APIResource {
  protected _client: TolstoyAPI;

  constructor(client: TolstoyAPI) {
    this._client = client;
  }
}
