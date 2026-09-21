# AGNUS Editorial Flow — How the Article Machine Works
### For Claude Code: handoff document explaining the full pipeline

---

## What AGNUS editorial produces

AGNUS publishes research articles on AI regulation, governance, and policy. Every article follows the same structure and appears in the Research section of AGNUS. Articles are written by a Claude Design agent (the one that built this document) and reviewed by the human editor.

---

## The three actors

| Actor | Role |
|---|---|
| **Intelligence Agent** | Monitors regulatory sources daily. Produces structured JSON handoff files when it finds a qualifying development. Runs automatically. |
| **Claude Design** | Reads the handoff JSON, writes the article HTML, registers it in `agnus-research-data.js`, and verifies it renders correctly. Runs on demand (human uploads the daily ZIP). |
| **Human editor (you)** | Reviews the article, approves or sends back. Controls what goes live. |

---

## The daily intelligence loop

```
1. Intelligence Agent runs overnight
   → Monitors: EUR-Lex, national regulators, CAC, FTC, DSIT, PIPC, etc.
   → When it finds a qualifying development: creates a JSON handoff file

2. You download the output as AGNUS-Daily-YYYY-MM-DD.zip

3. You upload the ZIP to Claude Design

4. Claude Design reads the handoffs, builds the articles, registers them

5. You review and approve

6. Article goes live on AGNUS Research
```

---

## The handoff JSON structure

Every research handoff (created by the Intelligence Agent) has this shape:

```json
{
  "handoff_type": "raw_intelligence_to_research",
  "created_date": "2026-09-12",
  "jurisdiction": "South Korea",
  "intelligence_record_id": "IR-000101",
  "provisional_source": {
    "url": "https://www.pipc.go.kr/...",
    "title": "PIPC — Draft amendments to PIPA for AI",
    "organisation": "Personal Information Protection Commission"
  },
  "research_question": "What operational requirements will the proposed PIPA amendments impose on AI processors of personal data?",
  "editorial_context": "Connects to existing South Korea country article and GDPR and AI article",
  "verified_facts": [
    "PIPC published proposed amendments for consultation on 22 August 2026",
    "Amendments would create new legal basis for AI training on publicly available data",
    "Includes automated decision-making transparency obligations"
  ],
  "materiality": "high",
  "article_recommendation": "Build as intelligence article with full source verification"
}
```

---

## What Claude Design does with a handoff

1. **Read the handoff** — verified_facts, source URL, jurisdiction, research_question
2. **Verify the source** — checks the source URL is real and matches the facts
3. **Assign IDs** — next available SRC-XXXX and AR-XXXXXX from the registry
4. **Build the HTML** — full research article in AGNUS style (same as every other article)
5. **Register in agnus-research-data.js** — adds the source and article to the arrays
6. **Verify it renders** — opens the file, confirms it loads without errors

The article HTML file follows the same template as every AGNUS Research article:
- `agnus.css` + `agnus-research.css` loaded
- Navigation with all main sections linked
- Article header: pillar tag, h1, lede, author/date/AR-ID
- Section sub-navigation bar (sticky)
- Prose with h3 sections, tables, visual elements
- Sources section at the bottom (each source card: SRC-ID, title, organisation, URL, verification note)
- Footer with site links

---

## The article registry (agnus-research-data.js)

Every article is registered in two arrays:

```javascript
// Sources array — one entry per primary source
{
  source_id: 'SRC-0088',
  title: 'PIPC — Draft PIPA amendments for AI',
  issuing_organization: 'Personal Information Protection Commission',
  url: 'https://www.pipc.go.kr/...',
  access_date: '2026-09-12',
  document_type: 'Draft regulation',
  jurisdiction: 'South Korea',
  _demo: false  // false = real, verified source
}

// Articles array — one entry per article
{
  source_id: 'SRC-0088',
  article_id: 'AR-000830',
  _demo: false,
  title: 'South Korea PIPC — PIPA AI Amendments',
  pillar: 'Country',
  url: 'AGNUS - Research Article - South Korea PIPC PIPA.html',
  published: '2026-09-12',
  author: 'Jean-Daniel Alexis',
  language: 'en',
  topics: ['ai-data-governance'],
  subtopics: ['South Korea', 'PIPA', 'AI Training Data'],
  summary: 'One-sentence summary for search and listing',
  notes: 'Internal notes — connection to other articles, caveats'
}
```

---

## The pipeline stages (tracked in AGNUS - Editorial Pipeline.html)

| Stage | What it means |
|---|---|
| **Briefing** | Topic identified. Handoff exists or brief written. Waiting for Claude Design to build. |
| **Drafting** | Claude Design is building the article. Upload the handoff ZIP and wait. |
| **Your review** | Article built. You read it. Check tone, depth, accuracy. Approve or send back. |
| **Ready to publish** | Approved. Wire to Research page navigation. |
| **Published** | Live on AGNUS Research. AR-ID assigned. Wired to data layer. |

---

## The Research page wiring

When an article is published, it needs to be added to `AGNUS - Research.html` — the main research listing page. This page reads from `agnus-research-data.js` and renders article cards grouped by pillar.

For Claude Code: the Research page script reads `window.ARTICLES` (from `agnus-research-data.js`) and renders them. Adding an article to the data file automatically adds it to the Research page — no manual HTML edit needed.

---

## For Claude Code: what to build for E10–E20

The E10–E20 editorial backend is the set of tools that supports this pipeline at scale. Here's what each one is, in plain terms:

| Tool | What it is | Tech needed |
|---|---|---|
| **E10 Knowledge Database** | Browse/search all sources (SRC-XXXX entries) — see what sources exist, find related sources, link sources to articles | Read from `agnus-research-data.js`. Filter/search UI. No backend needed initially. |
| **E11 Article Pipeline** | Kanban board tracking articles through stages | Already built: `AGNUS - Editorial Pipeline.html`. Uses `localStorage`. Could upgrade to Supabase for persistence. |
| **E12 Story Builder** | Plan article angles — which aspects of a development to cover, what questions to answer, which existing articles to cross-link | UI tool writing to localStorage or a JSON file. No AI needed — it's a planning workspace. |
| **E13 AI Writer** | Send a handoff JSON to Claude API, receive article HTML | Requires Claude Code + `window.claude.complete()` from the AGNUS Academy skill. The prompt is the handoff JSON + article template instructions. |
| **E14 Human Review** | Display article in a frame with Approve/Revise/Send back buttons | Simple iframe + action buttons. Writes decision to localStorage or moves a file. |
| **E15 Research Panel** | Workspace for linking evidence claims to sources — "this claim → this SRC-ID → this URL" | Evidence management UI. Could be a table with claim / source / verified columns. |
| **E16 Topic Clusters** | Group articles by topic themes rather than pillars | Tagging UI on top of existing articles array. Filter/cluster view. |
| **E17 Keyword Discovery** | What topics are under-covered in AGNUS Research? | Read article metadata, identify gaps vs. a target coverage list. Static analysis tool. |
| **E18 Publishing Calendar** | When to publish what — schedule articles across the week/month | Calendar UI. Links article IDs to dates. LocalStorage or Supabase. |
| **E19 Content Archive** | Browse all published articles with full metadata | Read from `agnus-research-data.js`. Filter, search, export. Already partially exists in Research page. |
| **E20 Source Scoring** | Which sources are most cited, most reliable, most recent? | Aggregate SRC usage counts from articles array. Visualise. |

**Priority for Claude Code:**
1. E13 AI Writer — the biggest leverage item (automates the article build step)
2. E14 Human Review — makes the review step faster
3. E18 Publishing Calendar — gives visibility into publication schedule
4. E10 Knowledge Database — helps find existing sources before commissioning new research

**Infrastructure requirement for E13:**
The AI Writer needs the Claude API via `window.claude.complete()`. See the "Claude API in prototypes" skill. The prompt should be:
```
System: You are AGNUS, a professional AI regulation research publisher. Write a complete research article in the established AGNUS format.
User: [handoff JSON] + [article template instructions]
```
The output is a complete HTML file ready to drop into the project.

---

## Current state of the codebase

- `agnus-research-data.js` — source of truth for all sources (SRC-XXXX) and articles (AR-XXXXXX)
- `AGNUS - Research.html` — reads from data file, renders article listing
- `AGNUS - Research Article - *.html` — individual article files (72+ currently)
- `AGNUS - Intelligence.html` — intelligence feed page
- `AGNUS - Home.html` — home page
- `AGNUS - Academy.html` — academy entry
- `academy/` folder — 52 Track A modules + Track B programmes + CTE
- `agnus.css` + `agnus-research.css` — shared styles
- All other pages: Agents, Marketplace, Business, Reviews, Explore, etc.

**The design system is set. Do not change it.** Every new page must use `agnus.css` + `agnus-research.css` and follow the established visual language (warm cream, near-black, gold accents, Manrope + IBM Plex Mono).

---

## Naming conventions

| Item | Format | Example |
|---|---|---|
| Article HTML file | `AGNUS - Research Article - [Title].html` | `AGNUS - Research Article - South Korea PIPC.html` |
| Source ID | `SRC-XXXX` (4 digits, sequential) | `SRC-0088` |
| Article ID | `AR-XXXXXX` (6 digits, increments of 10) | `AR-000830` |
| Intelligence record | `IR-XXXXXX` (6 digits) | `IR-000101` |
| Daily package | `AGNUS-Daily-YYYY-MM-DD` | `AGNUS-Daily-2026-09-12` |

---

*This document is sealed under The Covenant of The Blood of Jesus Christ.*
*AGNUS — AI Governance News and Understanding Service.*
