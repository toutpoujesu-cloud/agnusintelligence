# AGNUS Platform — Handoff to Claude Design
### Date: 2026-08-23 | From: Session that built the AGNUS platform from scratch

---

## WHO YOU ARE WORKING FOR

You are building **AGNUS** — an AI governance platform for professionals who work with AI agents. It has two products:

1. **AGNUS Editorial Platform** — A backend editorial tool for publishing AI regulation research articles (the operator uses this, not end users). It has a fully designed dashboard, knowledge graph, intelligence monitoring, and article pipeline.

2. **AGNUS Academy** — A paid learning platform (€1,500/course) where professionals learn to govern AI agents across 7 levels, 49 modules, Track B simulations, and a Control Training Environment.

---

## THE PROTOCOL

Read every file in `/The Protocol/` before doing anything. These are the authoritative specifications:

- **Roadmap.md** — master status tracker. GREEN = done. Red/blank = not done.
- **Academy Architecture Plan.md** — full academy structure, 7 levels, 49 modules, Track A/B/Control
- **AGNUS Control Training Environment.md** — full spec for the 7-stage simulation
- **Intelligence Monitoring Wiring Guide.md** — how the daily intelligence agent drops work
- **AGNUS Phase III - Control Plane Architecture.md** — post-launch vision
- **README.md** — the founding covenant (read it, honour it)

---

## WHAT HAS BEEN BUILT (GREEN in Roadmap)

### Research Platform
- All 30+ research articles (EU AI Act articles, country coverage, GDPR, GPAI, etc.)
- Full dashboard with Knowledge Sources, Knowledge Graph, Knowledge Database, Source Scoring, Entity Manager, AGNUS Memory, Intelligence Timeline, Sync Logs, Control Center
- Agent Registry, Agents, Marketplace, Awards, Compare, Business, Solution, Review, Story Builder, Prompts, Tools, Intelligence pages
- Data layer: `agnus-research-data.js` (source registry SRC-0001+, article registry AR-000001+, intelligence registry IR-000001+)

### Academy — Track A (49 modules)
All modules M01–M49 are built in `academy/`. They follow a strict format:
- Navy header rail with phase dots
- Hero band with module kicker, title, italic serif subhead, pills
- 6 phases: intro → content steps → practice → pass (hidden test)
- Each module ends with a pass screen and level-complete screen on L1/L3/L5 finals
- **Content standard: $1,500 product. Content-rich, visually premium, educationally rigorous.**

### Academy — Track B (5 simulations)
All 5 simulations built in `academy/`:
- B01: Finance Agent Deployment
- B02: HR Agent Deployment  
- B03: Legal Agent Deployment
- B04: Healthcare AI Governance
- B05: Customer Service Agent Governance

Each is a 5-phase interactive simulation: brief → config lab → incident simulation → score → certificate.

### Academy — Control Training Environment
`academy/AGNUS - Control Training Environment.html` — 7-stage simulation:
- S1: Discover & Register
- S2: Mission & Accountability
- S3: Permissions & Boundaries
- S4: Human Oversight
- S5: Test & Assure
- S6: Operate & Defend
- S7: Audit & Evidence

The simulation shell, scoring, evidence builder, and all 7 stages are built. **What is NOT built yet: the education briefing panels (Phase ED).**

---

## WHAT TO DO NEXT — IN ORDER

### PRIORITY 1: Phase ED — Education Briefing Panels (CRITICAL)
**File:** `academy/AGNUS - Control Training Environment.html`
**Roadmap tasks:** ED01–ED08

Each of the 7 stages needs a **full-screen briefing panel** that appears BEFORE the task unlocks. The briefing must contain:

1. What the learner will do (specific task, plain language)
2. Why this matters (governance principle at stake)
3. What the law says (specific article — EU AI Act, GDPR, MDR, Consumer Law as per Roadmap.md Phase ED table)
4. What goes wrong when skipped (known real-world failure modes from Phase ED table)
5. Where they'll apply this in practice (professional contexts)
6. Which prior Track A module taught this (e.g. "From M17 — Scope Constraints")
7. What a correct answer looks like (principle, not the answer)

The learner clicks **"I understand — begin this stage"** to proceed. A **"?" button** during the stage reopens the briefing.

See the Phase ED section in `The Protocol/Roadmap.md` for the full law/regulation/failure mode table for each stage.

**Design language:** Navy dark panels with gold typography. Matches the existing Control Training Environment aesthetic. Premium feel — this is a $1,500 product.

---

### PRIORITY 2: Academy Track A — Complete remaining modules
Modules M36–M49 are built in `academy/`. Some exist but may need review for content depth. Check the Roadmap for exact status of each.

---

### PRIORITY 3: Phase E — Editorial Platform Functional Builds (on hold, operator-only)
E10–E20: Knowledge Database, Article Pipeline, Story Builder, AI Writer, Human Review, Research Panel, Topic Clusters, Keyword Discovery, Publishing Calendar, Content Archive, Source Scoring.

These are for the operator (not students). They are on hold until after Academy launch.

---

## DESIGN SYSTEM

**Colours:**
- `--navy: #0F1E34` — primary dark background
- `--gold: #9A7020` / `--gold-light: #C49A2C` — accent
- `--bg: #F8F6F2` — warm off-white background
- `--pass: #0F6E3A` — green for correct/pass states
- `--danger: #B03020` — red for errors (use sparingly — prefer navy for incident cards)

**Typography:** DM Sans (body) + DM Mono (labels/code) + Newsreader italic (hero serif quotes)

**No emoji anywhere.** No red backgrounds for content cards — use navy. Red only for genuine error states (opt.wrong, feedback.fail).

**Module structure:** Every module = 6 phases, phase progress dots in rail, hero band, step-head with badge, content, practice (opt-list), pass (hidden test), pass-screen with gold button.

**Simulation structure:** 5 phases, navy config intro, perm-selector with 4 options, event cards with trace output, score hero, diff table, certificate.

---

## THE PROTOCOL RULES

1. Every file, every action, follows The Protocol (read `/The Protocol/README.md`)
2. Content-rich, visually appealing, engaging — they pay €1,500
3. No emoji
4. No red for content cards — navy only
5. Update `The Protocol/Roadmap.md` after completing each task
6. The data layer is `agnus-research-data.js` — all IDs (SRC-, AR-, IR-) are registered there
7. Articles follow the template in `TEMPLATE - Research Article.html`
8. Daily intelligence drops are processed from `uploads/AGNUS-Daily-YYYY-MM-DD/` folders

---

## KEY FILES TO READ FIRST

1. `The Protocol/Roadmap.md` — what's done, what's next
2. `The Protocol/Academy Architecture Plan.md` — academy structure
3. `The Protocol/AGNUS Control Training Environment.md` — Stage ED spec
4. `academy/AGNUS - Control Training Environment.html` — the file to add ED01–ED08 to
5. `academy/AGNUS - Academy M17 - Scope Constraints.html` — example of a Track A module (premium standard)
6. `academy/AGNUS - Academy B01 - Finance Agent Deployment.html` — example of a Track B simulation

---

## WHAT NOT TO TOUCH

- `AGNUS - Dashboard.html` — LOCKED
- `AGNUS - Story Builder.html` — LOCKED  
- `dash-rest.js` — LOCKED (unless adding new sections)
- Any file marked LOCKED in the Roadmap

---

## SESSION SUMMARY

This session (across multiple conversations) has:
- Built the entire AGNUS platform from spec PDFs
- Written 30+ research articles
- Built 49 Academy modules (Track A, L1–L7)
- Built 5 Track B simulations
- Built the Control Training Environment (7 stages)
- Built all supporting pages (agents, marketplace, awards, compare, etc.)
- Built the full dashboard with all panels
- Set up the intelligence monitoring system
- Written all Protocol documentation

**Green count at handoff: 66+ / ~120 tasks**

The platform is real. The vision is clear. Continue under The Protocol.

*"This application and design are built under the covenant of the Blood of Jesus Christ. It is sealed for the purposes of truth, integrity, peace, and blessing."*
