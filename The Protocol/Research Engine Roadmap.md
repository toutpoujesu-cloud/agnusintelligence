# AGNUS Research Data Layer — Engine Roadmap
### The Protocol · The riskiest subsystem · Updated: 22 August 2026

## Why this subsystem gets its own document

`agnus-research-data.js` is the single source of truth for every published article, every
source record, every obligation, every jurisdiction, and every intelligence item on the AGNUS
platform. A silent bug here — a duplicate ID, a missing ARTICLE_FILES entry, a wrong
`related_articles` cross-reference — propagates to every article page, every citation link,
every topic hub, and every author page simultaneously. There is no fallback and no partial
failure: either the data is correct or multiple pages break at once.

Two real incidents already demonstrate this:
- **AR-000280/AR-000290 content collision** — two articles assigned to overlapping IDs in
  different sessions, neither catching the conflict against the live file.
- **SRC-0034–0037 double-assignment** — source IDs assigned twice, once by a fetch agent
  reconstructing from session-local files, once against the live data.

Both happened because a fetch agent self-reported next-free IDs without checking the live file.
Every task in this document is designed to prevent recurrence.

---

## Gate definitions (restated for this subsystem)

| Gate | Requirement for this subsystem |
|---|---|
| G1 | All changes made to the live `agnus-research-data.js` in the correct order (corrections → SOURCES → ARTICLES → COVERAGE → ARTICLE_FILES → HTML page) |
| G2 | Every inserted ID confirmed against the live file before insertion. Every field checked against the Schema Reference. |
| G3 | Page loads without console errors. All `data-rc` elements render. ToC populates. Article appears on Topic hub. |
| G4 | Screenshot of rendered article page + screenshot of Topic hub showing new article in list. |

---

## Pre-insertion checklist (run before every insertion)

Before touching the data file:
- [ ] Open `agnus-research-data.js` live.
- [ ] Search for the highest existing `SRC-NNNN` — confirm the incoming bundle's source IDs are free.
- [ ] Search for the highest existing `AR-NNNNNN` — confirm the incoming article ID is free.
- [ ] If any ID collides, renumber the incoming bundle across all four files before proceeding.
- [ ] Check the incoming bundle's README for flagged corrections to prior articles — apply those first.

---

## Task: RE01 — Fix AR-000240 cross-reference

**Objective:** AR-000240's body content incorrectly attributes an Article 25 point to AR-000210
(which never mentions Article 25). The correct source is AR-000200. This must be fixed before
AR-000310 is inserted, because AR-000310's history field documents this correction.

**Gate 1 — Implementation**
- Open the live `AGNUS - Research Article - Provider Obligations.html`.
- Search for `AR-000210 already noted` (or the JSON-escaped equivalent — try both `'` and `\u2019`).
- Change the cross-reference from "AR-000210 already noted..." to "AR-000200 already noted..., now verified in full in AR-000310."
- Do not rewrite surrounding content — change only the specific cross-reference.

**Gate 2 — Review**
- Confirm no other instance of `AR-000210 already noted` remains in the file.
- Confirm the surrounding paragraph still reads correctly in context.

**Gate 3 — End-to-end test**
- Open the Provider Obligations article page in browser.
- Read the corrected paragraph — confirm it references AR-000200, not AR-000210.
- Confirm no console errors on load.

**Gate 4 — Evidence**
- Screenshot of the corrected paragraph as rendered in the browser.

**Definition of Done:** The paragraph reads "AR-000200 already noted..." and the page loads cleanly.

**Status: Not started**

---

## Task: RE02 — Insert AR-000310 (Value Chain Responsibilities)

**Objective:** Add the fully verified Article 25 research bundle to the live data layer and build
its article page, following the editorial insertion checklist exactly.

**Gate 1 — Implementation (in this order, no skipping)**
1. Run pre-insertion checklist above.
2. Add SRC-0046 to the SOURCES array (just before the closing `];`).
3. Add the AR-000310 ARTICLES record. Set `author` and `reviewer` to `'jean-daniel-alexis'`.
4. Find the COVERAGE row for "Value Chain Responsibilities" or Article 25 subtopic — if it exists
   with `article_id: null`, update it. If it doesn't exist, add one.
5. Add `'AR-000310': 'AGNUS - Research Article - Value Chain Responsibilities.html'` to ARTICLE_FILES.
6. Copy `TEMPLATE - Research Article.html` as the new page. Replace all template IDs:
   - `<title>`, all `<meta>`, `<link rel="canonical">` → use AR-000310 content.
   - Every `data-rc-arg="AR-000240"` (or whichever ID the template has) → `AR-000310`. Do a full-file search after replacing — catch every instance.
   - `<h1>` and `.art-abstract` text.
   - Hero `<image-slot>` placeholder and `.art-hero-cap` text.
   - `.dependency-note` paragraph — list real AR-IDs this article builds on.
   - Entire `<article class="prose">` body from bundle's `body-content.md`.
   - The trailing `var a = AR.byArticleId('AR-000240');` → `AR-000310`.
7. Save as `AGNUS - Research Article - Value Chain Responsibilities.html`.

**Gate 2 — Review**
- Confirm SRC-0046 exists once in SOURCES, not duplicated.
- Confirm AR-000310 exists once in ARTICLES, all required fields present (none empty or missing).
- Confirm ARTICLE_FILES has the exact filename from step 7.
- Search the HTML file for the old template's article ID — zero results required.
- Confirm `author` and `reviewer` are both `'jean-daniel-alexis'`, not `'agnus-research-team'`.

**Gate 3 — End-to-end test**
- Open the new article page. No console errors.
- All `data-rc` elements render content (no empty divs after load).
- Table of Contents populates from `<h2 id>` elements.
- Open the EU AI Act Topic hub — confirm AR-000310 appears in the article list.
- Confirm AR-000240's corrected cross-reference reads correctly in that article.

**Gate 4 — Evidence**
- Screenshot of the new article page rendered, showing title and first body section.
- Screenshot of the Topic hub showing AR-000310 in the article list.

**Definition of Done:** Article page loads cleanly, all components render, article appears on
Topic hub, AR-000240 correction is live.

**Status: Not started** (blocked on RE01)

---

## Task: RE03 — Insert AR-000320 (Governance Structure)

**Objective:** Add the verified Articles 64–70 governance research bundle to the data layer.

**Gate 1 — Implementation (same order as RE02)**
1. Run pre-insertion checklist. Confirm SRC-0047–0053 are all free.
2. Add SRC-0047 through SRC-0053 to SOURCES. Note in SRC-0048 (Article 64) `notes` field:
   "Confirmed via indexed Service Desk content (verbatim quote) rather than full-page fetch.
   Content is two paragraphs; indexed version reproduced literally. Recommend follow-up full-page
   fetch to close this minor gap."
3. Add AR-000320 ARTICLES record. Set author/reviewer to `'jean-daniel-alexis'`.
4. Update or add COVERAGE row for "Governance Structure" / Articles 64–70 subtopic.
5. Add `'AR-000320': 'AGNUS - Research Article - Governance Structure.html'` to ARTICLE_FILES.
6. Build HTML page from template — replace all template IDs with AR-000320.
7. Save as `AGNUS - Research Article - Governance Structure.html`.

**Gate 2 — Review**
- Confirm SRC-0047–0053 each appear exactly once.
- Confirm AR-000320 ARTICLES record has all required fields.
- Confirm ARTICLE_FILES entry matches the filename exactly.
- Full-file search for old template ID — zero results.

**Gate 3 — End-to-end test**
- Page loads, no console errors.
- All `data-rc` elements render.
- ToC populates.
- Article appears on EU AI Act Topic hub.

**Gate 4 — Evidence**
- Screenshot of rendered article page.
- Screenshot of Topic hub with AR-000320 visible.

**Definition of Done:** Article page live, all components render, appears on Topic hub.

**Status: Not started** (can run in parallel with RE02 once RE01 is done)

---

## Task: RE04 — Update Live ID Registry

**Objective:** After RE02 and RE03 are both Green, update the ID registry so future sessions
and fetch agents start from the correct next-free IDs.

**Gate 1 — Implementation**
- Update `AGNUS-Research-Live-ID-Registry.md` (both copies — in `agnus-code-handoff/` and
  `agent-config-pack/`) to reflect:
  - Next free SRC-: **SRC-0066**
  - Next free AR-: **AR-000440**
  - ARTICLES IDs in use: AR-000330 through AR-000430 added this session (all verified in ARTICLES array).
  - SOURCES IDs in use: 65 total (SRC-0001 through SRC-0065).
  - agnus-research-data.js SOURCES and ARTICLES arrays repaired and verified clean (22 August 2026).

**Gate 2 — Review**
- Confirm both copies of the registry match.
- Confirm the stated next-free IDs are actually free in the live data file.

**Gate 3 — End-to-end test**
- Open `agnus-research-data.js` and confirm no SRC-0054 or AR-000330 entries exist yet.

**Gate 4 — Evidence**
- Screenshot of updated registry file showing new next-free IDs.

**Definition of Done:** Both registry files updated and consistent with the live data layer.

**Status: Not started** (blocked on RE02 + RE03)

---

## Task: RE05 — Resolve AR-000280 / AR-000290 collision

**Objective:** Determine whether AR-000280 and AR-000290 cover genuinely distinct content or
whether one is a duplicate/near-duplicate of the other, and resolve accordingly.

**Gate 1 — Implementation**
- Open both articles' body-content.md files (if available) or their live HTML pages.
- Compare: titles, standfirsts, relevant_articles fields, sources arrays, body sections.
- Determine: (a) distinct content covering different articles/aspects — keep both; or (b) one
  is a subset/near-duplicate — merge the unique content into one, archive the other.
- If merging: update ARTICLES to reflect the surviving article's scope, update ARTICLE_FILES,
  update any `related_articles` references to the archived ID across all other articles.

**Gate 2 — Review**
- If keeping both: confirm each has a clearly distinct subtitle and `relevant_articles` set.
- If merging: confirm no dead links to the archived ID remain in any other article's
  `related_articles` array.

**Gate 3 — End-to-end test**
- Load both pages (or the merged page). No console errors.
- If one is archived, confirm its page redirects or gracefully explains its status.
- Load Topic hub — confirm only the intended articles appear.

**Gate 4 — Evidence**
- Screenshot showing the resolution — either two distinct articles or one merged article on the Topic hub.

**Definition of Done:** No ambiguity remains about which ID covers which content.

**Status: Not started**

---

## Demo article replacement protocol

For each of AR-000151, AR-000163, AR-000188 (all `_demo:true`), the replacement process is:

1. Commission a real research bundle from Agent 2 (Research Fetch Agent) following
   `AGNUS-Research-Oversight-Protocol.md`. Supply the confirmed next-free IDs at commission time.
2. On receipt of the bundle, run pre-insertion checklist.
3. The new article takes the same article_id as the demo it replaces (e.g. AR-000151).
4. The demo article's `_demo:true` flag becomes `_demo:false`, all fields are populated from
   the verified bundle, `author` and `reviewer` set to `'jean-daniel-alexis'`.
5. The existing HTML page is rebuilt from the template (not patched) — treat it as a new article.
6. Gate 3 and Gate 4 apply identically to a new article.

| Demo to replace | Subtopic | Priority |
|---|---|---|
| AR-000151 | Logging (Article 12) | High — launch blocker |
| AR-000163 | Risk Classification (Article 6 + Annex III) | High — launch blocker |
| AR-000188 | Technical Documentation (Article 11 + Annex IV) | High — launch blocker |

---

## Common failure modes (all have occurred in this project)

| Failure | Prevention |
|---|---|
| Silent ID collision | Always run pre-insertion checklist. Never trust agent-self-reported IDs. |
| Escaped-quote mismatch when searching for a correction | Search for the JSON-escaped form (`\u2019` not `'`) or use a short unique substring without punctuation. |
| Missing ARTICLE_FILES entry | Every insertion must add this. If skipped, all internal links to the article silently fall back to the template. |
| One `data-rc-arg` still pointing at the template's old article ID | After replacing, do a full-file search for the old ID string — catch any instance the replace missed. |
| `str_replace` fails because anchor text isn't unique | Use a longer surrounding string as the anchor, not a short common phrase like `_demo:false`. |
