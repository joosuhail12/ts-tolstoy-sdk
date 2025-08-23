// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TolstoyAPI from 'tolstoy-sdk';

const client = new TolstoyAPI({
  orgID: 'My Org ID',
  userID: 'My User ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource secrets', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.tools.secrets.retrieve('tool_slack_123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tools.secrets.retrieve(
        'tool_slack_123',
        { unmask: 'true' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TolstoyAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.tools.secrets.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.tools.secrets.delete('tool_slack_123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('store: only required params', async () => {
    const responsePromise = client.tools.secrets.store('tool_slack_123', {
      credentials: {
        apiKey: 'your-api-key-here',
        webhookUrl: 'https://hooks.slack.com/services/YOUR/WEBHOOK/URL',
        botToken: 'your-bot-token-here',
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('store: required and optional params', async () => {
    const response = await client.tools.secrets.store('tool_slack_123', {
      credentials: {
        apiKey: 'your-api-key-here',
        webhookUrl: 'https://hooks.slack.com/services/YOUR/WEBHOOK/URL',
        botToken: 'your-bot-token-here',
      },
    });
  });
});
