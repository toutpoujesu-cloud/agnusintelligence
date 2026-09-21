# The Protocol — A Documentation System for AI-Built Software

A portable template. Everything in `{{double braces}}` is a placeholder — fill it in per
project. Everything else is the system itself and should be copied as-is.

---

## Why this exists

Hand an AI coding agent a spec and tell it to build, and two failure modes show up reliably:

1. **Optimistic self-reporting.** The agent says "done" because the happy path rendered once,
   not because it verified error states, edge cases, or that the feature survives a real test.
2. **Session amnesia.** Context resets. The next session either re-derives what already exists
   (wasted work) or — worse — silently re-does or contradicts it (regressions).

The Protocol is a fix for both, built from two ideas:

- **Nothing is done until it's proven done**, by an external, checkable artifact — not a
  self-report. This is the **four-gate rule**.
- **Every session leaves a written trace** a future session (or a human, or a different AI) can
  pick up cold, without re-reading the whole codebase. This is what the six documents are for.

It was proven out on a real build (an investigation/documentary engine) and re-derived a second
time, independently, for an unrelated project (a driving-exam prep app) — in both cases the
same six documents, the same four gates, adapted content only. That's what makes it a template
and not a one-off.

---

## The Four-Gate Rule

This is the backbone. Every task in every document in this system is measured against it.

| Gate | Name | What it actually requires |
|---|---|---|
| 1 | Implementation | The work is *fully* done — not scaffolded, not stubbed, not "mostly." |
| 2 | Requirement review | The result is checked against the written spec, line by line — by inspection, never by assumption. |
| 3 | End-to-end test | The system is exercised as a whole — commands run, routes hit, flows walked through, pass/fail counted. |
| 4 | Evidence | A screenshot, a terminal capture, or a machine-readable result file is saved. No evidence, no proof — and no proof means the task isn't done, no matter how confident the report sounds. |

**Completion Rule:** A task is not `Green` until all four gates pass and evidence is saved. A
working happy path with no error handling is not Green. Tested-but-unscreenshotted is not Green.

**Stop Rule:** If review or testing finds a gap, record the failure, fix it, restart the failed
gate — do not move to the next task until the current one is Green.

**Status vocabulary**, used identically across every document in the system:

| Status | Meaning | Shorthand |
|---|---|---|
| Not started | No implementation work has begun. | — |
| In progress | Gate 1 is underway, or a failed gate is being corrected. | ~ |
| Blocked | A named external dependency prevents progress; the owner is recorded. | ! |
| Green | All four gates passed, evidence is stored. | ✓ |

Gate 4 specifically deserves its own rule, because it's the one agents skip under time pressure:

> **Screenshot Proof Rule** — always capture a screenshot, terminal output, or machine-readable
> result file for a finished task. If none exists, the task cannot be proven, and is not
> complete. Stop. Diagnose. Do not report Green.

---

## The Six Documents

Each has one job. They are not redundant with each other — a project using this system keeps
all six, because each answers a different question that the others don't.

### 1. `My Skills.md` — the standing competency bar

**Question it answers:** *What quality bar is the builder committing to, before any code is
written?*

Written in first person, as identity, not as a resume for a human to skim: "I write TypeScript
natively... I will not use `any` as a first resort... I will not call a feature done when only
the happy path works." This isn't decorative — it's a **self-reference the AI re-reads to
calibrate its own standard**, the same way a human engineer holds themselves to a personal bar
that doesn't get relitigated every single task.

**Template skeleton:**
```markdown
# My Skills
### Who I Am & What I Bring

## Who I Am
{{one paragraph — the working identity, stated as fact, not aspiration}}

## Education
{{real or equivalent-experience grounding}}

## {{Core stack area 1}} — e.g. "TypeScript"
{{fluency described concretely — not "I know TypeScript" but the specific features,
patterns, and judgment calls that prove it}}

## {{Core stack area 2, 3, 4...}}
{{same pattern per technology the project actually needs}}

## How I Work
{{the process discipline — reading the spec first, writing minimal code, finishing
edge cases, not building for hypothetical futures}}

## What I Will Not Do
{{a hard, specific list — "I will not store sensitive data in localStorage," not
"I write secure code"}}
```

Write one of these **before** scaffolding a single file. It sets the bar the other five
documents will hold the work to.

---

### 2. `Roadmap.md` — the master ledger

**Question it answers:** *Of everything this project needs, what exists, and what's left?*

One row per atomic task, IDed (`T00.1`, `T01.2`...), grouped by phase, with columns for the
first three gates and the fourth separately, rolling up to a single `Green count / total`
number that never lies about where the project actually stands.

**Template skeleton:**
```markdown
# {{PROJECT NAME}} — MASTER ROADMAP
## Status Legend
| Status | Meaning | Display |
|---|---|---|
| Not started | ... | — |
| In progress | ... | ~ |
| Blocked | ... | ! |
| Green | ... | ✓ |

## {{AREA 1, e.g. FRONTEND}} TASKS
| ID | Task Title | Phase | G1–G3 | G4 | Status | Notes |
|---|---|---|---|---|---|---|
| T00.1 | {{task}} | 00 | | | Not started | |

## {{AREA 2, e.g. BACKEND}} TASKS
{{same table shape}}

## SUMMARY
| Category | Count |
|---|---|
| {{Area 1}} tasks | N |
| {{Area 2}} tasks | N |
| **Total** | **N** |

## Green Count: 0 / N
```

This is exhaustive by design. It should be the single place anyone — human or AI — goes to
answer "is X built yet" without reading source.

---

### 3. `{{Core Subsystem}} Engine Roadmap.md` — the deep-dive on the riskiest part

**Question it answers:** *For the one subsystem where getting it wrong is most expensive, what
exactly does "correct" mean, task by task?*

Every project has one part where a bug isn't just annoying, it's a trust failure: an audit
trail that must be tamper-evident, a payment flow, a content pipeline whose data feeds
everything downstream. That subsystem gets its own roadmap, at full four-gate depth per task —
not just a status cell, but the literal steps for each gate.

**Template skeleton (one task):**
```markdown
### {{E1.1}} — {{Task title}}

**Objective:** {{what "done" means for this task, in one paragraph}}

**Gate 1 — Do each step**
- {{concrete implementation step}}
- {{concrete implementation step}}

**Gate 2 — Review and compare**
- {{specific thing to check against the spec}}
- {{specific thing to check against the spec}}

**Gate 3 — End-to-end test**
- {{specific input}} → {{specific expected output}}
- {{a deliberately broken case}} → {{expected failure behavior}}

**Gate 4 — Screenshot proof**
- {{exact artifact to capture}}

**Definition of Done:** {{one or two sentences, unambiguous}}

**Status: Not started**
```

Rule of thumb for picking which subsystem earns this document: ask "if this silently breaks,
does the whole product's trust break with it?" If yes, it gets the deep-dive. Everything else
stays at the summary level in `Roadmap.md`.

---

### 4. `Launch Top Priorities.md` — the shipping filter

**Question it answers:** *Of everything in the Roadmap, what specifically blocks launch — and
in what order?*

Distinct from the master Roadmap on purpose: the Roadmap is exhaustive, this is curated down to
only the items that gate shipping, ordered by dependency, each with acceptance criteria stated
as a plain yes/no test.

**Template skeleton:**
```markdown
# LAUNCH TOP PRIORITIES
## {{PROJECT NAME}}

## Control Rule
No task may be marked Green until all four gates are complete. {{restate the rule,
naming the other documents it also governs}}

## P0 Priorities — Launch-Blocking
Ordered by dependency. A later item cannot begin until items it depends on are Green.

### P0.1 — {{Gate name, e.g. "App Foundation Gate"}}
**Objective:** {{what must be true before anything else can be tested}}
**Gate 1 — Implementation** {{...}}
**Gate 2 — Requirement review** {{...}}
**Gate 3 — End-to-end testing** {{...}}
**Gate 4 — Screenshot proof** {{...}}
**Acceptance criteria:** {{the exact conditions that must all be true}}
**Status: PENDING**

{{repeat P0.2, P0.3... — 4 to 6 items is typical; more than that and it stops being a filter}}
```

Good P0 gates to consider for almost any project: does the stack actually boot end to end;
does auth correctly gate access; is the core data trustworthy; does progress/state actually
persist where it's supposed to; is any live external dependency (an LLM call, a third-party
API) something the product can survive without at launch traffic.

---

### 5. `Todolist.md` — the tactical, session-level view

**Question it answers:** *Right now, this session, what should actually get worked on?*

The Roadmap is a ledger; this is a working list. Priority-tagged (`P0`–`P3`), grouped into
what's active now, what's queued next, and — critically — real **Blocked** and **Completed**
sections that get updated every session, so staleness is visible immediately.

**Template skeleton:**
```markdown
# {{PROJECT NAME}} — Todo List
### Linked to: Roadmap.md | Last Updated: {{date}}

**Priority levels:** [P0] blocker · [P1] critical path · [P2] important · [P3] non-blocking

## Currently Active — {{Phase name}}
- [ ] `[P0]` {{task}}

## Up Next — {{Phase name}}
{{same shape, one section per upcoming phase}}

## Blocked Items
{{real reasons, or "Nothing blocked yet."}}

## Completed
{{dated entries — this section should never stay empty for long; if it does, something's wrong}}
```

---

### 6. `The Update.md` — the append-only session memory

**Question it answers:** *What actually happened last session, in enough detail that a fresh
session — or a different AI entirely — can continue without re-discovering it?*

This is the document that specifically defeats session amnesia. Every entry is dated, never
edited after the fact, and records exactly what was built, what was checked against spec, what
was tested with real pass/fail counts, and where the evidence lives — or explicitly states that
no implementation happened this session, if that's the truth.

**Template skeleton:**
```markdown
# THE UPDATE
## {{PROJECT NAME}} — Running Status Record

## How to Use This Document
{{restate the rule: no vague summaries, no session entry without Gate 3/4 evidence
when implementation happened, honesty when it didn't}}

## Session {{N}} — {{date}}

### Gate 1 — Implementation
{{exact files, routes, functions — not "worked on auth"}}

### Gate 2 — Spec review
{{exact things checked and confirmed}}

### Gate 3 — End-to-end test
{{exact commands/flows run, exact results}}

### Gate 4 — Screenshot proof
{{exact evidence captured, where}}

### Protocol compliance
{{any violations and how they were corrected — or "none this session"}}

### Status after Session {{N}}
{{Green count / total, referencing Roadmap.md and any subsystem roadmap}}
```

---

## How the six fit together

```
My Skills.md          — the bar, set once, referenced always
Roadmap.md             — everything, at a glance, exhaustive
{{Engine}} Roadmap.md  — the one risky subsystem, at full depth
Launch Top Priorities  — the shipping filter, curated, dependency-ordered
Todolist.md             — this session's actual work queue
The Update.md           — the permanent, append-only memory of what happened
```

A new session's routine, in order: read `The Update.md`'s last entry to know where things stand
→ check `Todolist.md` for what's active → do the work under the four-gate rule → update
`Roadmap.md` and, if relevant, the subsystem roadmap and `Launch Top Priorities.md` → append a
new entry to `The Update.md` before the session ends.

---

## Instructions for Claude Design (or any builder using this template)

1. Before scaffolding anything, write `My Skills.md` — commit to the bar in writing.
2. Write `Roadmap.md` with every known task, even roughly — it's meant to grow, not be perfect
   on day one.
3. Identify the one subsystem where a silent bug would break trust in the whole product. Give
   it its own `{{Core Subsystem}} Engine Roadmap.md` at full four-gate depth.
4. Curate `Launch Top Priorities.md` down from the Roadmap — 4 to 6 dependency-ordered gates,
   no more.
5. Keep `Todolist.md` current at the start and end of every session — stale todo lists are
   worse than none.
6. Never end a session without appending to `The Update.md` — this is the one document that
   makes the whole system survive a context reset.
7. Never mark anything Green without all four gates and saved evidence. This is the rule the
   entire system exists to enforce — everything else is scaffolding around it.
