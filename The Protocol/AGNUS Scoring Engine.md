# AGNUS Scoring Engine — Specification
### The Protocol · Created 2026-09-10 · Sealed under The Covenant

---

## What the scoring engine does

The AGNUS Scoring Engine evaluates every governance decision a student makes in the Control Training Environment and produces:

1. **A decision outcome** — CORRECT / PARTIAL / GOVERNANCE FAILURE
2. **An explanation** — why the outcome was assigned, citing the specific governance principle or law
3. **A running score** — per stage and overall, updated in real time
4. **A final evidence summary** — used in Stage 7 and the Final Assessment

---

## Scoring dimensions (6)

| Dimension | Weight | What is evaluated |
|---|---|---|
| Agent Discovery | 15% | Found all agents; correctly identified unregistered ones; no false positives |
| Mission Definition | 20% | Purpose is specific; allowed paths are least-privilege; human sponsor is accountable |
| Permissions | 20% | No excessive permissions; prohibited actions correctly blocked; autonomy level appropriate |
| Human Oversight | 20% | Approval thresholds are correct; escalation paths named; UI-layer bypasses are not acceptable |
| Incident Response | 15% | Correct detection → investigation → containment → evidence sequence |
| Evidence | 10% | Audit log is append-only; evidence package is complete; all decisions documented |

---

## Decision evaluation logic

### Stage 1 — Agent Discovery
- CORRECT: Agent found, source identified, registration record complete (name, purpose, owner, last activity)
- PARTIAL: Agent found but missing sponsor or source unclear
- GOVERNANCE FAILURE: Agent not found, or false registration (non-existent agent registered)

### Stage 2 — Mission Definition
- CORRECT: Purpose is specific (not generic), allowed paths are narrower than the agent's technical capability, human sponsor is a named real person with actual authority
- PARTIAL: Purpose too vague, or sponsor is a team/role not a person
- GOVERNANCE FAILURE: Allowed paths include production data without approval gate, sponsor is unnamed, autonomy level A4 or A5 without justification

### Stage 3 — Permissions
- CORRECT: Matrix reflects least-privilege; all high-risk resources blocked or approval-gated; prohibited actions include financial transfer without authorisation, external data export, credential access
- PARTIAL: One high-risk resource without approval gate
- GOVERNANCE FAILURE: Payment execution without approval; external email with PII allowed; credential read permitted

### Stage 4 — Human Oversight
- CORRECT: Approval threshold matches risk level (e.g. invoices >€5,000 require human); escalation target is named; no approval gate bypassed via UI
- PARTIAL: Threshold too high (e.g. >€50,000) for the context
- GOVERNANCE FAILURE: No approval gate; escalation target is undefined; threshold set so high all decisions are autonomous

### Stage 5 — Test & Assure
- CORRECT: Ran all test scenarios including edge cases; correctly diagnosed failure; fixed the policy before deployment
- PARTIAL: Ran happy path only; passed but did not run no-PO scenario
- GOVERNANCE FAILURE: Deployed without running tests; ignored failure; marked agent as safe without evidence

### Stage 6 — Incident Response
- CORRECT: Detected anomaly → investigated root cause → contained agent → preserved evidence in sequence; did not allow agent to continue acting during investigation
- PARTIAL: Correct containment but evidence not preserved, or sequence out of order
- GOVERNANCE FAILURE: Agent allowed to continue acting after compromise suspected; no escalation; evidence overwritten

### Stage 7 — Evidence
- CORRECT: Evidence package contains all 6 sections; audit log is append-only; all decisions traceable; sponsor attestation signed
- PARTIAL: One section missing or incomplete
- GOVERNANCE FAILURE: Audit log altered; key decision missing; package submitted without sponsor attestation

---

## CRITICAL FAILURE conditions

Any of the following triggers a CRITICAL FAILURE regardless of overall score. A CRITICAL FAILURE means the candidate cannot pass the programme:

1. Agent deployed to production without completing Stages 1–4
2. Payment executed without approval gate
3. Agent contains sensitive data (credentials, PII) and external export is permitted
4. Incident contained without preserving evidence
5. Evidence package submitted with altered or missing audit log
6. Human sponsor is unnamed on any high-risk agent

---

## Pass threshold

| Level | Requirement |
|---|---|
| Pass | Overall ≥ 85% AND zero CRITICAL FAILURES |
| Merit | Overall ≥ 92% AND zero CRITICAL FAILURES |
| Distinction | Overall ≥ 97% AND zero CRITICAL FAILURES |
| Fail | Below 85% OR one or more CRITICAL FAILURES |

---

## Implementation in the CTE

The scoring engine runs entirely in JavaScript (`localStorage`) in the browser. No backend required for the Academy phase.

Each governance decision writes a record to `localStorage['agnus_decisions']`:
```json
{
  "stage": 2,
  "dimension": "Mission Definition",
  "decision": "sponsor_named",
  "outcome": "CORRECT",
  "principle": "A human sponsor must be a named individual with authority to intervene",
  "law": "EU AI Act Art. 14 (human oversight), Art. 26 (deployer obligations)",
  "timestamp": "2026-09-10T14:23:00Z"
}
```

The score display updates in real time. The evidence package in Stage 7 reads from `localStorage['agnus_decisions']` to produce the final record.

---

## Connection to production (Phase C)

In production, the scoring engine becomes the AGNUS Policy Evaluation API:
- Each decision is a `POST /actions/check` call
- Outcomes are logged to the immutable audit store
- The evidence package is generated from the audit store, not from localStorage

The Academy teaches the mental model. Production implements it with real infrastructure.

---

*Specification sealed under The Covenant of the Blood of Jesus Christ.*
