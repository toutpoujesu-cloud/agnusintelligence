# T01 — Tandem Standalone Audit
### Date: 2026-08-26 | Auditor: AGNUS Design Agent

---

## What the existing Tandem standalone contains

### Visual identity — Dark Coding Studio
- **Canvas:** Near-black navy `#0D0F1A`
- **Coral accent:** `#FF6B47` (Stop button, active file dots, running indicator)
- **Panels:** Layered dark blue-gray, `#131520` / `#1A1D2E` approximate
- **Typography:** JetBrains Mono for code, -apple-system for UI chrome
- **Agent pills:** Top-right bar shows "Claude planning • 12ms" and "DeepSeek • 38ms" with provider colour dots
- **File explorer:** Left panel, dark, search + source control sections
- **Monaco editor:** Centre, tabs (page.tsx, DataTable.tsx, TS file), line numbers, syntax highlighting
- **Right panel:** Output / Preview / Problems / AI Chat tabs + agent conversation
- **Terminal:** Bottom panel, running indicator, shell output
- **Status bar:** Bottom strip — language, branch, error count, column

### What the Studio already does well
- Agent identity is visible (name + latency in top bar)
- Running state is clear (coral Stop button, "Running" pill in terminal)
- File tabs show dirty state (orange dot on DataTable.tsx)
- Problems tab shows error count badge
- The Studio feels like a real IDE — compact, information-dense, professional

---

## What is MISSING — governance gaps vs. Codex brief

### In the Dark Studio
| Gap | Required (Codex brief) |
|---|---|
| No provenance toggle | Provenance: ON / OFF control |
| No gutter badges | Agent attribution per line (C / D / O / G initials, tinted) |
| No lifecycle state colours | grey/blue/amber/red/green/purple per line/symbol |
| No "Blocked proposal" diff surface | Blocked patches must appear separately, not in real source |
| No Approval panel | Exact patch + hash + reason shown before any commit |
| No Mission Contract visible | Agent boundary not surfaced during run |
| Team Picker exists (Claude/DeepSeek pills) | Needs capability summary, env scope, approval req, governance state per agent |
| No pre-run Team Governance Summary | Must show all roles, boundaries, missing credentials before run starts |

### Governance workspace — entirely missing
| Section | Status |
|---|---|
| Overview (active runs, approvals, blocked, incidents, risk trend) | ❌ Missing |
| Live action stream | ❌ Missing |
| Missions list + Mission Contract detail | ❌ Missing |
| Policies (platform → org → project → mission → env) | ❌ Missing |
| Approvals queue (pending / approved / denied / expired / consumed) | ❌ Missing |
| Incidents (Sentinel alert, evidence, restriction state) | ❌ Missing |
| Timeline (chronological, editor-linked) | ❌ Missing |
| Session Replay | ❌ Missing |
| File / Symbol provenance | ❌ Missing |
| Agent Contribution view | ❌ Missing |
| Project Heatmap | ❌ Missing |
| External Actions detail | ❌ Missing |
| Restriction / Suspension / Kill Switch | ❌ Missing |

---

## Where governance fits naturally in the existing layout

### Fits well — extend these
1. **Top nav bar** → add Governance icon (shield) as navigation destination
2. **Agent pills (top right)** → expand on click to show Mission + boundary summary
3. **Problems tab** → already collects errors; extend with blocked actions + incidents
4. **Status bar** → add governance state indicator (e.g. "2 pending approvals" pill)

### Requires new space — add these
1. **Governance workspace** (new top-level view, light Scandinavian) — swap the whole Studio for the governance workspace when the shield nav icon is clicked
2. **Provenance drawer** (slide-in from right over editor, not a full-page takeover)
3. **Approval panel** (modal overlay on the Studio, high-trust, exact action shown)
4. **Blocked patch surface** (new panel below editor or inline diff with visual separation)

### Space conflicts to watch
- The right panel (AI Chat) is already narrow — provenance drawer must be a separate overlay, not squeezed in
- The terminal takes the bottom third — blocked patch surface should appear between editor and terminal as a collapsible band, not push the terminal off screen

---

## Design decisions (recommended defaults for Inputs Needed)

| Question | Recommended default | Consequence |
|---|---|---|
| Governance nav: top-level or Studio modal? | **Top-level nav destination** (shield icon in top bar) — full page swap | Gives full light workspace room; Studio retains focus during coding |
| Human roles in v1? | **Owner + Reviewer** (minimal viable) | Keeps approval flow simple for first prototype |
| Production actions? | **Hard-blocked by default, approval-enabled per Mission Contract** | Safest; matches Codex brief Case C |
| Mission Contracts: manual or from Team config? | **Generated from Team config, editable manually** | Reduces setup friction |
| Sentinel in v1? | **Visually marked as "coming"** — shell only, no live alerts | Avoids over-promising; Scribe is v1 |
| Symbol-level provenance in v1? | **TypeScript + JavaScript only** | Covers the primary Tandem use case |
| Candidate work: branches/worktrees/sandboxes? | **Git branches** (aligns with existing commit/Vercel flow in brief) | |
| External integrations in v1? | **Git + Vercel** (shown in Case A timeline) | |

---

## Build order for Phase T

1. **T09 + T01** — Governance Overview (light workspace shell + nav) — this proves the two-mode concept
2. **T06** — Exact Approval Panel (modal on the Studio) — highest trust / highest risk component
3. **T05** — Blocked patch surface (Studio inline band)
4. **T08** — Mission Contract detail
5. **T15** — Timeline
6. **T03 + T04** — Studio provenance ON + drawer
7. **T13** — Approvals queue
8. **T14** — Incident detail
9. **T16** — Session Replay
10. **T17–T21** — Remaining provenance, contribution, heatmap, external actions, kill switch

---

## Verdict

The existing Tandem standalone is a strong, professional IDE foundation. The dark Studio needs:
- A provenance layer (gutter badges + lifecycle colours + provenance drawer)
- An approval panel (modal)
- A blocked patch band
- Governance state in the status bar and agent pills

The Governance workspace is a wholly new light environment that replaces the Studio when the user switches modes. It is not a tab — it is a separate operating context, calm and editorial, for reviewing what happened and what needs attention.

**Start with the Governance Overview (T09) to prove the light workspace concept, then the Approval Panel (T06) because it is the highest-stakes interaction.**
