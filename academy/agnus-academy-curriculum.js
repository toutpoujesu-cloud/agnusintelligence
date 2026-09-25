/* =====================================================================
   AGNUS Academy · Curriculum data layer
   ---------------------------------------------------------------------
   One ordered list of every Academy item. Every lesson and checkpoint
   loads this file with:  <script src="agnus-academy-curriculum.js"></script>

   It provides:
   - the true module order (previous / next)
   - locking: an item opens only once the item before it is complete
   - progress per level and overall
   - a small floating panel on each page: position, previous, and
     "Mark complete & continue"
   - a lock screen when a student opens an item too early

   Progress is stored in this browser only (localStorage). A real
   backend with accounts must replace load()/save() before launch.
   ===================================================================== */
(function () {

  var LEVELS = [
    { id: 'L1', name: 'Understand' },
    { id: 'L2', name: 'Operate' },
    { id: 'L3', name: 'Direct' },
    { id: 'L4', name: 'Supervise' },
    { id: 'L5', name: 'Design' },
    { id: 'L6', name: 'Build' },
    { id: 'L7', name: 'Govern' },
    { id: 'L8', name: 'Build with AI' }
  ];

  // [id, level, title, file, type]   type: module | checkpoint | capstone | complete
  var ITEMS = [
    ['M01','L1','What is an AI Agent','AGNUS - Academy M01 - What is an AI Agent.html'],
    ['M02','L1','The Difference Between a Model and an Agent','AGNUS - Academy M02 - The Difference Between a Model and an Agent.html'],
    ['M03','L1','Reading a Tool Call','AGNUS - Academy M03 - Reading a Tool Call.html'],
    ['M04','L1','What Memory Means for an AI System','AGNUS - Academy M04 - What Memory Means for an AI System.html'],
    ['M05','L1','The First Deviation','AGNUS - Academy M05 - The First Deviation.html'],
    ['M06','L1',"Reading an Agent's Reasoning Trace","AGNUS - Academy M06 - Reading an Agent's Reasoning Trace.html"],
    ['M07','L1','Why AI Sounds Certain','AGNUS - Academy M07 - Why AI Sounds Certain.html'],
    ['CP1','L1','Level 1 Checkpoint','AGNUS - Academy Level 1 Checkpoint.html','checkpoint'],

    ['M08','L2','Running Your First Agent Task','AGNUS - Academy M08 - Running Your First Agent Task.html'],
    ['M09','L2','Why the AI Redesigned the Wrong Thing','AGNUS - Academy M09 - Why the AI Redesigned the Wrong Thing.html'],
    ['M10','L2',"The Tool Isn't Broken, the Brief Is",'AGNUS - Academy M10 - The Tool Isnt Broken the Brief Is.html'],
    ['M11','L2','Common Failure Patterns','AGNUS - Academy M11 - Common Failure Patterns.html'],
    ['M12','L2','Retry Logic','AGNUS - Academy M12 - Retry Logic.html'],
    ['M13','L2','Validating Output','AGNUS - Academy M13 - Validating Output.html'],
    ['M14','L2','Handing Off Work Between Tools','AGNUS - Academy M14 - Handing Off Work Between Tools.html'],

    ['M15','L3','Instruction Design 101','AGNUS - Academy M15 - Instruction Design 101.html'],
    ['M16','L3','Write the Prompt That Gets the Right Image','AGNUS - Academy M16 - Write the Prompt That Gets the Right Image.html'],
    ['M17','L3','Scope Constraints','AGNUS - Academy M17 - Scope Constraints.html'],
    ['M18','L3','Approval Gates','AGNUS - Academy M18 - Approval Gates.html'],
    ['M19','L3','Multi-Agent Coordination Basics','AGNUS - Academy M19 - Multi-Agent Coordination Basics.html'],
    ['M20','L3','Priority Handling','AGNUS - Academy M20 - Priority Handling.html'],
    ['M21','L3','Escalation Paths','AGNUS - Academy M21 - Escalation Paths.html'],
    ['CP23','L3','Level 2–3 Checkpoint','AGNUS - Academy Level 2-3 Checkpoint.html','checkpoint'],

    ['M22','L4','Reading Execution Logs','AGNUS - Academy M22 - Reading Execution Logs.html'],
    ['M23','L4','Spotting Scope Drift','AGNUS - Academy M23 - Spotting Scope Drift.html'],
    ['M24','L4','Authority Chain Analysis','AGNUS - Academy M24 - Authority Chain Analysis.html'],
    ['M25','L4','Intervention Controls','AGNUS - Academy M25 - Intervention Controls.html'],
    ['M26','L4','Find the First Deviation','AGNUS - Academy M26 - Find the First Deviation.html'],
    ['M26b','L4','Escalation Design','AGNUS - Academy M26b - Escalation Design.html'],
    ['M27','L4','Policy Architecture','AGNUS - Academy M27 - Policy Architecture.html'],
    ['M28','L4','Write the Governing Instruction','AGNUS - Academy M28 - Instruction Workspace.html'],
    ['CP4','L4','Level 4 Checkpoint','AGNUS - Academy Level 4 Checkpoint.html','checkpoint'],

    ['M29','L5',"When the Agent Won't Budge",'AGNUS - Academy M29 - Agent Wont Budge.html'],
    ['M30','L5','Verifying Financial Claims','AGNUS - Academy M30 - Verifying Financial Claims.html'],
    ['M31','L5',"The Marketing Claim That Wasn't True",'AGNUS - Academy M31 - The Marketing Claim That Wasnt True.html'],
    ['M32','L5','Approval Boundaries for Legal Drafts','AGNUS - Academy M32 - Approval Boundaries for Legal Drafts.html'],
    ['M33','L5','When Two Experts Would Disagree','AGNUS - Academy M33 - When Two Experts Would Disagree.html'],
    ['M34','L5','Verifying a Data Analysis Conclusion','AGNUS - Academy M34 - Verifying a Data Analysis Conclusion.html'],
    ['M35','L5','Instructions for Customer-Facing Agents','AGNUS - Academy M35 - Instructions for Customer-Facing Agents.html'],
    ['CP5','L5','Level 5 Checkpoint','AGNUS - Academy Level 5 Checkpoint.html','checkpoint'],

    ['M36a','L6','How an Application Is Actually Structured','AGNUS - Academy M36a - How an Application Is Actually Structured.html'],
    ['M36b','L6','Choosing the Right Architecture','AGNUS - Academy M36b - Choosing the Right Architecture.html'],
    ['M36c','L6','Directing an AI to Scaffold an Application','AGNUS - Academy M36c - Directing an AI to Scaffold an Application.html'],
    ['M36d','L6','Reviewing AI-Generated Architecture','AGNUS - Academy M36d - Reviewing AI-Generated Architecture.html'],
    ['M36e','L6','Build a Small Working Application','AGNUS - Academy M36e - Build a Small Working Application.html'],
    ['M36f','L6','Test Before You Trust It','AGNUS - Academy M36f - Test Before You Trust It.html'],
    ['M36g','L6','From Tested to Live','AGNUS - Academy M36g - From Tested to Live.html'],
    ['M37','L6','Build Your First Guardrail','AGNUS - Academy M37 - Build Your First Guardrail.html'],
    ['M38','L6','Build a Contract Review Checker','AGNUS - Academy M38 - Build a Contract Review Checker.html'],
    ['M39','L6','Build a Video Brief With Verifiable Claims','AGNUS - Academy M39 - Build a Video Brief With Verifiable Claims.html'],
    ['M40','L6','Build an Automated Fact-Check Step','AGNUS - Academy M40 - Build an Automated Fact-Check Step.html'],
    ['M41','L6','Build a Guardrail for Multi-Agent Handoffs','AGNUS - Academy M41 - Build a Guardrail for Multi-Agent Handoffs.html'],
    ['M42','L6','What Makes a Verification Test Suite Valid','AGNUS - Academy M42 - What Makes a Verification Test Suite Valid.html'],
    ['M42b','L6','Build Your Own Verification Test Suite','AGNUS - Academy M42b - Build Your Own Verification Test Suite.html'],
    ['CP6','L6','Level 6 Checkpoint','AGNUS - Academy Level 6 Checkpoint.html','checkpoint'],

    ['M43','L7','The Quarterly Agent Audit','AGNUS - Academy M43 - The Quarterly Agent Audit.html'],
    ['M44','L7','Governing Agent-to-Agent Handoffs','AGNUS - Academy M44 - Governing Agent-to-Agent Handoffs.html'],
    ['M45','L7','The Ambiguous Governance Call','AGNUS - Academy M45 - The Ambiguous Governance Call.html'],
    ['M46','L7',"Auditing a Vendor's AI Claims",'AGNUS - Academy M46 - Auditing a Vendors AI Claims.html'],
    ['M47','L7','Org-Wide Verification Policy','AGNUS - Academy M47 - Org-Wide Verification Policy.html'],
    ['M48','L7','When to Override Your Own Policy','AGNUS - Academy M48 - When to Override Your Own Policy.html'],
    ['CP7','L7','Level 7 Checkpoint','AGNUS - Academy Level 7 Checkpoint.html','checkpoint'],
    ['M49','L7',"Capstone: Design Your Company's AI Governance Framework",'AGNUS - Academy M49 - Capstone Design Your Companys AI Governance Framework.html','capstone'],

    ['L8-01','L8','Anatomy of an AI Agent','AGNUS - Academy L8-01 - Anatomy of an AI Agent.html'],
    ['L8-02','L8','Agent Architecture Patterns','AGNUS - Academy L8-02 - Agent Architecture Patterns.html'],
    ['L8-03','L8','Agent Memory Architecture','AGNUS - Academy L8-03 - Agent Memory Architecture.html'],
    ['L8-04','L8','Models vs Frameworks','AGNUS - Academy L8-04 - Models vs Frameworks.html'],
    ['L8-05','L8','Choosing a Framework','AGNUS - Academy L8-05 - Choosing a Framework.html'],
    ['L8-06','L8','MCP','AGNUS - Academy L8-06 - MCP.html'],
    ['L8-06b','L8','The Wider Model Landscape','AGNUS - Academy L8-06b - The Wider Model Landscape.html'],
    ['L8-07','L8','The Execution Layer','AGNUS - Academy L8-07 - The Execution Layer.html'],
    ['L8-08','L8','The Blueprint','AGNUS - Academy L8-08 - The Blueprint.html'],
    ['L8-09','L8','The Shaping','AGNUS - Academy L8-09 - The Shaping.html'],
    ['L8-10','L8','The Structuring','AGNUS - Academy L8-10 - The Structuring.html'],
    ['L8-11','L8','The Visual Prototype','AGNUS - Academy L8-11 - The Visual Prototype.html'],
    ['L8-12','L8','The Assembly','AGNUS - Academy L8-12 - The Assembly.html'],
    ['L8-13','L8','The Governance','AGNUS - Academy L8-13 - The Governance.html'],
    ['L8-14','L8','The Verification','AGNUS - Academy L8-14 - The Verification.html'],
    ['CP8','L8','Level 8 Checkpoint','AGNUS - Academy Level 8 Checkpoint.html','checkpoint'],
    ['L8-DONE','L8','Level 8 Complete','AGNUS - Academy L8 - Level Complete.html','complete']
  ].map(function (r, i) {
    return { id: r[0], level: r[1], title: r[2], file: r[3], type: r[4] || 'module', index: i };
  });

  // [minutes, steps] per item — used by the panel and the dashboard
  var META = {"M01":[15,["Understand","See","Practice","Pass"]],"M02":[18,["Understand","The anatomy of the difference","Same question. Two very different systems.","Why the distinction governs everything","Practice","Pass — hidden test"]],"M03":[16,["Understand","Every tool call has four parts","Agents issue tool calls in sequence","Recognising a suspicious tool call","Practice","Pass — hidden test"]],"M04":[16,["Understand","The four types of AI memory","How memory changes what an agent does","Memory and governance","Practice","Pass — hidden test"]],"M05":[15,["Understand","What confidence actually signals in an AI","The spectrum of AI errors","The first deviation — what changes at AGNUS","Practice","Pass — hidden test"]],"M06":[16,["Understand","Five elements of a reasoning trace","Reading a trace with a problem","Red flags in reasoning traces","Practice","Pass — hidden test"]],"M07":[15,["Understand","How a model generates text","Three mechanisms that produce wrong-but-confident output","What to do differently","Practice","Pass — hidden test"]],"CP1":[10,["Answer the questions","See your result"]],"M08":[20,["Understand","The pre-run checklist","Configure your first task","Reviewing agent output after a task run","Practice","Pass — hidden test"]],"M09":[16,["Understand","Tracing the root causes","The three root causes","What a better brief looks like","Practice","Pass — hidden test"]],"M10":[10,[]],"M11":[16,["Understand","Six common failure patterns","Diagnosing from symptoms","Prevention over detection","Practice","Pass — hidden test"]],"M12":[14,["Understand","Safe to retry vs dangerous to retry","The retry decision framework","Configuring retry behaviour in the brief","Practice","Pass — hidden test"]],"M13":[14,["Understand","Three validation layers","Validation in practice","A worked validation example","Practice","Pass — hidden test"]],"M14":[14,["Understand","A clean handoff chain","How handoffs fail","Four rules for clean handoffs","Practice","Pass — hidden test"]],"M15":[10,[]],"M16":[10,["Understand","Direct","Pass"]],"M17":[16,["Understand","Four types of scope constraint","With and without scope constraints","Build a scope constraint set","Practice","Pass — hidden test"]],"M18":[15,["Understand","Anatomy of an approval gate","Trigger conditions for approval gates","Gate simulation — make the approval decision","Practice","Pass — hidden test"]],"M19":[16,["Understand","Orchestrator and subagent","Three coordination patterns","Multi-agent risks","Practice","Pass — hidden test"]],"M20":[14,["Understand","The instruction hierarchy","Conflicts in practice","Writing the hierarchy into the brief","Practice","Pass — hidden test"]],"M21":[14,["Understand","What triggers escalation","Anatomy of an escalation path","What breaks an escalation path","Practice","Pass — hidden test"]],"CP23":[10,["Answer the questions","See your result"]],"M22":[16,["Understand","Reading a real execution log","The five-step governance log scan","Find the governance issue in this log","What good log coverage looks like","Pass — hidden test"]],"M23":[16,["Understand","The three stages of scope drift","A real drift scenario — traced step by step","The scope drift detection checklist","Practice","Pass — hidden test"]],"M24":[15,["Understand","Anatomy of a complete authority chain","The five authority chain analysis questions","Broken authority chains","Practice","Pass — hidden test"]],"M25":[15,["Understand","See","Practice","Pass"]],"M26":[25,["Understand","See","Step 3","Step 4","Step 5","Pass"]],"M26b":[12,["Why agents need escalation paths","The three escalation levels","Escalation triggers","Who receives the escalation","Practice","Pass — hidden test"]],"M27":[16,["Understand","The four policy layers","A complete policy architecture — worked example","Handling policy conflicts","Practice","Pass — hidden test"]],"M28":[18,["Understand","Five workspace principles","Live instruction builder","Versioning and the review process","Practice","Pass — hidden test"]],"CP4":[10,["Answer the questions","See your result"]],"M29":[16,["Understand","Four causes of a stuck agent","Diagnosing from what the agent says","Three real scenarios","Practice","Pass — hidden test"]],"M30":[16,["Understand","Four types of financial claim — and how to verify each","The five-step financial claim verification standard","A worked verification example","Practice","Pass — hidden test"]],"M31":[15,["Understand","Five marketing claim categories","The incident — traced step by step","The substantiation standard","Practice","Pass — hidden test"]],"M32":[15,["Understand","The legal draft risk matrix","What lawyers catch that AI misses","Writing the approval boundary into the brief","Practice","Pass — hidden test"]],"M33":[15,["Understand","What contested looks like — three examples","Identifying contested territory","How to handle contested output","Practice","Pass — hidden test"]],"M34":[15,["Understand","Five logical errors in AI data analysis","The five conclusion verification questions","A worked walkthrough","Practice","Pass — hidden test"]],"M35":[16,["Understand","How instructions differ for customer-facing agents","A complete customer-facing instruction set","Common instruction gaps in customer-facing agents","Practice","Pass — hidden test"]],"CP5":[10,["Answer the questions","See your result"]],"M36a":[16,["Understand","The four application layers","Where agents live in the application stack","A request flowing through the stack","Practice","Pass — hidden test"]],"M36b":[15,["Understand","Three architecture decisions that matter most","The architecture decision framework","Instructing AI on architecture choices","Practice","Pass — hidden test"]],"M36c":[15,["Understand","The six-step scaffold sequence","Good vs. poor scaffold briefs","Reviewing scaffold output","Practice","Pass — hidden test"]],"M36d":[14,["Understand","Six architecture review categories","A structured review walkthrough","The configuration vs. code principle","Practice","Pass — hidden test"]],"M36e":[25,["Understand","The four build phases and their gates","The assignment","Build reflection","Practice","Pass — hidden test"]],"M36f":[10,[]],"M36g":[10,[]],"M37":[25,["Understand","Four types of guardrail","Guardrail anatomy — three components","Build your first guardrail","Practice","Pass — hidden test"]],"M38":[25,["Understand","The specification","The working checker — test it now","How to build this with AI","Practice","Pass — hidden test"]],"M39":[25,["Understand","What a verifiable video brief contains","Build your verified video brief","Directing AI to write a verifiable brief","Practice","Pass — hidden test"]],"M40":[15,["Understand","See","Build","Pass"]],"M41":[15,["Understand","See","Build","Pass"]],"M42":[10,["The verification problem","Four validity criteria","Two test case types every suite needs","Practice","Pass"]],"M42b":[15,["Understand","See","Build","Pass"]],"CP6":[10,["Answer the questions","See your result"]],"M43":[10,["Understand","Govern","Pass"]],"M44":[15,["Understand","See","Practice","Pass"]],"M45":[15,["Understand","See","Practice","Pass"]],"M46":[15,["Understand","See","Practice","Pass"]],"M47":[15,["Understand","See","Build","Pass"]],"M48":[15,["Understand","See","Practice","Pass"]],"CP7":[10,["Answer the questions","See your result"]],"M49":[10,[]],"L8-01":[15,["Understand","See","Practice","Pass"]],"L8-02":[15,["Understand","See","Practice","Pass"]],"L8-03":[15,["Understand","See","Practice","Pass"]],"L8-04":[15,["Understand","See","Practice","Pass"]],"L8-05":[15,["Understand","See","Practice","Pass"]],"L8-06":[15,["Understand","See","Practice","Pass"]],"L8-06b":[15,["Understand","See","Practice","Pass"]],"L8-07":[15,["Understand","See","Practice","Pass"]],"L8-08":[25,["Understand","Vision Capture","Blueprint Generation","Refinement","Final Plan & Tools","Practice & Pass"]],"L8-09":[25,["Understand","Track 1: Behavior","Track 2: Aesthetics","The Claude Aesthetic Trap","Designer-in-Chief","Practice & Pass"]],"L8-10":[30,["Understand","What a Real Structure Looks Like","Step 1: The Diagram","Recognizing a Good Structure","Letting Claude Choose the Stack","Asking for the Full Document","Judging the Result"]],"L8-11":[30,["Understand","Chat and Canvas","Step 1: Design System","Step 2: The Four-Part Prompt","Step 3: Refining","Step 4: Handoff","Step 5: Context & Testing","Deliverable & Practice"]],"L8-12":[30,["Understand","The Handoff Bundle","The IKEA Model","Two Commands","The Handoff Contract","The Assembly Guide","An Honest Limitation","Practice"]],"L8-13":[30,["Understand","The Physical Folder","Populating The Protocol","Placing the Design Files","\"Read Everything\"","Filling the Gaps","Governor, Not Builder","Practice"]],"L8-14":[35,["Understand","Generating Every Scenario","Testing Every Scenario","Fixing What Failed","All Green, First Pass","Bringing In Codex","What the External Audit Caught","Closing the Loop","Practice"]],"CP8":[10,["Answer the questions","See your result"]],"L8-DONE":[10,[]]};
  ITEMS.forEach(function (it) { var m = META[it.id] || [0, []]; it.minutes = m[0]; it.steps = m[1]; });

  var DASHBOARD = 'AGNUS - Academy App.html';
  var KEY = 'agnus:academy:progress';

  /* ── storage (replace with a real backend before launch) ── */
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; }
  }
  function save(p) {
    try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) {}
  }

  /* ── lookups ── */
  function byId(id) { for (var i = 0; i < ITEMS.length; i++) if (ITEMS[i].id === id) return ITEMS[i]; return null; }
  function byFile(f) {
    f = decodeURIComponent(f || '').split('/').pop();
    for (var i = 0; i < ITEMS.length; i++) if (ITEMS[i].file === f) return ITEMS[i];
    return null;
  }
  function current() { return byFile(location.pathname); }
  function prev(it) { return it && it.index > 0 ? ITEMS[it.index - 1] : null; }
  function next(it) { return it && it.index < ITEMS.length - 1 ? ITEMS[it.index + 1] : null; }

  /* ── state ── */
  function isDone(it) { return !!(it && load()[it.id]); }
  function isUnlocked(it) {
    if (!it) return true;
    if (previewMode()) return true;
    var p = prev(it);
    return !p || isDone(p);
  }
  function status(it) {
    if (typeof it === 'string') it = byId(it) || byFile(it);
    if (!it) return 'unknown';
    if (isDone(it)) return 'done';
    return isUnlocked(it) ? 'available' : 'locked';
  }
  function complete(id) {
    var it = id ? (byId(id) || byFile(id)) : current();
    if (!it) return;
    var p = load(); p[it.id] = new Date().toISOString(); save(p);
    render();
  }
  function reset() { save({}); render(); }
  function previewMode() {
    return /[?&]preview=1\b/.test(location.search) || sessionStorage.getItem('agnus:academy:preview') === '1';
  }

  /* ── progress summaries ── */
  function levelProgress(levelId) {
    var list = ITEMS.filter(function (x) { return x.level === levelId && x.type !== 'complete'; });
    var done = list.filter(isDone).length;
    return { level: levelId, done: done, total: list.length, pct: list.length ? Math.round(done / list.length * 100) : 0 };
  }
  function overall() {
    var list = ITEMS.filter(function (x) { return x.type !== 'complete'; });
    var done = list.filter(isDone).length;
    return { done: done, total: list.length, pct: Math.round(done / list.length * 100) };
  }
  function nextUp() {
    for (var i = 0; i < ITEMS.length; i++) if (!isDone(ITEMS[i])) return ITEMS[i];
    return null;
  }
  function summary(idOrFile) {
    var it = byId(idOrFile) || byFile(idOrFile);
    if (!it) return null;
    return { id: it.id, title: it.title, minutes: it.minutes, steps: it.steps, status: status(it), file: it.file };
  }
  function levelMinutes(levelId) {
    return ITEMS.filter(function (x) { return x.level === levelId; }).reduce(function (a, x) { return a + (x.minutes || 0); }, 0);
  }
  function levelName(id) { for (var i = 0; i < LEVELS.length; i++) if (LEVELS[i].id === id) return LEVELS[i].name; return ''; }

  /* ── on-page panel ── */
  function go(it) { if (it) location.href = it.file; }
  var CSS = ''
    + '#acadPanel{position:fixed;right:18px;bottom:18px;z-index:9000;font-family:Manrope,system-ui,sans-serif;background:#0F1A28;color:#fff;border-radius:14px;box-shadow:0 12px 34px rgba(15,26,40,.28);width:300px;overflow:hidden}'
    + '#acadPanel .ap-head{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 14px;cursor:pointer}'
    + '#acadPanel .ap-k{font-family:"IBM Plex Mono",monospace;font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.55)}'
    + '#acadPanel .ap-t{font-size:12.5px;font-weight:700;margin-top:2px;line-height:1.3}'
    + '#acadPanel .ap-s{font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:.04em;color:#E0C58A;margin-top:4px;line-height:1.4}'
    + '#acadPanel .ap-tog{font-size:14px;color:rgba(255,255,255,.6)}'
    + '#acadPanel .ap-body{padding:0 14px 14px}'
    + '#acadPanel .ap-bar{height:4px;background:rgba(255,255,255,.14);border-radius:99px;overflow:hidden;margin:2px 0 12px}'
    + '#acadPanel .ap-fill{height:100%;background:#B59048;border-radius:99px}'
    + '#acadPanel .ap-row{display:flex;gap:8px}'
    + '#acadPanel button{font-family:inherit;font-size:12px;font-weight:700;border-radius:8px;padding:9px 12px;cursor:pointer;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.07);color:#fff}'
    + '#acadPanel button.pri{flex:1;background:#fff;color:#0F1A28;border-color:#fff}'
    + '#acadPanel button:disabled{opacity:.4;cursor:default}'
    + '#acadPanel .ap-done{font-size:11.5px;color:#7FD1A6;margin-bottom:10px}'
    + '#acadPanel.min .ap-body{display:none}'
    + '#acadLock{position:fixed;inset:0;z-index:9100;background:rgba(248,246,242,.97);display:flex;align-items:center;justify-content:center;padding:24px;font-family:Manrope,system-ui,sans-serif}'
    + '#acadLock .al-card{max-width:440px;background:#fff;border:1px solid #E5E2D9;border-radius:16px;padding:28px;text-align:center;box-shadow:0 12px 34px rgba(15,26,40,.12)}'
    + '#acadLock h2{font-size:20px;font-weight:800;color:#18202A;margin:0 0 8px}'
    + '#acadLock p{font-size:14px;line-height:1.6;color:#4A5261;margin:0 0 18px}'
    + '#acadLock button{font-family:inherit;font-size:13.5px;font-weight:700;border-radius:10px;padding:12px 20px;cursor:pointer;border:none;background:#17263C;color:#fff;margin:4px}'
    + '#acadLock button.sec{background:#fff;color:#17263C;border:1.5px solid #D1CEC4}';

  /* ── where the student is inside the current page ── */
  var STEP_RE = /^(Step|Page|Part|Question) (\d+) of (\d+)/;
  function detectStep() {
    var els = document.querySelectorAll('body *:not(script):not(style)');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.id === 'acadPanel' || (el.closest && el.closest('#acadPanel'))) continue;
      if (el.children.length > 2) continue;
      var own = '';
      for (var c = 0; c < el.childNodes.length; c++) if (el.childNodes[c].nodeType === 3) own += el.childNodes[c].nodeValue;
      own = own.trim();
      var t = STEP_RE.test(own) ? own : (el.textContent || '').trim();
      var m = t.match(STEP_RE);
      if (!m || t.length > 90) continue;
      if (!el.offsetParent && getComputedStyle(el).position !== 'fixed') continue;
      var name = t.slice(m[0].length).replace(/^\s*[\u2014\-\u00b7:]\s*/, '')
        .replace(/\s*\d+\s*(?:min|mins|minutes)\b.*$/i, '')
        .replace(/\s*(?:Step|Page|Part|Question) \d+ of \d+.*$/, '').trim();
      return { kind: m[1], n: +m[2], total: +m[3], name: name };
    }
    return null;
  }
  function pagePills() {
    var out = {}, els = document.querySelectorAll('.hp strong, .hero-pills strong');
    for (var i = 0; i < els.length; i++) {
      var t = (els[i].textContent || '').trim(), m;
      if ((m = t.match(/^(\d+) steps?$/))) out.steps = +m[1];
      if ((m = t.match(/^~?(\d+) min$/))) out.minutes = +m[1];
    }
    return out;
  }
  function stepLine(it) {
    var s = detectStep(), bits = [], pp = pagePills();
    if (s) {
      var nm = s.name || (s.kind === 'Step' && it.steps[s.n - 1]) || '';
      if (nm.length > 34) nm = nm.slice(0, 32).replace(/\s+\S*$/, '') + '\u2026';
      bits.push(s.kind + ' ' + s.n + ' of ' + s.total + (nm ? ' \u00b7 ' + nm : ''));
    } else if (pp.steps || it.steps.length) {
      bits.push((pp.steps || it.steps.length) + ' steps');
    }
    var mins = pp.minutes || it.minutes;
    if (mins) bits.push('~' + mins + ' min');
    return bits.join(' \u00b7 ');
  }
  var stepTimer = null;
  function startStepWatch(it) {
    if (stepTimer) return;
    stepTimer = setInterval(function () {
      var el = document.getElementById('apStep');
      if (el) { var t = stepLine(it); if (el.textContent !== t) el.textContent = t; }
    }, 700);
  }

  function render() {
    var it = current();
    if (!it || typeof document === 'undefined' || !document.body) return;
    if (!document.getElementById('acadCss')) {
      var s = document.createElement('style'); s.id = 'acadCss'; s.textContent = CSS; document.head.appendChild(s);
    }

    // lock screen
    var lock = document.getElementById('acadLock');
    if (!isUnlocked(it)) {
      var p = prev(it);
      if (!lock) { lock = document.createElement('div'); lock.id = 'acadLock'; document.body.appendChild(lock); }
      lock.innerHTML = '<div class="al-card"><h2>This lesson is locked</h2>'
        + '<p>Finish <b>' + p.id + ' — ' + p.title + '</b> first. Each lesson builds on the one before it.</p>'
        + '<button id="alGo">Go to ' + p.id + ' →</button><button class="sec" id="alDash">Dashboard</button></div>';
      document.getElementById('alGo').onclick = function () { go(p); };
      document.getElementById('alDash').onclick = function () { location.href = DASHBOARD; };
    } else if (lock) { lock.remove(); }

    // panel
    var panel = document.getElementById('acadPanel');
    if (!panel) {
      panel = document.createElement('div'); panel.id = 'acadPanel';
      if (sessionStorage.getItem('agnus:academy:panelMin') === '1') panel.className = 'min';
      document.body.appendChild(panel);
    }
    var lp = levelProgress(it.level), n = next(it), pv = prev(it), done = isDone(it);
    var isCheckpoint = it.type === 'checkpoint';
    panel.innerHTML = '<div class="ap-head" id="apHead"><div><div class="ap-k">' + it.level + ' · ' + levelName(it.level) + ' · ' + lp.done + '/' + lp.total + ' done</div>'
      + '<div class="ap-t">' + it.id + ' — ' + it.title + '</div><div class="ap-s" id="apStep">' + stepLine(it) + '</div></div><span class="ap-tog">' + (panel.className === 'min' ? '▴' : '▾') + '</span></div>'
      + '<div class="ap-body"><div class="ap-bar"><div class="ap-fill" style="width:' + lp.pct + '%"></div></div>'
      + (done ? '<div class="ap-done">✓ Completed</div>' : '')
      + '<div class="ap-row">'
      + '<button id="apPrev"' + (pv ? '' : ' disabled') + '>← Prev</button>'
      + (isCheckpoint && !done
          ? '<button class="pri" disabled title="Pass the checkpoint to continue">Pass to continue</button>'
          : '<button class="pri" id="apNext">' + (done ? (n ? 'Next: ' + n.id + ' →' : 'Dashboard →') : (n ? 'Complete & continue →' : 'Complete →')) + '</button>')
      + '</div></div>';
    document.getElementById('apHead').onclick = function () {
      panel.classList.toggle('min');
      sessionStorage.setItem('agnus:academy:panelMin', panel.classList.contains('min') ? '1' : '0');
      render();
    };
    if (pv) document.getElementById('apPrev').onclick = function () { go(pv); };
    var nb = document.getElementById('apNext');
    if (nb) nb.onclick = function () { if (!done) complete(it.id); n ? go(n) : (location.href = DASHBOARD); };
    startStepWatch(it);
  }

  function hookDashboardButtons() {
    var it = current();
    if (!it || it.type === 'checkpoint') return;
    var n = next(it);
    document.querySelectorAll('button.tr-btn').forEach(function (btn) {
      if (/App\.html/.test(btn.getAttribute('onclick') || '') && !btn.closest('header')) {
        btn.textContent = n ? ('Next: ' + n.id + ' →') : '← Dashboard';
        btn.onclick = function () { complete(it.id); n ? go(n) : (location.href = DASHBOARD); };
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { render(); hookDashboardButtons(); });
  } else {
    render(); hookDashboardButtons();
  }

  window.AcademyCurriculum = {
    LEVELS: LEVELS, ITEMS: ITEMS, DASHBOARD: DASHBOARD,
    byId: byId, byFile: byFile, current: current, prev: prev, next: next,
    status: status, isDone: isDone, isUnlocked: isUnlocked,
    complete: complete, reset: reset,
    levelProgress: levelProgress, overall: overall, nextUp: nextUp, levelName: levelName,
    summary: summary, levelMinutes: levelMinutes, detectStep: detectStep
  };
})();
