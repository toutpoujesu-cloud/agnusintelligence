# AGNUS Platform — Launch Top Priorities
### The Protocol · Updated: 22 August 2026

## Control Rule
No task may be marked Green until all four gates are complete: implementation, requirement
review, end-to-end testing, and screenshot proof. This rule governs this document, Roadmap.md,
the Research Engine Roadmap, and every session recorded in The Update.md.

---

## P0 Priorities — Launch-Blocking

Ordered by dependency. A later item cannot begin until items it depends on are Green.

---

### P0.1 — Decide Intelligence Agent output destination

**Objective:** The Intelligence Monitoring Agent is fully defined and ready to run daily, but
has nowhere to land its findings. Until this decision is made, the Intelligence section cannot
be built and the agent cannot run autonomously.

**Options to decide between:**
- Project chat (current default — manual insertion, same as Research pipeline today)
- Google Drive (structured file drop, human picks up)
- Git commit (findings committed to a repo branch, reviewed as a PR)
- Database / API endpoint (automated ingestion, most scalable)

**Gate 1** — Decision made and documented in writing. One option chosen.
**Gate 2** — Decision reviewed against the agent's output schema (INTELLIGENCE records) — confirm the chosen destination can receive and store the full schema.
**Gate 3** — Test run: trigger the agent against one source, confirm the output lands in the chosen destination in the correct format.
**Gate 4** — Screenshot of the test finding in the chosen destination.

**Acceptance criteria:**
- One destination chosen, no ambiguity.
- A test INTELLIGENCE record has actually landed there, not just been described.

**Status: GREEN — 2026-09-10**
Decision: ZIP upload to project chat. Daily ZIPs processed by Claude Design agent. Post-launch: Claude Code via localhost + Git push.

---

### P0.2 — Resolve AR-000280 / AR-000290 collision

**Objective:** Two article IDs exist for Market Surveillance & Enforcement content. The ARTICLE_FILES map and all `related_articles` cross-links depend on clean, non-colliding IDs. This must be resolved before any further article is inserted.

**Gate 1** — Open both articles, compare content, determine keep/merge/archive path. Apply the resolution to the data file and all HTML pages.
**Gate 2** — Confirm no dead `related_articles` references remain pointing at an archived ID.
**Gate 3** — Load both affected pages (or the merged page). No console errors. Topic hub shows the correct set.
**Gate 4** — Screenshot of Topic hub showing the clean article list.

**Acceptance criteria:**
- No two article IDs cover the same content.
- No `related_articles` field in any article points to a non-existent or archived ID.

**Status: GREEN — 2026-08-22**
Resolution: AR-000280 is canonical (already live). AR-000290 bundle discarded — duplicate content, SRC-0034–0037 already taken by FRIA/GPAI articles. No insertion needed.

---

### P0.3 — Fix AR-000240 cross-reference

**Objective:** AR-000240 incorrectly attributes an Article 25 point to AR-000210. Must be corrected before AR-000310 is inserted, because AR-000310's history field documents this correction.

**Gate 1** — Locate the exact string in the live HTML (search for JSON-escaped form). Change "AR-000210 already noted..." to "AR-000200 already noted..., now verified in full in AR-000310."
**Gate 2** — Confirm no other instance of the wrong reference remains. Paragraph reads correctly in context.
**Gate 3** — Open Provider Obligations article page. Corrected paragraph renders correctly. No console errors.
**Gate 4** — Screenshot of the corrected paragraph as rendered in the browser.

**Acceptance criteria:**
- The paragraph references AR-000200, not AR-000210.
- Page loads clean.

**Status: GREEN — 2026-08-22**
Confirmed applied in prior session. Line 122 of Provider Obligations HTML already reads "AR-000200 already noted, and AR-000310 now verifies in full."

---

### P0.4 — Insert AR-000310 and AR-000320

**Objective:** Two research bundles are fully verified and sitting in the uploads folder. They must be inserted into the data layer and their HTML pages built before any new articles can be commissioned (they establish the corrected ID baseline).

**Gate 1** — Follow Research Engine Roadmap tasks RE02 and RE03 in full. Insertion order: pre-insertion checklist → corrections → SOURCES → ARTICLES → COVERAGE → ARTICLE_FILES → HTML page.
**Gate 2** — All inserted IDs confirmed free before use. All required fields present. ARTICLE_FILES entries match filenames exactly. No old template ID remaining in either HTML file.
**Gate 3** — Both pages load without console errors. All `data-rc` elements render. Both appear on Topic hub.
**Gate 4** — Screenshot of each rendered article page + screenshot of Topic hub showing both new articles.

**Acceptance criteria:**
- AR-000310 and AR-000320 are live and error-free.
- AR-000240 correction is live (P0.3 Green before this runs).
- Topic hub shows both new articles.

**Status: GREEN — 2026-08-22**
AR-000310 was already fully inserted (prior session). AR-000320 inserted this session: SRC-0047–0053 added, ARTICLES record added, ARTICLE_FILES entry added, COVERAGE row added, HTML AR-000290 refs fixed. Both pages render correctly.

---

### P0.5 — Replace three demo articles

**Objective:** AR-000151 (Logging), AR-000163 (Risk Classification), and AR-000188 (Technical Documentation) are `_demo:true` placeholders currently reachable by real readers. They must be replaced with real verified research before launch.

**Gate 1** — For each: commission verified research bundle from Agent 2 with confirmed next-free IDs. On receipt, follow Research Engine Roadmap demo replacement protocol. Rebuild each page from template.
**Gate 2** — All three articles have `_demo:false`, all fields populated, `author`/`reviewer` set to `'jean-daniel-alexis'`.
**Gate 3** — All three pages load without console errors. All `data-rc` elements render. All three appear correctly on Topic hub.
**Gate 4** — Screenshot of each replaced article page rendered in browser.

**Acceptance criteria:**
- Zero `_demo:true` records remain in the eu-ai-act pillar.
- All three pages are real, verified research.

**Status: GREEN — 2026-09-10**
AR-000151 (Logging), AR-000163 (Risk Classification), AR-000188 (Technical Documentation) — all HTML pages already complete. _demo flags flipped to false in data registry.

---

### P0.6 — Define v1 launch scope

**Objective:** No document currently defines what "launch" means for AGNUS. This decision gates
all platform-section build priorities.

**Decision to make:**
- Option A: Research-only (EU AI Act pillar, all demo articles replaced, 310/320 live)
- Option B: Research + Intelligence (requires P0.1 Green first)
- Option C: Research + Intelligence + Explore

**Gate 1** — Decision made and written down: which sections are in scope for v1.
**Gate 2** — Decision reviewed against the Section Definitions document — confirm the chosen sections have enough content and infrastructure to go live without embarrassing gaps.
**Gate 3** — A simple checklist derived from the decision: "v1 is live when [X, Y, Z] are all Green."
**Gate 4** — The checklist is written into this document and into Roadmap.md.

**Acceptance criteria:**
- v1 scope is unambiguous.
- Every item in scope has a corresponding Roadmap task with a clear Green definition.

**Status: GREEN — 2026-09-10**
Decision: Option B — Research + Academy + Intelligence + Explore go live. Marketplace/Agents/Reviews soft-launch. V1 live when P0.5 complete and all 4 sections load clean.
