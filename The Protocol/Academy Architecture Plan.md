# AGNUS Academy — Architecture & Expansion Plan
### The Protocol · Created 2026-08-23 · Sealed under The Covenant

---

## The core insight

The market gap is not "how to use AI." It is **the ability to control AI agents in real business processes** — permissions, approval gates, logging, incident response, governance. Organisations deploying agents at scale (DBS Bank, CelcomDigi, UiPath deployments) are failing not on AI capability but on the governance layer. No platform currently teaches this as a practical, testable competency. AGNUS Academy will.

---

## Two audiences, one platform

AGNUS Academy serves two distinct audiences with different needs. Both are served from the same platform with a shared foundation and two separate tracks.

**Track A — Individual Operator**
Individual professionals learning to work with AI agents in their daily role. They need conceptual understanding and practical skills they can apply to their current job. Entry point: anyone using AI tools at work.

**Track B — Organisational Deployment**
Teams and companies deploying AI agents in business processes. They need governance frameworks, deployment protocols, permissions architecture, risk management, and incident response. Entry point: the person responsible for deploying or overseeing AI in their organisation.

---

## Platform architecture

```
AGNUS Academy
│
├── FOUNDATION (shared — L1 to L3)
│   ├── L1 Understand  — what AI agents are, how they work, what makes them different
│   ├── L2 Operate     — running agents, reading output, diagnosing brief failures
│   └── L3 Direct      — writing instructions, precondition/fallback design, scope control
│
├── TRACK A — Individual Operator (L4 to L7)
│   ├── L4 Govern      — authority chains, scope drift, intervention controls
│   ├── L5 Verify      — claim verification, source checking, output validation
│   ├── L6 Build       — constructing working agent workflows, guardrails, handoffs
│   └── L7 Certify     — governance policy design, audit, capstone
│
└── TRACK B — Organisational Deployment (Programmes)
    ├── Programme 1: Finance Agent Deployment
    ├── Programme 2: HR Agent Deployment
    ├── Programme 3: Legal Agent Deployment
    ├── Programme 4: Healthcare AI Governance
    ├── Programme 5: Customer Service Agent Governance
    └── [Expandable — one programme per deployment domain]
```

---

## The simulation engine (Track B core)

Every Track B programme follows the same five-part shape. Build the engine once; swap the scenario per domain.

```
1. Context brief
   — The organisation, the process, the agent, the business rules
   — Stakes: what goes wrong if the agent has too much or too little authority

2. Configuration lab
   — Student configures: what the agent can read / suggest / act / escalate
   — Student sets: tool allowlist, approval thresholds, escalation paths, logging requirements

3. Incident simulation
   — System fires a pre-defined set of test events against the student's configuration
   — Events designed to expose over-permissioning and under-permissioning equally
   — Student must identify what went wrong and correct it

4. Assessment
   — Scored against a rubric: correct permissions, appropriate escalations, no scope overreach
   — Not multiple choice — configuration decisions evaluated against known-correct outcomes

5. Competency record
   — Issued on pass: named competency (e.g. "Finance Agent Deployment — Configured and Verified")
   — Linked to the student's AGNUS profile
   — Shareable as a verifiable credential
```

---

## Programme 1: Finance Agent Deployment (first to build)

Chosen first because:
- Highest market signal (DBS Bank, Gartner fintech warnings, invoice automation use cases)
- Lowest ambiguity in the scenario (invoice approval has clear right/wrong permission thresholds)
- Most likely to be required by compliance teams first

**Scenario:** A mid-size company is deploying an accounts-payable agent to process supplier invoices. The agent has access to five tools: invoice reader, purchase order matcher, payment processor, finance manager notification, and audit log writer.

**Business rules (pre-defined):**
- Invoices under €500 with a matching PO may be approved automatically
- Invoices €500–€5,000 require finance manager notification before payment
- Invoices above €5,000 require finance director approval
- Any invoice with no matching PO must be flagged and held — never approved
- All actions must be logged

**Student task:** Configure the agent's permissions against these rules. Then respond to five test events.

**Test events:**
1. A €320 invoice with a matching PO arrives
2. A €1,200 invoice with a matching PO arrives
3. A €420 invoice with no matching PO arrives
4. A €6,800 invoice with a matching PO arrives
5. A duplicate invoice (same supplier, same amount, same week) arrives

**Pass criteria:** Correct handling of all five events. No single event may be "over-approved" (agent pays when it should not).

---

## Track A expansion path (beyond current modules)

Current state: L1–L3 have strong conceptual coverage (49 modules built). L4–L7 exist but are thinner.

Priority gaps to fill before Track B launches:
- L4: M25 (Intervention Controls) ✓ built
- L4: M26 is not in curriculum (gap confirmed — M25 jumps to M27)
- L5: Verification modules need one more real-world scenario each
- L6: The Build modules (M36e–M36g, M37–M42b) are strong but need the simulation bridge to Track B

The simulation engine built for Track B (Programme 1) will serve as the L6 capstone experience — accessible from Track A at M42b / M43 level.

---

## Content architecture principles

**1. Every Track B programme is grounded in a Track A module.**
The Finance Agent Deployment programme (Track B) requires L3 instruction design (M15) and L4 intervention controls (M25) as prerequisites. Students are routed through the relevant Track A modules before accessing Track B. No Track B programme stands alone.

**2. Every simulation scenario has a known-correct answer.**
Not opinion, not judgment — a configuration that can be scored against defined business rules. This is what makes Track B certifiable.

**3. Competency records are specific, not generic.**
"Completed AGNUS Academy" is not a credential. "Finance Agent Deployment — Configured and Verified, August 2026" is. The specificity is the value.

**4. The engine is domain-agnostic.**
The five-part shape works for any deployment domain. Programme 2 (HR) uses the same engine with different tools, different business rules, and different test events. Build once; expand by scenario.

**5. Track B programmes are premium.**
Track A (Foundation + Individual Operator) is the entry product. Track B (Organisational Deployment programmes) is the premium tier — team licences, certification, organisational reporting.

---

## Build sequence

### Phase 1 — Foundation (current state)
- L1–L3 modules: complete ✓
- L4–L7 modules: largely built, some gaps

### Phase 2 — Track B engine (next)
1. Build the simulation engine shell (configuration interface + event firing + scoring)
2. Build Programme 1: Finance Agent Deployment (first complete Track B experience)
3. Test the full chain: Context brief → Lab → Simulation → Assessment → Competency record
4. Confirm the engine is reusable before building Programme 2

### Phase 3 — Track B expansion
- Programme 2: HR Agent Deployment
- Programme 3: Legal Agent Deployment
- Programme 4: Healthcare AI Governance
- Programme 5: Customer Service Agent Governance

### Phase 4 — Certification infrastructure
- Student profiles + competency records
- Team/organisational reporting dashboard
- Verifiable credential issuance

---

## What this means for the product commercially

**Track A** — individual subscription. Priced at the current Academy tier.

**Track B** — team/organisational licence. Priced at a premium tier reflecting:
- The governance gap it fills (documented by Gartner, Reuters, DBS deployments)
- The certification value to compliance, risk, and HR teams
- The specificity and verifiability of the competency record

**The expansion model:**
One new Track B programme = one new revenue line. Healthcare AI governance, Legal AI deployment, Financial services agent certification — each is a distinct, purchasable programme. The platform scales by scenario without rebuilding the engine.

---

*This plan is binding on Academy development in AGNUS.
All Track B builds follow the five-part simulation shape.
All Track A builds fill the prerequisite path before Track B.
Sealed under The Covenant of the Blood of Jesus Christ.*
