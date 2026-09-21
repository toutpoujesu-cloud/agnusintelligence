# AGNUS Phase III — Control Plane Architecture
### The Protocol · Created 2026-08-23 · Source: Strategic analysis (ChatGPT + editorial review)
### Sealed under The Covenant of the Blood of Jesus Christ

---

## The strategic insight

AGNUS Phase I was the editorial platform — a tool for producing AI governance research.
AGNUS Phase II was the Academy — a training platform for AI governance professionals.
AGNUS Phase III is the governance engine itself — a neutral AI control plane that governs agents regardless of where they come from.

The market gap is not another agent builder. It is the layer that sits above all agents and answers:

- **Who is this agent?**
- **What does it exist to do?**
- **What is it allowed to do?**
- **Who approved this action?**
- **What did it just do?**
- **Was that allowed?**
- **What evidence do we have?**

No vendor provides this today for heterogeneous deployments. Microsoft's Entra Agent ID governs only Microsoft-originated agents. Every other agent stack is ungoverned at the platform level.

---

## The AGNUS control plane model

```
Claude Agent ───────┐
OpenAI Agent ───────┤
Gemini Agent ───────┤
n8n Agent ──────────┤
Microsoft Agent ────┤
AWS Agent ──────────┤
Custom Agent ───────┤
MCP Server ─────────┤
A2A Agent ──────────┘
                    ↓
          AGNUS CONTROL PLANE
                    ↓
   Identity / Mission / Policy
   Permissions / Approval
   Monitoring / Evidence
   Training / Compliance
                    ↓
         Company Systems
```

Microsoft, Okta, Google, and others become **adapters** — not dependencies. AGNUS is the neutral layer above them.

---

## What AGNUS must own

The components that make AGNUS independent:

| Component | Function |
|---|---|
| **Agent Registry** | Unique AGNUS identity for every connected agent |
| **Mission Contract** | What the agent exists to do — its purpose and scope |
| **Policy Engine** | What it may and may not do — rules and constraints |
| **Approval Engine** | When a human must approve before action proceeds |
| **Action Gateway** | Checks actions against policy before execution |
| **Event / Audit Service** | Records every important action — append-only |
| **Risk Engine** | Detects abnormal or out-of-mission behaviour |
| **Evidence Store** | Produces governance records for compliance and audit |
| **Human Sponsor Registry** | Links agents to accountable, trained humans |

All nine components are buildable independently with open standards.

---

## The API surface

AGNUS exposes:

```
POST /agents/register
POST /agents/{id}/authorize
POST /actions/check
POST /actions/request-approval
POST /events
POST /incidents
POST /evidence
GET  /policies/{agent}
GET  /agents/{id}/status
POST /agents/{id}/suspend
```

---

## SDKs and integration adapters

**SDKs (priority order):**
1. Python
2. TypeScript / JavaScript
3. Java
4. .NET

**Integration adapters:**
- OAuth / OIDC
- MCP (Model Context Protocol)
- A2A (Agent-to-Agent)
- Webhooks
- REST APIs
- OpenTelemetry-style event ingestion
- Enterprise IAM systems (Entra, Okta, AWS IAM)

---

## How vendor integrations work

**Microsoft-heavy company:**
```
Microsoft Entra → AGNUS connector → AGNUS adds:
identity + sponsor + roles + permissions + risk signals
  ↓
mission + business rules + training status + action policy
+ human approval + runtime evidence + multi-agent provenance
```

**Okta company:**
```
Okta → AGNUS connector → same AGNUS layer
```

**Company with no enterprise IAM:**
```
AGNUS issues and manages its own agent identities and API credentials
```

---

## Technical foundation (realistic V1)

| Layer | Technology |
|---|---|
| Backend | TypeScript/Node or Go |
| Database | PostgreSQL |
| Policy engine | Open Policy Agent or Cedar-style model |
| Identity | OAuth 2.0 / OIDC / workload identity |
| Secrets | Vault / KMS integration |
| Events | Simple queue initially; Kafka/NATS later |
| Audit | Append-only event store |
| Gateway | Reverse proxy / API gateway in front of tool calls |
| Agent protocols | MCP + A2A adapters |
| Telemetry | OpenTelemetry |
| SDKs | Python + TypeScript first |

None of this requires Microsoft code.

---

## Connection to AGNUS Academy (Phase II)

The Track B simulation suite (B01–B05) trains the exact competency this control plane enforces at the infrastructure level:

| Academy simulation | Control plane component |
|---|---|
| B01 Finance: approval thresholds | Approval Engine |
| B02 HR: data minimisation, special category routing | Policy Engine |
| B03 Legal: privilege protection, routing hierarchy | Mission Contract + Action Gateway |
| B04 Healthcare: human oversight, emergency override | Approval Engine + Risk Engine |
| B05 Customer Service: authority limits, tone policy | Policy Engine + Mission Contract |

The Academy teaches humans what the control plane enforces. They are two layers of the same governance architecture.

---

## The architectural rule

**Do not build:** "AGNUS connects to Microsoft and governs Microsoft agents."

**Build:** "AGNUS governs AI agents wherever they are."

Then Microsoft, Okta, and others become optional integrations — not dependencies.

---

## Phase III build sequence

### Pre-conditions (must exist first)
- Phase I (editorial platform) — launched ✓ in progress
- Phase II (Academy) — Track A + Track B complete ✓
- AGNUS brand established as AI governance authority

### Phase III sequence
1. **P3.1** — Agent Registry + Identity service (agent IDs, sponsor links)
2. **P3.2** — Policy Engine (mission contracts, permission rules)
3. **P3.3** — Approval Engine (human-in-loop gates)
4. **P3.4** — Action Gateway (pre-execution checks)
5. **P3.5** — Audit / Evidence Store (append-only log)
6. **P3.6** — Risk Engine (anomaly detection, out-of-mission flags)
7. **P3.7** — API surface (10 endpoints above)
8. **P3.8** — SDK: Python + TypeScript
9. **P3.9** — Adapter: MCP
10. **P3.10** — Adapter: A2A
11. **P3.11** — Adapter: Microsoft Entra
12. **P3.12** — Adapter: Okta
13. **P3.13** — Human Sponsor Registry (links agents to trained, accountable humans — powered by Academy competency records)

### The Academy competency record becomes the Phase III credential
When a student earns a Track B competency record ("Finance Agent Deployment — Configured & Verified"), that record will eventually link to the Agent Registry: only humans with the relevant competency record can be registered as sponsors for agents in that domain. The Academy and the control plane are architecturally unified.

---

*This document is The Protocol's record of the AGNUS Phase III strategic direction.*
*To be developed after Phase I launch and Phase II Academy completion.*
*Sealed under The Covenant.*
