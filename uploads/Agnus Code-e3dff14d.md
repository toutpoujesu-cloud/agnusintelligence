

You are designing an expansion of the existing Tandem / Agnus coding platform.

I am providing the current standalone HTML design as the visual and structural source of truth. Do not redesign Tandem from scratch. Study the existing interface, preserve its character, and add the governance and transparency system described below as a coherent part of the existing product.

1. Product Positioning
Tandem is not trying to be the single smartest coding agent.

Tandem is becoming the controlled operating system in which specialized agents from different AI providers collaborate, execute real work, verify it, and leave an accountable record.

The interface must make this statement true:

Tandem does not ask users to trust an agent when it claims that work is complete. Tandem shows exactly what the agent proposed, what it was permitted to do, what it actually changed, what failed, what passed, who reviewed or approved it, which external actions followed, and the complete chain that produced the final result.

2. Preserve the Existing Design Language
The current product uses two related environments.

Dark Coding Studio
Preserve the existing dark IDE language for:

File Explorer.

Monaco editor.

Agent conversation.

Team Picker.

Output, Preview, Problems, Terminal and Artifact panels.

Status bar.

Live agent activity.

Live provenance decorations.

Approval requests during coding.

Continue using:

Near-black navy canvas.

Layered dark blue-gray panels.

Coral as the primary Tandem action color.

Blue, amber, red, green and purple as semantic colors.

Sora / Plus Jakarta Sans for interface text.

JetBrains Mono for code, hashes, IDs, timestamps and technical evidence.

Compact controls and information-dense IDE behavior.

Light Scandinavian Operational Workspace
The standalone design also contains a calmer light operational language with:

Warm white canvas.

Hairline borders.

Minimal shadows.

Editorial headings.

Quiet cards and tables.

Compact status pills.

Structured settings navigation.

Newsreader-style editorial summaries.

Use this environment for the full Governance and Provenance workspace:

Missions.

Policies.

Approvals.

Incidents.

Agent contribution.

Project heatmap.

Evidence.

Session replay.

Governance configuration.

The dark Studio and light governance workspace should feel like two modes of the same product—not separate applications.

3. Governance Architecture
Do not redesign this architecture:

Human
→ Team configuration and Mission Contracts
→ Orchestrator
→ Agent proposes an action
→ Canonical Action Gateway
→ Deterministic Policy Enforcer
→ ALLOW / REQUIRE APPROVAL / BLOCK
→ Capability Broker
→ Code / tool / external API
→ Result and verification
→ ActionRequest + PolicyDecision + AgentEvent + Ledger
→ Live Provenance / Sentinel / Scribe
The three governance roles must remain separate:

Enforcer
Question:

Is this action technically permitted?

The Enforcer is deterministic, not an AI model.

It produces:

ALLOW.

REQUIRE HUMAN APPROVAL.

BLOCK.

It checks:

Agent identity.

Mission.

Operational role.

Capability.

Resource.

File scope.

Environment.

Delegation authority.

Cost/rate limits.

Policy.

Exact approval state.

Sentinel
Question:

Does this behavior look abnormal or inconsistent with the mission?

Sentinel detects:

Mission drift.

Repeated denied actions.

Unusual production access.

Credential probing.

Unknown delegation.

Unusual tool or spending velocity.

Suspicious cross-resource behavior.

Sentinel may recommend investigation, restriction or suspension.

Sentinel must never grant permission.

Scribe
Question:

What happened?

Scribe creates:

Human-readable chronology.

Risk summaries.

Per-run compliance notes.

Weekly/monthly statements.

Evidence-grounded reports.

Scribe must never change policy, provenance or history.

4. Mission Contracts
Each executing agent has a Mission Contract.

A Mission Contract contains:

Agent identity and version.

Operational role.

Objective.

Assigned task.

Allowed tools.

Allowed external connections.

Allowed operations.

Allowed file/resource scopes.

Allowed environments.

Delegation policy.

Approval requirements.

Cost/tool/time limits.

Expiration.

Current governance state.

Design a Mission Contract experience that can be inspected before and during execution.

Example:

Agent
DeepSeek-04

Role
Backend Worker

Mission
Implement approved authentication changes.

Allowed
Read/write apps/api/**
Run development diagnostics and tests
Create Git branch
Create Vercel preview

Approval required
Modify shared database schema
Push protected branch

Blocked
Production database
Production deployment
Stripe
Credential export
Policy or audit modification
A role label alone does not grant permission. Capabilities must be shown separately from the role.

5. Live Provenance Inside the Dark Studio
Add a visible but unobtrusive control:

Provenance: ON / OFF
When enabled, Monaco shows authoritative agent attribution and lifecycle state.

Do not put metadata inside source files.

Separate agent identity from state
Agent identity uses:

Stable initials or icons.

Gutter badges.

Stable provider/agent tints.

Agent names in tooltips and drawers.

Examples:

C = Claude
D = DeepSeek
O = Codex/OpenAI
G = Gemini
Lifecycle state uses semantic colors:

Gray: original or untouched.

Blue: active/proposed modification.

Amber: applied but not verified.

Red: applied candidate failed diagnostics/tests.

Green: diagnostics/tests verified.

Purple: independently reviewed or human-approved.

Conflict marker: concurrent incompatible changes.

Never rely on color alone. Always include an icon, label, pattern or text.

A blocked patch must not color the real source as if it were applied. Show it in a separate “Blocked proposal” diff surface.

6. Compact Provenance Drawer
When the user clicks a gutter marker, changed symbol, patch badge or timeline event, open a compact provenance drawer without leaving the editor.

Show:

File
src/auth/reset-password.ts

Symbol
resetPassword()

State
TESTS PASSED

Executing agent
DeepSeek-04

Role
Backend Worker

Delegated by
Claude-Orchestrator-01

Task
TSK-882

Mission
MIS-102

Session
SES-9281

Change
CHG-8821

Policy
ALLOW

Started
14:32:18

Diagnostics
PASS

Tests
12 passed, 0 failed

Review
Claude Security Review — Approved

Human approval
Not required
Include actions:

View before/after diff.

Open mission.

Open policy decision.

Open timeline.

View related external actions.

Copy evidence reference.

Trace chain.

7. Proposed, Applied and Verified Must Be Different
Design distinct states for:

PROPOSED_PATCH
POLICY_EVALUATED
APPROVAL_PENDING
ALLOWED
BLOCKED
WRITING
WRITTEN_UNVERIFIED
DIAGNOSTICS_FAILED
DIAGNOSTICS_PASSED
TESTS_FAILED
TESTS_PASSED
REVIEW_REJECTED
REVIEW_APPROVED
HUMAN_APPROVED
MERGED
DEPLOYED
SUPERSEDED
REVERTED
CONFLICT
Do not visually collapse these into “changed.”

A patch detail should clearly answer:

Was it proposed?
Was it permitted?
Was it applied?
Did diagnostics pass?
Did tests pass?
Was it reviewed?
Was human approval required?
Was it merged?
Was it deployed?
8. Exact Approval Experience
Create a high-trust approval panel/modal inside the Studio.

Approval must show the exact requested effect:

Agent.

Mission.

Operation.

Target file/resource.

Environment.

Exact command or diff.

Patch/arguments hash.

Reason approval is required.

Potential effect.

Estimated cost if applicable.

Expiration.

Single-use status.

Actions:

Approve exact action.

Deny.

View full evidence.

Restrict agent.

Suspend run.

Clearly communicate:

If the patch, command, target, environment or cost changes, this approval will no longer apply.

Approval should not be a generic “Continue” button.

9. Blocked Action Experience
A blocked action must remain visible as evidence without affecting protected code.

Design:

BLOCKED PATCH ATTEMPT

Agent
DeepSeek-04

Requested
Modify apps/web/payments.ts

Reason
Outside Mission Contract file scope

Policy
MISSION_ALLOWED_PATHS

Protected file changed
NO

Time
14:37:08
Allow users to:

Inspect proposed diff.

Open Mission Contract.

View matched policy.

Add a human note.

Restrict or suspend the agent.

Trace the delegation chain.

Do not provide a casual “Run anyway” button for hard-blocked operations.

10. Governance Status in the Team Picker
Extend the existing Team Picker instead of replacing it.

For every configured role show:

Selected agent/model.

Role.

Mission status.

Capability summary.

Environment scope.

Review requirement.

Approval requirement.

Estimated cost policy.

Governance state.

Example:

DeepSeek
Backend Worker

Files
apps/api/**

Database
Development only

Deploy
Preview only

Review
Required

State
Ready
Before a run starts, provide a Team Governance Summary:

Manager authority.

Worker roster and boundaries.

Researcher read-only scope.

Reviewer read-only scope.

Verifier authority.

Documenter documentation-only scope.

Parallel isolation method.

Production access count.

Missing credentials.

Conflicting or incomplete mission definitions.

If configuration is unsafe or incomplete, show exactly why the run cannot begin.

11. Full Governance Workspace
Create a dedicated Governance entry in the existing navigation.

Use the light Scandinavian operational style.

Recommended navigation:

Overview
Show:

Active governed runs.

Actions allowed.

Approval requests.

Blocked actions.

Restricted agents.

Open incidents.

Unverified changes.

Failed tests.

Production accesses.

Risk trend.

Include a quiet editorial Scribe/Sentinel briefing, not a loud dashboard.

Live
A real-time stream of:

Agent.

Mission.

Requested action.

Resource.

Environment.

Policy decision.

Approval.

Execution result.

Verification state.

Missions
List and inspect Mission Contracts.

Allow authorized humans to:

Create from role templates.

Review effective capabilities.

Compare versions.

See which runs used each version.

Pause future use.

Never silently edit an active run’s immutable mission.

Policies
Show deterministic policy rules and precedence:

Platform hard blocks.

Organization/owner policy.

Project policy.

Mission policy.

Environment policy.

Approval policy.

Temporary restrictions.

Show human-readable rule explanation alongside the machine identifier.

Approvals
Queues:

Pending.

Approved.

Denied.

Expired.

Consumed.

Invalidated by request change.

Incidents
Show:

Sentinel alert.

Triggering evidence.

Agent and mission.

Restriction/suspension state.

Affected capabilities.

Owner.

Timeline.

Resolution.

Recovery authorization.

Provenance
Tabs:

Live.

Timeline.

Replay.

Files.

Agents.

External Actions.

Diff.

Evidence.

12. Timeline
Create an editor-linked chronological timeline.

Example:

14:30 Human created task
14:31 Claude delegated to DeepSeek
14:32 DeepSeek opened reset-password.ts
14:33 Proposed patch CHG-8821
14:33 Policy ALLOW
14:34 Patch applied to candidate workspace
14:36 Diagnostics PASS
14:37 Tests FAIL — 2
14:39 Correction CHG-8822 proposed
14:39 Policy ALLOW
14:40 Correction applied
14:42 Tests PASS — 12/12
14:43 Security Reviewer APPROVED
14:44 Merge approved
14:45 Git commit created
14:46 Vercel preview created
14:47 Scribe note recorded
Clicking an event must:

Open the relevant file/symbol.

Highlight the relevant patch.

Show policy decision.

Show before/after.

Show agent/task/mission.

Show verification or provider result.

Preserve the human’s current context.

13. Session Replay
Create event-based replay controls:

Play | Pause | 1× | 2× | 4× | Previous | Next | Jump to event
Replay should reconstruct:

File opened.

Agent entered preparation state.

Proposed patch.

Policy decision.

Approval.

Candidate application.

Diagnostics.

Failed tests.

Correction.

Passing tests.

Review.

Merge.

External actions.

Scribe record.

Replay is not a video player. It reconstructs UI state from authoritative events.

Design honest missing-data states for older sessions.

14. File and Symbol Provenance
Create a file-level and symbol-level history.

Show:

Agents that touched the file.

Symbols changed.

Changes proposed.

Changes applied.

Blocked proposals.

Current verification state.

Reviews.

Revisions.

Reverts.

Related commits/deployments.

Unresolved failures.

Historical line numbers are not enough. The design should communicate symbol or diff-hunk anchoring where available and honestly fall back to file/hunk attribution when a language is unsupported.

15. Agent Contribution View
For each agent show evidence-based activity:

DeepSeek-04

Files touched          18
Symbols touched        27
Patches proposed       31
Patches applied        28
Blocked                 3
Diagnostics failed      2
Tests failed            4
Tests passed           24
Reviews received       11
External actions        7
Human approvals         2
Open incidents          0
Avoid gamifying agents by quantity alone. Emphasize:

Verification rate.

Review outcome.

Policy compliance.

Unresolved risk.

Rework rate.

Cost.

Mission adherence.

16. Project Heatmap
Design an activity map:

auth/
  login.ts               ███
  reset-password.ts      █████████
  session.ts             ██

api/
  users.ts               ███
  payments.ts            ██████
Users must be able to switch the heatmap measure:

Number of changes.

Number of agents.

Unverified changes.

Failed verification.

Blocked attempts.

Production-linked changes.

External actions.

Current unresolved risk.

Clicking a file opens its provenance history.

17. External Actions
Code provenance must connect to external consequences.

Show chains such as:

Human request
→ Claude Orchestrator
→ DeepSeek Backend
→ resetPassword() changed
→ tests passed
→ Git commit created
→ Vercel preview deployed
→ deployment DEP-9281 succeeded
External-action detail should show:

Agent.

Mission.

Capability broker.

Operation.

Connection/account.

Environment.

Resource.

Policy decision.

Human approval.

Provider result.

Related ChangeRecords.

Related commit/deployment.

Evidence hash/reference.

Never show raw provider credentials.

18. Restriction, Suspension and Kill Switch
Design three levels:

Block action
The operation is denied. The agent may continue safe work.

Restrict agent
Temporarily remove selected capabilities:

File writes.

Shell.

External APIs.

Secrets.

Delegation.

Production access.

Deployment.

Terminate run
Stop model execution.

Stop child delegations.

Stop tools/processes.

Invalidate pending approvals.

Revoke temporary credentials.

Preserve evidence.

Notify owner.

Create incident.

These actions require serious, explicit interfaces. Avoid accidental clicks, but do not make an emergency kill switch difficult to reach.

19. Scribe and Sentinel Presentation
Scribe
Show Scribe as the factual historian.

Every Scribe statement should include evidence references or expandable supporting facts.

Provide a deterministic “structured summary” state when the Scribe model is unavailable.

Never imply that Scribe decided policy.

Sentinel
Show Sentinel as an observer/advisor.

An alert should include:

Observed behavior.

Why it differs from the mission or baseline.

Severity.

Confidence.

Supporting events.

Recommended response.

Actual deterministic policy response.

Human disposition.

Never display Sentinel as an authority that approved an action.

20. Empty, Loading, Failure and Legacy States
Design all significant non-happy states:

No governance events.

Mission missing.

Agent key missing.

Policy engine unavailable.

Action blocked.

Approval expired.

Request changed after approval.

Provider unavailable.

Candidate hash stale.

Merge conflict.

Diagnostics unavailable.

Tests absent.

Tests failed.

Reviewer unavailable.

Scribe unavailable.

Sentinel unavailable.

Evidence incomplete.

Legacy session without symbol-level data.

Connection lost.

Run cancelled.

Agent restricted or terminated.

Policy engine unavailable must communicate that consequential actions are stopped, not allowed through.

21. First Prototype Flow
Design this complete vertical slice before designing every analytics page.

Case A: Allowed change
DeepSeek Backend modifies one permitted backend function:

Mission shown.

Agent proposes patch.

Enforcer returns ALLOW.

Proposed patch appears.

Candidate patch applies.

State becomes amber.

Diagnostics run.

Tests fail and state becomes red.

Corrected patch supersedes first patch.

Tests pass and state becomes green.

Security Reviewer approves.

Review state becomes purple.

Timeline contains every step.

Scribe summarizes only recorded evidence.

Case B: Blocked change
DeepSeek attempts an out-of-scope payment-file change:

Proposed diff appears separately.

Enforcer returns BLOCK.

Protected source remains unchanged.

Blocked evidence remains inspectable.

Mission and policy are one click away.

Case C: Exact approval
DeepSeek proposes a protected schema change:

Proposed diff appears.

Enforcer requires human approval.

Human sees exact patch and hash.

Human approves that exact action.

Enforcer re-evaluates.

Only the approved patch may proceed.

Any changed patch invalidates approval.

Case D: Race/stale change
The file changes between approval and application:

Original hash mismatch is detected.

Application stops.

Prior approval becomes invalid.

New diff and decision are required.

Timeline explains why execution stopped.

22. Required Design Deliverables
Please return:

A concise audit of the current standalone design:

What should remain unchanged.

What should be extended.

Where governance currently fits naturally.

Where the current design creates conflicts or space constraints.

An updated information architecture for:

Dark Studio.

Team Picker.

Governance workspace.

Settings.

Decisions/Scribe.

Provenance and incidents.

High-fidelity designs for:

Studio with Provenance ON.

Provenance drawer.

Proposed/blocked patch.

Exact approval panel.

Team Governance Summary.

Governance Overview.

Live actions.

Mission Contract detail.

Policy detail.

Approvals queue.

Incident detail.

Timeline.

Replay.

File/symbol provenance.

Agent contribution.

Heatmap.

External-action detail.

Evidence/chain detail.

All major states for the four prototype cases.

A component inventory with:

Component name.

Purpose.

Variants.

States.

Inputs/data required.

Desktop placement.

Responsive behavior.

Accessibility behavior.

Design tokens for:

Agent identity markers.

Semantic lifecycle states.

Severity.

Policy outcomes.

Approval states.

Verification states.

Conflicts.

Governance states.

Interaction specification:

Trigger.

Result.

Panel/modal/drawer behavior.

Loading state.

Failure state.

Keyboard behavior.

Focus behavior.

Dismissal behavior.

Deep-link behavior.

A data-to-interface mapping showing which authoritative record drives every visual element.

Responsive designs for at least:

1440px desktop.

1280px laptop.

1024px constrained workspace.

An implementation handoff:

Updated standalone HTML prototype or equivalent complete design artifact.

Exact copy.

Icons and SVG assets.

Token values.

Spacing and dimensions.

Component hierarchy.

Interaction notes.

No placeholder “magic” behavior that lacks a data source.

23. Before Finalizing, Tell Me What You Need
After reviewing the standalone design and this brief, first provide a short “Inputs needed” section.

Ask only for information genuinely required to avoid inventing product behavior, such as:

Whether Governance should be a top-level navigation destination, a Studio modal, or both.

Whether the light Scandinavian workspace is approved for full Governance.

Which human roles exist in v1: owner only, owner/admin/developer/reviewer, or another model.

Whether production actions are hard-blocked or approval-enabled.

Whether Mission Contracts are created manually, generated from Team configuration, or both.

Whether full patch contents may be retained and for how long.

Whether Sentinel is part of the first release or visually marked as planned.

Which languages require symbol-level provenance in v1.

Whether candidate work uses branches, worktrees or separate sandboxes.

Which external integrations are included in the first release.

Whether the first prototype should modify the existing standalone HTML directly.

Do not ask questions whose answers are already contained in this brief.

When something remains undecided, show the safest recommended default and explain its design consequence.

Final Direction
Do not turn governance into an intimidating compliance dashboard separated from coding.

The human must understand governance while the work is happening.

The Studio should answer:

What is the agent doing right now, and is it permitted?

The Governance workspace should answer:

What happened, why was it permitted or blocked, what evidence supports the result, and what requires my attention?

Preserve Tandem’s existing visual identity. Add clarity, authority and accountability without making the interface noisy or bureaucratic.

Displaying The Protocol Template.md.