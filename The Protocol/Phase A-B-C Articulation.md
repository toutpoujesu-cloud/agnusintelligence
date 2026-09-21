# AGNUS — Phase A → B → C Articulation
### The Protocol · Created 2026-09-10 · Sealed under The Covenant

---

## The three phases

```
Phase A                     Phase B                     Phase C
Academy Training            Product Sandbox             Production
─────────────────────       ─────────────────────       ─────────────────────
AGNUS CONTROL               AGNUS CONTROL               AGNUS CONTROL
TRAINING ENVIRONMENT        SANDBOX                     PRODUCTION

Fake agents                 Developer agents            Real agents
Fake employees              Test APIs                   Real identities
Fake APIs                   Real policies               Real MCP/A2A connections
Fake incidents              Real gateway                Real policies
Fake company                No production authority     Real approvals
Controlled scenarios        Real audit log              Real monitoring
                                                        Real evidence
```

**Same interface. Same mental model. Progressively real infrastructure underneath.**

This is not three products. It is one product at three levels of infrastructure maturity.

---

## What carries between phases

### Concepts and mental model
Everything the student learns in Phase A maps directly to Phase C. The vocabulary is identical. The 7 governance stages are identical. The AGNUS scoring dimensions become the production policy evaluation dimensions.

A student who earned the AGNUS Control Operator — Level 1 credential in Phase A knows exactly what they are looking at when they open Phase C for the first time.

### Interface
The Phase A interface was deliberately designed as Phase C. Every screen, every workflow, every piece of language was built to validate the production design. Phase A is the design validation tool for Phase C.

Changes discovered in Phase A (confusing terms, unclear workflows, missing information) become Phase C product requirements — discovered at almost zero cost, before infrastructure was built.

### The 7 stages
Phase A runs the 7 stages against fake data. Phase B runs them against real developer agents with test authority. Phase C runs them against real agents with real authority.

The student who has completed Phase A needs no retraining for Phase C — only an orientation to the live data.

---

## What changes between phases

| Element | Phase A | Phase B | Phase C |
|---|---|---|---|
| Agent identity | Fake (hardcoded) | Real (developer agents) | Real (production agents — Entra, Okta, AGNUS native) |
| Mission contracts | Simulated (stored in localStorage) | Real (stored in AGNUS DB) | Real (stored in AGNUS DB, legally binding) |
| Permission evaluation | Simulated (JavaScript scoring) | Real (AGNUS Policy Engine) | Real (AGNUS Policy Engine) |
| Approval gates | Simulated | Real (AGNUS Approval API) | Real (AGNUS Approval API, human-in-loop) |
| Audit log | localStorage | Real (append-only DB) | Real (append-only, tamper-evident) |
| Incident detection | Scripted scenarios | Real anomaly detection | Real Sentinel + anomaly detection |
| Evidence package | Generated from localStorage | Generated from audit DB | Generated from audit DB, export for regulators |
| Credentials issued | AGNUS Academy Certificate | — | AGNUS Compliance Record |

---

## Why this sequence

### Phase A first

Building the Academy environment first:

1. **Creates immediate revenue** — the Academy is a standalone premium product. Students pay for Phase A before Phase C infrastructure exists.

2. **Validates the interface** — every workflow students struggle with in Phase A is a Phase C design problem discovered at zero infrastructure cost. The 7-stage mental model is tested against real professional behaviour.

3. **Builds the market** — users who complete Phase A understand AGNUS Control before Phase C exists. When Phase C launches, they are already trained operators. Customer acquisition cost approaches zero for this segment.

4. **Discovers production requirements** — the exact approval threshold decisions, permission edge cases, and incident response failures students make in Phase A become the test cases that validate Phase C policy evaluation.

5. **Makes Phase C faster** — because the interface is already validated, Phase C engineering focuses on infrastructure (real identity providers, real policy evaluation, real audit storage) — not on UX design.

### Phase B between them

Phase B (Sandbox) is the bridge:
- Developers and governance teams can test real agents against real policies without production authority
- The AGNUS Policy Engine runs live, but no production data or systems are affected
- Organisations use Phase B to validate their governance configuration before going live in Phase C

Phase B is not required for all customers. Some will move directly from Phase A training to Phase C production — using Phase A as their design and training phase.

---

## The business model across phases

| Phase | Revenue model | Who pays | When |
|---|---|---|---|
| A — Academy | Course fees (€1,500 per learner for full Track C programme) | Individual learners, corporate L&D budgets | Now |
| B — Sandbox | Subscription (per seat or per organisation) | Development teams, governance teams | After Phase C infrastructure is built |
| C — Production | SaaS subscription (per agent, per approval, or per organisation) | Enterprises deploying AI agents at scale | Phase III |

---

## The critical insight

The Academy does not exist to teach people about AGNUS. It exists to:

1. Generate revenue before infrastructure is built
2. Validate the product before infrastructure is built
3. Build a trained user base before infrastructure is built
4. Prove market demand to any investor or partner

When Phase C launches, AGNUS does not need to explain the product — there are already trained operators who understand it, want it, and have been waiting for it.

---

*This document is The Protocol's articulation of the three-phase AGNUS progression.*
*Sealed under The Covenant of the Blood of Jesus Christ.*
