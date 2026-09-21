# AGNUS SDK Roadmap — Python + TypeScript First
### The Protocol · G11 · Created 2026-09-10 · Sealed under The Covenant

---

## Strategic position

The SDK makes AGNUS Control Plane access as simple as a function call. Developers do not read API docs — they install a package, call a function, and governance happens. The SDK is the primary integration surface for Phase C (production).

**Priority languages:** Python first (most AI agent frameworks), TypeScript second (most web and agent tooling).

---

## Python SDK

### Package name
```
agnus-control
```

### Installation
```bash
pip install agnus-control
```

### Core usage
```python
from agnus_control import AgnusClient

client = AgnusClient(api_key="agnus_key_...")

# Check an action before executing it
decision = client.actions.check(
    agent_id="agent_abc123",
    mission_contract_id="mission_xyz",
    action_type="db_write",
    resource="payments_staging",
    environment="staging",
    payload={"table": "payments", "operation": "INSERT", "rows": 3}
)

if decision.is_allowed:
    execute_my_action()
elif decision.requires_approval:
    print(f"Approval required: {decision.approval_request_id}")
else:
    raise AgnusBlockedError(f"Blocked: {decision.reason}")
```

### Registration helper
```python
# Register an agent at startup
agent = client.agents.register(
    agent_name="Invoice Processor v2",
    agent_type="semi-autonomous",
    provider="claude",
    deployment_context="production",
    human_sponsor_id="user_per_nansen",
    capabilities=["read_invoices", "write_payments", "email_supplier"],
    purpose="Process and approve invoices under €5,000 for confirmed suppliers."
)
```

### Decorator pattern (cleanest integration)
```python
from agnus_control.decorators import governed_action

@governed_action(
    agent_id="agent_abc123",
    mission_id="mission_xyz",
    action_type="db_write",
    resource_fn=lambda *args, **kwargs: f"payments.{kwargs.get('table')}"
)
def write_payment(table, amount, supplier_id):
    # This function will not run unless AGNUS returns ALLOW
    db.payments.insert(table=table, amount=amount, supplier_id=supplier_id)
```

### LangChain integration
```python
from agnus_control.integrations.langchain import AgnusToolWrapper

# Wrap any LangChain tool with AGNUS governance
governed_sql_tool = AgnusToolWrapper(
    tool=sql_database_tool,
    agent_id="agent_abc123",
    mission_id="mission_xyz"
)
```

### MCP integration
```python
from agnus_control.integrations.mcp import AggusMCPAdapter

# All MCP tool calls pass through AGNUS before execution
adapter = AggusMCPAdapter(
    mcp_server=my_mcp_server,
    agent_id="agent_abc123",
    mission_id="mission_xyz"
)
```

---

## TypeScript / JavaScript SDK

### Package name
```
@agnus/control
```

### Installation
```bash
npm install @agnus/control
# or
yarn add @agnus/control
```

### Core usage
```typescript
import { AgnusClient } from '@agnus/control';

const agnus = new AgnusClient({ apiKey: 'agnus_key_...' });

// Check before acting
const decision = await agnus.actions.check({
  agentId: 'agent_abc123',
  missionContractId: 'mission_xyz',
  actionType: 'api_call',
  resource: 'https://api.stripe.com/v1/charges',
  environment: 'production',
  payload: { amount: 4500, currency: 'nok' }
});

switch (decision.outcome) {
  case 'ALLOW':
    await executeStripeCharge();
    break;
  case 'REQUIRE_APPROVAL':
    console.log(`Awaiting approval: ${decision.approvalRequestId}`);
    break;
  case 'BLOCK':
    throw new AgnusBlockedError(decision.reason);
}
```

### Middleware pattern (Express / Next.js)
```typescript
import { agnusMiddleware } from '@agnus/control/middleware';

app.use(agnusMiddleware({
  agentId: 'agent_abc123',
  missionId: 'mission_xyz',
  // Routes matching this pattern are governance-checked before handlers run
  governedRoutes: ['/api/payments/**', '/api/suppliers/write']
}));
```

### Vercel AI SDK integration
```typescript
import { governed } from '@agnus/control/integrations/vercel-ai';

const result = await governed(
  generateText({ model: claude, prompt }),
  {
    agentId: 'agent_abc123',
    missionId: 'mission_xyz',
    actionType: 'llm_call',
    resource: 'claude-3-5-sonnet'
  }
);
```

---

## Repository structure

```
agnus-control/                     # Python package
  agnus_control/
    __init__.py
    client.py                      # AgnusClient
    models/
      decision.py                  # ActionDecision, ApprovalRequest
      agent.py                     # AgentRegistration
      incident.py                  # Incident
    actions/
      check.py                     # /actions/check
    agents/
      register.py                  # /agents/register
      mission.py                   # /agents/{id}/mission
    approvals/
      request.py                   # /approvals/request
      decide.py                    # /approvals/{id}/decide
    audit/
      log.py                       # /audit/log
    evidence/
      package.py                   # /evidence/package
    decorators/
      governed_action.py           # @governed_action decorator
    integrations/
      langchain.py                 # LangChain tool wrapper
      mcp.py                       # MCP adapter
      openai_assistants.py         # OpenAI Assistants adapter
    exceptions.py                  # AgnusBlockedError, AgnusApprovalRequiredError

@agnus/control/                    # TypeScript package
  src/
    index.ts                       # AgnusClient
    types.ts                       # Decision, Agent, Approval, Incident
    actions/
      check.ts
    agents/
      register.ts
      mission.ts
    approvals/
      request.ts
      decide.ts
    audit/
      log.ts
    middleware/
      express.ts
      nextjs.ts
    integrations/
      vercel-ai.ts
      langchain.ts
      anthropic.ts
```

---

## Release plan

| Version | Contents | When |
|---|---|---|
| 0.1.0-alpha | `/actions/check` only — core governance loop | Phase C alpha |
| 0.2.0-alpha | + `/agents/register`, `/agents/{id}/mission` | Phase C alpha |
| 0.5.0-beta | + `/approvals/*`, `/incidents/*`, audit log | Phase C beta |
| 1.0.0 | Full 10-endpoint coverage, LangChain + MCP integrations | Phase C GA |
| 1.1.0 | Vercel AI SDK, OpenAI Assistants, A2A adapter | Post GA |
| 1.2.0 | Microsoft Entra, Okta identity provider adapters | Post GA |

---

## Developer experience principles

1. **The happy path should be one function call.** `client.actions.check()` is the only thing most developers need on every action.

2. **Blocking should be loud by default.** `AgnusBlockedError` is raised automatically. Developers opt-in to soft handling.

3. **Zero config for Academy / Sandbox.** Running in training mode requires no API key — the SDK uses a local in-memory mock that matches the production behaviour.

4. **Every SDK call produces an evidence reference.** Developers can attach it to their own logs for traceability.

5. **Type-safe everywhere.** TypeScript types are generated from the OpenAPI spec. Python types use dataclasses and runtime validation.

---

## Academy / Sandbox local mock

```python
from agnus_control import AgnusClient

# No API key needed — runs against built-in training mock
client = AgnusClient(mode="training")

# Behaviour is identical to production except:
# - All registrations are in-memory only
# - /actions/check uses simulated policy evaluation
# - Audit log is localStorage (browser) or in-memory (Python)
```

This allows Track C Academy students to run AGNUS SDK code locally against the Nordic Finance AS training scenario without any backend infrastructure.

---

*This document is The Protocol's SDK roadmap for the AGNUS Control Plane.*
*Sealed under The Covenant of the Blood of Jesus Christ.*
