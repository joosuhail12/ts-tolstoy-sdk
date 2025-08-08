// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TolstoyAPI from 'tolstoy-api';

const client = new TolstoyAPI({
  orgID: 'My Org ID',
  userID: 'My User ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auth', () => {
  // skipped: tests are disabled for the time being
  test.skip('oauthCallback: only required params', async () => {
    const responsePromise = client.auth.oauthCallback('github', {
      code: 'abc123def456',
      state: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
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
  test.skip('oauthCallback: required and optional params', async () => {
    const response = await client.auth.oauthCallback('github', {
      code: 'abc123def456',
      state: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      error: 'access_denied',
      error_description: 'The user denied the request',
    });
  });

  // Prism doesn't properly handle redirects
  test.skip('oauthLogin: only required params', async () => {
    const responsePromise = client.auth.oauthLogin('github', { userId: 'user_123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't properly handle redirects
  test.skip('oauthLogin: required and optional params', async () => {
    const response = await client.auth.oauthLogin('github', { userId: 'user_123' });
  });
});
