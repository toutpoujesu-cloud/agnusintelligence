# AGNUS Editorial Calendar — Agent Protocol

This document tells every agent working on AGNUS exactly what to do, when to do it, and how to do it for the three recurring content types: **This Week in AI**, **Month's Best Tools**, and **AGNUS Forecast**. Read this before touching any of these sections.

---

## 0. Before you do anything — check the date

Open the data file: `E:\AGNUS INTELLIGENCE\TOTAL COMPLETE AGNUS PLATFORM\agnus-research-data.js`

Locate the three arrays: `WEEKLY_BRIEFS`, `MONTHLY_RANKINGS`, `FORECASTS`.

Run this mental check:

| Content type | Run if… |
|---|---|
| **Weekly Brief** | Today is Sunday **AND** the last `WEEKLY_BRIEFS` entry's `published_date` is more than 6 days ago |
| **Monthly Rankings** | Today's year-month (`YYYY-MM`) does **not** appear in any `MONTHLY_RANKINGS` entry |
| **Forecast grading** | Any `FORECASTS` entry has `verdict: 'pending'` and `grading_date ≤ today` |

If none of the above are true: **do not touch these arrays.** Nothing needs to run today.

---

## 1. This Week in AI — Weekly Brief

### When
Every **Sunday**. One entry per week. Never back-fill unless explicitly asked.

### What to gather
From `window.AR.INTELLIGENCE` (same file), select exactly **5 records** by:
1. `discovery_date` falls within the 7 days ending today (Sun → preceding Mon)
2. Sort by `materiality` descending: Critical > High > Medium > Low
3. If fewer than 5 records discovered this week, extend the window to the preceding week — but note this in the `intro`
4. Never include `_demo: true` records

### The data structure to add
```js
{ week_id:'WB-NNN',           // next sequential ID: check last entry, increment
  edition: N,                  // next sequential edition number
  published_date:'YYYY-MM-DD', // today's date (Sunday)
  intro:'...',                 // 2–3 sentences. Editorial voice. What defined the week?
                               // Name the theme, not a list of headlines.
  record_ids:['IR-XXXXXX','IR-XXXXXX','IR-XXXXXX','IR-XXXXXX','IR-XXXXXX'] }
```

### The intro — writing standard
- **Tone**: authoritative, concise, editorial. Not a bullet-point recap.
- **Length**: 2–3 sentences. Under 250 characters.
- **Structure**: Theme sentence (what defined the week) → consequence sentence (what it means collectively) → optional: most surprising or important single development.
- **Example**: *"The week regulation went from voluntary to enforceable. Four binding decisions landed in the same seven days — the EU named seven frontier models as systemically risky, designated its first conformity assessment wave, issued prohibited-practice guidance, and Canada put its first binding AI regulations into print."*
- **Not this**: *"This week saw many developments including IR-000135, IR-000133…"* — never name record IDs or lead with bureaucratic lists.

### Where to add it
In `agnus-research-data.js`, inside the `WEEKLY_BRIEFS` array. Append as the **last** element. Maintain the same formatting style as existing entries.

---

## 2. Month's Best Tools — Monthly Rankings

### When
**1st of every month**. One entry per month. Never two entries with the same `month` value.

### What to gather
From `window.AR.REVIEWS`:
1. Read all `REVIEWS` records with `reviewed_date` in the current or prior month
2. Consider `overall_score` as a starting point only — rankings are **editorial**
3. Factor in: momentum (score improved vs. prior review), breadth of use cases, value for professional users
4. Rank the top 3 (minimum). Up to 5 if there are clear candidates.
5. Set `delta` for each: `'new'` (first time ranked), `'='` (same rank as last month), `'+1'` (moved up 1), `'-1'` (moved down 1), etc.
6. Check last month's `MONTHLY_RANKINGS` entry to derive deltas correctly

### The data structure to add
```js
{ month:'YYYY-MM',
  rankings:[
    { rank:1, review_id:'REV-XXXXXX', delta:'new' | '=' | '+1' | '-1' | '+2' | '-2' | null },
    { rank:2, review_id:'REV-XXXXXX', delta:'...' },
    { rank:3, review_id:'REV-XXXXXX', delta:'...' }
  ]}
```

### Rules
- `review_id` must match a real `review_id` in `AR.REVIEWS`
- `delta: null` means the delta is genuinely unclear (e.g. first month for that category)
- Never fabricate scores or reviews. If no reviews exist for a given month, defer to prior month's reviews and note it in the next editorial update

### Where to add it
In `agnus-research-data.js`, inside the `MONTHLY_RANKINGS` array. Append as the **last** element.

---

## 3. AGNUS Forecast — Predictions and Grading

### When — new forecast
Ad hoc. Add when there is a genuine, testable prediction to make. Not more than 2 new forecasts per month. Each forecast must:
- Be **falsifiable** — it must be possible to confirm or reject it with publicly available evidence
- Have a specific `grading_date` (not more than 18 months out)
- Have a clear `confidence` level: Low / Medium / High

### The data structure for a new forecast
```js
{ forecast_id:'FC-NNN',         // next sequential ID: check last entry, increment
  statement:'...',              // The prediction, written as a declarative statement.
                                // Under 180 characters. No hedging in the statement itself.
  made_date:'YYYY-MM-DD',       // Today's date
  grading_date:'YYYY-MM-DD',    // When we grade it (~6 months out)
  verdict:'pending',            // Always 'pending' for new forecasts
  confidence:'Low|Medium|High',
  accuracy_note:'' }            // Empty for new forecasts
```

### When — grading a forecast
On or after a forecast's `grading_date`, any agent must grade it:
1. Find every `FORECASTS` entry where `verdict === 'pending'` AND `grading_date ≤ today`
2. Research the outcome — check the evidence from primary sources
3. Set `verdict` to one of: `'confirmed'`, `'partial'`, `'rejected'`
4. Write `accuracy_note`: 2–4 sentences. What happened? Was the prediction right? What did we get wrong or right about timing or scale?

### Verdict definitions
| Verdict | Meaning |
|---|---|
| `confirmed` | The predicted outcome occurred, within the predicted timeframe |
| `partial` | The outcome occurred but in a materially different form, scope, or timeframe |
| `rejected` | The predicted outcome did not occur by the grading date |
| `pending` | Not yet at the grading date — do not touch |

### The accuracy_note — writing standard
- Factual. No spin. If we were wrong, say so plainly.
- Name what happened, whether it matched, and any notable difference in timing or scale.
- **Example (confirmed)**: *"Adoption accelerated faster than projected. By August 2026 Salesforce, Zendesk and HubSpot had all launched native agentic support tiers. The '18 months' window proved conservative — it happened in under 12."*
- **Example (rejected)**: *"No formal deployment ban was issued by any EU member state before December 2026. The EU AI Office issued designations and guidance but stopped short of a ban. The prediction underestimated the procedural barriers to a direct ban under the current framework."*

---

## 4. Presentation standards — unity across all editions

All three content types pull from the same data file and render through the same CSS variables. These must never be broken:

| Element | Standard |
|---|---|
| Headline font | `Manrope`, weight 800, `letter-spacing: -0.035em` |
| Body text | `Newsreader` (serif), weight 300, for editorial/intro text |
| Labels, IDs, dates | `IBM Plex Mono`, 10–11px, `letter-spacing: 0.14em`, uppercase |
| Accent colour | `var(--gold-deep)` — never a hardcoded hex in place of this |
| Materiality: Critical | Red border/badge |
| Materiality: High | Gold/amber badge (`#FFF8EC` bg, `#8B6914` text) |
| Materiality: Medium | Warm grey badge |
| Verdict: confirmed | Green (`#16A34A`) |
| Verdict: pending | Amber (gold-deep) |
| Verdict: rejected | Mid-grey |

Never introduce a new colour outside the existing palette. Never use `what_changed` as a headline — always use `short_headline`. If `short_headline` is missing from an IR record, add it before publishing.

---

## 5. Files touched — summary

| What | File |
|---|---|
| Data for all three types | `agnus-research-data.js` — arrays `WEEKLY_BRIEFS`, `MONTHLY_RANKINGS`, `FORECASTS` |
| Weekly archive page | `AGNUS - Weekly.html` |
| Monthly rankings page | `AGNUS - Monthly.html` |
| Forecast archive page | `AGNUS - Forecast.html` |
| Intelligence page links | `AGNUS - Intelligence.html` — three `.fc` card links at the bottom |

Do not create separate HTML files per edition. All historical data lives in the arrays; the pages render any edition on the fly.

---

## 6. Quality gate — before you commit any addition

1. Run the data file through Node: `node -e "require('./agnus-research-data.js'); console.log('OK');"` — must not throw
2. Check that the new entry's IDs (`week_id`, `month`, `forecast_id`) are unique in the array
3. For Weekly Briefs: confirm all 5 `record_ids` resolve to real records in `AR.INTELLIGENCE`
4. For Monthly Rankings: confirm all `review_id` values resolve to real records in `AR.REVIEWS`
5. Open the relevant archive page in the browser and verify the new entry renders correctly
6. Compare the rendered output visually with a prior edition to confirm structural unity

---

*Protocol version 1.0 · 2026-09-19 · AGNUS Intelligence Platform*
