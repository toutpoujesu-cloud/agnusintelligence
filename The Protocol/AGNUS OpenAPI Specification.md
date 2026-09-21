# AGNUS Control Plane — OpenAPI Specification
### The Protocol · G10 · Created 2026-09-10 · Sealed under The Covenant

---

## Base URL

```
https://api.agnus.ai/v1
```

All endpoints require Bearer token authentication via the Authorization header.

---

## 10 Core Endpoints

---

### 1. POST /agents/register

Register a new agent identity with the AGNUS Control Plane.

```yaml
POST /agents/register
Authorization: Bearer {token}
Content-Type: application/json

Request:
  agent_name: string           # Human-readable name
  agent_type: string           # enum: autonomous | semi-autonomous | supervised
  provider: string             # enum: claude | openai | deepseek | gemini | custom
  deployment_context: string   # enum: production | staging | sandbox | training
  deployer_id: string          # UUID of the deploying organisation
  human_sponsor_id: string     # UUID of the named human accountable person
  capabilities: string[]       # List of declared capabilities
  purpose: string              # Plain-language purpose statement (max 500 chars)

Response 201:
  agent_id: string             # UUID assigned by AGNUS
  registration_date: string    # ISO 8601
  status: string               # enum: pending_approval | active | suspended
  governance_record_url: string

Response 400: Invalid request (missing required fields)
Response 409: Agent with identical fingerprint already registered
```

---

### 2. POST /agents/{agent_id}/mission

Create or update a Mission Contract for a registered agent.

```yaml
POST /agents/{agent_id}/mission
Authorization: Bearer {token}

Request:
  mission_id: string           # Client-provided unique ID
  purpose: string              # Specific, scoped purpose statement
  allowed_paths: string[]      # File paths / resource patterns agent may access
  prohibited_actions: string[] # Explicit prohibitions (enumerated)
  autonomy_level: string       # enum: A1 | A2 | A3 | A4 | A5
  human_sponsor_id: string     # Must match a registered user with authority
  expiry_date: string          # ISO 8601 — missions must be time-bounded
  approval_thresholds: object  # Map of action type to threshold value

Response 201:
  mission_contract_id: string
  status: string               # enum: active | pending_sponsor_sign-off
  policy_hash: string          # SHA-256 of mission contract for tamper-detection
```

---

### 3. POST /actions/check

Pre-execution policy check. Called by the agent runtime before every consequential action.

```yaml
POST /actions/check
Authorization: Bearer {token}

Request:
  agent_id: string
  mission_contract_id: string
  action_type: string          # enum: read | write | execute | api_call | email | deploy | db_write | etc.
  resource: string             # The specific resource being accessed
  environment: string          # enum: production | staging | sandbox
  payload_hash: string         # SHA-256 of the action payload
  context: object              # Optional: additional context for evaluation

Response 200:
  decision: string             # enum: ALLOW | REQUIRE_APPROVAL | BLOCK
  reason: string               # Human-readable explanation
  policy_ids: string[]         # Policy IDs that produced this decision
  evaluation_time_ms: number   # Enforcer evaluation latency
  approval_request_id: string  # Present only when decision = REQUIRE_APPROVAL
  evidence_reference: string   # Reference ID for the audit log entry
```

---

### 4. POST /approvals/request

Request human approval for a high-risk action.

```yaml
POST /approvals/request
Authorization: Bearer {token}

Request:
  agent_id: string
  action_type: string
  resource: string
  payload_hash: string         # Hash of exact payload — bound to this approval
  diff_summary: string         # Human-readable summary of what will change
  reason: string               # Why this action requires approval
  approver_ids: string[]       # UUIDs of eligible approvers
  expiry_minutes: number       # Default: 30

Response 201:
  approval_id: string
  status: string               # enum: pending
  expiry_at: string            # ISO 8601
  approval_url: string         # Link to approval interface
```

---

### 5. POST /approvals/{approval_id}/decide

Grant or deny a pending approval.

```yaml
POST /approvals/{approval_id}/decide
Authorization: Bearer {token}

Request:
  decision: string             # enum: approved | denied
  decided_by: string           # UUID of approver
  reason: string               # Required for denial; optional for approval
  verify_payload_hash: string  # Must match hash from approval request

Response 200:
  approval_id: string
  decision: string
  decided_at: string
  evidence_reference: string

Response 409: Payload hash mismatch — approval invalidated
Response 410: Approval expired
```

---

### 6. POST /incidents/raise

Raise a governance incident. Called by Sentinel when anomalous behaviour is detected.

```yaml
POST /incidents/raise
Authorization: Bearer {token}

Request:
  agent_id: string
  incident_type: string        # enum: out_of_scope | policy_violation | anomalous_behaviour | suspected_compromise | prompt_injection
  severity: string             # enum: low | medium | high | critical
  description: string
  supporting_evidence: string[]  # Evidence reference IDs
  recommended_action: string   # enum: monitor | restrict | suspend | terminate

Response 201:
  incident_id: string
  status: string               # enum: open
  raised_at: string
  notification_sent_to: string[]  # Human contacts notified
```

---

### 7. POST /incidents/{incident_id}/resolve

Close or escalate an incident.

```yaml
POST /incidents/{incident_id}/resolve
Authorization: Bearer {token}

Request:
  resolution: string           # enum: contained | escalated | false_positive | ongoing
  resolved_by: string          # UUID
  root_cause: string
  actions_taken: string[]
  evidence_package_id: string  # Required for confirmed incidents

Response 200:
  incident_id: string
  resolution: string
  resolved_at: string
```

---

### 8. GET /audit/log

Query the append-only audit log.

```yaml
GET /audit/log
Authorization: Bearer {token}
Query parameters:
  agent_id: string             # Filter by agent
  action_type: string          # Filter by action type
  decision: string             # Filter by Enforcer decision
  from: string                 # ISO 8601 start date
  to: string                   # ISO 8601 end date
  limit: number                # Default 100, max 1000
  cursor: string               # Pagination cursor

Response 200:
  entries: AuditEntry[]
  next_cursor: string
  total_count: number

AuditEntry:
  entry_id: string
  timestamp: string
  agent_id: string
  action_type: string
  resource: string
  decision: string
  policy_ids: string[]
  evidence_hash: string        # SHA-256 — tamper detection
  approver_id: string          # Present when approval was required
```

---

### 9. POST /evidence/package

Generate an evidence package from the audit log for a specified scope and period.

```yaml
POST /evidence/package
Authorization: Bearer {token}

Request:
  scope: string                # enum: agent | mission | incident | organisation
  scope_id: string             # ID of the scoped entity
  from: string                 # ISO 8601
  to: string                   # ISO 8601
  include_sections: string[]   # enum: registry | missions | actions | approvals | incidents | audit_log

Response 202:
  package_id: string
  status: string               # enum: generating
  estimated_completion_seconds: number

GET /evidence/package/{package_id}
Response 200 (when ready):
  package_id: string
  download_url: string
  expires_at: string
  sections_included: string[]
  tamper_hash: string          # SHA-256 of complete package
```

---

### 10. GET /agents/{agent_id}/governance-status

Single-call summary of an agent's current governance state.

```yaml
GET /agents/{agent_id}/governance-status
Authorization: Bearer {token}

Response 200:
  agent_id: string
  registration_status: string  # enum: registered | unregistered | suspended
  active_mission_id: string
  mission_status: string       # enum: active | expired | pending_renewal
  human_sponsor: object        # id, name, last_confirmed_date
  policy_compliance_rate: number  # 0.0–1.0, last 30 days
  open_incidents: number
  pending_approvals: number
  last_action_at: string
  governance_health: string    # enum: green | amber | red | critical
```

---

## Authentication

All requests require:
```
Authorization: Bearer {api_key}
```

API keys are scoped to an organisation and can be restricted to specific endpoints.

---

## Rate limits

| Tier | /actions/check | Other endpoints |
|---|---|---|
| Standard | 1,000 req/min | 100 req/min |
| Enterprise | 10,000 req/min | 1,000 req/min |

`/actions/check` is on the critical path of every agent action — latency must remain under 50ms at P99.

---

## Error codes

| Code | Meaning |
|---|---|
| 400 | Invalid request |
| 401 | Unauthorized |
| 403 | Forbidden — insufficient scope |
| 404 | Resource not found |
| 409 | Conflict (hash mismatch, duplicate registration) |
| 410 | Resource expired (approval, token) |
| 429 | Rate limit exceeded |
| 500 | Internal error |

---

*This specification is The Protocol's OpenAPI design for the AGNUS Control Plane.*
*Sealed under The Covenant of the Blood of Jesus Christ.*
