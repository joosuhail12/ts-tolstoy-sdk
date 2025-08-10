# TolstoyAPI

Types:

- <code><a href="./src/resources/top-level.ts">GetWelcomeMessageResponse</a></code>

Methods:

- <code title="get /">client.<a href="./src/index.ts">getWelcomeMessage</a>() -> string</code>

# Status

Types:

- <code><a href="./src/resources/status.ts">StatusRetrieveResponse</a></code>

Methods:

- <code title="get /status">client.status.<a href="./src/resources/status.ts">retrieve</a>() -> StatusRetrieveResponse</code>

# Organizations

Types:

- <code><a href="./src/resources/organizations.ts">OrganizationCreateResponse</a></code>
- <code><a href="./src/resources/organizations.ts">OrganizationRetrieveResponse</a></code>
- <code><a href="./src/resources/organizations.ts">OrganizationListResponse</a></code>

Methods:

- <code title="post /organizations">client.organizations.<a href="./src/resources/organizations.ts">create</a>({ ...params }) -> OrganizationCreateResponse</code>
- <code title="get /organizations/{id}">client.organizations.<a href="./src/resources/organizations.ts">retrieve</a>(id) -> OrganizationRetrieveResponse</code>
- <code title="put /organizations/{id}">client.organizations.<a href="./src/resources/organizations.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /organizations">client.organizations.<a href="./src/resources/organizations.ts">list</a>() -> OrganizationListResponse</code>
- <code title="delete /organizations/{id}">client.organizations.<a href="./src/resources/organizations.ts">delete</a>(id) -> void</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/users.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/users.ts">UserListResponse</a></code>

Methods:

- <code title="post /users">client.users.<a href="./src/resources/users.ts">create</a>({ ...params }) -> UserCreateResponse</code>
- <code title="get /users/{id}">client.users.<a href="./src/resources/users.ts">retrieve</a>(id) -> UserRetrieveResponse</code>
- <code title="put /users/{id}">client.users.<a href="./src/resources/users.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /users">client.users.<a href="./src/resources/users.ts">list</a>() -> UserListResponse</code>
- <code title="delete /users/{id}">client.users.<a href="./src/resources/users.ts">delete</a>(id) -> void</code>

# Tools

Types:

- <code><a href="./src/resources/tools/tools.ts">ToolCreateResponse</a></code>
- <code><a href="./src/resources/tools/tools.ts">ToolRetrieveResponse</a></code>
- <code><a href="./src/resources/tools/tools.ts">ToolListResponse</a></code>

Methods:

- <code title="post /tools">client.tools.<a href="./src/resources/tools/tools.ts">create</a>({ ...params }) -> ToolCreateResponse</code>
- <code title="get /tools/{id}">client.tools.<a href="./src/resources/tools/tools.ts">retrieve</a>(id) -> ToolRetrieveResponse</code>
- <code title="put /tools/{id}">client.tools.<a href="./src/resources/tools/tools.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /tools">client.tools.<a href="./src/resources/tools/tools.ts">list</a>() -> ToolListResponse</code>
- <code title="delete /tools/{id}">client.tools.<a href="./src/resources/tools/tools.ts">delete</a>(id) -> void</code>

## Secrets

Types:

- <code><a href="./src/resources/tools/secrets.ts">SecretRetrieveResponse</a></code>
- <code><a href="./src/resources/tools/secrets.ts">SecretListResponse</a></code>
- <code><a href="./src/resources/tools/secrets.ts">SecretStoreResponse</a></code>

Methods:

- <code title="get /tools/{toolId}/secrets">client.tools.secrets.<a href="./src/resources/tools/secrets.ts">retrieve</a>(toolID, { ...params }) -> SecretRetrieveResponse</code>
- <code title="get /tools/secrets">client.tools.secrets.<a href="./src/resources/tools/secrets.ts">list</a>() -> SecretListResponse</code>
- <code title="delete /tools/{toolId}/secrets">client.tools.secrets.<a href="./src/resources/tools/secrets.ts">delete</a>(toolID) -> void</code>
- <code title="post /tools/{toolId}/secrets">client.tools.secrets.<a href="./src/resources/tools/secrets.ts">store</a>(toolID, { ...params }) -> SecretStoreResponse</code>

## Auth

Types:

- <code><a href="./src/resources/tools/auth.ts">AuthRetrieveResponse</a></code>
- <code><a href="./src/resources/tools/auth.ts">AuthDeleteResponse</a></code>
- <code><a href="./src/resources/tools/auth.ts">AuthUpsertResponse</a></code>

Methods:

- <code title="get /tools/{toolId}/auth">client.tools.auth.<a href="./src/resources/tools/auth.ts">retrieve</a>(toolID) -> AuthRetrieveResponse</code>
- <code title="delete /tools/{toolId}/auth">client.tools.auth.<a href="./src/resources/tools/auth.ts">delete</a>(toolID) -> AuthDeleteResponse</code>
- <code title="post /tools/{toolId}/auth">client.tools.auth.<a href="./src/resources/tools/auth.ts">upsert</a>(toolID, { ...params }) -> AuthUpsertResponse</code>

# Actions

Types:

- <code><a href="./src/resources/actions.ts">ActionCreateResponse</a></code>
- <code><a href="./src/resources/actions.ts">ActionRetrieveResponse</a></code>
- <code><a href="./src/resources/actions.ts">ActionListResponse</a></code>
- <code><a href="./src/resources/actions.ts">ActionExecuteResponse</a></code>

Methods:

- <code title="post /actions">client.actions.<a href="./src/resources/actions.ts">create</a>({ ...params }) -> ActionCreateResponse</code>
- <code title="get /actions/{id}">client.actions.<a href="./src/resources/actions.ts">retrieve</a>(id) -> ActionRetrieveResponse</code>
- <code title="put /actions/{id}">client.actions.<a href="./src/resources/actions.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /actions">client.actions.<a href="./src/resources/actions.ts">list</a>() -> ActionListResponse</code>
- <code title="delete /actions/{id}">client.actions.<a href="./src/resources/actions.ts">delete</a>(id) -> void</code>
- <code title="post /actions/{key}/execute">client.actions.<a href="./src/resources/actions.ts">execute</a>(key, { ...params }) -> ActionExecuteResponse</code>

# Flows

Types:

- <code><a href="./src/resources/flows/flows.ts">FlowCreateResponse</a></code>
- <code><a href="./src/resources/flows/flows.ts">FlowListResponse</a></code>
- <code><a href="./src/resources/flows/flows.ts">FlowExecuteResponse</a></code>
- <code><a href="./src/resources/flows/flows.ts">FlowGetMetricsResponse</a></code>

Methods:

- <code title="post /flows">client.flows.<a href="./src/resources/flows/flows.ts">create</a>({ ...params }) -> FlowCreateResponse</code>
- <code title="get /flows/{id}">client.flows.<a href="./src/resources/flows/flows.ts">retrieve</a>(id) -> void</code>
- <code title="put /flows/{id}">client.flows.<a href="./src/resources/flows/flows.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /flows">client.flows.<a href="./src/resources/flows/flows.ts">list</a>() -> FlowListResponse</code>
- <code title="delete /flows/{id}">client.flows.<a href="./src/resources/flows/flows.ts">delete</a>(id) -> void</code>
- <code title="post /flows/{id}/execute">client.flows.<a href="./src/resources/flows/flows.ts">execute</a>(id, { ...params }) -> FlowExecuteResponse</code>
- <code title="get /flows/{id}/metrics">client.flows.<a href="./src/resources/flows/flows.ts">getMetrics</a>(id) -> FlowGetMetricsResponse</code>

## Executions

Types:

- <code><a href="./src/resources/flows/executions.ts">ExecutionRetrieveResponse</a></code>
- <code><a href="./src/resources/flows/executions.ts">ExecutionListResponse</a></code>
- <code><a href="./src/resources/flows/executions.ts">ExecutionRetryResponse</a></code>

Methods:

- <code title="get /flows/{id}/executions/{executionId}">client.flows.executions.<a href="./src/resources/flows/executions.ts">retrieve</a>(executionID, { ...params }) -> ExecutionRetrieveResponse</code>
- <code title="get /flows/{id}/executions">client.flows.executions.<a href="./src/resources/flows/executions.ts">list</a>(id) -> ExecutionListResponse</code>
- <code title="post /flows/{id}/executions/{executionId}/cancel">client.flows.executions.<a href="./src/resources/flows/executions.ts">cancel</a>(executionID, { ...params }) -> void</code>
- <code title="post /flows/{id}/executions/{executionId}/retry">client.flows.executions.<a href="./src/resources/flows/executions.ts">retry</a>(executionID, { ...params }) -> ExecutionRetryResponse</code>

# ExecutionLogs

Types:

- <code><a href="./src/resources/execution-logs.ts">ExecutionLogCreateResponse</a></code>
- <code><a href="./src/resources/execution-logs.ts">ExecutionLogRetrieveResponse</a></code>
- <code><a href="./src/resources/execution-logs.ts">ExecutionLogListResponse</a></code>

Methods:

- <code title="post /execution-logs">client.executionLogs.<a href="./src/resources/execution-logs.ts">create</a>({ ...params }) -> ExecutionLogCreateResponse</code>
- <code title="get /execution-logs/{id}">client.executionLogs.<a href="./src/resources/execution-logs.ts">retrieve</a>(id) -> ExecutionLogRetrieveResponse</code>
- <code title="put /execution-logs/{id}">client.executionLogs.<a href="./src/resources/execution-logs.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /execution-logs">client.executionLogs.<a href="./src/resources/execution-logs.ts">list</a>() -> ExecutionLogListResponse</code>
- <code title="delete /execution-logs/{id}">client.executionLogs.<a href="./src/resources/execution-logs.ts">delete</a>(id) -> void</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookRetrieveResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookListResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookGetValidEventTypesResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookTestResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookToggleResponse</a></code>

Methods:

- <code title="post /webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">create</a>({ ...params }) -> WebhookCreateResponse</code>
- <code title="get /webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">retrieve</a>(id) -> WebhookRetrieveResponse</code>
- <code title="put /webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">list</a>({ ...params }) -> WebhookListResponse</code>
- <code title="delete /webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">delete</a>(id) -> void</code>
- <code title="get /webhooks/event-types">client.webhooks.<a href="./src/resources/webhooks.ts">getValidEventTypes</a>() -> WebhookGetValidEventTypesResponse</code>
- <code title="post /webhooks/{id}/test">client.webhooks.<a href="./src/resources/webhooks.ts">test</a>(id) -> WebhookTestResponse</code>
- <code title="patch /webhooks/{id}/toggle">client.webhooks.<a href="./src/resources/webhooks.ts">toggle</a>(id) -> WebhookToggleResponse</code>

# Auth

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>
