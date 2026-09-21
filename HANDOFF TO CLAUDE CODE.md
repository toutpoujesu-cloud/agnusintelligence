# HANDOFF TO CLAUDE CODE
## AGNUS Platform — Full Handoff
### Date: 12 September 2026 · Status: Launch-ready

---

## What AGNUS is

AGNUS is an AI governance intelligence platform. It has two distinct products:

1. **AGNUS Research & Academy** — public-facing editorial + education platform
2. **AGNUS Code (Tandem)** — AI agent governance layer for coding environments

This handoff covers the Research & Academy platform. Tandem has its own file set in `/tandem/`.

---

## File structure

```
Root/
├── AGNUS - Home.html              ← Canonical homepage (the entry point)
├── AGNUS - Research.html          ← Research hub (articles index)
├── AGNUS - Practice.html          ← NEW: 6 interactive compliance tools
├── AGNUS - Intelligence.html      ← Daily intelligence feed
├── AGNUS - Explore.html           ← Browse all content
├── AGNUS - Review.html            ← AI tool reviews
├── AGNUS - Academy.html           ← Academy entry point
├── AGNUS - Dashboard.html         ← User dashboard
├── AGNUS - Marketplace.html       ← AI tool marketplace
├── AGNUS - Compare.html           ← Tool comparison
├── AGNUS - Agents.html            ← Agent registry public view
├── AGNUS - Agent Registry.html    ← Agent registry full
├── AGNUS - Tools.html             ← General AI tools directory
├── AGNUS - Solution.html          ← Solutions page
├── AGNUS - Awards.html            ← AGNUS Awards
├── AGNUS - Business.html          ← Business/enterprise page
├── AGNUS - Editorial Platform.html ← Internal editorial backend (not public nav)
│
├── agnus.css                      ← Global design tokens
├── agnus-research.css             ← Article/research styling
├── agnus-dash.css                 ← Dashboard styling
├── agnus-research-data.js         ← Data layer (articles, sources, taxonomy)
├── agnus-research-components.js   ← Reusable research components
├── agnus-research-components2.js  ← Extended components
├── agnus-data.js                  ← General data
├── support.js                     ← DC runtime (do not modify)
│
├── AGNUS - Research Article - *.html  ← 100 research articles
├── academy/                           ← 52 Academy modules + Track B
└── tandem/                            ← Tandem/AGNUS Code platform
```

---

## Navigation structure

Every public page has this nav (in order):
**Explore · Intelligence · Research · Practice · Reviews · Academy**

Plus right-side: **Join AGNUS** CTA button.

The `AGNUS - Dashboard.html` and `AGNUS - Story Builder.html` have different nav structures — they are post-login pages.

---

## Research articles (100 total)

**EU AI Act pillar (19 articles)**
- AR-000010 to AR-000190: full coverage of Articles 2, 3, 5, 6, 9-16, 22, 27, 43, 49, 50, 53-56, 72, 73, 99, Omnibus

**AI Governance pillar (10 articles)**
- AI Governance Maturity, Structures, Frameworks, Board AI Governance, AI Inventory, AI Procurement, Algorithmic Impact Assessment, ISO 42001, AI Bias Audit, AI in Financial Services

**AI Audit pillar (9 articles)**
- Audit Trails, Audit Trail Design, Continuous AI Monitoring, Algorithmic Impact Assessment, AI Bias Audit, MiFID II AI, Logging, Documentation, Market Surveillance

**Standards pillar (6 articles)**
- ISO 42001 certification, EU Harmonised Standards, NIST AI RMF vs EU AI Act, Standards (general), GPAI (standards angle), Codes of Practice

**AI Agents pillar (5 articles)**
- Agent Governance, Prompt Injection, AI Agent Governance (daily), AI Agent Architecture, Multi-Agent Governance

**AI Security pillar (6 articles)**
- Prompt Injection (general), AI Red Teaming Deep Dive, AI Agent Least Privilege, Model Theft and IP Risk, AI Incident Reporting, Cybersecurity

**Country/Intelligence articles (9 articles)**
- Norway, South Korea PIPC, EU DSA ChatGPT, California SB574, China CAC, China Digital Green AI, EU Tech Sovereignty, UK AISI, UK DSIT, New York S10685

---

## Practice tools (AGNUS - Practice.html)

6 interactive tools — all grounded in primary sources:

1. **EU AI Act Risk Classifier** — 7 questions → tier + obligations + article links (FREE)
2. **Compliance Checklist** — 24 items, article-linked, progress tracker, print/export (FREE)
3. **FRIA Template** — Article 27 compliant, 5-part form, exportable (PREMIUM)
4. **Provider vs Deployer self-assessment** — 2 questions → role + obligations (FREE)
5. **Incident Report (Art. 73)** — structured form, all required fields, exportable (PREMIUM)
6. **Technical Documentation (Annex IV)** — 7-part structured template (PREMIUM)

Export buttons currently use `window.print()`. Wire to proper PDF export service if needed.

---

## Academy (52 modules + 6 Track B simulations)

**Entry point:** `academy/AGNUS - Academy App.html` (single navigable entry point)

**Track A — 7 levels, 49 modules:**
- Level 1 (Understand): M01–M07
- Level 2 (Operate): M08–M14
- Level 3 (Configure): M17–M21
- Level 4 (Audit): M22–M28
- Level 5 (Apply): M29–M35
- Level 6 (Build): M36a–M36g, M37–M39
- Level 7 (Lead): M40–M49
- M26 (AI Liability): `academy/AGNUS - Academy M26 - AI Liability.html`

**Track B — 5 simulations (€1,500 learner pays):**
- B01: Finance AI Deployment (`academy/AGNUS - Academy B01 - Finance AI Deployment.html`)
- B02: HR AI Deployment
- B03: Legal AI Deployment
- B04: Healthcare AI Governance
- B05: Customer Service Agent Governance

**Control Training Environment:** `academy/AGNUS - Control Training Environment.html`
- 7 stages, full briefing panels (ED01–ED08), company context bar, AGNUS Scoring Engine

---

## Data layer (agnus-research-data.js)

**Status: SYNTAX FIXED** — was broken by injected records inside AUTHORITY object. Now correct.

The data layer is a single IIFE exposing `window.AR` with:
- `AR.ARTICLES` — article registry (100 articles with IDs, titles, pillars, files)
- `AR.SOURCES` — source registry (SRC-0001 to SRC-0089)
- `AR.byArticleId(id)` — lookup by AR-ID
- `AR.byPillar(pillar)` — filter by pillar

**Known issue:** `agnus-research-components2.js:280` references `AR.byArticleId` — this requires `agnus-research-data.js` to load first. Ensure load order in all pages: `agnus-research-data.js` → `agnus-research-components.js` → `agnus-research-components2.js`.

---

## Design system tokens

```css
--char:       #1C1B19    /* near-black */
--bg:         #F8F7F4    /* warm white */
--paper:      #FCFBF8
--paper-warm: #F3F1EC
--gold:       #B28A42    /* metallic gold — used sparingly */
--gold-deep:  #8F6E32
--ink:        #1D1D1F
--ink-soft:   #6E6B66
--ink-mute:   #908D86
--font-sans:  "Manrope"
--font-mono:  "IBM Plex Mono"
--font-serif: "Newsreader"
```

Full token set in `AGNUS - Home.html` `:root {}` block. Copy from there.

---

## What Claude Code needs to build (backend)

1. **Article data API** — replace `agnus-research-data.js` with real API calls. The JS data layer is shaped to be swapped without touching templates: `AR.ARTICLES`, `AR.SOURCES`, `AR.byArticleId()`, `AR.byPillar()`.

2. **Intelligence agent output destination** — daily JSON packages (format: `AGNUS-Daily-YYYY-MM-DD/`) need a destination. Currently: I receive them as zip files, run them through this workflow, and commit articles. Target: agent writes directly to a `handoffs/` folder, Claude Code picks them up, builds the article, commits.

3. **User authentication** — the Dashboard page is a mockup. Needs real auth (premium vs free tier gating for Premium tools in Practice, premium Academy modules).

4. **Print/export** — Practice tools use `window.print()`. Wire to a proper PDF generation service (Puppeteer, WeasyPrint, or similar).

5. **Search** — the Explore page has a search bar mockup. Needs full-text search over articles (Algolia, Typesense, or similar).

6. **Image slots** — all image-slot components have been replaced with callout/diagram blocks. No image hosting needed at launch.

---

## What is on hold (post-launch)

- **E10–E20 Editorial backend** — `AGNUS - Editorial Platform.html` is a complete interactive mockup of the editorial pipeline. This is the internal tool for the editor to manage articles. Wire it to the real CMS post-launch.
- **Phase III — AGNUS Control Plane** — see `The Protocol/AGNUS Phase III - Control Plane Architecture.md`. Post-launch technical build.
- **Country articles** — 9 countries missing. Build from intelligence daily packages as they arrive.

---

## Tandem / AGNUS Code (separate)

Files in `/tandem/`. Entry point: `tandem/AGNUS - Tandem Platform.html` (Dark Studio).
Governance workspace: `tandem/AGNUS - Tandem Standalone.html`.
External script: `tandem/dashboard-core.js` (must be co-deployed with the platform HTML).
Project Provenance: `tandem/AGNUS - Code Project Provenance.html`.

---

## Pre-launch checklist

- [x] `agnus-research-data.js` syntax error fixed
- [x] All 100 articles have source citations
- [x] All image-slots replaced with callouts/diagrams
- [x] Practice nav in all 22+ public pages
- [x] Practice page with 6 tools live
- [x] Academy App single entry point wired
- [x] Control Training Environment with briefing panels
- [x] Home page canonical (from uploads/AGNUS - Home.html)
- [x] Wire agnus-research-data.js load order check — FIXED 2026-09-12. 35 research article files + 5 research hub pages + TEMPLATE all corrected (components.js before components2.js)
- [ ] User auth / premium gating
- [ ] Search
- [ ] Image hosting (optional — slots replaced)
