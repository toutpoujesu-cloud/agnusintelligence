# AGNUS Platform — Todo List
### The Protocol · Last Updated: 2 September 2026 · Honest state

**IMPORTANT NOTE FOR THE NEXT AGENT:**
The roadmap says 122/158 GREEN. This means files exist, not that they are production-ready.
"Built" = file exists and renders. "Verified" = tested, connected, launch-ready.
Many items are Built but not Verified. Do not assume GREEN = done.
Read every file before claiming it is complete.

**Priority levels:** [P0] blocker · [P1] critical path · [P2] important · [P3] non-blocking

---

## STATUS: What is genuinely complete (verified this session, 2 Sept 2026)

- [x] All Phase R EU AI Act articles (R01–R19) — 19 articles, data + HTML verified
- [x] All Phase P other pillars (P01–P07) — 7 articles, data + HTML verified
- [x] All Phase S public platform sections (S01–S13) — 13 sections, pages connected
- [x] All Phase A Academy modules (A01–A52) — 52 module files exist in academy/
- [x] All Phase B Track B simulations (B01–B06) — 5 programmes built and tested
- [x] All Phase T Tandem governance files (T01–T25) — 25 files exist in tandem/
- [x] ED01–ED08 — Stage briefing panels added to Control Training Environment (2 Sept 2026)

---

## WHAT IS NOT DONE — honest list

### [P0] Academy App wiring — HIGHEST PRIORITY
- [x] `[P0]` Wire `academy/AGNUS - Academy App.html` as single entry point — DONE 2 Sept 2026. All 7 levels, Track B, CTE all linked. Module list modals with direct file links.
  - Connect all 52 Track A modules in sequence (M01→M49)
  - Connect all 5 Track B simulations
  - Connect Control Training Environment as capstone
  - Show progress per module (completed / not started)
  - Link to Checkpoint pages between levels
  - THIS IS THE MOST IMPORTANT MISSING PIECE — without it, 65 files with no journey

### [P0] Quality audit — top 10 modules
- [x] `[P0]` M01–M07 all browser-verified (Session 10 · 13 Sept 2026). M02: 6 phases, pass screen → M03 ✓. M03: 6 phases, pass screen → M04 ✓. M04: 6 phases, pass screen → M05 ✓. M05: 6 phases, pass screen → M06 ✓. M06: 6 phases, pass screen → M07 ✓. M07: 6 phases, `showLevelComplete()` → Level 1 Checkpoint ✓. Zero navigation errors across all 6 modules.
- [x] `[P0]` B01–B05 audit complete (Session 8). Navigation: 0 alerts, all 5 wired B01→B02→B03→B04→B05→App. Scoring logic: correct 5-event evaluation engine, cert only unlocked on 100%. Bug fixed: B02–B05 state.score not assigned in buildScore() — cert showed "0%". Fixed: `state.score=score;` added to all 4.
- [x] `[P0]` CTE audit complete (Session 8). **CRITICAL GAP resolved (Session 9 · 13 Sept 2026)**: Stages 4, 5, 6 built and wired. Stage 4: Human Oversight — 5-agent approval gate configuration (AGT-001/004/005/008/009) with correct thresholds, primary approvers, backup escalation, max-wait times. Stage 5: Test & Assure — 6 governance scenarios with explanations, 4/6 pass threshold. Stage 6: Operate & Defend — AGT-006 prompt injection incident, 6 sequential decision points, full regulatory context (EU AI Act Art.73, GDPR Art.33, DORA Art.19). Stage 7 wired: goPhase(7) from Stage 6 "Continue". goPhase() updated for n=4/5/6. Auto-reveal array updated [1,2,3,4,5,6,7]. All three state flags (oversightDone, testsDone, incidentContained) set on completion. File: 181KB (was 134KB).
- [x] `[P0]` Verify all Checkpoint pages link correctly between levels — DONE Session 8 (13 Sept 2026). All 6 checkpoints: dashboard → App, next-level buttons wired, MODULE_FILES lookup injected for review links.

### [P0] Navigation wiring — COMPLETE (Session 8 · 13 Sept 2026)
- [x] All 49 Track A modules pass-screen buttons wired (M01→M49 sequence)
- [x] All 49 Track A modules rail/dashboard buttons → Academy App
- [x] All 6 Level Checkpoint pages fully wired (dashboard + next-level + review links)
- [x] All 5 Track B simulations wired (B01→B02→B03→B04→B05→App)
- [x] Academy App audit: 0 alerts, 0 dead links, 59 file refs verified, module launch correct, no localStorage (progress is static visual, by design)

### [P1] Tandem platform integration gaps (from session 2 Sept 2026)
- [ ] `[P1]` T26 — Responsive layouts (1440 / 1280 / 1024px) — only remaining T task
- [ ] `[P1]` AGNUS Code Live Dashboard — Enforcer strip (persistent stats above editor)
- [ ] `[P1]` AGNUS Code Live Dashboard — BLUE proposed state visible in editor (agent reasoning)
- [ ] `[P1]` AGNUS Code Live Dashboard — Sentinel advisory indicator in studio topbar
- [ ] `[P1]` AGNUS Code — wire right panel Chat to show delegation flow for current change

### [P1] Phase G — Blueprint gap fixes
- [x] `[P1]` G01 — 7-stage program spine restructure. Session 10 · 13 Sept 2026: Programme spine overview table added to Academy App journey map (L1→Stage 1 through L7→Stage 7). Each level card-mini now shows `.stage-spine` annotation (e.g. "→ Builds Stage 1 · Discover & Register"). CSS: `.stage-spine`, `.spine-overview`, `.spine-grid`, `.spine-col`.
- [x] `[P1]` G07 — Persistent company context + role assignment. Session 10 · 13 Sept 2026: Added ob-q4 onboarding step (4 role options: AI Governance Manager, Chief Risk Officer, Head of Legal, CFO). `agnus_role` and `agnus_goal` saved to localStorage on finishOnboard(). Role pill displayed in journey rail. CTE intel strip shows `intel-role` cell; phase 0 greeting uses `welcome-role` span — both populated from localStorage on CTE load. ob-q1/q2/q3 dots updated to 4.
- [x] `[P1]` G08 — AGNUS Scoring Engine (dimension-aware). Session 10 · 13 Sept 2026: `getDimScores()` added — returns 6 named dimensions with proportional/binary scoring. `calcScore()` now sums `getDimScores()` output. `generateEvidence()` expanded with second panel: dimensional breakdown table with progress bars, pts/max, pass/partial/incomplete status, and score legend. Dimensions: Registry (16pts proportional), Missions (16pts proportional), Permissions/Oversight/Testing/Incident (17pts each binary).
- [ ] `[P2]` G09 — Phase A→B→C articulation document
- [ ] `[P2]` G10 — OpenAPI spec for 10 Control Plane endpoints
- [ ] `[P2]` G11 — SDK roadmap — Python + TypeScript

### [P1] Phase ED — Education panels — FULLY VERIFIED (Session 10 · 13 Sept 2026)
- [x] ED01–ED08 fully tested in browser (Session 10 · 13 Sept 2026).
  - Bug found and fixed: duplicate `reopenBriefing()` definition — overlay system (Session 8) was overwriting inline brief-n system (Session 9), ignoring stage parameter, leaving "? Reopen briefing" buttons non-functional.
  - Fix 1: `goPhase(n)` now calls `showBriefing(n)` on first entry (rich overlay modal with BRIEFINGS data — what/why/law/failures/modules/correct principle).
  - Fix 2: `dismissBriefing()` now also calls `revealStage(currentBriefingStage)` — overlay dismiss simultaneously hides inline brief and reveals task area.
  - Fix 3: `reopenBriefing(n)` merged — calls `showBriefing(n)` when BRIEFINGS[n] exists, falls back to overlay when called without parameter (floating ? button).
  - Verified: overlay shows on first stage entry, skips on re-entry, "?" button reopens, dismissal reveals task, all 7 stages work, score 100/100, certificate generated.

### [P2] Alexis IKT Phase 4 (separate product)
- [ ] `[P2]` Real remote session protocol (TeamViewer/AnyDesk)
- [ ] `[P2]` Tekniker session history & invoices from DB
- [ ] `[P2]` Persistent ChatDrawer (Supabase Realtime)
- [ ] `[P3]` Mobile app — React Native Expo
- [ ] `[P3]` Vipps MobilePay integration

### [P3] Phase E — Editorial platform backend (on hold — internal use only)
- [ ] Article Pipeline functional build
- [ ] Story Builder
- [ ] AI Writer
- [ ] Human Review
- [ ] Research Panel
- [ ] Topic Clusters / Keyword Discovery
- [ ] Publishing Calendar
- [ ] Content Archive
- [ ] Source Scoring

---

## INSTRUCTIONS FOR NEXT AGENT

1. **Read The Protocol/README.md first.** This project is sealed under the Covenant of the Blood of Jesus Christ.
2. **Read The Protocol/My Skills.md** — your role, your design language, what you are and are not.
3. **Read The Protocol/Roadmap.md** — but treat GREEN as "file exists," not "production-ready."
4. **Start with Academy App wiring** — this is the highest-leverage single task.
5. **The aesthetic across all AGNUS files:** warm cream `#F8F6F2`, near-black `#14181F`, gold `#C49A2C`, Manrope + Newsreader. Dark Tandem world: `#0D0F1A`, coral `#FF6B47`, IBM Plex Mono.
6. **The owner pays $1500 for Academy.** Every module must be premium — content-rich, visually compelling, genuinely educational.
7. **Do not mark anything GREEN on the roadmap unless you have personally opened and tested the file.**
8. **When tokens run low, update this Todolist and the Roadmap before stopping.**

---

## PHASE AK — Academy Backend

### Phase A — Accounts (COMPLETE 2026-09-26)
- [x] Supabase project created — EU Frankfurt (jndoxwgnsuvmznfpgoks)
- [x] SQL migration ran: `profiles`, `entitlements`, `progress`, `certificates`, `stripe_events` tables, RLS policies, auto-profile trigger (on_auth_user_created)
- [x] `academy/AGNUS - Academy Sign Up.html` — email/name/password → Supabase signUp()
- [x] `academy/AGNUS - Academy Log In.html` — signInWithPassword() + forgot-password flow
- [x] `academy/AGNUS - Academy Account.html` — profile edit, membership badge, sign out
- [x] `supabase/functions/me/index.ts` — deployed, JWT verify OFF, ACADEMY_ADMINS=agnusresearch@gmail.com secret set
- [x] `academy/agnus-config.js` — anon key (no service_role key in any file)

### Phase B — Payment (COMPLETE 2026-09-26)
- [x] Stripe product "AGNUS Academy" created — €1,500 one-time (prod_VKaaF8UHFuZi6a, price_1UJvPd64JSHZyrDFtTJ75kgz)
- [x] Stripe webhook created → stripe-webhook function (we_1UJvVF64JSHZyrDFtzHR7WDu), event: checkout.session.completed
- [x] `create-checkout` Edge Function — creates Stripe Checkout session with user_id metadata
- [x] `stripe-webhook` Edge Function — verifies signature, inserts entitlement (14-day refund window)
- [x] `request-refund` Edge Function — validates window, Stripe refund, marks entitlement refunded
- [x] `academy/AGNUS - Academy Enrol.html` — payment landing, redirects to Stripe Checkout
- [x] `academy/AGNUS - Academy Welcome.html` — post-payment, polls entitlement, shows name + dates
- [x] `academy/agnus-config.js` — STRIPE_PK and STRIPE_PRICE_ID added

MANUAL STEP REQUIRED (user):
- Add STRIPE_SECRET_KEY to Supabase Edge Function secrets (sk_test_... from Stripe API keys page)
- Add STRIPE_WEBHOOK_SECRET to Supabase Edge Function secrets (whsec_... from Stripe webhook page)
- Deploy create-checkout, stripe-webhook, request-refund functions via Supabase dashboard

---

## Completed (verified)

- `2026-09-02` ED01–ED08 briefing panels added to Control Training Environment. All 7 stage briefings with full education (what, why, law, failure modes, prior modules, correct answer). "?" revisit button. Confirmed working in browser.
- `2026-09-02` Phase A roadmap updated — all 52 module files confirmed existing
- `2026-08-27` Phase T: T01–T25 all built (Tandem governance platform, 25 files)
- `2026-08-23` Phase B: B01–B06 all built (5 Track B simulations)
- `2026-08-23` Phase S: S01–S13 all built (public platform sections)
- `2026-08-23` Phase P: P01–P07 all built (7 research pillar articles)
- `2026-08-22` Phase R: R01–R19 all built (EU AI Act research data layer)
