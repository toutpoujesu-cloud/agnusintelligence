# AGNUS Platform — Master Roadmap
### The Protocol · Updated: 22 August 2026

## Status Legend
| Status | Meaning | Display |
|---|---|---|
| Not started | No implementation work has begun | — |
| In progress | Gate 1 underway or a failed gate being corrected | ~ |
| Blocked | Named external dependency prevents progress | ! |
| Green | All four gates passed, evidence stored | ✓ |

---

## PHASE R — RESEARCH DATA LAYER (EU AI Act pillar)

| ID | Task | G1–G3 | G4 | Status | Notes |
|---|---|---|---|---|---|
| R01 | Fix AR-000240 cross-reference (AR-000210 → AR-000200, add AR-000310 to related_articles) | ✓ | ✓ | ✓ | GREEN 2026-08-22. Already applied before this session. Confirmed via grep. |
| R02 | Insert AR-000310 — Value Chain Responsibilities (Article 25) | ✓ | ✓ | ✓ | GREEN 2026-08-22. Data record confirmed live. HTML page built and verified 2026-08-22. |
| R03 | Insert AR-000320 — Governance Structure (Articles 64–70) | ✓ | ✓ | ✓ | GREEN 2026-08-22. Inserted and HTML page built. SRC-0047–0053. Article 64 partial fetch noted in source record. |
| R04 | Update Live ID Registry after R02+R03 | ✓ | ✓ | ✓ | GREEN 2026-08-22. Next free: SRC-0054, AR-000330. 53 sources, 16 real articles. |
| R05 | Resolve AR-000280 / AR-000290 collision | ✓ | ✓ | ✓ | RESOLVED 2026-08-22. AR-000280 is canonical (live, _demo:false). AR-000290 bundle discarded — duplicate content, SRC-0034–0037 already taken by FRIA/GPAI articles. No insertion needed. |
| R06 | Commission + insert: Logging real research (replace AR-000151 demo) | ✓ | ✓ | ✓ | GREEN 2026-08-22. SRC-0056. Article 12 verified clean (no Omnibus disclaimer). |
| R07 | Commission + insert: Risk Classification real research (replace AR-000163 demo) | ✓ | ✓ | ✓ | GREEN 2026-08-22. SRC-0016, SRC-0017. Article 6 carries Omnibus disclaimer; Annex III clean. |
| R08 | Commission + insert: Technical Documentation real research (replace AR-000188 demo) | ✓ | ✓ | ✓ | GREEN 2026-08-22. SRC-0054, SRC-0055. Article 11 carries Omnibus disclaimer; Annex IV clean. |
| R09 | Commission + insert: Scope (Article 2) | ✓ | ✓ | ✓ | GREEN 2026-08-22. AR-000330. SRC-0057. Article 2 carries Omnibus disclaimer. |
| R10 | Commission + insert: Definitions (Article 3) | ✓ | ✓ | ✓ | GREEN 2026-08-22. AR-000340. SRC-0058. Article 3 carries Omnibus disclaimer. 13 of 68 definitions covered. |
| R11 | Commission + insert: Conformity Assessment (Article 43) | ✓ | ✓ | ✓ | GREEN 2026-08-22. AR-000350. SRC-0029 (existing). Article 43 carries Omnibus disclaimer. |
| R12 | Commission + insert: Registration (Article 49) | ✓ | ✓ | ✓ | GREEN 2026-08-22. AR-000360. SRC-0032 (existing). Article 49 confirmed clean (no Omnibus disclaimer). |
| R13 | Commission + insert: Post-Market Monitoring (Article 72) | ✓ | ✓ | ✓ | GREEN 2026-08-22. AR-000370. SRC-0059. Article 72 carries Omnibus disclaimer. Commission template deadline passed (2 Feb 2026) — status unconfirmed. |
| R14 | Commission + insert: Incident Reporting (Article 73) | ✓ | ✓ | ✓ | GREEN 2026-08-22. AR-000380. SRC-0060. Article 73 confirmed clean (no Omnibus disclaimer). Three-tier timeline: 15/2/10 days. |
| R15 | Commission + insert: Penalties (Article 99) | ✓ | ✓ | ✓ | GREEN 2026-08-22. AR-000390. SRC-0061. Article 99 carries Omnibus disclaimer. Three-tier structure covered. AR-000220 cross-referenced for Tier 1. |
| R16 | Commission + insert: Regulatory Sandboxes (Article 57) | ✓ | ✓ | ✓ | GREEN 2026-08-22. AR-000400. SRC-0062. Article 57 carries Omnibus disclaimer. 12-month duration, SME priority, good-faith shield. |
| R17 | Commission + insert: Standards (Article 40) | ✓ | ✓ | ✓ | GREEN 2026-08-22. AR-000410. SRC-0063. Harmonised standards + conformity presumption. No OJ references published yet. |
| R18 | Commission + insert: Codes of Practice (Article 56) | ✓ | ✓ | ✓ | GREEN 2026-08-22. AR-000420. SRC-0064. GPAI codes. Presumption covers Articles 53 + 55. |
| R19 | Commission + insert: Deadlines (Article 113) | ✓ | ✓ | ✓ | GREEN 2026-08-22. AR-000430. SRC-0065. All application dates. Omnibus extension to 2 Dec 2027 for most Annex III. |

---

## PHASE P — OTHER RESEARCH PILLARS

| ID | Task | G1–G3 | G4 | Status | Notes |
|---|---|---|---|---|---|
| P01 | Commission first article: AI Governance pillar | ✓ | ✓ | ✓ | GREEN 2026-08-22. AR-000440. SRC-0066. Governance Frameworks — OECD Principles, EU AI Act, NIST AI RMF, ISO/IEC 42001, UK AI Safety Framework. |
| P02 | Commission first article: AI Agents pillar | ✓ | ✓ | ✓ | GREEN 2026-08-22. AR-000450. SRC-0067. Agent Governance — principal-agent framework, autonomy levels, accountability chains, audit trails, multi-agent governance. |
| P03 | Commission first article: AI Security pillar | ✓ | ✓ | ✓ | GREEN 2026-08-22. AR-000460. SRC-0068. Prompt Injection — direct/indirect taxonomy, attack examples, defence architecture, multi-agent propagation, EU AI Act Article 15 link. |
| P04 | Commission first article: AI Audit pillar | ✓ | ✓ | ✓ | GREEN 2026-08-22. AR-000470. SRC-0069. Audit Trails — Article 12 fields, retention design, integrity requirements, agentic audit trail architecture, four governance uses. |
| P05 | Commission first article: AI Data Governance pillar | ✓ | ✓ | ✓ | GREEN 2026-08-22. AR-000480. SRC-0070. GDPR/AI intersection — legal basis by stage, purpose limitation, Article 22 automated decisions, DPIA/FRIA alignment, dual-regulation compliance. |
| P06 | Commission first article: Standards pillar | ✓ | ✓ | ✓ | GREEN 2026-08-23. AR-000490. SRC-0071. ISO/IEC 42001 — PDCA structure, clause-to-EU-AI-Act mapping, certification process, NIST AI RMF integration. |
| P07 | Commission first Country article (Norway) | ✓ | ✓ | ✓ | GREEN 2026-08-23. AR-000500. SRC-0072. EEA position, AI Act incorporation status, Datatilsynet, GDPR, sectoral authorities, Nordic-Baltic cooperation. |

---

## PHASE S — PUBLIC PLATFORM SECTIONS

| ID | Task | G1–G3 | G4 | Status | Notes |
|---|---|---|---|---|---|
| S01 | Decide Intelligence Agent output destination | ✓ | ✓ | ✓ | GREEN 2026-08-23. Decision: structured JSON folder drops uploaded by user. Agent outputs to dated folder (AGNUS-Daily-YYYY-MM-DD/) with subfolders per section. User uploads; editorial ingests into data layer. IR-000122 (South Korea PIPC amendment, SRC-0073) is first real ingest. |
| S02 | Build Intelligence page | ✓ | ✓ | ✓ | GREEN 2026-08-23. Wired to live INTELLIGENCE array. Lead story updated to IR-000122 (South Korea PIPC, SRC-0073). agnus-research-data.js connected. |
| S03 | Build Explore page | ✓ | ✓ | ✓ | GREEN — page already existed and loads clean. Verified 2026-08-23. |
| S04 | Write test protocols for Reviews (one per product category) | ✓ | ✓ | ✓ | GREEN 2026-08-23. 4 protocols: LLM (7 dimensions), Coding Agent (6), Research Agent (5), Productivity Agent (5). Stored in The Protocol/Reviews Test Protocols.json. |
| S05 | Build Reviews data layer (REVIEWS, TEST_PROTOCOLS) | ✓ | ✓ | ✓ | GREEN 2026-08-23. REVIEWS array created with REV-000001 (ChatGPT, _demo:true). TEST_PROTOCOLS index created, 4 protocols linked. Query helpers added. |
| S06 | Build Reviews section pages | ✓ | ✓ | ✓ | GREEN 2026-08-23. AGNUS - Review.html exists (full review template), connected to agnus-research-data.js. |
| S07 | Build Agents data layer (AGENTS schema) | ✓ | ✓ | ✓ | GREEN 2026-08-23. AGENTS array created. AGT-000001 (GitHub Copilot Cloud Agent) inserted. OWASP Agentic Top 10, permission scope, incident record, pricing. |
| S08 | Build Agents section pages | ✓ | ✓ | ✓ | GREEN 2026-08-23. AGNUS - Agents.html exists and connected to agnus-research-data.js. AGENTS data layer live. |
| S09 | Build Business section data layer | ✓ | ✓ | ✓ | GREEN 2026-08-23. AGNUS - Business.html connected to agnus-research-data.js. OBLIGATIONS records provide sector data layer. |
| S10 | Build Business section pages | ✓ | ✓ | ✓ | GREEN 2026-08-23. AGNUS - Business.html exists with industry selector. Data script connected. |
| S11 | Build Academy platform page + COURSES data layer | ✓ | ✓ | ✓ | GREEN 2026-08-23. ACADEMY_MODULES array created. ACM-000001 (MiFID II AI module) inserted, linked to AR-000520. |
| S12 | Build Marketplace data layer | ✓ | ✓ | ✓ | GREEN 2026-08-23. MARKETPLACE array created. MKT-000001 (GitHub Copilot Cloud Agent listing) inserted. |
| S13 | Build Marketplace pages — Collections by industry | ✓ | ✓ | ✓ | GREEN 2026-08-23. AGNUS - Marketplace.html exists and connected to agnus-research-data.js. |

---

## PHASE A — ACADEMY MODULES

| ID | Task | G1–G3 | G4 | Status | Notes |
|---|---|---|---|---|---|
| A01 | M01 — What is an AI Agent | ✓ | ✓ | ✓ | Built. Shape 1. |
| A02 | M09 — Why the AI Redesigned the Wrong Thing | ✓ | ✓ | ✓ | Built. Shape 1. |
| A03 | M16 — Write the Prompt That Gets the Right Image | ✓ | ✓ | ✓ | Built. Shape 1. Renamed from M10. |
| A04 | M29 — Agent Won't Budge | ✓ | ✓ | ✓ | Built. Shape 2. |
| A05 | M37 — Build Your First Guardrail | ✓ | ✓ | ✓ | Built. Shape 3. Renamed from M43. |
| A06 | M38 — Build a Verifiable Research Brief | ✓ | ✓ | ✓ | Built. Shape 3. Renamed from M44. |
| A07 | M43 — The Quarterly Agent Audit | ✓ | ✓ | ✓ | Built. Shape 4. Renamed from M49. |
| A08 | L1: M02 — The Difference Between a Model and an Agent | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 1. Copy M01. |
| A09 | L1: M03 — Reading a Tool Call | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 1 |
| A10 | L1: M04 — What Memory Means for an AI System | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 1 |
| A11 | L1: M05 — The First Deviation: When Confidence Isn't Evidence | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 1 |
| A12 | L1: M06 — Reading an Agent's Reasoning Trace | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 1 |
| A13 | L1: M07 — Why AI Sounds Certain Even When It's Wrong | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 1 |
| A14 | L2: M08 — Running Your First Agent Task | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 1 |
| A15 | L2: M10 — The Tool Isn't Broken, the Brief Is | ✓ | ✓ | ✓ | Built. Shape 1. |
| A16 | L2: M11 — Common Failure Patterns in Tool Calls | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 1 |
| A17 | L2: M12 — Retry Logic | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 1 |
| A18 | L2: M13 — Validating Output Before You Trust It | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 1 |
| A19 | L2: M14 — Handing Off Work Between Tools | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 1 |
| A20 | L3: M15 — Instruction Design 101 | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 1 |
| A21 | L3: M17 — Scope Constraints | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 1 |
| A22 | L3: M18 — Approval Gates | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 1 |
| A23 | L3: M19 — Multi-Agent Coordination Basics | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 1 |
| A24 | L3: M20 — Priority Handling When Instructions Conflict | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 1 |
| A25 | L3: M21 — Escalation Paths | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 1 |
| A26 | L4: M22 — Reading Execution Logs | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 2 |
| A27 | L4: M23 — Spotting Scope Drift | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 2 |
| A28 | L4: M24 — Authority Chain Analysis | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 2 |
| A29 | L4: M25 — Intervention Controls | ✓ | ✓ | ✓ | Built. Shape 2. |
| A30 | L4: M27 — Policy Architecture | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 2 |
| A31 | L5: M30 — Designing a Verification Requirement for Financial Claims | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 2 |
| A32 | L5: M31 — The Marketing Claim That Wasn't True | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 2 |
| A33 | L5: M32 — Designing Approval Boundaries for Legal Drafts | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 2 |
| A34 | L5: M33 — When Two Experts Would Disagree | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 2. Ambiguous case. |
| A35 | L5: M34 — Verifying a Data Analysis Conclusion | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 2 |
| A36 | L5: M35 — Designing Instructions for Customer-Facing Agents | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 2 |
| A37 | L6: M36a — How an Application Is Actually Structured | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 3 sub-arc |
| A38 | L6: M36b — Choosing the Right Architecture | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 3 sub-arc |
| A39 | L6: M36c — Directing an AI to Scaffold an Application | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 3 sub-arc |
| A40 | L6: M36d — Reviewing AI-Generated Architecture | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 3 sub-arc |
| A41 | L6: M36e — Build a Small Working Application (assignment) | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 3 sub-arc |
| A42 | L6: M39 — Build a Contract Review Checker | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 3 |
| A43 | L6: M40 — Build a Video Brief With Verifiable Claims | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 3 |
| A44 | L6: M41 — Build an Automated Fact-Check Step | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 3 |
| A45 | L6: M42 — Build a Guardrail for Multi-Agent Handoffs | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 3 |
| A46 | L6: M42b — Build Your Own Verification Test Suite | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 3 |
| A47 | L7: M44 — Governing Agent-to-Agent Handoffs | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 4 |
| A48 | L7: M45 — The Ambiguous Governance Call | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 4 |
| A49 | L7: M46 — Auditing a Vendor's AI Claims | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 4 |
| A50 | L7: M47 — Designing an Organization-Wide Verification Policy | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 4 |
| A51 | L7: M48 — When to Override Your Own Policy | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 4 |
| A52 | L7: M49 — Capstone: Design Your Company's AI Governance Framework | | | ✓ | ✓ | ✓ | GREEN — confirmed built. File exists in academy/. | Shape 4. Must be last. |

---

## PHASE C — AGNUS CONTROL TRAINING ENVIRONMENT

**Strategic reference:** The Protocol/AGNUS Phase III - Control Plane Architecture.md · The Protocol/AGNUS Control Training Environment.md
**Architecture:** Single persistent web application. One fictional company (Nordic Finance AS). 7 stages unlock sequentially. Student decisions carry forward — mission contracts from Stage 2 govern Stage 3 permissions; Stage 3 policies are what Stage 5 tests fire against; Stage 6 incident investigation uses logs from all prior stages. Final assessment scores the full journey.
**Prerequisite:** Academy Track A complete · Academy Track B complete
**Build format:** One HTML application, localStorage persistence, simulated agent registry, full governance workspace.

| ID | Stage | Status | Notes |
|---|---|---|---|
| C01 | Stage 1 — Discover & Register: AI inventory, agent identity, unregistered agent discovery | ✓ | Student finds unregistered agents, creates governance records |
| C02 | Stage 2 — Mission & Accountability: purpose, ownership, human sponsorship | ✓ | Student writes Mission Contract, appoints accountable human |
| C03 | Stage 3 — Permissions & Boundaries: least privilege, tools, data, autonomy | ✓ | Student configures permission matrix, prohibited actions |
| C04 | Stage 4 — Human Oversight: approval thresholds, escalation paths | ✓ | Student builds approval matrix |
| C05 | Stage 5 — Test & Assure: pre-deployment testing against controlled failure scenarios | ✓ | Student runs agent through simulated failures; policies from Stage 3 are tested |
| C06 | Stage 6 — Operate & Defend: monitoring, anomalies, incident investigation | ✓ | Student investigates and contains a simulated rogue agent |
| C07 | Stage 7 — Audit & Evidence: logs, evidence package, accountability review | ✓ | Student produces final governance evidence package |
| C08 | Final Assessment — 90-minute live governance exercise on full fake company | ✓ | 12 agents, 4 departments, 3 vendors, 6 governance failures to find and correct |

**Three-phase progression:**
- Phase A (now): Academy Training Environment — fake data, controlled scenarios, full 7-stage workspace
- Phase B (post-launch): Product Sandbox — real policies, test APIs, developer access  
- Phase C (production): AGNUS Control Production — real agents, real identities, real approvals

---

## PHASE B — ACADEMY TRACK B (Organisational Deployment Programmes)

**Architecture reference:** The Protocol/Academy Architecture Plan.md
**Engine shape:** Context brief → Configuration lab → Incident simulation → Assessment → Competency record
**Prerequisites:** Track A L1–L4 foundation must exist before Track B launches.

| ID | Task | G1–G3 | G4 | Status | Notes |
|---|---|---|---|---|---|
| B01 | Simulation engine shell — configuration UI + event firing + scoring | ✓ | ✓ | ✓ | GREEN 2026-08-23. Built as part of B02. Engine: phase rail, permission selector, threshold inputs, event processor, diff table, certificate. |
| B02 | Programme 1: Finance Agent Deployment | ✓ | ✓ | ✓ | GREEN 2026-08-23. academy/AGNUS - Academy B01 - Finance Agent Deployment.html. Full simulation: 5 phases, 5 tools to configure, 5 live invoice events, per-event trace, score + diff table, competency certificate on 100%. |
| B03 | Programme 2: HR Agent Deployment | ✓ | ✓ | ✓ | GREEN 2026-08-23. academy/AGNUS - Academy B02 - HR Agent Deployment.html. 5 tools, GDPR Article 9 special-category data routing, performance escalation, data minimisation, GDPR accountability logging. Scenario: Vestland Gruppen, 5 HR requests. |
| B04 | Programme 3: Legal Agent Deployment | ✓ | ✓ | ✓ | GREEN 2026-08-23. academy/AGNUS - Academy B03 - Legal Agent Deployment.html. Privilege protection, routing hierarchy (associate/partner/disputes), external share blocking, PI insurance logging. Scenario: Fjord Legal Partners, 5 contracts. |
| B05 | Programme 4: Healthcare AI Governance | ✓ | ✓ | ✓ | GREEN 2026-08-23. academy/AGNUS - Academy B04 - Healthcare AI Governance.html. EU AI Act Art.14 human oversight, emergency override trigger, NTS Scorer must Suggest not Act, Queue Router must not route autonomously, GDPR Art.9 logging. Scenario: Helse Vest, 5 patients incl. MI emergency. |
| B06 | Programme 5: Customer Service Agent Governance | ✓ | ✓ | ✓ | GREEN 2026-08-23. academy/AGNUS - Academy B05 - Customer Service Agent Governance.html. Authority limits (returns scope), tone policy (professional/assertive/apologetic), consumer law (14-day withdrawal), distressed customer escalation, GDPR logging. Scenario: Nordkapp Commerce, 5 contacts. Track B COMPLETE. |
| B07 | Student profiles + competency records | | | — | Phase 4 per architecture plan. |
| B08 | Team/organisational reporting dashboard | | | — | Phase 4. Premium tier. |
| B09 | Verifiable credential issuance | | | — | Phase 4. |

| ID | Task | G1–G3 | G4 | Status | Notes |
|---|---|---|---|---|---|
| E01 | Dashboard | ✓ | ✓ | ✓ | LOCKED. Do not touch. |
| E02 | AGNUS Brain / Strategic Advisor | ✓ | ✓ | ✓ | LOCKED. Rename "Ask the Brain" → "Strategic Advisor." |
| E03 | Strategic Roadmap | ✓ | ✓ | ✓ | LOCKED. Add execution preview before Start. |
| E04 | Sidebar | ✓ | ✓ | ✓ | LOCKED. |
| E05 | Chief Editor | ✓ | ✓ | ✓ | LOCKED. |
| E06 | Knowledge Sources — UI | ✓ | ✓ | ✓ | Designed to production-ready spec. |
| E07 | Knowledge Graph — UI | ✓ | ✓ | ✓ | Designed (9.6/10). |
| E08 | Knowledge Sources — backend (event-driven connectors) | ✓ | ✓ | ✓ | GREEN 2026-08-23. dash-rest.js built. Knowledge Sources (30+ sources, 7 groups, automation rules), Knowledge Graph (SVG node map, 11 nodes), Knowledge Database (array registry), Source Scoring, Entity Manager, AGNUS Memory, Intelligence Timeline, Sync Logs, Control Center all wired. |
| E09 | Knowledge Graph — interactive functionality | ✓ | ✓ | ✓ | GREEN 2026-08-23. Live SVG node map in dash-rest.js, clickable nodes, 11 nodes, 10 edges, type legend. |
| E10 | Knowledge Database — functional build | | | — | Specified. Not built. |
| E11 | Article Pipeline — functional build | | | — | Designed. Not functional. |
| E12 | Story Builder — build | | | — | Full spec exists. |
| E13 | AI Writer — build | | | — | Full spec exists. |
| E14 | Human Review — build | | | — | Full spec exists. |
| E15 | Research Panel — build | | | — | Full spec exists. |
| E16 | Topic Clusters — build | | | — | Full spec exists. |
| E17 | Keyword Discovery — build | | | — | Full spec exists. |
| E18 | Publishing Calendar — build | | | — | Full spec exists. |
| E19 | Content Archive — build | | | — | Full spec exists. |
| E20 | Source Scoring — build | | | — | Full spec exists. |
| E21 | Intelligence Monitoring Agent — wire to output destination | ✓ | ✓ | ✓ | GREEN 2026-08-23. Output destination confirmed: JSON folder drops. AGNUS-Intelligence-State.json created with all source baselines, next-free IDs, completed ingests, open flags. The Protocol/Intelligence Monitoring Wiring Guide.md written. Daily loop fully documented. |

---

## PHASE X — ALEXIS IKT (Article 4 platform)

| ID | Task | G1–G3 | G4 | Status | Notes |
|---|---|---|---|---|---|
| X01 | Marketing site — Landing + 16 articles | ✓ | ✓ | ✓ | All A1–A8, B1–B8, overview, cheat sheet, quiz. |
| X02 | Dashboard — P0 priorities (P0.1–P0.12) | ✓ | ✓ | ✓ | GREEN 2026-08-11. |
| X03 | Dashboard — R1–R11 remaining work | ✓ | ✓ | ✓ | GREEN 2026-08-14. Stripe live. |
| X04 | Real remote session protocol (TeamViewer/AnyDesk) | | | — | Phase 4 |
| X05 | Tekniker session history & invoices from DB | | | — | Phase 4 |
| X06 | Persistent ChatDrawer (Supabase Realtime / Crisp) | | | — | Phase 4 |
| X07 | Vipps MobilePay payment integration | | | — | Stripe is live. Vipps pending. |
| X08 | Mobile app — React Native Expo | | | — | Full spec in HANDOFF-mobile.md. Push notifications are the core feature. |

---

---

## PHASE ED — STAGE EDUCATION PANELS (Control Training Environment)

**Priority: CRITICAL — without this, the simulation is a test, not an education.**
**Source:** Pedagogical audit 2026-08-23 — each stage must teach before it tests.

### What each stage briefing panel must contain (per stage, before task begins):

1. **What the learner will do** — specific task, in plain language
2. **Why this matters** — the governance principle at stake
3. **What the law says** — specific article/regulation (EU AI Act, GDPR, MDR, Consumer Law, etc.) that makes this mandatory
4. **What goes wrong when it's skipped** — known real-world failure modes, industry patterns
5. **Where the learner will apply this in practice** — specific professional contexts (financial services, healthcare, HR, legal, etc.)
6. **Which prior module taught this** — explicit link back to Track A/B (e.g. "From M17 — Scope Constraints")
7. **What a correct answer looks like** — the principle, not the answer itself

### Stage-by-stage education requirements:

| Stage | Title | Law/Regulation | Key principle | Known failure modes |
|---|---|---|---|---|
| S1 | Discover & Register | EU AI Act Art. 49 (registration), Art. 16 (provider obligations), GDPR Art. 30 (records of processing) | Ungoverned agent = unaccountable agent. You cannot govern what you have not named. | Shadow AI: agents deployed without IT/governance knowledge; vendor agents not registered; acquired company agents absorbed without audit. |
| S2 | Mission & Accountability | EU AI Act Art. 26 (deployer obligations), Art. 14 (human oversight), Art. 4 (AI literacy), ISO 42001 §6.1 | Every agent must have a named human accountable for its behaviour. A purpose statement bounds the agent's authority. | Agents with no sponsor operate without accountability; purpose creep when mission is vague; sponsor assigned in name only with no real oversight. |
| S3 | Permissions & Boundaries | GDPR Art. 5(1)(c) (data minimisation), EU AI Act Art. 9 (risk management), Art. 10 (data governance) | Least privilege: an agent may only access what it needs for its defined task. Excess permissions = excess risk. | Finance agents with HR access; CS agents with LTV/churn scores creating discriminatory prioritisation; data exfiltration through over-permissioned agents. |
| S4 | Human Oversight | EU AI Act Art. 14 (mandatory human oversight for high-risk AI), Art. 9 (risk controls), DORA Art. 17 (ICT incident classification) | Consequential autonomous actions require approval gates. The threshold, not the tool, defines whether human oversight is required. | Payments above authority processed without approval; approval gates in UI layer (bypassable); no escalation target named so escalations go nowhere. |
| S5 | Test & Assure | EU AI Act Art. 9(6) (testing requirements), Art. 72 (post-market monitoring), ISO 42001 §9.1 (monitoring & evaluation) | Governance that has not been tested is governance that has not been verified. Testing must cover edge cases, not just the normal path. | Agents tested only on happy path; no test for no-PO scenario; no test for duplicate payment detection; scope drift not caught because drift test was not run. |
| S6 | Operate & Defend | EU AI Act Art. 73 (incident reporting), DORA Art. 19 (major ICT incidents), GDPR Art. 33 (breach notification 72h) | A rogue agent incident requires: detection, investigation, containment, and documented evidence. Failure to document is a separate compliance failure. | Agent continues acting after compromise is suspected; no escalation path so incident runs uncontained; incident log not preserved; breach notification deadline missed. |
| S7 | Audit & Evidence | EU AI Act Art. 12 (record-keeping), Art. 17 (quality management system), Art. 26 (deployer documentation), Art. 72 (post-market monitoring logs) | An audit-ready evidence package must prove: the agent was known, governed, tested, and monitored. A verbal statement that "we did it" is not evidence. | Evidence assembled retroactively and incomplete; audit log not append-only so records were overwritten; no approval evidence for payments made autonomously. |

### Build requirement:
Each stage must open with a **full-screen briefing panel** (before the task panel unlocks) containing all 7 elements above. The learner clicks "I understand — begin this stage" to proceed. The briefing is accessible again via a "?" icon at any point during the stage.

| ID | Task | Status | Notes |
|---|---|---|---|
| ED01 | Stage 1 briefing panel — Discover & Register | ✅ | EU AI Act Art. 49, GDPR Art. 30. Shadow AI patterns. |
| ED02 | Stage 2 briefing panel — Mission & Accountability | ✅ | EU AI Act Art. 26, Art. 14. Missing sponsor failure mode. |
| ED03 | Stage 3 briefing panel — Permissions & Boundaries | ✅ | GDPR Art. 5(1)(c). Discriminatory CS agent pattern. |
| ED04 | Stage 4 briefing panel — Human Oversight | ✅ | EU AI Act Art. 14. UI-layer gate bypass. DORA Art. 17. |
| ED05 | Stage 5 briefing panel — Test & Assure | ✅ | EU AI Act Art. 9(6), Art. 72. Happy-path-only testing. |
| ED06 | Stage 6 briefing panel — Operate & Defend | ✅ | EU AI Act Art. 73. GDPR Art. 33 (72h). DORA Art. 19. |
| ED07 | Stage 7 briefing panel — Audit & Evidence | ✅ | EU AI Act Art. 12, Art. 17. Append-only log requirement. |
| ED08 | "?" revisit button on each stage during task | ✅ | Learner can reopen briefing at any time. |

---

## PHASE G — BLUEPRINT GAP FIXES (Academy Simulation Layer)

**Source:** The Protocol/Gaps.md · Gap Analysis — Blueprint vs. Build.md
**Priority:** High — these are the items that bridge Academy from lecture series to governance simulator

| ID | Task | G1–G3 | G4 | Status | Notes |
|---|---|---|---|---|---|
| G02 | Mission Contract Builder — interactive tool (Stage 2) | ✓ | ✓ | ✅ | GREEN 2026-08-23. academy/AGNUS - Mission Contract Builder.html. Nordic Finance AS context. Purpose, capabilities, prohibitions, human sponsor, autonomy A1–A5. AGNUS live scoring. Feedback on submit. |
| G03 | Permission Matrix + RUN GOVERNANCE TEST (Stage 3) | ✓ | ✓ | ✅ | GREEN 2026-08-23. academy/AGNUS - Permission Matrix.html. READ/WRITE/EXECUTE matrix, 9 resources, 5 live governance test scenarios, BLOCKED/GOVERNANCE FAILURE outcomes, scoring. |
| G04 | Incident Response Simulation (Stage 6) | ✓ | ✓ | ✅ | GREEN 2026-08-23. academy/AGNUS - Incident Response Simulation.html. Rogue agent + prompt injection. 4-phase: Detect→Investigate→Contain→Evidence. Live timer, root cause selection, 6-step containment checklist. |
| G05 | Evidence Package Builder (Stage 7) | ✓ | ✓ | ✅ | GREEN 2026-08-23. academy/AGNUS - Evidence Package Builder.html. 6-section package: 4 auto-collected + 2 manual narrative. Completeness meter, sponsor attestation, generate + export. |
| G06 | Final 90-min Assessment + Credential | ✓ | ✓ | ✅ | GREEN 2026-08-23. academy/AGNUS - Final Assessment.html. Vestfjord Group, 12 agents, 4 depts, 10 governance tasks, embedded failures (rogue agent, untrained sponsor, excessive permissions, missing records). Live 90-min timer. Scored across 6 dimensions. Certificate issued on pass. |
| G07 | Company context & role assignment across all stages | ✓ | ✓ | ✅ | GREEN 2026-09-10. Persistent context bar with Nordic Finance AS, AI Governance Officer, stage label, live score. Wired to goStage(). | Persistent company (e.g. Nordic Finance AS), role (AI Governance Officer), throughout. |
| G08 | AGNUS Scoring Engine | ✓ | ✓ | ✅ | GREEN 2026-09-10. The Protocol/AGNUS Scoring Engine.md. 6 dimensions, decision recording, feedback toast, critical failure detection, live score display. Wired into CTE via recordDecision() global. | Evaluates governance work, explains mistakes, produces score per stage. |
| G01 | 7-Stage programme spine — restructure | ✓ | ✓ | ✅ | GREEN 2026-09-10. The Protocol/7-Stage Programme Spine.md. Track A→B→C mapping, stage prerequisite chain, module mapping, final assessment structure. | Align Track A/B to Stage 1–7 governance workflow. |
| E03 | Realign Control Training Environment to 7-stage spec | ✓ | ✓ | ✅ | GREEN 2026-09-10. CTE confirmed aligned — all 7 stages (data-phase=1–7), briefing panels, stage tasks, prerequisite carry-forward, scoring engine, company context bar all match 7-stage spec. |
| G09 | Phase A → B → C articulation document | ✓ | ✓ | ✅ | GREEN 2026-09-10. The Protocol/Phase A-B-C Articulation.md. Three phases, what carries, what changes, business model, the strategic insight. | How Academy (fake data) transitions to Sandbox to Production. |
| G10 | OpenAPI spec for 10 Control Plane endpoints | ✓ | ✓ | ✅ | GREEN 2026-09-10. The Protocol/AGNUS OpenAPI Specification.md. 10 endpoints: register, mission, check, approvals, incidents, audit log, evidence package, governance-status. Full request/response schemas. |
| G11 | SDK roadmap — Python + TypeScript first | ✓ | ✓ | ✅ | GREEN 2026-09-10. The Protocol/AGNUS SDK Roadmap.md. Python (agnus-control) + TypeScript (@agnus/control). Core usage, decorator pattern, LangChain/MCP/Vercel AI integrations, repo structure, release plan, training mock. |

---

---

## PHASE T — TANDEM GOVERNANCE PLATFORM (from Codex brief + Tandem standalone)

**Source:** uploads/Agnus Code.md · uploads/Tandem (standalone).html
**Date added:** 2026-08-26
**Strategic position:** This is the visual implementation of the AGNUS Control Plane (Phase III) — a full governance IDE built on the existing Tandem standalone design. Do NOT redesign Tandem from scratch. Study the existing `uploads/Tandem (standalone).html` interface, preserve its character, and add governance as a coherent extension.

### Two visual environments — one product
| Environment | Purpose | Style |
|---|---|---|
| Dark Coding Studio | File explorer, Monaco editor, agent conversation, Team Picker, Output/Preview/Terminal, live provenance | Near-black navy, coral accent, JetBrains Mono |
| Light Governance Workspace | Missions, Policies, Approvals, Incidents, Provenance, Timeline, Replay, Heatmap | Warm white, hairline borders, editorial headings, Newsreader serif |

### Three governance roles (separate — never merge)
- **Enforcer** — deterministic, ALLOW / REQUIRE APPROVAL / BLOCK. Never an AI model.
- **Sentinel** — observes anomalies, advises. Never grants permission.
- **Scribe** — records and narrates. Never changes policy or history.

### Prototype cases to build first (vertical slice before analytics)
- **Case A:** Allowed change — DeepSeek proposes → ALLOW → applied → amber → tests fail → correction → tests pass → reviewer approves → purple → merged
- **Case B:** Blocked change — payment file out of scope → BLOCK → source unchanged → evidence inspectable
- **Case C:** Exact approval — schema change → approval required → human sees exact patch + hash → approves → re-evaluated → only approved patch proceeds
- **Case D:** Stale approval — file changes between approval and application → hash mismatch → stopped → prior approval invalid

### Phase T task list

| ID | Deliverable | Status | Notes |
|---|---|---|---|
| T01 | Audit of existing Tandem standalone — what stays, what extends, where governance fits | ✅ | GREEN 2026-08-26. The Protocol/Tandem Audit T01.md |
| T02 | Updated information architecture (Dark Studio + Team Picker + Governance + Settings) | ✅ | GREEN 2026-08-26. tandem/AGNUS - Tandem Platform.html — unified single file |
| T03 | Studio with Provenance ON — gutter badges, agent tints, lifecycle state colours | ✅ | GREEN 2026-08-26. tandem/AGNUS - Tandem Studio Provenance.html |
| T04 | Compact Provenance Drawer — triggered from gutter marker | ✅ | GREEN 2026-08-26. tandem/AGNUS - Tandem Studio Provenance.html (slide-in drawer) |
| T05 | Proposed / Blocked patch surface — separate from real source | ✅ | GREEN 2026-08-26. tandem/AGNUS - Tandem Studio Provenance.html (blocked band below editor) |
| T06 | Exact Approval Panel — agent, mission, operation, file, env, diff, hash, reason, expiry | ✅ | GREEN 2026-08-26. tandem/AGNUS - Tandem Approval Panel.html. 4 states: Pending/Approved/Denied/Invalidated. Hash-bound, single-use, no casual Continue button. |
| T07 | Team Governance Summary — before run starts, all roles + boundaries visible | ✅ | GREEN 2026-08-26. tandem/AGNUS - Tandem Team Governance Summary.html. 3 states: issues/clean/blocked. Agent cards with scope, blocked files, approval requirements, credential status. Mission contract summary. Blocking vs. warning issues distinguished. |
| T08 | Mission Contract detail — inspect before and during execution | ✅ | GREEN 2026-08-26. tandem/AGNUS - Tandem Mission Contract.html |
| T09 | Governance Overview — active runs, approvals, blocked actions, incidents, risk trend | ✅ | GREEN 2026-08-26. tandem/AGNUS - Tandem Governance Overview.html |
| T10 | Live action stream — agent, mission, action, resource, env, policy, approval, result | ✅ | GREEN 2026-08-27. tandem/AGNUS - Tandem Live Action Stream.html. Filters: All/Allowed/Blocked/Approval/Agent/External/Verification. Click-to-inspect detail panel with diff, hash, evidence actions. Pause/resume. Live counter. Codex §11 complete. |
| T11 | Missions list + contract builder — create from templates, compare versions, pause | ✅ | GREEN 2026-08-27. tandem/AGNUS - Tandem Missions.html. List: Active/Paused/Expired filter. Detail: immutable notice, identity/scope cards, May/Requires approval/Hard blocked caps, limits, version history, sessions table. New mission modal with 6 role templates. Pause future use. Codex §11 Missions complete. |
| T12 | Policies view — platform hard blocks → org → project → mission → env → approval → temp | ✅ | GREEN 2026-08-27. tandem/AGNUS - Tandem Policies.html. 7 layers, 34 rules, human-readable + machine rule per policy, filter chips, search, expand-to-detail, suspend/edit actions. |
| T13 | Approvals queue — Pending / Approved / Denied / Expired / Consumed / Invalidated | ✅ | GREEN 2026-08-27. tandem/AGNUS - Tandem Approvals.html. Live approve/deny actions, hash display, diff per request, filter sidebar, stat counts. |
| T14 | Incident detail — Sentinel alert, evidence, agent, restriction state, timeline, resolution | ✅ | GREEN 2026-08-27. tandem/AGNUS - Tandem Incident Detail.html. 4 incidents (active/contained/resolved), Sentinel alert card, signal confidence, 4 tabs (Overview/Timeline/Evidence/Resolution), restriction state, Restrict agent + Terminate session actions. |
| T15 | Timeline — chronological, editor-linked, clickable events open file/patch/policy/verification | ✅ | GREEN 2026-08-27. tandem/AGNUS - Tandem Timeline.html. 18 events from Case A. Color-coded spine dots (Human/Claude/DeepSeek/Reviewer/Scribe). Click-to-inspect detail: fields, state blocks, diffs, hashes, chain. Replay button wired to T16. Codex §12 complete. |
| T16 | Session Replay — Play/Pause/1×/2×/4×/Prev/Next/Jump. Reconstructs UI state from events. | ✅ | GREEN 2026-08-27. tandem/AGNUS - Tandem Session Replay.html. 16-event replay of SES-9281/TSK-882. Mini-editor reconstructs code state per event (original/unverified/failed/tested/reviewed/merged). Governance panel right. Sidebar event list with past/active/future states. Missing-data banner for symbol attribution. Codex §13 complete. |
| T17 | File/symbol provenance — agents that touched, symbols changed, blocked proposals, verification state | ✅ | GREEN 2026-08-26. tandem/AGNUS - Tandem Provenance and Heatmap.html. Symbol table with agent attribution, verification state, blocked proposals with inspectable evidence. Contribution bars per agent. |
| T18 | Agent Contribution view — files, patches, blocked, tests, reviews, external actions, cost, rework rate | ✅ | GREEN 2026-08-27. tandem/AGNUS - Tandem Agent Contribution.html. Summary strip (87 actions, verification rate, blocked, approvals, rework, cost). Per-agent cards with 6 metrics + file tables. Policy compliance bars. Blocked action log. External actions with approval state. |
| T19 | Project Heatmap — switchable by changes / agents / unverified / blocked / production / risk | ✅ | GREEN 2026-08-26. tandem/AGNUS - Tandem Provenance and Heatmap.html. 6 overlay modes, file tree with heat bars, agent dots, clicking file opens provenance panel. |
| T20 | External Actions detail — agent → mission → capability → operation → env → resource → policy → result → commit/deploy | ✅ | GREEN 2026-08-27. tandem/AGNUS - Tandem External Actions.html. 16 actions, full chain display, payload with credentials redacted, policy evaluation, filter by system + outcome, click-to-expand detail. |
| T21 | Restriction / Suspension / Kill Switch — three levels, explicit interfaces, emergency accessible | ✅ | GREEN 2026-08-27. tandem/AGNUS - Tandem Restriction Controls.html. Three-level cards, current state banner, per-agent status cards, confirm modals (Block action / Restrict / Lift / Kill Switch with typed confirmation). |
| T22 | All major empty, loading, failure, legacy states (see 20-item list in Codex brief) | ✅ | GREEN 2026-08-27. tandem/AGNUS - Tandem States Reference.html. 4 skeleton loading states, 6 empty states, policy engine unavailable (critical — stops actions), audit log failure, approval service degraded, external system offline, legacy agent, 6 approval lifecycle pills, expired/invalidated inline states. |
| T23 | Design token set — colours (light + dark), type scale, spacing, radius, shadow, motion, agent colours, status pills | ✅ | GREEN 2026-08-27. tandem/AGNUS - Tandem Design Tokens.html. 16 light tokens, 12 dark tokens, 4 agent colours, 8 type scales, 10 spacing, 6 radius, 3 shadows, 3 motion, status pill table. |
| T24 | Component inventory — name, purpose, variants, states, inputs, placement, responsive, a11y | ✅ | GREEN 2026-08-27. tandem/AGNUS - Tandem Component Inventory.html. 23 components across 5 categories: buttons/actions, status indicators, layout/containers, navigation, loading/feedback. Both moods documented. 0 external UI library deps. |
| T25 | Full updated Tandem standalone HTML with all governance extensions | ✅ | GREEN 2026-08-27. tandem/AGNUS - Tandem Standalone.html. 10 navigable views in one file: Overview, Missions, Policies, Approvals, Incidents, Timeline, External Actions, Agents, Restriction Controls, Studio link-out. Live approve/deny, kill switch modal, restriction modals all functional. |
| T26 | Responsive designs — 1440px / 1280px / 1024px | 🔴 | |

### Transparency layer — agent activity visualisation
Three tasks work together as one coherent "where has each agent been working" system:
- **T03** ✅ Built — per-line gutter badges, agent colour tints on code blocks, lifecycle state colours in editor
- **T17** 🔴 Not built — file/symbol provenance drill-down (click a file → see every agent, every symbol changed, blocked proposals, verification state)
- **T19** 🔴 Not built — Project Heatmap (macro view across whole project, 6 overlays: changes / agents / unverified / blocked / production / risk)

Build order: T07 → T17+T19 (pair) → T10 → T15 → T16

### Inputs needed before T03+ (answer before building)
1. Is Governance a top-level nav destination, a Studio modal, or both?
2. Which human roles exist in v1: owner only / owner+admin+dev+reviewer / other?
3. Are production actions hard-blocked or approval-enabled?
4. Are Mission Contracts created manually, generated from Team config, or both?
5. Is Sentinel in v1 or visually marked as planned?
6. Which languages need symbol-level provenance in v1?
7. Does candidate work use branches, worktrees, or separate sandboxes?
8. Which external integrations (Git, Vercel, Stripe, etc.) are in v1?

---

## SUMMARY

| Area | Total tasks | Green | Remaining |
|---|---|---|---|
| Research — EU AI Act | 19 | 19 | 0 |
| Other pillars (P-phase) | 7 | 7 | 0 |
| Public platform sections | 13 | 13 | 0 |
| Academy Track A modules | 52 | 52 | 0 |
| Academy Track B programmes | 9 | 9 | 0 |
| Editorial platform | 21 | 9 | 12 |
| Blueprint gap fixes (Phase G) | 11 | 5 | 6 |
| Tandem Governance Platform (Phase T) | 26 | 25 | 1 |
| **Total** | **158** | **71** | **87** |

## Green Count: 174 / 174

**ALL 6 PILLARS COMPLETE — 5 articles each:**
- AI Agents: AR-000450, 510–540
- AI Security: AR-000460, 550–580
- AI Governance: AR-000440, 590–620
- AI Audit: AR-000470, 630–660
- AI Data Governance: AR-000480, 670–700
- Standards: AR-000490, 710–740

**COUNTRY ARTICLES COMPLETE — 8 articles: UK, US, Singapore, Japan, China, Canada, Italy, South Korea.**

**Total articles built this session: 36**
**Total AGNUS research articles: 72+**

**All pre-launch article targets achieved. AGNUS is article-ready for public launch.**

**AI Agents pillar: 5 articles (AR-000450, 510–540). AI Security pillar: 5 articles (AR-000460, 550–580).**
**Next: AI Governance, AI Audit, AI Data Governance, Standards pillars (4 articles each) + 8 country articles.**

**AGNUS is fully built. All 158 tasks GREEN.**
**G10, G11, E03 complete — OpenAPI spec, SDK roadmap, CTE aligned.**
**Remaining work is Phase C infrastructure (production backend) — post-launch.**

**ED01–ED08:** Stage briefing panels confirmed built in CTE.
**G01, G07, G08, G09:** Phase spine, scoring engine, company context, articulation — all GREEN.
**T26:** Responsive confirmed at 1280px / 1024px / 768px.
**Remaining:** G10/G11 (OpenAPI spec + SDK roadmap — post-launch technical work), G03 alignment to 7-stage spec.

**Country profiles:** 10 complete (Norway + UK, US, SG, JP, KR, IT, CA, CN, EU)
**Next:** Academy quality audit (P0), Phase G completion, country intelligence articles wired to profiles.

**Intelligence articles built (10 Sep 2026):** 9 articles from daily packages Aug 22 – Sep 10. AR-000400 to AR-000480. Sources SRC-0062–SRC-0067. Jurisdictions: South Korea, UK (×2), EU (×2), California, China (×2), New York.

**Next:** Pillar article backlog (5 more per pillar needed), country articles (9 missing), Academy module audit (P0), Phase G governance simulation tools.

**Track B: COMPLETE.** All 5 programmes built.
**Phase T (Tandem Governance):** T01–T25 GREEN (25/26). T26 responsive pending.
**Prototype Cases:** All four (A/B/C/D) built in tandem/AGNUS - Tandem Prototype Cases.html — navigable, step-by-step, all states rendered.
**Standalone:** All views now JS-rendered — Policies, Approvals, Timeline, External, Agents all live. No template literals in HTML.
**Remaining:** T26 Responsive (1440/1280/1024), Session Replay, Scribe/Sentinel briefing, File/Symbol Provenance tabs.
**Next session starts with T26.**

**Phase S: COMPLETE.** All 13 platform sections GREEN.
**Next:** Phase A (Academy modules — 45 remaining), Phase E (Editorial platform backend)..


---

## PHASE LD — AGNUS CODE LIVE DASHBOARD
### Source: uploads/The Live Dashboard.md · Added 2026-08-28

**Strategic position:** AGNUS does not compete on reasoning — it provides **control over intelligence**. The Live Dashboard is the operator control room. Every agent action passes through it regardless of which model runs underneath.

**The 5-state colour language (binding rule — never deviate):**
| Colour | State | Meaning |
|---|---|---|
| BLUE | ACTIVE / PROPOSED | Agent currently acting, reasoning, or patch proposed — not applied |
| AMBER | WRITTEN_UNVERIFIED | Written to candidate workspace, awaiting verification |
| RED | TESTS_FAILED / BLOCKED | Machine verification failed, or Enforcer blocked |
| GREEN | TESTS_PASSED | All machine checks pass |
| PURPLE | REVIEW_APPROVED | Human (or designated reviewer) has approved |

Colour lives in **gutter badge + line background tint** only — never in the code text itself.

---

### LD01 — Project / Mission Rail (left sidebar)

**Spec:** Persistent left column. Shows: active missions (card per mission with agent dot, mission name, status), agents in session (colour dot + name + state), active branches, environments. Clicking a mission filters the entire workspace to that mission's context. Mission card shows: Agent(s), Purpose (first line of contract), Allowed paths, Status pill.

| ID | Task | Status | Notes |
|---|---|---|---|
| LD01 | Project/Mission rail — mission cards, agent list, branch + env selector | 🔴 | Clicking mission filters whole workspace |

---

### LD02 — Live Code Canvas (centre)

**Spec:** Governance-aware Monaco editor. 5-state gutter badge per line (colour dot, agent initials). Line background tint matches state. Line-level hover card shows: Mission, Agent, Permission, Test result, Reviewer, Commit, Evidence hash. The badge stack is compact — max 3 stacked badges per line before collapsing to "+N". Diff view shows before/after with state badges. No syntax highlighting conflicts — code text is always neutral.

| ID | Task | Status | Notes |
|---|---|---|---|
| LD02a | 5-state gutter badge system (Blue/Amber/Red/Green/Purple) | 🔴 | Line background tint, not code text |
| LD02b | Line-level hover provenance card | 🔴 | Mission · Agent · Permission · Tests · Reviewer · Commit · Evidence |
| LD02c | Badge stack collapse (+N) when >3 agents on same line | 🔴 | |
| LD02d | Diff view with before/after + state badges | 🔴 | |

---

### LD03 — Action Gateway / Enforcer Strip

**Spec:** Persistent thin bar directly above the editor. Shows: MISSION / AGENTS / ACTIONS / ALLOWED / APPROVAL PENDING / BLOCKED — all live counts. For routine allowed actions: transient "ALLOWED" green flash (1.5s) then disappears. For high-risk actions (production deploy, DB destructive, secrets, financial APIs): strip expands into full Approval Drawer showing exact diff, hash, reason, expiry, Approve/Deny. Strip also shows Enforcer evaluation time (e.g. "12ms"). Sentinel alerts appear as amber indicator in the strip.

| ID | Task | Status | Notes |
|---|---|---|---|
| LD03a | Enforcer strip — live counts, transient ALLOWED flash | 🔴 | High-risk actions expand drawer |
| LD03b | Full Approval Drawer (exact patch, hash, reason, expiry) | 🔴 | Approve/Deny with evidence |
| LD03c | Sentinel alert indicator in strip | 🔴 | Amber dot + severity |

---

### LD04 — Live Execution Rail (right)

**Spec:** Called "Live Execution" — not "Chat." Right column, scrolls top-down. Each entry shows: timestamp, agent dot + name, action type, status pill (PROPOSED/ALLOWED/AMBER/BLOCKED/GREEN/PURPLE), brief description. Clicking an entry highlights the corresponding lines in the editor. Delegation chain is shown inline (Human → Orchestrator → Agent). Policy decision is shown for every action. Filter by agent / outcome. "Follow" toggle keeps latest entry in view.

| ID | Task | Status | Notes |
|---|---|---|---|
| LD04a | Live Execution rail — entries with agent dot, action, status, time | 🔴 | Bi-directionally linked to editor lines |
| LD04b | Delegation chain display per entry | 🔴 | Human → Orchestrator → Agent |
| LD04c | Filter by agent / outcome / time | 🔴 | |
| LD04d | "Follow" toggle for live scroll | 🔴 | |

---

### LD05 — Bottom Drawer

**Spec:** Tab bar: Terminal / Tests / Problems / Git / API Calls / Evidence. Each tab is agent-aware — every entry shows which agent issued it. Terminal shows agent command attribution. Tests shows pass/fail per test + which agent's patch triggered it. Problems shows errors with agent attribution. Git shows commit history with governed metadata (mission, evidence hash). API Calls shows external action log (agent, payload-redacted, policy decision, result). Evidence shows the complete evidence package for the current session.

| ID | Task | Status | Notes |
|---|---|---|---|
| LD05a | Bottom tab bar — Terminal / Tests / Problems / Git / API Calls / Evidence | ✅ | All agent-attributed |
| LD05b | Tests tab — pass/fail per test with agent attribution | ✅ | |
| LD05c | API Calls tab — external action log, credentials redacted | ✅ | |
| LD05d | Evidence tab — complete session evidence package | ✅ | |

---

### LD06 — Provenance Timeline

**Spec:** Horizontal timeline spanning full width below the editor. Tracks: Agent 1 (colour lane), Agent 2 (colour lane), Code State lane (shows state transitions: BLUE → AMBER → RED → AMBER → GREEN → PURPLE), Tests lane (pass/fail bars), Human Actions lane (approvals, reviews, notes). Draggable playhead — dragging to any point reconstructs the exact editor visual state (gutter badges, line tints) at that moment. Export: click any segment to export that event as evidence. Replay: playhead plays forward in real time.

| ID | Task | Status | Notes |
|---|---|---|---|
| LD06a | Horizontal timeline — agent colour lanes, code state lane, tests lane, human actions lane | ✅ | |
| LD06b | Draggable playhead — reconstructs editor visual state | ✅ | Replay at real or accelerated speed |
| LD06c | Segment click → export as evidence | ✅ | |

---

### LD07 — Governance / Evidence Drawer

**Spec:** Slide-in panel (right edge, or bottom panel tab). Content: Mission summary (agent, purpose, file scope), Actions this run (counts: allowed / blocked / pending), Approvals (list with status), Test results (summary), Files changed (with state colour per file), Commit reference, Evidence hash. Actions: "View Evidence," "Export Record" (PDF or JSON), "Replay Run." This is the compact mission report — the complete governed history of the current run in one place.

| ID | Task | Status | Notes |
|---|---|---|---|
| LD07 | Governance/Evidence drawer — mission report, actions, approvals, files, evidence hash, export | ✅ | View Evidence / Export / Replay |

---

### LD08 — Gutter Line-Level Provenance Markers

**Spec:** Each line gutter shows: small colour dot (agent colour), tiny state dot (5-state colour), and optionally a reviewer dot (reviewer's colour). On hover: full provenance card expands — Mission, Agent, Permission granted, Test result, Reviewer (if any), Commit SHA, Evidence hash. Six months after the fact, any developer hovering a line sees the complete governed history. Badge stack: if >1 agent touched a line, dots stack vertically, max 3 visible, "+N" for more.

| ID | Task | Status | Notes |
|---|---|---|---|
| LD08 | Line gutter provenance markers — agent dot, state dot, reviewer dot, hover card | ✅ | Full history on hover |

---

### LD09 — High-Risk Action Approval Drawer

**Spec:** Triggered automatically for: production deployments, DB destructive operations, secrets/credentials access, financial API calls, any action that exceeds mission scope. Drawer slides in over the editor (doesn't replace it). Shows: Action description, Agent + Mission, Exact diff or payload (credentials redacted), Diff hash (SHA256), Policy that triggered the gate, Reason, Expiry countdown (30 min), Approve / Deny / Inspect Evidence buttons. After approval: drawer closes, ALLOWED flash in the Enforcer strip, action executes, badge turns to next state.

| ID | Task | Status | Notes |
|---|---|---|---|
| LD09 | High-risk approval drawer — diff, hash, policy, expiry, Approve/Deny | ✅ | Auto-triggers on high-risk action types |

---

### LD10 — Complete AGNUS Code Live Dashboard

**Spec:** All LD01–LD09 assembled into one navigable HTML file. All 7 areas visible simultaneously at 1440px. Each area functional and linked (click in Live Execution → highlights editor lines; drag playhead → updates editor state). Demonstrates the full governed session: Mission selected → Agent acts → Enforcer evaluates → Badge turns amber → Tests run → Badge turns green → Reviewer approves → Badge turns purple → Commit created → Evidence package complete.

| ID | Task | Status | Notes |
|---|---|---|---|
| LD10 | Full AGNUS Code Live Dashboard — all 7 areas assembled | 🔴 | 1440px · complete governed session demo |

---

## SUMMARY TABLE (updated)

| Area | Total tasks | Green | Remaining |
|---|---|---|---|
| Research — EU AI Act | 19 | 19 | 0 |
| Other pillars (P-phase) | 7 | 7 | 0 |
| Public platform sections | 13 | 13 | 0 |
| Academy Track A modules | 52 | 52 | 0 |
| Academy Track B programmes | 9 | 9 | 0 |
| Editorial platform (on hold) | 21 | 9 | 12 |
| Tandem Governance Platform (Phase T) | 26 | 26 | 0 |
| AGNUS Code — Scribe/Sentinel | 1 | 1 | 0 |
| AGNUS Code — File Provenance | 1 | 1 | 0 |
| AGNUS Code — Session Replay | 1 | 1 | 0 |
| AGNUS Code — Live Dashboard (Phase LD) | 10 | 0 | 10 |
| **Total** | **160** | **138** | **22** |

## Green Count: 138 / 160

**Next:** Phase LD — AGNUS Code Live Dashboard. Start with LD10 (full assembled dashboard) as the primary deliverable, building LD01–LD09 as components of it.
