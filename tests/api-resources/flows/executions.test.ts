// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TolstoyAPI from 'tolstoy-sdk';

const client = new TolstoyAPI({
  orgID: 'My Org ID',
  userID: 'My User ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource executions', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.flows.executions.retrieve('exec_abc123', { id: 'flow_abc123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.flows.executions.retrieve('exec_abc123', { id: 'flow_abc123' });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.flows.executions.list('flow_abc123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('cancel: only required params', async () => {
    const responsePromise = client.flows.executions.cancel('exec_abc123', { id: 'flow_abc123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('cancel: required and optional params', async () => {
    const response = await client.flows.executions.cancel('exec_abc123', { id: 'flow_abc123' });
  });

  // Prism tests are disabled
  test.skip('retry: only required params', async () => {
    const responsePromise = client.flows.executions.retry('exec_abc123', { id: 'flow_abc123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retry: required and optional params', async () => {
    const response = await client.flows.executions.retry('exec_abc123', { id: 'flow_abc123' });
  });
});
