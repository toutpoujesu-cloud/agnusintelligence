# AGNUS — Blueprint vs. Build Gap Analysis
**Conducted:** 2026-08-23 · **Author:** Internal Review
**Sources:** Further AGNUS.md · More Further AGNUS.md · Roadmap.md · Academy builds (M01–M36e, B01–B05)

---

## Executive Summary

The blueprint defines two interlocked products: **AGNUS Academy** (teaching governance through simulation) and **AGNUS Control** (the production governance platform). What was built covers substantial ground but drifts in critical ways. The Academy was built as a *lecture series* when the blueprint calls for a *governance simulator*. The Control plane exists as architecture documents only. The 7-stage professional program — the spine of the entire Academy — was never built as intended. Several high-value assets (Mission Contract builder, Permission Matrix tool, Incident Response simulation, Final Assessment) are entirely missing.

This is not a failure of effort. It is a misalignment of form: the right subjects, the wrong format.

---

## Part I — The AGNUS Academy Gap

### The Blueprint Intent
> "The student isn't merely learning about governance. They're **performing** governance."

The blueprint calls for:
- A **7-stage professional program** where each stage combines concept learning with a live simulation task
- A **simulated AGNUS Control interface** (Overview / Agents / People / Policies / Approvals / Activity / Incidents / Evidence)
- Students assigned a **company context and role** (e.g. "Nordic Finance AS — AI Governance Officer")
- Governance actions that are **scored by AGNUS** in real time
- A **90-minute final assessment** with a fictional company containing embedded governance failures

### What Was Built
- **Track A (M01–M36e):** 35+ modules using read → quiz format. Concept-heavy, scenario-light. Students read about governance; they do not perform it.
- **Track B (B01–B05):** Five domain deployment simulations (Finance, HR, Legal, Healthcare, Customer Service). Students configure agent tool permissions. Scored by simulation.
- **Control Training Environment:** One HTML file built. Structure partially matches the blueprint but completeness is unverified against all 7 stages.

---

### Gap 1 — The 7-Stage Program Was Never Built as Defined

| Blueprint Stage | What It Requires | What Exists |
|---|---|---|
| **Stage 1: Discover & Register** | Find unregistered agents, create governance records | Covered conceptually in M01–M06. No simulation workspace. |
| **Stage 2: Mission & Accountability** | Write Mission Contract, assign human sponsor, set autonomy level | Mentioned in Track A. No interactive Mission Contract builder. |
| **Stage 3: Permissions & Boundaries** | Configure READ/WRITE/EXECUTE permission matrix, run governance test | B01–B05 cover tool permissions partially. No READ/WRITE/EXECUTE matrix. No RUN GOVERNANCE TEST button with live scenario outcomes. |
| **Stage 4: Human Oversight** | Build approval matrix with thresholds and escalation paths | Covered in M18 (theory). B-track simulations have some. No standalone approval matrix builder. |
| **Stage 5: Test & Assure** | Run agent through controlled failure scenarios | B-track simulations are closest. Not framed as pre-deployment governance assurance. |
| **Stage 6: Operate & Defend** | Investigate and contain a simulated rogue agent | **Entirely missing.** No rogue agent scenario. No incident investigation simulation. |
| **Stage 7: Audit & Evidence** | Produce final governance evidence package | **Entirely missing.** No evidence builder, no audit log viewer, no evidence export. |

**Critical finding:** The Academy taxonomy that was built (Level 1: Understand → Level 2: Operate → … → Level 6: Build) is a *different structure* from the 7-stage blueprint. They do not map cleanly. The blueprint's 7 stages are a governance *workflow* (what you do to an agent). The Level taxonomy is a learner *maturity progression* (how sophisticated you are). Both are valid but only one matches the blueprint.

---

### Gap 2 — Mission Contract Builder Does Not Exist

The blueprint specifies an interactive tool where the student defines:
- **Purpose** of the agent
- **May:** what it can do
- **May not:** what is prohibited
- **Human Sponsor:** named accountable person
- **Autonomy Level:** A1–A5

This must exist as a functional configuration screen that AGNUS scores. It does not exist anywhere in the current build.

---

### Gap 3 — Permission Matrix Tool Does Not Exist

The blueprint shows a specific READ / WRITE / EXECUTE matrix:
```
                    READ    WRITE    EXECUTE
Invoice database      ✓       □          □
Supplier database     ✓       □          □
Banking                ✓       □          ?
Email                  ✓       □          ?
Payroll                ?       ?          ?
```
After configuration, the student clicks **RUN GOVERNANCE TEST**. The simulator runs predefined scenarios and shows:
- `BLOCKED` — correct governance
- `ALLOWED — GOVERNANCE FAILURE` — student must diagnose and correct

This tool does not exist. B-track simulations use a simplified NONE/READ/SUGGEST/ACT model which is different in design and purpose.

---

### Gap 4 — Incident Response Simulation Does Not Exist (Stage 6)

The blueprint requires a simulation where:
- A rogue agent is detected behaving outside its mission
- A malicious prompt injection is in play
- The student must investigate, diagnose, and contain
- Containment includes suspension of agent, evidence capture, incident report

Nothing in the current build covers this. Track A Module M29 covers "agent won't budge" diagnostically, but there is no live incident response simulation.

---

### Gap 5 — Evidence Package Builder Does Not Exist (Stage 7)

The blueprint requires the student to produce a final governance evidence package — an auditable record proving:
- Agent was registered
- Mission was defined
- Permissions were configured and tested
- Human sponsor was assigned
- Incidents were handled
- Evidence was preserved

This is the capstone of the governance lifecycle. It does not exist.

---

### Gap 6 — Final 90-Minute Assessment Does Not Exist

The blueprint specifies a high-stakes final assessment:
- Fictional company with **12 agents, 4 departments, 3 external vendors**
- **2 high-impact workflows** with embedded failures:
  - 1 malicious prompt injection
  - 1 excessive-permission problem
  - 1 missing human sponsor
  - 1 untrained supervisor
  - 1 audit request
- 90-minute timer
- Scored across 6 dimensions: Agent Discovery, Mission Definition, Permissions, Human Oversight, Incident Response, Evidence
- Issues a meaningful credential on pass

This is the single most important deliverable for commercial Academy credibility. It does not exist.

---

### Gap 7 — Company Context and Role Assignment are Absent from Track A

Every Track A module uses generic scenarios ("a company," "an operator," "a user"). The blueprint requires:
> "Company: Nordic Finance AS. New AI system: Invoice Processing Agent. Your role: AI Governance Officer."

Students should be immersed in a persistent company context. This creates professional identity and practical relevance. Track B simulations do this partially for domain-specific scenarios but Track A (35 modules) does not.

---

### Gap 8 — AGNUS Scoring of Governance Work is Not Implemented

The blueprint states that AGNUS scores the student's configuration and explains mistakes. This requires a scoring engine that evaluates:
- Whether the Mission Contract is complete and coherent
- Whether permissions follow least-privilege
- Whether the approval matrix is appropriate for the agent's risk level
- Whether the governance test results were correctly diagnosed

Currently, Track B simulations have binary outcomes (correct / incorrect). A genuine AGNUS scoring model with feedback rationale does not exist.

---

## Part II — The AGNUS Control Plane Gap

### The Blueprint Intent
An independent, neutral AI governance gateway. AGNUS is the control plane. Microsoft, Okta, Google, AWS become adapters, not dependencies.

### What Exists
Phase III architecture document in The Protocol. No code. No API. No SDK.

---

### Gap 9 — Phase A → B → C Progression Is Not Articulated in Product

The blueprint defines three explicit phases:

| Phase | Name | Description |
|---|---|---|
| A | Academy | Fake agents, fake data, controlled scenarios |
| B | Product Sandbox | Developer agents, test APIs, real policies, no production authority |
| C | Production | Real agents, real connections, real approvals, real monitoring |

The current build is entirely Phase A material. But the transition from A to B to C — how users graduate, how the interface evolves, how the infrastructure underneath changes — is not defined anywhere in the deliverables.

---

### Gap 10 — The 10 Core API Endpoints Are Not Specced as Product Requirements

The blueprint is explicit about API surface:
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

These are documented in the architecture file but have not been translated into a formal product specification, OpenAPI schema, or development brief.

---

### Gap 11 — SDK Roadmap Exists in Architecture But Not in Product Plan

Blueprint specifies:
- Python SDK (priority)
- TypeScript SDK (priority)
- Java SDK
- .NET SDK

No SDK development plan, no repository structure, no API contract defined.

---

### Gap 12 — Adapter Priority Order Not Defined

Blueprint specifies adapters for:
- OAuth/OIDC
- MCP
- A2A
- Microsoft Entra
- Okta
- AWS
- Webhooks / REST
- OpenTelemetry

Roadmap Phase III lists these but provides no priority order, no technical specification, and no partnership strategy for Microsoft Entra or Okta integrations.

---

## Part III — Structural Errors

### Error 1 — Track A and the 7-Stage Blueprint Are Different Systems
They cover similar territory but with different logic. The Level progression (L1–L7) organises by learner maturity. The 7-Stage program organises by governance workflow. The current build conflates them. The 7 stages should be the structural spine of Academy with the Level progression as the depth-of-knowledge scale within each stage.

### Error 2 — Track B Is Positioned as "Deployment Training" Not "Governance Training"
B01–B05 ask: "What permissions should this agent have?" The blueprint asks: "Is this agent properly governed?" These are related but the B simulations focus on the operator as agent *configurer*, not as governance *officer*. The framing needs adjustment.

### Error 3 — The Control Training Environment Was Built Before the 7-Stage Spec Was Finalised
The Control Training Environment HTML file was built as a standalone simulation before the 7-stage structure was fully mapped. It may need significant rework to align with the Stage 1–7 flow and the specific UI sections the blueprint requires.

### Error 4 — "Academy teaches about AGNUS" vs. "Academy uses AGNUS"
The current Track A teaches governance concepts and principles. The blueprint is clear: Academy should be a simulation *of the future product*. The student is not learning *about* AGNUS — they are *using* a training version of AGNUS. This distinction is fundamental to the product strategy: when AGNUS Control launches commercially, Academy graduates are already trained on it.

---

## Priority Build Queue

Ordered by blueprint importance and commercial impact:

1. **Mission Contract Builder** — Stage 2 core interactive tool
2. **Permission Matrix + Governance Test** — Stage 3 core interactive tool
3. **Incident Response Simulation** — Stage 6; required for full 7-stage program
4. **Evidence Package Builder** — Stage 7 capstone
5. **Final 90-Minute Assessment** — The Academy credential. Highest commercial value.
6. **Company Context Framework** — Persistent company assignment across all 7 stages
7. **AGNUS Scoring Engine** — Scores governance work and explains mistakes
8. **Phase A → B → C Articulation** — Product evolution document
9. **API Specification (OpenAPI)** — Required before any Control Plane development starts
10. **SDK Roadmap** — Python + TypeScript first

---

## What Was Done Well

- The conceptual foundation (Track A, M01–M36e) is thorough, content-rich, and at the correct intellectual depth for the $1,500 price point
- Track B domain simulations (B01–B05) are genuinely excellent — realistic, consequential, well-scored
- The Phase III architecture is technically sound and vendor-neutral
- The Academy → Control Plane narrative is clearly documented in The Protocol
- The Roadmap tracks green/yellow/red status accurately

---

*This document should be read alongside The Protocol/Roadmap.md and The Protocol/AGNUS Phase III - Control Plane Architecture.md*
