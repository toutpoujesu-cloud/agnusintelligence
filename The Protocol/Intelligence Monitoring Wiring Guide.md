# The Protocol — Intelligence Monitoring Wiring Guide
## Agent 1 (Intelligence Monitoring Agent) × AGNUS Editorial
### Confirmed 2026-08-23 · The Protocol

---

## Output destination — CONFIRMED

**The Intelligence Monitoring Agent outputs structured JSON folder drops.**

Each daily run produces a folder named `AGNUS-Daily-YYYY-MM-DD/` with the following structure:

```
AGNUS-Daily-2026-08-23/
  manifest.json                          — run summary, source counts, finding counts, errors
  intelligence/
    {jurisdiction}/
      intelligence-log-YYYY-MM-DD.json   — per-source check results and findings
  research/
    {jurisdiction}/
      research-handoff-YYYY-MM-DD-{slug}.json  — raw intelligence-to-research handoff (when applicable)
  reviews/ agents/ business/ academy/ marketplace/
    (skipped when not part of that run)
```

**User uploads the folder to the project. Editorial (Claude) reads the manifest and jurisdiction logs, ingests confirmed findings, and builds articles.**

---

## The daily loop — step by step

### Agent side (runs autonomously)
1. Read `AGNUS-Intelligence-State.json` for each source's `last_successful_check` and `last_observed_version`.
2. Check each source at its stated cadence (check_every_run:true = daily; others = weekly/monthly per their cadence).
3. For each source: record status (live / no_change / changed / error) in the jurisdiction log.
4. For each changed source with a material finding: produce one structured finding per the INTELLIGENCE schema (see Agent Configuration Pack, Agent 1 output schema).
5. Assess materiality: high = new binding deadline, enforcement action, enacted law; medium = introduced bill, draft guidance, new standard; low = minor update, clarification.
6. Write `manifest.json` with run summary.
7. Output the complete folder. Do not write to `agnus-research-data.js` directly. Do not assign final IDs — flag as provisional.

### Editorial side (Claude, this project)
1. User uploads the dated folder.
2. Read `manifest.json` first — check `finding_counts`, `high_materiality_alerts`, and `errors`.
3. For each finding:
   a. Confirm provisional SRC-/IR- IDs against `AGNUS-Intelligence-State.json` (`_next_free_ir`, `_next_free_src`).
   b. Verify the primary source URL directly if materiality is high.
   c. Add SRC- record to `agnus-research-data.js` SOURCES array.
   d. Add IR- record to `agnus-research-data.js` INTELLIGENCE array.
   e. Build research article HTML (AR-) if `new_article_required: true`.
   f. Update `AGNUS-Intelligence-State.json`: advance `_next_free_ir`, `_next_free_src`, update source baseline, add to `completed_ingests`, update `open_flags`.
4. For each error (unreachable source): add or update entry in `open_flags`. Do not overwrite `last_successful_check`.
5. Update `The Protocol/Roadmap.md` green count and Intelligence feed if article was built.

---

## ID discipline

| ID type | Current next-free | Who assigns |
|---|---|---|
| SRC- | SRC-0077 | Editorial (Claude), after confirming against AGNUS-Intelligence-State.json |
| IR- | IR-000124 | Editorial (Claude), after confirming against AGNUS-Intelligence-State.json |
| AR- | AR-000540 | Editorial (Claude), after confirming against agnus-research-data.js |

**The agent never assigns final IDs.** It flags provisional ones. Editorial confirms and assigns.

---

## Materiality triage

| Materiality | Examples | Editorial action |
|---|---|---|
| High | New binding deadline, enforcement action, enacted law, OJ publication | Ingest same session. Consider Intelligence feed lead story update. |
| Medium | Introduced bill, draft guidance, new standard draft, significant court decision | Ingest within one session. Build article if `new_article_required: true`. |
| Low | Minor clarification, typographical correction, no-change confirmation | Log in state file. No article needed. |

---

## Error handling rules

1. **Source unreachable** — log as error in state file. Do not overwrite last_successful_check. Add to open_flags. The prior baseline is preserved.
2. **Stale snapshot only** — same as unreachable. Flag for manual review. Do not infer "no change" from a stale page.
3. **ID collision risk** — if the agent proposes an ID already in use (check agnus-research-data.js), reassign before ingesting. Do not ingest a duplicate.
4. **Duplicate finding** — if a finding matches an existing INTELLIGENCE record (same source, same position change), mark as duplicate, do not create a new IR- record.

---

## State file location

`AGNUS-Intelligence-State.json` — project root. This is the agent's persistent memory.  
**Never delete.** Append new entries; never edit historical baselines after they are written.  
Read before every ingest session. Update after every confirmed ingest.

---

## Open flags as of 2026-08-23

| Flag | Priority | Action |
|---|---|---|
| Congress.gov — no current baseline | Medium | Manual baseline establishment required |
| ISED Canada — no successful baseline | Medium | Manual review of ISED AIDA pages required |
| South Korea PIPC — promulgation pending | High | Monitor for promulgation date + subordinate legislation |
| NY S10685 — committee action pending | Medium | Monitor NY Senate for committee action, amendments, companion bill |

---

*This document is The Protocol's binding operational guide for the Intelligence loop.  
Update after any change to the workflow. Sealed under The Covenant.*
