// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TolstoyAPI from 'tolstoy-sdk';

const client = new TolstoyAPI({
  orgID: 'My Org ID',
  userID: 'My User ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auth', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.tools.auth.retrieve('tool-123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tools.auth.retrieve(
        'tool-123',
        { configName: 'production' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TolstoyAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.tools.auth.delete('tool-123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tools.auth.delete(
        'tool-123',
        { configName: 'staging', deleteAll: false },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TolstoyAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.tools.auth.upsert('tool-123', {
      config: { headerName: 'Authorization', headerValue: 'Bearer sk-1234567890abcdef' },
      name: 'production',
      type: 'apiKey',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('upsert: required and optional params', async () => {
    const response = await client.tools.auth.upsert('tool-123', {
      config: { headerName: 'Authorization', headerValue: 'Bearer sk-1234567890abcdef' },
      name: 'production',
      type: 'apiKey',
      isDefault: false,
    });
  });
});
