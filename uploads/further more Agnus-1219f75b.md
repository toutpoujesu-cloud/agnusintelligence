Continue from the current AGNUS Code — Live Dashboard you have already designed.

IMPORTANT:

DO NOT redesign the dashboard.
DO NOT replace the current layout.
DO NOT introduce a new visual language.
DO NOT remove existing functionality.

The current design is approved as the foundation.

Preserve:

- Enforcer strip
- Missions left rail
- central code canvas
- Live Execution right rail
- bottom terminal/tests/problems/git/API/evidence area
- provenance timeline
- approval drawer
- governance drawer
- current dark visual system
- current five lifecycle colors
- current agent colors
- blocked-file example
- Sentinel behavior
- exact-action approval
- existing replay concept

The objective of this pass is to COMPLETE the Live Code Provenance experience.

There are seven specific improvements.

────────────────────────────────────
1. SEPARATE AGENT IDENTITY FROM STATE
────────────────────────────────────

Currently the line provenance marker relies too heavily on lifecycle color.

We need two simultaneous visual dimensions:

WHO touched the code?

and

WHAT STATE is the code in?

Keep lifecycle colors:

GRAY
Original / untouched

BLUE
Currently being modified / execution in progress

AMBER
Written but unverified

RED
Failed verification / blocked condition

GREEN
Verified / tests passed

PURPLE
Reviewed / approved

But agent identity must remain visible independently.

Examples:

D = DeepSeek
C = Claude
O = OpenAI
G = Gemini

Use a small agent badge/avatar/initial in the editor gutter.

Example:

D  ●  84 │ if (Date.now() > entry.expiresAt) {

"D" identifies DeepSeek.

The colored state indicator identifies VERIFIED / FAILED / WRITTEN / etc.

Therefore green must never mean DeepSeek.
Green means verified.

Agent attribution and lifecycle state are separate concepts.

Hovering either marker can still reveal detailed provenance.

────────────────────────────────────
2. ADD CODE PROVENANCE INSPECTOR
────────────────────────────────────

Hover tooltip is useful and should remain.

But clicking a governed code region should open a richer Provenance Inspector.

This should preferably appear as a contextual right-side drawer or panel.

Show:

CHANGE
CHG-8821

FILE
apps/api/auth/reset-password.ts

SYMBOL
resetPassword()

LINES
9–11

AGENT
DeepSeek-04

ROLE
Backend Worker

MISSION
MIS-102

TASK
JWT expiry fix

SESSION
SES-9281

ORCHESTRATOR
Claude-01

POLICY DECISION
ALLOW

PERMISSION
write · apps/api/auth/**

PATCH HASH
sha256:...

TESTS
12/12 passed

REVIEWER
Claude Security Reviewer

HUMAN APPROVAL
where applicable

COMMIT
abc1234

EVIDENCE
sha256:...

Below this show:

CHAIN OF CUSTODY

Human
↓
Claude Orchestrator
↓
DeepSeek Worker
↓
Action Gateway
↓
AGNUS Enforcer
↓
filesystem.file.write
↓
resetPassword()
↓
Diagnostics
↓
Tests
↓
Review
↓
Commit
↓
Vercel Preview

Each node should be clickable where useful.

The purpose is:

A user clicks CODE and sees the entire history responsible for that code existing.

────────────────────────────────────
3. PROPOSED PATCH MUST LOOK DIFFERENT FROM APPLIED CODE
────────────────────────────────────

This is critical.

There are three fundamentally different things:

PROPOSED CODE
APPLIED CODE
VERIFIED CODE

Do not visually imply that a proposed patch is already in the source file.

When an agent proposes a patch that has not yet been authorized:

Show a ghost/preview diff.

For example:

PROPOSED CHANGE
DeepSeek-04
Awaiting Enforcer decision

+ if (Date.now() > entry.expiresAt) {
+    throw new Error('Token expired');
+ }

Use a subtle translucent treatment.

If human approval is required:

PROPOSED CHANGE
APPROVAL REQUIRED

The real working tree remains unchanged.

If BLOCKED:

BLOCKED PATCH ATTEMPT
CHG-8823

Show the attempted diff in an evidence view.

Clearly state:

SOURCE UNCHANGED

The blocked patch remains available historically but must never visually appear as applied source code.

────────────────────────────────────
4. COMPLETE REPLAY MODE
────────────────────────────────────

The current timeline/replay concept is good.

Expand it into a proper replay experience.

When Replay is activated, show controls:

|◀ Previous | ▶ Play/Pause | Next ▶| | 1× | 2× | 4× | LIVE |

Also show:

REPLAYING SES-9281
14:37:22

Make historical mode visually unmistakable.

For example add a subtle top indicator:

REPLAY MODE
Viewing historical workspace state
14:37:22
Return to Live

Replay should reconstruct:

14:30
Original code

14:33
Patch proposed

14:34
Enforcer ALLOW

14:34
Code written → AMBER

14:37
Tests fail → RED

14:39
Correction proposed

14:39
Correction written → AMBER

14:42
Tests pass → GREEN

14:43
Review → PURPLE

14:44
Human approval

14:44
Commit

14:45
Vercel preview deployment

Clicking timeline events should jump to the relevant code and provenance inspector.

Replay must be event reconstruction, not video playback.

────────────────────────────────────
5. LINK EXTERNAL ACTIONS DIRECTLY TO CODE
────────────────────────────────────

The dashboard already has API Calls and external execution records.

Now connect those records to code provenance.

Example:

Vercel Preview Deployment
dpl_82jfk9

Triggered by:
DeepSeek-04

Mission:
MIS-102

Task:
JWT expiry fix

Related changes:
CHG-8821
CHG-8822

Code:
resetPassword()

Commit:
abc1234

Policy:
ALLOW

Environment:
Staging

Clicking CHG-8821 should jump to the code.

Clicking DeepSeek should open the agent.

Clicking MIS-102 should open the mission.

Clicking the deployment should open its execution evidence.

We need:

CODE → ACTION

and

ACTION → CODE

navigation.

This is end-to-end action provenance.

────────────────────────────────────
6. ADD CONCURRENT EDIT / CONFLICT STATE
────────────────────────────────────

Do NOT use RED for this because RED already represents failure/blocking.

Create a separate conflict visual treatment.

Example:

CONCURRENT EDIT

DeepSeek-04
currently modifying resetPassword()

Claude-02
attempting modification of same symbol

Show:

CONFLICT / CONCURRENT ACCESS

Possible visual treatment:

striped line background,
split gutter marker,
outlined region,
or another neutral conflict pattern.

The visual must communicate:

two agents are touching or requesting the same governed code region.

Clicking it should show:

Agent A
Agent B
missions
tasks
timestamps
ownership
policy result

This becomes important in multi-agent coding.

────────────────────────────────────
7. ADD PROJECT PROVENANCE VIEW
────────────────────────────────────

The existing screen is primarily session-level.

Add a project-level Provenance workspace accessible from:

Provenance → Project View

Use tabs:

OVERVIEW
FILES
AGENTS
CHANGES
EXTERNAL ACTIONS
HEATMAP
EVIDENCE

OVERVIEW

Show:

Agents active
Files touched
Symbols touched
Changes proposed
Changes applied
Blocked changes
Verified changes
Human approvals
External actions
Incidents

FILES

Example:

reset-password.ts
DeepSeek
2 changes
Verified
Reviewed

DataTable.tsx
Claude
5 changes
1 unresolved

payments.ts
Claude
1 blocked attempt
Source unchanged

Click file → provenance history.

AGENTS

DeepSeek-04

Files touched      18
Symbols touched    27
Patches proposed   31
Applied            28
Blocked             3
Tests failed        4
Tests passed       24
External actions    7
Approvals            2

Click agent → contribution history.

CHANGES

Chronological/change-ID view:

CHG-8821
CHG-8822
CHG-8823 BLOCKED
etc.

EXTERNAL ACTIONS

GitHub
Vercel
Database
MCP
other third-party APIs

Every external action must link back to:

agent
mission
task
code change
policy decision
evidence

HEATMAP

Show repository activity.

Example:

auth/
 reset-password.ts     ███████
 session.ts            ██

payments/
 checkout.ts           ███
 payments.ts           BLOCKED ATTEMPT

Heat intensity represents governed AI activity, not quality.

Click a file to inspect provenance.

EVIDENCE

Search/filter evidence by:

Agent
Mission
Task
Session
File
Symbol
Change ID
Policy decision
External action
Date/time
Approval
Incident

────────────────────────────────────
IMPORTANT DESIGN PRINCIPLE
────────────────────────────────────

The current dashboard already demonstrates:

"What is happening now?"

This pass should make it equally powerful at answering:

WHO did it?

WHY did they do it?

WHO instructed them?

WAS it allowed?

WHAT exactly changed?

WHAT failed?

WHAT passed?

WHO reviewed it?

WHO approved it?

WHAT external system did it affect?

CAN I reconstruct the entire sequence later?

The user must never need to trust an agent saying:

"I completed the work."

AGNUS should visually prove what happened.

────────────────────────────────────
DO NOT CHANGE
────────────────────────────────────

Do not remove the current five-state lifecycle.

Do not merge agent colors with lifecycle colors.

Do not replace the Enforcer.

Do not make Sentinel authoritative.

Do not make Scribe authoritative.

Do not treat proposed code as applied code.

Do not let blocked code appear as written source.

Do not create a second provenance logging architecture.

The UI must consume the same ActionRequest, PolicyDecision, AgentEvent, approval and evidence/ledger concepts already defined for the backend architecture.

────────────────────────────────────
FINAL PRODUCT EXPERIENCE
────────────────────────────────────

The Live Code Dashboard should ultimately communicate:

GOVERNANCE CONTROLS THE ACTION.
PROVENANCE PROVES THE ACTION.
THE CODE ITSELF SHOWS THE EVIDENCE.

Proceed by refining the existing dashboard rather than starting over.