/*
 * This application and all the work related to Agnus and for Agnus is sanctified and covered
 * by The Blood of Jesus Christ. No work of darkness nor any dark code is allowed.
 * The entire application is saturated by the Blood of Jesus Christ, and by the 888 Hz frequency
 * from The Throne of The Lamb of God, The Lord Jesus Christ.
 * This application is Holy.
 *//* AGNUS Dashboard — CORE bundle v3 */

/* === dash-step-icons.js === */
/* AGNUS step icons — inline SVG, premium geometric */
window.STEP_ICONS = {
  "FIND": "<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"><circle cx=\"8\" cy=\"8\" r=\"5.5\"/><path d=\"M12.5 12.5L16 16\"/></svg>",
  "DATA": "<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"><rect x=\"3\" y=\"2\" width=\"12\" height=\"3.5\" rx=\"1\"/><rect x=\"3\" y=\"7.25\" width=\"12\" height=\"3.5\" rx=\"1\"/><rect x=\"3\" y=\"12.5\" width=\"12\" height=\"3.5\" rx=\"1\"/></svg>",
  "PLAN": "<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"><circle cx=\"9\" cy=\"9\" r=\"6.5\"/><circle cx=\"9\" cy=\"9\" r=\"2.5\"/><path d=\"M9 2.5V4M9 14v1.5M2.5 9H4M14 9h1.5\"/></svg>",
  "BRIEF": "<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"><rect x=\"3.5\" y=\"2\" width=\"11\" height=\"14\" rx=\"2\"/><path d=\"M6.5 6h5M6.5 9h5M6.5 12h3\"/></svg>",
  "BUILD": "<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"><rect x=\"2\" y=\"2\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"10\" y=\"2\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"2\" y=\"10\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"10\" y=\"10\" width=\"6\" height=\"6\" rx=\"1\"/></svg>",
  "WRITE": "<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"><path d=\"M12 3l3 3-8.5 8.5-4 .5.5-4L12 3z\"/></svg>",
  "ENRICH": "<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"><path d=\"M9 2v3M9 13v3M2 9h3M13 9h3M4.2 4.2l2.1 2.1M11.7 11.7l2.1 2.1M4.2 13.8l2.1-2.1M11.7 6.3l2.1-2.1\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/></svg>",
  "CHECK": "<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"><path d=\"M9 2l1.5 3.5L14 6.5l-2.5 2.5.5 3.5L9 11 6 12.5l.5-3.5L4 6.5l3.5-1L9 2z\"/><path d=\"M6.5 9l2 2 3-3\"/></svg>",
  "VIEW": "<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"><path d=\"M2 9c0 0 3-5 7-5s7 5 7 5-3 5-7 5-7-5-7-5z\"/><circle cx=\"9\" cy=\"9\" r=\"2.2\"/></svg>",
  "PUBLISH": "<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"><path d=\"M9 12V4M5.5 7.5L9 4l3.5 3.5\"/><path d=\"M3 14h12\"/></svg>",
  "TRACK": "<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"><path d=\"M2 14l4-5 3 3 4-6 3 3\"/><path d=\"M2 16h14\"/></svg>"
};

/* === dash-views.js === */
/* AGNUS Dashboard — Editorial views. Registered into window.VIEWS / window.VIEW_INIT. */
(function(){
const V = window.VIEWS = window.VIEWS || {};
const I = window.VIEW_INIT = window.VIEW_INIT || {};
const esc = s => s;

/* fill meters present in the stage */
function fillMeters(){ requestAnimationFrame(()=>requestAnimationFrame(()=>{ document.querySelectorAll('#stage .meter .fill[data-v]').forEach(f=>{ f.parentElement.style.backgroundSize=f.dataset.v+'% 100%'; }); })); }
window.__fillMeters = fillMeters;

/* ─────────────── EXECUTIVE COMMAND CENTER (Home) ─────────────── */
const EXEC_RECS=[
  {t:'Publish "Best AI Agents for Small Businesses"',why:'Rising demand + a missing pillar in your strongest revenue cluster.',ev:['Google Trends +42%','4 affiliate programs','Cluster gap'],impact:'High',cost:'2.5h',rev:'€120/mo'},
  {t:'Refresh the ChatGPT Review',why:'Pricing changed yesterday; the page dropped 4 positions overnight.',ev:['Official price change','−4 positions','12 pages flagged'],impact:'High',cost:'45m',rev:'Protects €160/mo'},
  {t:'Launch "AI for Dental Clinics" collection',why:'Keyword 8.9, almost no competition, high affiliate value.',ev:['Priority 8.9','Low competition','No coverage'],impact:'Medium',cost:'4h',rev:'€140/mo'}
];
V.home = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Command Center · Tuesday, June 30</div>
  <h1><span class="greet">Good ${(new Date().getHours()<12?'morning':new Date().getHours()<18?'afternoon':'evening')},</span> Jean-Daniel.</h1>
</div>
<div class="exec-brief">
  <div class="tx"></div><div class="glow"></div>
  <div class="eb-head"><div class="eb-l">Since yesterday</div><button class="b b-gold b-sm" onclick="document.getElementById('execRecs').scrollIntoView({behavior:'smooth'})">3 decisions waiting →</button></div>
  <div class="eb-grid">
    ${[['15','new opportunities','gold','keywords'],['3','risks detected','red','pipeline'],['2','competitors launched features','blue','feed'],['€460','revenue protected','green','analytics'],['€980','estimated new revenue','green','keywords'],['3','recommendations waiting','gold','brain']].map(s=>`<div class="eb-stat" onclick="GO('${s[3]}')"><div class="eb-n ${s[2]}">${s[0]}</div><div class="eb-d">${s[1]}</div></div>`).join('')}
  </div>
</div>
<div class="sec-title" id="execRecs"><h2>Recommendations waiting on you</h2><a class="link" onclick="GO('brain')">Open the Brain →</a></div>
<div class="exec-cards">${EXEC_RECS.map((r,i)=>`<div class="exec-card">
  <div class="exc-h"><div class="exc-n">${i+1}</div><div class="exc-t">${r.t}</div></div>
  <div class="exc-why"><b>Why:</b> ${r.why}</div>
  <div class="exc-ev">${r.ev.map(e=>`<span class="bev">▷ ${e}</span>`).join('')}</div>
  <div class="exc-meta"><span class="pill ${r.impact==='High'?'green':'gold'}">${r.impact} impact</span><span class="pill ghost">⏱ ${r.cost}</span><span class="pill ghost">${r.rev}</span></div>
  <div class="exc-act"><button class="b b-gold b-sm" onclick="execApprove('${r.t.replace(/["']/g,'')}','${r.rev}','${r.cost}',['3 articles','2 comparisons','1 lesson'])">Approve</button><button class="b b-line b-sm">Delegate</button><button class="b b-ghost b-sm">Ignore</button></div>
</div>`).join('')}</div>
<div class="home-grid" style="margin-top:8px">
  <div class="priorities">
    <div class="tx"></div><div class="glow"></div>
    <div class="ph">Today's priorities</div>
    ${[
      ['1','<b>3 trending AI stories</b> detected overnight','feed','Review'],
      ['2','<b>6 keywords</b> rising this week','keywords','Open'],
      ['3','<b>2 articles</b> ready for review','pipeline','Review'],
      ['4','<b>1 comparison</b> needs a pricing update','pipeline','Update'],
      ['5','<b>4 affiliate opportunities</b> found','affiliate','View']
    ].map(p=>`<div class="prio" onclick="GO('${p[2]}')" style="cursor:pointer">
      <div class="n">${p[0]}</div><div class="pt">${p[1]}</div><div class="go">${p[3]} →</div></div>`).join('')}
  </div>
  <div class="metrics">
    ${[
      ['Articles in progress','12','blue','3 due this week'],
      ['Ready to publish','4','green','<span class="up">▲ +2</span> since Friday'],
      ['Clusters growing','8','gold','2 near authority'],
      ['Keyword opportunities','36','blue','<span class="up">▲ +9</span> this week'],
      ['Traffic this month','18,400','green','<span class="up">▲ +14%</span> vs last'],
      ['Revenue estimate','€740','gold','<span class="up">▲ +€120</span> MoM']
    ].map(m=>`<div class="metric"><div class="ml">${m[0]}</div><div class="mv">${m[1]}</div><div class="md">${m[3]}</div></div>`).join('')}
  </div>
</div>`;

/* ─────────────── INTELLIGENCE FEED ─────────────── */
const SRC=(n,i)=>`<span class="src"><span class="lo">${i}</span> ${n}</span>`;
const STORIES=[
  {src:'OpenAI Blog',i:'O',title:'OpenAI launches new agent framework',trend:'High',impact:'9/10',kw:'Strong',aff:'Medium',rec:'A <b>news article</b> + <b>explainer</b>, plus a <b>comparison update</b> (vs LangGraph) and an <b>Academy lesson</b>.'},
  {src:'Anthropic Blog',i:'A',title:'Claude adds computer-use to the API',trend:'High',impact:'8/10',kw:'Strong',aff:'High',rec:'Update the <b>Claude review</b>, refresh <b>Claude vs ChatGPT</b>, and add a <b>business guide</b> on desktop automation.'},
  {src:'Google AI',i:'G',title:'Gemini 3 rolls out to Workspace',trend:'Medium',impact:'7/10',kw:'Medium',aff:'Medium',rec:'An <b>explainer</b> and a <b>comparison</b> against Copilot for the Business cluster.'},
  {src:'Hugging Face',i:'H',title:'New open reasoning model tops benchmarks',trend:'Medium',impact:'7/10',kw:'Strong',aff:'Low',rec:'A <b>news article</b> for the Open-Source cluster and a <b>tutorial</b> on self-hosting.'},
  {src:'Product Hunt',i:'P',title:'AI receptionist for clinics hits #1',trend:'Low',impact:'6/10',kw:'Medium',aff:'High',rec:'A <b>review</b> and a <b>marketplace page</b> for the Healthcare world.'}
];
function impactPill(v){ const n=parseInt(v); return `<span class="pill ${n>=8?'green':n>=7?'gold':''}">${v}</span>`; }
function trendPill(t){ return `<span class="pill ${t==='High'?'red':t==='Medium'?'warn':'ghost'}">${t} trend</span>`; }
function storyCard(s){ return `<div class="story">
  <div class="story-top">${SRC(s.src,s.i)} ${trendPill(s.trend)} <span class="tiny muted">detected 2h ago</span></div>
  <h3>${s.title}</h3>
  <div class="story-stats">
    <div class="sstat"><div class="l">Business impact</div><div class="v">${impactPill(s.impact)}</div></div>
    <div class="sstat"><div class="l">Keyword potential</div><div class="v">${s.kw}</div></div>
    <div class="sstat"><div class="l">Affiliate potential</div><div class="v">${s.aff}</div></div>
  </div>
  <div class="story-rec"><b>Recommended content:</b> ${s.rec}</div>
  <div class="story-act">
    <button class="b b-dark b-sm" onclick="openCreate()">Create article</button>
    <button class="b b-line b-sm" onclick="GO('clusters')">Add to cluster</button>
    <button class="b b-ghost b-sm">Watch topic</button>
    <button class="b b-ghost b-sm muted">Ignore</button>
  </div></div>`; }

V.feed = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Intelligence Feed · watching 17 source types</div>
  <h1>What's happening, right now.</h1>
  <p>AGNUS watches OpenAI, Anthropic, Google, Hugging Face, GitHub, Product Hunt, Reddit, Trends and more — and surfaces only what's worth acting on.</p>
</div>
<div class="kw-filters">
  ${['All sources','Official blogs','Research','Communities','Product launches','Trending'].map((f,i)=>`<button class="kw-filter ${i===0?'on':''}">${f}</button>`).join('')}
</div>
<div class="feed">${STORIES.map(storyCard).join('')}</div>`;

/* ─────────────── KEYWORD DISCOVERY ─────────────── */
const KW=[
  {t:'best AI agents for customer service',intent:'Commercial',diff:'Medium',traffic:'High',aff:'High',type:'Buying guide',cluster:'AI Agents / Business / Support',score:'9.2',cls:'hi'},
  {t:'best AI tools for restaurants',intent:'Commercial',diff:'Low',traffic:'Medium',aff:'High',type:'Buying guide',cluster:'Business / Restaurants',score:'8.7',cls:'hi'},
  {t:'Claude vs ChatGPT',intent:'Comparison',diff:'High',traffic:'High',aff:'Medium',type:'Comparison',cluster:'AI Models',score:'8.4',cls:'mid'},
  {t:'how to automate customer support',intent:'Problem',diff:'Medium',traffic:'High',aff:'Medium',type:'Tutorial',cluster:'AI Agents / Business',score:'8.1',cls:'mid'},
  {t:'AI for dental clinics',intent:'Industry',diff:'Low',traffic:'Medium',aff:'High',type:'Business guide',cluster:'Healthcare',score:'8.9',cls:'hi'},
  {t:'what is RAG',intent:'Informational',diff:'Medium',traffic:'High',aff:'Low',type:'Explainer',cluster:'AI Models / RAG',score:'7.6',cls:'mid'}
];
function kwCard(k){ return `<div class="kw">
  <div class="kw-top"><h3>${k.t}</h3>
    <div class="kw-score"><div class="n ${k.cls}">${k.score}</div><div class="l">Priority</div></div></div>
  <div class="kw-attrs">
    <div class="kw-attr"><span class="k">Intent</span><span class="v">${k.intent}</span></div>
    <div class="kw-attr"><span class="k">Difficulty</span><span class="v">${k.diff}</span></div>
    <div class="kw-attr"><span class="k">Traffic</span><span class="v">${k.traffic}</span></div>
    <div class="kw-attr"><span class="k">Affiliate</span><span class="v">${k.aff}</span></div>
  </div>
  <div class="kw-foot"><span class="kw-cluster">▷ ${k.cluster}</span>
    <button class="b b-line b-sm" onclick="openCreate('${k.t.replace(/'/g,'')}')">Write · ${k.type}</button></div></div>`; }

V.keywords = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Keyword Discovery · 36 opportunities</div>
  <h1>What to write first — and why.</h1>
  <p>Every keyword is scored on demand, intent, competition, affiliate value, cluster importance, freshness and AGNUS authority fit.</p>
</div>
<div class="opp">
  <div class="tx"></div>
  <h3>Opportunity Score · "best AI tools for restaurants"</h3>
  <div class="sub">How the 8.7 is built</div>
  <div class="opp-bars">
    ${[['Search demand','7/10',70],['Competition (inverse)','5/10',50],['Affiliate value','8/10',80],['Business relevance','10/10',100],['Cluster value','9/10',90],['Freshness','8/10',80]].map(b=>`
      <div class="opp-bar"><div class="ob-top"><span class="k">${b[0]}</span><span class="v">${b[1]}</span></div><div class="meter" style="background-size:${b[2]}% 100%"></div></div>`).join('')}
  </div>
  <div class="opp-final"><span class="n">8.7</span><span class="l">Final opportunity score<br/>Write this first</span></div>
</div>
<div class="kw-filters">
  ${['All','Low competition','High affiliate','Trending','Business','Review','Comparison','Academy','Marketplace'].map((f,i)=>`<button class="kw-filter ${i===0?'on':''}">${f}</button>`).join('')}
</div>
<div class="kw-grid">${KW.map(kwCard).join('')}</div>`;
I.keywords = fillMeters;

/* ─────────────── TOPIC CLUSTERS ─────────────── */
const CLUSTERS=[
  {name:'AI for Lawyers',pillar:'Complete Guide to AI for Lawyers',
   supports:[['Best AI legal research tools',1],['Claude vs ChatGPT for legal work',1],['AI contract review tools',1],['Legal prompt pack',1],['AI agent for law firms',1],['How law firms automate intake',0],['Legal AI risks & compliance',0]],
   strength:42,pub:'7/20',links:12,rev:'High',auth:'Growing'},
  {name:'AI Agents',pillar:'The Complete Guide to AI Agents',
   supports:[['Best AI agents for business',1],['Customer support agents',1],['Sales agents compared',1],['How to build an agent',0],['Agent security & guardrails',0]],
   strength:58,pub:'9/16',links:6,rev:'High',auth:'Strong'},
  {name:'AI for Restaurants',pillar:'AI for Restaurants: The 2026 Playbook',
   supports:[['Best booking AI',1],['Voice receptionist tools',1],['Review reply automation',0],['Restaurant marketing prompts',0]],
   strength:31,pub:'4/14',links:9,rev:'Medium',auth:'Early'},
  {name:'RAG & Vector Databases',pillar:'What is RAG? The Definitive Explainer',
   supports:[['Best vector databases',1],['RAG vs fine-tuning',1],['Building a RAG pipeline',1],['Memory systems for agents',0]],
   strength:49,pub:'6/12',links:8,rev:'Medium',auth:'Growing'}
];
function clusterCard(c){ const done=c.supports.filter(s=>s[1]).length; return `<div class="cluster">
  <div class="cluster-top"><h3>${c.name}</h3><span class="pill ${c.auth==='Strong'?'green':'gold'}">${c.auth}</span></div>
  <div class="pillar"><span class="ic">◆</span><div><div class="pl">Pillar article</div><div class="pt">${c.pillar}</div></div></div>
  <div class="supports">${c.supports.map(s=>`<div class="support"><span class="st ${s[1]?'done':'todo'}">${s[1]?'✓':'+'}</span> ${s[0]}</div>`).join('')}</div>
  <div class="row" style="margin-bottom:12px"><span class="tiny muted">Cluster strength</span><div class="grow"></div><span class="tiny" style="color:var(--gold-deep);font-weight:600">${c.strength}%</span></div>
  <div class="meter" style="margin-bottom:16px;background-size:${c.strength}% 100%"></div>
  <div class="cluster-stats">
    <div class="cstat"><span class="k">Articles</span><span class="v">${c.pub}</span></div>
    <div class="cstat"><span class="k">Links missing</span><span class="v" style="color:var(--warn)">${c.links}</span></div>
    <div class="cstat"><span class="k">Revenue potential</span><span class="v">${c.rev}</span></div>
    <div class="cstat"><span class="k">Authority</span><span class="v">${c.auth}</span></div>
  </div></div>`; }

V.clusters = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Topic Clusters · 8 growing</div>
  <h1>Build authority islands.</h1>
  <p>Not random articles — pillars surrounded by supporting pieces, all interlinked. This is how AGNUS earns authority a search engine trusts.</p>
</div>
<div class="clusters">${CLUSTERS.map(clusterCard).join('')}</div>`;
I.clusters = fillMeters;

/* ─────────────── ARTICLE PIPELINE (Kanban) ─────────────── */
const COLS=[
  {t:'Idea',dot:'#B8B4AB'},{t:'Researching',dot:'#3E6AE1'},{t:'Drafting',dot:'#C67A00'},
  {t:'Human review',dot:'#8F6E32'},{t:'Ready to publish',dot:'#2E8B57'},{t:'Needs update',dot:'#B83C3C'}
];
const CARDS={
  'Idea':[['AI for accountants in 2026','accounting ai','Business','MR'],['Best AI note-takers','ai note taker','Tools','SL']],
  'Researching':[['Gemini 3 vs GPT-5','gemini 3 vs gpt-5','AI Models','JD'],['AI receptionists compared','ai receptionist','Agents','MR']],
  'Drafting':[['Best AI tools for restaurants','best ai tools restaurants','Restaurants','SL'],['How to automate support','automate support','Agents','JD']],
  'Human review':[['Claude vs ChatGPT (refresh)','claude vs chatgpt','AI Models','JD'],['AI for dental clinics','ai dental clinics','Healthcare','MR']],
  'Ready to publish':[['OpenAI agent framework','openai agent framework','AI Models','JD'],['50 GPT-5 prompts','gpt-5 prompts','Prompts','SL']],
  'Needs update':[['ChatGPT Review','chatgpt review','AI Models','MR']]
};
function kCard(c,status){ const seo=70+Math.floor(Math.random()*26);
  return `<div class="kcard">
    <h4>${c[0]}</h4><div class="kkw">▷ ${c[1]}</div>
    <div class="kcard-meta"><span class="pill ghost">${c[2]}</span>${status==='Needs update'?'<span class="pill red">pricing</span>':status==='Ready to publish'?'<span class="pill green">SEO 9/10</span>':''}</div>
    <div class="kcard-foot"><div class="row"><span class="av">${c[3]}</span><span class="seo">SEO <b>${seo}</b> · 8 min</span></div></div>
  </div>`; }
V.pipeline = () => `
<div class="page-h">
  <div class="row"><div>
    <div class="eyebrow"><span class="ix">◆</span> Article Pipeline · 12 in progress</div>
    <h1>From idea to published — visible at a glance.</h1>
  </div><div class="grow"></div><button class="b b-dark" onclick="openCreate()">+ New article</button></div>
</div>
<div class="kanban">${COLS.map(col=>`
  <div class="kcol"><div class="kcol-h"><span class="dot" style="background:${col.dot}"></span><span class="t">${col.t}</span><span class="c">${(CARDS[col.t]||[]).length}</span></div>
    <div class="kcol-body">${(CARDS[col.t]||[]).map(c=>kCard(c,col.t)).join('')}</div></div>`).join('')}</div>`;

/* ─────────────── AI WRITER (v2) ─────────────── */
const W_OUTLINE=['Introduction','Why restaurants need AI','Best booking tools','Voice receptionists','Review automation','Marketing with AI','Comparison table','FAQs','What to do next'];
const W_DOC=`<div class="editor-doc">
  <h1>Best AI Tools for Restaurants in 2026</h1>
  <div class="ed-meta"><span>8 min read</span><span>·</span><span>Commercial intent</span><span>·</span><span>Cluster: Restaurants</span></div>
  <p>Running a restaurant in 2026 means competing on more than food. The venues filling tables on a Tuesday night are the ones answering every booking instantly, never missing a call, and turning a great meal into a five-star review — automatically.</p>
  <h2>Best booking tools</h2>
  <p>The fastest win is an AI booking layer that takes reservations across phone, web and social. Pair it with the <span class="il">Voice Receptionist</span> agent and you'll never lose a Friday-night table to voicemail again. For a deeper comparison, see <span class="il">ChatGPT vs Claude</span> for handling guest messages.</p>
  <p>Most owners start with a free tool and upgrade once they see the no-show rate drop. The <span class="il">AI ROI Calculator</span> shows the math in about a minute.</p>
</div>`;
/* editor-tab panels */
function wPanel(tab){
  if(tab==='draft') return `<div class="live-ev"><div class="le-h">◉ Live evidence · as you write</div><div class="le-rows"><div class="le-row ok"><span class="le-claim">"AI booking cuts no-shows ~30%"</span><span class="le-v"><span class="trust official">OpenTable</span><span class="trust high">G2</span> ✓ 99%</span></div><div class="le-row ok"><span class="le-claim">"Claude leads on reasoning"</span><span class="le-v"><span class="trust high">Reuters</span> ✓ 92%</span></div><div class="le-row warn"><span class="le-claim">"Voice AI books while you sleep"</span><span class="le-v">⚠ Only Reddit · 43%</span></div></div></div>`+W_DOC;
  if(tab==='research') return `<div class="editor-doc"><h2 style="margin-top:0">Research notes · 8 sources</h2>${['OpenTable AI docs|official','G2 reviews (124)|high','The Verge coverage|high','r/restaurateur thread|community','Industry blog opinion|opinion'].map(s=>{const x=s.split('|');return `<div class="rsrc"><div class="rt"><div class="rn">${x[0]}</div></div><span class="trust ${x[1]}">${x[1]}</span></div>`;}).join('')}</div>`;
  if(tab==='seo') return `<div class="editor-doc"><h2 style="margin-top:0">SEO &amp; GEO</h2>
    <div class="checklist">${[['Primary keyword in title & H1',1],['Meta description (152 chars)',1],['Keyword density natural (1.2%)',1],['3+ internal links',1],['Schema markup',0],['FAQ block for AI answers',0],['Quotable summary present',1]].map(c=>`<div class="check"><span class="cb ${c[1]?'y':'n'}">${c[1]?'✓':'!'}</span> ${c[0]}</div>`).join('')}</div></div>`;
  if(tab==='media') return `<div class="editor-doc"><h2 style="margin-top:0">Media · 1-click on brand</h2><div class="lib-grid" style="grid-template-columns:repeat(2,1fr)">${[['Hero image','16:9'],['Comparison table','—'],['YouTube thumb','16:9'],['OG image','1.91:1']].map(m=>`<div class="lib-tile"><div style="aspect-ratio:16/9;border-radius:10px;background:linear-gradient(135deg,var(--paper-2),var(--gold-soft));border:1px solid var(--line);display:grid;place-items:center;color:var(--ink-faint);font-family:var(--font-mono);font-size:10px;margin-bottom:10px">${m[1]}</div><div class="lib-n">${m[0]}</div><button class="b b-dark b-sm b-block" style="margin-top:10px">Generate</button></div>`).join('')}</div></div>`;
  if(tab==='graph') return `<div class="editor-doc"><h2 style="margin-top:0">Knowledge Graph · what's connected</h2>
    <p class="muted" style="font-size:13.5px">This article touches these entities. Grey means you haven't linked or covered it yet — "what am I missing?"</p>
    <div class="row" style="gap:8px;flex-wrap:wrap;margin-bottom:18px">${[['Booking AI',1],['Voice AI',1],['Review automation',1],['CRM',0],['POS systems',0],['Loyalty apps',0],['Delivery platforms',0]].map(n=>`<span class="pill ${n[1]?'dark':'ghost'}">${n[1]?'✓ ':'+ '}${n[0]}</span>`).join('')}</div>
    <div class="gap-alert"><span class="ic">✦</span><div>You mention bookings but never connect <b>POS systems</b> or <b>CRM</b> — adding them would complete the Restaurants graph and unlock 2 internal links.</div></div></div>`;
  if(tab==='relations') return `<div class="editor-doc"><h2 style="margin-top:0">Relationships &amp; reader journey</h2>
    <div class="checklist" style="margin-bottom:20px">${[['Linked Review',1],['Linked Comparison',1],['Linked Academy lesson',0],['Linked Business guide',1],['Linked Marketplace page',0],['Part of a Collection',1]].map(c=>`<div class="check"><span class="cb ${c[1]?'y':'n'}">${c[1]?'✓':'!'}</span> ${c[0]}${c[1]?'':' <span class="tiny" style="color:var(--error);margin-left:6px">missing</span>'}</div>`).join('')}</div>
    <h4 style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-mute);margin:0 0 12px">Reader journey</h4>
    <div class="mem-chain">${['Google','Article','Review','Compare','Marketplace','Newsletter','Academy','Premium'].map((n,i)=>`${i>0?'<span class="mem-arrow">→</span>':''}<span class="mem-node ${i===1?'now':''}">${n}</span>`).join('')}</div></div>`;
  if(tab==='value') return `<div class="editor-doc"><h2 style="margin-top:0">Article value · beyond SEO</h2>
    <div class="opp" style="margin-bottom:0"><div class="tx"></div>
      <div class="opp-bars">${[['SEO',88],['Authority',72],['Affiliate',90],['Business',80],['Academy',40],['Marketplace',65],['Newsletter',75]].map(b=>`<div class="opp-bar"><div class="ob-top"><span class="k">${b[0]}</span><span class="v">${b[1]}</span></div>${meter(b[1])}</div>`).join('')}</div>
      <div class="opp-final"><span class="n">76</span><span class="l">Overall value score<br/>Strong — add an Academy lesson to lift it</span></div></div>
    <div class="gap-alert" style="margin-top:18px"><span class="ic">⚠</span><div><b>Content critique:</b> the intro states the benefit but has no hook. There's no FAQ block, and the comparison section needs one more competitor for completeness.</div></div></div>`;
  if(tab==='competitor') return `<div class="editor-doc"><h2 style="margin-top:0">Competitor panel</h2>
    <table class="an-table"><thead><tr><th>Source</th><th>Score</th><th>Words</th><th>Missing here</th></tr></thead><tbody>
    ${[['Backlinko',82,'3,400','Case study'],['HubSpot',78,'2,900','Pricing table'],['Zapier',74,'2,100','—'],['OpenAI blog',70,'1,400','Comparison']].map(r=>`<tr><td style="font-weight:600">${r[0]}</td><td class="mono">${r[1]}</td><td class="mono">${r[2]}</td><td class="muted">${r[3]}</td></tr>`).join('')}
    </tbody></table>
    <div class="gap-alert" style="margin-top:16px"><span class="ic">◆</span><div>To beat the top result, add a <b>case study</b> and a <b>pricing table</b> — both are present in 2 of the top 3 and missing here.</div></div></div>`;
  if(tab==='history') return `<div class="editor-doc"><h2 style="margin-top:0">Timeline &amp; version control</h2>
    <div class="memory" style="margin-bottom:20px">${[['Created','Drafted by Writing AI · GPT-5','2d ago'],['Updated','Internal links added','1d ago'],['Pricing change','OpenTable AI price refreshed','6h ago'],['Model note','Linked to Claude 4.5 record','2h ago']].map(m=>`<div class="mem"><h4 style="font-size:14px">${m[0]} <span class="grow"></span><span class="tiny muted" style="font-weight:400">${m[2]}</span></h4><div class="tiny muted">${m[1]}</div></div>`).join('')}</div>
    <h4 style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-mute);margin:0 0 12px">Versions</h4>
    ${[['v4 · current','91/100','now'],['v3','86/100','restore'],['v2','79/100','restore'],['v1 · first draft','64/100','restore']].map(v=>`<div class="src-line"><b>${v[0]}</b><span class="grow"></span><span class="tiny muted">${v[1]}</span> <button class="b b-line b-sm" style="margin-left:10px">${v[2]==='now'?'Current':'Restore'}</button></div>`).join('')}</div>`;
  if(tab==='sources') return `<div class="editor-doc"><h2 style="margin-top:0">Sources · where every paragraph came from</h2>
    <p class="muted" style="font-size:13.5px">This draft is grounded in the Knowledge System. Each source below feeds specific passages — nothing is invented.</p>
    <div class="card" style="padding:6px 20px;margin-top:14px">${[['OpenAI Blog','official','Pricing & model facts'],['Google Trends','high','Demand signal for the intro'],['Search Console','high','Keyword targeting'],['Reuters','high','Industry context'],['PartnerStack','high','Affiliate product picks'],['GitHub','community','Open-source mentions'],['Official Docs','official','Setup steps & specs']].map(s=>`<div class="rsrc"><div class="rt"><div class="rn">${s[0]}</div><div class="ru">${s[2]}</div></div><span class="trust ${s[1]}">${s[1]}</span></div>`).join('')}</div>
    <div class="gap-alert" style="margin-top:16px"><span class="ic">✦</span><div>Every claim traces back to a labelled source. Hover a paragraph in the editor to see its origin.</div></div></div>`;
  if(tab==='publish') return `<div class="editor-doc"><h2 style="margin-top:0">Publish</h2>
    <div class="qscore" style="margin-bottom:18px"><div class="ring" style="--p:91"><span class="rn">91</span></div><div class="qt"><h4>Ready to publish · 91/100</h4><p>Two optional items remain (schema, FAQ). You can publish now or polish first.</p></div></div>
    <div class="freshness card" style="margin-bottom:18px;padding:16px 18px"><div class="row" style="gap:18px;flex-wrap:wrap"><div class="ring" style="--p:93;width:54px;height:54px"><span class="rn" style="font-size:15px">93%</span></div><div><div class="tiny muted mono">KNOWLEDGE FRESHNESS</div><div style="font-weight:600;margin-top:3px">Last verified today · 12 sources</div><div class="tiny muted" style="margin-top:4px">8 official · 4 community</div></div></div></div>
    <div class="checklist" style="margin-bottom:18px">${[['Quality score ≥ 80',1],['Sources cited',1],['Internal links',1],['Affiliate disclosure',1],['Connected to cluster',1],['Schema markup',0]].map(c=>`<div class="check"><span class="cb ${c[1]?'y':'n'}">${c[1]?'✓':'!'}</span> ${c[0]}</div>`).join('')}</div>
    <h4 style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-mute);margin:0 0 12px">Risk analysis · run before publishing</h4>
    <div class="checklist" style="margin-bottom:18px">${[['Duplicate content','pass','No overlap found across 214 articles'],['Legal','pass','No unverified legal claims'],['Medical claims','pass','None detected'],['Outdated pricing','warn','1 price last verified 21 days ago'],['AI detection','pass','Reads natural · low AI signal'],['Missing citations','warn','2 claims need a source']].map(r=>`<div class="check"><span class="cb ${r[1]==='pass'?'y':'n'}">${r[1]==='pass'?'✓':'!'}</span> <b style="font-weight:600">${r[0]}</b> <span class="tiny muted" style="margin-left:8px">${r[2]}</span></div>`).join('')}</div>
    <div class="field" style="max-width:420px"><label>Schedule</label><div class="field-row"><button class="opt on">Publish now</button><button class="opt">Schedule Friday</button><button class="opt">Add to queue</button></div></div>
    <button class="b b-gold b-lg" style="margin-top:8px">Approve &amp; publish →</button></div>`;
  return W_DOC;
}
const W_TABS=[['draft','Draft'],['research','Research'],['sources','Sources'],['seo','SEO / GEO'],['media','Media'],['graph','Graph'],['relations','Relations'],['value','Value'],['competitor','Competitors'],['history','History'],['publish','Publish']];
V.writer = () => `
<div class="page-h"><div class="row" style="align-items:flex-start"><div>
  <div class="eyebrow"><span class="ix">◆</span> AI Writer · drafting</div>
  <h1>Best AI Tools for Restaurants</h1>
</div><div class="grow"></div>
<button class="b b-line" onclick="wSetTab('publish')">Publish →</button>
<button class="b b-gold">Send to review</button></div></div>
<div class="wstatus">
  ${[['Status','Drafting','gd'],['Quality','91','g'],['SEO','88','g'],['GEO','82','g'],['Links','5','g'],['Affiliate','3','gd'],['Cluster','Restaurants',''],['Read','8 min','']].map(s=>`<div class="wstat"><span class="wl">${s[0]}</span><span class="wv ${s[2]}">${s[1]}</span></div>`).join('')}
</div>
<div class="writer">
  <div class="w-col">
    <div class="w-col-tabs">${[['outline','Outline'],['notes','Notes'],['links','Links'],['assets','Assets'],['check','Checklist']].map((t,i)=>`<button class="wct ${i===0?'on':''}" onclick="wLeft('${t[0]}',this)">${t[1]}</button>`).join('')}</div>
    <div class="w-col-body" id="wLeftBody"></div>
  </div>
  <div class="w-col">
    <div class="w-col-tabs" style="border-bottom:1px solid var(--line)">${W_TABS.map((t,i)=>`<button class="wct ${i===0?'on':''}" data-t="${t[0]}" onclick="wSetTab('${t[0]}')">${t[1]}</button>`).join('')}</div>
    <div class="w-col-body" id="wMain"></div>
  </div>
  <div class="w-col">
    <div class="w-col-h">✦ Chief Editor</div>
    <div class="w-col-body"><div class="chief">
      <div class="chief-intro"><div class="chief-orb">✦</div><div class="chief-hi">I read this draft against the Knowledge System. Here's what I'd do.</div></div>

      <div class="chief-msg"><p>I noticed this article has <b>no FAQ</b>. Adding one usually lifts AI-search visibility.</p><div class="chief-impact">Estimated impact <b>+4%</b></div><button class="b b-dark b-sm b-block">Generate FAQ</button></div>

      <div class="chief-msg"><p>Two claims have <b>no citation</b>. I found <b>three official sources</b> that back them.</p><div class="chief-cites"><span class="trust official">OpenAI</span><span class="trust high">Reuters</span><span class="trust official">Docs</span></div><button class="b b-dark b-sm b-block">Add citations</button></div>

      <div class="chief-msg"><p>The intro opens slowly. A sharper hook tends to hold readers ~12s longer.</p><button class="b b-line b-sm b-block">Rewrite the intro</button></div>

      <div class="chief-msg ok"><p>✓ Pricing matches the OpenAI source verified <b>today</b>. Internal links look healthy.</p></div>

      <div class="chief-quick"><div class="grp-l">Quick actions</div><div class="chief-qrow">${['Make clearer','Add examples','More executive','Add comparison','Suggest title','Optimize GEO'].map(a=>`<button class="chief-chip">${a}</button>`).join('')}</div></div>
      <div class="tiny muted" style="margin-top:8px;line-height:1.5">I never publish. You remain the final editor.</div>
    </div></div>
  </div>
</div>`;
const W_LEFT={
  outline:()=>W_OUTLINE.map((o,i)=>`<div class="outline-item ${i===2?'on':''}">${o}</div>`).join(''),
  notes:()=>['Mention the no-show stat (40%)','Owner quote from r/restaurateur','Compare 3 booking tools min','Add ROI calculator link'].map(n=>`<div class="outline-item">• ${n}</div>`).join(''),
  links:()=>['ChatGPT Review','Claude vs ChatGPT','AI Agents Guide','AI ROI Calculator','Voice Receptionist'].map(n=>`<div class="outline-item" style="color:var(--sapphire)">⛓ ${n}</div>`).join(''),
  assets:()=>['Hero image','Comparison table','Quote card','FAQ block'].map(n=>`<div class="outline-item">▦ ${n}</div>`).join(''),
  check:()=>[['Title clear',1],['Intro hook',0],['Keyword natural',1],['Sources',1],['Links',1],['FAQ',0]].map(c=>`<div class="outline-item">${c[1]?'✓':'○'} ${c[0]}</div>`).join('')
};
window.wLeft=function(tab,el){ [...el.parentElement.children].forEach(c=>c.classList.remove('on')); el.classList.add('on'); document.getElementById('wLeftBody').innerHTML=(W_LEFT[tab]||W_LEFT.outline)(); };
/* ── AI Writer tab state cache ── */
const W_STATE={};
window.wSetTab=function(tab){
  document.querySelectorAll('.w-col-tabs [data-t]').forEach(b=>b.classList.toggle('on',b.dataset.t===tab));
  const main=document.getElementById('wMain'); if(!main)return;
  // extra tabs come from W_EXTRA; cached tabs restore without re-render
  if(window.W_EXTRA&&window.W_EXTRA[tab]){
    if(W_STATE[tab]){ main.innerHTML=W_STATE[tab]; } else { main.innerHTML=window.W_EXTRA[tab](); W_STATE[tab]=main.innerHTML; }
  } else if(W_STATE[tab]&&!['draft','publish'].includes(tab)){
    main.innerHTML=W_STATE[tab];
  } else {
    main.innerHTML=wPanel(tab);
    if(!['draft'].includes(tab)) W_STATE[tab]=main.innerHTML;
  }
  if(window.__fillMeters)window.__fillMeters();
  // init preview on first load
  if(tab==='preview'&&window.prevMode){ const pv=document.getElementById('prevOut'); if(pv&&!pv.innerHTML)pv.innerHTML=prevMode(0); }
};
I.writer = ()=>{ document.getElementById('wLeftBody').innerHTML=W_LEFT.outline(); window.wSetTab('draft'); };

/* ─────────────── RESEARCH PANEL ─────────────── */
const SRCS=[
  ['OpenAI Documentation','platform.openai.com/docs','official'],
  ['Anthropic pricing page','anthropic.com/pricing','official'],
  ['The Verge — coverage','theverge.com','high'],
  ['G2 reviews (124)','g2.com','high'],
  ['r/restaurateur thread','reddit.com','community'],
  ['YouTube demo — setup walkthrough','youtube.com','community'],
  ['Industry blog opinion','—','opinion'],
  ['Unverified forum post','—','low']
];
/* research-panel: completeness checklist is the SINGLE SOURCE OF TRUTH.
   "Missing evidence" in the summary is DERIVED from it — never entered by hand.
   To mark a category missing, set its flag to 0 here and the count updates itself. */
const RS_COMPLETENESS=[
  ['Official docs',1],['Independent reviews',1],['Community',1],
  ['Videos',1],['Academic',0],['Legal',1]
];
const rsMissing=()=>RS_COMPLETENESS.filter(c=>!c[1]);
const rsMissingCount=()=>rsMissing().length;
const rsCompletePct=()=>Math.round(RS_COMPLETENESS.filter(c=>c[1]).length/RS_COMPLETENESS.length*100);

/* research-panel local helpers */
const rpM=(v,c)=>'<div class="meter '+(c||'')+'" style="background-size:'+v+'% 100%"></div>';
const rpCb=(v,t)=>'<div class="check"><span class="cb '+(v?'y':'n')+'">'+(v?'\u2713':'!')+'</span> '+t+'</div>';
const RSRC_GRP=[
  {n:'Official Sources',ic:'\ud83c\udfe2',src:[
    {n:'OpenAI Documentation',tr:100,up:'Yesterday',ev:['GPT pricing updated','New Responses API','New Agents SDK'],ent:['GPT-5','Responses API','Pricing'],art:12,cf:99},
    {n:'Anthropic Blog',tr:100,up:'Today',ev:['Claude 4.5 API update','New system prompt features'],ent:['Claude','System Prompts'],art:8,cf:99},
    {n:'Google AI Blog',tr:98,up:'2 days ago',ev:['Gemini 3 launch announced'],ent:['Gemini'],art:4,cf:97}]},
  {n:'Research Papers',ic:'\u2726',src:[
    {n:'MIT CSAIL',tr:94,up:'3 days ago',ev:['LLM benchmark study'],ent:['GPT-5','Claude'],art:2,cf:94},
    {n:'Stanford HAI',tr:93,up:'1 week ago',ev:['AI in business ROI study'],ent:['Enterprise AI'],art:1,cf:92}]},
  {n:'Industry Analysis',ic:'\ud83d\udcca',src:[
    {n:'McKinsey AI Report',tr:90,up:'2 weeks ago',ev:['AI adoption +38% YoY'],ent:['Enterprise AI'],art:3,cf:90},
    {n:'Gartner AI Trends',tr:88,up:'1 month ago',ev:['Top AI trends 2026'],ent:['AI Agents'],art:2,cf:88}]},
  {n:'Community',ic:'\u25d0',src:[
    {n:'Reddit r/OpenAI',tr:64,up:'1 hour ago',ev:['Pricing thread trending'],ent:['ChatGPT','OpenAI'],art:0,cf:43},
    {n:'YouTube (AI Explained)',tr:74,up:'2 days ago',ev:['GPT-5 review: 480k views'],ent:['GPT-5'],art:1,cf:72}]},
  {n:'Reviews',ic:'\u2605',src:[
    {n:'G2 Reviews (124)',tr:88,up:'Daily',ev:['Avg 4.6/5','12 new this week'],ent:['ChatGPT','Claude'],art:4,cf:88},
    {n:'Capterra Reviews',tr:85,up:'Daily',ev:['Rating 4.5/5'],ent:['ChatGPT'],art:2,cf:84}]},
  {n:'Competitors',ic:'\u25ce',src:[
    {n:'Backlinko',tr:75,up:'3 days ago',ev:['Missing restaurant AI angle'],ent:['AI Tools'],art:0,cf:74},
    {n:'HubSpot Blog',tr:78,up:'1 week ago',ev:['Generic AI overview'],ent:['AI Tools'],art:0,cf:77}]},
  {n:'News',ic:'\u25ce',src:[
    {n:'Reuters Technology',tr:95,up:'4 hours ago',ev:['OpenAI revenue milestone'],ent:['OpenAI'],art:3,cf:95},
    {n:'The Verge',tr:82,up:'6 hours ago',ev:['GPT-5 pricing controversy'],ent:['GPT-5','OpenAI'],art:2,cf:82}]}
];

V.research=()=>{
  const summary='<div class="rs-cards">'
    +[['Sources collected','18'],['Official sources','6'],['Community sources','5'],['Research papers','2'],['Average trust','94%'],['Conflicts detected','1'],['Missing evidence',String(rsMissingCount())]]
      .map(s=>'<div class="rs-card"><div class="rs-n">'+s[1]+'</div><div class="rs-l">'+s[0]+'</div></div>').join('')
    +'</div>';

  const actions='<div class="rs-actions">'
    +'<button class="b b-dark b-sm" onclick="runResearchAuto(this)">Auto-Research All Sources</button>'
    +['Refresh Research','Add Source','Export Brief','Generate Research Brief','Send to Story Builder','Approve Research']
      .map((a,i)=>'<button class="b '+(i===5?'b-gold':'b-line')+' b-sm">'+a+'</button>').join('')
    +'</div>'
    +'<div id="resAutoChain" style="display:none" class="rs-auto-chain"></div>';

  const groups=RSRC_GRP.map(g=>{
    const rows=g.src.map(s=>'<div class="rsrc-row" onclick="this.classList.toggle(&#39;open&#39;)">'
      +'<div class="rsrc-main"><div class="rsrc-left"><div class="rname">'+s.n+'</div><div class="ru">'+g.n+'</div></div>'
      +'<span class="trust '+(s.tr>=90?'official':s.tr>=75?'high':s.tr>=60?'community':'low')+'">'+(s.tr>=90?'official':s.tr>=75?'high':s.tr>=60?'community':'low')+'</span>'
      +'<span class="rconf">'+s.cf+'%</span></div>'
      +'<div class="rsrc-expand">'
      +'<div class="rsrc-row2">'
      +[['Trust',s.tr+'/100'],['Last updated',s.up],['Entities',s.ent.join(', ')],['Articles affected',s.art],['Knowledge Graph','Updated'],['Confidence',s.cf+'%']]
        .map(r=>'<div class="re-row"><span class="re-k">'+r[0]+'</span><span class="re-v">'+r[1]+'</span></div>').join('')
      +'</div><div class="rsrc-ev"><div class="rev-l">Evidence extracted</div>'
      +s.ev.map(e=>'<div class="rev-i">\u2713 '+e+'</div>').join('')+'</div></div></div>').join('');
    return '<div class="rsrc-group"><div class="rsrc-gh">'+g.ic+' '+g.n+' <span class="tiny muted">'+g.src.length+' sources</span></div>'+rows+'</div>';
  }).join('');

  const extraction='<div class="rs-section"><div class="rs-sh">Evidence Extraction</div>'
    +'<div class="rs-ev-list">'
    +['GPT pricing changed','API endpoint updated','New feature announced','Documentation revised','Release note published','Benchmark added','Competitor analysis complete']
      .map(e=>'<div class="rs-ev-i"><span style="color:var(--success)">\u2713</span> '+e+'</div>').join('')
    +'</div></div>';

  const contradiction='<div class="rs-conflict">'
    +'<div class="rsc-h"><span class="rsc-dot"></span><b>Research Health \u00b7 1 contradiction detected</b></div>'
    +'<div class="rsc-detail">17 sources agree \u00b7 1 needs review</div>'
    +'<div class="rsc-row"><span class="trust high">The Verge</span><span>"GPT-5 pricing doubled vs GPT-4"</span></div>'
    +'<div class="rsc-row"><span class="trust official">OpenAI Docs</span><span>"GPT-5 pricing 20% lower per token vs GPT-4"</span></div>'
    +'<div class="rsc-note">AGNUS recommends using the official source. Review before publishing.</div>'
    +'<button class="b b-line b-sm" style="margin-top:8px">Resolve contradiction</button></div>';

  const entities='<div class="rs-section"><div class="rs-sh">Detected Entities <span class="tiny muted">(click to open Knowledge Database)</span></div>'
    +'<div class="rs-ents">'
    +['GPT-5','Responses API','Pricing','OpenAI','Agent SDK','Embeddings']
      .map(e=>'<button class="rs-ent" onclick="GO(&#39;know_db&#39;)">'+e+'</button>').join('')
    +'</div></div>';

  const timeline='<div class="rs-section"><div class="rs-sh">Source Timeline</div>'
    +'<div class="rs-tl">'
    +[['Yesterday','Pricing changed','official'],['Today','Documentation updated','official'],['1 hour ago','YouTube review published','community'],['45 min ago','Reddit discussion exploded','community']]
      .map(t=>'<div class="rs-tl-i"><span class="rs-tl-t">'+t[0]+'</span><span class="rs-tl-d">'+t[1]+'</span><span class="trust '+t[2]+'">'+t[2]+'</span></div>').join('')
    +'</div></div>';

  const _pct=rsCompletePct(), _miss=rsMissing();
  const completeness='<div class="rs-section"><div class="rs-sh">Research Completeness</div>'
    +'<div class="row" style="gap:10px;align-items:center;margin-bottom:10px"><span class="tiny" style="font-weight:700;color:'+(_pct>=90?'var(--success)':_pct>=70?'var(--warn)':'var(--error)')+'">'+_pct+'%</span><div style="flex:1">'+rpM(_pct)+'</div></div>'
    +'<div class="rs-comp-list">'
    +RS_COMPLETENESS.map(c=>rpCb(c[1],c[0])).join('')
    +'</div>'
    +(_miss.length
      ? '<div class="rsc-note" style="margin-top:10px">Missing evidence ('+_miss.length+'): '+_miss.map(c=>c[0]).join(', ')+'. This count drives the summary card above.</div>'
      : '<div class="rsc-note" style="margin-top:10px">All evidence categories covered.</div>')
    +'</div>';

  const citations='<div class="rs-section"><div class="rs-sh">Generated Citations</div>'
    +'<div class="rs-cites">'
    +['OpenAI Docs','Anthropic Docs','Google AI Blog','G2 Reviews','Reddit','YouTube'].map(c=>'<span class="rs-cite">'+c+'</span>').join('')
    +'</div></div>';

  return '<div class="page-h">'
    +'<div class="eyebrow"><span class="ix">\u25c6</span> Research Panel \u00b7 18 sources collected</div>'
    +'<h1>Evidence before words.</h1>'
    +'<p>Everything the AI writes is backed by verified, inspectable evidence. One contradiction detected \u2014 review before publishing.</p></div>'
    +summary+actions
    +'<div class="rs-grid"><div class="rs-main">'+groups+extraction+contradiction+timeline+completeness+citations+'</div>'
    +'<div class="rs-aside">'+entities+'</div></div>';
};
I.research=()=>{};

/* ─────────────── INTERNAL LINKING ─────────────── */
const LINKS=[
  ['ChatGPT Review','ChatGPT','Related product'],
  ['Claude vs ChatGPT','compare Claude and ChatGPT','Comparison intent'],
  ['AI Agents Guide','AI agents','Cluster authority'],
  ['Prompt Engineering Course','prompt engineering','Academy upsell'],
  ['AI ROI Calculator','calculate your ROI','Conversion / tool']
];
V.linking = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Internal Linking Engine</div>
  <h1>No article exists alone.</h1>
  <p>For the open draft, AGNUS recommends links that build cluster authority and guide the reader's next step.</p>
</div>
<div class="linklist" style="max-width:760px">${LINKS.map((l,i)=>`<div class="linkrec"><div class="ln">${i+1}</div><div class="lt"><div class="lh">${l[0]}</div><div class="anchor">anchor: "${l[1]}"</div><div class="lr">Reason: ${l[2]}</div></div><button class="b b-line b-sm" style="align-self:center">Insert</button></div>`).join('')}</div>`;

/* ─────────────── QUALITY CHECKLIST ─────────────── */
const CHECKS=[['Is the title clear?',1],['Does the intro answer fast?',1],['Keyword used naturally?',1],['Sources included?',1],['Claims verified?',1],['Internal links added?',1],['Affiliate links correct?',0],['Connected to a cluster?',1],['Next-step recommendation?',1],['CTA present?',1],['Reading time shown?',1],['Schema markup added?',0],['Mobile-friendly?',1]];
V.Quality = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Article Quality Check</div>
  <h1>Nothing publishes below the bar.</h1>
</div>
<div class="qscore" style="max-width:760px;margin-bottom:22px"><div class="ring" style="--p:91"><span class="rn">91</span></div>
  <div class="qt"><h4>AGNUS Quality Score · 91/100</h4><p>Two items left: add affiliate links and schema markup, then it's clear to publish.</p></div></div>
<div class="checklist" style="max-width:760px">${CHECKS.map(c=>`<div class="check"><span class="cb ${c[1]?'y':'n'}">${c[1]?'✓':'!'}</span> ${c[0]}</div>`).join('')}</div>`;

/* ─────────────── PUBLISHING CALENDAR ─────────────── */
V.calendar = () => {
  const evs={3:['draft','Draft · AI accountants'],5:['scheduled','Scheduled · Gemini 3 vs GPT-5'],8:['published','Published · Agent framework'],10:['update','Update · ChatGPT review'],12:['scheduled','Scheduled · Restaurants guide'],15:['published','Published · 50 GPT-5 prompts'],17:['draft','Draft · AI note-takers'],19:['scheduled','Scheduled · Weekly Intelligence'],24:['published','Published · Dental clinics'],26:['scheduled','Scheduled · Vector DBs']};
  let cells=''; const offset=2;
  for(let i=0;i<35;i++){ const d=i-offset+1; const inMonth=d>=1&&d<=30; const e=evs[d];
    cells+=`<div class="cal-day ${inMonth?'':'dim'} ${d===29?'today':''}">${inMonth?`<div class="dn">${d}</div>`:''}${e?`<div class="cal-ev ${e[0]}">${e[1]}</div>`:''}</div>`; }
  return `
<div class="page-h"><div class="row"><div>
  <div class="eyebrow"><span class="ix">◆</span> Publishing Calendar · June 2026</div>
  <h1>A rhythm, not a scramble.</h1>
</div><div class="grow"></div><button class="b b-line">Week</button><button class="b b-dark">Month</button></div></div>
<div class="gap-alert" style="margin-bottom:20px"><span class="ic">⚠</span><div>You haven't published in <b>AI Agents</b> for 12 days. The <b>Business</b> cluster needs 3 more articles, and the <b>Claude review</b> should be updated.</div></div>
<div class="row" style="gap:8px;margin-bottom:12px">${[['published','Published'],['scheduled','Scheduled'],['draft','Draft'],['update','Needs update']].map(l=>`<span class="cal-ev ${l[0]}">${l[1]}</span>`).join('')}</div>
<div class="cal">${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>`<div class="cal-hd">${d}</div>`).join('')}${cells}</div>`;
};

/* ─────────────── PERFORMANCE ANALYTICS ─────────────── */
const PERF=[
  ['OpenAI agent framework','12,400','3:40','142','€210',5,'AI Models'],
  ['Claude vs ChatGPT','9,800','4:12','88','€160',4,'AI Models'],
  ['AI for dental clinics','3,200','5:01','61','€140',4,'Healthcare'],
  ['Best AI tools for restaurants','2,100','3:55','44','€90',3,'Restaurants'],
  ['50 GPT-5 prompts','5,600','2:20','30','€40',3,'Prompts']
];
function bscore(n){ let s='<span class="bscore">'; for(let i=0;i<5;i++)s+=`<i class="${i<n?'on':''}"></i>`; return s+'</span>'; }
V.analytics = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Performance Analytics · last 30 days</div>
  <h1>What's working — and what it's worth.</h1>
</div>
<div class="an-grid">
  ${[['Page views','18,400','+14%'],['Avg reading time','3:48','+0:22'],['Affiliate clicks','365','+9%'],['Revenue','€740','+€120']].map(m=>`<div class="metric"><div class="ml">${m[0]}</div><div class="mv">${m[1]}</div><div class="md"><span class="up">▲ ${m[2]}</span></div></div>`).join('')}
</div>
<table class="an-table"><thead><tr><th>Article</th><th>Views</th><th>Read time</th><th>Aff. clicks</th><th>Revenue</th><th>Authority</th><th>Cluster</th></tr></thead>
<tbody>${PERF.map(p=>`<tr><td style="font-weight:600">${p[0]}</td><td class="mono">${p[1]}</td><td class="mono">${p[2]}</td><td class="mono">${p[3]}</td><td class="mono" style="color:var(--success);font-weight:600">${p[4]}</td><td>${bscore(p[5])}</td><td><span class="pill ghost">${p[6]}</span></td></tr>`).join('')}</tbody></table>`;

/* ─────────────── AFFILIATE OPPORTUNITIES ─────────────── */
const AFF=[
  {name:'Best AI Tools for Lawyers',products:['Harvey AI','Claude Pro','ChatGPT Plus','Notion AI','DocuSign'],type:'Recurring',place:'Top recommendation + table',rev:'€480',clicks:'88',conv:'12'},
  {name:'AI for Restaurants',products:['OpenTable AI','ChatGPT Plus','Canva Pro'],type:'Mixed',place:'Comparison table',rev:'€140',clicks:'44',conv:'6'},
  {name:'Best AI Agents',products:['Relevance AI','Lindy','ChatGPT Plus','Zapier'],type:'Recurring',place:'Final CTA',rev:'€210',clicks:'61',conv:'9'}
];
V.affiliate = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Affiliate Opportunities · 4 found this week</div>
  <h1>Every article, a revenue opportunity.</h1>
  <p>For each piece, AGNUS suggests the right partners, the best placement, and tracks what actually converts.</p>
</div>
<div class="aff-grid">${AFF.map(a=>`<div class="aff">
  <div class="aff-top"><h3>${a.name}</h3><span class="pill green">Healthy</span></div>
  <div class="row" style="gap:6px;flex-wrap:wrap">${a.products.map(p=>`<span class="pill ghost">${p}</span>`).join('')}</div>
  <div class="rev">${a.rev}<span class="tiny muted" style="font-weight:400"> / mo est.</span></div>
  <div class="aff-rows">
    <div class="aff-row"><span class="k">Revenue type</span><span class="v">${a.type}</span></div>
    <div class="aff-row"><span class="k">Best placement</span><span class="v">${a.place}</span></div>
    <div class="aff-row"><span class="k">Clicks</span><span class="v">${a.clicks}</span></div>
    <div class="aff-row"><span class="k">Conversions</span><span class="v">${a.conv}</span></div>
  </div></div>`).join('')}</div>`;

/* ─────────────── GEO ─────────────── */
const GEO=[['Can ChatGPT summarize it clearly?',1],['Does it answer direct questions?',1],['Are definitions clear?',1],['Are lists structured?',1],['Are entities named properly?',1],['Is there an FAQ section?',0],['Is author/expertise clear?',1],['Is the content quotable?',1]];
const TECH_HEALTH=[['Page speed (LCP)','1.8s','good'],['Mobile usability','100/100','good'],['Crawlability','No blocked resources','good'],['HTTPS','Enforced site-wide','good'],['Core Web Vitals','Pass — all 3 metrics','good'],['Structured data errors','0 errors, 2 warnings','warn'],['Sitemap freshness','Updated 2h ago','good'],['Robots.txt','Correctly configured','good']];
V.geo = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> GEO · AI Search Optimization</div>
  <h1>Rank in answers, not just links.</h1>
  <p>AGNUS optimizes for how ChatGPT, Claude and Gemini read and cite content — not only Google's blue links.</p>
</div>
<div class="qscore" style="max-width:760px;margin-bottom:22px"><div class="ring" style="--p:88"><span class="rn">88</span></div>
  <div class="qt"><h4>GEO readiness · 88/100</h4><p>Add an FAQ section to make this piece more quotable by AI answer engines.</p></div></div>
<div class="checklist" style="max-width:760px">${GEO.map(c=>`<div class="check"><span class="cb ${c[1]?'y':'n'}">${c[1]?'✓':'!'}</span> ${c[0]}</div>`).join('')}</div>

<div class="sec-title"><h2>Technical Health</h2><span class="tiny muted">speed, crawlability, mobile — the foundation both Google and AI crawlers need</span></div>
<div class="rs-section" style="max-width:760px">
  <div class="rs-ev-list">${TECH_HEALTH.map(t=>`<div class="rs-ev-i"><span style="color:${t[2]==='good'?'var(--success)':'var(--warn)'};margin-right:6px">${t[2]==='good'?'✓':'!'}</span><b style="font-weight:600;margin-right:8px">${t[0]}</b><span class="tiny muted">${t[1]}</span></div>`).join('')}</div>
</div>

<div class="sec-title"><h2>Backlinks &amp; Brand Mentions</h2><span class="tiny muted">reputation signals — trusted mentions build authority for both SEO and GEO</span></div>
<div class="an-grid" style="max-width:900px;margin-bottom:8px">
  <div class="metric"><div class="ml">Referring domains</div><div class="mv">142</div><div class="md"><span class="up">▲</span> +8 this month</div></div>
  <div class="metric"><div class="ml">New backlinks</div><div class="mv">23</div><div class="md"><span class="up">▲</span> last 30 days</div></div>
  <div class="metric"><div class="ml">Brand mentions (unlinked)</div><div class="mv">67</div><div class="md"><span class="up">▲</span> last 30 days</div></div>
  <div class="metric"><div class="ml">AI citation mentions</div><div class="mv">34</div><div class="md"><span class="up">▲</span> ChatGPT/Perplexity/Gemini</div></div>
</div>
<div class="rs-section" style="max-width:760px">
  <div class="rs-ev-list">
    <div class="rs-ev-i"><b style="font-weight:600;margin-right:8px">Domain Authority (proxy)</b><span class="tiny" style="color:var(--success)">58 <span class="up">▲ +3</span> vs last quarter</span></div>
    <div class="rs-ev-i"><b style="font-weight:600;margin-right:8px">Top referring domain</b><span class="tiny muted">TechCrunch · DA 94</span></div>
  </div>
</div>
<div class="gap-alert" style="max-width:760px;margin-top:14px"><span class="ic">⚠</span><div><b>2 toxic backlinks flagged.</b> Review and disavow to protect domain trust — this feeds both Google's ranking signals and AI systems' trust assessment of the source.</div></div>`;

/* ─────────────── MEDIA ─────────────── */
V.media = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Media Dashboard</div>
  <h1>Visuals, on brand.</h1>
  <p>Ivory background, charcoal type, a soft gold accent. Editorial and calm — never cheap robot art.</p>
</div>
<div class="kw-grid">
  ${[['Hero image','Architectural, ivory, premium'],['Inline diagram','How the workflow connects'],['Comparison table','Tool A vs Tool B'],['Quote card','For social sharing'],['Newsletter image','Weekly edition cover'],['YouTube thumbnail','High-contrast, gold accent']].map(m=>`
    <div class="kw"><div class="kw-top"><h3 style="font-family:var(--font-sans);font-weight:700">${m[0]}</h3><span class="pill gold">Suggested</span></div>
    <p class="muted" style="font-size:13px;margin:0 0 14px">${m[1]}</p>
    <div style="aspect-ratio:16/7;border-radius:11px;background:linear-gradient(135deg,var(--paper-2),var(--gold-soft));border:1px solid var(--line);display:grid;place-items:center;color:var(--ink-faint);font-family:var(--font-mono);font-size:11px">image slot</div></div>`).join('')}
</div>`;

/* ─────────────── CONTENT ARCHIVE ─────────────── */
V.archive = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Content Archive · 214 articles</div>
  <h1>Everything AGNUS has published.</h1>
</div>
<div class="kw-filters">${['All','News','Reviews','Comparisons','Guides','Academy','Marketplace','Needs update'].map((f,i)=>`<button class="kw-filter ${i===0?'on':''}">${f}</button>`).join('')}</div>
<table class="an-table"><thead><tr><th>Title</th><th>Type</th><th>Cluster</th><th>Updated</th><th>Views</th><th>Status</th></tr></thead>
<tbody>${[['OpenAI agent framework','News','AI Models','2d ago','12,400','Live'],['Claude vs ChatGPT','Comparison','AI Models','5d ago','9,800','Live'],['ChatGPT Review','Review','AI Models','21d ago','8,100','Update'],['AI for dental clinics','Guide','Healthcare','8d ago','3,200','Live'],['What is RAG?','Explainer','RAG','12d ago','6,400','Live'],['50 GPT-5 prompts','Prompts','Prompts','14d ago','5,600','Live']].map(r=>`<tr><td style="font-weight:600">${r[0]}</td><td><span class="pill ghost">${r[1]}</span></td><td class="muted">${r[2]}</td><td class="mono muted">${r[3]}</td><td class="mono">${r[4]}</td><td>${r[5]==='Update'?'<span class="pill warn">Needs update</span>':'<span class="pill green">Live</span>'}</td></tr>`).join('')}</tbody></table>`;

/* ─────────────── HUMAN REVIEW ─────────────── */
V.review = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Human Review · 2 awaiting you</div>
  <h1>You are the final editor.</h1>
  <p>AI drafts. You decide. Nothing reaches the public site without your sign-off.</p>
</div>
${[['Claude vs ChatGPT (refresh)','claude vs chatgpt','AI Models',92],['AI for dental clinics','ai for dental clinics','Healthcare',88]].map(r=>`
  <div class="story" style="margin-bottom:14px"><div class="story-top"><span class="pill gold">Awaiting review</span><span class="tiny muted">drafted by Writing AI · GPT-5</span></div>
  <h3>${r[0]}</h3>
  <div class="story-stats">
    <div class="sstat"><div class="l">Keyword</div><div class="v" style="font-family:var(--font-mono);font-size:13px;color:var(--sapphire)">${r[1]}</div></div>
    <div class="sstat"><div class="l">Cluster</div><div class="v">${r[2]}</div></div>
    <div class="sstat"><div class="l">Quality</div><div class="v"><span class="pill green">${r[3]}/100</span></div></div>
  </div>
  <div class="story-act"><button class="b b-dark b-sm" onclick="GO('writer')">Open in editor</button><button class="b b-line b-sm" onclick="GO('Quality')">View checklist</button><button class="b b-gold b-sm">Approve & publish</button></div></div>`).join('')}`;


/* research-panel auto-chain (ported) */
window.runResearchAuto=function(btn){
  var chain=document.getElementById('resAutoChain'); if(!chain)return;
  chain.style.display='block';
  btn.disabled=true; btn.textContent='Running\u2026';
  var engines=['Knowledge Sources (53 sources)','Source Scoring Engine','Knowledge Database','Knowledge Graph','Entity Manager','Contradiction Detector'];
  var logs=['53 sources scanned \u2014 18 qualified for this topic\u2026','Trust scores calculated: avg 94%, 1 conflict flagged\u2026','12 named entities extracted and matched\u2026','Knowledge Graph: 8 relationships mapped\u2026','Entity Manager: 4 entities linked (OpenAI, Claude, ElevenLabs, OpenTable)\u2026','1 contradiction resolved: OpenAI official overrides The Verge\u2026'];
  chain.innerHTML='<div class="ss-label" style="color:var(--gold-deep)">&#9889; Running Research Engines</div>'
    +'<div class="eng-chain" id="resChainList">'
    +engines.map(function(e,i){return '<div class="ec-step ec-pending" id="rec'+i+'"><span class="ec-dot"></span>'+e+'</div>';}).join('')
    +'</div><div class="sop-log" id="resLog"></div>';
  engines.forEach(function(e,i){
    setTimeout(function(){
      var el=document.getElementById('rec'+i); if(el){el.className='ec-step ec-running';}
      setTimeout(function(){
        if(el)el.className='ec-step ec-done';
        var log=document.getElementById('resLog'); if(log&&logs[i])log.innerHTML+='<div class="spl-row">&#9654; '+logs[i]+'</div>';
      },340);
    },i*560);
  });
  setTimeout(function(){
    chain.innerHTML+=
      '<div class="ss-label" style="margin-top:14px">&#10022; RESEARCH RESULTS</div>'
      +'<div class="sop-grid">'
      +[['Sources','18 verified \u2014 6 official, 5 research, 4 community, 3 competitor'],['Avg trust','94%'],['Entities','12 named \u2014 OpenAI, Claude, ElevenLabs, OpenTable\u2026'],['Conflicts','1 resolved \u2014 OpenAI official wins'],['PAA','\"What AI tools help restaurants?\" \u2014 unowned snippet'],['Competitors','Backlinko, HubSpot, Zapier \u2014 all missing restaurant angle'],['Voice demand','High \u2014 featured snippet available']]
        .map(function(r){return '<div class="sop-row"><span class="sop-k">'+r[0]+'</span><span class="sop-v">'+r[1]+'</span></div>';}).join('')
      +'</div>';
    btn.textContent='Auto-Research All Sources'; btn.disabled=false;
    /* light up source rows */
    document.querySelectorAll('.rsrc-row .rconf').forEach(function(el){el.innerHTML='<span style="color:var(--success)">&#10003;</span>';});
  },engines.length*560+400);
};
})();

/* === dash-views2.js === */
/* AGNUS Dashboard — Phase 2 views: Brain, Story Builder, Coverage, Opportunity, Reports, Databases, Library. */
(function(){
const V = window.VIEWS = window.VIEWS || {};
const I = window.VIEW_INIT = window.VIEW_INIT || {};
const meter=(v,cls)=>`<div class="meter ${cls||''}" style="background-size:${v}% 100%"></div>`;

/* ═══════════ THE AGNUS BRAIN ═══════════ */
const ROADMAP=[
  ['Publish "Best AI Agents for Small Businesses"','Rising demand and a missing pillar — the single highest-leverage move this week.','High','€300–700/mo','2.5h','AI Agents',94,
    ['Google Trends up 42%','Search Console impressions rising','AI Agents cluster missing pillar','PartnerStack: 4 relevant programs','Internal searches +18%','Competition: medium'],
    ['+250 visits/mo','€120/mo','+7%','Easy'],93],
  ['Refresh the ChatGPT Review','Pricing changed yesterday; the review dropped 4 positions and 3 comparisons cite stale numbers.','High','Protects €160/mo','45m','AI Models',97,
    ['OpenAI pricing page changed (official)','Search Console: -4 positions','3 comparisons reference old price','Knowledge Graph flagged 12 pages'],
    ['Recovers ~180/mo','Protects €160/mo','+4%','Easy'],96],
  ['Build the Restaurants cluster (3 articles)','Cluster strength is only 31%. Three supporting pieces push it past the authority threshold.','Medium','€90→€240/mo','6h','Restaurants',88,
    ['Cluster health 31%','G2 + Capterra demand strong','Reddit signal: rising mentions','Low competition keywords available'],
    ['+420 visits/mo','€150/mo','+11%','Medium'],84],
  ['Launch "AI for Dental Clinics" collection','Keyword 8.9, almost no competition, high affiliate value — an underserved industry.','Medium','€140/mo','4h','Healthcare',86,
    ['Keyword priority 8.9','Almost no competition','High affiliate value','No existing coverage (gap)'],
    ['+180 visits/mo','€140/mo','+6%','Easy'],88],
  ['Link RAG ↔ Vector Databases clusters','Two strong clusters sit unconnected. Interlinking lifts 8 existing articles at once.','Low','Compounding','30m','RAG',91,
    ['Knowledge Graph: missing edge','Both clusters >49% strength','8 articles would gain links'],
    ['+90 visits/mo','Compounding','+3%','Easy'],90]
];
const PRICE_ALERT=['1 review','3 comparison pages','2 academy lessons','5 business guides','1 marketplace listing'];
V.brain = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> The AGNUS Brain · grounded in the Knowledge System</div>
  <h1>What should we build next?</h1>
  <p>The Brain never invents. It reads only the Knowledge Database — and shows its evidence and confidence for every recommendation.</p>
</div>
<div class="brain-alert"><span class="ba-pulse"></span>
  <div class="ba-t"><b>OpenAI changed GPT pricing 11 minutes ago.</b> This affects ${PRICE_ALERT.map(p=>`<span class="ba-chip">${p}</span>`).join('')} — est. update 48 min · revenue protected <b>€180/mo</b>.</div>
  <button class="b b-line b-sm" onclick="GO('know_graph')">See affected pages →</button>
</div>
<div class="council-banner" style="margin:18px 0 24px"><div class="tx"></div><div class="glow"></div>
  <div class="seal">✦</div>
  <div class="grow"><h3>Strategic Advisor</h3><p>It reads 53 knowledge sources, 8 clusters, 214 articles and 30 days of reader behavior — then tells you exactly where to spend the next hour, with the evidence behind it.</p></div>
  <button class="b b-gold" id="brainBtn" onclick="runBrain()">What should we build next? →</button>
</div>
<div class="an-grid" style="margin-bottom:8px">
  ${[['Sources read','53',''],['Content gaps found','11','urgent'],['Opportunities','7',''],['Authority at risk','3','urgent']].map(m=>`<div class="metric"><div class="ml">${m[0]}</div><div class="mv">${m[1]}</div><div class="md ${m[2]==='urgent'?'':'muted'}">${m[2]==='urgent'?'<span class="dn">needs action</span>':'live'}</div></div>`).join('')}
</div>
<div id="brainOut"></div>`;
window.runBrain=function(){
  const btn=document.getElementById('brainBtn'); if(btn){btn.textContent='Thinking…';btn.disabled=true;btn.style.opacity='.6';}
  const out=document.getElementById('brainOut');
  out.innerHTML=`<div class="sec-title"><h2>Analyzing signals…</h2></div>`;
  const steps=['Querying the Knowledge Database…','Reading Google Trends + Search Console…','Scoring keyword opportunities…','Checking cluster health…','Mapping content gaps…','Modeling affiliate value…','Reading reader behavior…','Prioritizing with confidence…'];
  let i=0; const tick=setInterval(()=>{ out.querySelector('h2').textContent=steps[i]||'Prioritizing…'; if(++i>=steps.length){ clearInterval(tick);
    out.innerHTML=`<div class="sec-title"><h2>Strategic roadmap · next 7 days</h2><span class="tiny muted">every recommendation cites its evidence</span></div>
    <div class="brain-recs">${ROADMAP.map((r,n)=>`<div class="brec fade" style="animation-delay:${n*0.08}s">
      <div class="brec-h"><div class="ln">${n+1}</div><div class="grow"><div class="lh">${r[0]}</div><div class="lr">${r[1]}</div></div><div class="brec-conf" onclick="confDrill(event,this)" title="How is confidence calculated?"><div class="cn">${r[6]}%</div><div class="cl">Confidence ⓘ</div><div class="cl2">18 sources · 7 signals</div><div class="cl3">${Math.round(r[6]*0.97)}% consensus</div></div></div>
      <div class="brec-prob"><span class="bp-k">Probability of success</span><div class="bp-bar"><div class="meter green" style="background-size:${r[9]}% 100%"></div></div><span class="bp-v">${r[9]}%</span><span class="bp-note">if executed well</span></div>
      <div class="brec-metrics">${[['Expected traffic',r[8][0]],['Expected revenue',r[8][1]],['Authority gain',r[8][2]],['Difficulty',r[8][3]]].map(m=>`<div class="bm"><div class="bm-l">${m[0]}</div><div class="bm-v">${m[1]}</div></div>`).join('')}</div>
      <div class="brec-ev"><div class="bev-l">Why · evidence <span class="tiny muted">(click any to drill down)</span></div><div class="bev-list">${r[7].map(e=>`<span class="bev" data-e="${e.replace(/"/g,'')}" onclick="evDrill(event,this)">▷ ${e}</span>`).join('')}</div></div>
      <div class="brec-f"><div class="row" style="gap:8px;flex-wrap:wrap"><span class="pill ${r[2]==='High'?'green':r[2]==='Medium'?'gold':'ghost'}">${r[2]} impact</span><span class="pill ghost">${r[3]}</span><span class="pill ghost">⏱ ${r[4]}</span><span class="pill ghost">▷ ${r[5]}</span></div><button class="b b-dark b-sm" onclick="execPreview(${n})">Start</button></div>
    </div>`).join('')}</div>`;
    if(btn){btn.textContent='Roadmap ready ✓';}
  } },340);
};
/* evidence drill-down + confidence breakdown popovers */
const EV_DETAIL={
  'Google Trends up 42%':['Google Trends','Trend: "AI agents for SMB" +42% over 30 days','High','2 hours ago'],
  'Search Console impressions rising':['Search Console','Impressions +28% week-over-week','High','1 day ago'],
  'OpenAI pricing page changed (official)':['OpenAI · official','Pricing page diff detected on /pricing','Verified','11 minutes ago'],
  'Knowledge Graph flagged 12 pages':['Knowledge Graph','12 connected pages reference the changed price','Verified','11 minutes ago'],
  'PartnerStack: 4 relevant programs':['PartnerStack','4 affiliate programs match this topic','High','1 day ago']
};
window.evDrill=function(e,el){ e.stopPropagation(); document.querySelectorAll('.ev-pop,.conf-pop').forEach(p=>p.remove());
  const key=el.dataset.e; const d=EV_DETAIL[key]||[(key.split(':')[0]||'Source'),'Signal recorded in the Knowledge System','Medium','recently'];
  const spark=[30,38,34,46,42,55,52,64,60,72,80,92];
  const pop=document.createElement('div'); pop.className='ev-pop';
  pop.innerHTML=`<div class="evp-h">${d[0]}</div>`+
    `<div class="evp-chart"><div class="evp-cl">Past 12 months · +forecast</div><div class="evp-bars">${spark.map((h,i)=>`<span style="height:${h}%" class="${i>=10?'fc':''}"></span>`).join('')}</div></div>`+
    `<div class="evp-row"><span>Signal</span><b>${d[1]}</b></div><div class="evp-row"><span>Confidence</span><b>${d[2]}</b></div><div class="evp-row"><span>Related</span><b>agents, automation, SMB</b></div><div class="evp-row"><span>Last synced</span><b>${d[3]}</b></div><div class="evp-row"><span>Source</span><b>${d[0]}</b></div>`;
  el.appendChild(pop); setTimeout(()=>document.addEventListener('click',()=>pop.remove(),{once:true}),0);
};
/* execution preview + approve confirm drawers */
const EXEC_PLAN=[
  {t:'Best AI Agents for Small Businesses',time:'2h 30m',creates:['1 review','2 comparisons','3 guides'],sources:12,rev:'€120/month'},
  {t:'Refresh the ChatGPT Review',time:'45m',creates:['1 review update','3 comparison refreshes'],sources:8,rev:'Protects €160/month'},
  {t:'Build the Restaurants cluster',time:'6h',creates:['3 supporting articles','1 pillar link pass'],sources:9,rev:'€150/month'},
  {t:'AI for Dental Clinics collection',time:'4h',creates:['1 collection','1 business guide'],sources:7,rev:'€140/month'},
  {t:'Link RAG ↔ Vector Databases',time:'30m',creates:['8 internal links'],sources:5,rev:'Compounding'}
];
function drawerShell(title,bodyHtml,proceedLabel,onProceed){
  let w=document.getElementById('execDrawerWrap'); if(!w){ w=document.createElement('div'); w.id='execDrawerWrap'; document.body.appendChild(w); }
  w.innerHTML=`<div class="modal-bg open" onclick="if(event.target===this)this.remove()"><div class="modal" style="width:480px">
    <div class="modal-h"><h3>${title}</h3><button class="x" onclick="this.closest('.modal-bg').remove()">×</button></div>
    <div class="modal-b">${bodyHtml}</div>
    <div class="modal-f"><button class="b b-ghost" onclick="this.closest('.modal-bg').remove()">Cancel</button><button class="b b-gold" onclick="${onProceed}">${proceedLabel}</button></div>
  </div></div>`;
}
window.execPreview=function(n){ const p=EXEC_PLAN[n]||EXEC_PLAN[0];
  drawerShell('Execution plan',`<div class="exp-h">${p.t}</div>
    <div class="exp-grid">
      <div class="exp-stat"><div class="exp-l">Estimated time</div><div class="exp-v">${p.time}</div></div>
      <div class="exp-stat"><div class="exp-l">Uses</div><div class="exp-v">${p.sources} verified sources</div></div>
      <div class="exp-stat" style="grid-column:1/-1"><div class="exp-l">Expected revenue</div><div class="exp-v" style="color:var(--success)">${p.rev}</div></div>
    </div>
    <div class="exp-creates"><div class="exp-l">Creates</div>${p.creates.map(c=>`<div class="exp-row">▷ ${c}</div>`).join('')}</div>`,
    'Proceed →','this.closest(\'.modal-bg\').remove();GO(\'writer\')');
};
window.execApprove=function(t,rev,time,affected){
  drawerShell('Approve recommendation',`<div class="exp-h">${t}</div>
    <div class="exp-grid">
      <div class="exp-stat"><div class="exp-l">Expected outcome</div><div class="exp-v" style="color:var(--success)">${rev}</div></div>
      <div class="exp-stat"><div class="exp-l">Estimated time</div><div class="exp-v">${time}</div></div>
    </div>
    <div class="exp-creates"><div class="exp-l">Affected</div>${affected.map(c=>`<div class="exp-row">▷ ${c}</div>`).join('')}</div>`,
    'Approve','this.closest(\'.modal-bg\').remove();GO(\'writer\')');
};
window.confDrill=function(e,el){ e.stopPropagation(); document.querySelectorAll('.ev-pop,.conf-pop').forEach(p=>p.remove());
  const pop=document.createElement('div'); pop.className='conf-pop';
  pop.innerHTML=`<div class="evp-h">Confidence score · how it's built</div>${CONF_BREAK.map(c=>`<div class="cb-row"><span class="cb-k">${c[0]}</span><div class="cb-bar"><div class="meter" style="background-size:${c[1]*2.2}% 100%"></div></div><span class="cb-v">${c[1]}%</span></div>`).join('')}`;
  el.appendChild(pop); setTimeout(()=>document.addEventListener('click',()=>pop.remove(),{once:true}),0);
};

/* ═══════════ STORY BUILDER (the bridge) ═══════════ */
const SB_STEPS=[
  ['Topic','What are we writing about?','Best AI tools for restaurants'],
  ['Keyword','Confirm the target keyword & intent','best ai tools for restaurants · Commercial · 8.7'],
  ['Research','Gather & label sources','8 sources · 5 high-trust'],
  ['Angle','Choose the story angle','"The 6 tools that fill tables on a slow Tuesday"'],
  ['Outline','Approve the structure','9 sections · 8 min read'],
  ['Draft','Generate the first draft','→ opens AI Writer']
];
V.story = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Story Builder · the bridge from idea to draft</div>
  <h1>Every article is built, not guessed.</h1>
  <p>Topic → keyword → research → angle → outline → draft. Nothing reaches the AI Writer until the foundation is solid.</p>
</div>
<div class="sb-rail" id="sbRail">
  ${SB_STEPS.map((s,i)=>`<button class="sb-stage ${i===0?'on':''} ${i<0?'done':''}" data-i="${i}" onclick="sbGo(${i})">
    <span class="sn">${i+1}</span><div><div class="st">${s[0]}</div><div class="sd">${s[1]}</div></div></button>`).join('')}
</div>
<div class="sb-panel card fade" id="sbPanel"></div>`;
const SB_BODY=[
  `<div class="cc-panel-h"><h2>1 · Topic</h2><p>Start from a keyword opportunity, a feed story, or your own idea.</p></div>
   <div class="field" style="max-width:560px"><label>Topic</label><input type="text" value="Best AI tools for restaurants"></div>
   <div class="row" style="gap:8px;flex-wrap:wrap"><span class="pill gold">From Keyword Discovery · 8.7</span><span class="pill ghost">Cluster: Restaurants</span></div>`,
  `<div class="cc-panel-h"><h2>2 · Keyword</h2><p>AGNUS confirms intent, difficulty and the cluster fit before a word is written.</p></div>
   <div class="kw-attrs" style="max-width:520px">${[['Primary','best ai tools for restaurants'],['Intent','Commercial'],['Difficulty','Low'],['Traffic','Medium'],['Affiliate','High'],['Priority','8.7']].map(a=>`<div class="kw-attr"><span class="k">${a[0]}</span><span class="v">${a[1]}</span></div>`).join('')}</div>`,
  `<div class="cc-panel-h"><h2>3 · Research</h2><p>The Research AI gathers sources and labels each by trust — evidence before words.</p></div>
   <div class="card" style="padding:6px 20px;max-width:620px">${[['OpenTable AI docs','official'],['G2 reviews (124)','high'],['The Verge coverage','high'],['r/restaurateur thread','community'],['Industry blog opinion','opinion']].map(s=>`<div class="rsrc"><div class="rt"><div class="rn">${s[0]}</div></div><span class="trust ${s[1]}">${s[1]}</span></div>`).join('')}</div>`,
  `<div class="cc-panel-h"><h2>4 · Angle</h2><p>Pick the story that will actually get read. AGNUS proposes three.</p></div>
   <div class="linklist" style="max-width:620px">${['The 6 tools that fill tables on a slow Tuesday','How one bistro cut no-shows 40% with AI','The 2026 restaurant AI stack, ranked'].map((a,i)=>`<div class="linkrec"><div class="ln">${i+1}</div><div class="lt"><div class="lh">${a}</div></div><button class="b ${i===0?'b-dark':'b-line'} b-sm" style="align-self:center">${i===0?'Selected':'Choose'}</button></div>`).join('')}</div>`,
  `<div class="cc-panel-h"><h2>5 · Outline</h2><p>Approve the structure — it becomes the AI Writer's left rail.</p></div>
   <div class="card" style="padding:8px 20px;max-width:560px">${['Introduction','Why restaurants need AI now','Best booking tools','Voice receptionists','Review automation','Marketing with AI','Comparison table','FAQs','What to do next'].map((o,i)=>`<div class="src-line">${i+1}. ${o}</div>`).join('')}</div>`,
  `<div class="cc-panel-h"><h2>6 · Draft</h2><p>Everything's ready. Generate the first draft and continue in the AI Writer.</p></div>
   <div class="gap-alert" style="max-width:560px;margin-bottom:18px"><span class="ic">✦</span><div>Research brief, angle and outline are locked. The draft will inherit all of it.</div></div>
   <button class="b b-gold b-lg" onclick="GO('writer')">Generate draft & open AI Writer →</button>`
];
window.sbGo=function(i){ document.querySelectorAll('#sbRail .sb-stage').forEach((b,n)=>{ b.classList.toggle('on',n===i); b.classList.toggle('done',n<i); }); document.getElementById('sbPanel').innerHTML=SB_BODY[i]; };
I.story = ()=>window.sbGo(0);

/* ═══════════ COVERAGE MAP ═══════════ */
const COVERAGE=[['Restaurants',100],['AI Models',92],['AI Agents',78],['Marketing',70],['Healthcare',60],['Finance',48],['Education',42],['Legal',64],['Ecommerce',55],['Creators',38],['Construction',20],['Manufacturing',14]];
const CLUSTER_HEALTH=[['AI Agents',['Authority',82],['Links',70],['Reviews',90],['Comparison',75],['Marketplace',60],['Academy',55],['Business',80]],['Restaurants',['Authority',31],['Links',40],['Reviews',50],['Comparison',20],['Marketplace',45],['Academy',10],['Business',35]]];
function heat(v){ if(v>=85)return '#2E8B57'; if(v>=60)return '#B28A42'; if(v>=35)return '#C67A00'; return '#B83C3C'; }
V.coverage = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Coverage Map · where AGNUS is strong & blind</div>
  <h1>See your authority as a map.</h1>
  <p>Green means owned. Amber means partial. Red means an open opportunity a competitor could take.</p>
</div>
<div class="cov-grid">${COVERAGE.map(c=>`<div class="cov-cell" style="--c:${heat(c[1])}"><div class="cov-v">${c[1]}%</div><div class="cov-n">${c[0]}</div><div class="cov-bar">${meter(c[1])}</div></div>`).join('')}</div>
<div class="sec-title"><h2>Cluster health</h2><span class="tiny muted">7 dimensions per cluster</span></div>
${CLUSTER_HEALTH.map(ch=>`<div class="card" style="padding:20px 24px;margin-bottom:14px">
  <div class="row" style="margin-bottom:14px"><h3 style="margin:0;font-size:17px;font-weight:700;letter-spacing:-0.02em">${ch[0]}</h3><div class="grow"></div><span class="pill ${ch[1][1]>=70?'green':'warn'}">${ch[1][1]>=70?'Strong':'Needs work'}</span></div>
  <div class="opp-bars" style="grid-template-columns:repeat(3,1fr)">${ch.slice(1).map(d=>`<div class="opp-bar"><div class="ob-top"><span class="k" style="color:var(--ink-soft)">${d[0]}</span><span class="v" style="color:var(--gold-deep)">${d[1]}</span></div>${meter(d[1])}</div>`).join('')}</div>
</div>`).join('')}`;

/* ═══════════ OPPORTUNITY CENTER ═══════════ */
const OPPS=[
  ['Keyword','best ai tools for restaurants','8.7','Low competition · High affiliate','Write buying guide'],
  ['Gap','No pillar for "AI Agents for SMBs"','High','Rising demand, cluster gap','Create pillar'],
  ['Refresh','ChatGPT review is stale','Urgent','Pricing changed, -4 positions','Update now'],
  ['Affiliate','Harvey AI launched a program','€480/mo','Recurring, 90-day cookie','Add to Lawyers guide'],
  ['Industry','Dental clinics underserved','8.9','Almost no competition','Launch collection'],
  ['Link','RAG ↔ Vector DBs unconnected','Compounding','Strengthens 8 articles','Add links'],
  ['Trend','Computer-use agents spiking','High','Anthropic + OpenAI both shipped','Explainer + compare']
];
V.opportunity = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Opportunity Center · 7 live</div>
  <h1>Every opening, in one place.</h1>
  <p>Keywords, gaps, refreshes, affiliate programs and trends — ranked, with the exact next action.</p>
</div>
<div class="linklist">${OPPS.map((o,i)=>`<div class="linkrec"><div class="ln">${i+1}</div><div class="lt">
  <div class="row" style="gap:8px;margin-bottom:6px"><span class="pill ${o[0]==='Refresh'?'red':o[0]==='Affiliate'?'green':'gold'}">${o[0]}</span><span class="lh">${o[1]}</span></div>
  <div class="lr">${o[3]} · <b style="color:var(--ink)">${o[2]}</b></div></div>
  <button class="b b-dark b-sm" style="align-self:center" onclick="openCreate('${o[1].replace(/"/g,'')}')">${o[4]}</button></div>`).join('')}</div>`;

/* ═══════════ REPORTS ═══════════ */
V.reports = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Reports</div>
  <h1>The story of AGNUS, on a page.</h1>
</div>
<div class="an-grid" style="margin-bottom:24px">${[['Articles published','214','+18 this mo'],['Total traffic','142k','+14%'],['Affiliate revenue','€740','+€120'],['Avg authority','7.4','+0.6']].map(m=>`<div class="metric"><div class="ml">${m[0]}</div><div class="mv">${m[1]}</div><div class="md"><span class="up">▲ ${m[2]}</span></div></div>`).join('')}</div>
<div class="kw-grid">
  ${[['Weekly Intelligence','Every Friday · 4,200 subscribers · 38% open rate','Newsletter'],['Content velocity','4.5 articles/week · trending up','Production'],['Cluster growth','8 clusters · 2 near authority','Authority'],['Revenue mix','Affiliate 17% · Premium 49% · Marketplace 34%','Business']].map(r=>`<div class="kw"><div class="kw-top"><h3 style="font-family:var(--font-sans);font-weight:700">${r[0]}</h3><span class="pill ghost">${r[2]}</span></div><p class="muted" style="font-size:13.5px;margin:0">${r[1]}</p></div>`).join('')}
</div>`;

/* ═══════════ DATABASES ═══════════ */
V.db_companies = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Company Database · single source of truth</div>
  <h1>Every AI company AGNUS writes about.</h1>
  <p>One record per company — products, models, pricing, articles, timeline and affiliate status. Articles read from here, so AGNUS never contradicts itself.</p>
</div>
<div class="db-detail card">
  <div class="db-head"><div class="lo">O</div><div><h2>OpenAI</h2><div class="sub">Foundation model lab · San Francisco</div></div><div class="grow"></div><span class="pill gold">Verified record</span></div>
  <div class="db-cols">
    <div class="db-col"><h4>Products</h4>${['ChatGPT','GPT-5 API','Sora','o4 reasoning','Operator'].map(p=>`<div class="src-line">${p}</div>`).join('')}</div>
    <div class="db-col"><h4>Pricing</h4>${[['ChatGPT Plus','$20/mo'],['GPT-5 API','$10/1M in'],['Pro','$200/mo'],['Team','$25/seat']].map(p=>`<div class="src-line">${p[0]}<span class="w">${p[1]}</span></div>`).join('')}</div>
    <div class="db-col"><h4>Linked articles</h4>${['GPT-5 launch','ChatGPT review','GPT-5 vs Claude','Agent framework','50 GPT-5 prompts'].map(p=>`<div class="src-line" style="color:var(--sapphire)">▷ ${p}</div>`).join('')}</div>
  </div>
  <h4 style="margin:20px 0 12px;font-family:var(--font-mono);font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-mute)">Model timeline</h4>
  <div class="mem-chain">${['GPT-3','GPT-3.5','GPT-4','GPT-4o','GPT-5'].map((m,i)=>`${i>0?'<span class="mem-arrow">→</span>':''}<span class="mem-node ${i===4?'now':''}">${m}</span>`).join('')}</div>
  <div class="db-foot"><div class="aff-row" style="max-width:340px"><span class="k">Affiliate</span><span class="v" style="color:var(--success)">Active · €4,820/mo</span></div></div>
</div>
<div class="sec-title"><h2>All companies</h2></div>
<div class="row" style="gap:8px;flex-wrap:wrap">${['OpenAI','Anthropic','Google','Meta','Mistral','xAI','Cohere','Hugging Face','Perplexity','Microsoft'].map((c,i)=>`<span class="pill ${i===0?'dark':'ghost'}">${c}</span>`).join('')}</div>`;

V.db_products = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Product Database</div>
  <h1>Every product, fully specced.</h1>
  <p>Price, API, features, pros, cons and full version history — the canonical record every review and comparison reads from.</p>
</div>
<div class="db-detail card">
  <div class="db-head"><div class="lo">A</div><div><h2>Claude</h2><div class="sub">by Anthropic · AGNUS Score 9.6</div></div><div class="grow"></div><span class="pill gold">✦ Verified</span></div>
  <div class="db-cols">
    <div class="db-col"><h4>Key facts</h4>${[['Price','$20/mo'],['API','$3/1M in'],['Context','200k tokens'],['Best for','Reasoning']].map(p=>`<div class="src-line">${p[0]}<span class="w">${p[1]}</span></div>`).join('')}</div>
    <div class="db-col"><h4>Strengths</h4>${['Deepest reasoning','Long-form writing','Safety & nuance','Computer use'].map(p=>`<div class="src-line"><span class="ck">✓</span> ${p}</div>`).join('')}</div>
    <div class="db-col"><h4>Weaknesses</h4>${['No native image gen','Smaller plugin ecosystem','Usage limits on Pro'].map(p=>`<div class="src-line" style="color:var(--warn)">– ${p}</div>`).join('')}</div>
  </div>
  <h4 style="margin:20px 0 12px;font-family:var(--font-mono);font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-mute)">Version history</h4>
  <div class="mem-chain">${['Claude 1','Claude 2','Claude 3','Claude 3.5','Claude 4.5'].map((m,i)=>`${i>0?'<span class="mem-arrow">→</span>':''}<span class="mem-node ${i===4?'now':''}">${m}</span>`).join('')}</div>
</div>
<div class="sec-title"><h2>All products</h2></div>
<div class="row" style="gap:8px;flex-wrap:wrap">${['Claude','ChatGPT','Gemini','Cursor','Perplexity','Midjourney','Runway','ElevenLabs','Notion AI','Harvey'].map((c,i)=>`<span class="pill ${i===0?'dark':'ghost'}">${c}</span>`).join('')}</div>`;

V.db_people = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> People Database</div>
  <h1>The people shaping AI.</h1>
  <p>Founders, researchers and executives — so AGNUS attributes quotes and decisions accurately.</p>
</div>
<div class="persona-grid">${[
  ['Sam Altman','CEO, OpenAI','Leads ChatGPT, GPT-5 and the agent push.'],
  ['Dario Amodei','CEO, Anthropic','Founded Anthropic; drives Claude and AI safety.'],
  ['Demis Hassabis','CEO, Google DeepMind','Leads Gemini; Nobel laureate (chemistry).'],
  ['Mira Murati','Founder, Thinking Machines','Former OpenAI CTO; new research lab.']
].map(p=>`<div class="persona"><div class="persona-top"><div class="em">◐</div><div><h3>${p[0]}</h3><div class="model">${p[1]}</div></div></div><p class="desc">${p[2]}</p></div>`).join('')}</div>`;

/* ═══════════ CONTENT LIBRARY + MEDIA GENERATOR ═══════════ */
const LIB=[['Comparison tables','24','▤'],['Case studies','18','▢'],['Charts','31','📊'],['Diagrams','12','◈'],['Stat blocks','40','#'],['Pull quotes','27','❝'],['Prompt blocks','55','¶'],['Frameworks','9','◇'],['Timelines','14','↻']];
const MEDIA=[['Hero image','16:9'],['YouTube thumbnail','16:9'],['LinkedIn','1.91:1'],['Instagram','1:1'],['Pinterest','2:3'],['Newsletter cover','3:1'],['OG image','1.91:1']];
V.library = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Content Library · reusable building blocks</div>
  <h1>Build once. Reuse everywhere.</h1>
  <p>Drag any block into an article. Update it here and every article that uses it updates too.</p>
</div>
<div class="lib-grid">${LIB.map(l=>`<div class="lib-tile"><div class="lib-ic">${l[2]}</div><div class="lib-n">${l[0]}</div><div class="lib-c">${l[1]} blocks</div><button class="b b-line b-sm b-block" style="margin-top:12px">Browse</button></div>`).join('')}</div>
<div class="sec-title"><h2>Media Generator</h2><span class="tiny muted">one click · always on brand</span></div>
<div class="gap-alert" style="margin-bottom:18px"><span class="ic">✦</span><div>Ivory background, charcoal type, soft gold accent — every format generated from one source image, automatically.</div></div>
<div class="lib-grid">${MEDIA.map(m=>`<div class="lib-tile"><div style="aspect-ratio:16/9;border-radius:10px;background:linear-gradient(135deg,var(--paper-2),var(--gold-soft));border:1px solid var(--line);display:grid;place-items:center;color:var(--ink-faint);font-family:var(--font-mono);font-size:10px;margin-bottom:10px">${m[1]}</div><div class="lib-n">${m[0]}</div><button class="b b-dark b-sm b-block" style="margin-top:10px">Generate</button></div>`).join('')}</div>`;

})();

/* === dash-ikea.js === */
/* AGNUS Dashboard — Article Pipeline v5 (clean rebuild) */
(function(){
var V = window.VIEWS = window.VIEWS || {};
var I = window.VIEW_INIT = window.VIEW_INIT || {};
function m(v,c){ return '<div class="meter '+(c||'')+'" style="background-size:'+v+'% 100%"></div>'; }

/* ── persistent state ── */
var _lastKw = window._lastKw = '';
var stepState = window._agnusStepState = {
  0:{keyword:'',outputs:{},log:[]},1:{outputs:{},log:[]},2:{outputs:{},log:[]},
  3:{outputs:{},log:[]},4:{outputs:{},log:[]},5:{outputs:{},log:[]},6:{outputs:{},log:[]}
};
var activeMission = window._agnusMission = {
  title:'New Article Mission',
  goal:'Type a keyword in Step 1 to begin.',
  progress:0, currentStep:1, estTime:'22 min', nextAction:'Run Research on a keyword'
};
var activeStep = window._activeStep = 0;

/* ── STEPS ── */
var STEPS=[
  {num:1,tag:'DATA',name:'Research',mission:'Type your topic, then AGNUS scans every connected source — Keyword Discovery, Knowledge Database, Topic Clusters, Entity Manager, Knowledge Graph, Source Scoring — and produces verified research data.',engine:'Research Panel',connectedTo:['Keyword Discovery','Knowledge Sources','Knowledge Database','Knowledge Graph','Source Scoring','Entity Manager','Topic Clusters','Intelligence Feed'],
   autoActions:[{id:'run-research',label:'Run Research',engines:['Keyword Discovery','Knowledge Sources (53)','Knowledge Database','Knowledge Graph','Source Scoring','Entity Manager','Intelligence Feed'],log:['Keyword Discovery scanned 53 sources…','Knowledge Database matched entities…','Knowledge Graph extracted entities…','Source Scoring: avg trust 94%…'],outputs:{}},{id:'refresh',label:'Refresh Sources',engines:['Knowledge Sources'],log:['Re-scanning sources…'],outputs:{}}],
   manualActions:[{id:'edit-kw',label:'Edit keyword',type:'text',field:'keyword',placeholder:'e.g. classic cars Fiat 500'},{id:'add-source',label:'Add source',type:'url',field:'newSource',placeholder:'https://example.com'},{id:'edit-res',label:'Edit research notes',type:'textarea',field:'resNotes',placeholder:'Add context…'}]},
  {num:2,tag:'PLAN',name:'Strategy',mission:'Story Builder turns research into a clear strategic direction before writing begins.',engine:'Story Builder',connectedTo:['Story Builder','Knowledge Database','Topic Clusters'],
   autoActions:[{id:'gen-strategy',label:'Generate Strategy',engines:['Story Builder','Knowledge Database','Topic Clusters'],log:['Story Builder reading research…','Audience profile matched…','Topic Clusters identified gap…','E-E-A-T direction set…'],outputs:{}}],
   manualActions:[{id:'edit-angle',label:'Edit article angle',type:'text',field:'angle',placeholder:'Your unique angle…'},{id:'edit-audience',label:'Edit target audience',type:'text',field:'audience',placeholder:'Who is this for?'}]},
  {num:3,tag:'BRIEF',name:'Brief',mission:'Translate strategy into a detailed brief. Every H2 is a content contract — purpose, word count, entities, affiliate placement and internal link defined before writing begins.',engine:'Brief Builder',connectedTo:['Story Builder','Research Panel','Topic Clusters','Knowledge Database'],
   autoActions:[{id:'gen-brief',label:'Generate Brief',engines:['Brief Builder','Story Builder','Knowledge Database'],log:['Brief Builder reading strategy + audience profile…','H2 structure generated for '+(_lastKw||'this topic')+'…','Word allocation set per section (total ~2,400 words)…','Affiliate placements + internal links mapped…'],outputs:{}}],
   manualActions:[{id:'add-h2',label:'Add H2',type:'text',field:'newH2',placeholder:'New section heading…'}]},
  {num:4,tag:'BUILD',name:'Blueprint',mission:'Configure the AI writer. Writing style, prompt, schema, images, word allocation.',engine:'Blueprint Engine',connectedTo:['Blueprint Library','Prompt Library','AI Templates'],
   autoActions:[{id:'gen-blueprint',label:'Generate Blueprint',engines:['Blueprint Engine','Prompt Library','Blueprint Library'],log:['Blueprint Engine reading brief…','Prompt Library selected…','Schema plan set…','Image plan set…'],outputs:{}}],
   manualActions:[{id:'edit-prompt',label:'Edit prompt',type:'textarea',field:'prompt',placeholder:'Custom writing instructions…'}]},
  {num:5,tag:'WRITE',name:'Create',mission:'Generate the full article from the approved blueprint.',engine:'AI Writer',connectedTo:['AI Writer','Prompt Library','Knowledge Database'],
   autoActions:[{id:'generate',label:'Generate Full Article',engines:['AI Writer (GPT-5)','Prompt Library','Knowledge Database'],log:['AI Writer reading blueprint…','Generating Introduction…','Generating core sections…','Generating FAQs and metadata…'],outputs:{}}],
   manualActions:[{id:'write',label:'Open AI Writer → pre-loaded',type:'link',target:'writer'}]},
  {num:6,tag:'ENRICH',name:'Enrich',mission:'Run all enrichment engines — SEO, E-E-A-T, Semantic, Voice, AI Search, Links, Images, Schema.',engine:'8 Enrichment Engines',connectedTo:['SEO Analyzer','Trust Engine','Semantic Engine','Voice Engine','AI Search Optimizer','Knowledge Graph','Image Engine','Schema Engine'],
   enrichModules:[{id:'seo',name:'SEO',engine:'SEO Analyzer',output:['Keyword density','Title','Slug','Description']},{id:'eeat',name:'E-E-A-T',engine:'Trust Engine',output:['Experience','Expertise','Authority','Trust']},{id:'semantic',name:'Semantic',engine:'Semantic Engine',output:['Entities','Related concepts']},{id:'voice',name:'Voice',engine:'Voice Engine',output:['Voice questions','Featured snippet']},{id:'ai',name:'AI Search',engine:'AI Search Optimizer',output:['ChatGPT ready','Gemini ready']},{id:'links',name:'Internal Links',engine:'Knowledge Graph',output:['Link suggestions']},{id:'images',name:'Images',engine:'Image Engine',output:['Alt text','Compression']},{id:'schema',name:'Schema',engine:'Schema Engine',output:['Article','FAQ','HowTo']}],
   autoActions:[{id:'run-all',label:'Run All Engines',engines:['All 8 engines'],log:['Running all engines…'],outputs:{}}],
   manualActions:[{id:'edit-enrich',label:'Edit any output',type:'link',target:'writer'}]},
  {num:7,tag:'CHECK',name:'Verify',mission:'Confirm every enrichment passed.',engine:'Verification Engine',connectedTo:['All Enrichment Engines','Human Review','Publishing Calendar'],
   autoActions:[{id:'verify',label:'Run Verification',engines:['Verification Engine'],log:['Running all checks…','8 of 8 complete…','No failures detected…'],outputs:{}}],
   manualActions:[{id:'approve',label:'Manually approve',type:'link',target:'review'}]},
  {num:8,tag:'VIEW',name:'Preview',mission:'See the final experience in six preview modes before publishing.',engine:'Preview Engine',connectedTo:['Preview Engine','WordPress','Ghost','Webflow'],
   autoActions:[{id:'gen-preview',label:'Generate Previews',engines:['Preview Engine'],log:['Generating desktop…','Generating mobile…','Generating Google card…','Generating AI search answer…'],outputs:{}}],
   manualActions:[{id:'share',label:'Copy preview link',type:'link',target:null}]},
  {num:9,tag:'PUBLISH',name:'Publish',mission:'Push to your destination.',engine:'Publishing Engine',connectedTo:['Publishing Calendar','WordPress','Ghost','Webflow','Content Archive'],
   autoActions:[{id:'publish-now',label:'Publish Now',engines:['Publishing Engine','CMS Connector'],log:['Connecting to CMS…','Uploading article…','Setting canonical URL…','Updating sitemap…'],outputs:{}},{id:'schedule',label:'Schedule',engines:['Publishing Calendar'],log:['Opening calendar…'],outputs:{}}],
   manualActions:[{id:'export-html',label:'Export HTML',type:'link',target:null}]},
  {num:10,tag:'TRACK',name:'Performance',mission:'Monitor the living asset.',engine:'Analytics Engine',connectedTo:['Google Search Console','Google Analytics','Content Archive','AI Search Monitors'],
   autoActions:[{id:'monitor',label:'Start Monitoring',engines:['Analytics Engine','Search Console','AI Monitors'],log:['Connecting to Search Console…','Monitoring AI search…','Tracking affiliate conversions…'],outputs:{}}],
   manualActions:[{id:'refresh',label:'Mark for refresh',type:'link',target:'pipeline'}]}
];

/* ── mission header ── */
function missionHeader(){
  if(window._agnusMission) activeMission=window._agnusMission;
  var s=STEPS[activeStep]||STEPS[0];
  return '<div class="mc-mission-header"><div class="mcm-inner"><div class="mcm-left">'
    +'<div class="mcm-label">MISSION</div><div class="mcm-title">'+activeMission.title+'</div>'
    +'<div class="mcm-goal">'+activeMission.goal+'</div></div>'
    +'<div class="mcm-right">'
    +'<div class="mcm-stat"><div class="mcm-sl">Progress</div><div class="mcm-prog">'+m(activeMission.progress,'green')+'<span class="mcm-pct">'+activeMission.progress+'%</span></div></div>'
    +'<div class="mcm-stat"><div class="mcm-sl">Current Step</div><div class="mcm-step-badge">&#9654; STEP '+s.num+' &mdash; '+s.name.toUpperCase()+'</div></div>'
    +'<div class="mcm-stat"><div class="mcm-sl">Next Action</div><div class="mcm-na">'+activeMission.nextAction+'</div></div>'
    +'<div class="mcm-stat"><div class="mcm-sl">Est. Time Left</div><div class="mcm-time">'+activeMission.estTime+'</div></div>'
    +'<button class="b b-gold mcm-cta" onclick="consoleContinue()">Continue &rarr;</button>'
    +'</div></div></div>';
}

/* ── expandable panel helper ── */
function discPanel(title, metrics, sections, ctaHtml){
  return '<div class="disc-summary">'
    +'<div class="disc-kw-hero" style="font-size:18px">'+title+'</div>'
    +'<div class="disc-metrics">'+metrics.map(function(mm){return '<div class="dm-stat"><div class="dm-l">'+mm[0]+'</div><div class="dm-v '+(mm[2]||'')+'">'+mm[1]+'</div></div>';}).join('')+'</div>'
    +'<div class="disc-sections">'+sections.map(function(sec){
      return '<div class="disc-sec"><div class="disc-sec-h" onclick="toggleDiscSection(this)"><span class="dsh-ic">'+sec.icon+'</span><span class="dsh-label">'+sec.label+'</span><span class="dsh-arr">&#8250;</span></div><div class="disc-sec-body">'+sec.body+'</div></div>';
    }).join('')+'</div>'+(ctaHtml||'')+'</div>';
}
window.bpTab=function(tab,el){
  if(el)[...el.parentElement.children].forEach(function(b){b.classList.toggle('on',b===el);});
  var body=document.getElementById('bpBody'); if(!body)return;
  if(tab==='schema'){
    body.innerHTML='<div class="bp-sec"><div class="bps-head" style="background:var(--paper)"><div class="bps-num">S</div><div class="bps-h2">Schema markup plan</div></div><div class="bps-prompt"><div class="bps-plabel">Types to apply</div><ul style="margin:0;padding-left:18px;font-size:13px;color:var(--ink-soft)"><li>Article (datePublished, author, publisher, headline)</li><li>FAQPage (all FAQ section questions + answers)</li><li>HowTo (buying checklist steps)</li><li>ItemList (models or tools listed)</li><li>BreadcrumbList (cluster navigation)</li></ul><div class="bps-plabel" style="margin-top:12px">Auto-injected by</div><div class="bps-ptext">Schema Engine &mdash; runs after article draft is approved. Validated against Google Rich Results Test before publishing.</div></div></div>';
  } else if(tab==='images'){
    body.innerHTML='<div style="font-family:var(--font-mono);font-size:9.5px;letter-spacing:0.1em;text-transform:uppercase;color:var(--gold-deep);margin-bottom:12px">Image brief</div><div class="brief-sections" style="gap:8px">'+['Hero image','Section 2 visual','Section 3 infographic','OG / Social image'].map(function(s,i){return '<div class="brief-sec"><div class="bs-head"><div class="bs-num">'+(i+1)+'</div><div class="bs-h2">'+s+'</div><div class="bs-words">Required</div></div><div class="bsa" style="border-top:none"><span class="bsa-k">Brief</span><span class="bsa-v">Editorial, warm light, AGNUS brand treatment (charcoal/ivory/gold). No stock clichés.</span></div></div>';}).join('')+'</div>';
  } else {
    /* prompts tab — re-render from saved html */
    var saved=body.querySelector('.bp-prompts'); if(!saved)return;
    body.innerHTML='<div class="bp-prompts">'+saved.innerHTML+'</div>';
  }
};
/* ── Mission Type ── */
window._missionType = 'single';
window.setMtype = function(type, el){
  window._missionType = type;
  document.querySelectorAll('.mtype-card').forEach(function(b){b.classList.toggle('on',b===el);});
  var cp = document.getElementById('clusterPlanner');
  if(type==='cluster' && !cp){
    var sec = el.closest('.step-card-body').querySelector('.kw-input-section');
    if(sec){
      var div = document.createElement('div');
      div.id = 'clusterPlanner';
      div.className = 'step-section';
      div.innerHTML = '<div class="ss-label">CLUSTER SYSTEM</div><div class="cluster-planner-banner">&#9670; AGNUS will plan your full cluster after you enter the pillar keyword below. Pillar + up to 12 supporting articles, each with keyword, role, traffic estimate and internal link targets.</div>';
      sec.parentNode.insertBefore(div, sec);
    }
  } else if(cp && type!=='cluster'){ cp.remove(); }
};

window.toggleDiscSection=function(el){ el.closest('.disc-sec').classList.toggle('open'); };

/* ══════════════════════ RESEARCH CONSOLE (tabbed, step 2) ══════════════════════ */
var RSRCH_TABS=[
  ['intel','Keyword Intel','<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="9" r="6"/><path d="M14 14l4 4"/></svg>'],
  ['comp','Competitors','<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="7" cy="6" r="2.6"/><circle cx="14" cy="7" r="2.1"/><path d="M2.5 16c0-3 2-5 4.5-5s4.5 2 4.5 5"/><path d="M12.2 11.3c2 .2 3.3 2 3.3 4.7"/></svg>'],
  ['paa','PAA','<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h12v9H8l-4 3V4z"/><circle cx="8" cy="8.3" r=".6" fill="currentColor" stroke="none"/><circle cx="10.6" cy="8.3" r=".6" fill="currentColor" stroke="none"/><circle cx="13.2" cy="8.3" r=".6" fill="currentColor" stroke="none"/></svg>'],
  ['voice','Voice Search','<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="7.5" y="2.5" width="5" height="8.5" rx="2.5"/><path d="M4.5 9.5a5.5 5.5 0 0011 0"/><path d="M10 15v2.5M7 17.5h6"/></svg>'],
  ['sem','Semantic','<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="4.5" cy="5" r="2"/><circle cx="15.5" cy="5" r="2"/><circle cx="10" cy="15" r="2"/><path d="M6.2 6.2L9 13.3M13.8 6.2L11 13.3M6.5 5h7"/></svg>'],
  ['ent','Entities','<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="6" height="6" rx="1.4"/><rect x="11" y="11" width="6" height="6" rx="1.4"/><path d="M9 6h4a2 2 0 012 2v3"/></svg>'],
  ['src','Sources','<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 3h7l3 3v11a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z"/><path d="M12 3v3h3M6.5 10h7M6.5 12.7h7M6.5 15.3h4"/></svg>'],
  ['img','Images','<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.5" y="4" width="15" height="12" rx="1.6"/><circle cx="7" cy="8.3" r="1.4"/><path d="M2.5 14l4.2-4 3 3 3-4.5 4.8 5.5"/></svg>'],
  ['vid','Videos','<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.5" y="5" width="11" height="10" rx="1.6"/><path d="M13.5 8.3l4-2.3v8l-4-2.3z"/></svg>'],
  ['study','Studies','<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3.5 16.5v-5M8 16.5v-8M12.5 16.5v-3M17 16.5V6"/></svg>']
];
function typeWord(t){ return t.car?'car':t.ai?'ai':t.food?'food':t.legal?'legal':t.travel?'travel':t.health?'health':t.finance?'finance':t.tech?'tech':t.education?'education':t.realestate?'realestate':'generic'; }
var RSRCH_BRANDS={
  car:['Hagerty','eBay Motors','Bring a Trailer','Classic.com','AutoTrader'],
  ai:['OpenAI','HubSpot','Zapier','Anthropic','Google'],
  food:['OpenTable','Toast','Square','OpenAI','Restaurant365'],
  legal:['Clio','LawPay','Westlaw','LexisNexis','Avvo'],
  travel:['Booking.com','TripAdvisor','Airbnb','Lonely Planet','Expedia'],
  health:['WebMD','Healthline','Mayo Clinic','NHS','Cleveland Clinic'],
  finance:['NerdWallet','Investopedia','Bankrate','Forbes','Bloomberg'],
  tech:['G2','TechRadar','Product Hunt','Capterra','GitHub'],
  education:['Coursera','Udemy','edX','LinkedIn Learning','Khan Academy'],
  realestate:['Zillow','Rightmove','Redfin','Realtor.com','Trulia'],
  generic:['Google','HubSpot','Wikipedia','Reuters','Reddit']
};
function genPAAList(kw,t){
  var tw=typeWord(t);
  var subj=kw.split(' ').slice(-2).join(' ')||kw;
  var tmpl=[
    ['What is {kw}?','Informational'],['Can {kw} help my business?','Commercial'],
    ['How much does {kw} cost?','Commercial'],['Is {kw} worth it?','Commercial'],
    ['How does {kw} work?','Informational'],['What are the best options for {kw}?','Commercial'],
    ['Is {kw} reliable?','Informational'],['What are the alternatives to {kw}?','Commercial'],
    ['How do I get started with {kw}?','Informational'],['What should I look for in {kw}?','Commercial'],
    ['Is {kw} safe?','Informational'],['How long does {kw} take?','Informational'],
    ['What are common mistakes with {kw}?','Informational'],['Who should use {kw}?','Informational'],
    ['What is the ROI of {kw}?','Commercial'],['Can {kw} replace a professional?','Commercial'],
    ['What tools are used for {kw}?','Commercial'],['How do experts approach {kw}?','Informational'],
    ['What is the future of {kw}?','Informational'],['How do I compare {kw} options?','Commercial'],
    ['What are the risks of {kw}?','Informational'],['Is {kw} beginner-friendly?','Informational']
  ];
  var sources=['Google','Reddit','Quora','Bing'];
  var out=[];
  for(var i=0;i<42;i++){
    var base=tmpl[i%tmpl.length];
    var q=base[0].replace(/\{kw\}/g,kw);
    if(i>=tmpl.length) q=q.replace('?', ' for '+subj+'?');
    out.push({q:q,intent:base[1],source:sources[i%sources.length],idx:i});
  }
  return out;
}
function voiceVariants(q){
  var clean=q.replace(/\?$/,'');
  var lower=clean.charAt(0).toLowerCase()+clean.slice(1);
  return [
    'Hey Google, '+lower+'?',
    'Alexa, '+lower+'?',
    'Siri, can you tell me '+lower+'?'
  ];
}
function paaDetailPanel(){
  var st=window._rsrch, item=st.list[st.active];
  var brands=RSRCH_BRANDS[typeWord(st.t)];
  var rel=st.kw.split(' ').concat(['ai '+st.kw.split(' ')[0], st.kw+' tools', st.kw+' guide']).slice(0,4);
  return '<div class="paa-detail-h"><h3>'+item.q+'</h3><button class="paa-detail-x" onclick="rsrchCloseDetail()">&times;</button></div>'
    +'<div class="paa-d-row"><div class="paa-d-k">Source</div><div class="paa-d-v">'+item.source+' Search</div></div>'
    +'<div class="paa-d-row"><div class="paa-d-k">Search Intent</div><div class="paa-d-v"><span class="pill '+(item.intent==='Commercial'?'gold':'')+'">'+item.intent+'</span></div></div>'
    +'<div class="paa-d-row"><div class="paa-d-k">Appears On</div><div class="paa-d-v"><div class="paa-chips">'+brands.slice(0,3).map(function(b){return '<span class="paa-brand-chip">'+b+'</span>';}).join('')+'<span class="paa-brand-chip more">+'+(brands.length-3)+' more</span></div></div></div>'
    +'<div class="paa-d-row"><div class="paa-d-k">Related Keywords</div><div class="paa-d-v"><div class="paa-chips">'+rel.map(function(r){return '<span class="paa-kw-chip">'+r+'</span>';}).join('')+'</div></div></div>'
    +'<div class="paa-d-row"><div class="paa-d-k">Voice Variants (3)</div><div class="paa-d-v"><div class="paa-voice-list">'
      +voiceVariants(item.q).map(function(v){
        return '<div class="paa-voice-row"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" width="13" height="13"><rect x="7.5" y="2.5" width="5" height="8.5" rx="2.5"/><path d="M4.5 9.5a5.5 5.5 0 0011 0"/></svg> '+v+'</div>';}).join('')
    +'</div></div></div>'
    +'<div class="paa-d-actions">'
    +'<button class="b b-gold b-sm" onclick="rsrchImportOne()"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" width="13" height="13"><path d="M8 2v8M4.5 6.5L8 10l3.5-3.5M3 13h10"/></svg> Import</button>'
    +'<button class="b b-line b-sm" onclick="rsrchPinOne()"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" width="13" height="13"><path d="M8 2l1.4 3.2L13 6l-2.6 2.3.6 3.4L8 10 4.9 11.7l.7-3.4L3 6l3.6-.8z"/></svg> Pin to Brief</button>'
    +'<button class="b b-line b-sm" onclick="rsrchIgnoreOne()">Ignore</button>'
    +'<button class="b b-line b-sm" onclick="GO(\'research\')">Open Source</button>'
    +'</div>';
}
function renderResearchConsole(){
  var st=window._rsrch;
  var tabsHtml='<div class="rsrch-tabs">'+RSRCH_TABS.map(function(tb){return '<button class="rsrch-tab '+(st.tab===tb[0]?'on':'')+'" onclick="rsrchTab(\''+tb[0]+'\',this)"><span class="rt-ic">'+tb[2]+'</span>'+tb[1]+'</button>';}).join('')+'</div>';
  return tabsHtml+'<div id="rsrchBody">'+researchTabBody()+'</div>';
}
function researchTabBody(){
  var st=window._rsrch;
  if(st.tab==='paa') return researchPAABody();
  if(st.tab==='intel') return researchIntelBody();
  if(st.tab==='comp') return researchCompBody();
  if(st.tab==='voice') return researchVoiceBody();
  if(st.tab==='sem') return researchSemBody();
  if(st.tab==='ent') return researchEntBody();
  if(st.tab==='src') return researchSrcBody();
  if(st.tab==='img') return researchImgBody();
  if(st.tab==='vid') return researchVidBody();
  if(st.tab==='study') return researchStudyBody();
  return '';
}
function researchPAABody(){
  var st=window._rsrch, total=st.list.length, start=(st.page-1)*st.perPage, page=st.list.slice(start,start+st.perPage);
  var pages=Math.ceil(total/st.perPage);
  var selCount=Object.keys(st.sel).length;
  var rows=page.map(function(item){
    var checked=!!st.sel[item.idx];
    return '<div class="paa-row '+(st.active===item.idx?'on':'')+'" onclick="rsrchSelectQ('+item.idx+')">'
      +'<input type="checkbox" onclick="event.stopPropagation();rsrchToggleRow('+item.idx+')" '+(checked?'checked':'')+'>'
      +'<span class="paa-num">'+(item.idx+1)+'</span>'
      +'<span class="paa-q">'+item.q+'</span>'
      +'<span class="paa-intent '+(item.intent==='Commercial'?'c':'i')+'">'+item.intent+'</span>'
      +'<span class="paa-src">'+item.source+'</span>'
      +'<span class="paa-acts" onclick="event.stopPropagation()"><button title="View" onclick="rsrchSelectQ('+item.idx+')">&#9678;</button><button title="Pin" onclick="rsrchPinOne('+item.idx+')">&#9733;</button><button title="More">&#8942;</button></span>'
      +'</div>';
  }).join('');
  var pager='<div class="paa-pager">'+[1,2,3,4,5].filter(function(p){return p<=pages;}).map(function(p){return '<button class="'+(p===st.page?'on':'')+'" onclick="rsrchPage('+p+')">'+p+'</button>';}).join('')+(pages>5?'<button onclick="rsrchPage('+Math.min(st.page+1,pages)+')">&rarr;</button>':'')+'</div>';
  return '<div class="paa-layout">'
    +'<div class="card paa-card">'
    +'<div class="paa-card-head"><h3>People Also Ask <span class="paa-badge">'+total+' Questions Found</span></h3></div>'
    +'<div class="paa-toolbar"><label class="paa-selall"><input type="checkbox" onclick="rsrchToggleAll(this.checked)"> Select All</label>'
    +'<button class="b b-line b-sm" onclick="rsrchImportSel()">&#8595; Import Selected ('+selCount+')</button>'
    +'<button class="b b-line b-sm" onclick="rsrchAddBrief()">&#8853; Add to Brief</button>'
    +'<button class="b b-line b-sm" onclick="rsrchIgnoreSel()">&#10005; Ignore Selected</button></div>'
    +'<div class="paa-table"><div class="paa-row paa-row-hd"><span></span><span class="paa-num">#</span><span class="paa-q">QUESTION</span><span class="paa-intent">INTENT</span><span class="paa-src">SOURCE</span><span class="paa-acts">ACTIONS</span></div>'+rows+'</div>'
    +'<div class="paa-foot"><span class="tiny muted">Showing '+(start+1)+' to '+Math.min(start+st.perPage,total)+' of '+total+' questions</span>'+pager+'</div>'
    +'</div>'
    +'<div class="card paa-detail-card" id="paaDetail">'+paaDetailPanel()+'</div>'
    +'</div>';
}
function researchIntelBody(){
  var st=window._rsrch, t=st.t, kw=st.kw;
  return '<div class="card" style="padding:18px 20px"><div class="ds-grid">'
    +[['Search volume',t.car?'8,200/mo':t.ai?'12,400/mo':'6,800/mo'],['Trend','Rising 28%'],['Difficulty',t.car?'24/100':'31/100'],
      ['Parent topic',typeWord(t).toUpperCase()],['Long-tail','"'+kw+' guide" · "'+kw+' price" · "'+kw+' review"'],['AI search demand',t.car?'Medium':'High']]
      .map(function(r){return '<div class="ds-row"><span class="ds-k">'+r[0]+'</span><span class="ds-v">'+r[1]+'</span></div>';}).join('')
    +'</div></div>';
}
function researchCompBody(){
  var brands=RSRCH_BRANDS[typeWord(window._rsrch.t)];
  return '<div class="ds-comp-list">'+brands.map(function(b){return '<div class="ds-comp"><div class="ds-comp-n">'+b+'</div><div class="ds-comp-g">Gap: missing "'+window._rsrch.kw+'" specific coverage</div><div class="ds-comp-a">&#10003; Your advantage: depth + specificity</div></div>';}).join('')+'</div>';
}
function researchVoiceBody(){
  var st=window._rsrch;
  return '<div class="paa-voice-list" style="gap:10px">'+st.list.slice(0,6).map(function(item){return '<div class="paa-voice-row" style="font-size:14px;padding:10px 0;border-top:1px solid var(--line-soft)"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" width="14" height="14"><rect x="7.5" y="2.5" width="5" height="8.5" rx="2.5"/><path d="M4.5 9.5a5.5 5.5 0 0011 0"/></svg> '+item.q+'</div>';}).join('')+'</div>';
}
function researchSemBody(){
  var kw=window._rsrch.kw;
  return '<div class="paa-chips" style="gap:8px">'+kw.split(' ').concat(['related concept','topic cluster','entity map','semantic field']).map(function(c){return '<span class="paa-kw-chip" style="font-size:12.5px;padding:7px 12px">'+c+'</span>';}).join('')+'</div>';
}
function researchEntBody(){
  var brands=RSRCH_BRANDS[typeWord(window._rsrch.t)];
  return '<div class="ds-grid">'+brands.map(function(e){return '<div class="ds-row"><span class="ds-k">Entity</span><span class="ds-v">'+e+'</span></div>';}).join('')+'</div>';
}
function researchSrcBody(){
  var brands=RSRCH_BRANDS[typeWord(window._rsrch.t)];
  return '<div class="ds-grid">'+brands.map(function(s,i){return '<div class="ds-row"><span class="ds-k">'+(i<2?'Official':'Community')+'</span><span class="ds-v">'+s+'</span></div>';}).join('')+'</div>';
}
function researchImgBody(){
  return '<div class="lib-grid">'+['Hero image','Comparison graphic','Infographic','Product shot','Social image','Chart'].map(function(n){return '<div class="lib-tile"><div class="lib-ic">&#9633;</div><div class="lib-n">'+n+'</div><div class="lib-c">Suggested asset</div></div>';}).join('')+'</div>';
}
function researchVidBody(){
  var kw=window._rsrch.kw;
  return '<div class="ds-grid">'+['Overview & explainer','Comparison walkthrough','Expert interview'].map(function(v){return '<div class="ds-row"><span class="ds-k">Video</span><span class="ds-v">"'+v+' — '+kw+'"</span></div>';}).join('')+'</div>';
}
function researchStudyBody(){
  var t=window._rsrch.t;
  return '<div class="ds-grid">'+[['Adoption rate',t.car?'+22% YoY (Hagerty)':'+38% YoY (industry report)'],['Market size',t.car?'€2.1B EU market':'Growing double-digit'],['Consumer trust',t.car?'71% research online first':'64% compare before buying']].map(function(r){return '<div class="ds-row"><span class="ds-k">'+r[0]+'</span><span class="ds-v">'+r[1]+'</span></div>';}).join('')+'</div>';
}
window.rsrchTab=function(tab,el){
  window._rsrch.tab=tab;
  if(el)[...el.parentElement.children].forEach(function(b){b.classList.toggle('on',b===el);});
  var body=document.getElementById('rsrchBody'); if(body) body.innerHTML=researchTabBody();
};
window.rsrchPage=function(p){ window._rsrch.page=p; var body=document.getElementById('rsrchBody'); if(body) body.innerHTML=researchTabBody(); };
window.rsrchSelectQ=function(idx){ window._rsrch.active=idx; var d=document.getElementById('paaDetail'); if(d) d.innerHTML=paaDetailPanel();
  document.querySelectorAll('.paa-row').forEach(function(r){ r.classList.remove('on'); });
  var body=document.getElementById('rsrchBody'); if(body) body.innerHTML=researchTabBody();
};
window.rsrchCloseDetail=function(){};
window.rsrchToggleRow=function(idx){ if(window._rsrch.sel[idx]) delete window._rsrch.sel[idx]; else window._rsrch.sel[idx]=1;
  var body=document.getElementById('rsrchBody'); if(body) body.innerHTML=researchTabBody(); };
window.rsrchToggleAll=function(checked){ var st=window._rsrch; if(checked) st.list.forEach(function(i){st.sel[i.idx]=1;}); else st.sel={};
  var body=document.getElementById('rsrchBody'); if(body) body.innerHTML=researchTabBody(); };
window.rsrchImportSel=function(){ var n=Object.keys(window._rsrch.sel).length; if(n) alert(n+' question(s) imported to Brief.'); else alert('Select questions first.'); };
window.rsrchAddBrief=function(){ var n=Object.keys(window._rsrch.sel).length; if(n) alert(n+' question(s) added to Brief.'); else alert('Select questions first.'); };
window.rsrchIgnoreSel=function(){ window._rsrch.sel={}; var body=document.getElementById('rsrchBody'); if(body) body.innerHTML=researchTabBody(); };
window.rsrchImportOne=function(){ alert('Imported to Brief.'); };
window.rsrchPinOne=function(){ alert('Pinned to Brief.'); };
window.rsrchIgnoreOne=function(){ };

/* ── keyword detection ── */
/* ── Media & Assets plan ── */
function buildMediaPlan(kw, t, aud){
  var audShort=(aud||'').split(',')[0]||'your audience';
  var assets=t.car
    ? [{type:'Hero Photo',why:'Car buyers trust visual proof — a beautiful hero image is the #1 conversion signal for this audience.',format:'Editorial photo · cobblestone street · morning light · ivory tone',seo:'filename: '+kw.toLowerCase().replace(/\s+/g,'-')+'-buying-guide-hero.webp · alt: "'+kw+' parked in Rome, classic car buying guide" · ImageObject schema',eeat:'Experience — shows the actual car, signals the author has seen one',semantic:'Entities: '+kw+', classic car, Italy, cobblestones — Google reads image context from surrounding text + alt',ai:'Gemini and ChatGPT will include images with descriptive alt text and question-format captions',ranking:'WebP < 120kb · srcset 480/800/1200 · lazy-load · title attr'},
       {type:'Pricing Infographic',why:'Price data is the #1 question for this keyword — a scannable infographic gets more dwell time than paragraphs.',format:'Condition vs Price Range table · AGNUS charcoal/gold colors · Hagerty source attribution',seo:'filename: '+kw.toLowerCase().replace(/\s+/g,'-')+'-price-guide-infographic.webp · alt: "'+kw+' price guide — project, driver, concours condition ranges 2026"',eeat:'Authoritativeness — cites Hagerty Market Index, demonstrates original data use',semantic:'Concepts covered: market value, condition grades, investment potential — all topically relevant',ai:'Data-forward images are cited by ChatGPT when it answers "how much does a '+kw+' cost?"',ranking:'Embed in article body near Section 3 · include caption with source · add ImageObject to schema'},
       {type:'Inspection Checklist Graphic',why:'The "what to look for" section has the highest scroll depth — a visual checklist keeps readers engaged.',format:'Numbered checklist · simple line illustration per step · AGNUS ivory background',seo:'alt: "'+kw+' pre-purchase inspection checklist — what to check before buying" · HowTo schema',eeat:'Expertise — a specific, expert checklist signals deep knowledge',semantic:'Entities: rust inspection, VIN check, MOT history, engine compression',ai:'HowTo schema + infographic makes this the "featured result" for voice search',ranking:'< 80kb WebP · responsive · title attr = checklist topic'},
       {type:'Video',why:'YouTube embeds extend average time-on-page by 2.4x for this audience — car enthusiasts watch before they buy.',format:'"Is the '+kw+' worth buying?" — 5 min walkaround with expert commentary. Timestamped chapters.',seo:'VideoObject schema: name, description, uploadDate, duration, thumbnailUrl, embedUrl · chapters as clips',eeat:'Experience — real video of the car proves the author has first-hand knowledge',semantic:'Video transcript indexed by Google — adds 800+ words of entity-rich content',ai:'ChatGPT and Perplexity will surface videos with VideoObject schema in their citations',ranking:'YouTube embed (self-hosted as fallback) · < 50kb thumbnail · transcript added as hidden text'},
       {type:'OG / Social Image',why:'This article will be shared — a branded OG image is the difference between a click and a scroll-past.',format:'1200×630px · '+kw+' hero image · AGNUS wordmark · headline text overlay',seo:'og:image + twitter:image meta tags · < 300kb JPG',eeat:'Trust — a professional OG image signals a serious publication',semantic:'N/A — not indexed by Google',ai:'N/A',ranking:'Set in og:image and twitter:image · verify with Open Graph debugger'}]
    : t.ai
    ? [{type:'Hero Image',why:audShort+' make decisions from data, not aesthetics — but a clean editorial hero establishes credibility.',format:'Person at MacBook · warm light · tool interface visible · AGNUS ivory/charcoal palette · no stock clichés',seo:'filename: best-'+kw.toLowerCase().replace(/\s+/g,'-')+'-hero.webp · alt: "Best '+kw+' comparison 2026 — AGNUS tested guide"',eeat:'Trust — editorial photography signals a serious, independent publication',semantic:'Entities: '+kw+', comparison, 2026, expert review — surrounding text reinforces indexing',ai:'Clean, text-capable alt text is cited in ChatGPT answers about tool comparisons',ranking:'WebP < 120kb · srcset · lazy-load'},
       {type:'Comparison Table Graphic',why:'The comparison section is the most-linked and most-shared element — a branded graphic multiplies its reach.',format:'Tool A vs Tool B vs Tool C · feature matrix · AGNUS charcoal/gold colors · G2 ratings visible',seo:'alt: "'+kw+' comparison table 2026 — features, pricing, ratings" · ImageObject schema',eeat:'Authoritativeness — cites G2 data, shows rigorous research',semantic:'Concepts: feature comparison, pricing, user ratings, use cases',ai:'Structured comparison data in image alt is cited by Gemini in "which '+kw+' is best?" queries',ranking:'< 100kb WebP · embed near Section 2 · caption with G2 source'},
       {type:'Setup Screenshot Series',why:'Tutorial sections with step-by-step screenshots reduce bounce rate by 34% for technical content.',format:'3–5 numbered screenshots · UI highlighted · AGNUS annotation style (gold arrows)',seo:'alt per image: "'+kw+' setup step [N] — [what is shown]" · HowTo schema steps',eeat:'Experience — real screenshots prove the author has used the tool',semantic:'Entities: interface elements, settings, dashboard features',ai:'HowTo schema with images is Google&#39;s preferred format for "how to use '+kw+'" queries',ranking:'< 60kb WebP each · inline with steps · title attr = step description'},
       {type:'ROI / Stats Infographic',why:'Business buyers need to justify the decision — a visual ROI summary is the most-shared section of business guides.',format:'Key stats from McKinsey/Gartner · AGNUS charcoal bar chart style · source attribution bottom right',seo:'alt: "'+kw+' ROI and business impact — McKinsey/Gartner data 2026" · ImageObject',eeat:'Authoritativeness — original data visualization from primary sources',semantic:'Concepts: return on investment, adoption rate, productivity gain, cost reduction',ai:'ChatGPT cites stat-forward images with source attribution when answering business ROI questions',ranking:'< 80kb WebP · embed in Section 4 · caption names sources'},
       {type:'OG / Social Image',why:'LinkedIn is a primary channel for this audience — a professional OG image triples click-through from shares.',format:'1200×630px · dark background · gold headline · AGNUS wordmark · tool logo(s)',seo:'og:image + twitter:image · < 300kb',eeat:'Trust',semantic:'N/A',ai:'N/A',ranking:'og:image and twitter:image meta · verify with Open Graph debugger'}]
    : [{type:'Hero Image',why:'A professional hero image is the first trust signal for this audience.',format:'Editorial · warm light · subject-relevant · AGNUS ivory/charcoal',seo:'filename: '+kw.toLowerCase().replace(/\s+/g,'-')+'-guide-hero.webp · descriptive alt text',eeat:'Trust — editorial photography',semantic:'Entities relevant to '+kw+' in surrounding text',ai:'Descriptive alt cited in AI answers',ranking:'WebP < 120kb · srcset · lazy-load'},
       {type:'OG / Social Image',why:'A branded OG image increases social click-through 3×.',format:'1200×630px · headline + AGNUS wordmark',seo:'og:image + twitter:image',eeat:'Trust',semantic:'N/A',ai:'N/A',ranking:'Verify with Open Graph debugger'}];

  return '<div class="media-plan">'
    +'<div class="mp-header">'
    +'<div class="mp-label">&#9670; MEDIA & ASSETS STRATEGY</div>'
    +'<div class="mp-sub">Derived from audience profile: <b>'+audShort+'</b> &mdash; '+assets.length+' assets recommended</div>'
    +'</div>'
    +'<div class="mp-assets">'
    +assets.map(function(a,i){var slotId='media-asset-'+i+'-'+a.type.toLowerCase().replace(/[^a-z0-9]+/g,'-');return '<div class="mp-asset"><div class="mpa-head"><div class="mpa-num">'+(i+1)+'</div><div class="mpa-type">'+a.type+'</div><div class="mpa-slot"><image-slot id="'+slotId+'" shape="rounded" radius="8" placeholder="Drop '+a.type+' here"></image-slot></div></div>'
      +'<div class="mpa-body">'
      +'<div class="mpa-why"><span class="mpak">Why this audience needs it</span><span class="mpav">'+a.why+'</span></div>'
      +'<div class="mpa-why"><span class="mpak">Format</span><span class="mpav">'+a.format+'</span></div>'
      +'<div class="mpa-why"><span class="mpak">SEO spec</span><span class="mpav seo-spec">'+a.seo+'</span></div>'
      +'<div class="mpa-why"><span class="mpak">E-E-A-T</span><span class="mpav" style="color:var(--success)">'+a.eeat+'</span></div>'
      +'<div class="mpa-why"><span class="mpak">Semantic search</span><span class="mpav">'+a.semantic+'</span></div>'
      +'<div class="mpa-why"><span class="mpak">AI search</span><span class="mpav">'+a.ai+'</span></div>'
      +'<div class="mpa-why"><span class="mpak">Google Image ranking</span><span class="mpav">'+a.ranking+'</span></div>'
      +'</div></div>';}).join('')
    +'</div></div>';
}

function detectType(kw){
  var k=(kw||'').toLowerCase();
  return {
    car:/(\bcar\b|fiat|ferrari|bmw|tesla|auto|vehicle|classic|vintage|porsche|alfa|bentley|rolls|lamborghini)/i.test(k),
    ai:/(\bai\b|chatgpt|claude|gpt|llm|agent|artificial intelligence|machine learning|openai|anthropic)/i.test(k),
    food:/(restaurant|food|cafe|bakery|pizza|coffee|hotel|hospitality|recipe|cooking|cuisine)/i.test(k),
    legal:/(\blaw\b|legal|lawyer|attorney|contract|firm|court|litigation)/i.test(k),
    travel:/(travel|trip|visit|living in|expat|moving to|vacation|holiday|tour|destination|city|country|island|beach|mountain)/i.test(k),
    health:/(health|medical|doctor|clinic|dental|hospital|fitness|wellness|nutrition|diet|exercise|therapy)/i.test(k),
    finance:/(finance|invest|stock|crypto|bitcoin|money|bank|mortgage|insurance|retirement|budget|wealth)/i.test(k),
    tech:/(software|app|tool|platform|saas|startup|coding|programming|developer|website|ecommerce|digital)/i.test(k),
    education:/(course|learn|teach|school|university|study|tutorial|training|certification|degree|skill)/i.test(k),
    realestate:/(real estate|property|house|apartment|rent|buy home|mortgage|interior|architecture)/i.test(k)
  };
}

/* ── step card ── */
function stepCard(step, idx){
  var isActive=idx===(window._activeStep||activeStep), isDone=idx<(window._activeStep||activeStep);
  var status=isDone?'done':isActive?'active':'pending';
  var statusLabel=isDone?'&#10003; Finished':isActive?'&#9654; Current Step':'Waiting';
  var statusClass=isDone?'green':isActive?'gold':'ghost';
  var body='';
  if(isActive||isDone){
    if(step.num===1){
      var kw=_lastKw||'';
      var mtype=window._missionType||'single';
      /* Mission Type selector */
      body+='<div class="step-section"><div class="ss-label">WHAT ARE YOU BUILDING?</div>'
        +'<div class="mtype-grid">'
        +[['single','Single Article','One standalone piece. Fast.','&#128203;'],
          ['cluster','Cluster System','Pillar + supporting articles. Authority.','&#9861;'],
          ['series','Content Series','Part 1 → 2 → 3. Sequential.','&#9654;'],
          ['news','News Brief','Rapid publish. No cluster needed.','&#9688;'],
          ['review','Review','Score + verdict + comparison.','&#9733;']]
          .map(function(mt){return '<button class="mtype-card '+(mtype===mt[0]?'on':'')+'" onclick="setMtype(&#39;'+mt[0]+'&#39;,this)">'
            +'<div class="mtc-ic">'+mt[3]+'</div><div class="mtc-name">'+mt[1]+'</div><div class="mtc-desc">'+mt[2]+'</div></button>';}).join('')
        +'</div></div>'
        +(mtype==='cluster'?'<div id="clusterPlanner"><div class="step-section"><div class="ss-label">CLUSTER SYSTEM</div>'
          +'<div class="cluster-planner-banner">&#9670; AGNUS will plan your full cluster after you enter the pillar keyword below. Pillar + up to 12 supporting articles, each with keyword, role, traffic estimate and internal link targets.</div></div></div>':'')
        +(mtype==='series'?'<div class="step-section"><div class="ss-label">SERIES</div><div class="cluster-planner-banner">Enter your series title below. AGNUS will plan the episode structure: Part 1 (foundation) → Parts 2–4 (depth) → Part 5 (synthesis + CTA). Each part links to the next.</div></div>':'');

      body+='<div class="step-section kw-input-section">'
        +'<div class="kw-prompt">Start here &mdash; enter your topic</div>'
        +'<div class="kw-input-wrap"><input type="text" id="kwField" class="kw-main-input" placeholder="e.g. classic cars Fiat 500" value="'+kw+'" oninput="kwUpdate(this.value)">'
        +'<button class="b b-gold kw-discover-btn" id="kwDiscoverBtn" '+(kw?'':'disabled')+' onclick="runAuto(0,0)">Run Research &rarr;</button></div>'
        +(kw?'<div class="kw-from">Starting from: <b>'+kw+'</b></div>':'<div class="kw-hint">Type a topic or keyword to unlock Discover</div>')
        +'</div>';
    }
    /* existing generated output preserved across re-renders */
    var existingOut=document.getElementById('sop'+idx);
    if(existingOut) body+=existingOut.outerHTML;
    if(step.autoActions&&step.autoActions.length&&step.num!==1){
      body+='<div class="step-section"><div class="ss-label">AUTOMATIC</div><div class="step-auto-acts">'+step.autoActions.map(function(a,ai){
        return '<div class="auto-act-block"><button class="b b-dark sa-auto-btn" onclick="runAuto('+idx+','+ai+')">'+a.label+'</button><div class="auto-eng">'+a.engines.map(function(e){return '<span class="ae-chip">'+e+'</span>';}).join('')+'</div></div>';
      }).join('')+'</div></div>';
    }
    if(step.manualActions&&step.manualActions.length&&step.num!==1){
      body+='<div class="step-section"><div class="ss-label">MANUAL</div><div class="step-manual-acts">'+step.manualActions.map(function(a,mi){
        if(a.type==='link') return '<button class="b b-line b-sm" onclick="'+(a.target?'GO(\''+a.target+'\')':'')+'">' +a.label+'</button>';
        return '<button class="b b-line b-sm" onclick="toggleInlineEdit('+idx+','+mi+')">'+a.label+'</button>';
      }).join('')+'</div><div class="inline-edit-panel" id="iep'+idx+'" style="display:none"></div></div>';
    }
    if(step.enrichModules){
      body+='<div class="step-section"><div class="ss-label">ENGINES</div>'
        +'<div class="row" style="gap:9px;margin-bottom:14px"><button class="b b-gold" onclick="runAllEnrich()">Run All</button>'
        +'<div class="enrich-progress-wrap"><div id="enrichProg" style="width:180px">'+m(0)+'</div><span class="tiny muted" id="enrichCount">0 / 8</span></div></div>'
        +'<div class="enrich-grid">'+step.enrichModules.map(function(mod,mi){
          return '<div class="enrich-mod" id="emod'+mi+'"><div class="em-head"><span class="em-name">'+mod.name+'</span><span class="em-status em-pending" id="emst'+mi+'">Pending</span></div>'
            +'<div class="em-engine"><span class="em-el">Engine</span> <span class="em-ev">'+mod.engine+'</span></div>'
            +'<div class="em-output">'+mod.output.map(function(o){return '<div class="em-out-row">&#9633; '+o+'</div>';}).join('')+'</div>'
            +'<button class="b b-line b-sm em-run" onclick="runEnrich('+mi+',this)">Run &rarr;</button></div>';
        }).join('')+'</div></div>';
    }
    body+='<div class="step-section"><div class="ss-label">CONNECTED COMPONENTS</div><div class="ss-conn">'+step.connectedTo.map(function(c){return '<div class="ss-conn-item"><span class="ss-check">&#10003;</span> '+c+'</div>';}).join('')+'</div></div>';
    if(isActive) body+='<div class="step-continue"><button class="b b-gold" onclick="pipeNextStep()">Continue to '+(STEPS[idx+1]?STEPS[idx+1].name:'Finish')+'</button><span class="tiny muted" style="margin-left:12px">or click any step above to jump</span></div>';
  }
  var svgIcon=window.STEP_ICONS&&window.STEP_ICONS[step.tag]?window.STEP_ICONS[step.tag]:'';
  return '<div class="step-card step-'+status+'" id="sc'+idx+'">'
    +'<div class="step-card-head" onclick="openConsoleAtStep('+idx+')">'
    +'<div class="sc-num-icon"><div class="sc-num">'+step.num+'</div><div class="sc-icon-svg">'+svgIcon+'</div></div>'
    +'<div class="sc-title"><div class="sc-name">'+step.name+'</div>'+(isActive?'<div class="sc-mission">'+step.mission+'</div>':'')+'</div>'
    +'<div class="sc-status '+statusClass+'">'+statusLabel+'</div>'
    +'</div>'+(body?'<div class="step-card-body">'+body+'</div>':'')+'</div>';
}

function compactStepsList(){
  return '<div class="compact-steps">'+STEPS.map(function(s,i){
    var isActive=i===activeStep, isDone=i<activeStep;
    var status=isDone?'done':isActive?'active':'pending';
    var statusLabel=isDone?'&#10003; Finished':isActive?'&#9654; Current Step':'Waiting';
    var statusClass=isDone?'green':isActive?'gold':'ghost';
    var svgIcon=window.STEP_ICONS&&window.STEP_ICONS[s.tag]?window.STEP_ICONS[s.tag]:'';
    return '<div class="cstep cstep-'+status+'" onclick="openConsoleAtStep('+i+')">'
      +'<div class="sc-num-icon"><div class="sc-num">'+s.num+'</div><div class="sc-icon-svg">'+svgIcon+'</div></div>'
      +'<div class="sc-title"><div class="sc-name">'+s.name+'</div></div>'
      +'<div class="sc-status '+statusClass+'">'+statusLabel+'</div></div>';
  }).join('')+'</div>';
}

V.pipeline=function(){
  /* delegate to external view registered after agnus-data.js loads */
  if(window._agnusPipelineView) return window._agnusPipelineView();
  return '<div style="padding:60px;text-align:center;color:var(--ink-mute);font-family:var(--font-mono);font-size:13px">Loading pipeline…</div>';
};

/* ── runAuto: keyword-aware engine animation + expandable panels ── */
window.runAuto=function(stepIdx,actionIdx){
  /* cancel any armed auto-advance countdown from a previous run of this (or any) step */
  if(window._advTimer){ clearInterval(window._advTimer); window._advTimer=null; }
  var oldBanner=document.querySelector('.disc-done-banner'); if(oldBanner) oldBanner.remove();
  if(window._agnusStepState) stepState=window._agnusStepState;
  if(window._agnusMission) activeMission=window._agnusMission;
  var step=STEPS[stepIdx]; if(!step)return;
  var action=step.autoActions[actionIdx]; if(!action)return;
  /* read keyword from field first */
  var kwEl=document.getElementById('kwField');
  var kw=(kwEl?kwEl.value.trim():'')||_lastKw||window._lastKw||'';
  if(kw){ _lastKw=kw; window._lastKw=kw; stepState[0].keyword=kw; if(window._agnusStepState)window._agnusStepState[0].keyword=kw; }
  if(stepIdx===0&&!kw){ alert('Please enter a keyword first.'); return; }
  var t=detectType(kw);

  /* panel */
  var panelId='sop'+stepIdx;
  var existing=document.getElementById(panelId);
  if(!existing){ var bdy=document.querySelector('#sc'+stepIdx+' .step-card-body'); if(!bdy)return; existing=document.createElement('div'); existing.id=panelId; existing.className='step-outputs-panel'; bdy.insertBefore(existing,bdy.querySelector('.step-section')); }

  /* keyword-aware log lines */
  var chainLogs=action.log.slice();
  if(stepIdx===0) chainLogs=['Keyword Discovery scanned 53 sources for "'+kw+'"…',(t.car?'Hagerty, eBay Motors, FIAT Archive, Reuters verified…':t.ai?'OpenAI, Anthropic, Google, Reuters, G2 verified…':'Primary sources verified…'),'Knowledge Graph extracted entities for "'+kw+'"…','Source Scoring: avg trust 94%…'];
  else if(stepIdx===1) chainLogs=['Story Builder reading research for "'+kw+'"…','Audience profile matched…','Topic Clusters identified gap…','E-E-A-T direction set…'];

  /* engine animation */
  /* show loading state on discover button */
  var discBtn=document.getElementById('kwDiscoverBtn');
  if(discBtn&&stepIdx===0){ discBtn.textContent='Running…'; discBtn.disabled=true; discBtn.style.opacity='.7'; }
  /* show progress pulse on the step card */
  var sc0head=document.querySelector('#sc0 .step-card-head');
  if(sc0head) sc0head.style.boxShadow='inset 0 -3px 0 var(--gold)';
  existing.innerHTML='<div class="ss-label">&#9654; Running '+action.engines.join(' &rarr; ')+'</div>'
    +'<div class="eng-chain" id="ec'+stepIdx+'">'+action.engines.map(function(e,i){return '<div class="ec-step ec-pending" id="ec'+stepIdx+'_'+i+'"><span class="ec-dot"></span>'+e+'</div>';}).join('')+'</div>'
    +'<div class="sop-log" id="alog'+stepIdx+'"></div>';
  var logEl=document.getElementById('alog'+stepIdx);
  action.engines.forEach(function(e,i){
    setTimeout(function(){
      var el=document.getElementById('ec'+stepIdx+'_'+i); if(el)el.className='ec-step ec-running';
      setTimeout(function(){ if(el)el.className='ec-step ec-done'; if(chainLogs[i]&&logEl)logEl.innerHTML+='<div class="spl-row">&#9654; '+chainLogs[i]+'</div>'; },340);
    },i*520);
  });

  var total=action.engines.length;
  setTimeout(function(){
    var html;

    if(stepIdx===0){
      /* update mission header */
      window._agnusMission.title=kw;
      window._agnusMission.goal='Create an authoritative article on "'+kw+'" that ranks on Google, appears in AI Search, and generates revenue.';
      window._agnusMission.progress=15; window._agnusMission.nextAction='Review Research results';
      activeMission=window._agnusMission;
      var mhT=document.querySelector('.mcm-title'); if(mhT)mhT.textContent=kw;
      var mhG=document.querySelector('.mcm-goal'); if(mhG)mhG.textContent=window._agnusMission.goal;
      /* clear stale strategy/brief outputs */
      stepState[1]={outputs:{},log:[]}; stepState[2]={outputs:{},log:[]};
      if(window._agnusStepState){ window._agnusStepState[1]={outputs:{},log:[]}; window._agnusStepState[2]={outputs:{},log:[]}; }

      var topicWords=kw.split(' ').slice(0,3).join(' ');
      var comp=t.car?('Hagerty &mdash; missing buyer guide &middot; AutoTrader &mdash; no '+kw+' focus &middot; Classic.com &mdash; no SEO')
        :t.ai?('Backlinko, HubSpot, Zapier &mdash; missing specific AI angle')
        :t.food?('Backlinko, HubSpot &mdash; missing restaurant angle')
        :t.travel?('Lonely Planet &mdash; no personal angle &middot; TripAdvisor &mdash; no local insight &middot; Expat blogs &mdash; outdated')
        :t.health?('WebMD &mdash; generic &middot; Healthline &mdash; no local focus &middot; Mayo Clinic &mdash; too technical')
        :t.finance?('Investopedia &mdash; generic &middot; NerdWallet &mdash; US-focused &middot; Forbes &mdash; missing practical guide')
        :t.tech?('G2 &mdash; no editorial angle &middot; TechRadar &mdash; generic &middot; Product Hunt &mdash; no comparison')
        :t.education?('Coursera &mdash; no free angle &middot; Udemy &mdash; no comparison &middot; LinkedIn Learning &mdash; generic')
        :t.realestate?('Zillow &mdash; US-only &middot; Rightmove &mdash; no guide angle &middot; Property blogs &mdash; outdated')
        :('Top 3 competitors missing the "'+topicWords+'" angle');
      var paa=t.car?'"How much is a classic '+kw.split(' ').pop()+' worth?" &mdash; unowned'
        :t.ai?'"What '+kw+' is best for business?" &mdash; unowned snippet'
        :t.food?'"What AI tools help '+kw+'?" &mdash; unowned snippet'
        :t.travel?('"Is '+kw+' expensive?" &mdash; unowned snippet')
        :t.health?('"Is '+kw+' covered by insurance?" &mdash; unowned snippet')
        :t.finance?('"How to start '+kw+'?" &mdash; unowned snippet')
        :t.tech?('"What is the best '+kw+'?" &mdash; unowned snippet')
        :t.education?('"How long to learn '+kw+'?" &mdash; unowned snippet')
        :t.realestate?('"How much does '+kw+' cost?" &mdash; unowned snippet')
        :('"What is '+kw+'?" &mdash; unowned snippet');
      var voice=t.car?'"What should I look for when buying a '+kw+'?" &mdash; high demand'
        :t.ai?'"How does '+kw.split(' ').slice(0,3).join(' ')+' work?" &mdash; high demand'
        :t.food?'"What AI tools help '+kw+'?" &mdash; high demand'
        :t.travel?('"What is it like to live in '+topicWords+'?" &mdash; high demand')
        :t.health?('"What are the symptoms of '+topicWords+'?" &mdash; high demand')
        :t.finance?('"How do I start investing in '+topicWords+'?" &mdash; moderate demand')
        :t.tech?('"How do I use '+topicWords+'?" &mdash; high demand')
        :t.education?('"Can I learn '+topicWords+' online for free?" &mdash; high demand')
        :t.realestate?('"Is now a good time to buy in '+topicWords+'?" &mdash; moderate demand')
        :('"What is the best guide to '+topicWords+'?" &mdash; moderate demand');
      var aff=t.car?('Hagerty Insurance, eBay Motors, Bring a Trailer, Classic Parts &mdash; est. &euro;140/mo')
        :t.ai?('OpenAI, Anthropic, Google &mdash; est. &euro;180/mo')
        :t.food?('OpenTable AI, Toast, Square &mdash; est. &euro;120/mo')
        :t.travel?('Booking.com, Airbnb, Expat services, Language courses &mdash; est. &euro;90/mo')
        :t.health?('Health supplements, Clinics, Telehealth platforms &mdash; est. &euro;80/mo')
        :t.finance?('Brokers, Financial tools, Investment platforms &mdash; est. &euro;200/mo')
        :t.tech?('SaaS tools, Hosting, Agencies &mdash; est. &euro;120/mo')
        :t.education?('Courses, Books, Certifications &mdash; est. &euro;60/mo')
        :t.realestate?('Mortgage brokers, Property tools &mdash; est. &euro;150/mo')
        :('Relevant affiliate partners to identify &mdash; check PartnerStack');
      var ents=t.car?('Fiat, Alfa Romeo, Lancia, Porsche, eBay Motors, Bring a Trailer')
        :t.ai?('OpenAI, Anthropic, Google, Claude, ChatGPT')
        :t.food?('OpenTable, ElevenLabs, Toast, Square')
        :t.travel?('Sicily, Italy, Palermo, Catania, Mediterranean, Airbnb, Booking.com')
        :t.health?('NHS, WHO, Mayo Clinic, PubMed, relevant specialists')
        :t.finance?('Bloomberg, Reuters, SEC, relevant financial platforms')
        :t.tech?('GitHub, Product Hunt, G2, Capterra, relevant tools')
        :t.education?('Coursera, Udemy, YouTube, relevant institutions')
        :t.realestate?('Rightmove, Zillow, Airbnb, local estate agents')
        :(kw.split(' ').slice(0,4).join(', ')+', Wikipedia, Reuters, community forums');
      var cluster=t.car?'Classic Cars / Automotive'
        :t.ai?'AI Models / AI Agents'
        :t.food?'Restaurants / Hospitality'
        :t.travel?'Travel / Expat / '+kw.split(' ').slice(-2).join(' ')
        :t.health?'Health / Wellness'
        :t.finance?'Finance / Investing'
        :t.tech?'Technology / Software'
        :t.education?'Education / Learning'
        :t.realestate?'Real Estate / Property'
        :kw.split(' ').slice(0,2).map(function(w){return w.charAt(0).toUpperCase()+w.slice(1);}).join(' / ');

      html=discPanel(kw,
        [['Volume',t.car?'8,200/mo':t.ai?'12,400/mo':t.travel?'9,400/mo':t.finance?'6,200/mo':'6,800/mo',''],
        ['Trend','&#8593; Rising 28%','up'],
        ['Difficulty',t.car?'24/100':t.travel?'28/100':'31/100','easy'],
        ['Intent',t.travel?'Informational / Inspiration':t.finance?'Commercial / Decision':t.education?'Informational / Tutorial':'Commercial Investigation',''],
        ['Cluster',cluster,''],['Affiliate',t.car?'&euro;140/mo':t.ai?'&euro;180/mo':t.travel?'&euro;90/mo':t.finance?'&euro;200/mo':'&euro;120/mo','']],
        [{icon:'&#9906;',label:'Keyword Intelligence',body:'<div class="ds-grid"><div class="ds-row"><span class="ds-k">Parent topic</span><span class="ds-v">'+cluster+'</span></div><div class="ds-row"><span class="ds-k">AI search demand</span><span class="ds-v">'+(t.car?'Medium':'High')+'</span></div><div class="ds-row"><span class="ds-k">Voice demand</span><span class="ds-v">High</span></div><div class="ds-row"><span class="ds-k">Long-tail</span><span class="ds-v">"'+kw+' buying guide" &middot; "'+kw+' price" &middot; "'+kw+' review"</span></div></div>'},
         {icon:'&#9675;',label:'Competitor Analysis',body:'<div class="ds-comp-list">'+comp.split('&middot;').map(function(c){var p=c.trim().split('&mdash;'); return '<div class="ds-comp"><div class="ds-comp-n">'+(p[0]||'Competitor').trim()+'</div><div class="ds-comp-g">Gap: '+(p[1]||'missing coverage').trim()+'</div><div class="ds-comp-a">&#10003; Your advantage: depth + "'+kw+'" specificity</div></div>';}).join('')+'</div>'},
         {icon:'?',label:'People Also Ask',body:'<div class="ds-paa-list">'+[paa,(t.car?'"Is the '+kw+' reliable?"':'"Is '+kw+' worth it?"'),(t.car?'"Where can I find parts?"':'"What are the alternatives?"')].map(function(q){return '<div class="ds-paa-row"><span class="ds-paa-q">'+q+'</span><span class="pill ghost">Snippet available</span></div>';}).join('')+'</div>'},
         {icon:'&#9654;',label:'Voice Search',body:'<div class="ds-grid"><div class="ds-row"><span class="ds-k">Top question</span><span class="ds-v">'+voice+'</span></div><div class="ds-row"><span class="ds-k">Snippet</span><span class="ds-v" style="color:var(--success)">&#10003; Unowned &mdash; available</span></div></div>'},
         {icon:'&euro;',label:'Affiliate Opportunities',body:'<div class="ds-aff-list">'+aff.split(',').filter(function(a){return a.trim().length>2;}).map(function(a){return '<div class="ds-aff-row"><div class="ds-aff-n">'+a.replace(/&mdash;.*/,'').trim()+'</div><div class="ds-aff-r">Est. &euro;40&ndash;140/mo</div></div>';}).join('')+'</div>'},
         {icon:'&#8853;',label:'Cluster Impact',body:'<div class="ds-grid"><div class="ds-row"><span class="ds-k">Target cluster</span><span class="ds-v">'+cluster+'</span></div><div class="ds-row"><span class="ds-k">Current strength</span><span class="ds-v">31%</span></div><div class="ds-row"><span class="ds-k">After this article</span><span class="ds-v" style="color:var(--success)">~47% (+16%)</span></div></div>'}],
        '<div class="disc-deep"><button class="b b-line" onclick="GO(\'keywords\')">Open full keyword analysis &rarr;</button></div>'
      );
      /* if cluster mode, show cluster architecture */
      if(window._missionType==='cluster'){
        var clusterArch=buildClusterArchitecture(kw,t);
        var cpEl=document.getElementById('clusterPlanner');
        if(!cpEl){ cpEl=document.createElement('div'); cpEl.id='clusterPlanner'; cpEl.className='step-section'; var bdy2=document.querySelector('#sc0 .step-card-body'); if(bdy2)bdy2.insertBefore(cpEl,bdy2.querySelector('.step-continue')); }
        cpEl.innerHTML='<div class="ss-label">CLUSTER ARCHITECTURE</div>'+clusterArch;
      }

      /* immediately follow Discovery with the full tabbed Research Console — one step, one action */
      window._rsrch={kw:kw,t:t,tab:'paa',page:1,perPage:10,sel:{},active:0,list:genPAAList(kw,t)};
      html+='<div class="step-section"><div class="ss-label">RESEARCH</div></div><div id="rsrchRoot">'+renderResearchConsole()+'</div>';

    } else if(stepIdx===1){
      /* Strategy: read keyword from Discovery output */
      var sKw=window._lastKw||kw||''; var st2=detectType(sKw);

      /* ── Derive audience profile from Discovery + Research data ── */
      var sWho=st2.car?'Independent classic car enthusiast, 35–55, EU & UK market':st2.ai?'Business owner or professional, 30–50, non-technical, growth-focused':st2.food?'Independent restaurant owner, SMB, 1–3 locations':'Identified from Discovery + Research data';
      var sKnow=st2.car?'Non-expert on mechanics — financially serious buyer or collector':st2.ai?'Non-technical — wants practical results, not code':st2.food?'Non-technical — wants automation, not IT projects':'Derived from PAA questions and competitor audiences';
      var sTimeline=st2.car?'Actively researching, considering purchase in next 3–12 months':st2.ai?'Evaluating tools now, ready to adopt within 30–90 days':'Actively researching before a decision';
      var sPlatform=st2.car?'YouTube, enthusiast forums (PistonHeads, Classic Driver), Reddit':st2.ai?'LinkedIn, YouTube, newsletters, Reddit':st2.food?'Industry events, Facebook groups, TripAdvisor':'Community signals + Search Console data';
      var sConcern=st2.car?'Price, reliability, parts availability, resale value':st2.ai?'Cost, time to value, reliability, does it really work':st2.food?'ROI, ease of use, no-shows, customer reviews':'Primary concerns extracted from PAA + community signals';
      var sVoice=st2.car?'Enthusiast-warm, practical, respectful of expertise without being technical':st2.ai?'Professional-confident, practical, never hype':st2.food?'Warm, direct, business-focused — speak like a hospitality consultant':'Derived from community vocabulary';
      var sFormat=st2.car?'Buying guide + checklist + price comparison + expert tips':st2.ai?'Comparison table + setup guide + ROI numbers + FAQ':st2.food?'Step-by-step guide + tool comparison + ROI calculator + FAQ':'Content format matched to audience intent';
      var sAffiliate=st2.car?'Hagerty Insurance, eBay Motors, Bring a Trailer, Classic Parts EU':st2.ai?'Primary software tools + PartnerStack programs':st2.food?'OpenTable AI, Toast, Square':'Affiliate match derived from audience purchase intent';

      html='<div class="aud-profile">'
        +'<div class="ap-header">'
        +'<div class="ap-label">&#9670; PROPOSED AUDIENCE PROFILE</div>'
        +'<div class="ap-sub">Derived from Discovery + Research data &mdash; click any field to edit</div>'
        +'</div>'
        +'<div class="ap-attrs">'
        +[['Who',sWho,'ap-0'],['Knowledge level',sKnow,'ap-1'],['Purchase timeline',sTimeline,'ap-2'],['Where they live online',sPlatform,'ap-3'],['Primary concern',sConcern,'ap-4']].map(function(attr){
          return '<div class="ap-attr" id="'+attr[2]+'" onclick="apEdit(this.id,this)">'
            +'<div class="ap-k">'+attr[0]+'</div>'
            +'<div class="ap-v">'+attr[1]+'</div>'
            +'<div class="ap-edit-hint">&#9998; edit</div>'
            +'</div>';
        }).join('')
        +'</div>'
        +'<div class="ap-downstream">'
        +'<div class="apd-label">What this unlocks</div>'
        +'<div class="apd-grid">'
        +[['Tone & voice',sVoice,'&#9998;'],['Content format',sFormat,'&#9660;'],['Internal links','Matched to '+sWho.split(',')[0]+' reading journey','&#8853;'],['Monetization',sAffiliate,'&euro;']].map(function(d){
          return '<div class="apd-item"><div class="apd-ic">'+d[2]+'</div><div class="apd-text"><div class="apd-k">'+d[0]+'</div><div class="apd-v">'+d[1]+'</div></div></div>';
        }).join('')
        +'</div>'
        +'</div>'
        +'</div>'

        +discPanel(sKw+' &mdash; Article Strategy',
        [['Audience',st2.car?'Collectors':'Professionals',''],['Intent','Commercial',''],['Funnel','Awareness &rarr; Decision',''],['Monetization','Affiliate + Premium',''],['EEAT','94/100',''],['Est. Time','8 min read','']],
        [{icon:'&#9673;',label:'Target Audience & Intent',body:'<div class="ds-grid"><div class="ds-row"><span class="ds-k">Audience</span><span class="ds-v">'+(st2.car?'Classic car enthusiasts & collectors &mdash; EU & UK':st2.ai?'Business owners &mdash; non-technical':st2.food?'Restaurant owners &mdash; SMB operators':'Identified from keyword')+'</span></div><div class="ds-row"><span class="ds-k">Intent</span><span class="ds-v">Commercial Investigation &mdash; comparing before buying</span></div></div>'},
         {icon:'&#9670;',label:'Article Angle & Structure',body:'<div class="ds-grid"><div class="ds-row"><span class="ds-k">Winning angle</span><span class="ds-v">Only comprehensive guide for "'+sKw+'" in 2026</span></div><div class="ds-row"><span class="ds-k">Structure</span><span class="ds-v">Intro &rarr; Why now &rarr; Best options &rarr; Setup guide &rarr; FAQ &rarr; Next step</span></div><div class="ds-row"><span class="ds-k">Word count</span><span class="ds-v">2,400 words &mdash; 8 min read</span></div></div>'},
         {icon:'&euro;',label:'Monetization Strategy',body:'<div class="ds-grid"><div class="ds-row"><span class="ds-k">Strategy</span><span class="ds-v">'+(st2.car?'Affiliate (Hagerty, eBay Motors, parts) + Premium':st2.ai?'Affiliate (tools) + Marketplace + Premium':'Affiliate + Premium')+'</span></div><div class="ds-row"><span class="ds-k">Est. revenue</span><span class="ds-v" style="color:var(--success);font-weight:700">'+(st2.car?'&euro;140/mo':st2.ai?'&euro;180/mo':'&euro;120/mo')+'</span></div></div>'},
         {icon:'&#10003;',label:'E-E-A-T Direction',body:'<div class="ds-grid"><div class="ds-row"><span class="ds-k">Experience</span><span class="ds-v">Add practical '+(st2.car?'ownership':'use case')+' example</span></div><div class="ds-row"><span class="ds-k">Expertise</span><span class="ds-v">Cite '+(st2.car?'Hagerty, eBay Motors':'official docs, G2 reviews')+'</span></div><div class="ds-row"><span class="ds-k">Trust</span><span class="ds-v">Name author, show update date, cite all sources</span></div></div>'},
         {icon:'&#9660;',label:'Entities to Mention',body:'<div class="ds-paa-list">'+(st2.car?['Fiat','Alfa Romeo','eBay Motors','Bring a Trailer','Hagerty']:st2.ai?['OpenAI','Anthropic','Google','Claude']:st2.food?['OpenTable','ElevenLabs','Toast']:['Key entities']).map(function(e){return '<div class="ds-paa-row"><span class="ds-paa-q">'+e+'</span><span class="pill ghost">Entity</span></div>';}).join('')+'</div>'},
         {icon:'&#8853;',label:'Internal Links & Cluster',body:'<div class="ds-grid"><div class="ds-row"><span class="ds-k">Target cluster</span><span class="ds-v">'+(st2.car?'Classic Cars / Automotive':st2.ai?'AI Models / AI Agents':'General')+'</span></div><div class="ds-row"><span class="ds-k">Link targets</span><span class="ds-v">6 existing articles ready</span></div><div class="ds-row"><span class="ds-k">Cluster impact</span><span class="ds-v" style="color:var(--success)">31% &rarr; ~47%</span></div></div>'}],
        '<div class="disc-deep"><button class="b b-gold" onclick="pipeNextStep()">Approve Strategy &rarr; Generate Brief</button></div>'
      )

      /* ── Reader Journey map ── */
      +('<div class="reader-journey">'
        +'<div class="rj-label">&#9670; READER JOURNEY &mdash; from search to revenue</div>'
        +'<div class="rj-chain">'
        +[
          {step:'Google Search',note:'"'+sKw+'"',type:'entry'},
          {step:'This Article',note:'8 min read, buying guide',type:'current'},
          {step:st2.car?'Hagerty Review':st2.ai?'Tool Review':'Tool Review',note:'★★★★★ review, linked in section 2',type:'next'},
          {step:st2.car?'Classic Car Market Report':st2.ai?'Compare top tools':'Compare top tools',note:'Comparison, linked in section 3',type:'next'},
          {step:st2.car?'eBay Motors Collection':st2.ai?'Marketplace Collection':'Marketplace Collection',note:'Affiliate click &rarr; conversion',type:'revenue'},
          {step:st2.car?'Classic Car Course':st2.ai?'Academy Course':'Academy Course',note:'Academy upsell, bottom CTA',type:'academy'},
          {step:'Premium Membership',note:'Full access, ongoing value',type:'premium'}
        ].map(function(j,i,arr){
          return '<div class="rj-step rj-'+j.type+'">'
            +'<div class="rjs-name">'+j.step+'</div>'
            +'<div class="rjs-note">'+j.note+'</div>'
            +'</div>'+(i<arr.length-1?'<div class="rj-arr">&#8594;</div>':'');
        }).join('')
        +'</div>'
        +'<div class="rj-est">Estimated revenue path per reader: <b style="color:var(--success)">'+( st2.car?'&euro;14 affiliate + &euro;8 premium':st2.ai?'&euro;22 affiliate + &euro;8 premium':'&euro;12 affiliate + &euro;8 premium')+'</b></div>'
        +'</div>');

    } else if(stepIdx===2){
      /* Brief: content contract per section */
      var bEl=null; var bKw=window._lastKw||kw||''; var bt=detectType(bKw);

      /* derive audience from profile card if present */
      var apWho=document.querySelector('#ap-0 .ap-v'); var audWho=apWho?apWho.textContent:(bt.car?'Classic car enthusiast, 35–55':bt.ai?'Business professional':'Restaurant owner');

      /* define H2 sections */
      var sections=bt.car?[
        {h2:'Why the '+bKw+' is worth buying in 2026',purpose:'Establish credibility and hook the financially serious buyer',words:320,entities:'Fiat, Hagerty Market Report',affiliate:'None — trust-building section',link:'Classic car market trends article',voice:'Enthusiast-warm, confident, no hype'},
        {h2:'What to look for before you buy',purpose:'Practical buying checklist — the most-searched question',words:480,entities:'PistonHeads, Classic Driver, known issues by year',affiliate:'Hagerty Insurance — natural CTA',link:'Classic car insurance guide',voice:'Practical, honest, experienced friend'},
        {h2:'How much does a '+bKw+' cost?',purpose:'Price history, range, what affects value',words:340,entities:'Hagerty Market Index, eBay Motors, Bring a Trailer',affiliate:'eBay Motors — "browse current listings" CTA',link:'Classic car valuation guide',voice:'Data-first, factual, no padding'},
        {h2:'Where to find a '+bKw+' for sale',purpose:'Point audience toward trusted sources',words:260,entities:'eBay Motors, Bring a Trailer, specialist dealers',affiliate:'Bring a Trailer + eBay Motors — primary affiliate placement',link:'Classic car auction guide',voice:'Direct, helpful, no bias'},
        {h2:'Running costs and parts availability',purpose:'Address the biggest concern: ongoing costs',words:300,entities:'Classic Parts EU, Fiat heritage parts suppliers',affiliate:'Classic Parts EU affiliate program',link:'Restoration cost guide',voice:'Realistic, reassuring, practical'},
        {h2:'Is the '+bKw+' the right classic for you?',purpose:'Decision-helper — matches reader to the car honestly',words:200,entities:'—',affiliate:'Hagerty Insurance final CTA',link:'Best first classic cars guide',voice:'Warm, honest, conversational'},
        {h2:'FAQs',purpose:'Voice search + featured snippet capture',words:200,entities:'—',affiliate:'None',link:'—',voice:'Direct, under 30 words per answer'}
      ]:bt.ai?[
        {h2:'Why '+bKw+' matters in 2026',purpose:'Establish relevance and urgency',words:280,entities:bKw+', McKinsey AI report',affiliate:'None',link:'AI trends article',voice:'Professional-confident, no hype'},
        {h2:'Best '+bKw+' tools compared',purpose:'Core comparison — highest commercial intent',words:520,entities:'Top tools in this category',affiliate:'Primary affiliate placements — table format',link:'Individual review articles',voice:'Objective, evidence-based, practical'},
        {h2:'How to get started in 15 minutes',purpose:'Lower the barrier — drives conversions',words:340,entities:'Setup steps for top tool',affiliate:'Free trial CTA',link:'Setup guide article',voice:'Step-by-step, encouraging, precise'},
        {h2:'ROI and business impact',purpose:'Justify the decision with numbers',words:300,entities:'McKinsey, Gartner, G2 data',affiliate:'Premium tool CTA',link:'ROI calculator tool',voice:'Data-driven, executive tone'},
        {h2:'FAQs',purpose:'Voice + featured snippet',words:200,entities:'—',affiliate:'None',link:'—',voice:'Under 30 words per answer'}
      ]:[
        {h2:'Why '+bKw+' needs AI in 2026',purpose:'Establish urgency and relevance',words:280,entities:'Industry research',affiliate:'None',link:'Industry trends article',voice:'Practical, business-focused'},
        {h2:'Best AI tools for '+bKw,purpose:'Core buying guide — highest intent',words:480,entities:'Top tools',affiliate:'Primary affiliate placements',link:'Tool reviews',voice:'Practical, comparison-focused'},
        {h2:'How to set it up in under 30 minutes',purpose:'Lower the barrier to action',words:320,entities:'Setup walkthrough',affiliate:'Free trial CTA',link:'Setup guide',voice:'Step-by-step, practical'},
        {h2:'FAQs',purpose:'Voice search + snippet',words:200,entities:'—',affiliate:'None',link:'—',voice:'Direct, concise'}
      ];

      var totalWords=sections.reduce(function(s,sec){return s+(parseInt(sec.words)||0);},0);

      /* ── Search Optimization: Accept/Modify/Regenerate suggestion fields ── */
      var seoFields=[
        {k:'Primary Keyword',v:bKw,conf:96,src:'Keyword Discovery',reason:'Highest opportunity score in this cluster'},
        {k:'SEO Title',v:(bt.car?bKw+' — Complete Buying Guide (2026)':bt.ai?'Best '+bKw+' Compared (2026)':bKw.charAt(0).toUpperCase()+bKw.slice(1)+' — The Complete Guide'),conf:91,src:'Keyword + Search Intent + Competitors',reason:'59 characters · matches top-ranking title patterns'},
        {k:'Meta Description',v:'Compare the best options for '+bKw+', backed by verified research and real pricing data. Updated 2026.',conf:88,src:'Brief + Research Panel',reason:'154 characters · includes primary keyword + freshness signal'},
        {k:'Slug',v:bKw.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''),conf:99,src:'SEO Rules Engine',reason:'Short, keyword-matched, no stop words'},
        {k:'Search Intent',v:(bt.travel?'Informational / Inspiration':bt.finance?'Commercial / Decision':bt.education?'Informational / Tutorial':'Commercial Investigation'),conf:93,src:'Research Panel + SERP Analysis',reason:(bt.travel?'Users are exploring, not buying yet':'Users compare options before choosing')}
      ];
      var searchOptHtml='<div class="seo-mission">'
        +'<div class="som-head"><div class="som-title">&#9670; Search Optimization</div><div class="som-sub">This section prepares your article to rank in search engines. Everything below comes from Keyword Discovery, Research, Competitors, Semantic Search and Topic Clusters — nothing starts empty.</div></div>'
        +seoFields.map(function(f,fi){
          return '<div class="sf-row" id="sf'+fi+'">'
            +'<div class="sf-k">'+f.k+'</div>'
            +'<div class="sf-box"><div class="sf-v" id="sfv'+fi+'">'+f.v+'</div>'
            +'<div class="sf-meta"><span class="sf-conf">Confidence '+f.conf+'%</span><span class="sf-src">Source: '+f.src+'</span></div>'
            +'<div class="sf-reason">Reason: '+f.reason+'</div></div>'
            +'<div class="sf-acts">'
            +'<button class="b b-gold b-sm" onclick="sfAccept('+fi+',this)">Accept</button>'
            +'<button class="b b-line b-sm" onclick="sfModify('+fi+',this)">Modify</button>'
            +'<button class="b b-ghost b-sm" onclick="sfRegen('+fi+',this,'+fi+')">Regenerate</button>'
            +'</div></div>';
        }).join('')
        +'</div>';

      html='<div class="brief-header">'
        +'<div class="bh-top"><div class="bh-kw">'+bKw+'</div><div class="bh-meta"><span class="pill gold">Writing for: '+audWho.split(',')[0]+'</span><span class="pill ghost">'+totalWords+' words total</span><span class="pill ghost">'+sections.length+' sections</span></div></div>'
        +'</div>'
        +'<div class="brief-sections">'
        +sections.map(function(sec,i){
          return '<div class="brief-sec">'
            +'<div class="bs-head"><div class="bs-num">'+(i+1)+'</div><div class="bs-h2">'+sec.h2+'</div><div class="bs-words">'+sec.words+' w</div></div>'
            +'<div class="bs-attrs">'
            +'<div class="bsa"><span class="bsa-k">Purpose</span><span class="bsa-v">'+sec.purpose+'</span></div>'
            +'<div class="bsa"><span class="bsa-k">Entities</span><span class="bsa-v" style="color:var(--sapphire)">'+sec.entities+'</span></div>'
            +'<div class="bsa"><span class="bsa-k">Affiliate</span><span class="bsa-v" style="color:var(--success)">'+sec.affiliate+'</span></div>'
            +'<div class="bsa"><span class="bsa-k">Internal link</span><span class="bsa-v">'+sec.link+'</span></div>'
            +'<div class="bsa"><span class="bsa-k">Voice note</span><span class="bsa-v" style="font-style:italic;color:var(--ink-soft)">'+sec.voice+'</span></div>'
            +'</div>'
            +'</div>';
        }).join('')
        +'</div>'
        +searchOptHtml
        +'<div class="disc-deep"><button class="b b-gold" onclick="pipeNextStep()">Approve Brief → Generate Blueprint</button>'
        +'<button class="b b-line" style="margin-left:10px" onclick="GO(&#39;writer&#39;)">Open AI Writer →</button></div>'
        +buildMediaPlan(bKw, bt, audWho);

    } else if(stepIdx===3){
      /* Blueprint: per-section prompts + schema + image brief */
      var blKw=window._lastKw||kw||''; var blt=detectType(blKw);
      var blAudEl=document.querySelector('#ap-0 .ap-v'); var blAud=blAudEl?blAudEl.textContent:blKw+' enthusiast';

      var blSections=blt.car?[
        {h2:'Why the '+blKw+' is worth buying in 2026',prompt:'You are writing section 1 of a buying guide for "'+blKw+'". Audience: '+blAud+'. Write 320 words. Tone: enthusiast-warm, confident. Open with a hook that makes a financially serious buyer feel understood. Include 1 stat (Hagerty Market Report). End with a bridge to the next section. No mechanical jargon.'},
        {h2:'What to look for before you buy',prompt:'Section 2 of a buying guide for "'+blKw+'". Audience: '+blAud+'. Write 480 words. Tone: practical, honest, experienced friend. Cover: years to avoid, known rust areas, engine check, paperwork checks. Format as a numbered checklist with short explanations. Include a natural mention of Hagerty Insurance near the end.'},
        {h2:'How much does a '+blKw+' cost?',prompt:'Section 3. Write 340 words. Cover price ranges by condition (project/driver/concours), trends from Hagerty Market Index, what affects value. Include a markdown table: Condition | Price Range | Trend. Tone: data-first, factual, no padding. Cite Hagerty and eBay Motors.'},
        {h2:'Where to find one for sale',prompt:'Section 4. Write 260 words. Cover: specialist dealers, eBay Motors, Bring a Trailer, classic car auctions, enthusiast forums. Mention pros and cons of each. Include a CTA to browse eBay Motors listings. Tone: direct, helpful, no bias toward any single source.'},
        {h2:'Running costs and parts availability',prompt:'Section 5. Write 300 words. Cover: insurance (Hagerty), maintenance costs, parts sourcing (Classic Parts EU, Fiat heritage suppliers), what to budget annually. Be realistic but reassuring. Tone: practical, no surprises.'},
        {h2:'Is the '+blKw+' right for you?',prompt:'Section 6. Write 200 words. Help the reader decide honestly — this car suits some buyers and not others. Address who should buy vs who should look elsewhere. Warm, honest, conversational. End with a natural Hagerty Insurance CTA.'},
        {h2:'FAQs',prompt:'Section 7. Write 4 FAQs matching these People Also Ask questions: "How much is a '+blKw+' worth?", "Is the '+blKw+' reliable?", "What to look for?", "Where to find parts?". Each answer: under 30 words, direct, featured-snippet ready. No padding.'}
      ]:blt.ai?[
        {h2:'Why '+blKw+' matters in 2026',prompt:'Section 1 of a buying guide for "'+blKw+'". Audience: '+blAud+'. Write 280 words. Open with urgency (stat from McKinsey or Gartner). Tone: professional-confident, no hype. Bridge to the comparison section.'},
        {h2:'Best '+blKw+' tools compared',prompt:'Section 2. Write 520 words. Compare the top 3–5 tools in a structured way. Include a markdown comparison table: Tool | Price | Best for | Rating. For each tool: 2–3 sentences on strengths, 1 sentence on weakness. Cite G2 ratings. Include affiliate CTAs naturally.'},
        {h2:'How to get started in 15 minutes',prompt:'Section 3. Write 340 words. Step-by-step setup for the top recommended tool. Number each step. Include screenshots placeholder [IMAGE: step X screenshot]. End with a free trial CTA. Tone: encouraging, precise, no fluff.'},
        {h2:'ROI and business impact',prompt:'Section 4. Write 300 words. Include 2–3 real-world stats (McKinsey, Gartner, G2). Frame around the reader: what does this mean for a business like theirs? End with a premium tool CTA. Tone: executive, data-driven.'},
        {h2:'FAQs',prompt:'Section 5. Write 4 FAQs. Each answer under 30 words. Featured-snippet ready. Questions: "What is the best '+blKw+'?", "Is '+blKw+' free?", "How does '+blKw+' work?", "What are the alternatives?"'}
      ]:[
        {h2:'Why '+blKw+' needs AI in 2026',prompt:'Section 1. Write 280 words for audience: '+blAud+'. Urgency hook, 1 industry stat. Tone: practical, business-focused. Bridge to tools section.'},
        {h2:'Best AI tools for '+blKw,prompt:'Section 2. Write 480 words. Top 3 tools compared. Markdown table: Tool | Price | Best for. Include affiliate CTAs. Cite G2.'},
        {h2:'FAQs',prompt:'Section 3. Write 4 FAQs under 30 words each. Featured-snippet ready.'}
      ];

      /* schema plan */
      var schemaTypes=blt.car?['Article (datePublished, author, publisher)','HowTo (buying checklist steps)','FAQPage (4 questions)','ItemList (top models / best years)']:blt.ai?['Article','FAQPage','ItemList (tool comparison)','HowTo (setup steps)']:['Article','FAQPage','HowTo'];

      /* image brief */
      var imageBrief=blt.car?[
        {slot:'Hero',spec:'Editorial photography — a pristine '+blKw+' parked on a cobblestone street, morning light, warm ivory tones. No text overlay.'},
        {slot:'Section 2',spec:'Close-up of '+blKw+' undercarriage / rust check area — clear, well-lit, documentary style.'},
        {slot:'Section 3 (Price table)',spec:'Infographic: price range by condition. AGNUS brand colors (charcoal/gold). Clean, editorial.'},
        {slot:'Section 4',spec:'Screenshot composite: eBay Motors + Bring a Trailer listings. Duotone treatment.'},
        {slot:'OG / Social',spec:'Classic ' +blKw+' hero shot. 1200×630px. AGNUS watermark bottom right.'}
      ]:blt.ai?[
        {slot:'Hero',spec:'Clean editorial — person at laptop, warm light, tool interface visible. No stock photo clichés.'},
        {slot:'Comparison table',spec:'Screenshot composite of top 3 tools — duotone, charcoal/gold treatment.'},
        {slot:'Setup guide',spec:'Step-by-step screen recording frames — numbered overlays.'},
        {slot:'OG / Social',spec:'Dark background, gold headline text. 1200×630px.'}
      ]:[
        {slot:'Hero',spec:'Business photography — relevant to '+blKw+'. Editorial, warm light.'},
        {slot:'OG / Social',spec:'1200×630px. Brand colors.'}
      ];

      html='<div class="bp-header"><div class="bp-kw">'+blKw+' &mdash; Blueprint</div>'
        +'<div class="bp-meta">'
        +'<span class="pill gold">Model: GPT-5 / Claude 4.5</span>'
        +'<span class="pill ghost">Prompt: Buying Guide v6</span>'
        +'<span class="pill ghost">'+blSections.length+' sections</span>'
        +'</div></div>'

        +'<div class="bp-tabs" id="bpTabs"><button class="kdb-tab on" onclick="bpTab(&#39;prompts&#39;,this)">Section Prompts</button><button class="kdb-tab" onclick="bpTab(&#39;schema&#39;,this)">Schema Markup</button><button class="kdb-tab" onclick="bpTab(&#39;images&#39;,this)">Image Brief</button></div>'
        +'<div id="bpBody">'
        +'<div class="bp-prompts">'
        +blSections.map(function(sec,i){return '<div class="bp-sec"><div class="bps-head"><div class="bps-num">'+(i+1)+'</div><div class="bps-h2">'+sec.h2+'</div></div><div class="bps-prompt"><div class="bps-plabel">GPT-5 System Instruction</div><div class="bps-ptext">'+sec.prompt+'</div></div></div>';}).join('')
        +'</div></div>'
        +'<div class="disc-deep" style="margin-top:16px"><button class="b b-gold" onclick="pipeNextStep()">Send to AI Writer &rarr;</button></div>';

    } else if(stepIdx===5){
      /* Enrich: before/after previews for each engine */
      var enKw=window._lastKw||kw||''; var ent=detectType(enKw);

      var befores={
        seo:{title:enKw+' - Complete Guide (2026)',meta:'Everything you need to know about '+enKw+' in 2026.',slug:enKw.toLowerCase().replace(/\s+/g,'-')},
        eeat:{score:'62/100',issues:'No author bio, no publication date, no citations visible'},
        semantic:{covered:'4 / 12 concepts',missing:'ROI section, integration guide, comparison table'},
        voice:{snippet:'Not optimised','question':'None targeted'},
        ai:{ready:'Not optimised','chatgpt':'Would not cite this page'},
        links:{found:'0 internal links','broken':'N/A'},
        images:{hero:'Missing','alt':'Not written','ogImage':'Missing'},
        schema:{applied:'None','structured':'No'}
      };
      var afters={
        seo:{title:(ent.car?'Classic '+enKw+' Buying Guide 2026 — Expert Checklist':'Best '+enKw+' in 2026 — Tested & Compared'),meta:(ent.car?'Everything to know before buying a '+enKw+'. Price, reliability, where to find one — updated July 2026.':'Find the best '+enKw+'. We tested and compared the top options.'),slug:(ent.car?enKw.toLowerCase().replace(/\s+/g,'-')+'-buying-guide':'best-'+enKw.toLowerCase().replace(/\s+/g,'-'))},
        eeat:{score:'94/100',issues:'Author bio added, date shown, 8 citations visible'},
        semantic:{covered:'11 / 12 concepts',missing:'1 minor concept added to outline'},
        voice:{snippet:'Targeting "How much is a '+enKw+' worth?"','question':'"What should I check before buying?"'},
        ai:{ready:'Optimised for ChatGPT, Claude, Gemini','chatgpt':'Would cite: expert guide with Hagerty data'},
        links:{found:'6 internal links added','broken':'0'},
        images:{hero:'Uploaded + compressed','alt':'Auto-generated (WCAG AA)','ogImage':'1200×630 created'},
        schema:{applied:'Article + FAQPage + HowTo','structured':'Valid — Google Rich Results Test: pass'}
      };
      var engines=['seo','eeat','semantic','voice','ai','links','images','schema'];
      var labels={seo:'SEO',eeat:'E-E-A-T',semantic:'Semantic',voice:'Voice Search',ai:'AI Search',links:'Internal Links',images:'Images',schema:'Schema'};

      html='<div class="enrich-ba-header"><div class="eba-kw">'+enKw+' &mdash; Enrichment Results</div>'
        +'<div class="eba-meta"><span class="pill green">&#10003; 8 / 8 engines complete</span><span class="pill ghost">All checks passed</span></div></div>'
        +'<div class="enrich-ba-grid">'
        +engines.map(function(eng){
          var b=befores[eng]; var a=afters[eng];
          var bKeys=Object.keys(b);
          return '<div class="eba-card"><div class="eba-head">'+labels[eng]+'</div>'
            +'<div class="eba-cols">'
            +'<div class="eba-col eba-before"><div class="eba-cl">Before</div>'+bKeys.map(function(k){return '<div class="eba-row"><span class="eba-k">'+k+'</span><span class="eba-v eba-bad">'+b[k]+'</span></div>';}).join('')+'</div>'
            +'<div class="eba-arr">&#8594;</div>'
            +'<div class="eba-col eba-after"><div class="eba-cl">After</div>'+bKeys.map(function(k){return '<div class="eba-row"><span class="eba-k">'+k+'</span><span class="eba-v eba-good">'+a[k]+'</span></div>';}).join('')+'</div>'
            +'</div></div>';
        }).join('')
        +'</div>'
        +'<div class="disc-deep" style="margin-top:16px"><button class="b b-gold" onclick="pipeNextStep()">Approve Enrichment &rarr; Verify</button></div>';

    } else {
      /* generic plain grid for later steps */
      html='<div class="ss-label" style="margin-top:16px">&#10022; GENERATED OUTPUT</div><div class="sop-grid">'+Object.entries(action.outputs||{}).map(function(e){return '<div class="sop-row"><span class="sop-k">'+e[0]+'</span><span class="sop-v">'+e[1]+'</span></div>';}).join('')+'</div>';
    }

    existing.innerHTML=html;
    enhanceTabs(existing);
    refreshConsoleChrome();
    /* scroll to result + reset UI */
    setTimeout(function(){
      existing.scrollIntoView({behavior:'smooth',block:'nearest'});
      var discBtn2=document.getElementById('kwDiscoverBtn');
      if(discBtn2){ discBtn2.textContent='Run Research →'; discBtn2.disabled=false; discBtn2.style.opacity=''; }
      var sc0h=document.querySelector('#sc0 .step-card-head');
      if(sc0h) sc0h.style.boxShadow='';
      /* add a clear step-aware done banner */
      var stepNames={0:'Research',1:'Strategy',2:'Brief',3:'Blueprint',4:'Article generation',5:'Enrichment'};
      var doneBanner=document.createElement('div');
      doneBanner.className='disc-done-banner';
      doneBanner.innerHTML='&#10003; '+(stepNames[stepIdx]||'Step')+' complete &mdash; review the results below, then continue when ready';
      if(!existing.previousElementSibling||!existing.previousElementSibling.classList.contains('disc-done-banner')){
        existing.parentNode.insertBefore(doneBanner, existing);
      }
    },100);
  },total*520+400);
};

/* ── helpers ── */
/* ── Cluster architecture generator ── */
window.buildClusterArchitecture = function(kw, t){
      var kwClean = window._lastKw||kw||'';
  var roles = t.car
    ? [[kwClean+' — Complete Buying Guide','PILLAR','6,200',t.car?'Hagerty Insurance, eBay Motors':'',10],
       [kwClean+' Price Guide & History','Supporting','2,400','Hagerty Market Index',7],
       [kwClean+' Common Problems & Reliability','Supporting','2,200','Classic Parts EU',6],
       [kwClean+' vs '+kwClean.split(' ').pop()+' Rivals — Comparison','Comparison','2,800','Classic Driver',8],
       ['How to Inspect a '+kwClean+' Before Buying','Tutorial','1,800','',5],
       ['Best Insurance for Classic '+kwClean,'Supporting','1,600','Hagerty Insurance',9],
       ['Where to Find '+kwClean+' Parts','Supporting','1,400','Classic Parts EU',7],
       [kwClean+' Community & Clubs','Supporting','1,200','',4],
       [kwClean+' Review — Owner Perspectives','Review','2,000','',6]]
    : t.ai
    ? [[kwClean+' — The Complete Business Guide','PILLAR','5,800','Primary software',9],
       ['Best Alternatives to '+kwClean,'Comparison','2,600','PartnerStack',8],
       [kwClean+' Pricing — All Plans Compared','Supporting','1,800','',7],
       [kwClean+' Setup in 15 Minutes','Tutorial','1,600','',6],
       [kwClean+' vs Competitors','Comparison','2,400','Primary software',8],
       [kwClean+' for Small Business','Supporting','2,000','',7],
       [kwClean+' ROI Calculator Guide','Supporting','1,400','',6],
       [kwClean+' Reviews — Verified Users','Review','2,200','G2',7],
       [kwClean+' Academy Course','Academy','3,000','Premium',5]]
    : [[kwClean+' — Complete Guide 2026','PILLAR','5,200','Primary tools',8],
       ['Best Tools for '+kwClean,'Supporting','2,400','PartnerStack',7],
       [kwClean+' Tutorial for Beginners','Tutorial','1,800','',6],
       [kwClean+' Case Studies & ROI','Supporting','2,000','',7],
       [kwClean+' Reviews','Review','2,000','G2',6],
       [kwClean+' FAQ','Supporting','1,200','',5]];

  var total=roles.reduce(function(s,r){return s+(parseInt(r[2])||0);},0);

  return '<div class="cluster-arch-header">'
    +'<span class="pill gold">'+roles.length+' articles planned</span>'
    +'<span class="pill ghost">'+total.toLocaleString()+' words total</span>'
    +'<span class="pill ghost">Est. '+Math.round(total/400)+' hours to write</span>'
    +'</div>'
    +'<div class="cluster-map-mini">'
    +roles.map(function(r,i){
      var isPillar=r[1]==='PILLAR';
      return '<div class="cmm-node '+(isPillar?'cmm-pillar':'cmm-support')+'" onclick="setKwNodeClick(this)">'
        +'<div class="cmm-n-role">'+r[1]+'</div>'
        +'<div class="cmm-n-title">'+r[0]+'</div>'
        +'<div class="cmm-n-meta">'+r[2]+' w'+(r[3]?' &middot; '+r[3]:'')+'</div>'
        +'<div class="cmm-n-traffic">+'+r[4]+'k/mo est.</div>'
        +'<div class="cmm-n-cta">Write this article &rarr;</div>'
        +'</div>'+(i<roles.length-1?'<div class="cmm-link">&#8594;</div>':'');
    }).join('')
    +'</div>'
    +'<div class="disc-deep" style="margin-top:14px">'
    +'<button class="b b-gold" onclick="startClusterWithPillar()">Start with the Pillar &rarr;</button>'
    +'<button class="b b-line" style="margin-left:10px">Export cluster plan</button></div>';
};
window.setKwOverride=function(title,el){
  document.querySelectorAll('.cmm-node').forEach(function(n){n.classList.toggle('cmm-selected',n===el);});
  var kf=document.getElementById('kwField'); if(kf){kf.value=title;window.kwUpdate(title);}
};
window.setKwNodeClick=function(el){
  var title=el.querySelector('.cmm-n-title'); var t=title?title.textContent.trim():'';
  document.querySelectorAll('.cmm-node').forEach(function(n){n.classList.toggle('cmm-selected',n===el);});
  var kf=document.getElementById('kwField');
  if(kf&&t){
    kf.value=t; window.kwUpdate(t);
    /* auto-start Discovery for the selected cluster article */
    kf.scrollIntoView({behavior:'smooth',block:'center'});
    setTimeout(function(){ window.runAuto(0,0); },600);
  }
};
window.startClusterWithPillar=function(){
  var pillarNode=document.querySelector('.cmm-pillar'); if(pillarNode)pillarNode.click();
};

/* Accept / Modify / Regenerate — Search Optimization suggestion fields */
window.sfAccept=function(i,btn){
  var row=document.getElementById('sf'+i); if(!row)return;
  row.classList.add('sf-accepted');
  row.querySelector('.sf-acts').innerHTML='<span class="sf-done">&#10003; Accepted</span>';
};
window.sfModify=function(i,btn){
  var row=document.getElementById('sf'+i); if(!row)return;
  var box=row.querySelector('.sf-v'); var current=box.textContent;
  row.dataset.orig=current;
  box.innerHTML='<input type="text" class="sf-edit" id="sfedit'+i+'" value="'+current.replace(/"/g,'&quot;')+'">';
  var acts=row.querySelector('.sf-acts');
  acts.innerHTML='<button class="b b-gold b-sm" onclick="sfSaveModify('+i+')">Save</button><button class="b b-ghost b-sm" onclick="sfCancelModify('+i+')">Cancel</button>';
  var inp=document.getElementById('sfedit'+i); if(inp){inp.focus();inp.select();}
};
window.sfSaveModify=function(i){
  var inp=document.getElementById('sfedit'+i); if(!inp)return;
  var val=inp.value;
  var row=document.getElementById('sf'+i);
  row.querySelector('.sf-v').textContent=val;
  row.classList.add('sf-accepted');
  row.querySelector('.sf-acts').innerHTML='<span class="sf-done">&#10003; Saved</span>';
};
window.sfCancelModify=function(i){
  var row=document.getElementById('sf'+i); if(!row)return;
  row.querySelector('.sf-v').textContent=row.dataset.orig||'';
  row.querySelector('.sf-acts').innerHTML='<button class="b b-gold b-sm" onclick="sfAccept('+i+',this)">Accept</button><button class="b b-line b-sm" onclick="sfModify('+i+',this)">Modify</button><button class="b b-ghost b-sm" onclick="sfRegen('+i+',this)">Regenerate</button>';
};
window.sfRegen=function(i,btn){
  var row=document.getElementById('sf'+i); if(!row)return;
  var box=row.querySelector('.sf-v'); var o=box.textContent;
  box.style.opacity='.4'; btn.textContent='Regenerating\u2026'; btn.disabled=true;
  setTimeout(function(){
    box.style.opacity='1'; btn.textContent='Regenerate'; btn.disabled=false;
    box.textContent=o+' \u2014 alt. phrasing';
    var conf=row.querySelector('.sf-conf'); if(conf) conf.textContent='Confidence '+(80+Math.floor(Math.random()*15))+'%';
  },700);
};

window.kwUpdate=function(val){
  _lastKw=val; window._lastKw=val; stepState[0].keyword=val;
  if(window._agnusStepState)window._agnusStepState[0].keyword=val;
  var btn=document.getElementById('kwDiscoverBtn'); if(btn)btn.disabled=!val.trim();
  var hint=document.querySelector('.kw-hint'); if(hint)hint.style.display=val?'none':'block';
  var from=document.querySelector('.kw-from'); if(from){from.style.display=val?'block':'none'; if(val)from.innerHTML='Starting from: <b>'+val+'</b>';}
};
window.pipeSetStep=function(idx){ activeStep=idx; window._activeStep=idx; GO('pipeline'); if(window._consoleOpen) consoleRenderMain(); };
window.pipeNextStep=function(){ if(activeStep<STEPS.length-1){activeStep++;window._activeStep=activeStep;} if(window._consoleOpen){ consoleRenderMain(); } else { GO('pipeline'); window.scrollTo({top:0,behavior:'smooth'}); } };

/* ── Mission Console: modal shell, tabs, why-popovers ── */
window._consoleOpen=false;
function ensureConsoleDom(){
  if(document.getElementById('missionConsole')) return;
  var wrap=document.createElement('div');
  wrap.id='missionConsole';
  wrap.className='mc-overlay';
  wrap.innerHTML='<div class="mc-backdrop" onclick="closeConsole()"></div>'
    +'<div class="mc-shell mc-dark">'
    +'<div class="mc-topbar2" id="mcTopbar2"></div>'
    +'<div class="mc-cardrow" id="mcCardrow"></div>'
    +'<div class="mc-workspace" id="mcWorkspace">'
      +'<div class="mc-wsmain" id="mcMain"></div>'
      +'<div class="mc-wsside" id="mcSide"></div>'
    +'</div>'
    +'<div class="mc-ledger" id="mcLedger"></div>'
    +'</div>';
  document.body.appendChild(wrap);
}
window.openConsoleAtStep=function(idx){
  ensureConsoleDom();
  activeStep=idx; window._activeStep=idx;
  window._consoleOpen=true;
  GO('pipeline');
  var el=document.getElementById('missionConsole');
  el.classList.add('open');
  consoleRenderMain();
};
window.closeConsole=function(){
  var el=document.getElementById('missionConsole'); if(el) el.classList.remove('open');
  window._consoleOpen=false;
  GO('pipeline');
};
window.consoleContinue=function(){
  if(!window._consoleOpen){ openConsoleAtStep(activeStep); } else { consoleNext(); }
};
window.consolePrev=function(){ if(activeStep>0){ activeStep--; window._activeStep=activeStep; consoleRenderMain(); } };
window.consoleNext=function(){ if(activeStep<STEPS.length-1){ activeStep++; window._activeStep=activeStep; consoleRenderMain(); } else { closeConsole(); } };

var MISSION_LEDGER=[
  ['09:12','U','Mission Started','By: John Doe · Instruction received'],
  ['09:13','A','Research Started','Agent: Research Agent · Model: Claude 3.5'],
  ['09:14','G','Google Search','Completed · Results: 1,240'],
  ['09:15','Q','PAA Questions','Imported · Count: 42'],
  ['09:16','V','Voice Search','Imported · Phrases: 21'],
  ['09:18','S','Data Snapshot','Saved · Version: 1.3'],
  ['09:19','\u2713','Approved by User','Stage: Research · Items: 10'],
  ['09:21','\u21ba','Snapshot Shared','With: Chief Editor · Permission: View']
];

function refreshConsoleChrome(){
  var sc=computeSeoGeo();
  var mKw=window._lastKw||'this topic';
  var mt=document.querySelector('.mc2-mission'); if(mt) mt.textContent='Mission: Build "'+mKw+'"';
  var scoreEls=document.querySelectorAll('.mc2-score .mc2-sv');
  var vals=[sc.seo,sc.geo,12,17,21];
  scoreEls.forEach(function(el,i){ if(vals[i]!==undefined) el.textContent=vals[i]+'%'; });
  var doneCt=activeStep, notStartedCt=STEPS.length-activeStep-1;
  var pct=Math.round((doneCt/STEPS.length)*100);
  var donut=document.querySelector('.mc2-donut'); if(donut){ donut.style.setProperty('--p',pct); var sp=donut.querySelector('span'); if(sp)sp.textContent=pct+'%'; }
  var legVals=document.querySelectorAll('.mc2-leg-row b');
  var legNums=[doneCt,1,notStartedCt,0,0];
  legVals.forEach(function(el,i){ if(legNums[i]!==undefined) el.textContent=legNums[i]; });
  var cards=document.querySelectorAll('.mc2-card');
  cards.forEach(function(card,i){
    var isActive=i===activeStep, isDone=i<activeStep;
    var state=isDone?'done':isActive?'active':'pending';
    card.className='mc2-card mc2-'+state;
    var statusEl=card.querySelector('.mc2-c-status'); if(statusEl) statusEl.innerHTML='<span class="mc2-c-dot"></span>'+(isDone?'Completed':isActive?'In Progress':'Not Started');
  });
}
function consoleRenderMain(){
  ensureConsoleDom();
  var sc=computeSeoGeo();
  var mKw=window._lastKw||'this topic';

  /* ── top bar: brand, mission title, live scores, est time, status, avatar ── */
  var topbar=document.getElementById('mcTopbar2');
  topbar.innerHTML='<div class="mc2-brand"><span class="mc2-logo">A</span><div><div class="mc2-app">Article Pipeline</div><div class="mc2-mission">Mission: Build "'+mKw+'"</div></div></div>'
    +'<div class="mc2-scores">'
    +[['SEO',sc.seo],['GEO',sc.geo],['EEAT',12],['Voice',17],['AI Search',21]].map(function(s){return '<div class="mc2-score"><div class="mc2-sl">'+s[0]+'</div><div class="mc2-sv">'+s[1]+'%</div></div>';}).join('')
    +'</div>'
    +'<div class="mc2-meta"><div class="mc2-mi"><div class="mc2-ml">Est. Remaining</div><div class="mc2-mv">17 min</div></div>'
    +'<div class="mc2-mi"><div class="mc2-ml">Mission Status</div><div class="mc2-mv"><span class="mc2-live"></span> In Progress</div></div>'
    +'<div class="mc2-avatar">JD</div><button class="mc-close2" onclick="closeConsole()">&#215;</button></div>';

  /* ── 10-card horizontal row ── */
  var cardrow=document.getElementById('mcCardrow');
  cardrow.innerHTML=STEPS.map(function(s,i){
    var isActive=i===activeStep, isDone=i<activeStep;
    var isAI=isActive && document.querySelector('.ec-running');
    var state=isDone?'done':isActive?'active':'pending';
    var svgIcon=window.STEP_ICONS&&window.STEP_ICONS[s.tag]?window.STEP_ICONS[s.tag]:'';
    var statusLabel=isDone?'Completed':isActive?'In Progress':'Not Started';
    return '<div class="mc2-card mc2-'+state+'" onclick="consoleJump('+i+')">'
      +'<div class="mc2-c-top"><span class="mc2-c-num">'+(i+1)+'</span><span class="mc2-c-ic">'+svgIcon+'</span></div>'
      +'<div class="mc2-c-name">'+s.name+'</div>'
      +'<div class="mc2-c-desc">'+s.mission.split('.')[0]+'</div>'
      +'<div class="mc2-c-status"><span class="mc2-c-dot"></span>'+statusLabel+'</div>'
      +'</div>';
  }).join('');

  /* ── mission overview donut (right sidebar top) ── */
  var doneCt=activeStep, inProgCt=1, notStartedCt=STEPS.length-activeStep-1;
  var pct=Math.round((doneCt/STEPS.length)*100);
  var side=document.getElementById('mcSide');
  side.innerHTML='<div class="mc2-side-h">MISSION OVERVIEW</div>'
    +'<div class="mc2-donut-wrap"><div class="mc2-donut" style="--p:'+pct+'"><span>'+pct+'%</span></div></div>'
    +'<div class="mc2-legend">'
    +[['Completed',doneCt,'#22C55E'],['In Progress',inProgCt,'#2F80ED'],['Not Started',notStartedCt,'#7C8795'],['Blocked',0,'#EF4444'],['Needs Review',0,'#F5A623']]
      .map(function(l){return '<div class="mc2-leg-row"><span class="mc2-leg-dot" style="background:'+l[2]+'"></span>'+l[0]+'<b>'+l[1]+'</b></div>';}).join('')
    +'</div>'
    +'<div class="mc2-side-h" style="margin-top:20px">AI AGENT</div>'
    +'<div class="mc2-agent-rows">'
    +[['Current Agent','Claude 3.5 Sonnet'],['Mode','Research Mode'],['Temperature','0.3'],['Memory','Long-term']]
      .map(function(a){return '<div class="mc2-arow"><span>'+a[0]+'</span><b>'+a[1]+'</b></div>';}).join('')
    +'</div>'
    +'<div class="mc2-side-h" style="margin-top:20px">CONNECTED COMPONENTS</div>'
    +'<div class="mc2-comp-list">'
    +['Knowledge Database','Entity Manager','Knowledge Graph','Cluster Engine','Source Scoring','AGNUS Brain']
      .map(function(c){return '<div class="mc2-comp"><span class="mc2-comp-dot"></span>'+c+'</div>';}).join('')
    +'</div>'
    +'<div class="mc2-side-h" style="margin-top:20px">QUICK ACTIONS</div>'
    +'<div class="mc2-qa-list">'
    +[['Open Brief',2],['View Outline',2],['See Keywords','keywords'],['Open Story Builder','story']]
      .map(function(q){return '<button class="mc2-qa" onclick="'+(typeof q[1]==='number'?'consoleJump('+q[1]+')':'GO(\''+q[1]+'\')')+'">'+q[0]+'</button>';}).join('')
    +'</div>';

  /* ── main workspace: reuse existing step body content, dark-wrapped ── */
  var main=document.getElementById('mcMain');
  main.innerHTML=stepCard(STEPS[activeStep], activeStep);
  main.style.opacity='1';
  enhanceTabs(main);

  /* ── bottom ledger ── */
  var ledger=document.getElementById('mcLedger');
  ledger.innerHTML='<div class="mc2-ledger-h">MISSION LEDGER / AI ACTIVITY <select class="mc2-ledger-filter"><option>All Events</option></select></div>'
    +'<div class="mc2-ledger-row">'
    +MISSION_LEDGER.map(function(l){return '<div class="mc2-ledger-item"><div class="mc2-ledger-av">'+l[1]+'</div><div class="mc2-ledger-t">'+l[0]+'</div><div class="mc2-ledger-e">'+l[2]+'</div><div class="mc2-ledger-d">'+l[3]+'</div></div>';}).join('')
    +'</div>'
    +'<div class="mc2-ledger-foot"><a onclick="return false">View All Logs &rarr;</a></div>';
}
window.cancelAutoAdvance=function(){ if(window._advTimer){ clearInterval(window._advTimer); window._advTimer=null; } var el=document.querySelector('.disc-done-banner'); if(el)el.innerHTML='&#10003; Staying here &mdash; click Continue below when ready.'; };
window.consoleJump=function(idx){ cancelAutoAdvance(); activeStep=idx; window._activeStep=idx; consoleRenderMain(); };

/* ── SEO / GEO live score ── */
function computeSeoGeo(){
  var enrichCt=Object.keys(enrichDone||{}).length;
  var seo=10; var geo=10;
  var seoLeft=[]; var geoLeft=[];
  if(activeStep>=1){ seo+=15; geo+=15; } else { seoLeft.push(['Run Research to lock the target keyword + evidence',0]); geoLeft.push(['Run Research to gather citable evidence',0]); }
  if(activeStep>=2){ seo+=10; geo+=10; } else { seoLeft.push(['Define Strategy (audience + intent)',1]); geoLeft.push(['Define Strategy (E-E-A-T direction)',1]); }
  if(activeStep>=3){ seo+=15; geo+=10; } else { seoLeft.push(['Generate the Brief (H2 structure)',2]); geoLeft.push(['Generate the Brief (FAQ + questions plan)',2]); }
  if(activeStep>=4){ seo+=15; geo+=15; } else { seoLeft.push(['Build the Blueprint (schema plan)',3]); geoLeft.push(['Build the Blueprint (semantic + voice plan)',3]); }
  if(enrichCt>0){ seo+=Math.min(20,enrichCt*3); geo+=Math.min(20,enrichCt*3); }
  if(enrichCt<8){ seoLeft.push(['Run all 8 Enrichment engines ('+enrichCt+'/8 done)',5]); geoLeft.push(['Run all 8 Enrichment engines ('+enrichCt+'/8 done)',5]); }
  seo=Math.min(100,seo); geo=Math.min(100,geo);
  return {seo:seo,geo:geo,seoLeft:seoLeft,geoLeft:geoLeft};
}
window.toggleScorePop=function(type,el){
  var existing=document.querySelector('.score-pop'); if(existing){ existing.remove(); if(existing.dataset.type===type) return; }
  var sc=computeSeoGeo();
  var left=type==='seo'?sc.seoLeft:sc.geoLeft;
  var pop=document.createElement('div'); pop.className='score-pop'; pop.dataset.type=type;
  pop.innerHTML='<div class="sp-h">'+type.toUpperCase()+' &mdash; what&#39;s left</div>'
    +(left.length?left.map(function(l){return '<div class="sp-row" onclick="consoleJump('+l[1]+')"><span class="sp-dot"></span>'+l[0]+'</div>';}).join(''):'<div class="sp-row sp-done">&#10003; Everything currently achievable is done</div>');
  el.style.position='relative'; el.appendChild(pop);
};

/* ── convert accordion disc-sections into instant tabs ── */
function enhanceTabs(container){
  if(!container||!container.querySelectorAll) return;
  var groups=container.querySelectorAll('.disc-sections:not([data-enhanced])');
  groups.forEach(function(secsEl){
    secsEl.setAttribute('data-enhanced','1');
    var secs=Array.prototype.slice.call(secsEl.children).filter(function(c){return c.classList.contains('disc-sec');});
    if(!secs.length) return;
    var strip=document.createElement('div'); strip.className='dtab-strip';
    var bodyWrap=document.createElement('div'); bodyWrap.className='dtab-bodywrap';
    secs.forEach(function(sec,i){
      var label=sec.querySelector('.dsh-label'); var icon=sec.querySelector('.dsh-ic');
      var btn=document.createElement('button'); btn.className='dtab-btn'+(i===0?' on':'');
      btn.innerHTML=(icon?icon.outerHTML:'')+'<span>'+(label?label.textContent:('Section '+(i+1)))+'</span>';
      btn.onclick=function(){
        cancelAutoAdvance();
        Array.prototype.forEach.call(strip.querySelectorAll('.dtab-btn'),function(b){b.classList.remove('on');});
        btn.classList.add('on');
        var under=strip.querySelector('.dtab-underline');
        if(under){ under.style.left=btn.offsetLeft+'px'; under.style.width=btn.offsetWidth+'px'; }
        Array.prototype.forEach.call(bodyWrap.querySelectorAll('.dtab-pane'),function(p,pi){ p.classList.toggle('on', pi===i); });
      };
      strip.appendChild(btn);
      var pane=document.createElement('div'); pane.className='dtab-pane'+(i===0?' on':'');
      var bodyEl=sec.querySelector('.disc-sec-body');
      pane.innerHTML=bodyEl?bodyEl.innerHTML:'';
      bodyWrap.appendChild(pane);
    });
    var underline=document.createElement('div'); underline.className='dtab-underline'; strip.appendChild(underline);
    secsEl.innerHTML=''; secsEl.appendChild(strip); secsEl.appendChild(bodyWrap);
    requestAnimationFrame(function(){ var first=strip.querySelector('.dtab-btn'); if(first){ underline.style.left=first.offsetLeft+'px'; underline.style.width=first.offsetWidth+'px'; } });
  });
}

/* ── generic "why" popover on any generated output row ── */
if(!window._whyPopBound){
  window._whyPopBound=true;
  document.addEventListener('click',function(e){
    var v=e.target.closest('.sop-v, .ds-v, .mpav');
    Array.prototype.forEach.call(document.querySelectorAll('.why-pop'),function(p){ if(!v||!v.contains(p)) p.remove(); });
    if(!v||e.target.closest('.why-pop')) return;
    if(v.querySelector(':scope > .why-pop')) return;
    var row=v.closest('.sop-row, .ds-row, .mpa-why');
    var kEl=row?row.querySelector('.sop-k, .ds-k, .mpak'):null;
    var label=kEl?kEl.textContent:'This value';
    var kwField=document.getElementById('kwField');
    var kwNow=(kwField&&kwField.value)||window._lastKw||'this topic';
    var pop=document.createElement('span'); pop.className='why-pop';
    pop.innerHTML='<span class="why-h">&#9670; Why this?</span><span class="why-b"><b>'+label+'</b> was derived from the Knowledge System — keyword pattern match for “'+kwNow+'”, cross-referenced against Research Panel evidence and the Knowledge Graph.</span>';
    v.style.position='relative';
    v.appendChild(pop);
  });
}
window.toggleInlineEdit=function(stepIdx,actionIdx){
  var step=STEPS[stepIdx]; if(!step)return;
  var action=step.manualActions[actionIdx]; if(!action||action.type==='link')return;
  var panel=document.getElementById('iep'+stepIdx); if(!panel)return;
  if(panel.style.display==='block'&&panel.dataset.active===String(actionIdx)){panel.style.display='none';return;}
  panel.dataset.active=String(actionIdx);
  var currentVal=stepState[stepIdx]?stepState[stepIdx][action.field]||'':'';
  var inputHtml=action.type==='textarea'?'<textarea id="ief" class="ie-textarea" placeholder="'+action.placeholder+'" rows="3">'+currentVal+'</textarea>':'<input type="text" id="ief" class="ie-input" placeholder="'+action.placeholder+'" value="'+currentVal+'">';
  panel.innerHTML='<div class="ie-label">'+action.label+'</div>'+inputHtml+'<div class="ie-acts"><button class="b b-gold b-sm" onclick="saveInlineEdit('+stepIdx+',\''+action.field+'\')">&#10003; Accept</button><button class="b b-ghost b-sm" onclick="document.getElementById(\'iep'+stepIdx+'\').style.display=\'none\'">Discard</button></div>';
  panel.style.display='block'; var inp=document.getElementById('ief'); if(inp)inp.focus();
};
/* audience profile inline edit */
window.apEdit=function(id,el){
  if(el.querySelector('input')) return; /* already editing */
  var vEl=el.querySelector('.ap-v'); var cur=vEl.textContent;
  vEl.innerHTML='<input type="text" class="ap-input" value="'+cur.replace(/"/g,'&quot;')+'" onclick="event.stopPropagation()" onblur="apSave(\''+id+'\',this)">';
  var inp=vEl.querySelector('input'); if(inp){inp.focus();inp.select();}
};
window.apSave=function(id,inp){
  var el=document.getElementById(id); if(!el)return;
  var vEl=el.querySelector('.ap-v'); if(vEl)vEl.textContent=inp.value;
  /* downstream update hint */
  var ds=el.closest('.aud-profile').querySelector('.ap-downstream');
  if(ds){ ds.style.boxShadow='0 0 0 2px var(--gold)'; setTimeout(function(){ds.style.boxShadow='';},800); }
};

window.saveInlineEdit=function(stepIdx,field){
  var input=document.getElementById('ief'); if(!input)return;
  stepState[stepIdx]=stepState[stepIdx]||{outputs:{},log:[]};
  stepState[stepIdx][field]=input.value;
  if(field==='keyword')window.kwUpdate(input.value);
  var panel=document.getElementById('iep'+stepIdx); if(panel)panel.style.display='none';
  var sc=document.getElementById('sc'+stepIdx); if(sc){sc.style.boxShadow='0 0 0 2px var(--success)';setTimeout(function(){sc.style.boxShadow='';},800);}
};

/* enrich engines */
var enrichDone={};
window.runEnrich=function(i,btn){
  var mod=document.getElementById('emod'+i); if(!mod)return;
  var st=document.getElementById('emst'+i); if(!st)return;
  st.textContent='Running\u2026'; st.className='em-status em-running';
  if(btn){btn.disabled=true;btn.textContent='Running\u2026';}
  setTimeout(function(){
    st.innerHTML='&#10003; Done'; st.className='em-status em-done';
    mod.querySelectorAll('.em-out-row').forEach(function(r){r.innerHTML='<span style="color:var(--success)">&#10003;</span> '+r.textContent.trim();});
    if(btn){btn.textContent='Re-run';btn.disabled=false;}
    enrichDone[i]=true;
    var done=Object.keys(enrichDone).length;
    var prog=document.getElementById('enrichProg'); var cnt=document.getElementById('enrichCount');
    if(prog)prog.innerHTML=m(Math.round(done/8*100),done===8?'green':'');
    if(cnt)cnt.textContent=done+' / 8'+(done===8?' \u2014 all complete':'');
  },900);
};
window.runAllEnrich=function(){
  enrichDone={};
  for(var i=0;i<8;i++){(function(idx){setTimeout(function(){var btn=document.querySelector('#emod'+idx+' .em-run');if(btn)runEnrich(idx,btn);},idx*260);})(i);}
};

/* exec preview */
var EXEC_PLAN=[{t:'Best AI Agents for Small Businesses',time:'2h 30m',creates:['1 review','2 comparisons','3 guides'],sources:12,rev:'€120/month'},{t:'Refresh the ChatGPT Review',time:'45m',creates:['1 review update'],sources:8,rev:'Protects €160/month'}];
function drawerShell(title,bodyHtml,proceedLabel,onProceed){
  var w=document.getElementById('execDrawerWrap'); if(!w){w=document.createElement('div');w.id='execDrawerWrap';document.body.appendChild(w);}
  w.innerHTML='<div class="modal-bg open" onclick="if(event.target===this)this.remove()"><div class="modal" style="width:480px"><div class="modal-h"><h3>'+title+'</h3><button class="x" onclick="this.closest(\'.modal-bg\').remove()">&#215;</button></div><div class="modal-b">'+bodyHtml+'</div><div class="modal-f"><button class="b b-ghost" onclick="this.closest(\'.modal-bg\').remove()">Cancel</button><button class="b b-gold" onclick="'+onProceed+'">'+proceedLabel+'</button></div></div></div>';
}
window.execPreview=function(n){
  var p=EXEC_PLAN[n]||EXEC_PLAN[0];
  drawerShell('Execution plan','<div class="exp-h">'+p.t+'</div><div class="exp-grid"><div class="exp-stat"><div class="exp-l">Estimated time</div><div class="exp-v">'+p.time+'</div></div><div class="exp-stat"><div class="exp-l">Sources</div><div class="exp-v">'+p.sources+' verified</div></div><div class="exp-stat" style="grid-column:1/-1"><div class="exp-l">Expected revenue</div><div class="exp-v" style="color:var(--success)">'+p.rev+'</div></div></div><div class="exp-creates"><div class="exp-l">Creates</div>'+p.creates.map(function(c){return '<div class="exp-row">&#9654; '+c+'</div>';}).join('')+'</div>','Proceed &rarr;','this.closest(\'.modal-bg\').remove();GO(\'writer\')');
};
window.execApprove=function(title,rev,time,affected){
  drawerShell('Approve recommendation','<div class="exp-h">'+title+'</div><div class="exp-grid"><div class="exp-stat"><div class="exp-l">Expected outcome</div><div class="exp-v" style="color:var(--success)">'+rev+'</div></div><div class="exp-stat"><div class="exp-l">Estimated time</div><div class="exp-v">'+time+'</div></div></div><div class="exp-creates"><div class="exp-l">Affected</div>'+(affected||[]).map(function(c){return '<div class="exp-row">&#9654; '+c+'</div>';}).join('')+'</div>','Approve','this.closest(\'.modal-bg\').remove();GO(\'writer\')');
};

I.pipeline=function(){ if(!window._consoleOpen){ openConsoleAtStep(activeStep); } };
window._IK=window._IK||{};
window._IK.MISSIONS_V5=[{id:0,title:activeMission.title,step:activeStep,progress:activeMission.progress}];
})();
