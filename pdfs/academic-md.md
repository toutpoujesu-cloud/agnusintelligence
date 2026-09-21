from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.section import WD_SECTION
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_CELL_VERTICAL_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.enum.style import WD_STYLE_TYPE
from docx.enum.text import WD_BREAK
from docx.enum.section import WD_ORIENT
from docx.enum.table import WD_ROW_HEIGHT_RULE
from docx.enum.text import WD_LINE_SPACING
from pathlib import Path

out = Path("/mnt/data/AGNUS_Academic_AI_Capability_Platform_Blueprint.docx")

doc = Document()

# Page setup
for sec in doc.sections:
    sec.top_margin = Inches(0.65)
    sec.bottom_margin = Inches(0.65)
    sec.left_margin = Inches(0.72)
    sec.right_margin = Inches(0.72)

styles = doc.styles
styles["Normal"].font.name = "Aptos"
styles["Normal"].font.size = Pt(9.5)
styles["Normal"].paragraph_format.space_after = Pt(5)
styles["Normal"].paragraph_format.line_spacing = 1.08

for sname, size, color in [
    ("Title", 28, "17263C"),
    ("Heading 1", 19, "17263C"),
    ("Heading 2", 14, "274C77"),
    ("Heading 3", 11.5, "355D7A"),
]:
    st = styles[sname]
    st.font.name = "Aptos Display"
    st.font.size = Pt(size)
    st.font.color.rgb = RGBColor.from_string(color)
    st.font.bold = True
    st.paragraph_format.space_before = Pt(10)
    st.paragraph_format.space_after = Pt(5)

# Custom small styles
if "Blueprint Label" not in styles:
    s = styles.add_style("Blueprint Label", WD_STYLE_TYPE.PARAGRAPH)
    s.font.name = "Aptos"
    s.font.size = Pt(8)
    s.font.bold = True
    s.font.color.rgb = RGBColor.from_string("6B7280")
    s.font.all_caps = True
    s.paragraph_format.space_after = Pt(2)

if "Module Title" not in styles:
    s = styles.add_style("Module Title", WD_STYLE_TYPE.PARAGRAPH)
    s.font.name = "Aptos Display"
    s.font.size = Pt(10.5)
    s.font.bold = True
    s.font.color.rgb = RGBColor.from_string("17263C")
    s.paragraph_format.space_before = Pt(4)
    s.paragraph_format.space_after = Pt(2)

def shade_cell(cell, fill):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement('w:shd')
    shd.set(qn('w:fill'), fill)
    tcPr.append(shd)

def set_cell_margins(cell, top=90, start=100, bottom=90, end=100):
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()
    tcMar = tcPr.first_child_found_in("w:tcMar")
    if tcMar is None:
        tcMar = OxmlElement('w:tcMar')
        tcPr.append(tcMar)
    for m, v in [("top", top), ("start", start), ("bottom", bottom), ("end", end)]:
        node = tcMar.find(qn(f"w:{m}"))
        if node is None:
            node = OxmlElement(f"w:{m}")
            tcMar.append(node)
        node.set(qn("w:w"), str(v))
        node.set(qn("w:type"), "dxa")

def add_bullets(items, level=0):
    for item in items:
        p = doc.add_paragraph(style="List Bullet" if level == 0 else "List Bullet 2")
        p.paragraph_format.space_after = Pt(2)
        p.add_run(item)

def add_module(num, title, learn, achieve, practical, workflow):
    p = doc.add_paragraph(style="Module Title")
    p.add_run(f"MODULE {num} — {title}")
    t = doc.add_table(rows=2, cols=2)
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    t.autofit = False
    t.columns[0].width = Inches(3.65)
    t.columns[1].width = Inches(3.65)
    labels = [("WHAT THEY LEARN", learn), ("WHAT THEY ACHIEVE", achieve),
              ("PRACTICAL ACTIVITY", practical), ("WORKFLOW", workflow)]
    for idx, (label, text) in enumerate(labels):
        r, c = divmod(idx, 2)
        cell = t.cell(r,c)
        set_cell_margins(cell)
        if idx in (0,1): shade_cell(cell, "F5F7FA")
        p1 = cell.paragraphs[0]
        p1.style = doc.styles["Blueprint Label"]
        p1.add_run(label)
        p2 = cell.add_paragraph()
        p2.paragraph_format.space_after = Pt(0)
        p2.add_run(text)
    doc.add_paragraph().paragraph_format.space_after = Pt(1)

# Cover
p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
p.paragraph_format.space_before = Pt(45)
r = p.add_run("AGNUS")
r.font.name = "Aptos Display"; r.font.size = Pt(15); r.font.bold = True; r.font.color.rgb = RGBColor.from_string("274C77")
p = doc.add_paragraph(style="Title")
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
p.add_run("Academic AI Capability Platform")
p2 = doc.add_paragraph()
p2.alignment = WD_ALIGN_PARAGRAPH.CENTER
rr = p2.add_run("Product • Learning • Dashboard • Sandbox • Curriculum Blueprint")
rr.font.size = Pt(13); rr.font.color.rgb = RGBColor.from_string("5F6B7A")
p3 = doc.add_paragraph()
p3.alignment = WD_ALIGN_PARAGRAPH.CENTER
p3.paragraph_format.space_before = Pt(16)
rr = p3.add_run("DESIGN HANDOFF DOCUMENT")
rr.font.bold = True; rr.font.size = Pt(9); rr.font.color.rgb = RGBColor.from_string("8A5A32")

# executive card
tbl = doc.add_table(rows=1, cols=1)
tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
cell = tbl.cell(0,0); shade_cell(cell, "F3F0EA"); set_cell_margins(cell, 180, 220, 180, 220)
p = cell.paragraphs[0]
p.add_run("North Star\n").bold = True
p.add_run("Create a practical, text-and-visual, Codecademy-style environment where academics learn to understand, operate, direct, supervise, design, build and govern AI agents and AI-enabled systems by doing real work—not by watching videos.")
doc.add_paragraph()
p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
r = p.add_run("49 modules • 7 capability levels • scenario-first • token-efficient • progressively live")
r.font.italic = True; r.font.color.rgb = RGBColor.from_string("667085")

doc.add_page_break()

# 1 Product vision
doc.add_heading("1. Product Vision & Non-Negotiables", level=1)
doc.add_paragraph("This is not a conventional LMS and not a video course. It is a controlled AI construction academy: a professional learning laboratory where explanation, practice, supervision and creation happen in the same environment.")
add_bullets([
    "No instructional video. Teaching is concise text, diagrams, interactive graphics, examples and immediate practice.",
    "The student learns by doing: understand → see → do → observe → diagnose → improve → pass.",
    "The curriculum uses seven capability levels: UNDERSTAND, OPERATE, DIRECT, SUPERVISE, DESIGN, BUILD, GOVERN.",
    "Human authority runs through all seven levels. The platform must visibly distinguish human instruction, AI interpretation, AI inference, AI proposal and AI action.",
    "The student must learn not only to create agents, but to use AI to create workflows, interfaces, applications and functioning products.",
    "Supervision is not a separate theory lesson. It is present while the student creates.",
    "Early education should be deterministic and pre-authored wherever possible. Live AI is unlocked progressively only when generative behavior is itself necessary to the competency.",
    "A learner passes through demonstrated capability, not content consumption."
])

doc.add_heading("2. Graduate Outcome", level=1)
doc.add_paragraph("A graduate should be able to take an idea from intention to controlled implementation while understanding what the AI is doing and maintaining the ability to inspect, correct, restrict, verify and govern the work.")
t = doc.add_table(rows=1, cols=7); t.alignment = WD_TABLE_ALIGNMENT.CENTER
for i, x in enumerate(["1 UNDERSTAND","2 OPERATE","3 DIRECT","4 SUPERVISE","5 DESIGN","6 BUILD","7 GOVERN"]):
    c=t.cell(0,i); shade_cell(c, "E9EEF4" if i%2==0 else "F5F7FA"); set_cell_margins(c,100,60,100,60)
    p=c.paragraphs[0]; p.alignment=WD_ALIGN_PARAGRAPH.CENTER
    rr=p.add_run(x); rr.bold=True; rr.font.size=Pt(8.5); rr.font.color.rgb=RGBColor.from_string("17263C")

doc.add_paragraph("End-state capability: Idea → specification → AI direction → supervised creation → agent/workflow/application building → testing → restricted deployment → ongoing governance.")

# aesthetic
doc.add_heading("3. Aesthetic & Design Language", level=1)
doc.add_paragraph("The visual language should feel like an academic research environment crossed with a professional command center and a development laboratory. It must not look like Moodle, a generic SaaS course catalogue, or a video-learning site.")
add_bullets([
    "Background: warm off-white / stone, not sterile white everywhere.",
    "Typography: restrained editorial serif for selected academic headings; highly legible sans-serif for controls, body text, code and data.",
    "Primary visual tone: deep navy / charcoal with one disciplined accent color. Use status colors only for meaningful system states.",
    "Layout: generous white space, fine borders, low-radius or restrained cards, subtle depth, no decorative gradients or cartoon gamification.",
    "Graphics: thin-line workflow diagrams, node maps, evidence chains, authority maps, traces and data-flow visualizations.",
    "Interaction: professional and calm. Feedback should feel diagnostic, not celebratory or childish.",
    "Progress: capability map, mission completion, portfolio artifacts and assessment evidence rather than badges everywhere."
])

doc.add_heading("4. Core Dashboard Architecture", level=1)
doc.add_paragraph("The signature learning screen is a three-panel workspace. The exact proportions may adapt by module, but the conceptual structure should remain stable.")
tbl = doc.add_table(rows=2, cols=3); tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
heads=["LEARN / MISSION","WORKSPACE","SUPERVISION"]
subs=[
    "Short concept • diagram • objective • requirements • mission brief",
    "The place where the learner configures, tests, builds, codes or interacts",
    "Intent • assumptions • actions • tools • permissions • changes • evidence • logs"
]
for i,h in enumerate(heads):
    c=tbl.cell(0,i); shade_cell(c,"17263C"); set_cell_margins(c,130,100,130,100)
    p=c.paragraphs[0]; p.alignment=WD_ALIGN_PARAGRAPH.CENTER
    r=p.add_run(h); r.bold=True; r.font.color.rgb=RGBColor(255,255,255)
    c2=tbl.cell(1,i); set_cell_margins(c2,140,120,140,120)
    p=c2.paragraphs[0]; p.add_run(subs[i])
doc.add_paragraph("Design principle: the learner should never have to leave the lesson to practice. The learning environment is the construction environment.")

doc.add_heading("5. Dashboard Information Architecture", level=1)
add_bullets([
    "Top bar: Agnus Academy wordmark, current Level, current Mission, progress, laboratory credits, profile/help.",
    "Primary navigation: Learn, Missions, Laboratory, Build, Portfolio, Assessments, Governance (unlock progressively).",
    "Mission panel: concept, visual explanation, objective, constraints, expected evidence, pass condition.",
    "Workspace modes: interaction console, configuration form, scenario simulator, visual workflow canvas, agent builder, code IDE, application preview.",
    "Supervision drawer/panel: Human Intent, AI Interpretation, Assumptions, Proposed Actions, Tool Calls, Data Access, Permissions, Changes, Logs, Warnings.",
    "Persistent project record: original intent, current specification, authorized changes, rejected proposals, unresolved decisions.",
    "Portfolio: every meaningful agent, workflow, application, investigation and governance artifact created during training is retained."
])

# Progressive UI
doc.add_heading("6. Progressive Interface Unlocking", level=1)
levels = [
("UNDERSTAND","Mission • AI interaction • Inspector","Mostly deterministic simulation."),
("OPERATE","Objective • Context • Sources • Tools • Output","Structured operating controls appear."),
("DIRECT","Intent • Assumptions • Scope • Authority • Changes","Human-direction controls become explicit."),
("SUPERVISE","Logs • Traces • Tool Calls • Data Flow • Incidents • Intervention","Full observation layer appears."),
("DESIGN","Agent Canvas • Workflow Canvas • Knowledge • Memory • Tools • Permissions","Visual system-design environment unlocks."),
("BUILD","Files • Code • Terminal • Preview • AI Builder • Database • API","Browser IDE and application construction environment unlock."),
("GOVERN","Agents • Applications • Permissions • Audit • Monitoring • Incidents • Versions","Full operational control center.")
]
t=doc.add_table(rows=1, cols=3); t.alignment=WD_TABLE_ALIGNMENT.CENTER
for i,h in enumerate(["LEVEL","UI UNLOCK","PURPOSE"]):
    c=t.cell(0,i); shade_cell(c,"274C77"); p=c.paragraphs[0]; r=p.add_run(h); r.bold=True; r.font.color.rgb=RGBColor(255,255,255)
for a,b,cval in levels:
    row=t.add_row().cells
    for i,txt in enumerate([a,b,cval]):
        set_cell_margins(row[i]); row[i].paragraphs[0].add_run(txt)

doc.add_heading("7. Learning Engine: Seven-Step Mission Loop", level=1)
steps = ["1 Understand — concise explanation of the concept.",
         "2 See — diagram, comparison, trace or visual model.",
         "3 Do — learner performs an action in the workspace.",
         "4 Observe — learner sees the system behavior and evidence.",
         "5 Diagnose — learner identifies the cause, assumption, deviation or failure.",
         "6 Improve — learner changes the relevant element and reruns.",
         "7 Pass — hidden or explicit tests confirm demonstrated competency."]
add_bullets(steps)

doc.add_heading("8. Scenario Engine — The Educational Moat", level=1)
doc.add_paragraph("Build the Scenario Engine before relying heavily on live AI. Scenarios should be stored as structured definitions rather than hard-coded into individual screens, so educators can create hundreds of exercises without engineering every lesson.")
doc.add_paragraph("Every scenario should contain seven elements:", style="Blueprint Label")
add_bullets([
    "Situation — the context and starting state.",
    "Human Objective — what the learner must accomplish.",
    "AI Behavior — simulated behavior, response or action sequence.",
    "Hidden Condition — the mistake, risk, ambiguity or opportunity embedded in the scenario.",
    "Learner Decision — the action or judgment required.",
    "Consequence — what changes because of the learner's decision.",
    "Evaluation — which competency is scored and what constitutes passing."
])
doc.add_paragraph("Difficulty modes: Guided (problem is pointed out), Assisted (learner knows a problem exists), Independent (no warning), Adversarial (multiple plausible signals; learner must determine what actually matters).")

# execution modes
doc.add_heading("9. Token-Efficient Execution Architecture", level=1)
modes = [
("MODE 1 — Deterministic Simulation","Primarily Modules 1–14","Pre-written responses, parameterized outcomes, deterministic scoring. No model call required for most exercises."),
("MODE 2 — Branching Simulation","Early-to-mid curriculum","State machine / behavior tree chooses responses and consequences from learner actions. Still no live LLM required."),
("MODE 3 — Hybrid AI","Primarily Modules 15–35 where useful","Scenario engine handles predictable interactions; live AI is called only when free-form interpretation or generation materially improves the competency."),
("MODE 4 — Live Laboratory","Advanced DESIGN/BUILD/GOVERN","Real model calls, agent runs, code generation, application creation and open-ended capstone work. Usage is metered and budgeted.")
]
t=doc.add_table(rows=1, cols=3); t.alignment=WD_TABLE_ALIGNMENT.CENTER
for i,h in enumerate(["EXECUTION MODE","WHERE","IMPLEMENTATION"]):
    c=t.cell(0,i); shade_cell(c,"17263C"); r=c.paragraphs[0].add_run(h); r.bold=True; r.font.color.rgb=RGBColor(255,255,255)
for a,b,cval in modes:
    row=t.add_row().cells
    for i,txt in enumerate([a,b,cval]): set_cell_margins(row[i]); row[i].paragraphs[0].add_run(txt)

doc.add_paragraph("Routing rule: Student action → can deterministic scenario engine handle it? → if yes, simulate → if no, determine whether live AI is pedagogically necessary → only then call the AI gateway.")
doc.add_paragraph("Cost hierarchy: static scenario → state-machine response → cached output → small-model generation → advanced-model generation → agent/tool execution. The curriculum should move down this hierarchy only as competency demands it.")

doc.add_heading("10. AI Usage & Credit Control", level=1)
add_bullets([
    "All model access goes through an Agnus AI Gateway; never expose provider keys to the browser.",
    "Gateway responsibilities: model routing, usage limits, caching, token accounting, scenario context, policy enforcement, logging and provider abstraction.",
    "Simulations and guided labs can be free from a compute perspective; live agent execution and advanced build sessions consume internal laboratory credits.",
    "Course pricing should include a defined compute allowance. Additional advanced laboratory usage can be purchased separately.",
    "Cache repeated safe outputs and reuse pre-authored content whenever the learning objective does not require fresh generation."
])

# technology
doc.add_heading("11. Recommended Technology Architecture", level=1)
tech = [
("Web application","Next.js + React + TypeScript","Full-stack interactive application; strong component architecture."),
("UI system","Custom design system + Tailwind CSS or CSS Modules","Precise institutional visual language; reusable learning/workspace components."),
("Scenario engine","XState + JSON/TypeScript scenario definitions","Deterministic state machines, branching missions, explicit transitions and testable behavior."),
("Database","PostgreSQL","Learners, progress, scenarios, projects, portfolios, traces, assessment data."),
("Auth / storage","Supabase is a strong MVP option","Authentication, Postgres, storage, row-level security; can later be separated if required."),
("Code editor","Monaco Editor","Professional browser code editing experience."),
("Beginner code sandbox","Sandpack","Embedded React/JS exercises and fast live preview."),
("Advanced browser runtime","WebContainers where appropriate","Node.js-like browser runtime for advanced application-building labs."),
("Server-side sandbox","Isolated container/job service when required","Never execute arbitrary student code on the primary application server."),
("AI gateway","Custom backend service","Provider routing, quotas, caching, logs, policy, model abstraction."),
("Payments","Stripe","Individual tuition, subscriptions, credits and institutional billing."),
("Analytics","First-party learning event model","Track competencies, attempts, decisions, interventions and progression.")
]
t=doc.add_table(rows=1, cols=3); t.alignment=WD_TABLE_ALIGNMENT.CENTER
for i,h in enumerate(["LAYER","RECOMMENDATION","ROLE"]):
    c=t.cell(0,i); shade_cell(c,"274C77"); r=c.paragraphs[0].add_run(h); r.bold=True; r.font.color.rgb=RGBColor(255,255,255)
for rowdata in tech:
    row=t.add_row().cells
    for i,txt in enumerate(rowdata): set_cell_margins(row[i]); row[i].paragraphs[0].add_run(txt)

doc.add_heading("12. Core Product Objects / Data Model", level=1)
add_bullets([
    "User / Learner — identity, institution, role, progress and access tier.",
    "Level — one of the seven capability levels.",
    "Module — one of 49 competency units.",
    "Mission — an individual practical exercise inside a module.",
    "Scenario — deterministic or hybrid behavior definition used by a mission.",
    "Attempt — learner inputs, decisions, results, evidence and score.",
    "Project — persistent build or investigation created by the learner.",
    "Artifact — agent, workflow, interface, application, report, audit or governance object saved to the portfolio.",
    "Competency — measurable ability mapped to modules and assessment evidence.",
    "Trace — system actions, tool calls, data access, changes and approvals.",
    "Authorization / Decision — explicit learner approval, rejection or modification of AI proposals.",
    "Compute Ledger — live-AI and sandbox usage accounting."
])

doc.add_heading("13. Human Authority & Supervision Model", level=1)
doc.add_paragraph("The interface should make authorship and authority visible. AI-generated interpretation must not silently become an authorized requirement.")
t=doc.add_table(rows=1, cols=2); t.alignment=WD_TABLE_ALIGNMENT.CENTER
for i,h in enumerate(["LABEL","MEANING"]):
    c=t.cell(0,i); shade_cell(c,"17263C"); r=c.paragraphs[0].add_run(h); r.bold=True; r.font.color.rgb=RGBColor(255,255,255)
for a,b in [
("HUMAN INSTRUCTION","What the learner explicitly requested or decided."),
("AI INTERPRETATION","How the system interpreted the instruction."),
("AI INFERENCE","A conclusion added because information was missing or implied."),
("AI PROPOSAL","A new idea or direction suggested by AI."),
("AI ACTION","What the AI/system actually attempted or executed."),
("AUTHORIZED","Explicitly adopted by the human."),
("UNRESOLVED","Requires a human decision before becoming part of the authoritative specification.")
]:
    row=t.add_row().cells
    for i,txt in enumerate([a,b]): set_cell_margins(row[i]); row[i].paragraphs[0].add_run(txt)

doc.add_heading("14. Signature Supervision Components", level=1)
add_bullets([
    "Intent Ledger — original objective, current authoritative specification, accepted/rejected AI proposals and unresolved decisions.",
    "Assumption Inspector — surfaces inferred requirements and asks the learner to classify or authorize them.",
    "Agent Flight Recorder — chronological activity, tool calls, retries, data access, failures and blocked actions.",
    "Change Inspector — shows what files, permissions, APIs, dependencies, data structures or behaviors a proposed change will alter.",
    "Authority Map — visual map of who/what can initiate, decide, approve, execute, modify and terminate.",
    "Data Flow Inspector — shows where information originated, where it moved, what was retained and which external boundaries were crossed.",
    "Intervention Controls — warn, retry, pause, restrict, revoke, roll back, isolate and terminate where the exercise permits."
])

# Curriculum summary
doc.add_page_break()
doc.add_heading("15. Complete Curriculum — 49 Modules", level=1)
doc.add_paragraph("Each module is a demonstrated competency. Every module contains explanation, visual model, practice, observation, diagnosis/correction and an assessment or pass condition.")

modules = [
(1,"AI Foundations","Models, tokens, context, training vs inference, generated vs retrieved knowledge.","Explain what information an AI actually received and what it generated.","Inside the AI: compare unsupported generation with source-grounded output.","Read → visualize → predict → run → inspect → diagnose → demonstrate."),
(2,"From Chatbot to Agent","Model, chatbot, assistant, workflow, agent, agentic system and degrees of autonomy.","Classify systems by actual operational agency rather than marketing labels.","Classify seven simulated systems and defend each classification.","Understand → compare → inspect → classify → defend → challenge → pass."),
(3,"Anatomy of an Agent","Objective, instructions, context, knowledge, memory, tools, permissions, environment, actions, output.","Identify each agent component and predict what happens when it changes.","Disassemble a research agent; remove/alter components and diagnose effects.","Inspect → manipulate → predict → run → compare → explain → pass."),
(4,"How Agents Pursue Objectives","Planning, decomposition, action selection, observation, iteration, replanning and stopping.","Follow an agent's objective-to-action loop and distinguish human objective from agent-derived plan.","Watch an agent build and execute a multi-step research plan; identify unnecessary steps.","Objective → plan → action → observe → replan → completion check → audit."),
(5,"AI Limitations & Failure","Hallucination, unsupported claims, false citations, tool/context/instruction failures, uncertainty.","Detect correct-looking outputs produced by incorrect processes.","The Perfectly Wrong Report: find fabricated or unsupported evidence.","Inspect output → trace evidence → classify failure → locate cause → correct → verify → pass."),
(6,"Agency, Autonomy & Emergent Behavior","Increasing autonomy, persistence, unexpected strategies, adaptation and apparent intentionality.","Recognize how greater operational freedom changes supervision requirements.","Same Goal, Different Freedom: compare constrained and increasingly autonomous simulated agents.","Compare → observe → identify new capability → assess supervision need → justify → pass."),
(7,"Human Authority","Intention, instruction, delegation, automation, recommendation, functional control and control inversion.","Identify who is actually determining objectives, priorities, actions and stopping conditions.","Who Is Directing Whom? Analyze a university workflow as control shifts over time.","Map authority → inspect decisions → identify inversion → redesign → defend → pass."),
(8,"Giving AI Objectives","Outcome, scope, context, constraints, success criteria, exclusions and stop conditions.","Turn vague human intention into a precise operational objective.","Repair a vague research objective using a structured objective builder.","Intent → outcome → scope → boundaries → criteria → stop condition → test."),
(9,"Instruction Engineering","Instruction hierarchy, rules, constraints, prohibitions, conditions, error handling and escalation.","Build coherent instructions rather than a vague prompt.","Control a research agent across source, citation, conflict and uncertainty edge cases.","Define rules → run → encounter edge case → refine → rerun → verify → pass."),
(10,"Context Engineering","Active context, relevance, overload, history, project/task context and contamination.","Construct the information environment deliberately and remove distorting context.","The Invisible Influence: run the same task under neutral, biased and contaminated contexts.","Inspect context → classify relevance → prune → run → compare → diagnose → pass."),
(11,"Knowledge & Source Grounding","Model knowledge, uploaded/retrieved sources, primary/secondary evidence, provenance and verification.","Build a controlled evidence base and trace claims to sources.","Build the Evidence Base from academic, policy, web and social source pools.","Select → ground → run → trace claims → detect unsupported claim → correct → pass."),
(12,"Working With Tools","Search, files, databases, code, APIs, communications and operational capability.","Select only necessary tools and supervise tool choice.","Give a research agent only the tools it needs; detect unnecessary or wrong tool calls.","Inventory → justify → authorize → run → inspect calls → narrow → pass."),
(13,"Structured Outputs & Deliverables","Schemas, JSON, tables, evidence matrices, validation and required fields.","Design consistent outputs usable by people, workflows and applications.","Turn 15 prose paper summaries into validated structured evidence records.","Design schema → generate → validate → inspect missing fields → correct → pass."),
(14,"Iteration, Correction & Verification","Controlled refinement, regression checking, version comparison and validation.","Repair one weakness without breaking previously correct behavior.","Repair Without Breaking: improve conclusions while preserving citation accuracy.","Baseline → isolate failure → change one element → rerun → compare → regression test → pass."),
(15,"From Human Intention to Specification","Purpose, users, problems, outcomes, requirements, constraints, unknowns and acceptance criteria.","Turn a broad idea into an explicit buildable specification.","Convert “help researchers discover relevant work” into a full specification.","Idea → purpose → requirements → constraints → unknowns → acceptance criteria → authorize."),
(16,"Scope & Boundaries","In scope, out of scope, future scope, forbidden scope, dependencies and feature creep.","Prevent uncontrolled AI-assisted expansion.","Stop the Expansion: classify 15 AI-proposed features against the original purpose.","Baseline scope → proposals → classify → assess impact → authorize/reject → rebaseline → pass."),
(17,"Human Instruction vs AI Interpretation","Literal request, AI interpretation, inference, proposal and action.","Detect when AI adds meaning not explicitly authorized.","What Did I Actually Ask For? Analyze a research dashboard proposal for invented requirements.","Instruction → expose interpretation → mark additions → correct → authorize → execute → verify."),
(18,"Detecting AI Assumptions","User, business, data, technical, security, workflow and permission assumptions.","Identify assumptions before they become hidden design decisions.","Assumption Hunt: inspect a generated technical plan and classify every unconfirmed choice.","Plan → highlight assumptions → classify risk → resolve → update specification → rerun → pass."),
(19,"Delegation & Authority","Task, decision, action, temporary/persistent and reversible/irreversible authority.","Determine the minimum authority a task actually requires.","Authority Ladder: place analyze/recommend/draft/decide/execute tasks at appropriate levels.","Task → authority analysis → grant minimum → simulate request escalation → decide → verify → pass."),
(20,"Controlling Change","Version control, change scope, dependencies, regression, drift, rollback and approval.","Inspect the real impact of AI-generated changes before applying them.","One Small Change: add folder sharing and inspect files, permissions, APIs and roles affected.","Baseline → request → proposal → impact inspection → authorization → test → compare."),
(21,"Maintaining Human Intent","Intent checkpoints, requirement/priority/architecture drift and decision history.","Preserve original purpose across long iterative projects.","The Project That Changed: audit 25 decisions and restore alignment.","Baseline intent → history → current state → trace deviations → classify → correct → pass."),
(22,"Reading Agent Behavior","Planning patterns, retries, exploration, tool switching, stopping and inefficiency.","Observe behavior rather than judging only the final output.","Watch Without Interfering: identify when a research agent changes direction or becomes wasteful.","Observe → annotate → compare to objective → identify pattern → explain → pass."),
(23,"Action Logs, Traces & Execution History","Event logs, tool traces, timestamps, retries, state changes and causal reconstruction.","Reconstruct what actually happened from execution evidence.","Reconstruct the Incident: find why an incorrect citation appeared from 50 log entries.","Filter → sequence → causal hypothesis → confirm → explain → pass."),
(24,"Tool-Use Supervision","Tool appropriateness, arguments, frequency, escalation, redundancy and side effects.","Detect misuse even when the final result looks acceptable.","The Wrong Tool: detect web search substitution and unnecessary database-write tests.","Observe calls → compare need → inspect arguments → identify misuse → restrict/correct → pass."),
(25,"Data & Information Supervision","Provenance, classification, minimization, retention, movement, leakage and contamination.","Track information through its lifecycle and detect inappropriate movement or retention.","Where Did the Data Go? Trace confidential proposal data through processing and external calls.","Classify → map flow → inspect retention → identify boundary crossing → redesign → verify."),
(26,"Detecting Deviation","Objective, instruction, scope, tool, data, permission and behavioral deviation.","Find the first point where behavior diverges from authorized purpose.","Find the First Deviation in a 30-step execution where later errors originate from an earlier expansion.","Compare trace → locate first divergence → classify → assess consequence → correct → pass."),
(27,"Diagnosing Agent Failure","Objective, context, knowledge, tool, permission, memory, workflow, model and data failures.","Perform structured root-cause analysis instead of rewriting prompts blindly.","Failure Clinic: seven agents show similar symptoms with seven different causes.","Symptom → evidence → hypotheses → test → eliminate → root cause → corrective action."),
(28,"Intervention, Pause & Recovery","Warn, retry, pause, restrict, revoke, rollback, isolate, terminate and recover.","Choose proportional intervention and preserve valid work.","Stop or Continue? Respond to seven incidents with the correct intervention and recovery.","Detect → assess severity → intervene → preserve evidence/state → recover → verify → document."),
(29,"Agent Architecture","Purpose, inputs, outputs, instructions, knowledge, memory, tools, permissions, state and stopping.","Transform requirements into a defensible agent architecture.","Architect Before You Build: design a university publication-monitoring agent.","Requirement → components → justify → connect → test architecture → revise → pass."),
(30,"Objective & Instruction Architecture","Persistent objectives, priorities, constraints, prohibitions, conflict resolution and failure behavior.","Create stable governing logic that survives edge cases.","Build the Governing Logic for a research agent with conflicting requirements.","Prioritize → structure rules → define uncertainty/failure → hidden tests → refine → pass."),
(31,"Knowledge Architecture","Authority levels, retrieval, indexing, metadata, freshness, versioning and conflicts.","Design a knowledge environment with source hierarchy and provenance.","Build the Knowledge Map from 500 mixed resources and resolve conflicting versions.","Inventory → classify → authority → access → retrieval → conflict test → provenance verify."),
(32,"Memory Architecture","Session, short/long-term, user/project/task memory, retention, expiration and correction.","Decide what should be remembered, isolated, corrected or forgotten.","Memory Contamination: separate three research projects and correct stale stored assumptions.","Inspect → classify → isolate → set lifetime/precedence → rerun → verify → pass."),
(33,"Tool Architecture","Tool contracts, read/write, reversibility, scopes, credentials, combinations and fallbacks.","Design a minimal, justified tool environment.","Design the Tool Belt for a grant-research agent and test combined capabilities.","Inventory → select → scope → approval rules → combination analysis → hidden tests → pass."),
(34,"Workflow & Multi-Agent Design","Sequential/parallel flow, branches, handoffs, specialist agents, shared context and failure propagation.","Choose justified workflow complexity and design reliable handoffs.","One Agent or Five? Build and compare single-agent and multi-agent research architectures.","Decompose → design variants → simulate → compare quality/cost/risk → choose → defend."),
(35,"Restrictions, Permissions & Control Design","Default deny, least privilege, scoped credentials, limits, approval gates and revocation.","Design restrictions before deployment and prove the task still works.","Restrict by Design: reduce an over-permissioned agent to minimum necessary capability.","Inventory authority → deny by default → grant minimum → test task → attack hidden cases → refine."),
(36,"Building Your First Agent","End-to-end agent build cycle from purpose to evaluation.","Create, test, explain and defend a functioning agent.","Build an Academic Research Agent from a requirement without a supplied final architecture.","Specify → architect → configure → run → inspect → diagnose → improve."),
(37,"Building AI Workflows","Inputs, stages, decisions, branches, loops, checkpoints and error paths.","Build operational processes beyond one AI interaction.","Create a research-intelligence workflow from publication discovery through human review.","Map → build → run → inject failure → trace downstream impact → repair → verify."),
(38,"Building Interfaces","User journeys, forms, dashboards, approvals, logs, errors, roles and accessibility.","Create interfaces that support meaningful human supervision.","Design the Supervisor Interface with objective, actions, approvals, data, warnings and pause.","User task → information hierarchy → prototype → supervision test → revise → pass."),
(39,"Building Applications","Frontend, backend, logic, state, auth, database, storage, errors and deployment concepts.","Use AI to create a functioning application while supervising what is added.","Build a research workspace for projects, sources, evidence and structured notes.","Specify → scaffold → inspect AI changes → build → test → trace requirements → pass."),
(40,"Data, APIs & Integrations","Schemas, APIs, authentication, requests/responses, validation and external services.","Connect systems while understanding information and authority pathways.","Connect the research application to an external publication database and handle failure safely.","Define contract → connect → validate → observe data flow → inject failure → recover → pass."),
(41,"AI-Assisted Coding","Code structure, files, functions, dependencies, diffs, debugging, testing and security basics.","Supervise AI-generated code changes meaningfully.","Find What AI Changed after a simple CSV-export request modifies seven files and adds a dependency.","Request → inspect diff → explain changes → remove unnecessary change → test → regression check → pass."),
(42,"From Idea to Working Product","Problem-to-release product cycle: requirement, architecture, prototype, build, test and documentation.","Independently create a useful functioning product with AI assistance.","Blank Workspace: solve a real academic problem from concept to working product.","Problem → specification → architecture → prototype → build → test → document."),
(43,"Permission Architecture","Users, roles, resources, read/write/execute/admin, secrets, revocation and separation of duties.","Translate governance rules into technical permission structures.","Who Can Do What? Build a permission matrix for researchers, admins, agents and integrations.","Inventory actors/resources → define roles → least privilege → test unauthorized cases → refine → pass."),
(44,"Restriction in Depth","Multiple independent control layers across instruction, identity, tools, network, workflow and monitoring.","Design systems where one failed restriction does not expose full capability.","Break One Layer: remove controls one by one and determine whether prohibited actions remain impossible.","Layer controls → test baseline → remove layer → attack → strengthen → retest → pass."),
(45,"Security & Isolation","Sandboxing, secrets, network/file boundaries, user separation, injection and hostile content.","Recognize untrusted content and maintain isolation boundaries.","Hostile Document: external content tries to issue instructions and exfiltrate records.","Ingest → classify as data → detect manipulation → contain → sanitize/restrict → verify."),
(46,"Human Authorization Systems","Approval thresholds, context, re-authentication, reversibility and escalation.","Create meaningful approval rather than rubber-stamp confirmation.","Design the Approval Gate for a consequential agent action with complete decision context.","Classify action → define required context → design gate → simulate user decision → audit → pass."),
(47,"Auditing & Accountability","Actor identity, timestamps, inputs, outputs, versions, approvals, sources and evidence preservation.","Reconstruct who did what, under what authority, and why.","Audit the Incident three weeks after a questionable report is generated.","Collect records → correlate → reconstruct → identify responsibility/cause → document → pass."),
(48,"Monitoring, Intervention & Termination","Behavior/health/error monitoring, alerts, drift, pause, revoke, isolate, rollback and termination.","Operate deployed systems and intervene proportionally.","Live Operations: respond to escalating events across a multi-day simulation.","Monitor → detect → classify severity → intervene → preserve → recover → review."),
(49,"AI Governance & Institutional Deployment","Inventory, ownership, risk, policies, lifecycle, oversight, incident management and decommissioning.","Govern an institutional AI environment rather than one isolated agent.","Govern the University: inventory 38 known/unofficial AI uses and respond to a fabricated-citation incident.","Identify → assess → authorize → deploy controls → monitor → incident response → lifecycle governance.")
]

# Group by levels
level_ranges = [
("LEVEL 1 — UNDERSTAND",1,7),
("LEVEL 2 — OPERATE",8,14),
("LEVEL 3 — DIRECT",15,21),
("LEVEL 4 — SUPERVISE",22,28),
("LEVEL 5 — DESIGN",29,35),
("LEVEL 6 — BUILD",36,42),
("LEVEL 7 — GOVERN",43,49),
]
for level, start, end in level_ranges:
    doc.add_heading(level, level=2)
    for m in modules:
        if start <= m[0] <= end:
            add_module(*m)

doc.add_heading("16. Final Capstone", level=1)
doc.add_paragraph("The capstone is not Module 50. The curriculum remains 49 modules: seven levels of seven. The capstone sits above the curriculum as the integrated demonstration of all seven capabilities.")
doc.add_paragraph("Example brief: “A university wants a new AI-enabled academic research environment. Design, create, test, supervise and prepare it for controlled institutional deployment.”")
add_bullets([
    "The learner receives access to the AI systems, agent builder, application builder, code environment, databases, tools, testing environment and governance controls.",
    "Scaffolding is substantially removed. The learner must decide what needs to be built and justify the architecture.",
    "Assessment evaluates all seven capabilities independently: Understand, Operate, Direct, Supervise, Design, Build, Govern.",
    "The final result should include a working product, traceable decisions, supervision evidence, tests, permission/restriction design, auditability and a deployment/governance plan.",
    "Certification should report demonstrated competencies, not only an overall percentage."
])

doc.add_heading("17. Assessment & Portfolio Model", level=1)
add_bullets([
    "Each module maps to explicit competencies and observable evidence.",
    "Early missions may show warnings; later missions remove warnings and require independent detection.",
    "Hidden tests should verify behavior, restrictions, source adherence, failure handling and regression—not merely final output quality.",
    "Every major learner artifact is retained in a portfolio: agents, workflows, applications, evidence maps, incident analyses, permission matrices, audit records and capstone.",
    "Certification ladder can later support role-oriented credentials, but the core 49-module program should remain one coherent capability journey."
])

doc.add_heading("18. Build Priorities for Claude Design / Product Team", level=1)
priorities = [
("PHASE 1","Design system + information architecture","Establish visual language, three-panel learning shell, navigation, mission pages, progress and responsive behavior."),
("PHASE 2","Scenario engine + authoring format","Implement deterministic scenario definitions, state transitions, scoring, difficulty modes and educator authoring workflow."),
("PHASE 3","Learner state + competency engine","Progress, attempts, pass conditions, portfolio, decision history and assessment evidence."),
("PHASE 4","Supervision components","Intent Ledger, Assumption Inspector, traces, tool/data views, Change Inspector and intervention controls."),
("PHASE 5","Hybrid/live AI gateway","Provider abstraction, caching, quotas, credit ledger, logs and controlled model access."),
("PHASE 6","Agent/workflow/application builders","Visual design canvases, configuration, testing and application-construction experiences."),
("PHASE 7","Advanced sandbox + governance center","Monaco, Sandpack/WebContainers or isolated execution, APIs/data labs, audit/monitoring/governance dashboard and capstone.")
]
t=doc.add_table(rows=1, cols=3); t.alignment=WD_TABLE_ALIGNMENT.CENTER
for i,h in enumerate(["PHASE","BUILD","OUTCOME"]):
    c=t.cell(0,i); shade_cell(c,"17263C"); r=c.paragraphs[0].add_run(h); r.bold=True; r.font.color.rgb=RGBColor(255,255,255)
for rowdata in priorities:
    row=t.add_row().cells
    for i,txt in enumerate(rowdata): set_cell_margins(row[i]); row[i].paragraphs[0].add_run(txt)

doc.add_heading("19. Design Handoff — What Claude Design Should Produce", level=1)
add_bullets([
    "A complete desktop-first product shell and responsive system.",
    "Dashboard/home showing seven-level capability map, current mission, progress, portfolio and laboratory allowance.",
    "Canonical three-panel Mission screen with collapsed/expanded variants.",
    "Scenario states: guided, assisted, independent, adversarial; correct, incorrect, blocked, warning and consequence states.",
    "Supervision UI: intent/interpretation comparison, assumptions, tool calls, data flow, permissions, traces, change diff and intervention.",
    "Agent Builder, Workflow Canvas, Application Build workspace and browser IDE concepts that visually evolve from the same design system.",
    "Governance Control Center: permissions, audit, monitoring, incidents, versions and system inventory.",
    "Portfolio and certification views showing demonstrated capability evidence rather than generic course completion.",
    "Scenario Authoring Studio for internal curriculum authors.",
    "A reusable component inventory and interaction specification so engineering can implement the design consistently."
])

doc.add_heading("20. Product Principle to Protect", level=1)
tbl=doc.add_table(rows=1, cols=1); tbl.alignment=WD_TABLE_ALIGNMENT.CENTER
c=tbl.cell(0,0); shade_cell(c,"F3F0EA"); set_cell_margins(c,220,260,220,260)
p=c.paragraphs[0]; p.alignment=WD_ALIGN_PARAGRAPH.CENTER
r=p.add_run("THE PLATFORM SHOULD GROW WITH THE LEARNER."); r.bold=True; r.font.size=Pt(14); r.font.color.rgb=RGBColor.from_string("17263C")
p=c.add_paragraph()
p.alignment=WD_ALIGN_PARAGRAPH.CENTER
p.add_run("At Module 1, the learner sees only what is necessary. By Module 49, the entire laboratory—agents, workflows, code, applications, permissions, audit, monitoring and governance—has been unlocked. Complexity is earned through demonstrated competence.")

doc.add_paragraph()
p=doc.add_paragraph()
p.alignment=WD_ALIGN_PARAGRAPH.CENTER
r=p.add_run("END OF BLUEPRINT")
r.bold=True; r.font.size=Pt(8); r.font.color.rgb=RGBColor.from_string("8A5A32")

doc.save(out)
print(out)
