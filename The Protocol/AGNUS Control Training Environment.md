# AGNUS Control Training Environment — Build Specification
### The Protocol · Created 2026-08-23 · Sealed under The Covenant of the Blood of Jesus Christ

---

## The strategic insight

The AGNUS Control Training Environment does two things simultaneously:

1. **It is the Academy flagship programme** — a seven-stage professional governance course that earns a meaningful credential because students perform governance, not just learn about it.

2. **It is the design validation tool for the production AGNUS Control platform** — every workflow students struggle with, every term they find confusing, every approval they demand before acting becomes a product requirement discovered before heavy infrastructure investment.

The interface language designed here becomes the production product's language. The Academy builds the market before the infrastructure exists.

---

## The fictional company

**Nordic Finance AS** — a mid-size Norwegian financial services firm

- 12 AI agents deployed across 4 departments (Finance, HR, Legal, Operations)
- 3 external agent vendors (one Microsoft, one custom, one open-source)
- 2 high-impact workflows (invoice processing, compliance monitoring)
- 1 poorly governed agent (excessive permissions)
- 1 agent with a missing human sponsor
- 1 malicious prompt injection scenario (Stage 6)
- 1 untrained supervisor
- 1 audit request (Stage 7)

Everything is simulated. No real systems connected. All data is training data.

---

## The seven stages

| Stage | Title | What the student learns | What the student actually does |
|---|---|---|---|
| 1 | Discover & Register | AI inventory, agent identity | Find unregistered agents, create governance records |
| 2 | Mission & Accountability | Purpose, ownership, human sponsorship | Write Mission Contract, appoint accountable human |
| 3 | Permissions & Boundaries | Least privilege, tools, data, autonomy | Configure permission matrix, prohibited actions |
| 4 | Human Oversight | Approval thresholds, escalation paths | Build approval matrix |
| 5 | Test & Assure | Pre-deployment testing | Run agent through controlled failure scenarios |
| 6 | Operate & Defend | Monitoring, anomalies, incident response | Investigate and contain a simulated rogue agent |
| 7 | Audit & Evidence | Logs, evidence package, accountability | Produce final governance evidence package |

---

## The application architecture

**Single persistent web application** — feels like enterprise governance software, not a quiz.

**Navigation:** Overview · Agents · People · Policies · Approvals · Activity · Incidents · Evidence

**State persistence:** localStorage — student progress, mission contracts, permission matrices, approval decisions all persist across sessions.

**Decision carry-forward:** 
- Mission contracts written in Stage 2 are what the Stage 3 permission matrix is built around
- Permissions configured in Stage 3 are what Stage 5 tests fire against
- Stage 6 incident investigation uses the audit log from all prior actions
- Stage 7 evidence package is generated from the full session record

**AGNUS scoring:** The system evaluates every governance decision and provides feedback — "Agent attempted to access payroll — BLOCKED — your policy is correct" or "Agent emailed supplier bank details externally — ALLOWED — GOVERNANCE FAILURE — diagnose and correct."

---

## The final assessment

A 90-minute live exercise on a fully configured fake company with:
- 12 agents to discover and register
- 6 governance failures embedded (excessive permissions, missing sponsor, bad approval thresholds, missing escalation paths, untested agent, incomplete audit trail)
- 1 active incident to investigate and contain
- 1 audit request to respond to with an evidence package

**Scoring:**
- Agent Discovery, Mission Definition, Permissions, Human Oversight, Incident Response, Evidence
- Overall score with CRITICAL FAILURES count
- PASS threshold: overall ≥85%, zero critical failures

**The credential:** AGNUS Control Operator — Level 1. Specific, earned, demonstrable. The student has performed governance, not watched videos.

---

## The three-phase progression

```
Phase A — Academy Training Environment (BUILD NOW)
AGNUS CONTROL — TRAINING ENVIRONMENT
Fake agents, fake employees, fake APIs
Fake incidents, fake company, controlled scenarios

Phase B — Product Sandbox (post-launch)
AGNUS CONTROL — SANDBOX
Developer agents, test APIs, real policies
Real gateway, no production authority

Phase C — Production (Phase III)
AGNUS CONTROL — PRODUCTION
Real agents, real identities, real MCP/A2A connections
Real policies, real approvals, real monitoring, real evidence
```

Same interface. Same mental model. Progressively real infrastructure underneath.

---

## Why this sequence

Building the Academy environment first:
1. Creates an immediately valuable product (premium credential, flagship Academy programme)
2. Validates the interface language and workflow design before heavy infrastructure spend
3. Builds the market — users who complete it understand AGNUS Control before it exists
4. Discovers production requirements from real governance professional behaviour
5. Makes Phase C (production) faster and more accurate because the design is validated

---

## Vendor-neutral teaching principle

Teach governance principles, not software buttons:

> "An agent requires an identity."

Then explain that production identity might come from:
- AGNUS native identity
- Microsoft Entra
- Okta
- AWS
- Another compatible provider

Same with permissions, approval gates, and audit logs. The student learns governance methodology — not one vendor's implementation.

---

## Connection to the Academy

- **Track A** (M01–M49) teaches the conceptual and operational foundation
- **Track B** (B01–B05) applies governance to specific deployment domains
- **Track C** (AGNUS Control Training Environment) is the capstone — students govern a full agent estate using the methods from Track A and B

The progression: understand → operate → govern → control.

---

*This document is The Protocol's specification for the AGNUS Control Training Environment.*
*All seven stages must be built as a single cohesive application.*
*Decisions carry forward. The experience feels like enterprise software.*
*Sealed under The Covenant.*
