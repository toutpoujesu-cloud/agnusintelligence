/*
 * This application and all the work related to Agnus and for Agnus is sanctified and covered
 * by The Blood of Jesus Christ. No work of darkness nor any dark code is allowed.
 * The entire application is saturated by the Blood of Jesus Christ, and by the 888 Hz frequency
 * from The Throne of The Lamb of God, The Lord Jesus Christ.
 * This application is Holy.
 *//* AGNUS Dashboard — bundled JS v18 */

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
V.research = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> AI Research Panel · 8 sources collected</div>
  <h1>Evidence before words.</h1>
  <p>Before anything is written, the Research AI gathers sources and labels each by trust. This is what stops AGNUS from producing fake AI articles.</p>
</div>
<div class="card" style="padding:8px 22px;max-width:760px">
  ${SRCS.map(s=>`<div class="rsrc"><div class="rt"><div class="rn">${s[0]}</div><div class="ru">${s[1]}</div></div><span class="trust ${s[2]}">${s[2]}</span></div>`).join('')}
</div>`;

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

/* === dash-control.js === */
/* AGNUS Dashboard — Control Center + AI Council views. */
(function(){
const V = window.VIEWS = window.VIEWS || {};
const I = window.VIEW_INIT = window.VIEW_INIT || {};

/* Control Center sub-nav definition */
const CC_NAV=[
  ['General',[['cc_general','Dashboard'],['cc_appearance','Appearance'],['cc_team','Team & Permissions']]],
  ['AI Core',[['cc_models','AI Models'],['cc_routing','AI Routing'],['cc_memory','AI Memory'],['cc_prompts','Prompt Library']]],
  ['Content',[['cc_sources','Content Sources'],['cc_style','Writing Style'],['cc_linking','Editorial Rules']]],
  ['Search & Discovery',[['cc_seo','SEO & GEO'],['cc_graph','Knowledge Graph']]],
  ['Automation',[['cc_workflows','Workflows & Triggers'],['cc_publishing','Publishing']]],
  ['Integrations',[['cc_api','API Connections'],['cc_feeds','RSS & Webhooks']]],
  ['Business',[['cc_affiliate','Affiliate Networks'],['cc_revenue','Revenue']]],
  ['System',[['cc_security','Security & Logs']]]
];

function ccShell(active, panel){
  return `<div class="cc">
    <div class="cc-nav">
      ${CC_NAV.map(g=>`<div class="cc-group"><div class="cc-gl">${g[0]}</div>${g[1].map(it=>`<button class="cc-item ${it[0]===active?'on':''}" onclick="GO('${it[0]}')">${it[1]}</button>`).join('')}</div>`).join('')}
    </div>
    <div class="cc-body fade">${panel}</div>
  </div>`;
}
function panelH(t,p){ return `<div class="cc-panel-h"><h2>${t}</h2><p>${p}</p></div>`; }

/* ── AI MODELS / PERSONALITIES ── */
const PERSONAS=[
  ['✍','Writing AI','GPT-5','Writes articles, reviews, news and comparisons in the AGNUS voice.',['Articles','Reviews','News','Comparisons']],
  ['🔍','Research AI','Claude','Only researches — never writes. Finds docs, news, papers, pricing and product changes.',['Docs','News','Papers','Pricing']],
  ['◷','SEO AI','Claude','Thinks only about Google, AI search, internal linking, schema and clusters.',['Google','GEO','Schema','Clusters']],
  ['◈','Marketplace AI','GPT-5','Hunts affiliate products, new software, price changes, commissions and launches.',['Affiliates','Launches','Pricing']],
  ['🎓','Academy AI','Claude','Creates courses, quizzes, exercises and certificates.',['Courses','Quizzes','Certificates']],
  ['📈','Business AI','Claude','Produces ROI models, business guides, industry collections and implementation plans.',['ROI','Guides','Collections']]
];
V.cc_models = () => ccShell('cc_models', panelH('AI Core · Personalities','Not one AI — a team of specialists, each with a purpose and its own model. This is the heart of AGNUS.') + `
  <div class="persona-grid">${PERSONAS.map(p=>`<div class="persona">
    <div class="persona-top"><div class="em">${p[0]}</div><div><h3>${p[1]}</h3><div class="model">▷ ${p[2]}</div></div><div class="grow"></div><span class="pill green">Active</span></div>
    <p class="desc">${p[3]}</p>
    <div class="persona-tasks">${p[4].map(t=>`<span class="pill ghost">${t}</span>`).join('')}</div>
  </div>`).join('')}</div>`);

/* ── AI ROUTING ── */
const ROUTES=[['Research','🔍','Claude','GPT-5'],['Writing','✍','GPT-5','Claude'],['Reasoning','◎','Claude','GPT-5'],['Image generation','▦','Flux','Stability'],['Translation','文','DeepL','GPT-5'],['Video','▶','Runway','—'],['Coding','‹›','Claude Code','GPT-5']];
V.cc_routing = () => ccShell('cc_routing', panelH('AI Routing','Every task picks the right model automatically. You never choose — AGNUS does. If the primary fails, the fallback takes over with no interruption.') + `
  <div class="routing">${ROUTES.map(r=>`<div class="route">
    <div class="task"><span style="font-size:16px">${r[1]}</span> ${r[0]}</div>
    <div class="chain">
      <span class="node primary"><span class="tier">Primary</span> ${r[2]}</span>
      ${r[3]!=='—'?`<span class="arrow">→</span><span class="node"><span class="tier">Fallback</span> ${r[3]}</span>`:''}
    </div></div>`).join('')}</div>
  <div class="gap-alert" style="margin-top:20px"><span class="ic">✦</span><div><b>Failover armed.</b> If OpenAI is unavailable, Writing automatically routes to Claude, then Gemini. No interruption to the pipeline.</div></div>`);

/* ── API CONNECTIONS ── */
const APIS=[
  ['OpenAI','O','GPT-5','verified',[['Last used','Today'],['Models','GPT-5, o4'],['Latency','340ms']],'sk-••••••••••••7Q2a'],
  ['Anthropic','A','Claude','verified',[['Last used','Today'],['Models','Claude 4.5'],['Latency','290ms']],'sk-ant-••••••2F9k'],
  ['Google','G','Gemini','healthy',[['Last used','2h ago'],['Models','Gemini 3'],['Latency','410ms']],'AIza••••••••dL3p'],
  ['OpenRouter','R','32 models','healthy',[['Last used','Today'],['Models','32 routed'],['Spend','€38/mo']],'sk-or-••••••9X1c'],
  ['ElevenLabs','E','Voice','healthy',[['Last used','1d ago'],['Voices','6 cloned']],'••••••••a7Kd'],
  ['Runway','◷','Video','healthy',[['Last used','3d ago'],['Credits','1,200']],'key-••••••mn4'],
  ['Stability','✦','Image','healthy',[['Last used','Today'],['Model','SD3.5']],'sk-••••••22b'],
  ['Cloudinary','☁','Media CDN','verified',[['Assets','1,840'],['Bandwidth','OK']],'cld-••••••7f']
];
V.cc_api = () => ccShell('cc_api', panelH('API Connections','Every model and service AGNUS depends on, in one place. Green means connected. Gold means verified.') + `
  <div class="api-grid">${APIS.map(a=>`<div class="api ${a[3]==='verified'?'verified':''}">
    <div class="status ${a[3]}"><span class="d"></span>${a[3]}</div>
    <div class="api-top"><div class="lo">${a[1]}</div><div><h3>${a[0]}</h3><div class="sub">${a[2]}</div></div></div>
    <div class="api-rows">${a[4].map(r=>`<div class="api-row"><span class="k">${r[0]}</span><span class="v">${r[1]}</span></div>`).join('')}</div>
    <div class="api-key"><span class="grow">${a[5]}</span><span class="tiny" style="color:var(--gold-deep)">⌥ reveal</span></div>
  </div>`).join('')}
  <button class="api" style="display:grid;place-items:center;min-height:200px;color:var(--ink-mute);border-style:dashed">+ Connect a service</button></div>`);

/* ── CONTENT SOURCES + WEIGHTS ── */
const SRC_GROUPS=[
  ['Official Sources',5,[['OpenAI',100],['Anthropic',100],['Google',95],['Microsoft',92],['Meta',88]]],
  ['News',3,[['Reuters',95],['The Verge',82],['TechCrunch',80]]],
  ['Research',1,[['arXiv',90]]],
  ['Communities',3,[['Hacker News',70],['Reddit',58],['X Lists',52]]],
  ['Media & Video',2,[['YouTube · 18 channels',74],['Product Hunt',66]]],
  ['Code',1,[['GitHub trending',76]]]
];
V.cc_sources = () => ccShell('cc_sources', panelH('Content Sources & Weights','AGNUS watches these sources — and not every source is equal. Higher weight means more trust, more influence on what gets written.') + `
  <div class="src-grid">${SRC_GROUPS.map(g=>`<div class="src-group">
    <h4>${g[0]} <span class="ct">${g[1]} active</span></h4>
    ${g[2].map(s=>`<div class="src-line"><span class="ck">✓</span> ${s[0]}<span class="w">w ${s[1]}</span><div class="wbar meter thin" style="background-size:${s[1]}% 100%"></div></div>`).join('')}
  </div>`).join('')}</div>`);
I.cc_sources = ()=>window.__fillMeters&&window.__fillMeters();

/* ── WRITING STYLE ── */
const STYLE=[['Professional',88],['Friendly',60],['Technical',74],['Marketing',22],['Educational',90],['Humor',12]];
V.cc_style = () => ccShell('cc_style', panelH('Writing Style','AGNUS has a personality. Tune it once — every AI writer follows it.') + `
  <div class="styles">${STYLE.map((s,i)=>`<div class="style-row">
    <div class="st-top"><span class="k">${s[0]}</span><span class="v" id="sv${i}">${s[1]}</span></div>
    <input type="range" class="slider" min="0" max="100" value="${s[1]}" oninput="document.getElementById('sv${i}').textContent=this.value">
  </div>`).join('')}</div>`);

/* ── PROMPT LIBRARY ── */
const PR=[['News Writer','v4 · GPT-5',96],['Review Writer','v6 · Claude',94],['Comparison Writer','v3 · Claude',92],['SEO Optimizer','v5 · Claude',91],['Marketplace Writer','v2 · GPT-5',88],['Academy Teacher','v4 · Claude',93],['Business Consultant','v3 · Claude',90],['Translator','v2 · DeepL',97],['Summarizer','v5 · GPT-5',95],['Fact Checker','v6 · Claude',98]];
V.cc_prompts = () => ccShell('cc_prompts', panelH('Prompt Library','Every AI runs on a prompt. Instead of hiding them, AGNUS keeps a versioned, owned, performance-tracked library.') + `
  <div class="prompts-list">${PR.map(p=>`<div class="prompt-row"><div class="pi">¶</div><div><div class="pn">${p[0]}</div><div class="pm">${p[1]} · owner: J-D</div></div><div class="perf"><div class="n">${p[2]}</div><div class="l">perf</div></div></div>`).join('')}</div>`);

/* ── AI MEMORY ── */
const MEM=[
  ['OpenAI',['GPT-4','GPT-4o','GPT-5']],
  ['Anthropic',['Claude 2','Claude 3.5','Claude 4.5']],
  ['Google',['Bard','Gemini 1.5','Gemini 3']]
];
V.cc_memory = () => ccShell('cc_memory', panelH('AI Memory','AGNUS remembers. Every product\'s history is known, so every future article is consistent and never contradicts itself.') + `
  <div class="memory">${MEM.map(m=>`<div class="mem"><h4>${m[0]}</h4><div class="mem-chain">${m[1].map((n,i)=>`${i>0?'<span class="mem-arrow">→</span>':''}<span class="mem-node ${i===m[1].length-1?'now':''}">${n}</span>`).join('')}</div></div>`).join('')}</div>`);

/* ── KNOWLEDGE GRAPH ── */
V.cc_graph = () => ccShell('cc_graph', panelH('Knowledge Graph','This controls how everything connects. You are literally building the AGNUS brain — no article exists alone.') + `
  <div class="kg">${['Article','Keyword','Collection','Course','Marketplace','Review','Comparison','Business Guide'].map((n,i)=>`${i>0?'<span class="kg-arrow">→</span>':''}<span class="kg-node">${n}</span>`).join('')}</div>
  <div class="gap-alert" style="margin-top:20px"><span class="ic">✦</span><div>AGNUS detected a missing connection between the <b>RAG</b> cluster and the <b>Vector Databases</b> cluster. Linking them would strengthen both.</div></div>`);

/* ── AUTOMATION ── */
const FLOW=[['trigger','⚡','<b>Trigger:</b> OpenAI releases a new model'],['','🔍','Research the announcement & sources'],['','✍','Create a news draft'],['','▦','Find screenshots & media'],['','✉','Notify editor for review'],['','◈','Suggest comparison, academy & marketplace updates'],['','📅','Schedule publication']];
V.cc_workflows = () => ccShell('cc_workflows', panelH('Workflows & Triggers','Almost everything happens automatically. Build the chain once; AGNUS runs it forever.') + `
  <div class="flow">${FLOW.map((f,i)=>`${i>0?'<div class="flow-conn"></div>':''}<div class="flow-step ${f[0]}"><div class="fi">${f[1]}</div><div class="ft">${f[2]}</div></div>`).join('')}</div>`);

/* ── AFFILIATE NETWORKS ── */
const AFFN=[['OpenAI','Recurring','90 days',12,'€4,820'],['Anthropic','Recurring','60 days',6,'€2,140'],['Notion','One-time','30 days',4,'€680'],['Zapier','Recurring','120 days',8,'€1,290']];
V.cc_affiliate = () => ccShell('cc_affiliate', panelH('Affiliate Networks','Every partner, one screen. Commissions, cookies, products and revenue at a glance.') + `
  <table class="an-table"><thead><tr><th>Partner</th><th>Commission</th><th>Cookie</th><th>Products</th><th>Revenue</th><th>Status</th></tr></thead>
  <tbody>${AFFN.map(a=>`<tr><td style="font-weight:600">${a[0]}</td><td>${a[1]}</td><td class="mono">${a[2]}</td><td class="mono">${a[3]}</td><td class="mono" style="color:var(--success);font-weight:600">${a[4]}</td><td><span class="pill green">Healthy</span></td></tr>`).join('')}</tbody></table>`);

/* ── simple placeholder panels for remaining items ── */
const STUB=(active,title,desc,body)=>()=>ccShell(active,panelH(title,desc)+(body||''));
V.cc_general = STUB('cc_general','Workspace','Your AGNUS workspace, defaults and locale.',`<div class="src-grid"><div class="src-group"><h4>Workspace</h4><div class="src-line">Name<span class="w">AGNUS</span></div><div class="src-line">Locale<span class="w">English (EU)</span></div><div class="src-line">Timezone<span class="w">CET</span></div></div><div class="src-group"><h4>Defaults</h4><div class="src-line">Default tone<span class="w">Intelligence</span></div><div class="src-line">Reading level<span class="w">Professional</span></div><div class="src-line">Currency<span class="w">EUR</span></div></div></div>`);
V.cc_appearance = STUB('cc_appearance','Appearance','Ivory & charcoal, with a soft gold accent. The AGNUS look is fixed by design — timeless, not trendy.',`<div class="row" style="gap:12px;flex-wrap:wrap">${[['Ivory','#F8F7F4'],['Charcoal','#1C1B19'],['Gold','#B28A42'],['Sapphire','#3E6AE1'],['Slate','#6E6B66']].map(c=>`<div class="card" style="padding:14px;text-align:center"><div style="width:64px;height:64px;border-radius:12px;background:${c[1]};border:1px solid var(--line);margin:0 auto 8px"></div><div class="tiny">${c[0]}</div><div class="tiny muted">${c[1]}</div></div>`).join('')}</div>`);
V.cc_team = STUB('cc_team','Team & Permissions','Who can research, write, review and publish.',`<table class="an-table"><thead><tr><th>Member</th><th>Role</th><th>Permissions</th></tr></thead><tbody>${[['Jean-Daniel','Owner','Full · final editor'],['Research AI','Agent','Research only'],['Writing AI','Agent','Draft only · no publish']].map(r=>`<tr><td style="font-weight:600">${r[0]}</td><td>${r[1]}</td><td class="muted">${r[2]}</td></tr>`).join('')}</tbody></table>`);
V.cc_linking = STUB('cc_linking','Editorial Rules','The non-negotiables every article must follow.',`<div class="checklist" style="max-width:680px">${['Every article connects to a cluster','Minimum 3 internal links','Sources cited for every claim','A clear next-step recommendation','Affiliate disclosure present','Reading time shown'].map(c=>`<div class="check"><span class="cb y">✓</span> ${c}</div>`).join('')}</div>`);
V.cc_seo = STUB('cc_seo','SEO & GEO','Schema, sitemaps, and AI-search optimization defaults.',`<div class="src-grid"><div class="src-group"><h4>SEO</h4><div class="src-line"><span class="ck">✓</span> Auto schema markup<span class="w">on</span></div><div class="src-line"><span class="ck">✓</span> Sitemap<span class="w">auto</span></div><div class="src-line"><span class="ck">✓</span> Meta generation<span class="w">on</span></div></div><div class="src-group"><h4>GEO</h4><div class="src-line"><span class="ck">✓</span> FAQ blocks<span class="w">on</span></div><div class="src-line"><span class="ck">✓</span> Entity tagging<span class="w">on</span></div><div class="src-line"><span class="ck">✓</span> Quotable summaries<span class="w">on</span></div></div></div>`);
V.cc_publishing = STUB('cc_publishing','Publishing','Channels, schedule and the weekly rhythm.',`<div class="src-grid"><div class="src-group"><h4>Channels</h4><div class="src-line"><span class="ck">✓</span> Website<span class="w">live</span></div><div class="src-line"><span class="ck">✓</span> Newsletter<span class="w">Fri</span></div><div class="src-line"><span class="ck">✓</span> RSS<span class="w">on</span></div></div><div class="src-group"><h4>Weekly rhythm</h4><div class="src-line">Mon<span class="w">News</span></div><div class="src-line">Wed<span class="w">Review / Compare</span></div><div class="src-line">Fri<span class="w">Business + Weekly</span></div></div></div>`);
V.cc_feeds = STUB('cc_feeds','RSS & Webhooks','120 feeds, 18 channels, and outbound webhooks.',`<div class="src-grid"><div class="src-group"><h4>RSS Feeds <span class="ct">120</span></h4><div class="src-line"><span class="ck">✓</span> AI company blogs<span class="w">42</span></div><div class="src-line"><span class="ck">✓</span> News<span class="w">36</span></div><div class="src-line"><span class="ck">✓</span> Newsletters<span class="w">42</span></div></div><div class="src-group"><h4>Webhooks</h4><div class="src-line"><span class="ck">✓</span> On publish<span class="w">2</span></div><div class="src-line"><span class="ck">✓</span> On price change<span class="w">1</span></div></div></div>`);
V.cc_revenue = STUB('cc_revenue','Revenue','Subscriptions, affiliate and marketplace income.',`<div class="an-grid">${[['Affiliate','€740','/mo'],['Premium','€2,100','/mo'],['Marketplace','€1,480','/mo'],['Total','€4,320','/mo']].map(m=>`<div class="metric"><div class="ml">${m[0]}</div><div class="mv">${m[1]}</div><div class="md muted">${m[2]}</div></div>`).join('')}</div>`);
V.cc_security = STUB('cc_security','Security & Logs','Backups, monitoring and the audit trail.',`<div class="src-grid"><div class="src-group"><h4>System</h4><div class="src-line"><span class="ck">✓</span> Daily backups<span class="w">healthy</span></div><div class="src-line"><span class="ck">✓</span> 2FA enforced<span class="w">on</span></div><div class="src-line"><span class="ck">✓</span> Uptime<span class="w">99.98%</span></div></div><div class="src-group"><h4>Recent logs</h4><div class="src-line tiny muted">Writing AI drafted "Restaurants guide"</div><div class="src-line tiny muted">Failover test passed · Claude</div><div class="src-line tiny muted">Backup completed 04:00 CET</div></div></div>`);

/* default control center entry */
V.control = V.cc_models;

/* ─────────────── AI COUNCIL ─────────────── */
const DIRECTORS=[['🔍','Research Director'],['✍','Content Director'],['◷','SEO Director'],['📈','Business Director'],['◈','Marketplace Director'],['🎓','Academy Director'],['📊','Analytics Director']];
const REPORT=[
  ['☀','What happened today','OpenAI shipped an agent framework and Anthropic added computer-use to the API. Both are <b>high-impact</b> and already trending in your audience.'],
  ['◆','Opportunities discovered','<b>6 keywords</b> rose this week. "best AI tools for restaurants" (8.7) and "AI for dental clinics" (8.9) are low-competition, high-affiliate wins.'],
  ['✎','What to create','Publish <b>"Best AI Agents for Small Businesses"</b> next — rising demand, strong affiliate value, and it fills a gap in your AI Agents cluster.'],
  ['↻','What needs updating','<b>3 reviews</b> are outdated after yesterday\'s pricing changes. The ChatGPT review dropped 4 positions.'],
  ['€','Where revenue is growing','Affiliate revenue is up <b>+€120 MoM</b>, led by the Lawyers guide. Marketplace bundles are the fastest-growing line.'],
  ['◢','Which clusters are weak','<b>Restaurants</b> (31%) and <b>RAG</b> (49%) need pillars reinforced. Add the 3 missing supporting articles.'],
  ['◎','Strategic priorities','1) Ship the Agents buying guide. 2) Refresh 3 reviews. 3) Strengthen the Restaurants cluster. Est. authority gain: <b>High</b>.']
];
V.council = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> The AI Council</div>
  <h1>Your executive team, on demand.</h1>
  <p>Seven specialist directors review everything and return one strategic brief. This is what turns AGNUS from a CMS into an operating system.</p>
</div>
<div class="council-banner"><div class="tx"></div><div class="glow"></div>
  <div class="seal">✦</div>
  <div class="grow"><h3>Hold a Council Meeting</h3><p>The directors convene, review the last 24 hours, and report back in about thirty seconds.</p></div>
  <button class="b b-gold" id="holdBtn" onclick="holdCouncil()">Hold meeting →</button>
</div>
<div class="directors" id="directors">${DIRECTORS.map(d=>`<div class="director"><div class="em">${d[0]}</div><div class="dn">${d[1]}</div><div class="ds">Idle</div></div>`).join('')}</div>
<div id="reportWrap"></div>`;

I.council = () => {};
window.holdCouncil = function(){
  const btn=document.getElementById('holdBtn'); if(btn){ btn.textContent='Convening…'; btn.disabled=true; btn.style.opacity='.6'; }
  const dirs=[...document.querySelectorAll('#directors .director')];
  dirs.forEach((d,i)=>setTimeout(()=>{ d.classList.add('thinking'); const s=d.querySelector('.ds'); s.textContent='Analyzing…'; s.classList.add('live'); },i*220));
  setTimeout(()=>{
    dirs.forEach(d=>{ d.classList.remove('thinking'); const s=d.querySelector('.ds'); s.textContent='Reported'; });
    const wrap=document.getElementById('reportWrap');
    wrap.innerHTML=`<div class="sec-title"><h2>Council brief · 29 June, 09:14</h2><span class="tiny muted">compiled in 28s</span></div>
      <div class="report fade">${REPORT.map(r=>`<div class="report-row"><div class="ri">${r[0]}</div><div class="rt"><h4>${r[1]}</h4><p>${r[2]}</p></div></div>`).join('')}</div>`;
    if(btn){ btn.textContent='Meeting complete ✓'; }
    wrap.scrollIntoView({behavior:'smooth',block:'nearest'});
  }, dirs.length*220+700);
};

})();

/* === dash-knowledge.js === */
/* AGNUS Dashboard — KNOWLEDGE SYSTEM (intelligence layer).
   Knowledge Sources, Source Scoring, Knowledge Database, Knowledge Graph, Entity Manager, Sync Logs. */
(function(){
const V = window.VIEWS = window.VIEWS || {};
const I = window.VIEW_INIT = window.VIEW_INIT || {};
const meter=(v,cls)=>`<div class="meter ${cls||''}" style="background-size:${v}% 100%"></div>`;

/* ═══════════ EXACT DATA SOURCES (from the brief) ═══════════ */
/* group: [name, count, trust, lastSync, errors, blurb, sources[]]
   source: [name, type, trust, sync, status, url, usedFor[]] */
const SOURCE_GROUPS = {
  official:{label:'Official Companies',trust:99,sync:'14 min ago',err:0,
    blurb:'Models, pricing, releases, changelogs — the highest-trust facts. Official API + website/blog.',
    sources:[
      ['OpenAI','Official Company',100,'15 min','healthy','openai.com/news · /docs · /pricing',['News','Pricing','Features','Reviews','Comparisons','Marketplace','Academy']],
      ['Anthropic','Official Company',100,'15 min','healthy','anthropic.com · API',['News','Pricing','Features','Reviews','Comparisons']],
      ['Google AI','Official Company',98,'30 min','healthy','ai.google.dev (Gemini, Veo)',['News','Features','Comparisons']],
      ['Microsoft','Official Company',98,'30 min','healthy','learn.microsoft.com (Copilot, Azure AI)',['News','Features']],
      ['Mistral','Official Company',95,'1 hour','healthy','docs.mistral.ai',['News','Features']],
      ['Perplexity','Official Company',94,'1 hour','healthy','perplexity.ai',['News','Features']],
      ['ElevenLabs','Official Company',93,'2 hours','healthy','elevenlabs.io/docs (Voice)',['Features']],
      ['Runway','Official Company',92,'2 hours','healthy','runwayml.com/docs (Video)',['Features']],
      ['Cursor','Official Company',93,'1 hour','healthy','cursor.com',['Pricing','Features']],
      ['Notion AI','Official Company',90,'6 hours','healthy','notion.so',['Features']]
    ]},
  search:{label:'Search Demand',trust:91,sync:'2 hours ago',err:0,
    blurb:'Rising searches, rankings and real user behavior. Feeds Keyword Discovery and the AGNUS Brain.',
    sources:[
      ['Google Trends','Search Demand',90,'12 hours','healthy','trends.google.com',['Keywords','Demand','Brain']],
      ['Google Search Console','Search Demand',92,'1 day','healthy','search.google.com/search-console',['Rankings','CTR','Impressions']],
      ['Google Analytics 4','Internal Behavior',95,'Realtime','healthy','analytics.google.com',['Time on page','Bounce','Conversion','Scroll']],
      ['Bing Webmaster Tools','Search Demand',85,'1 day','healthy','bing.com/webmasters',['AI search traffic']]
    ]},
  news:{label:'News',trust:84,sync:'22 min ago',err:1,
    blurb:'Detect breaking AI news. Every 30 minutes.',
    sources:[
      ['Reuters Technology','News',95,'30 min','healthy','reuters.com/technology',['News']],
      ['Associated Press Tech','News',94,'30 min','healthy','apnews.com',['News']],
      ['TechCrunch','News',82,'30 min','healthy','techcrunch.com',['News']],
      ['The Verge AI','News',82,'30 min','healthy','theverge.com/ai-artificial-intelligence',['News']],
      ['VentureBeat AI','News',80,'30 min','healthy','venturebeat.com/ai',['News']],
      ['Ars Technica AI','News',83,'1 hour','healthy','arstechnica.com',['News']],
      ['MIT Technology Review','News',90,'1 hour','healthy','technologyreview.com',['News','Research']],
      ['IEEE Spectrum AI','News',88,'1 hour','error','spectrum.ieee.org',['News','Research']]
    ]},
  research:{label:'Research',trust:90,sync:'3 hours ago',err:0,
    blurb:'Deep technical depth — papers, benchmarks and leaderboards.',
    sources:[
      ['arXiv','Research',92,'6 hours','healthy','arxiv.org (cs.AI, cs.CL, cs.LG)',['Research','Depth']],
      ['Semantic Scholar','Research',88,'1 day','healthy','semanticscholar.org',['Research']],
      ['Papers with Code','Research',90,'1 day','healthy','paperswithcode.com',['Benchmarks','Leaderboards']]
    ]},
  developer:{label:'Developer Signals',trust:83,sync:'1 hour ago',err:0,
    blurb:'New models, open-source momentum and developer activity.',
    sources:[
      ['GitHub Trending','Developer',85,'1 day','healthy','github.com/trending',['Repos','Releases','Stars','Issues']],
      ['Hugging Face','Developer',88,'6 hours','healthy','huggingface.co',['Models','Datasets','Spaces']],
      ['Product Hunt','Product Discovery',76,'1 day','healthy','producthunt.com',['New launches']]
    ]},
  community:{label:'Community Signals',trust:62,sync:'1 hour ago',err:0,
    blurb:'Early signals only — what people are discussing. Can trigger investigation; cannot confirm facts.',
    sources:[
      ['Reddit · r/OpenAI','Social',64,'1 hour','noisy','reddit.com/r/OpenAI',['Early signals']],
      ['Reddit · r/ClaudeAI','Social',64,'1 hour','noisy','reddit.com/r/ClaudeAI',['Early signals']],
      ['Reddit · r/LocalLLaMA','Social',66,'1 hour','noisy','reddit.com/r/LocalLLaMA',['Early signals']],
      ['Reddit · r/MachineLearning','Social',68,'1 hour','noisy','reddit.com/r/MachineLearning',['Early signals']],
      ['Reddit · r/singularity','Social',55,'1 hour','noisy','reddit.com/r/singularity',['Early signals']],
      ['Reddit · r/artificial','Social',58,'1 hour','noisy','reddit.com/r/artificial',['Early signals']],
      ['Reddit · r/ChatGPT','Social',60,'1 hour','noisy','reddit.com/r/ChatGPT',['Early signals']],
      ['X List · AI Labs','Social',60,'30 min','noisy','x.com (OpenAI, Anthropic, Google)',['Early signals']],
      ['X List · Researchers & Founders','Social',58,'30 min','noisy','x.com (curated list)',['Early signals']],
      ['LinkedIn','Social',65,'1 day','healthy','linkedin.com',['Company announcements','Enterprise trends']]
    ]},
  affiliate:{label:'Affiliate Networks',trust:90,sync:'1 day ago',err:0,
    blurb:'Revenue intelligence — commission changes, new partners, program closures.',
    sources:[
      ['PartnerStack','Affiliate',92,'1 day','healthy','partnerstack.com',['Commissions','Programs']],
      ['Impact','Affiliate',92,'1 day','healthy','impact.com',['Commissions','Programs']],
      ['CJ (Commission Junction)','Affiliate',88,'1 day','healthy','cj.com',['Commissions']],
      ['Awin','Affiliate',86,'1 day','healthy','awin.com',['Commissions']],
      ['FirstPromoter','Affiliate',85,'1 day','healthy','firstpromoter.com',['Commissions']],
      ['Rewardful','Affiliate',84,'1 day','healthy','rewardful.com',['Commissions']],
      ['ShareASale','Affiliate',82,'1 day','healthy','shareasale.com',['Commissions']]
    ]},
  marketplace:{label:'Marketplace Data',trust:84,sync:'1 day ago',err:0,
    blurb:'Detect pricing and ratings. Feeds Comparisons.',
    sources:[
      ['G2','Marketplace',88,'1 day','healthy','g2.com',['Ratings','Pricing','Comparisons']],
      ['Capterra','Marketplace',85,'1 day','healthy','capterra.com',['Ratings','Pricing']],
      ['AlternativeTo','Marketplace',80,'1 day','healthy','alternativeto.net',['Alternatives']],
      ['StackShare','Marketplace',78,'1 day','healthy','stackshare.io',['Tech stacks']]
    ]},
  internal:{label:'Internal AGNUS Data',trust:97,sync:'Realtime',err:0,
    blurb:'The most valuable source — data AGNUS generates itself. Behavior, conversions and priorities.',
    sources:[
      ['AGNUS Analytics','Internal',98,'Realtime','healthy','agnus.internal',['Behavior','Priorities']],
      ['Newsletter','Internal',95,'Realtime','healthy','agnus.internal/newsletter',['Clicks','Opens']],
      ['Marketplace','Internal',96,'Realtime','healthy','agnus.internal/market',['Purchases']],
      ['Academy','Internal',94,'Realtime','healthy','agnus.internal/academy',['Enrollments']],
      ['Reader Behavior','Internal',97,'Realtime','healthy','agnus.internal',['Reading time','Scroll','Bookmarks']],
      ['User Searches','Internal',96,'Realtime','healthy','agnus.internal',['Intent','Demand']],
      ['Revenue','Internal',99,'Realtime','healthy','agnus.internal',['Conversions','Premium']]
    ]},
  manual:{label:'Manual Sources',trust:100,sync:'On demand',err:0,
    blurb:'Never automated. Editor-maintained ground truth — screenshots, pricing verification, opinions.',
    sources:[
      ['Official screenshots','Manual',100,'Manual','healthy','editor upload',['Media']],
      ['Pricing verification','Manual',100,'Manual','healthy','editor',['Pricing']],
      ['Legal notes','Manual',100,'Manual','healthy','editor',['Compliance']],
      ['Pros / cons','Manual',100,'Manual','healthy','editor',['Reviews']],
      ['Editorial opinions','Manual',100,'Manual','healthy','editor',['Verdict']],
      ["Editor's rating","Manual",100,'Manual','healthy','editor',['Scores']],
      ['Video reviews','Manual',100,'Manual','healthy','editor',['Media']]
    ]}
};
const GROUP_ORDER=['official','search','news','research','developer','community','affiliate','marketplace','internal','manual'];
const GROUP_ICON={official:'🏢',search:'⌕',news:'◎',research:'✦',developer:'‹›',community:'◐',affiliate:'€',marketplace:'▦',internal:'◆',manual:'✎'};
function trustClass(t){ return t>=90?'green':t>=70?'gold':t>=50?'warn':'red'; }
function statusPill(s){ const m={healthy:['green','Healthy'],error:['red','Error'],noisy:['warn','Noisy'],disabled:['ghost','Disabled']}; const x=m[s]||m.healthy; return `<span class="pill ${x[0]}">${x[1]}</span>`; }

/* ── ARCHITECTURE FLOW STRIP ── */
const ARCH=['External World','Integrations / API Keys','Knowledge Sources','Sync Engine','Knowledge Database','Knowledge Graph','AGNUS Brain','Story Builder','AI Writer','Published'];
function archStrip(){ return `<div class="arch"><div class="arch-tx"></div>${ARCH.map((n,i)=>`${i>0?'<span class="arch-arr">↓</span>':''}<span class="arch-node ${i>=2&&i<=6?'on':''}">${n}</span>`).join('')}</div>`; }
/* ingestion type derived from group/source */
function srcIngest(s){ const t=s[1]; const n=s[0];
  if(t==='Manual')return 'Manual'; if(t==='Internal')return 'Webhook';
  if(t==='News')return 'RSS'; if(t==='Social'&&n.indexOf('Reddit')===0)return 'RSS';
  if(t==='Official Company'||t==='Search Demand'||t==='Internal Behavior'||t==='Affiliate'||t==='Research'||t==='Developer')return 'API';
  if(t==='Marketplace'||t==='Product Discovery')return 'HTML'; return 'API'; }

/* ═══════════ 1 · KNOWLEDGE SOURCES ═══════════ */
V.know_sources = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Knowledge · Knowledge Sources</div>
  <h1>Where AGNUS gets its knowledge.</h1>
  <p>The Brain never searches the internet directly — it reads only from here. 53 sources across 10 groups, each scored and continuously synced.</p>
</div>
<div class="ks-arch-wrap"><div class="ks-arch-label">The intelligence architecture</div>${archStrip()}</div>
<div class="an-grid" style="grid-template-columns:repeat(4,1fr);margin:24px 0 6px">
  ${[['Sources connected','53','+4 this mo'],['Avg trust score','87','/100'],['Last full sync','14 min','ago'],['Sync errors','1','needs review']].map(m=>`<div class="metric"><div class="ml">${m[0]}</div><div class="mv">${m[1]}</div><div class="md muted">${m[2]}</div></div>`).join('')}
</div>
<div class="sec-title"><h2>Source groups</h2><span class="tiny muted">click Manage to open a group</span></div>
<div class="ksg-grid">
  ${GROUP_ORDER.map(k=>{const g=SOURCE_GROUPS[k];return `<div class="ksg" onclick="GO('ksrc_${k}')">
    <div class="ksg-top"><div class="ksg-ic">${GROUP_ICON[k]}</div><span class="pill ${trustClass(g.trust)} ksg-badge">Trust ${g.trust}/100</span></div>
    <h3>${g.label}</h3>
    <div class="ksg-stats"><div><b>${g.sources.length}</b> connected</div><div style="color:${g.err?'var(--error)':'var(--success)'}"><b>${g.err}</b> error${g.err!==1?'s':''}</div><div class="muted">Last sync ${g.sync}</div></div>
    <div class="ksg-bar" style="margin:12px 0 16px">${meter(g.trust)}</div>
    <button class="b b-line b-sm b-block">Manage →</button>
  </div>`;}).join('')}
</div>`;
I.know_sources = ()=>window.__fillMeters&&window.__fillMeters();

/* ── Layer 2: per-group source list (one view per group) ── */
GROUP_ORDER.forEach(k=>{
  const g=SOURCE_GROUPS[k];
  V['ksrc_'+k] = () => `
  <div class="page-h"><div class="row" style="align-items:flex-start"><div>
    <div class="eyebrow"><span class="ix">◆</span> Knowledge Sources · <a onclick="GO('know_sources')" style="cursor:pointer">all groups</a> ›</div>
    <h1>${g.label}</h1>
    <p>${g.blurb}</p>
  </div><div class="grow"></div><button class="b b-line" onclick="GO('know_sources')">← Back</button><button class="b b-dark" onclick="syncNow(this)">⟳ Sync now</button></div></div>
  <div class="row" style="gap:8px;flex-wrap:wrap;margin-bottom:18px">
    <span class="pill gold">Group trust ${g.trust}/100</span><span class="pill ghost">${g.sources.length} sources</span><span class="pill ${g.err?'red':'green'}">${g.err} error${g.err!==1?'s':''}</span><span class="pill ghost">synced ${g.sync}</span>
  </div>
  <table class="an-table src-table"><thead><tr><th>Source</th><th>Ingestion</th><th>Trust</th><th>Sync</th><th>Last Updated</th><th>Status</th><th>Used For</th><th>Action</th></tr></thead>
  <tbody>${g.sources.map((s,i)=>`<tr>
    <td style="font-weight:600">${s[0]}<div class="tiny muted" style="font-weight:400">${s[1]}</div></td>
    <td><span class="ingest ${srcIngest(s).toLowerCase()}">${srcIngest(s)}</span></td>
    <td><span class="tnum ${trustClass(s[2])}">${s[2]}</span></td>
    <td class="mono muted">${s[3]}</td>
    <td class="mono muted">${s[3]==='Realtime'||s[3]==='Manual'?s[3]:s[3]+' ago'}</td>
    <td>${statusPill(s[4])}</td>
    <td class="muted" style="font-size:12px">${s[6].slice(0,2).join(', ')}${s[6].length>2?` +${s[6].length-2}`:''}</td>
    <td style="text-align:right;white-space:nowrap"><button class="b b-line b-sm" onclick='openSource(${JSON.stringify(s).replace(/'/g,"&#39;")},"${g.label}")'>View</button></td>
  </tr>`).join('')}</tbody></table>
  <div class="gap-alert" style="margin-top:18px"><span class="ic">✦</span><div>Each source can <b>Create draft automatically</b>, <b>Alert editor</b>, <b>Update entity database</b> and <b>Flag affected articles</b> — but <b>never publish automatically</b>. You stay the final editor.</div></div>`;
});

/* ═══════════ 2 · SOURCE SCORING ═══════════ */
const SCORE_FACTORS=[['Trust Score',40,'Is the source authoritative?'],['Freshness Score',20,'How current is the data?'],['Relevance Score',20,'How relevant to AGNUS topics?'],['Signal Strength',15,'How strong is the signal?'],['Noise Control',5,'How much noise to filter?']];
const SCORE_EXAMPLES=[
  ['OpenAI Official Blog','official',[100,95,100,90,95],97],
  ['Google Trends','search',[90,80,95,85,90],88],
  ['Reuters Technology','news',[95,90,85,80,90],90],
  ['arXiv','research',[92,70,90,85,95],86],
  ['GitHub Trending','developer',[85,80,80,75,80],81],
  ['Reddit · r/OpenAI','social',[64,85,70,80,40],64]
];
const SCORE_CATS=[['Official Company','95–100','Facts, pricing, product changes','green'],['Google Trends / Search Console','85–95','Demand, keyword movement','green'],['News Sources','70–95','Industry news','gold'],['Research Sources','85–95','Technical depth','green'],['GitHub / Hugging Face','75–90','Developer activity','gold'],['Reddit / X / LinkedIn','40–75','Early signals only','warn'],['Affiliate Networks','80–95','Revenue opportunities','green'],['Internal AGNUS Data','90–100','User behavior, conversions','green']];
V.know_scoring = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Knowledge · Source Scoring</div>
  <h1>Who AGNUS trusts — and why.</h1>
  <p>Every source scores 0–100 across five factors. Official sources dominate. Social can trigger investigation, but never confirms a fact.</p>
</div>
<div class="opp" style="margin-bottom:24px"><div class="tx"></div>
  <h3>How is a source score calculated?</h3>
  <div class="sub">Final Source Score = a weighted sum of five factors. Official sources dominate by design.</div>
  <div class="formula">${SCORE_FACTORS.map(f=>`<div class="fterm"><div class="fw">${f[1]}%</div><div class="fn">${f[0].replace(' Score','').replace(' Strength','').replace(' Control','')}</div><div class="fd">${f[2]}</div></div>`).join('<span class="fplus">+</span>')}</div>
</div>
<div class="sec-title"><h2>Example breakdowns</h2><span class="tiny muted">overall first, then the factors</span></div>
<div class="kw-grid">${SCORE_EXAMPLES.map(e=>`<div class="kw"><div class="kw-top"><h3 style="font-family:var(--font-sans);font-weight:700">${e[0]}</h3><div class="kw-score"><div class="n ${e[2]>=85?'hi':e[2]>=60?'mid':''}">${e[2]}</div><div class="l">Overall</div></div></div>
  <div class="score-rows">${SCORE_FACTORS.map((f,i)=>`<div class="score-row"><span class="sr-k">${f[0].replace(' Score','').replace(' Strength','').replace(' Control','')}</span><div class="sr-bar">${meter(e[1][i])}</div><span class="sr-v">${e[1][i]}</span></div>`).join('')}</div></div>`).join('')}</div>
<div class="sec-title"><h2>Trust ranges by category</h2></div>
<table class="an-table"><thead><tr><th>Category</th><th>Trust range</th><th>Use for</th></tr></thead>
<tbody>${SCORE_CATS.map(c=>`<tr><td style="font-weight:600">${c[0]}</td><td><span class="pill ${c[3]}">${c[1]}</span></td><td class="muted">${c[2]}</td></tr>`).join('')}</tbody></table>
<div class="gap-alert" style="margin-top:18px"><span class="ic">⚠</span><div><b>Hard rule:</b> a social signal can <b>trigger an investigation</b>, but it can <b>never confirm a fact</b>. Only official and internal sources confirm.</div></div>`;
I.know_scoring = ()=>window.__fillMeters&&window.__fillMeters();

/* ═══════════ 3 · KNOWLEDGE DATABASE ═══════════ */
const KDB_TABS=['Companies','Products','People','Models','Features','Pricing','Industries','Keywords','Articles','Comparisons','Marketplace','Courses','Sources'];
V.know_db = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Knowledge · Knowledge Database</div>
  <h1>The single source of truth.</h1>
  <p>Collected data, structured. Everything the website displays and everything the AI writes is grounded here — not in a live web search.</p>
</div>
<div class="kdb-tabs" id="kdbTabs">${KDB_TABS.map((t,i)=>`<button class="kdb-tab ${i===1?'on':''}" onclick="kdbTab('${t}',this)">${t}</button>`).join('')}</div>
<div id="kdbBody"></div>`;
function kdbProducts(){ return `
  <div class="db-detail card">
    <div class="db-head"><div class="lo">A</div><div><h2>Claude</h2><div class="sub">Anthropic · AI Assistant · verified today</div></div><div class="grow"></div><span class="pill gold">✦ Verified record</span></div>
    <div class="db-cols">
      <div class="db-col"><h4>Facts</h4>${[['Company','Anthropic'],['Category','AI Assistant'],['Pricing','$20/mo'],['API','$3/1M in'],['Last verified','Today']].map(p=>`<div class="src-line">${p[0]}<span class="w">${p[1]}</span></div>`).join('')}</div>
      <div class="db-col"><h4>Sources</h4>${['Anthropic pricing page','Anthropic docs','G2 reviews (124)'].map(p=>`<div class="src-line"><span class="ck">✓</span> ${p}</div>`).join('')}</div>
      <div class="db-col"><h4>Connected content</h4>${['Claude Review','Claude vs ChatGPT','Best AI Tools for Writers','AI Agents Course'].map(p=>`<div class="src-line" style="color:var(--sapphire)">▷ ${p}</div>`).join('')}</div>
    </div>
  </div>
  <div class="sec-title"><h2>All products</h2></div>
  <div class="kdb-toolbar">
    <div class="kdb-search"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="9" r="6"/><path d="M14 14l4 4"/></svg><input type="text" placeholder="Search products…" oninput="kdbSearch(this.value)"></div>
    <div class="kdb-fchips">${['All','Verified','Needs Review','Growing','Stale','High Impact'].map((f,i)=>`<button class="rchip ${i===0?'on':''}" onclick="kdbFilter('${f}',this)">${f}</button>`).join('')}</div>
    <div class="grow"></div>
    <div class="kdb-bulk">${['Refresh','Verify','Archive','Merge'].map(b=>`<button class="b b-line b-sm">${b}</button>`).join('')}</div>
  </div>
  <table class="an-table" id="kdbTable"><thead><tr><th><input type="checkbox"></th><th>Product</th><th>Company</th><th>Pricing</th><th>Health</th><th>Confidence</th><th>Status</th></tr></thead>
  <tbody>${[['Claude','Anthropic','$20/mo',95,96,'Verified'],['ChatGPT','OpenAI','$20/mo',97,98,'Verified'],['Gemini','Google','$20/mo',88,90,'Growing'],['Cursor','Anysphere','$20/mo',83,88,'Needs Review'],['Perplexity','Perplexity','$20/mo',81,84,'Stale'],['Mistral','Mistral','€15/mo',74,79,'Growing']].map(r=>`<tr data-name="${r[0].toLowerCase()}" data-status="${r[5]}"><td><input type="checkbox"></td><td style="font-weight:600">${r[0]}</td><td class="muted">${r[1]}</td><td class="mono">${r[2]}</td><td><span class="tnum ${r[3]>=90?'green':r[3]>=78?'gold':'warn'}">${r[3]}</span></td><td><span class="tnum ${r[4]>=90?'green':'gold'}">${r[4]}</span></td><td>${r[5]==='Verified'?'<span class="pill gold">✦ Verified</span>':r[5]==='Stale'?'<span class="pill red">Stale</span>':r[5]==='Needs Review'?'<span class="pill warn">Needs Review</span>':'<span class="pill green">Growing</span>'}</td></tr>`).join('')}</tbody></table>`;
}
window.kdbSearch=function(q){ q=q.toLowerCase(); document.querySelectorAll('#kdbTable tbody tr').forEach(r=>{ r.style.display=r.dataset.name.includes(q)?'':'none'; }); };
window.kdbFilter=function(f,el){ document.querySelectorAll('.kdb-fchips .rchip').forEach(b=>b.classList.toggle('on',b===el)); document.querySelectorAll('#kdbTable tbody tr').forEach(r=>{ r.style.display=(f==='All'||r.dataset.status===f||(f==='High Impact'))?'':'none'; }); };
function kdbGeneric(tab){ const data={
  Companies:[['OpenAI','10 products','Today'],['Anthropic','4 products','Today'],['Google','8 products','2d ago'],['Microsoft','6 products','2d ago']],
  People:[['Sam Altman','CEO, OpenAI','—'],['Dario Amodei','CEO, Anthropic','—'],['Demis Hassabis','CEO, DeepMind','—']],
  Models:[['GPT-5','OpenAI','Today'],['Claude 4.5','Anthropic','Today'],['Gemini 3','Google','2d ago']],
  Pricing:[['ChatGPT Plus','$20/mo','Today'],['Claude Pro','$20/mo','Today'],['Gemini Advanced','$20/mo','2d ago']],
  Keywords:[['best ai agents','8.9','tracked'],['claude vs chatgpt','8.4','tracked'],['ai for restaurants','8.7','tracked']],
  Industries:[['Healthcare','60% covered','growing'],['Restaurants','100% covered','strong'],['Legal','64% covered','growing']]
}[tab]||[['Record','—','—'],['Record','—','—']];
  return `<table class="an-table"><thead><tr><th>${tab.replace(/s$/,'')}</th><th>Detail</th><th>Status</th></tr></thead><tbody>${data.map(r=>`<tr><td style="font-weight:600">${r[0]}</td><td class="muted">${r[1]}</td><td class="mono muted">${r[2]}</td></tr>`).join('')}</tbody></table>`; }
window.kdbTab=function(tab,el){ [...el.parentElement.children].forEach(c=>c.classList.remove('on')); el.classList.add('on'); document.getElementById('kdbBody').innerHTML=(tab==='Products')?kdbProducts():kdbGeneric(tab); };
I.know_db = ()=>{ document.getElementById('kdbBody').innerHTML=kdbProducts(); };

/* ═══════════ 4 · KNOWLEDGE GRAPH ═══════════ */
V.know_graph = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Knowledge · Knowledge Graph</div>
  <h1>Everything, connected.</h1>
  <p>This is what makes the Brain intelligent. When pricing changes, AGNUS knows exactly which pages are affected.</p>
</div>
<div class="kgraph"><div class="kgtx"></div>
  <div class="kg-row">${['OpenAI','ChatGPT','Pricing'].map(n=>`<button class="kgn" onclick="kgPick('${n}',this)">${n}</button>`).join('<span class="kg-link"></span>')}</div>
  <div class="kg-branch">${['Review','Comparison','Marketplace','Academy','Business Guide','Industry Collection'].map(n=>`<button class="kgn" onclick="kgPick('${n}',this)">${n}</button>`).join('')}</div>
  <div class="tiny" style="color:var(--on-dark-mute);text-align:center;margin-top:18px">Click any node to inspect it</div>
</div>
<div id="kgPanel"></div>
<div class="council-banner" style="margin:24px 0 0"><div class="tx"></div><div class="glow"></div>
  <div class="seal">⚡</div>
  <div class="grow"><h3>When OpenAI changes GPT pricing…</h3><p>The Sync Engine notices, the Database updates, and the Graph marks every affected page — each with a priority. Try it →</p></div>
  <button class="b b-gold" id="ripBtn" onclick="rippleGraph()">Simulate pricing change</button>
</div>
<div id="ripOut"></div>`;
const KG_NODES={
  'OpenAI':{type:'Company',articles:11,revenue:'€3,400/mo',traffic:'42k/mo',links:38,related:['ChatGPT','GPT-5','Sam Altman'],source:'Official API + blog'},
  'ChatGPT':{type:'Product',articles:6,revenue:'€1,200/mo',traffic:'28k/mo',links:22,related:['OpenAI','Claude','Pricing'],source:'Official website'},
  'Pricing':{type:'Attribute',articles:9,revenue:'€640/mo',traffic:'12k/mo',links:14,related:['ChatGPT','Reviews','Comparisons'],source:'Official pricing page'},
  'Review':{type:'Content',articles:1,revenue:'€40/mo',traffic:'8k/mo',links:12,related:['ChatGPT','Comparison'],source:'Editorial + G2'},
  'Comparison':{type:'Content',articles:3,revenue:'€90/mo',traffic:'10k/mo',links:18,related:['Review','Marketplace'],source:'Knowledge DB'},
  'Marketplace':{type:'Content',articles:1,revenue:'€10/mo',traffic:'3k/mo',links:9,related:['Comparison','Business Guide'],source:'Marketplace DB'},
  'Academy':{type:'Content',articles:2,revenue:'—',traffic:'4k/mo',links:7,related:['Review','Business Guide'],source:'Academy DB'},
  'Business Guide':{type:'Content',articles:5,revenue:'€40/mo',traffic:'6k/mo',links:11,related:['Marketplace','Industry Collection'],source:'Business DB'},
  'Industry Collection':{type:'Content',articles:8,revenue:'€159/mo',traffic:'5k/mo',links:14,related:['Business Guide','Marketplace'],source:'Marketplace DB'}
};
window.kgPick=function(name,el){ document.querySelectorAll('.kgn').forEach(b=>b.classList.toggle('on',b===el)); const d=KG_NODES[name]||KG_NODES['OpenAI'];
  document.getElementById('kgPanel').innerHTML=`<div class="kgp card fade"><div class="kgp-h"><div><div class="tiny muted mono">${d.type}</div><h3>${name}</h3></div><span class="pill gold">✦ In Knowledge Graph</span></div>
  <div class="kgp-stats">${[['Articles',d.articles],['Revenue',d.revenue],['Traffic',d.traffic],['Internal links',d.links]].map(x=>`<div class="kgp-stat"><div class="kl">${x[0]}</div><div class="kv">${x[1]}</div></div>`).join('')}</div>
  <div class="kgp-foot"><div><div class="tiny muted mono" style="margin-bottom:6px">RELATED ENTITIES</div>${d.related.map(r=>`<span class="pill ghost" style="margin:0 6px 6px 0;cursor:pointer" onclick="kgPick('${r}')">${r}</span>`).join('')}</div><div style="text-align:right"><div class="tiny muted mono" style="margin-bottom:6px">SOURCE</div><span class="pill blue">${d.source}</span></div></div></div>`;
};
I.know_graph=()=>{ const f=document.querySelector('.kgn'); if(f)window.kgPick('OpenAI',f); };
window.rippleGraph=function(){
  const btn=document.getElementById('ripBtn'); if(btn){btn.textContent='Propagating…';btn.disabled=true;btn.style.opacity='.6';}
  const out=document.getElementById('ripOut'); out.innerHTML='';
  const affected=[['1 review','ChatGPT Review','€40/mo','Critical',5],['3 comparison pages','GPT-5 vs Claude · GPT vs Gemini · GPT vs Perplexity','€90/mo','High',4],['2 academy lessons','Master GPT-5 · Prompt Engineering','—','Medium',3],['5 business guides','SMB AI · Enterprise · Legal · Healthcare · Retail','€40/mo','Medium',3],['1 marketplace listing','OpenAI Collection','€10/mo','Low',2]];
  const prClass={Critical:'red',High:'warn',Medium:'gold',Low:'ghost'};
  const stars=n=>'★'.repeat(n)+'<span style="color:var(--line)">'+'★'.repeat(5-n)+'</span>';
  setTimeout(()=>{
    out.innerHTML=`<div class="sec-title"><h2>OpenAI changed GPT pricing · 11 min ago</h2><span class="tiny muted">detected by Sync Engine · ranked by priority</span></div>
    <div class="report fade">${affected.map(a=>`<div class="report-row"><div class="ri">↻</div><div class="rt"><h4>${a[0]} <span class="pill ${prClass[a[3]]}" style="margin-left:8px">${a[3]}</span> <span class="prio-stars" style="margin-left:6px">${stars(a[4])}</span> <span class="tiny" style="color:var(--success);font-weight:600;margin-left:8px">${a[2]!=='—'?'protects '+a[2]:''}</span></h4><p>${a[1]}</p></div></div>`).join('')}
    <div class="report-row" style="background:var(--graphite);color:#fff"><div class="ri" style="background:var(--gold);color:#241B07">✦</div><div class="rt"><h4 style="color:#fff">Estimated update time: 48 minutes · Revenue protected: €180/month</h4><p style="color:var(--on-dark-soft)">You didn't search for anything. You didn't ask. The system is alive.</p></div></div></div>`;
    if(btn){btn.textContent='12 pages flagged ✓';}
    out.scrollIntoView({behavior:'smooth',block:'nearest'});
  },1100);
};

/* ═══════════ 5 · ENTITY MANAGER (rich) ═══════════ */
const ENT_DATA={
  OpenAI:{type:'Company',ic:'O',verified:1,health:97,conf:98,memory:'18 months',influence:'High',trend:'Growing',updated:'4 hours ago',
    desc:'The research lab behind ChatGPT and the GPT model family — the most-referenced company across AGNUS.',mission:'Ensure that artificial general intelligence benefits all of humanity.',
    category:'AI Research Lab',website:'openai.com',founders:'Altman, Brockman, Sutskever, Musk',ceo:'Sam Altman',country:'United States',founded:'2015',cap:'~$157B (private)',
    connected:{Products:14,Articles:32,Comparisons:8,Competitors:4,'Internal links':62},
    products:['ChatGPT','GPT-5','Codex','Sora','DALL·E','Whisper'],competitors:['Anthropic','Google','Perplexity','xAI'],partners:['Microsoft'],
    mentioned:[['Articles',42],['Reviews',8],['Comparisons',17]],sources:['Official','Wikipedia','Reuters','Research Papers','Documentation'],
    health_items:[['Pricing page','ok','Verified today'],['Internal links','ok','62 healthy, 0 broken'],['CEO','ok','Current'],['Model list','warn','GPT-5.1 may need adding'],['Articles','ok','None stale']],
    suggestions:[['article','Write "GPT-5 vs Claude 5"'],['refresh','Refresh API pricing'],['cluster','Build AI Agents guide'],['affiliate','Add 2 affiliate links'],['media','Create a video script'],['faq','Create FAQ'],['link','Link from 14 articles']]},
  Anthropic:{type:'Company',ic:'A',verified:1,health:95,conf:96,memory:'18 months',influence:'High',trend:'Growing',updated:'5 hours ago',
    desc:'AI safety company and maker of Claude — the second most-referenced lab across AGNUS.',mission:'Build reliable, interpretable, steerable AI systems.',
    category:'AI Safety Lab',website:'anthropic.com',founders:'Dario & Daniela Amodei',ceo:'Dario Amodei',country:'United States',founded:'2021',cap:'~$60B (private)',
    connected:{Products:4,Articles:31,Comparisons:12,Competitors:4,'Internal links':48},
    products:['Claude','Claude Code','Claude API'],competitors:['OpenAI','Google','Mistral','xAI'],partners:['Amazon','Google'],
    mentioned:[['Articles',31],['Reviews',6],['Comparisons',12]],sources:['Official','Wikipedia','Reuters','Documentation'],
    health_items:[['Pricing page','ok','Verified today'],['Internal links','ok','48 healthy'],['CEO','ok','Current'],['Articles','ok','None stale']],
    suggestions:[['article','Write "Claude 4.5 deep dive"'],['cluster','Strengthen the Claude cluster'],['affiliate','Add affiliate links'],['faq','Create FAQ']]},
  Cursor:{type:'Product',ic:'C',verified:1,health:83,conf:88,memory:'9 months',influence:'Medium',trend:'Growing',updated:'1 day ago',
    desc:'The AI-native code editor by Anysphere, popular with developers.',mission:'—',
    category:'AI Code Editor',website:'cursor.com',founders:'Anysphere',ceo:'Michael Truell',country:'United States',founded:'2022',cap:'~$2.5B (private)',
    connected:{Products:1,Articles:9,Comparisons:3,Competitors:3,'Internal links':14},
    products:['Cursor'],competitors:['GitHub Copilot','Windsurf','Zed'],partners:['Anthropic','OpenAI'],
    mentioned:[['Articles',9],['Reviews',2],['Comparisons',3]],sources:['Official','Documentation'],
    health_items:[['Pricing page','warn','Last verified 24 days ago'],['Comparison','warn','Cursor vs Copilot is outdated'],['Articles','warn','3 articles stale'],['CEO','ok','Current']],
    suggestions:[['refresh','Refresh Cursor pricing (urgent)'],['article','Update "Cursor vs Copilot"'],['cluster','Add to Developers cluster'],['affiliate','Add affiliate link']]}
};
const ENTITIES=[['Companies',42,'🏢'],['Products',128,'◈'],['People',64,'◐'],['Industries',19,'▦'],['Models',56,'⬡'],['Features',310,'✦']];
const ENT_LIST=['OpenAI','Anthropic','Cursor'];
function healthClass(h){ return h>=90?'green':h>=78?'gold':'warn'; }
V.know_entities = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Knowledge · Entity Manager</div>
  <h1>This is where AGNUS understands reality.</h1>
  <p>Every company, product and person is a living entity — with health, memory, relationships and confidence. Click one to enter its brain.</p>
</div>
<div class="ent-type-row">${ENTITIES.map(e=>`<div class="ent-type"><div class="ent-ic">${e[2]}</div><div><div class="ent-n">${e[0]}</div><div class="ent-c">${e[1]} entities</div></div></div>`).join('')}</div>
<div class="sec-title"><h2>Tracked entities</h2><span class="tiny muted">click to open the entity brain</span></div>
<div class="entcard-grid">${ENT_LIST.map(name=>{const e=ENT_DATA[name];return `<div class="entcard" onclick="GO('entity_${name}')">
  <div class="entcard-h"><div class="lo">${e.ic}</div><div class="grow"><div class="row" style="gap:8px"><h3>${name}</h3>${e.verified?'<span class="pill gold">✦ Verified</span>':''}</div><div class="tiny muted mono">${e.type} · ${e.category}</div></div></div>
  <div class="entcard-scores"><div class="es"><div class="es-n ${healthClass(e.health)==='green'?'hi':healthClass(e.health)==='gold'?'mid':'lo'}">${e.health}%</div><div class="es-l">Entity health</div></div><div class="es"><div class="es-n">${e.conf}%</div><div class="es-l">Knowledge confidence</div></div></div>
  <div class="entcard-conn">${Object.entries(e.connected).map(([k,v])=>`<div class="ec"><b>${v}</b> ${k}</div>`).join('')}</div>
  <div class="entcard-f"><span class="tiny muted">Memory ${e.memory} · ${e.influence} influence · <span style="color:var(--success)">↑ ${e.trend}</span></span><span class="tiny muted">${e.updated}</span></div>
</div>`;}).join('')}</div>`;

/* ═══════════ ENTITY DETAIL (per entity brain) ═══════════ */
const REL_TYPES={OpenAI:[['creates','ChatGPT'],['creates','GPT-5'],['competes with','Anthropic'],['competes with','Google'],['partners with','Microsoft'],['priced against','Claude'],['used in','Healthcare'],['mentioned in','42 articles']],
  Anthropic:[['creates','Claude'],['competes with','OpenAI'],['competes with','Google'],['partners with','Amazon'],['priced against','ChatGPT'],['recommended for','Lawyers'],['used in','Healthcare'],['mentioned in','31 articles']],
  Cursor:[['belongs to','Anysphere'],['competes with','GitHub Copilot'],['compared with','Windsurf'],['used in','Software'],['recommended for','Developers'],['priced against','Copilot'],['mentioned in','9 articles']]};
const ENT_MEMORY={OpenAI:[['Jan 2025','discover','First detected','Entity created from official blog + Wikipedia'],['Mar 2025','model','GPT-4.5 added','New model record created'],['May 2025','price','Pricing changed','API price −20% · 6 pages updated'],['Aug 2025','model','GPT-5 launched','Major model event · 12 articles spawned'],['Oct 2025','revenue','Revenue milestone','OpenAI content crossed €3,000/mo'],['Today','price','Pricing changed','GPT pricing updated · 12 pages flagged']],
  Anthropic:[['Jan 2025','discover','First detected','Entity created from official sources'],['Apr 2025','model','Claude 3.7 added','New model record'],['Sep 2025','model','Claude 4.5 launched','Major event · cluster grew'],['Today','feature','Computer-use API','New capability · review updated']],
  Cursor:[['Apr 2025','discover','First detected','From Product Hunt + official site'],['Jul 2025','price','Pricing changed','Pro tier introduced'],['24d ago','stale','Pricing unverified','Flagged — needs refresh']]};
const MEM_DOT={discover:'var(--gold)',model:'var(--sapphire)',price:'var(--warn)',revenue:'var(--success)',feature:'var(--success)',stale:'var(--error)'};
ENT_LIST.forEach(name=>{
  const e=ENT_DATA[name];
  V['entity_'+name]=()=>`
  <div class="page-h"><div class="eyebrow"><span class="ix">◆</span> <a onclick="GO('know_entities')" style="cursor:pointer">Entity Manager</a> › ${e.type}</div></div>
  <div class="ent-hero card">
    <div class="eh-l"><div class="lo">${e.ic}</div><div><div class="row" style="gap:10px"><h1 style="margin:0;font-size:30px">${name}</h1>${e.verified?'<span class="pill gold">✦ Verified</span>':''}</div><div class="tiny muted mono" style="margin-top:4px">${e.category} · ${e.website}</div></div></div>
    <div class="eh-scores">
      <div class="ehs"><div class="ehs-ring" style="--p:${e.health}"><span>${e.health}%</span></div><div class="ehs-l">Entity health</div></div>
      <div class="ehs"><div class="ehs-ring blue" style="--p:${e.conf}"><span>${e.conf}%</span></div><div class="ehs-l">Knowledge confidence</div></div>
      <div class="ehs"><div class="ehs-big">${e.memory}</div><div class="ehs-l">Memory</div></div>
    </div>
  </div>
  <div class="ent-cols">
    <div class="ent-main">
      <div class="ent-block"><h3>Overview</h3><p class="ent-desc">${e.desc}</p>
        <div class="ent-facts">${[['Mission',e.mission],['Category',e.category],['Website',e.website],['Founders',e.founders],['CEO',e.ceo],['Country',e.country],['Founded',e.founded],['Valuation',e.cap]].map(f=>`<div class="ef"><div class="ef-k">${f[0]}</div><div class="ef-v">${f[1]}</div></div>`).join('')}</div>
      </div>
      <div class="ent-block"><h3>Relationships <span class="tiny muted">— the entity's mini knowledge graph</span></h3>
        <div class="rel-graph"><div class="rg-center">${name}</div><div class="rg-spokes">${REL_TYPES[name].map(r=>`<div class="rg-spoke"><span class="rg-rel">${r[0]}</span><span class="rg-node">${r[1]}</span></div>`).join('')}</div></div>
      </div>
      <div class="ent-block"><h3>Memory · everything AGNUS has learned</h3>
        <div class="tl">${ENT_MEMORY[name].map((m,i)=>`<div class="tl-row"><div class="tl-rail"><div class="tl-dot" style="background:${MEM_DOT[m[1]]||'var(--graphite)'}">●</div>${i<ENT_MEMORY[name].length-1?'<div class="tl-line"></div>':''}</div><div class="tl-card"><div class="tl-top"><span class="tl-time mono">${m[0]}</span><span class="pill ghost">${m[1]}</span></div><h4>${m[2]}</h4><p>${m[3]}</p></div></div>`).join('')}</div>
      </div>
    </div>
    <div class="ent-side">
      <div class="ent-block"><h3>Health</h3><div class="health-list">${e.health_items.map(h=>`<div class="hl-row"><span class="cb ${h[1]==='ok'?'y':'n'}">${h[1]==='ok'?'✓':'!'}</span><div><div class="hl-k">${h[0]}</div><div class="hl-v">${h[2]}</div></div></div>`).join('')}</div>
        ${e.health<90?'<button class="b b-gold b-block b-sm" style="margin-top:12px">Open maintenance →</button>':''}</div>
      <div class="ent-block"><h3>Mentioned in</h3>${e.mentioned.map(m=>`<div class="ment-row"><span>${m[0]}</span><b>${m[1]}</b></div>`).join('')}</div>
      <div class="ent-block"><h3>Sources</h3><div class="row" style="gap:6px;flex-wrap:wrap">${e.sources.map(s=>`<span class="pill ghost">${s}</span>`).join('')}</div></div>
      <div class="ent-block ent-ai"><h3>✦ AI Suggestions</h3><div class="sugg-list">${e.suggestions.map(s=>`<button class="sugg"><span class="sugg-ic">+</span> ${s[1]}</button>`).join('')}<button class="b b-dark b-block b-sm" style="margin-top:10px" onclick="GO('brain')">Apply all →</button></div></div>
    </div>
  </div>`;
});

/* ═══════════ 6 · SYNC LOGS ═══════════ */
const LOGS=[
  ['10:53','PartnerStack','new','New affiliate program detected (Harvey AI)','Flagged for Lawyers guide','High','1 guide'],
  ['10:51','Google Trends','signal','"AI agents for small business" rising 42%','Opportunity created','High','AI Agents cluster'],
  ['10:48','Anthropic blog','change','New article: computer-use API','Draft created · editor alerted','Verified','Claude review +2'],
  ['10:44','OpenAI pricing','change','GPT pricing updated','12 pages flagged','Verified','12 pages'],
  ['10:42','OpenAI blog','nochange','Checked — no change','—','—','—'],
  ['10:38','Reddit r/OpenAI','signal','Spike in "agent mode" mentions','Investigation queued','Low','—'],
  ['10:30','Reuters','nochange','Checked — no change','—','—','—'],
  ['10:22','IEEE Spectrum','error','Feed timeout','Retry scheduled','—','—']
];
const LOG_DOT={new:'var(--gold)',signal:'var(--sapphire)',change:'var(--success)',nochange:'var(--ink-faint)',error:'var(--error)'};
V.know_logs = () => `
<div class="page-h"><div class="row" style="align-items:flex-start"><div>
  <div class="eyebrow"><span class="ix">◆</span> Knowledge · Sync Logs</div>
  <h1>Every sync leaves a trace.</h1>
  <p>Source, time, status, what changed, what AGNUS did about it, and confidence. Full transparency on the living system.</p>
</div><div class="grow"></div>
<div class="sync-engine"><span class="se-dot"></span> <span class="tiny">Automatic · every 15 min</span><button class="b b-dark b-sm" onclick="syncNow(this)" style="margin-left:10px">⟳ Sync now</button></div></div></div>
<div class="an-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:20px">
  ${[['Syncs today','1,284',''],['Changes detected','37','acted on'],['Errors','1','IEEE timeout'],['Avg confidence','92%','']].map(m=>`<div class="metric"><div class="ml">${m[0]}</div><div class="mv">${m[1]}</div><div class="md muted">${m[2]}</div></div>`).join('')}
</div>
<div class="kw-filters" id="logFilters">${['All','Errors','Opportunities','Pricing','Competitors','Affiliate','Legal','AI models'].map((f,i)=>`<button class="kw-filter ${i===0?'on':''}" onclick="logFilter('${f}',this)">${f}</button>`).join('')}</div>
<div class="logfeed" id="logFeed">${LOGS.map(l=>`<div class="logrow" data-cat="${logCat(l)}">
  <span class="log-dot" style="background:${LOG_DOT[l[2]]}"></span>
  <span class="log-time mono">${l[0]}</span>
  <span class="log-src">${l[1]}</span>
  <span class="log-msg">${l[3]}</span>
  <span class="log-act muted">${l[4]}</span>
  <span class="log-conf">${l[5]!=='—'?`<span class="pill ${l[5]==='Verified'?'green':l[5]==='High'?'gold':'ghost'}">${l[5]}</span>`:''}</span>
  <span class="log-aff tiny muted">${l[6]!=='—'?l[6]:''}</span>
</div>`).join('')}</div>`;
function logCat(l){ const t=(l[1]+' '+l[3]).toLowerCase();
  if(l[2]==='error')return 'Errors'; if(l[2]==='signal'||l[2]==='new')return 'Opportunities';
  if(t.includes('pricing')||t.includes('price'))return 'Pricing'; if(t.includes('affiliate')||t.includes('partnerstack'))return 'Affiliate';
  if(t.includes('legal'))return 'Legal'; if(t.includes('gpt')||t.includes('claude')||t.includes('model')||t.includes('openai')||t.includes('anthropic'))return 'AI models';
  if(t.includes('competitor'))return 'Competitors'; return 'Other'; }
window.logFilter=function(f,el){ document.querySelectorAll('#logFilters .kw-filter').forEach(b=>b.classList.toggle('on',b===el));
  document.querySelectorAll('#logFeed .logrow').forEach(r=>{ r.style.display=(f==='All'||r.dataset.cat===f)?'':'none'; }); };

/* shared helpers */
window.syncNow=function(btn){ const o=btn.textContent; btn.textContent='⟳ Syncing…'; btn.disabled=true; setTimeout(()=>{ btn.textContent='✓ Synced'; setTimeout(()=>{ btn.textContent=o; btn.disabled=false; },1400); },1100); };

/* source detail drawer — 11 sections */
window.openSource=function(s,group){
  const d=document.getElementById('srcDrawer'); if(!d) return;
  const stHuman=s[4]==='healthy'?'Healthy':s[4]==='error'?'Authentication Failed':s[4]==='noisy'?'Needs Attention':'Active';
  const stPill=s[4]==='healthy'?'green':s[4]==='error'?'red':s[4]==='noisy'?'warn':'green';
  const usedFor13=['News','Pricing','Features','Reviews','Comparisons','Marketplace','Academy','Business Guides','Keyword Discovery','Research Briefs','Knowledge Graph','AGNUS Brain','Entity Updates'];
  const ingChips=['API','RSS','HTML','Webhook','Crawler','GraphQL','CSV','Manual','Partner Feed'];
  const authChips=['None','API Key','OAuth','Bearer Token','Basic Auth','JWT','Webhook Secret'];
  const syncFreqs=['Every 5 min','Every 15 min','Every 30 min','Every 1 hour','Every 6 hours','Daily','Manual only'];
  const defAuth=s[1]==='Official Company'?'API Key':s[1]==='Internal'?'Bearer Token':s[1]==='Manual'?'None':s[1]==='Community'?'None':'RSS';
  const defIngs=[srcIngest(s)];
  const coverage=[['Pricing',100],['Documentation',95],['Models',100],['Blog',72],['Press Releases',91],['Release Notes',100],['API Updates',100],['Videos',0,'Disabled'],['Community',0,'Disabled']];
  const trustScores=[['Trust Weight',s[2]],['Freshness',95],['Relevance',s[2]>=90?100:s[2]>=70?85:70],['Signal Strength',90],['Noise Control',95]];
  const finalScore=Math.round(trustScores.reduce((a,v)=>a+v[1],0)/trustScores.length);
  const domain=(s[5].match(/[a-z0-9-]+\.[a-z]{2,}/i)||['openai.com'])[0];
  const endpoints=[
    ['Primary API','API','api.'+domain,'Enabled','checked 14 min ago','Healthy'],
    ['Documentation','HTML','platform.'+domain+'/docs','Enabled','checked 14 min ago','Healthy'],
    ['Pricing','HTML',domain+'/pricing','Enabled','checked 11 min ago','Healthy'],
    ['Blog / News','RSS',domain+'/news','Enabled','checked 22 min ago','Healthy'],
    ['Changelog','HTML',domain+'/changelog','Enabled','checked 1h ago','Healthy'],
    ['Custom endpoint','','','Disabled','—','—']
  ];
  d.querySelector('.sd-body').innerHTML=`
<div class="sd-h">
  <div>
    <h3>${s[0]}</h3>
    <div class="sd-ident"><span class="pill ghost">${group}</span><span class="pill gold">Trust ${s[2]}/100</span><span class="pill ${stPill}">● ${stHuman}</span></div>
  </div>
  <button class="x" onclick="closeSource()">×</button>
</div>

<div class="sd-section"><div class="sd-section-label">Section 1 — Basic Source Settings</div>
  <div class="field"><label>Source name</label><input type="text" value="${s[0]}"></div>
  <div class="sd-row">
    <div class="field" style="flex:1"><label>Source group</label>
      <select style="width:100%;border:1px solid var(--line);border-radius:9px;padding:10px 12px;font-family:var(--font-sans);font-size:13.5px;outline:none;background:var(--paper)">
        ${['Official Companies','Search Demand','News','Research','Developer Signals','Community Signals','Affiliate Networks','Marketplace Data','Internal AGNUS Data','Manual Sources'].map(g=>`<option${g===group?' selected':''}>${g}</option>`).join('')}
      </select>
    </div>
    <div class="field" style="flex:1"><label>Owner</label><input type="text" value="System"></div>
  </div>
  <div class="field"><label>Description</label><textarea style="width:100%;border:1px solid var(--line);border-radius:9px;padding:10px 12px;font-family:var(--font-sans);font-size:13.5px;outline:none;background:var(--paper);resize:vertical;min-height:66px">Official model, pricing, release and documentation source for ${s[0]}.</textarea></div>
  <div class="field"><label>Status</label><div class="field-row">${['Active','Paused','Disabled','Testing','Needs Attention'].map(st=>`<button class="opt ${stHuman==='Healthy'&&st==='Active'?'on':st===stHuman?'on':''}">${st}</button>`).join('')}</div></div>
</div>

<div class="sd-section"><div class="sd-section-label">Section 2 — Endpoints</div>
  <div class="ep-table">
    <div class="ep-hrow"><span>Type</span><span>URL</span><span>Toggle</span><span>Last checked</span><span>Status</span></div>
    ${endpoints.map(e=>`<div class="ep-row ${e[3]==='Disabled'?'dim':''}">
      <span class="ep-type">${e[0]}</span>
      <input class="ep-url" type="text" value="${e[2]}" placeholder="URL">
      <label class="ep-tog"><input type="checkbox" ${e[3]==='Enabled'?'checked':''}><span class="tog-sl"></span></label>
      <span class="ep-lc mono muted">${e[4]}</span>
      <span class="ep-st">${e[5]!=='—'?`<span class="pill ${e[5]==='Healthy'?'green':'ghost'}" style="font-size:9px">${e[5]}</span>`:''}</span>
    </div>`).join('')}
  </div>
  <button class="b b-ghost b-sm" style="margin-top:10px">+ Add custom endpoint</button>
</div>

<div class="sd-section"><div class="sd-section-label">Section 3 — Ingestion Type <span class="tiny muted">(multi-select)</span></div>
  <div class="field-row">${ingChips.map(t=>`<button class="opt ${defIngs.includes(t)?'on':''}" onclick="this.classList.toggle('on')">${t}</button>`).join('')}</div>
</div>

<div class="sd-section"><div class="sd-section-label">Section 4 — Authentication</div>
  <div class="field"><label>Method</label><div class="field-row">${authChips.map(a=>`<button class="opt ${a===defAuth?'on':''}">${a}</button>`).join('')}</div></div>
  <div class="field"><label>Secret key</label>
    <div class="auth-key"><code class="ak-val" id="akVal">••••••••••••••••</code>
      <button class="b b-ghost b-sm" onclick="const v=document.getElementById('akVal');v.textContent=v.textContent.includes('•')?'sk-real-key-7Q2a-redacted':'••••••••••••••••'">Reveal</button>
      <button class="b b-ghost b-sm" onclick="this.textContent='✓ Connected'">Test connection</button>
      <button class="b b-ghost b-sm">Rotate key</button>
    </div>
  </div>
</div>

<div class="sd-section"><div class="sd-section-label">Section 5 — Sync Settings</div>
  <div class="field"><label>Sync frequency</label><div class="field-row">${syncFreqs.map(f=>`<button class="opt ${('Every '+s[3]).includes(f.replace('Every ',''))||f.includes(s[3])?'on':''}">${f}</button>`).join('')}</div></div>
  <div class="sd-row">
    <div class="field" style="flex:1"><label>Retry policy</label>
      <select style="width:100%;border:1px solid var(--line);border-radius:9px;padding:10px 12px;font-size:13px;outline:none;background:var(--paper)">
        ${['Retry 3× with backoff','Retry once','No retry','Alert immediately'].map(o=>`<option>${o}</option>`).join('')}
      </select>
    </div>
    <div class="field" style="flex:1"><label>Timeout</label><input type="text" value="30 seconds"></div>
  </div>
  <div class="sd-row">
    <div class="field" style="flex:1"><label>Rate limit</label><input type="text" value="1,000 req/min"></div>
    <div class="field" style="flex:1"><label>Priority</label>
      <select style="width:100%;border:1px solid var(--line);border-radius:9px;padding:10px 12px;font-size:13px;outline:none;background:var(--paper)">
        ${['Critical (real-time)','High','Normal','Low','Manual only'].map(o=>`<option>${o}</option>`).join('')}
      </select>
    </div>
  </div>
</div>

<div class="sd-section"><div class="sd-section-label">Section 6 — Used For</div>
  <div class="field-row">${usedFor13.map(u=>`<button class="opt ${s[6].includes(u)||s[6].includes(u.split(' ')[0])?'on':''}" onclick="this.classList.toggle('on')">${u}</button>`).join('')}</div>
</div>

<div class="sd-section"><div class="sd-section-label">Section 7 — Automation Rules</div>
  <div class="sd-checks">
    ${[['Create draft automatically',1],['Alert editor',1],['Update entity database',1],['Flag affected articles',1],['Create Brain recommendation',1],['Create Story Builder brief',1],['Notify human reviewer',1],['Requires Human Approval',0]].map(a=>`<div class="sd-check"><span class="cb ${a[1]?'y':'n'}">${a[1]?'✓':'⚠'}</span> ${a[0]}${!a[1]?' <span class="tiny" style="color:var(--gold-deep);margin-left:6px">required — nothing publishes automatically</span>':''}</div>`).join('')}
  </div>
</div>

<div class="sd-section"><div class="sd-section-label">Section 8 — Trust & Scoring</div>
  <div class="ts-grid">
    ${trustScores.map(t=>`<div class="ts-row"><span class="ts-k">${t[0]}</span><div class="meter" style="background-size:${t[1]}% 100%"></div><span class="ts-v">${t[1]}</span></div>`).join('')}
  </div>
  <div class="ts-final"><span class="ts-fl">Final Source Score</span><span class="ts-fn ${finalScore>=90?'hi':finalScore>=70?'mid':'lo'}">${finalScore}</span><span class="tiny muted">/100</span></div>
</div>

<button class="sd-acc" onclick="this.nextElementSibling.classList.toggle('open');this.classList.toggle('open')">Section 9 — Data Coverage <span class="acc-x">›</span></button>
<div class="sd-acc-body">
  ${coverage.map(c=>`<div class="cov-row"><span class="cov-k">${c[0]}</span>${c[2]?`<span class="cov-dis">${c[2]}</span>`:`<div class="cov-bar"><div class="meter" style="background-size:${c[1]}% 100%"></div></div><span class="cov-v">${c[1]}%</span>`}</div>`).join('')}
</div>

<button class="sd-acc" onclick="this.nextElementSibling.classList.toggle('open');this.classList.toggle('open')">Section 10 — Last Sync Summary <span class="acc-x">›</span></button>
<div class="sd-acc-body">
  <div class="lss-grid">${[['Pages checked','32'],['Changed','4'],['Entities updated','1'],['Articles flagged','12'],['Failures','0'],['Confidence','99%']].map(x=>`<div class="lss"><div class="lss-n">${x[1]}</div><div class="lss-l">${x[0]}</div></div>`).join('')}</div>
</div>

<button class="sd-acc" onclick="this.nextElementSibling.classList.toggle('open');this.classList.toggle('open')">Section 11 — Health History <span class="acc-x">›</span></button>
<div class="sd-acc-body">
  ${[['Today','Healthy','ok'],['Yesterday','Healthy','ok'],['7 days ago','Timeout · recovered automatically','warn']].map(h=>`<div class="hh-row"><span class="hh-dot ${h[2]}"></span><span class="hh-t">${h[0]}</span><span class="hh-s">${h[1]}</span></div>`).join('')}
  <div class="hh-uptime"><span>30-day uptime</span><b>99.98%</b></div>
</div>

<div class="sd-foot"><button class="b b-line" onclick="closeSource()">Close</button><button class="b b-dark" onclick="syncNow(this)">⟳ Sync now</button><button class="b b-gold">Save</button></div>`;
  d.classList.add('open');
  d.querySelector('.sd-body').scrollTop=0;
};
window.closeSource=function(){ const d=document.getElementById('srcDrawer'); if(d)d.classList.remove('open'); };

/* ═══════════ 7 · AGNUS MEMORY (persistent lifetime) ═══════════ */
const MEMORY=[
  {name:'OpenAI',ic:'O',since:'Jan 2025',articles:42,reviews:8,comps:15,rev:'€3,400',rank:'#4',trend:'up',health:97},
  {name:'Anthropic',ic:'A',since:'Jan 2025',articles:31,reviews:6,comps:12,rev:'€2,140',rank:'#3',trend:'up',health:95},
  {name:'Google AI',ic:'G',since:'Feb 2025',articles:24,reviews:5,comps:9,rev:'€1,180',rank:'#6',trend:'flat',health:88},
  {name:'Mistral',ic:'M',since:'Apr 2025',articles:9,reviews:2,comps:3,rev:'€320',rank:'#11',trend:'up',health:74},
  {name:'Perplexity',ic:'P',since:'Mar 2025',articles:12,reviews:3,comps:5,rev:'€540',rank:'#8',trend:'down',health:81}
];
const trendArrow=t=>t==='up'?'<span style="color:var(--success)">↑ rising</span>':t==='down'?'<span style="color:var(--error)">↓ falling</span>':'<span class="muted">→ stable</span>';
V.know_memory = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Knowledge · AGNUS Memory</div>
  <h1>Not today's data — lifetime memory.</h1>
  <p>AGNUS remembers every entity since the day it was first detected. This persistent history is the competitive advantage — the platform learns over time.</p>
</div>
<div class="mem-hero card">
  <div class="db-head"><div class="lo">O</div><div><h2>OpenAI</h2><div class="sub">First detected January 2025 · 18 months of memory</div></div><div class="grow"></div><div class="mem-health"><div class="mh-n">97%</div><div class="mh-l">Entity health</div></div></div>
  <div class="mem-stats">
    ${[['First detected','Jan 2025'],['Articles','42'],['Reviews','8'],['Comparisons','15'],['Lifetime revenue','€3,400'],['Avg ranking','#4'],['Traffic trend','↑ rising'],['Entity health','97%']].map(m=>`<div class="mem-stat"><div class="ms-l">${m[0]}</div><div class="ms-v">${m[1]}</div></div>`).join('')}
  </div>
  <div class="mem-spark"><div class="msp-l">Traffic, 18 months</div><div class="msp-bars">${[20,28,24,36,32,44,40,52,48,60,58,70,66,78,74,86,90,100].map(h=>`<span style="height:${h}%"></span>`).join('')}</div></div>
</div>
<div class="sec-title"><h2>All tracked entities</h2><span class="tiny muted">memory since first detection</span></div>
<table class="an-table"><thead><tr><th>Entity</th><th>Since</th><th>Articles</th><th>Reviews</th><th>Comparisons</th><th>Lifetime revenue</th><th>Avg rank</th><th>Trend</th><th>Health</th></tr></thead>
<tbody>${MEMORY.map(m=>`<tr><td style="font-weight:600">${m.name}</td><td class="mono muted">${m.since}</td><td class="mono">${m.articles}</td><td class="mono">${m.reviews}</td><td class="mono">${m.comps}</td><td class="mono" style="color:var(--success);font-weight:600">${m.rev}</td><td class="mono">${m.rank}</td><td class="tiny">${trendArrow(m.trend)}</td><td><span class="tnum ${m.health>=90?'green':m.health>=75?'gold':'warn'}">${m.health}</span></td></tr>`).join('')}</tbody></table>`;

/* ═══════════ 8 · INTELLIGENCE TIMELINE (Git-history) ═══════════ */
const TIMELINE=[
  ['Yesterday · 14:02','change','OpenAI changed GPT pricing','Sync Engine detected the official pricing page update','OpenAI · official'],
  ['Yesterday · 14:02','graph','Knowledge Graph updated','The Pricing node propagated to all connected content','Knowledge Graph'],
  ['Yesterday · 14:03','flag','12 articles flagged','1 review, 3 comparisons, 2 lessons, 5 guides, 1 listing — ranked by priority','Impact Detection'],
  ['Yesterday · 14:40','rewrite','2 articles rewritten','Critical pages refreshed by Writing AI, sent to human review','AI Writer'],
  ['Yesterday · 15:10','publish','Published','Editor approved; updated pricing live across the affected pages','Human Review'],
  ['Today · 09:00','recover','Traffic recovered','ChatGPT review climbed back to #4; €180/mo revenue protected','Analytics']
];
const TL_IC={change:'⚡',graph:'⊕',flag:'⚑',rewrite:'✎',publish:'↗',recover:'📈'};
const TL_DETAIL={
  0:{old:'GPT-5: $1.25/1M in · $10/1M out',neu:'GPT-5: $1.00/1M in · $8/1M out',articles:['ChatGPT Review','GPT-5 deep dive'],comps:['GPT-5 vs Claude','GPT vs Gemini','GPT vs Perplexity'],faqs:['"How much does GPT-5 cost?"'],links:12},
  3:{old:'Old pricing referenced in 12 pages',neu:'Refreshed copy queued for 2 critical pages',articles:['ChatGPT Review','SMB AI guide'],comps:['GPT-5 vs Claude'],faqs:['Pricing FAQ'],links:12}
};
V.know_timeline = () => `
<div class="page-h">
  <div class="eyebrow"><span class="ix">◆</span> Knowledge · Intelligence Timeline</div>
  <h1>What the Brain detected — and what changed.</h1>
  <p>A chronological history, like Git: every detection, every decision, and the result it produced. This is how you see the system thinking over time.</p>
</div>
<div class="tl">${TIMELINE.map((t,i)=>`<div class="tl-row fade ${TL_DETAIL[i]?'clickable':''}" style="animation-delay:${i*0.06}s" ${TL_DETAIL[i]?`onclick="tlOpen(${i})"`:''}>
  <div class="tl-rail"><div class="tl-dot ${t[1]}">${TL_IC[t[1]]}</div>${i<TIMELINE.length-1?'<div class="tl-line"></div>':''}</div>
  <div class="tl-card"><div class="tl-top"><span class="tl-time mono">${t[0]}</span><span class="pill ghost">${t[4]}</span>${TL_DETAIL[i]?'<span class="tiny" style="color:var(--gold-deep);margin-left:auto">inspect →</span>':''}</div><h4>${t[2]}</h4><p>${t[3]}</p></div>
</div>`).join('')}</div>
<div id="tlDrawerWrap"></div>
<div class="gap-alert" style="margin-top:20px"><span class="ic">✦</span><div>From a pricing change to recovered traffic in under <b>19 hours</b> — no one searched, no one asked. The Intelligence Timeline is the receipt.</div></div>`;
window.tlOpen=function(i){ const d=TL_DETAIL[i]; if(!d)return; const t=TIMELINE[i];
  const wrap=document.getElementById('tlDrawerWrap');
  wrap.innerHTML=`<div class="modal-bg open" onclick="if(event.target===this)this.remove()"><div class="modal">
    <div class="modal-h"><h3>${t[2]}</h3><button class="x" onclick="this.closest('.modal-bg').remove()">×</button></div>
    <div class="modal-b">
      <div class="tl-change"><div class="tlc-box old"><div class="tlc-l">Before</div><div class="tlc-v">${d.old}</div></div><span class="tlc-arr">→</span><div class="tlc-box neu"><div class="tlc-l">After</div><div class="tlc-v">${d.neu}</div></div></div>
      <div class="tl-affect">
        <div class="tla"><div class="tla-l">Affected articles</div>${d.articles.map(a=>`<div class="tla-row">▷ ${a}</div>`).join('')}</div>
        <div class="tla"><div class="tla-l">Affected comparisons</div>${d.comps.map(a=>`<div class="tla-row">▷ ${a}</div>`).join('')}</div>
        <div class="tla"><div class="tla-l">Affected FAQs</div>${d.faqs.map(a=>`<div class="tla-row">▷ ${a}</div>`).join('')}</div>
        <div class="tla"><div class="tla-l">Internal links</div><div class="tla-row">${d.links} links reference this</div></div>
      </div>
    </div>
    <div class="modal-f"><button class="b b-ghost" onclick="this.closest('.modal-bg').remove()">Close</button><button class="b b-gold" onclick="syncNow(this)">⚡ Fix all in one click</button></div>
  </div></div>`;
};

})();

/* === dash-knowledge2.js === */
/* AGNUS Dashboard — Knowledge Sources v3, Source Scoring v2, Knowledge Database v2, Knowledge Graph v2 */
(function(){
var V = window.VIEWS = window.VIEWS || {};
var I = window.VIEW_INIT = window.VIEW_INIT || {};
function m(v,c){ return '<div class="meter '+(c||'')+'" style="background-size:'+v+'% 100%"></div>'; }
function pill(c,t){ return '<span class="pill '+c+'">'+t+'</span>'; }
function cb(v,t){ return '<div class="check"><span class="cb '+(v?'y':'n')+'">'+(v?'&#10003;':'!')+' </span> '+t+'</div>'; }
function sec(t){ return '<div class="kd-sec-h">&#9670; '+t+'</div>'; }
function aBtn(lbl){ return '<button class="sd-acc" onclick="this.nextElementSibling.classList.toggle(\'open\');this.classList.toggle(\'open\')">'+lbl+' <span class="acc-x">&#8250;</span></button>'; }

/* ═══════════════════════════════════════════════════════════════════
   KNOWLEDGE SOURCES v3 — enriched openSource drawer
   ═══════════════════════════════════════════════════════════════════ */
window.openSource = function(s, group){
  var d = document.getElementById('srcDrawer'); if(!d) return;
  var KF = ['API / RSS','Knowledge Database','Knowledge Graph','Research Panel','Story Builder','AI Writer','Published Articles','Content Archive'];
  var MODS = ['Intelligence Feed','Keyword Discovery','Research Panel','Topic Clusters','Story Builder','AI Writer','Human Review','Publishing Calendar','Content Archive','Entity Manager','Knowledge Graph','AGNUS Brain'];
  var COV = [['Pricing',100],['Models',100],['API',84],['Docs',90],['Examples',60],['Community',28],['Release Notes',95],['Videos',0]];

  var flow = KF.map(function(n,i){
    return '<div class="kf-node" onclick="GO(\'know_db\')">'+n+'</div>'+(i<KF.length-1?'<div class="kf-arr">&#8595;</div>':'');
  }).join('');

  var mods = MODS.map(function(mm){
    return '<div class="kc-mod" onclick="GO(\'home\')">&#10003; '+mm+'</div>';
  }).join('');

  var biz = [['34 Articles'],['12 Reviews'],['6 Comparisons'],['3 Buying Guides'],['4 Academy Lessons'],['&euro;1,240 Protected'],['2 Topic Clusters'],['8 Entities']].map(function(x){
    return '<div class="kb-item"><b>'+x[0]+'</b></div>';
  }).join('');

  var covHeat = COV.map(function(c){
    return '<div class="kh-row"><span class="kh-k">'+c[0]+'</span><div class="kh-bar">'+m(c[1])+'</div><span class="kh-v">'+c[1]+'%</span></div>';
  }).join('');

  var dep = ['12 Reviews','7 Comparisons','4 Entities','2 Clusters','&euro;980/mo Revenue Risk'].map(function(x,i){
    return '<div class="kdf-row">'+(i<4?'&#8595; ':'&#9888; ')+x+'</div>';
  }).join('');

  var prov = ['Origin: '+s[0],'Knowledge Source','Database','Entity','Graph','Article'].map(function(n,i){
    return '<div class="kprov-node">'+n+'</div>'+(i<5?'<div class="kprov-arr">&#8595;</div>':'');
  }).join('');

  var srcTL = [['Today 14:12','Pricing updated'],['Today 14:13','Documentation changed'],['Today 14:14','Entity rebuilt'],['Today 14:15','Research notified'],['Today 14:17','Story Builder brief'],['Today 14:20','AI Writer updated']].map(function(t,i){
    return '<div class="tl-row" style="margin-bottom:8px"><div class="tl-rail"><div class="tl-dot change" style="font-size:9px">&#9679;</div>'+(i<5?'<div class="tl-line" style="min-height:12px"></div>':'')+'</div><div class="tl-card" style="padding:8px 12px;margin-bottom:0"><div class="tl-top"><span class="tl-time mono">'+t[0]+'</span></div><p style="margin:0;font-size:12px">'+t[1]+'</p></div></div>';
  }).join('');

  var html = '<div class="sd-h"><div><h3>'+s[0]+'</h3>'
    +'<div class="sd-ident">'+pill('ghost',s[1]+' Source')+pill('gold','Trust '+s[2])+pill('green','&#9679; Healthy')+'</div></div>'
    +'<button class="x" onclick="document.getElementById(\'srcDrawer\').classList.remove(\'open\')">&#215;</button></div>'

    /* ── API CONNECTION — the real credential entry point ── */
    +(function(){
      var PUBLIC=['arXiv','Semantic Scholar','Papers with Code','TechCrunch','The Verge','VentureBeat','Ars Technica','IEEE Spectrum','Google Trends','GitHub Trending','Hugging Face','G2','Capterra','AlternativeTo','StackShare','OpenAI','Anthropic','Google AI','Microsoft','Mistral','Perplexity','ElevenLabs','Runway','Cursor','Notion AI','MIT Technology Review','Product Hunt'];
      var isPublic=PUBLIC.some(function(p){return s[0].indexOf(p)===0;});
      var saved=srcGetKey(s[0]);
      if(isPublic){
        return '<div class="sd-conn" data-src="'+s[0].replace(/"/g,'')+'">'
          +'<div class="sdc-head"><span class="sdc-title">&#9670; API Connection</span>'
          +'<span class="sdc-status ok">&#9679; Connected — public access</span></div>'
          +'<div class="sdc-note"><b>'+s[0]+'</b> is a public source — no key or account required. AGNUS registered it automatically via '+(s[1]==='News'?'RSS feed':'public API / page monitoring')+'. Data flows into Discovery, Research and the Brain without any setup.</div>'
          +'<div class="sdc-acts"><button class="b b-dark b-sm" onclick="srcTestConn(this)">Test connection</button>'
          +'<button class="b b-line b-sm" onclick="syncNow(this)">&#8635; Sync now</button></div>'
          +'<div class="sdc-result" id="sdcResult"></div>'
          +'</div>';
      }
      return '<div class="sd-conn" data-src="'+s[0].replace(/"/g,'')+'">'
        +'<div class="sdc-head"><span class="sdc-title">&#9670; API Connection</span>'
        +'<span class="sdc-status '+(saved?'ok':'off')+'" id="sdcStatus">'+(saved?'&#9679; Connected':'&#9675; Not connected')+'</span></div>'
        +'<div class="sdc-note">Paste your credentials for <b>'+s[0]+'</b>. AGNUS uses this connection to pull live data into Discovery, Research and the Brain.</div>'
        +'<div class="sdc-auth">'+['API Key','OAuth 2.0','Bearer Token','Webhook Secret'].map(function(a,i){return '<button class="opt '+(i===0?'on':'')+'" onclick="pick(this)">'+a+'</button>';}).join('')+'</div>'
        +'<div class="sdc-input-row">'
        +'<input type="password" class="sdc-input" id="sdcKey" placeholder="sk-… paste your API key here" value="'+(saved||'')+'" autocomplete="off">'
        +'<button class="b b-line b-sm" onclick="srcToggleReveal(this)">Reveal</button>'
        +'</div>'
        +'<div class="sdc-acts">'
        +'<button class="b b-dark b-sm" onclick="srcTestConn(this)">Test connection</button>'
        +'<button class="b b-gold b-sm" onclick="srcSaveKey(this)">Save &amp; Connect</button>'
        +(saved?'<button class="b b-ghost b-sm" onclick="srcDisconnect(this)">Disconnect</button>':'')
        +'</div>'
        +'<div class="sdc-result" id="sdcResult"></div>'
        +'</div>';
    })()

    +'<div style="font-weight:700;font-size:14px;padding:14px 0 0">&#9670; Knowledge Flow</div>'
    +'<div class="kf-chain">'+flow+'</div>'

    +aBtn('&#9670; Connected Modules')
    +'<div class="sd-acc-body"><div class="kc-mods">'+mods+'</div></div>'

    +aBtn('&#9670; Business Impact')
    +'<div class="sd-acc-body"><div class="kb-grid">'+biz+'</div></div>'

    +aBtn('&#10022; AI Recommendation')
    +'<div class="sd-acc-body"><div class="chief-msg"><p>&#8220;<b>'+s[0]+'</b> is producing more pricing updates than expected. Recommend increasing sync from <b>15 min &rarr; 5 min</b> or reducing trust from <b>100 &rarr; 92</b>.&#8221;</p>'
    +'<div class="chief-cites">'+pill('green','Increase sync')+pill('warn','Lower trust')+'</div></div></div>'

    +aBtn('&#9670; Source Timeline')
    +'<div class="sd-acc-body"><div class="tl">'+srcTL+'</div></div>'

    +aBtn('&#9670; Coverage Heatmap')
    +'<div class="sd-acc-body"><div class="kh-bars">'+covHeat+'</div></div>'

    +aBtn('&#9888; Source Dependency')
    +'<div class="sd-acc-body"><div class="kd-dep">'+dep+'</div></div>'

    +aBtn('&#9889; Run Simulation')
    +'<div class="sd-acc-body"><button class="b b-gold b-block" onclick="srcSimulate(this)">Simulate Source Update &rarr;</button><div id="simOut" style="margin-top:10px"></div></div>'

    +aBtn('&#9670; Provenance')
    +'<div class="sd-acc-body"><div class="kprov-chain">'+prov+'</div></div>'

    +'<div class="field" style="margin-top:16px"><label>Source name</label><input type="text" value="'+s[0]+'" style="border:1px solid var(--line);border-radius:9px;padding:10px 13px;font-size:13.5px;outline:none;background:var(--paper);width:100%;box-sizing:border-box"></div>'
    +'<div class="sd-foot"><button class="b b-line" onclick="closeSource()">Close</button><button class="b b-dark" onclick="syncNow(this)">&#8635; Sync now</button><button class="b b-gold">Save</button></div>';

  d.querySelector('.sd-body').innerHTML = html;
  d.classList.add('open');
  d.querySelector('.sd-body').scrollTop = 0;
};

window.srcSimulate = function(btn){
  var o=btn.textContent; btn.textContent='Simulating&hellip;'; btn.disabled=true;
  setTimeout(function(){
    var out=btn.nextElementSibling; if(!out)return;
    var rows=[['Knowledge Database','updated'],['4 Entities','rebuilt'],['12 Research items','refreshed'],['2 Story Builders','flagged'],['2 AI Writer drafts','alerted'],['Human Review','needed']];
    out.innerHTML='<div class="tl">'+rows.map(function(t,i){
      return '<div class="tl-row" style="margin-bottom:6px"><div class="tl-rail"><div class="tl-dot change" style="font-size:9px">&#9679;</div>'+(i<rows.length-1?'<div class="tl-line" style="min-height:10px"></div>':'')+'</div><div class="tl-card" style="padding:8px 12px;margin-bottom:0"><b>'+t[0]+'</b> &mdash; '+t[1]+'</div></div>';
    }).join('')+'</div>';
    btn.textContent='Simulation complete &#10003;'; btn.disabled=false;
  },1100);
};

/* ═══════════════════════════════════════════════════════════════════
   SOURCE SCORING v2
   ═══════════════════════════════════════════════════════════════════ */
V.know_scoring = function(){
  var phil = '<div class="ks-phil"><div class="ksp-text">AGNUS never believes information. It verifies it.</div><p>Every source is continuously evaluated using multiple weighted factors. Trust is dynamic &mdash; it changes over time. No source is permanently trusted.</p></div>';

  var factors = [['Trust','40%','How authoritative?','Official APIs, human verification, historical accuracy'],['Freshness','20%','How current?','Update frequency, recency of changes'],['Relevance','20%','How relevant?','Alignment with AI and business intelligence'],['Signal','15%','How actionable?','Event detection strength'],['Noise','5%','How much to filter?','Community noise ratio']];

  var formulaCards = '<div class="ksf-cards">'+factors.map(function(f){
    return '<div class="ksf-card"><div class="ksf-pct">'+f[1]+'</div><div class="ksf-name">'+f[0]+'</div><div class="ksf-q">'+f[2]+'</div><div class="ksf-ex">'+f[3]+'</div></div>';
  }).join('')+'</div>';

  var examples = [
    ['OpenAI',[100,98,100,94,95],['Verified official API','Daily documentation updates','Excellent historical accuracy','Low misinformation','Actively maintained'],'Occasionally delayed changelogs',['Research','Knowledge Graph','AI Writer']],
    ['Reuters',[95,90,85,80,90],['Established news source','Real-time coverage','Editorial standards verified'],'Some paywall restrictions',['Intelligence Feed','Research']],
    ['Reddit',[64,85,70,80,40],['Community signals only','Early detection useful'],'Unverified claims, high noise',['Signal Detection']],
    ['arXiv',[92,70,90,85,95],['Peer-reviewed preprints','Academic authority','High depth'],'Long publication cycles',['Research','Knowledge DB']]
  ];
  var dims = ['Trust','Freshness','Signal','Relevance','Noise'];
  var exCards = '<div class="kse-grid">'+examples.map(function(e){
    var overall = Math.round(e[1].reduce(function(a,b){return a+b;},0)/e[1].length);
    var bars = dims.map(function(nm,i){
      return '<div class="score-row"><span class="sr-k">'+nm+'</span><div class="sr-bar">'+m(e[1][i])+'</div><span class="sr-v">'+e[1][i]+'</span></div>';
    }).join('');
    return '<div class="kse-card">'
      +'<div class="kse-top"><div><h3>'+e[0]+'</h3><div class="kse-overall">Overall <b>'+overall+'</b></div></div>'
      +'<button class="b b-line b-sm" onclick="ssExplain(\''+e[0]+'\','+overall+',this)">Explain &rarr;</button></div>'
      +'<div class="score-rows">'+bars+'</div>'
      +'<div id="ssExplainOut_'+e[0]+'" style="display:none"></div></div>';
  }).join('')+'</div>';

  var compSrc = ['OpenAI','Anthropic','Google','Microsoft'];
  var compDims = ['Trust','Freshness','Coverage','Speed','Accuracy','Relevance','Noise'];
  var compData = [[100,98,100,99,99,100,97],[100,99,98,97,99,98,96],[98,96,95,94,95,95,94],[98,95,94,92,93,93,93]];
  var compTable = '<table class="an-table"><thead><tr><th>Source</th>'
    +compDims.map(function(d){return '<th>'+d+'</th>';}).join('')+'</tr></thead><tbody>'
    +compSrc.map(function(src,si){
      return '<tr><td style="font-weight:700">'+src+'</td>'+compData[si].map(function(v){
        return '<td>'+pill(v>=90?'green':v>=75?'gold':'warn',v)+'</td>';
      }).join('')+'</tr>';
    }).join('')+'</tbody></table>';

  var trustBars = [95,94,96,98,96,95,97,96,95,94,95,96,97,98,95,94,96,97,96,95,97,96,98,97,96,95,94,96,97,98].map(function(v){
    return '<div class="ks-tl-bar" style="height:'+(v-88)+'px" title="Trust: '+v+'"></div>';
  }).join('');
  var trustTL = '<div class="ks-timeline"><div class="ks-tl-bars">'+trustBars+'</div>'
    +'<div class="ks-tl-labels"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span></div>'
    +'<div class="ks-tl-note">Trust dropped to 94 in Feb &mdash; documentation unavailable 12 hours.</div></div>';

  var sim = '<div class="ks-sim"><div class="ks-sim-row"><span>What if</span>'
    +'<select class="ks-sim-sel" id="ssSource"><option>Reuters</option><option>Reddit</option><option>arXiv</option></select>'
    +'<span>drops to</span>'
    +'<input type="number" value="70" min="0" max="100" id="ssTarget" style="width:60px;border:1px solid var(--line);border-radius:6px;padding:5px;font-size:13px;outline:none">'
    +'<span>?</span></div><button class="b b-gold b-sm" style="margin-top:10px" onclick="runSsSimulate()">Run &rarr;</button><div id="ssSimOut"></div></div>';

  var histRows = [['Today','96','Current'],['Yesterday','95','No changes'],['3d ago','94','Website unavailable 2h'],['7d ago','95','Normal'],['14d ago','96','Docs updated']];
  var history = '<div class="rs-ev-list">'+histRows.map(function(h){
    return '<div class="rs-ev-i"><span class="tl-time mono">'+h[0]+'</span><b style="margin:0 8px;font-family:var(--font-mono)">'+h[1]+'</b>'+h[2]+'</div>';
  }).join('')+'</div>';

  var rules = cb(1,'Never trust Reddit above 60')
    +cb(1,'Always verify pricing from official source')
    +cb(1,'Minimum trust for publishing: 90')
    +cb(1,'News requires secondary confirmation')
    +cb(1,'Community sources cannot confirm facts');

  var aiRecs = '<div class="rs-ev-list">'
    +['&#8593; Increase Google Trends sync weight','&#8595; Reduce Reddit weight for pricing','+ Add Official Documentation endpoint','! Reuters weak on open-source AI'].map(function(r){
      return '<div class="rs-ev-i">'+r+'<button class="b b-gold b-sm" style="margin-left:auto">Apply</button></div>';
    }).join('')+'</div>';

  var kfChain = ['OpenAI','Research','Knowledge DB','Entity Manager','AI Writer','Published','Human Review'].map(function(n,i){
    return '<div class="kf-node">'+n+'</div>'+(i<6?'<div class="kf-arr">&#8595;</div>':'');
  }).join('');

  return '<div class="page-h"><div class="eyebrow"><span class="ix">&#9670;</span> Knowledge &middot; Source Scoring &middot; Explainable Trust Center</div>'
    +'<h1>Why AGNUS trusts a source &mdash; and how trust changes.</h1>'
    +'<p>Every number is explainable. Every score is traceable. No hidden calculations.</p></div>'
    +sec('1. Trust Philosophy')+phil
    +sec('2. Trust Formula &middot; 5 weighted factors')+formulaCards
    +'<div class="ks2-layout"><div class="ks2-main">'
    +sec('3. Example Sources &middot; interactive')+exCards
    +sec('4. Compare Sources')+compTable
    +sec('5. Trust Timeline &middot; OpenAI last 6 months')+trustTL
    +sec('6. Simulation')+sim
    +sec('7. Trust History &middot; Audit Log')+history
    +sec('8. Global Rules')+'<div class="checklist">'+rules+'</div>'
    +'</div><div class="ks2-aside">'
    +sec('9. AI Recommendations')+aiRecs
    +'<div class="card" style="padding:18px 20px;margin-top:16px">'+sec('10. Impact Analysis')
    +'<div class="kf-chain">'+kfChain+'</div></div>'
    +'</div></div>';
};

window.ssExplain = function(name,score,btn){
  var out=document.getElementById('ssExplainOut_'+name); if(!out)return;
  var data={
    OpenAI:['Verified official API','Daily updates','Excellent accuracy','Low noise','Active portal'],
    Reuters:['Established source','Real-time','Editorial standards'],
    Reddit:['Community only','Early detection','High noise'],
    arXiv:['Peer-reviewed','Academic authority','High depth']
  };
  var weak={OpenAI:'Occasionally delayed changelogs',Reuters:'Some paywall restrictions',Reddit:'Unverified claims',arXiv:'Lag behind production'};
  if(out.style.display==='none'||!out.style.display){
    var items=(data[name]||['Official source','Regularly verified']).map(function(w){return '<div class="rs-ev-i">&#10003; '+w+'</div>';}).join('');
    out.innerHTML='<div class="ks-explain fade"><div class="kse-why-h">Why '+name+' scores '+score+'</div>'+items+'<div class="kse-weak"><b>Weakness:</b> '+(weak[name]||'None detected')+'</div></div>';
    out.style.display='block'; btn.textContent='Collapse &#8593;';
  } else { out.style.display='none'; btn.textContent='Explain &rarr;'; }
};

window.runSsSimulate = function(){
  var src=document.getElementById('ssSource').value; var tgt=document.getElementById('ssTarget').value;
  var out=document.getElementById('ssSimOut'); if(!out)return;
  out.innerHTML='<div class="tiny muted" style="margin-top:10px">Simulating&hellip;</div>';
  setTimeout(function(){
    var rows=[['43 articles','affected'],['7 entities','need re-verification'],['12 research items','trust reduced'],['2 publishing plans','on hold']];
    out.innerHTML='<div class="rs-conflict" style="margin-top:12px"><div class="rsc-h"><span class="rsc-dot"></span><b>If '+src+' drops to '+tgt+'</b></div>'
      +rows.map(function(r){return '<div class="rsc-row"><span class="trust warn">'+r[0]+'</span><span>'+r[1]+'</span></div>';}).join('')+'</div>';
  },700);
};
I.know_scoring = function(){};

/* ═══════════════════════════════════════════════════════════════════
   KNOWLEDGE DATABASE v2
   ═══════════════════════════════════════════════════════════════════ */
var kdbActive = 'Claude';
var KDB2 = {
  Claude:{id:'ENTITY-000421',type:'AI Assistant',health:96,conf:98,cov:94,rels:41,sources:17,content:38,updated:'3 min ago',status:'Healthy',
    summary:'Claude is Anthropic\u2019s flagship AI assistant. Verified through official API, documentation, pricing page, developer portal, and benchmarks.',
    coverage:[['Pricing',100],['API',100],['Features',94],['Benchmarks',71],['Videos',43],['Case Studies',29]],
    missing:['Enterprise pricing','Case studies','Security certs','Videos','Benchmarks'],
    timeline:[['Jan 2025','First detected'],['Mar 2025','Claude 3.5 Sonnet'],['Aug 2025','Claude 4.0'],['Nov 2025','Computer-use API'],['Today','Price updated']],
    impact:{Articles:34,Comparisons:7,Clusters:12,Marketplace:5,Builders:19,Recommendations:42},
    provenance:[['$20/mo','Anthropic Pricing API','Today','100%','Official API','17 articles'],['Sonnet 3.7','Official Docs','Today','100%','Official','12 articles']]},
  ChatGPT:{id:'ENTITY-000389',type:'AI Assistant',health:97,conf:99,cov:98,rels:56,sources:22,content:48,updated:'11 min ago',status:'Healthy',
    summary:'ChatGPT is OpenAI\u2019s flagship AI product. Verified through official API, pricing, documentation, and multiple independent reviews.',
    coverage:[['Pricing',100],['API',100],['Features',100],['Benchmarks',88],['Videos',72],['Case Studies',61]],
    missing:['Enterprise case studies','Security docs'],
    timeline:[['Nov 2022','Launched'],['Mar 2023','GPT-4'],['May 2024','GPT-4o'],['May 2025','GPT-5'],['Today','Pricing updated']],
    impact:{Articles:42,Comparisons:12,Clusters:15,Marketplace:8,Builders:24,Recommendations:58},
    provenance:[['$20/mo','OpenAI Pricing','11 min ago','100%','Official API','22 articles'],['GPT-5','Official Docs','11 min ago','100%','Official','18 articles']]}
};
var KDB_TABS2 = ['Overview','Summary','Coverage','Relationships','Components','Provenance','Timeline','Recommendations','Missing','Impact','Compare','AI Search','Health','Actions'];

V.know_db = function(){
  var tabs = KDB_TABS2.map(function(t,i){
    return '<button class="kdb-tab '+(i===0?'on':'')+'" onclick="kdbTab2(\''+t+'\',this)">'+t+'</button>';
  }).join('');
  return '<div class="page-h"><div class="eyebrow"><span class="ix">&#9670;</span> Knowledge &middot; Knowledge Database &middot; Living Brain</div>'
    +'<h1>The single source of truth.</h1>'
    +'<p>What AGNUS knows, what it doesn\u2019t, how reliable it is, where it came from, where it\u2019s used, what changed, and what needs updating.</p></div>'
    +'<div class="kdb-tabs" id="kdbTabs2">'+tabs+'</div>'
    +'<div id="kdbBody2"></div>';
};

window.kdbPickEntity = function(name){ kdbActive=name; GO('know_db'); };

window.kdbTab2 = function(tab,el){
  if(el){ [].forEach.call(el.parentElement.children,function(b){b.classList.toggle('on',b===el);}); }
  var e = KDB2[kdbActive]||KDB2.Claude;
  var body = document.getElementById('kdbBody2'); if(!body)return;
  var pick = '<div class="kdb-entity-select" style="margin-bottom:14px">'
    +Object.keys(KDB2).map(function(n){
      return '<button class="opt '+(n===kdbActive?'on':'')+'" onclick="kdbPickEntity(\''+n+'\')">'+n+'</button>';
    }).join('')+'<button class="b b-line b-sm">+ Add</button></div>';

  var content = '';
  if(tab==='Overview'){
    var fields=[['Entity ID',e.id],['Type',e.type],['Health',e.health+'%'],['Confidence',e.conf+'%'],['Coverage',e.cov+'%'],['Relationships',e.rels],['Sources',e.sources],['Connected',e.content],['Last Updated',e.updated],['Status',e.status]];
    content = pick+'<div class="kdb-ov-cards">'+fields.map(function(s){
      return '<div class="kdb-ov-card"><div class="kovc-l">'+s[0]+'</div><div class="kovc-v">'+s[1]+'</div></div>';
    }).join('')+'</div>';
  } else if(tab==='Summary'){
    content = pick+'<div class="chief-msg"><p>'+e.summary+'</p></div>'
      +'<div class="rs-cards" style="grid-template-columns:repeat(4,1fr)">'+[['Health',e.health+'%'],['Confidence',e.conf+'%'],['Coverage',e.cov+'%'],['Sources',e.sources]].map(function(s){
        return '<div class="rs-card"><div class="rs-n">'+s[1]+'</div><div class="rs-l">'+s[0]+'</div></div>';
      }).join('')+'</div>';
  } else if(tab==='Coverage'){
    content = pick+e.coverage.map(function(c){
      return '<div class="cov-row"><span class="cov-k">'+c[0]+'</span><div class="cov-bar">'+m(c[1])+'</div><span class="cov-v">'+c[1]+'%</span></div>';
    }).join('');
  } else if(tab==='Relationships'){
    content = pick+'<div class="kgraph"><div class="kgtx"></div><div class="kg-row"><button class="kgn">Anthropic</button><span class="kg-link"></span><button class="kgn on">'+kdbActive+'</button><span class="kg-link"></span><button class="kgn">API</button></div><div class="kg-branch"><button class="kgn">Pricing</button><button class="kgn">Features</button><button class="kgn">Articles</button><button class="kgn">Marketplace</button></div></div>';
  } else if(tab==='Components'){
    content = pick+'<div class="rs-ents">'+['Research Panel','Keyword Discovery','Topic Clusters','Story Builder','AI Writer','Human Review','Publishing Calendar','Knowledge Graph','Entity Manager','Memory','Marketplace','Academy'].map(function(mm){
      return '<button class="rs-ent">'+mm+'</button>';
    }).join('')+'</div>';
  } else if(tab==='Provenance'){
    content = pick+e.provenance.map(function(p){
      return '<div class="kdb-prov-row" onclick="this.classList.toggle(\'open\')">'
        +'<div class="kdbp-main"><b>'+p[0]+'</b>'+pill('official','official')+'</div>'
        +'<div class="kdbp-expand"><div class="rsrc-row2">'
        +[['Source',p[1]],['Verified',p[2]],['Confidence',p[3]],['Method',p[4]],['Used by',p[5]]].map(function(r){
          return '<div class="re-row"><span class="re-k">'+r[0]+'</span><span class="re-v">'+r[1]+'</span></div>';
        }).join('')+'</div></div></div>';
    }).join('');
  } else if(tab==='Timeline'){
    content = pick+'<div class="tl">'+e.timeline.map(function(t,i){
      return '<div class="tl-row" style="margin-bottom:8px"><div class="tl-rail"><div class="tl-dot change" style="font-size:9px">&#9679;</div>'+(i<e.timeline.length-1?'<div class="tl-line" style="min-height:12px"></div>':'')+'</div><div class="tl-card" style="padding:8px 12px;margin-bottom:0"><div class="tl-top"><span class="tl-time mono">'+t[0]+'</span></div><p style="margin:0">'+t[1]+'</p></div></div>';
    }).join('')+'</div>';
  } else if(tab==='Recommendations'){
    content = pick+'<div class="rs-ev-list">'+['Pricing changed &mdash; update comparisons','Refresh articles citing old price','Update affiliate links','Rebuild entity graph'].map(function(r){
      return '<div class="rs-ev-i">&#8594; '+r+'<button class="b b-gold b-sm" style="margin-left:auto">Apply</button></div>';
    }).join('')+'</div>';
  } else if(tab==='Missing'){
    content = pick+'<div class="rs-conflict">'+e.missing.map(function(mm){
      return '<div class="rsc-row"><span class="trust warn">Missing</span><span>'+mm+'</span><button class="b b-line b-sm" onclick="GO(\'know_sources\')">Collect</button></div>';
    }).join('')+'</div>';
  } else if(tab==='Impact'){
    content = pick+'<div class="kdb-ov-cards">'+Object.entries(e.impact).map(function(kv){
      return '<div class="kdb-ov-card"><div class="kovc-l">'+kv[0]+'</div><div class="kovc-v">'+kv[1]+'</div></div>';
    }).join('')+'</div>';
  } else if(tab==='Compare'){
    content = pick+'<table class="an-table"><thead><tr><th>Entity</th><th>Health</th><th>Conf</th><th>Coverage</th><th>Rels</th><th>Sources</th></tr></thead><tbody>'
      +[['Claude',96,98,94,41,17],['ChatGPT',97,99,98,56,22],['Gemini',88,90,85,32,14],['Mistral',74,79,72,18,8]].map(function(r){
        return '<tr><td style="font-weight:700">'+r[0]+'</td>'+r.slice(1).map(function(v){
          return '<td>'+pill(v>=90?'green':v>=75?'gold':'warn',v)+'</td>';
        }).join('')+'</tr>';
      }).join('')+'</tbody></table>';
  } else if(tab==='AI Search'){
    content = pick+'<div class="kip-bar" style="margin-bottom:14px"><input type="text" id="kdbSearchIn" placeholder="Show all AI models released this year under $30 that support vision&hellip;" style="border:1px solid var(--line);border-radius:9px;padding:10px 13px;font-size:13.5px;outline:none;background:var(--paper);width:100%;box-sizing:border-box"><button class="b b-dark b-sm" onclick="kdbNLSearch()">Search &rarr;</button></div><div id="kdbNLOut"></div>';
  } else if(tab==='Health'){
    content = pick+'<div class="kdb-health-gauge">'
      +'<div class="kdb-hg-ring"><div class="ring" style="--p:'+e.health+';width:120px;height:120px"><span class="rn" style="font-size:28px">'+e.health+'</span></div><div class="kdb-hg-label">Knowledge Health</div></div>'
      +'<div class="kdb-hg-detail">'+[['Coverage',e.cov],['Verification',e.conf],['Freshness',97],['Relationships',91]].map(function(s){
        return '<div class="kdb-hg-row"><span>'+s[0]+'</span><div style="flex:1">'+m(s[1])+'</div><b>'+s[1]+'%</b></div>';
      }).join('')+'</div></div>';
  } else if(tab==='Actions'){
    content = pick+'<div class="row" style="gap:9px;flex-wrap:wrap">'+['Refresh','Verify','Merge','Archive','Export','Compare','History','Recalculate','Rebuild Relationships','Open Graph','Affected Content','View Sources','Update Entity','Delete'].map(function(a,i){
      return '<button class="b '+(i<2?'b-gold':'b-line')+' b-sm">'+a+'</button>';
    }).join('')+'</div>';
  }
  body.innerHTML = content||pick+'<div class="tiny muted">Select a tab.</div>';
};
I.know_db = function(){ var b=document.querySelector('.kdb-tab'); if(b) kdbTab2('Overview',b); };
window.kdbNLSearch = function(){
  var out=document.getElementById('kdbNLOut'); if(!out)return;
  out.innerHTML='<div class="tiny muted">Searching&hellip;</div>';
  setTimeout(function(){ out.innerHTML='<table class="an-table"><thead><tr><th>Entity</th><th>Type</th><th>Price</th><th>Vision</th><th>Health</th></tr></thead><tbody><tr><td style="font-weight:700">Claude</td><td>AI Assistant</td><td>$20/mo</td><td>&#10003;</td><td>'+pill('green','96')+'</td></tr><tr><td style="font-weight:700">ChatGPT</td><td>AI Assistant</td><td>$20/mo</td><td>&#10003;</td><td>'+pill('green','97')+'</td></tr></tbody></table>'; },700);
};

/* ═══════════════════════════════════════════════════════════════════
   KNOWLEDGE GRAPH v2
   ═══════════════════════════════════════════════════════════════════ */
var KG_VIEWS = ['Entity Graph','Product Graph','Company Graph','Article Graph','Topic Graph','Keyword Graph','Revenue Graph','Traffic Graph','Internal Link Graph','Marketplace Graph','Course Graph','Complete Graph'];
var KG_SIM_EVENTS = ['Pricing Change','Feature Removed','API Changed','Company Acquired','Security Issue','Product Discontinued','Rebrand','Documentation Updated','Affiliate Removed','New Model Released'];
var KG_HEALTH2 = {Nodes:14522,Edges:162000,Broken:18,Duplicates:4,Orphans:12,'Low Conf':43,Cycles:2,Coverage:'97%'};
var KG_RELS = [['depends_on','var(--sapphire)'],['competes_with','var(--error)'],['mentions','var(--ink-mute)'],['owns','var(--gold)'],['teaches','var(--success)'],['priced_against','var(--warn)'],['feeds','var(--sapphire)']];

V.know_graph = function(){
  var modes = '<div class="kg-modes-wrap"><div class="kg-modes">'+KG_VIEWS.map(function(v,i){
    return '<button class="kg-mode-btn '+(i===0?'on':'')+'">'+v+'</button>';
  }).join('')+'</div></div>';

  var health = '<div class="kgh-bar">'+Object.entries(KG_HEALTH2).map(function(kv){
    var warn = ['Broken','Orphans','Cycles','Duplicates'].indexOf(kv[0])>=0;
    return '<div class="kgh-stat"><div class="kgh-v" style="color:'+(warn?'var(--warn)':'inherit')+'">'+kv[1]+'</div><div class="kgh-l">'+kv[0]+'</div></div>';
  }).join('')+'</div>';

  var relLeg = '<div class="kg-rel-legend">'+KG_RELS.map(function(r){
    return '<span class="kg-rel-item"><span class="kg-rel-dot" style="background:'+r[1]+'"></span>'+r[0]+'</span>';
  }).join('')+'</div>';

  var graphNodes = ['OpenAI','ChatGPT','Pricing'].map(function(n,i){
    return (i>0?'<span class="kg-link-edge" onclick="kgEdge(this)" style="cursor:pointer;padding:2px 8px;font-family:var(--font-mono);font-size:11px;color:var(--gold-light)" title="Click to inspect relationship">98</span>':'')
      +'<button class="kgn '+(i===0?'on':'')+'" onclick="kgNodeInspect(\''+n+'\',this)">'+n+'</button>';
  }).join('');

  var graphBranch = ['Review','Comparison','Marketplace','Academy','Business Guide','Industry Collection'].map(function(n){
    return '<button class="kgn" onclick="kgNodeInspect(\''+n+'\',this)">'+n+'</button>';
  }).join('');

  var controls = ['Expand 1 hop','Expand 2 hops','Collapse','Pin','Trace upstream','Trace downstream','Center','Compare','Find path'].map(function(a){
    return '<button class="b b-line b-sm kg-ctrl">'+a+'</button>';
  }).join('');

  var graph = '<div class="kgraph" style="min-height:260px"><div class="kgtx"></div>'
    +'<div class="kg-row" style="margin-bottom:20px">'+graphNodes+'</div>'
    +'<div class="kg-branch">'+graphBranch+'</div>'
    +'<div class="kg-controls" style="margin-top:14px">'+controls+'</div>'
    +'<div class="tiny" style="color:var(--on-dark-mute);text-align:center;margin-top:10px">Click nodes to inspect &middot; Click edge weights to explain</div></div>';

  var sim = '<div class="ks-sim"><div class="ks-sim-row"><span>Simulate</span>'
    +'<select class="ks-sim-sel" id="kgSimEvent">'+KG_SIM_EVENTS.map(function(e){return '<option>'+e+'</option>';}).join('')+'</select>'
    +'<span>for</span><select class="ks-sim-sel" id="kgSimEntity"><option>OpenAI</option><option>Anthropic</option><option>Google</option></select></div>'
    +'<button class="b b-gold b-sm" style="margin-top:10px" onclick="kgRunSim()">Run Simulation &rarr;</button><div id="kgSimOut"></div></div>';

  var orphans = '<div class="rs-conflict"><div class="rsc-h"><span class="rsc-dot" style="background:var(--warn)"></span><b>14 orphan entities detected</b></div>'
    +['GPT-4 Turbo','DALL-E 2','Codex (deprecated)','Google Bard'].map(function(o){
      return '<div class="rsc-row"><span class="trust warn">Orphan</span><span>'+o+'</span><div class="row" style="gap:6px;margin-left:auto">'+pill('blue','Connect')+'<button class="b b-ghost b-sm">Archive</button></div></div>';
    }).join('')+'</div>';

  var tlSlider = '<div class="kg-timeline-ctrl"><div class="kg-tl-h">Timeline Mode &middot; watch graph evolve</div>'
    +'<input type="range" class="slider" min="2024" max="2026" step="0.1" value="2026" oninput="document.getElementById(\'kgYear\').textContent=parseFloat(this.value).toFixed(1)">'
    +'<div class="kg-tl-year" id="kgYear">2026</div></div>';

  var search = '<div class="kip-bar" style="margin-bottom:14px"><input type="text" placeholder="Find shortest path / Show all connected to GPT-5 / Find orphan nodes&hellip;" style="border:1px solid var(--line);border-radius:9px;padding:10px 13px;font-size:13.5px;outline:none;background:var(--paper);width:100%;box-sizing:border-box"><button class="b b-dark b-sm">Search &rarr;</button></div>';

  var depEng = '<div class="kdb-ov-cards">'+['Depends on','Used by','Blocks','Feeds','Influences','Protects','Requires','Related to','Replaces'].map(function(r){
    return '<div class="kdb-ov-card"><div class="kovc-l">'+r+'</div><div class="kovc-v" style="font-size:12px;color:var(--ink-soft)">0 links</div></div>';
  }).join('')+'</div>';

  var aiRecs = '<div class="rs-ev-list">'+['Connect GPT-5 to GPT-5 Mini','Missing Pricing node for Gemini 3','Confidence low: Claude &rarr; Marketplace (43%)','Possible duplicate: ChatGPT / ChatGPT Plus','New benchmark available for GPT-5','Missing Course relationship for Claude'].map(function(r){
    return '<div class="rs-ev-i">'+r+'<button class="b b-gold b-sm" style="margin-left:auto">Fix</button></div>';
  }).join('')+'</div>';

  return '<div class="page-h"><div class="eyebrow"><span class="ix">&#9670;</span> Knowledge &middot; Knowledge Graph &middot; Living Nervous System</div>'
    +'<h1>Everything is connected. Every change propagates.</h1>'
    +'<p>What exists, how things connect, why they connect, what changes affect what, where opportunities and risks are.</p></div>'
    +health+modes+relLeg
    +'<div class="kg2-layout"><div class="kg2-main">'
    +graph+tlSlider+search
    +sec('Live Change Simulation')+sim
    +sec('Orphan Detection')+orphans
    +sec('Dependency Engine')+depEng
    +'</div><div class="kg2-aside">'
    +'<div id="kgInspectorPanel"><div class="card" style="padding:18px 20px"><div class="hr-sh">Entity Inspector</div><p class="muted" style="font-size:13px">Click any node to inspect it here.</p></div></div>'
    +sec('AI Recommendations')+aiRecs
    +'</div></div>';
};

window.kgNodeInspect = function(name, el){
  if(el){ [].forEach.call(document.querySelectorAll('.kgn'),function(b){b.classList.toggle('on',b===el);}); }
  var panel=document.getElementById('kgInspectorPanel'); if(!panel)return;
  var data={
    OpenAI:{type:'Company',health:97,conf:98,sources:22,rev:'&euro;3,400/mo',traffic:'42k/mo',links:38,related:['ChatGPT','GPT-5','Anthropic']},
    ChatGPT:{type:'AI Product',health:97,conf:99,sources:22,rev:'&euro;1,200/mo',traffic:'28k/mo',links:22,related:['OpenAI','Claude','Gemini']},
    Pricing:{type:'Attribute',health:92,conf:100,sources:8,rev:'&euro;640/mo',traffic:'12k/mo',links:14,related:['ChatGPT','Review','Comparison']}
  };
  var d=data[name]||{type:'Content node',health:88,conf:90,sources:4,rev:'&euro;80/mo',traffic:'5k/mo',links:6,related:['OpenAI','ChatGPT']};
  panel.innerHTML='<div class="card" style="padding:20px 22px"><div class="hr-sh">Entity Inspector &middot; '+name+'</div>'
    +'<div class="kdb-ov-cards" style="grid-template-columns:1fr 1fr">'+[['Type',d.type],['Health',d.health+'%'],['Confidence',d.conf+'%'],['Sources',d.sources],['Revenue',d.rev],['Traffic',d.traffic],['Int. links',d.links]].map(function(s){
      return '<div class="kdb-ov-card"><div class="kovc-l">'+s[0]+'</div><div class="kovc-v">'+s[1]+'</div></div>';
    }).join('')+'</div>'
    +'<div class="hr-sh" style="margin-top:12px">Related entities</div>'
    +'<div class="rs-ents">'+d.related.map(function(r){
      return '<button class="rs-ent" onclick="kgNodeInspect(\''+r+'\',null)">'+r+'</button>';
    }).join('')+'</div>'
    +'<button class="b b-dark b-block" style="margin-top:14px" onclick="GO(\'know_entities\')">Open full entity &rarr;</button></div>';
};

window.kgEdge = function(el){
  var panel=document.getElementById('kgInspectorPanel'); if(!panel)return;
  panel.innerHTML='<div class="card" style="padding:20px 22px"><div class="hr-sh">Relationship Inspector</div>'
    +'<div class="kdb-ov-cards" style="grid-template-columns:1fr 1fr">'+[['Type','owns'],['Weight',el.textContent.trim()],['Confidence','100%'],['Criticality','Critical'],['Propagation','Immediate'],['Last verified','Today']].map(function(s){
      return '<div class="kdb-ov-card"><div class="kovc-l">'+s[0]+'</div><div class="kovc-v">'+s[1]+'</div></div>';
    }).join('')+'</div>'
    +'<div class="hr-sh" style="margin-top:12px">Why this relationship exists</div>'
    +'<div class="rs-ev-list"><div class="rs-ev-i">&#10003; Pricing owned by OpenAI</div><div class="rs-ev-i">&#10003; Appears in 18 articles</div><div class="rs-ev-i">&#10003; Used in 4 calculators</div><div class="rs-ev-i">&#10003; Feeds Marketplace pricing</div><div class="rs-ev-i">&#10003; Critical dependency &mdash; propagate immediately</div></div></div>';
};

window.kgRunSim = function(){
  var ev=document.getElementById('kgSimEvent').value; var ent=document.getElementById('kgSimEntity').value;
  var out=document.getElementById('kgSimOut'); if(!out)return;
  out.innerHTML='<div class="tiny muted" style="margin-top:10px">Simulating&hellip;</div>';
  setTimeout(function(){
    var rows=[['Knowledge Database','updated'],['4 Entities','rebuilt'],['Graph','updated'],['12 Research items','refreshed'],['2 Story Builders','flagged'],['2 AI Writer drafts','alerted'],['Revenue impact','&euro;320/mo protected']];
    out.innerHTML='<div class="rs-conflict" style="margin-top:12px"><div class="rsc-h"><span class="rsc-dot"></span><b>'+ev+' &middot; '+ent+'</b></div>'
      +rows.map(function(r){return '<div class="rsc-row"><span class="trust '+(r[1]==='protected'?'high':r[1]==='updated'||r[1]==='rebuilt'?'official':'community')+'">'+r[0]+'</span><span>'+r[1]+'</span></div>';}).join('')+'</div>';
  },900);
};
I.know_graph = function(){ var f=document.querySelector('.kgn'); if(f) kgNodeInspect('OpenAI',f); };

/* ── API Connection helpers (per-source credential store) ── */
function srcKeyStore(){
  try{ return JSON.parse(localStorage.getItem('agnus-src-keys')||'{}'); }catch(e){ return {}; }
}
window.srcGetKey=function(name){ return srcKeyStore()[name]||''; };
window.srcSaveKey=function(btn){
  var conn=btn.closest('.sd-conn'); if(!conn)return;
  var name=conn.dataset.src; var input=conn.querySelector('#sdcKey');
  var key=input?input.value.trim():'';
  var result=conn.querySelector('#sdcResult'); var status=conn.querySelector('#sdcStatus');
  if(!key){ if(result)result.innerHTML='<span class="sdc-err">Enter a key first.</span>'; return; }
  var store=srcKeyStore(); store[name]=key;
  try{ localStorage.setItem('agnus-src-keys', JSON.stringify(store)); }catch(e){}
  if(status){ status.className='sdc-status ok'; status.innerHTML='&#9679; Connected'; }
  if(result)result.innerHTML='<span class="sdc-ok">&#10003; Saved. '+name+' is now connected \u2014 Discovery, Research and the Brain will use this credential.</span>';
};
window.srcTestConn=function(btn){
  var conn=btn.closest('.sd-conn'); if(!conn)return;
  var input=conn.querySelector('#sdcKey'); var key=input?input.value.trim():'';
  var result=conn.querySelector('#sdcResult');
  var isPublic=!input; /* public sources have no key input */
  if(!isPublic&&!key){ if(result)result.innerHTML='<span class="sdc-err">Enter a key first.</span>'; return; }
  var o=btn.textContent; btn.textContent='Testing\u2026'; btn.disabled=true;
  setTimeout(function(){
    btn.textContent=o; btn.disabled=false;
    if(result)result.innerHTML=isPublic
      ?'<span class="sdc-ok">&#10003; Public endpoint reachable \u00b7 no auth required \u00b7 latency 180ms</span>'
      :'<span class="sdc-ok">&#10003; Credential format accepted \u00b7 endpoint reachable \u00b7 latency 240ms</span><div class="sdc-hint">Note: this prototype validates locally. Live validation runs once the backend is implemented.</div>';
  },900);
};
window.srcToggleReveal=function(btn){
  var input=btn.closest('.sd-conn').querySelector('#sdcKey'); if(!input)return;
  input.type=input.type==='password'?'text':'password';
  btn.textContent=input.type==='password'?'Reveal':'Hide';
};
window.srcDisconnect=function(btn){
  var conn=btn.closest('.sd-conn'); if(!conn)return;
  var name=conn.dataset.src;
  var store=srcKeyStore(); delete store[name];
  try{ localStorage.setItem('agnus-src-keys', JSON.stringify(store)); }catch(e){}
  var input=conn.querySelector('#sdcKey'); if(input)input.value='';
  var status=conn.querySelector('#sdcStatus'); if(status){ status.className='sdc-status off'; status.innerHTML='&#9675; Not connected'; }
  var result=conn.querySelector('#sdcResult'); if(result)result.innerHTML='<span class="sdc-err">Disconnected \u2014 credential removed.</span>';
  btn.remove();
};

})();

/* === dash-sections.js === */
/* AGNUS Dashboard — Keyword Discovery v2, Research Panel v2, Topic Clusters v2, Article Pipeline v2 */
(function(){
const V = window.VIEWS = window.VIEWS || {};
const I = window.VIEW_INIT = window.VIEW_INIT || {};

const m=(v,c)=>'<div class="meter '+(c||'')+'" style="background-size:'+v+'% 100%"></div>';
const pill=(c,t)=>'<span class="pill '+c+'">'+t+'</span>';
const cb=(v,t)=>'<div class="check"><span class="cb '+(v?'y':'n')+'">'+(v?'\u2713':'!')+'</span> '+t+'</div>';

/* ═══════════════════════════════ KEYWORD DISCOVERY v2 ═══════════════════════════════ */
const KW=[
  {kw:'best AI tools for restaurants',score:'9.2',intent:'Commercial',traffic:'High',diff:'Low',aff:'High',cluster:'Business / Restaurants',cls:'hi',
   ev:['Google Trends rising 42%','Search Console impressions +28%','Low competition (31/100)','3 affiliate programs match','Cluster gap: Restaurants 31%']},
  {kw:'claude vs chatgpt',score:'8.4',intent:'Comparison',traffic:'High',diff:'High',aff:'Medium',cluster:'AI Models',cls:'mid',
   ev:['Google Trends: stable high','Search Console: #3 current','Medium competition','Affiliate match','Missing refresh: 21 days']},
  {kw:'AI for dental clinics',score:'8.9',intent:'Industry',traffic:'Medium',diff:'Low',aff:'High',cluster:'Healthcare',cls:'hi',
   ev:['Google Trends rising 18%','No current coverage','Low competition','High affiliate value','Cluster gap: Healthcare']},
  {kw:'how to automate customer support',score:'8.1',intent:'Problem',traffic:'High',diff:'Medium',aff:'Medium',cluster:'AI Agents / Business',cls:'mid',
   ev:['Google Trends rising','Intent: strong commercial','Medium competition','Affiliate match','Cluster gap: Agents']},
  {kw:'best AI agents for small business',score:'8.7',intent:'Commercial',traffic:'High',diff:'Low',aff:'High',cluster:'AI Agents',cls:'hi',
   ev:['Google Trends: rising 40%','4 affiliate programs','Cluster gap: pillar missing','Internal search +18%','Low competition']},
  {kw:'what is RAG',score:'7.6',intent:'Informational',traffic:'High',diff:'Medium',aff:'Low',cluster:'AI Models / RAG',cls:'mid',
   ev:['Google Trends: consistent','High informational intent','Medium competition','Academy opportunity','Cluster: RAG 49%']}
];

function kwCard(k,i){
  return '<div class="kw kw2">'
    +'<div class="kw-top"><h3 style="font-family:var(--font-sans);font-weight:700;cursor:pointer" onclick="openKwDrawer(&#39;+i+&#39;)">'+k.kw+'</h3>'
    +'<div class="kw-score"><div class="n '+k.cls+'">'+k.score+'</div><div class="l">Priority</div></div></div>'
    +'<div class="kw-attrs">'
    +'<div class="kw-attr"><span class="k">Intent</span><span class="v">'+k.intent+'</span></div>'
    +'<div class="kw-attr"><span class="k">Traffic</span><span class="v">'+k.traffic+'</span></div>'
    +'<div class="kw-attr"><span class="k">Difficulty</span><span class="v">'+k.diff+'</span></div>'
    +'<div class="kw-attr"><span class="k">Affiliate</span><span class="v">'+k.aff+'</span></div></div>'
    +'<div class="kw-evidence"><div class="kwe-l">Evidence</div>'
    +k.ev.map(e=>'<div class="kwe-i">\u25b7 '+e+'</div>').join('')+'</div>'
    +'<div class="kw-foot"><span class="kw-cluster">\u25b7 '+k.cluster+'</span>'
    +'<div class="kw-acts">'
    +'<button class="b b-dark b-sm" onclick="openCreate(this.closest(\'.kw2\').querySelector(\'h3\').textContent)">Write</button>'
    +'<button class="b b-line b-sm" onclick="GO(\'research\')">Research</button>'
    +'<button class="b b-ghost b-sm" onclick="GO(\'clusters\')">Add to cluster</button>'
    +'</div></div></div>';
}

V.keywords = ()=>{
  const deBlock='<div class="de-block">'
    +'<div class="de-header"><div class="de-orb"></div>'
    +'<div class="de-info"><div class="de-title">Discovery Engine</div><div class="de-sub">Last scan: <b>8 min ago</b></div></div>'
    +'<div class="de-stats">'
    +[['Sources scanned','53'],['New keywords','128'],['Qualified','21'],['High opportunity','4'],['Duplicates removed','17']]
      .map(s=>'<div class="des"><div class="des-v">'+s[1]+'</div><div class="des-l">'+s[0]+'</div></div>').join('')
    +'</div><div class="de-act">'
    +'<button class="b b-gold b-sm" onclick="runKwScan(this)">\u27f3 Run scan now</button>'
    +'<button class="b b-line b-sm" onclick="setKwMode(\'manual\')">+ Add keyword manually</button>'
    +'</div></div></div>';

  const modeBlock='<div class="kw-mode" id="kwMode">'
    +'<button class="kwm on" onclick="setKwMode(\'auto\',this)">\u25c9 Autonomous Discovery</button>'
    +'<button class="kwm" onclick="setKwMode(\'manual\',this)">\u270e Manual Keyword</button>'
    +'<div id="kwManualIn" style="display:none;margin-top:12px"><div class="kip-bar"><input type="text" id="kwManualField" placeholder="Enter keyword to analyze\u2026"><button class="b b-dark b-sm" onclick="kwSearch(document.getElementById(&#39;kwManualField&#39;).value)">Analyze \u2192</button></div></div>'
    +'</div>';

  const oppBlock='<div class="opp" style="margin-bottom:24px"><div class="tx"></div>'
    +'<h3>Opportunity Score \u00b7 \"best AI tools for restaurants\"</h3>'
    +'<div class="sub">How the 9.2 is built</div>'
    +'<div class="opp-bars">'
    +[['Search demand','7/10',70],['Competition (inverse)','5/10',50],['Affiliate value','8/10',80],['Business relevance','10/10',100],['Cluster value','9/10',90],['Freshness','8/10',80]]
      .map(b=>'<div class="opp-bar"><div class="ob-top"><span class="k">'+b[0]+'</span><span class="v">'+b[1]+'</span></div>'+m(b[2])+'</div>').join('')
    +'</div><div class="opp-final"><span class="n">9.2</span><span class="l">Final opportunity score<br>Write this first</span></div></div>';

  const kwCards='<div class="kw-filters">'
    +['All','Low competition','High affiliate','Trending','Business','Review','Comparison','Academy','Marketplace']
      .map((f,i)=>'<button class="kw-filter '+(i===0?'on':'')+'" onclick="kwFilter(this)">'+f+'</button>').join('')
    +'</div><div class="kw-grid" id="kwGrid">'+KW.map((k,i)=>kwCard(k,i)).join('')+'</div>';

  return '<div class="page-h">'
    +'<div class="eyebrow"><span class="ix">\u25c6</span> Keyword Discovery \u00b7 21 qualified opportunities</div>'
    +'<h1>What to write first \u2014 and why.</h1>'
    +'<p>AGNUS scans 53 sources autonomously and scores every keyword on demand, intent, competition, affiliate value, cluster importance, freshness and AGNUS authority fit.</p></div>'
    +deBlock+modeBlock+oppBlock+kwCards
    +'<div class="sd-drawer" id="kwDrawer"><div class="sd-body"></div></div>';
};

window.openKwDrawer=function(i){
  const k=KW[i]||KW[0];
  const d=document.getElementById('kwDrawer'); if(!d)return;
  const sections=[
    ['Keyword Overview','Full keyword intelligence analysis for this opportunity'],
    ['Search Demand','Monthly volume: 12,400 \u00b7 Impressions: 28,400 \u00b7 Position: not yet ranked'],
    ['Trend History','\u2191 Rising 42% over 30 days \u00b7 Consistent high volume \u00b7 Q3 seasonal peak expected'],
    ['Search Intent','Commercial Investigation \u00b7 Users comparing tools before purchase \u00b7 Strong buying signal'],
    ['Competition','Difficulty: '+k.diff+' (31/100) \u00b7 Competing pages: 14 weak \u00b7 Ranking gap: achievable in 60 days'],
    ['Business Value','\u2605\u2605\u2605\u2605\u2605 Highest value cluster \u00b7 Multiple monetization paths available'],
    ['Affiliate Value',k.aff+' \u00b7 OpenTable AI / ChatGPT Plus / Canva Pro \u00b7 Est. \u20ac180/mo'],
    ['Cluster Fit',k.cluster+' \u00b7 Cluster at 31% strength \u00b7 This article advances it to 47%'],
    ['Semantic Expansion','9 related keywords \u00b7 AI Restaurant Software parent topic \u00b7 45k est. impressions'],
    ['Voice Search Questions','"What AI tools help restaurants?" \u00b7 "Can AI reduce no-shows?" \u00b7 Featured snippet available'],
    ['AI Search Opportunities','Gemini cites this topic in 68% of restaurant AI queries \u00b7 High AI Overview probability'],
    ['Related Keywords','AI restaurant booking \u00b7 AI for hospitality \u00b7 restaurant automation \u00b7 AI customer service'],
    ['Competitor Pages','Backlinko (weak) \u00b7 HubSpot (no hospitality angle) \u00b7 Zapier (no restaurant use case)'],
    ['Internal Content Gap','6 existing articles can link here \u00b7 4 missing links from pillar'],
    ['Recommended Article Types',pill('gold','Buying Guide')+' '+pill('ghost','Comparison')+' '+pill('ghost','Tutorial')],
    ['Expected Traffic','+2,800 visits/month \u00b7 Based on current cluster performance + keyword volume'],
    ['Expected Revenue','\u20ac180/month \u00b7 Affiliate + Premium conversion estimate'],
    ['Recommended Next Action','<button class="b b-gold b-block" onclick="openCreate(&#39;&#39;+k.kw+&#39;&#39;)" style="margin-top:8px">Generate Research Brief \u2192</button>']
  ];
  d.querySelector('.sd-body').innerHTML='<div class="sd-h"><div><h3>'+k.kw+'</h3>'
    +'<div class="sd-ident">'+pill('gold','Score '+k.score)+' '+pill(k.cls==='hi'?'green':'warn',k.intent)+'</div></div>'
    +'<button class="x" onclick="document.getElementById(&#39;kwDrawer&#39;).classList.remove(&#39;open&#39;)">\u00d7</button></div>'
    +sections.map(s=>'<div class="kwd-section"><div class="kwd-k">'+s[0]+'</div><div class="kwd-v">'+s[1]+'</div></div>').join('');
  d.classList.add('open');
  d.querySelector('.sd-body').scrollTop=0;
};
/* Research auto-generation with engine chain */
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
window.runKwScan=function(btn){const o=btn.textContent;btn.textContent='Scanning\u2026';btn.disabled=true;setTimeout(()=>{btn.textContent='\u2713 128 found';setTimeout(()=>{btn.textContent=o;btn.disabled=false;},1400);},1200);};
window.setKwMode=function(mode,el){if(el)document.querySelectorAll('.kw-mode .kwm').forEach(b=>b.classList.toggle('on',b===el));const mi=document.getElementById('kwManualIn');if(mi)mi.style.display=mode==='manual'?'block':'none';};
window.kwFilter=function(el){document.querySelectorAll('.kw-filter').forEach(b=>b.classList.toggle('on',b===el));};
I.keywords=()=>{};

/* ═══════════════════════════════ RESEARCH PANEL v2 ═══════════════════════════════ */
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
    +[['Sources collected','18'],['Official sources','6'],['Community sources','5'],['Research papers','2'],['Average trust','94%'],['Conflicts detected','1'],['Missing evidence','2']]
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
      +[['Trust',s.tr+'/100'],['Last updated',s.up],['Entities',s.ent.join(', ')],['Articles affected',s.art],['Confidence',s.cf+'%']]
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

  const completeness='<div class="rs-section"><div class="rs-sh">Research Completeness</div>'
    +'<div class="row" style="gap:10px;align-items:center;margin-bottom:10px"><span class="tiny" style="font-weight:700;color:var(--success)">91%</span><div style="flex:1">'+m(91)+'</div></div>'
    +'<div class="rs-comp-list">'
    +[['Official docs',1],['Independent reviews',1],['Community',1],['Videos',1],['Academic',0],['Legal',1]].map(c=>cb(c[1],c[0])).join('')
    +'</div></div>';

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

/* ═══════════════════════════════ TOPIC CLUSTERS v2 ═══════════════════════════════ */
const CLUSTER_D={
  'AI Agents':{status:'Strong',pillar:'The Complete Guide to AI Agents',pub:'9/16',links:6,rev:'High',auth:'Strong',
    st:58,sem:72,intent:61,lnk:84,com:55,fresh:90,aut:76,
    arts:[['Best AI agents for business',1],['Customer support agents',1],['Sales agents compared',1],['How to build an agent',0],['Agent security & guardrails',0]],
    sug:[['Missing article','AI Agent Security Guide'],['Missing comparison','Claude vs GPT for agents'],['Weak link','Pillar does not link to Sales Agents'],['Cluster gap','No marketplace page']]},
  'AI Lawyers':{status:'Growing',pillar:'Complete Guide to AI for Lawyers',pub:'7/20',links:12,rev:'High',auth:'Growing',
    st:42,sem:61,intent:72,lnk:58,com:67,fresh:88,aut:71,
    arts:[['Best AI legal research tools',1],['Claude vs ChatGPT for legal',1],['AI contract review tools',1],['Legal prompt pack',1],['How law firms automate intake',0],['Legal AI risks & compliance',0]],
    sug:[['Missing article','AI Agent Security for Law Firms'],['Missing comparison','Claude vs GPT for legal'],['Weak link','Pillar missing intake agent link'],['Cluster gap','No marketplace page']]},
  'Restaurants':{status:'Early',pillar:'AI for Restaurants: The 2026 Playbook',pub:'4/14',links:9,rev:'Medium',auth:'Early',
    st:31,sem:44,intent:58,lnk:40,com:52,fresh:85,aut:48,
    arts:[['Best booking AI',1],['Voice receptionist tools',1],['Review reply automation',0],['Restaurant marketing prompts',0]],
    sug:[['Missing article','Review Reply Automation Guide'],['Missing article','Restaurant Marketing Prompts'],['Weak link','Pillar missing 6 internal links'],['Cluster gap','No comparison article']]},
  'RAG':{status:'Growing',pillar:'What is RAG? The Definitive Explainer',pub:'6/12',links:8,rev:'Medium',auth:'Growing',
    st:49,sem:63,intent:70,lnk:55,com:45,fresh:82,aut:64,
    arts:[['Best vector databases',1],['RAG vs fine-tuning',1],['Building a RAG pipeline',1],['Memory systems for agents',0]],
    sug:[['Missing article','Building a RAG Pipeline Tutorial'],['Cluster gap','Missing Vector DB comparison'],['Weak link','RAG not connected to Agents cluster']]}
};

V.clusters=()=>{
  const cards=Object.entries(CLUSTER_D).map(([name,c])=>'<div class="cluster" onclick="GO(&#39;cluster_&#39;+name.replace(/\s/g,&#39;_&#39;)+&#39;&#39;)" style="cursor:pointer">'
    +'<div class="cluster-top"><h3>'+name+'</h3><span class="pill '+(c.status==='Strong'?'green':c.status==='Growing'?'gold':'warn')+'">'+c.status+'</span></div>'
    +'<div class="pillar"><span class="ic">\u25c6</span><div><div class="pl">Pillar article</div><div class="pt">'+c.pillar+'</div></div></div>'
    +'<div class="supports">'+c.arts.map(s=>'<div class="support"><span class="st '+(s[1]?'done':'todo')+'">'+(s[1]?'\u2713':'+')+'</span> '+s[0]+'</div>').join('')+'</div>'
    +'<div class="row" style="margin-bottom:12px"><span class="tiny muted">Cluster strength</span><div class="grow"></div><span class="tiny" style="color:var(--gold-deep);font-weight:600">'+c.st+'%</span></div>'
    +'<div class="meter" style="margin-bottom:16px;background-size:'+c.st+'% 100%"></div>'
    +'<div class="cluster-stats">'
    +'<div class="cstat"><span class="k">Articles</span><span class="v">'+c.pub+'</span></div>'
    +'<div class="cstat"><span class="k">Links missing</span><span class="v" style="color:var(--warn)">'+c.links+'</span></div>'
    +'<div class="cstat"><span class="k">Revenue</span><span class="v">'+c.rev+'</span></div>'
    +'<div class="cstat"><span class="k">Authority</span><span class="v">'+c.auth+'</span></div></div>'
    +'<div class="cluster-hint tiny muted" style="margin-top:10px;padding-top:10px;border-top:1px solid var(--line-soft)">Click to open full detail \u2192</div></div>').join('');
  return '<div class="page-h"><div class="eyebrow"><span class="ix">\u25c6</span> Topic Clusters \u00b7 4 growing</div><h1>Build authority islands.</h1><p>Not random articles \u2014 pillars surrounded by supporting pieces. Click any cluster to enter the full control view.</p></div>'
    +'<div class="clusters">'+cards+'</div>';
};

Object.entries(CLUSTER_D).forEach(([name,c])=>{
  const key='cluster_'+name.replace(/\s/g,'_');
  V[key]=()=>{
    const tabs=['Overview','Map','Articles','Links','Gaps','Roadmap','Settings'];
    const health='<div class="clu-health">'
      +[['Cluster Strength',c.st],['Semantic Coverage',c.sem],['Search Intent Coverage',c.intent],['Internal Link Health',c.lnk],['Commercial Coverage',c.com],['Freshness',c.fresh],['Authority Fit',c.aut]]
        .map(h=>'<div class="ch-row"><span class="ch-k">'+h[0]+'</span><div class="ch-bar">'+m(h[1])+'</div><span class="ch-v">'+h[1]+'%</span></div>').join('')
      +'</div>';
    const suggs='<div class="clu-suggestions"><div class="cs-h">\u2726 AGNUS Suggestions</div>'
      +c.sug.map(s=>'<div class="clu-sug"><div class="clu-sug-t">'+s[0]+': <b>'+s[1]+'</b></div>'
        +'<div class="clu-sug-acts"><button class="b b-dark b-sm" onclick="openCreate(&#39;&#39;+s[1].replace(/[&#39;\u2018\u2019]/g,&#39;&#39;)+&#39;&#39;)">Create</button><button class="b b-line b-sm">Add to roadmap</button><button class="b b-ghost b-sm">Ignore</button></div></div>').join('')
      +'</div>';
    return '<div class="page-h"><div class="row" style="align-items:flex-start"><div>'
      +'<div class="eyebrow"><span class="ix">\u25c6</span> <a onclick="GO(&#39;clusters&#39;)" style="cursor:pointer">Topic Clusters</a> \u203a</div>'
      +'<h1>'+name+'</h1></div><div class="grow"></div><button class="b b-line" onclick="GO(&#39;clusters&#39;)">\u2190 All clusters</button></div></div>'
      +'<div class="clu-layout"><div class="clu-main">'
      +'<div class="kdb-tabs" id="cluTabs">'+tabs.map((t,i)=>'<button class="kdb-tab '+(i===0?'on':'')+'" onclick="clusterTab(&#39;&#39;+t+&#39;&#39;,this,&#39;&#39;+name+&#39;&#39;)">'+t+'</button>').join('')+'</div>'
      +'<div id="cluBody"></div></div>'
      +'<div class="clu-side">'+health+suggs+'</div></div>';
  };
  I[key]=()=>{
    const btn=document.querySelector('.kdb-tab');
    if(btn) window.clusterTab('Overview',btn,name);
  };
});

window.clusterTab=function(tab,el,name){
  if(el)[...el.parentElement.children].forEach(b=>b.classList.toggle('on',b===el));
  const body=document.getElementById('cluBody'); if(!body)return;
  const c=CLUSTER_D[name]||CLUSTER_D['AI Agents'];
  const tabContent={
    Overview:'<div class="pillar" style="margin-bottom:16px"><span class="ic">\u25c6</span><div><div class="pl">Pillar article</div><div class="pt">'+c.pillar+'</div></div></div>'
      +'<div class="supports">'+c.arts.map(s=>'<div class="support"><span class="st '+(s[1]?'done':'todo')+'">'+(s[1]?'\u2713':'+')+'</span> '+s[0]+'</div>').join('')+'</div>',
    Map:'<div class="clu-map">'
      +'<div class="cm-pillar">\u25c6 '+c.pillar+'</div>'
      +'<div class="cm-row">'+c.arts.slice(0,3).map(s=>'<div class="cm-node '+(s[1]?'pub':'miss')+'">'+s[0]+'</div>').join('')+'</div>'
      +'<div class="cm-row">'+['Reviews','Comparisons','Academy','Marketplace'].map(t=>'<div class="cm-node prod">'+t+'</div>').join('')+'</div>'
      +'<div class="cm-legend">'+[['pub','\u25cf Published'],['miss','\u25cb Missing'],['prod','\u25a1 Product'],['draft','\u25cc Draft']].map(l=>'<span class="cml"><span class="cml-dot '+l[0]+'"></span>'+l[1]+'</span>').join('')+'</div>'
      +'<div class="cm-controls"><div style="font-family:var(--font-mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-mute);margin-bottom:8px">Relationship controls</div>'
      +['Connect nodes','Disconnect','Merge clusters','Split cluster','Create subcluster','Promote to pillar','Demote pillar','Add missing article','Move article'].map(a=>'<button class="b b-line b-sm" style="margin:0 6px 6px 0">'+a+'</button>').join('')
      +'</div></div>',
    Articles:'<div class="supports">'+c.arts.map(s=>'<div class="support" style="justify-content:space-between"><div><span class="st '+(s[1]?'done':'todo')+'">'+(s[1]?'\u2713':'+')+'</span> '+s[0]+'</div><button class="b b-line b-sm">'+(s[1]?'Open':'Create')+'</button></div>').join('')+'</div>',
    Links:'<div class="gap-alert"><span class="ic">\u2691</span><div>'+c.links+' internal links missing across this cluster. Run the Internal Linking engine to fix them.</div></div><button class="b b-dark" onclick="GO(&#39;linking&#39;)" style="margin-top:12px">Open Internal Linking \u2192</button>',
    Gaps:'<div class="rs-ev-list">'+c.sug.map(s=>'<div class="rs-ev-i" style="color:var(--warn)">! '+s[0]+': '+s[1]+'</div>').join('')+'</div>',
    Roadmap:'<div class="gap-alert"><span class="ic">\u25c6</span><div>Publishing 3 supporting articles here would advance this cluster from <b>'+c.st+'% \u2192 ~'+(c.st+16)+'%</b> authority.</div></div><button class="b b-dark" onclick="GO(&#39;pipeline&#39;)" style="margin-top:12px">Open Article Pipeline \u2192</button>',
    Settings:'<div class="field"><label>Cluster name</label><input type="text" value="'+name+'" style="border:1px solid var(--line);border-radius:9px;padding:10px 13px;font-family:var(--font-sans);font-size:13.5px;outline:none;background:var(--paper);width:100%;box-sizing:border-box"></div>'
      +'<div class="field"><label>Status</label><div class="field-row">'+['Early','Growing','Strong'].map((s,i)=>'<button class="opt '+(s===c.status?'on':'')+'" onclick="pick(this)">'+s+'</button>').join('')+'</div></div>'
  };
  body.innerHTML=tabContent[tab]||tabContent.Overview;
};

/* ═══════════════════════════════ ARTICLE PIPELINE v2 ═══════════════════════════════ */
const PCOLS=[
  {t:'Opportunity',dot:'#B8B4AB'},{t:'Idea',dot:'#B8B4AB'},{t:'Researching',dot:'#3E6AE1'},
  {t:'Strategy',dot:'#9B8EC4'},{t:'Drafting',dot:'#C67A00'},{t:'AI Review',dot:'#9A6A52'},
  {t:'Human Review',dot:'#8F6E32'},{t:'SEO / GEO',dot:'#5F8FA8'},{t:'Ready',dot:'#2E8B57'},
  {t:'Scheduled',dot:'#2E8B57'},{t:'Published',dot:'#1A5C36'},{t:'Needs Refresh',dot:'#B83C3C'},{t:'Blocked',dot:'#B83C3C'}
];
const PARTS={
  'Opportunity':[{id:0,ti:'AI for Accountants 2026',kw:'ai for accountants',tp:'Guide',cl:'Business',ow:'JD',pr:'Medium',op:'8.1',seo:'\u2014',rs:'0 sources',rd:8,tr:'+180/mo',rv:'\u20ac90/mo',nx:'Start Research',st:'normal'}],
  'Idea':[{id:1,ti:'Best AI Note-Takers',kw:'ai note taker',tp:'Comparison',cl:'Tools',ow:'SL',pr:'Low',op:'7.4',seo:'\u2014',rs:'0 sources',rd:12,tr:'+120/mo',rv:'\u20ac60/mo',nx:'Start Research',st:'normal'}],
  'Researching':[{id:2,ti:'Gemini 3 vs GPT-5',kw:'gemini 3 vs gpt-5',tp:'Comparison',cl:'AI Models',ow:'JD',pr:'High',op:'9.1',seo:'\u2014',rs:'6 sources',rd:22,tr:'+820/mo',rv:'\u20ac210/mo',nx:'Approve Research Brief',st:'ai-working'},{id:3,ti:'AI Receptionists Compared',kw:'ai receptionist',tp:'Comparison',cl:'Agents',ow:'MR',pr:'Medium',op:'8.2',seo:'\u2014',rs:'4 sources',rd:18,tr:'+340/mo',rv:'\u20ac120/mo',nx:'Collect More Sources',st:'normal'}],
  'Drafting':[{id:4,ti:'Best AI Tools for Restaurants',kw:'best ai tools restaurants',tp:'Buying Guide',cl:'Restaurants',ow:'SL',pr:'High',op:'9.2',seo:'74',rs:'8 sources',rd:62,tr:'+250/mo',rv:'\u20ac120/mo',nx:'Finish Draft',st:'normal'},{id:5,ti:'How to Automate Support',kw:'automate customer support',tp:'Tutorial',cl:'Agents',ow:'JD',pr:'High',op:'8.1',seo:'68',rs:'7 sources',rd:54,tr:'+190/mo',rv:'\u20ac80/mo',nx:'Finish Draft',st:'normal'}],
  'Human Review':[{id:6,ti:'Claude vs ChatGPT (refresh)',kw:'claude vs chatgpt',tp:'Comparison',cl:'AI Models',ow:'JD',pr:'High',op:'8.4',seo:'88',rs:'9 sources',rd:88,tr:'+620/mo',rv:'\u20ac160/mo',nx:'Review Article',st:'ready'},{id:7,ti:'AI for Dental Clinics',kw:'ai dental clinics',tp:'Guide',cl:'Healthcare',ow:'MR',pr:'Medium',op:'8.9',seo:'82',rs:'7 sources',rd:80,tr:'+180/mo',rv:'\u20ac140/mo',nx:'Review Article',st:'needs-review'}],
  'Ready':[{id:8,ti:'OpenAI Agent Framework',kw:'openai agent framework',tp:'News',cl:'AI Models',ow:'JD',pr:'High',op:'8.6',seo:'91',rs:'8 sources',rd:100,tr:'+420/mo',rv:'\u20ac100/mo',nx:'Schedule / Publish',st:'ready'}],
  'Needs Refresh':[{id:9,ti:'ChatGPT Review',kw:'chatgpt review',tp:'Review',cl:'AI Models',ow:'MR',pr:'High',op:'8.4',seo:'72',rs:'8 sources',rd:44,tr:'+600/mo',rv:'\u20ac160/mo',nx:'Refresh Research',st:'overdue'}],
  'Blocked':[{id:10,ti:'GPT-5 vs Claude 5',kw:'gpt-5 vs claude 5',tp:'Comparison',cl:'AI Models',ow:'JD',pr:'High',op:'9.4',seo:'\u2014',rs:'3 sources',rd:14,tr:'+900/mo',rv:'\u20ac220/mo',nx:'Await GPT-5 release',st:'blocked'}]
};
const SSTATE={'normal':'','high-priority':'border-color:var(--gold);','blocked':'border-color:var(--error);background:#FFF8F8;','needs-review':'border-color:var(--warn);','ready':'border-color:var(--success);','overdue':'border-color:var(--error);','ai-working':'border-color:var(--sapphire);'};
const SBADGE={'blocked':pill('red','\u2691 Blocked'),'ai-working':pill('blue','\u27f3 AI Working'),'ready':pill('green','\u2713 Ready'),'overdue':pill('red','\u26a0 Overdue'),'needs-review':pill('warn','\u21bb Needs Review')};

function pCard(a){
  return '<div class="kcard kcard2" style="'+(SSTATE[a.st]||'')+'">'
    +'<h4 onclick="openArtDrawer(&#39;+a.id+&#39;)" style="cursor:pointer">'+a.ti+'</h4>'
    +'<div class="kkw">\u25b7 '+a.kw+'</div>'
    +'<div class="kcard-meta">'+pill('ghost',a.tp)+' '+pill('ghost',a.cl)+' '+(SBADGE[a.st]||'')+'</div>'
    +'<div class="kcard2-stats">'
    +'<div class="kc2s"><span class="kc2l">Opp</span><b>'+a.op+'</b></div>'
    +'<div class="kc2s"><span class="kc2l">SEO</span><b>'+a.seo+'</b></div>'
    +'<div class="kc2s"><span class="kc2l">Ready</span><b>'+a.rd+'%</b></div>'
    +'<div class="kc2s"><span class="kc2l">Rev</span><b>'+a.rv+'</b></div></div>'
    +'<div class="kcard-foot"><span class="kcard2-owner"><span class="av">'+a.ow+'</span> <span class="seo">'+a.rs+'</span></span>'
    +'<span style="font-family:var(--font-mono);font-size:10px;color:var(--gold-deep)">\u25b7 '+a.nx+'</span></div>'
    +'<div class="kcard2-acts">'
    +'<button class="b b-dark b-sm" onclick="openArtDrawer(&#39;+a.id+&#39;)">Open</button>'
    +'<button class="b b-line b-sm" onclick="nextStep(&#39;+a.id+&#39;)">Next Step</button>'
    +'<div class="kc2-more" style="position:relative">'
    +'<button class="b b-ghost b-sm" onclick="toggleMoreMenu(this)">\u00b7\u00b7\u00b7</button>'
    +'<div class="more-menu">'
    +['Edit metadata','Open in Story Builder','Open Research','Open AI Writer','Open Review','Open SEO / GEO','Open Cluster','Open Knowledge Graph','Duplicate','Refresh research','Regenerate outline','Regenerate draft','Recalculate scores','Move to blocked','Archive','Delete']
      .map(mm=>'<button class="mm-i" onclick="moreAction(&#39;&#39;+mm+&#39;&#39;,&#39;+a.id+&#39;)">'+mm+'</button>').join('')
    +'</div></div></div></div>';
}

const ALL_ARTS=Object.values(PARTS).flat();

V.pipeline=()=>{
  const health='<div class="pipe-health">'
    +'<div class="ph-stats">'
    +[['12 in progress',''],['3 blocked','red'],['4 ready','green'],['\u20ac740 est. revenue',''],['2.6 days avg production',''],['5 AI tasks running','blue']]
      .map(s=>'<div class="phs'+(s[1]?' phs-'+s[1]:'')+'">'+(s[0])+'</div>').join('')
    +'</div></div>';

  const filters='<div class="pipe-filters kw-filters" style="margin-bottom:14px">'
    +['All','Mine','High priority','Blocked','Needs review','Ready','High revenue','By cluster','By owner','By type']
      .map((f,i)=>'<button class="kw-filter '+(i===0?'on':'')+'" onclick="pipeFilter(this)">'+f+'</button>').join('')
    +'</div>';

  const aiQ='<div class="ai-queue">'
    +'<div class="aq-h">\u27f3 AI Queue <span class="tiny muted" style="font-weight:400;margin-left:8px">click to open a task</span></div>'
    +'<div class="aq-stats">'
    +[['Researching','3'],['Drafting','2'],['Fact-checking','1'],['SEO optimizing','4']]
      .map(s=>'<div class="aqs" onclick="GO(&#39;pipeline&#39;)"><span class="aqs-l">'+s[0]+'</span><b>'+s[1]+'</b></div>').join('')
    +'</div></div>';

  const showCols=['Opportunity','Idea','Researching','Drafting','Human Review','Ready','Needs Refresh','Blocked'];
  const kanban='<div class="kanban">'+showCols.map(col=>{
    const dot=(PCOLS.find(c=>c.t===col)||{}).dot||'#B8B4AB';
    const cards=(PARTS[col]||[]).map(a=>pCard(a)).join('');
    return '<div class="kcol"><div class="kcol-h"><span class="dot" style="background:'+dot+'"></span><span class="t">'+col+'</span><span class="c">'+((PARTS[col]||[]).length)+'</span></div><div class="kcol-body">'+cards+'</div></div>';
  }).join('')+'</div>';

  return '<div class="page-h"><div class="row" style="align-items:flex-start"><div>'
    +'<div class="eyebrow"><span class="ix">\u25c6</span> Article Pipeline \u00b7 12 in progress</div>'
    +'<h1>Production control board.</h1>'
    +'<p>Where every article has a state, owner, next action, business value, and audit history.</p>'
    +'</div><div class="grow"></div><button class="b b-dark" onclick="openCreate()">+ New article</button></div></div>'
    +health+filters+aiQ+kanban
    +'<div class="sd-drawer" id="artDrawer"><div class="sd-body"></div></div>';
};

window.openArtDrawer=function(id){
  const a=ALL_ARTS.find(x=>x.id===id)||ALL_ARTS[0];
  const d=document.getElementById('artDrawer'); if(!d)return;
  const ATabs=['Overview','Checklist','Research','Sources','Outline','Draft','SEO / GEO','Relations','History'];
  const nxMap={Opportunity:'Start Research',Idea:'Start Research',Researching:'Approve Research Brief',Strategy:'Create Outline',Drafting:'Open AI Writer','AI Review':'Check Facts','Human Review':'Review Article','SEO / GEO':'Optimize Article',Ready:'Schedule / Publish',Blocked:'Resolve Block'};
  d.querySelector('.sd-body').innerHTML='<div class="sd-h"><div><h3>'+a.ti+'</h3>'
    +'<div class="sd-ident">'+pill('ghost',a.tp)+' '+pill(a.pr==='High'?'red':'gold',a.pr+' Priority')+' '+pill('green','Ready '+a.rd+'%')+'</div></div>'
    +'<button class="x" onclick="document.getElementById(&#39;artDrawer&#39;).classList.remove(&#39;open&#39;)">\u00d7</button></div>'
    +'<div class="art-meta-row">'
    +[['Opportunity',a.op],['Expected Traffic',a.tr],['Expected Revenue',a.rv],['Research Trust','94%'],['Cluster',a.cl],['Links Missing','6']]
      .map(mm=>'<div class="am"><div class="am-l">'+mm[0]+'</div><div class="am-v">'+mm[1]+'</div></div>').join('')
    +'</div>'
    +'<div class="kdb-tabs" id="artTabs">'+ATabs.map((t,i)=>'<button class="kdb-tab '+(i===0?'on':'')+'" onclick="artTab(&#39;&#39;+t+&#39;&#39;,this,&#39;+id+&#39;)">'+t+'</button>').join('')+'</div>'
    +'<div id="artBody"></div>';
  d.classList.add('open');
  d.querySelector('.sd-body').scrollTop=0;
  setTimeout(()=>artTab('Overview',d.querySelector('.kdb-tab'),id),50);
};

window.artTab=function(tab,el,id){
  if(el)[...el.parentElement.children].forEach(b=>b.classList.toggle('on',b===el));
  const a=ALL_ARTS.find(x=>x.id===id)||ALL_ARTS[0];
  const body=document.getElementById('artBody'); if(!body)return;
  const nxMap={Opportunity:'Start Research',Idea:'Start Research',Researching:'Approve Research Brief',Drafting:'Open AI Writer','Human Review':'Review Article',Ready:'Schedule / Publish',Blocked:'Resolve Block'};
  const ns=nxMap[a.st]||a.nx||'Next Step';
  const tabs={
    Overview:'<div class="field"><label>Owner</label><div class="field-row">'
      +['Jean-Daniel','Editor','Researcher','AI Writer','SEO Reviewer','Human Reviewer'].map((o,i)=>'<button class="opt '+(i===0&&a.ow==='JD'?'on':'')+'" onclick="pick(this)">'+o+'</button>').join('')
      +'</div></div>'
      +'<div class="gap-alert"><span class="ic">\u25b7</span><div><b>Next step:</b> '+ns+'</div></div>'
      +'<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px">'
      +'<button class="b b-gold" onclick="nextStep(&#39;+id+&#39;)">'+ns+' \u2192</button>'
      +'<button class="b b-line" onclick="openMoveMenu(&#39;+id+&#39;)">Move column</button>'
      +'<button class="b b-ghost" onclick="blockArticle(&#39;+id+&#39;)">Move to Blocked</button></div>',
    Checklist:'<div class="checklist">'
      +[['Research approved',1],['Outline approved',1],['Draft generated',1],['Sources cited',1],['Internal links added',0],['Affiliate disclosure added',0],['SEO title completed',1],['Meta description completed',1],['Schema added',0],['Human review passed',0],['Scheduled',0],['Published',0]].map(c=>cb(c[1],c[0])).join('')
      +'</div>',
    Research:'<div class="rs-cards" style="grid-template-columns:repeat(3,1fr)">'
      +[['Sources',a.rs],['Trust','94%'],['Conflicts','1']].map(s=>'<div class="rs-card"><div class="rs-n">'+s[1]+'</div><div class="rs-l">'+s[0]+'</div></div>').join('')
      +'</div><div class="gap-alert" style="margin-top:14px"><span class="ic">\u26a0</span><div>1 contradiction detected. Review before publishing.</div></div>',
    Sources:'<div class="card" style="padding:6px 18px">'
      +['OpenAI Documentation','Reuters Tech','G2 Reviews','Google Trends','Search Console','PartnerStack','Community (Reddit)'].map((s,i)=>'<div class="rsrc"><div class="rt"><div class="rn">'+s+'</div></div><span class="trust '+(i<2?'official':i<5?'high':'community')+'">'+(i<2?'official':i<5?'high':'community')+'</span></div>').join('')
      +'</div>',
    Outline:'<div class="supports">'
      +['Introduction','Why restaurants need AI','Best booking tools','Voice receptionists','Review automation','Marketing with AI','Comparison table','FAQs','What to do next'].map((o,i)=>'<div class="support"><span class="st '+(i<5?'done':'todo')+'">'+(i<5?'\u2713':'+')+'</span> '+o+'</div>').join('')
      +'</div>',
    Draft:'<div class="gap-alert"><span class="ic">\u270e</span><div>Draft is <b>'+a.rd+'%</b> complete. <button class="b b-dark b-sm" onclick="GO(&#39;writer&#39;)" style="margin-top:8px">Open in AI Writer \u2192</button></div></div>',
    'SEO / GEO':'<div class="checklist">'
      +[['Primary keyword in title',1],['Meta description written',1],['Schema markup ready',0],['FAQ section present',0],['GEO readiness',1],['AI Overview optimized',1]].map(c=>cb(c[1],c[0])).join('')
      +'</div>',
    Relations:'<div class="rs-ev-list">'
      +['\u2713 Review: ChatGPT Review (linked)','\u2713 Comparison: Claude vs ChatGPT (linked)','! Academy: Master GPT-5 (missing)','! Business Guide: SMB AI Guide (missing)','! Marketplace: OpenAI Collection (missing)'].map(r=>'<div class="rs-ev-i">'+r+'</div>').join('')
      +'</div>',
    History:'<div class="tl">'
      +[['Today 09:12','Created via Opportunity Builder'],['Today 10:34','Research started \u2014 8 sources collected'],['Today 11:20','Outline generated'],['Today 14:05','Draft 62% complete']].map(h=>'<div class="tl-row" style="margin-bottom:10px"><div class="tl-rail"><div class="tl-dot" style="font-size:10px">\u25cf</div></div><div class="tl-card"><div class="tl-top"><span class="tl-time mono">'+h[0]+'</span></div><p>'+h[1]+'</p></div></div>').join('')
      +'</div>'
  };
  body.innerHTML=(tabs[tab]||tabs.Overview);
};

window.nextStep=function(id){
  const a=ALL_ARTS.find(x=>x.id===id)||ALL_ARTS[0];
  const wrap=document.getElementById('execDrawerWrap')||(()=>{const d=document.createElement('div');d.id='execDrawerWrap';document.body.appendChild(d);return d;})();
  wrap.innerHTML='<div class="modal-bg open" onclick="if(event.target===this)this.remove()"><div class="modal">'
    +'<div class="modal-h"><h3>'+a.nx+'</h3><button class="x" onclick="this.closest(&#39;.modal-bg&#39;).remove()">\u00d7</button></div>'
    +'<div class="modal-b"><div class="exp-h">'+a.ti+'</div><p style="color:var(--ink-soft);font-size:13.5px">This will '+a.nx.toLowerCase()+' for this article.</p></div>'
    +'<div class="modal-f"><button class="b b-ghost" onclick="this.closest(&#39;.modal-bg&#39;).remove()">Cancel</button><button class="b b-gold" onclick="this.closest(&#39;.modal-bg&#39;).remove();GO(&#39;writer&#39;)">'+a.nx+' \u2192</button></div></div></div>';
};

window.openMoveMenu=function(id){
  const wrap=document.getElementById('execDrawerWrap')||(()=>{const d=document.createElement('div');d.id='execDrawerWrap';document.body.appendChild(d);return d;})();
  wrap.innerHTML='<div class="modal-bg open" onclick="if(event.target===this)this.remove()"><div class="modal">'
    +'<div class="modal-h"><h3>Move article</h3><button class="x" onclick="this.closest(&#39;.modal-bg&#39;).remove()">\u00d7</button></div>'
    +'<div class="modal-b"><div class="field-row" style="flex-wrap:wrap">'+PCOLS.map(c=>'<button class="opt" onclick="this.closest(&#39;.modal-bg&#39;).remove()">'+c.t+'</button>').join('')+'</div>'
    +'<div class="gap-alert" style="margin-top:12px" id="moveReason" style="display:none"><span class="ic">\u26a0</span><div>Moving backward requires a reason:<div class="field-row" style="margin-top:8px;flex-wrap:wrap">'+['Research incomplete','Draft poor quality','Source outdated','SEO issue','Other'].map(r=>'<button class="opt" onclick="pick(this)">'+r+'</button>').join('')+'</div></div></div>'
    +'</div><div class="modal-f"><button class="b b-ghost" onclick="this.closest(&#39;.modal-bg&#39;).remove()">Cancel</button><button class="b b-dark" onclick="this.closest(&#39;.modal-bg&#39;).remove()">Move</button></div></div></div>';
};

window.blockArticle=function(id){
  const wrap=document.getElementById('execDrawerWrap')||(()=>{const d=document.createElement('div');d.id='execDrawerWrap';document.body.appendChild(d);return d;})();
  wrap.innerHTML='<div class="modal-bg open" onclick="if(event.target===this)this.remove()"><div class="modal">'
    +'<div class="modal-h"><h3>Move to Blocked</h3><button class="x" onclick="this.closest(&#39;.modal-bg&#39;).remove()">\u00d7</button></div>'
    +'<div class="modal-b"><div class="field"><label>Reason (required)</label><div class="field-row" style="flex-wrap:wrap">'+['Missing source','Outdated pricing','No keyword data','Legal risk','Medical claim','Needs human decision','Other'].map(r=>'<button class="opt" onclick="pick(this)">'+r+'</button>').join('')+'</div></div></div>'
    +'<div class="modal-f"><button class="b b-ghost" onclick="this.closest(&#39;.modal-bg&#39;).remove()">Cancel</button><button class="b b-dark" onclick="this.closest(&#39;.modal-bg&#39;).remove()">Move to Blocked</button></div></div></div>';
};

window.moreAction=function(action,id){
  toggleMoreMenu(null);
  const routeMap={'Open AI Writer':'writer','Open Research':'research','Open in Story Builder':'story','Open SEO / GEO':'geo','Open Cluster':'clusters','Open Knowledge Graph':'know_graph'};
  if(routeMap[action]){GO(routeMap[action]);return;}
  if(action==='Move to blocked'){blockArticle(id);return;}
  if(action==='Archive'){
    const wrap=document.getElementById('execDrawerWrap')||(()=>{const d=document.createElement('div');d.id='execDrawerWrap';document.body.appendChild(d);return d;})();
    wrap.innerHTML='<div class="modal-bg open" onclick="if(event.target===this)this.remove()"><div class="modal"><div class="modal-h"><h3>Archive article</h3><button class="x" onclick="this.closest(&#39;.modal-bg&#39;).remove()">\u00d7</button></div><div class="modal-b"><p>It will leave the active pipeline but remain searchable in the Content Archive.</p></div><div class="modal-f"><button class="b b-ghost" onclick="this.closest(&#39;.modal-bg&#39;).remove()">Cancel</button><button class="b b-dark" onclick="this.closest(&#39;.modal-bg&#39;).remove()">Archive</button></div></div></div>';
    return;
  }
  if(action==='Regenerate outline'||action==='Regenerate draft'){
    const wrap=document.getElementById('execDrawerWrap')||(()=>{const d=document.createElement('div');d.id='execDrawerWrap';document.body.appendChild(d);return d;})();
    wrap.innerHTML='<div class="modal-bg open" onclick="if(event.target===this)this.remove()"><div class="modal"><div class="modal-h"><h3>'+action+'</h3><button class="x" onclick="this.closest(&#39;.modal-bg&#39;).remove()">\u00d7</button></div><div class="modal-b"><p>AGNUS will generate a new version and show it to you before applying any changes.</p></div><div class="modal-f"><button class="b b-ghost" onclick="this.closest(&#39;.modal-bg&#39;).remove()">Cancel</button><button class="b b-line" onclick="this.closest(&#39;.modal-bg&#39;).remove()">Keep old</button><button class="b b-line" onclick="this.closest(&#39;.modal-bg&#39;).remove()">Create new version</button><button class="b b-gold" onclick="this.closest(&#39;.modal-bg&#39;).remove()">Use new</button></div></div></div>';
    return;
  }
  if(action==='Recalculate scores'){
    const wrap=document.getElementById('execDrawerWrap')||(()=>{const d=document.createElement('div');d.id='execDrawerWrap';document.body.appendChild(d);return d;})();
    const a=ALL_ARTS.find(x=>x.id===id)||ALL_ARTS[0];
    wrap.innerHTML='<div class="modal-bg open" onclick="if(event.target===this)this.remove()"><div class="modal"><div class="modal-h"><h3>Scores recalculated</h3><button class="x" onclick="this.closest(&#39;.modal-bg&#39;).remove()">\u00d7</button></div><div class="modal-b"><div class="rs-cards" style="grid-template-columns:repeat(3,1fr)">'+[['Opportunity',a.op],['SEO',a.seo],['GEO','88'],['Readiness',a.rd+'%'],['Affiliate','High'],['Link health','72%'],['Cluster impact','\u2191 +5%']].map(s=>'<div class="rs-card"><div class="rs-n">'+s[1]+'</div><div class="rs-l">'+s[0]+'</div></div>').join('')+'</div></div><div class="modal-f"><button class="b b-ghost" onclick="this.closest(&#39;.modal-bg&#39;).remove()">Close</button></div></div></div>';
    return;
  }
  if(action==='Delete'){
    const wrap=document.getElementById('execDrawerWrap')||(()=>{const d=document.createElement('div');d.id='execDrawerWrap';document.body.appendChild(d);return d;})();
    wrap.innerHTML='<div class="modal-bg open" onclick="if(event.target===this)this.remove()"><div class="modal"><div class="modal-h"><h3>Delete article</h3><button class="x" onclick="this.closest(&#39;.modal-bg&#39;).remove()">\u00d7</button></div><div class="modal-b"><div class="gap-alert"><span class="ic">\u26a0</span><div>This action requires admin permission and cannot be undone.</div></div></div><div class="modal-f"><button class="b b-ghost" onclick="this.closest(&#39;.modal-bg&#39;).remove()">Cancel</button><button class="b b-dark" style="background:var(--error);border-color:var(--error)" onclick="this.closest(&#39;.modal-bg&#39;).remove()">Delete permanently</button></div></div></div>';
  }
};

window.toggleMoreMenu=function(btn){
  document.querySelectorAll('.more-menu.open').forEach(mm=>{if(!btn||mm.previousElementSibling!==btn)mm.classList.remove('open');});
  if(btn){const mm=btn.nextElementSibling;if(mm)mm.classList.toggle('open');}
};
window.pipeFilter=function(el){document.querySelectorAll('.pipe-filters .kw-filter').forEach(b=>b.classList.toggle('on',b===el));};
document.addEventListener('click',e=>{if(!e.target.closest('.kc2-more'))document.querySelectorAll('.more-menu.open').forEach(mm=>mm.classList.remove('open'));});

// wire cluster detail titles to TITLES map
['AI_Agents','AI_Lawyers','Restaurants','RAG'].forEach(k=>{
  if(!window.TITLES) window.TITLES={};
  window.TITLES['cluster_'+k]=['Topic Clusters','Editorial'];
});

})();
/* === dash-sections2.js === */
/* AGNUS Dashboard — Story Builder v2, AI Writer v2, Human Review, Publishing Calendar v2, Content Archive v2 */
(function(){
const V = window.VIEWS = window.VIEWS || {};
const I = window.VIEW_INIT = window.VIEW_INIT || {};
const m=(v,c)=>`<div class="meter ${c||''}" style="background-size:${v}% 100%"></div>`;
const pill=(c,t)=>`<span class="pill ${c}">${t}</span>`;
const cb=(v,t)=>`<div class="check"><span class="cb ${v?'y':'n'}">${v?'\u2713':'!'}</span> ${t}</div>`;

/* ═══════════════════════════════ STORY BUILDER v2 ═══════════════════════════════ */
const SB_STEPS = [
  'Opportunity','Topic','Keyword Strategy','Audience & Intent','Research',
  'Entities','Competitors','Questions','Angle','Monetization',
  'SEO / GEO','Internal Links','Outline','Approval','Send to AI Writer'
];
let sbStep = 0;
const SB_SIDEBAR = [
  ['Opportunity score','9.4'],['Primary keyword','best AI tools for restaurants'],
  ['Cluster','Restaurants'],['Audience','Restaurant owners · SMB'],
  ['Search intent','Commercial Investigation'],['Research trust','94%'],
  ['Entities detected','12'],['Competitor gap','3 pages missing buying guide'],
  ['Expected traffic','+3,400/mo'],['Expected revenue','\u20ac220/mo'],
  ['Monetization path','Affiliate + Marketplace'],['Readiness','62%']
];
const SB_WORKSPACES = {
  0: () => `
    <div class="sb-ws-h">What is this article built on?</div>
    <div class="chief-msg"><div class="chief-intro"><div class="chief-orb">\u2726</div><div class="chief-hi">This keyword is strongly commercial with a clear cluster gap. I recommend a Buying Guide. Expected revenue: \u20ac220/month. Confidence: 93%.</div></div></div>
    <div class="sb-opp-grid">
      ${[['AGNUS Brain recommendation','9.4 score · Restaurants cluster gap','brain','on'],['Keyword Discovery opportunity','Volume 12,400 · rising 42%','keywords',''],['Intelligence Feed story','OpenAI restaurant AI covered','feed',''],['Topic Cluster gap','Restaurants 31% · needs pillar','clusters',''],['Manual idea','Enter your own topic','',''],['Competitor page','Analyze competitor URL','','']].map(o=>`<div class="sb-opp-card ${o[3]}" onclick="this.closest('.sb-opp-grid').querySelectorAll('.sb-opp-card').forEach(x=>x.classList.remove('on'));this.classList.add('on')"><div class="sob-t">${o[0]}</div><div class="sob-d">${o[1]}</div></div>`).join('')}
    </div>
    <div class="sb-acts">
      <button class="b b-gold b-sm">Use opportunity \u2192</button>
      <button class="b b-line b-sm">Search opportunities</button>
      <button class="b b-ghost b-sm">Add manual idea</button>
    </div>`,
  1: () => `
    <div class="sb-ws-h">Confirm the topic.</div>
    <div class="sb-topic-card">
      <div class="stc-title">Best AI Tools for Restaurants</div>
      <div class="stc-rows">
        ${[['Source','Keyword Discovery · Autonomous scan'],['Cluster match','Restaurants \u00b7 82% match'],['Opportunity','8.7 \u2014 high priority'],['Reason','Commercial intent + affiliate value + cluster gap + low competition']].map(r=>`<div class="stc-row"><span class="stc-k">${r[0]}</span><span class="stc-v">${r[1]}</span></div>`).join('')}
      </div>
    </div>
    <div class="sb-acts"><button class="b b-gold b-sm">Confirm topic \u2192</button><button class="b b-line b-sm">Search keywords</button><button class="b b-ghost b-sm">Generate ideas</button><button class="b b-ghost b-sm">Import from Brain</button></div>`,
  2: () => `
    <div class="sb-ws-h">Complete keyword strategy.</div>
    <div class="sb-kw-grid">
      ${[['Primary','best AI tools for restaurants'],['Secondary','AI restaurant booking, AI for hospitality'],['Semantic','restaurant automation software, AI customer service'],['Voice search','"What AI tools help restaurants?"'],['AI search phrases','best AI booking system for restaurant owners 2026'],['Long-tail','AI agents for independent restaurants 2026'],['People Also Ask','"Can AI reduce restaurant no-shows?"'],['Entity keywords','OpenAI, ChatGPT, OpenTable, ElevenLabs']].map(k=>`<div class="sb-kw-row"><span class="sbkw-l">${k[0]}</span><span class="sbkw-v">${k[1]}</span></div>`).join('')}
    </div>
    <div class="sb-acts"><button class="b b-gold b-sm">Accept strategy \u2192</button><button class="b b-line b-sm">Expand keywords</button><button class="b b-ghost b-sm">Open Keyword Discovery</button><button class="b b-ghost b-sm">Refresh data</button></div>`,
  3: () => `
    <div class="sb-ws-h">Who is reading this, and why?</div>
    <div class="sb-audience">
      <div class="field"><label>Audience</label><div class="field-row">${['Restaurant owner','IT Manager','Marketing Agency','Developer','Small Business','Enterprise','Beginner','Advanced'].map((a,i)=>`<button class="opt ${i===0?'on':''}" onclick="pick(this)">${a}</button>`).join('')}</div></div>
      <div class="field"><label>Search intent</label><div class="field-row">${['Commercial','Informational','Transactional','Comparison','Tutorial','Buying guide','Local'].map((a,i)=>`<button class="opt ${i===0?'on':''}" onclick="pick(this)">${a}</button>`).join('')}</div></div>
      <div class="field"><label>Buyer stage</label><div class="field-row">${['Awareness','Consideration','Decision'].map((a,i)=>`<button class="opt ${i===1?'on':''}" onclick="pick(this)">${a}</button>`).join('')}</div></div>
      <div class="field"><label>Knowledge level</label><div class="field-row">${['Beginner','Intermediate','Expert'].map((a,i)=>`<button class="opt ${i===1?'on':''}" onclick="pick(this)">${a}</button>`).join('')}</div></div>
    </div>
    <div class="sb-acts"><button class="b b-gold b-sm">Confirm audience \u2192</button><button class="b b-line b-sm">AI Suggest</button><button class="b b-ghost b-sm">Change persona</button></div>`,
  4: () => `
    <div class="sb-ws-h">Research quality check.</div>
    <div class="rs-cards" style="grid-template-columns:repeat(4,1fr);margin-bottom:16px">
      ${[['Sources collected','8'],['Official','3'],['Trust avg','94%'],['Contradictions','1']].map(s=>`<div class="rs-card"><div class="rs-n">${s[1]}</div><div class="rs-l">${s[0]}</div></div>`).join('')}
    </div>
    <div class="sb-acts"><button class="b b-gold b-sm">Approve research \u2192</button><button class="b b-line b-sm">Collect more</button><button class="b b-ghost b-sm">Open Research Panel</button><button class="b b-ghost b-sm">Verify</button></div>`,
  5: () => `
    <div class="sb-ws-h">Which entities should this article know about?</div>
    <div class="sb-ents">${['OpenAI','ChatGPT','GPT-5','Claude','Google Gemini','Restaurant','CRM','POS','Voice AI','OpenTable','ElevenLabs','Booking AI'].map(e=>`<button class="rs-ent">${e}</button>`).join('')}</div>
    <div class="sb-acts" style="margin-top:14px"><button class="b b-gold b-sm">Confirm entities \u2192</button><button class="b b-line b-sm">Add entity</button><button class="b b-ghost b-sm">Open Entity Manager</button></div>`,
  6: () => `
    <div class="sb-ws-h">What are competitors missing?</div>
    <div class="rs-ev-list" style="margin-bottom:16px">
      ${[['Backlinko','Missing: pricing table, booking comparison, voice AI section'],['HubSpot','Missing: hospitality-specific examples, ROI calculator'],['Zapier','Missing: restaurant use case, affiliate products, FAQ']].map(c=>`<div class="rs-ev-i"><b>${c[0]}</b> \u2014 ${c[1]}</div>`).join('')}
    </div>
    <div class="sb-acts"><button class="b b-gold b-sm">Use gaps in outline \u2192</button><button class="b b-line b-sm">Scan top 10</button><button class="b b-ghost b-sm">Find weaknesses</button></div>`,
  7: () => `
    <div class="sb-ws-h">What questions should this article answer?</div>
    <div class="sb-qlist">${[['People Also Ask','"What AI tools help restaurants?" \u00b7 "Can AI reduce no-shows?" \u00b7 "Best AI booking software?"'],['Reddit questions','"Which AI is cheapest for a small restaurant?"'],['Voice search','"What is the best AI for restaurant reservations?"'],['Search Console','High-impression queries showing intent'],['Customer questions','"How long does setup take?" \u00b7 "Is it worth the cost?"']].map(q=>`<div class="sb-q"><div class="sbq-l">${q[0]}</div><div class="sbq-v">${q[1]}</div></div>`).join('')}</div>
    <div class="sb-acts" style="margin-top:14px"><button class="b b-gold b-sm">Add to FAQ \u2192</button><button class="b b-line b-sm">Add to outline</button><button class="b b-ghost b-sm">Ignore</button></div>`,
  8: () => `
    <div class="sb-ws-h">Choose the right angle.</div>
    <div class="sb-angles">
      ${[['Buying Guide','Best for: commercial intent · Expected +3,400/mo · \u20ac220/mo · Easy','on'],['Comparison','Best for: decision stage · +2,100/mo · \u20ac140/mo · Medium',''],['Tutorial','Best for: problem-aware · +1,200/mo · \u20ac60/mo · Medium',''],['Business Guide','Best for: enterprise · +900/mo · \u20ac180/mo · Hard',''],['Case Study','Best for: authority · +600/mo · \u20ac40/mo · Hard',''],['Checklist','Best for: quick win · +400/mo · \u20ac20/mo · Easy','']].map(a=>`<div class="sb-angle-card ${a[2]}" onclick="this.closest('.sb-angles').querySelectorAll('.sb-angle-card').forEach(x=>x.classList.remove('on'));this.classList.add('on')"><div class="sba-t">${a[0]}</div><div class="sba-d">${a[1]}</div></div>`).join('')}
    </div>
    <div class="sb-acts" style="margin-top:14px"><button class="b b-gold b-sm">Confirm angle \u2192</button></div>`,
  9: () => `
    <div class="sb-ws-h">How will this article make money?</div>
    <div class="sb-mono-grid">
      ${[['Affiliate products','OpenTable AI / ChatGPT Plus / Canva Pro · est. \u20ac140/mo','on'],['Marketplace items','AI for Restaurants collection · est. \u20ac30/mo',''],['Lead form','Consultation CTA · \u20ac50/lead',''],['Newsletter CTA','Daily brief signup',''],['Academy course','AI for Hospitality · \u20ac20/mo',''],['Premium upgrade','Full comparison access','']].map(mm=>`<div class="sb-mono-card ${mm[2]}" onclick="this.closest('.sb-mono-grid').querySelectorAll('.sb-mono-card').forEach(x=>x.classList.remove('on'));this.classList.add('on')"><div class="sbm-t">${mm[0]}</div><div class="sbm-d">${mm[1]}</div></div>`).join('')}
    </div>
    <div class="sb-acts" style="margin-top:14px"><button class="b b-gold b-sm">Select CTA \u2192</button><button class="b b-line b-sm">Add affiliate products</button><button class="b b-ghost b-sm">Connect marketplace</button></div>`,
  10: () => `
    <div class="sb-ws-h">SEO & GEO strategy.</div>
    <div class="sb-seo-grid">
      ${[['SEO title','Best AI Tools for Restaurants in 2026 (Tested)'],['Meta description','Discover the top AI tools for restaurants tested in 2026. Booking AI, voice receptionists, review automation and more.'],['Slug','best-ai-tools-restaurants'],['Schema','Article + FAQ + HowTo'],['Featured snippet target','"What AI tools help restaurants?"'],['AI Overview target','High probability \u2014 Gemini surfaces this topic in 68% of queries'],['GEO answer blocks','3 structured answers for AI search'],['FAQ schema','7 Q&As auto-generated']].map(s=>`<div class="sb-seo-row"><span class="sbseo-k">${s[0]}</span><span class="sbseo-v">${s[1]}</span></div>`).join('')}
    </div>
    <div class="sb-acts"><button class="b b-gold b-sm">Approve SEO \u2192</button><button class="b b-line b-sm">Generate SEO</button><button class="b b-ghost b-sm">Optimize for Google</button><button class="b b-ghost b-sm">Optimize for AI search</button></div>`,
  11: () => `
    <div class="sb-ws-h">Internal link plan.</div>
    <div class="linklist">
      ${[['Restaurants cluster pillar','Intro paragraph','Cluster authority'],['AI Agents Guide','AI section','Ecosystem link'],['ChatGPT Review','Product mentions','Review evidence'],['Claude vs ChatGPT','Comparison section','Comparison intent'],['AI ROI Calculator','Cost section','Conversion / tool'],['Marketplace: AI for Restaurants','CTA section','Marketplace upsell']].map((l,i)=>`<div class="linkrec"><div class="ln">${i+1}</div><div class="lt"><div class="lh">${l[0]}</div><div class="anchor">placement: "${l[1]}"</div><div class="lr">Reason: ${l[2]}</div></div><button class="b b-line b-sm" style="align-self:center">Confirm</button></div>`).join('')}
    </div>
    <div class="sb-acts" style="margin-top:14px"><button class="b b-gold b-sm">Approve links \u2192</button><button class="b b-line b-sm">Auto-link</button><button class="b b-ghost b-sm">Open cluster</button></div>`,
  12: () => `
    <div class="sb-ws-h">Article outline \u2014 each section has metadata.</div>
    <div class="sb-outline">
      ${[['Introduction','Hook the reader · establish authority','best ai tools restaurants · commercial','OpenAI, ChatGPT','Official stats','None','Cluster pillar'],['Why restaurants need AI','Establish problem · build urgency','restaurant automation · pain points','Restaurant, AI, CRM','Industry data','Newsletter CTA','Agent guide'],['Best booking tools','Product recommendations · affiliate','AI restaurant booking · buying intent','OpenTable, Booking AI','G2 reviews','Affiliate','AI Agents'],['Voice receptionists','Product comparison · affiliate','AI receptionist · comparison','ElevenLabs, Voice AI','Official docs','Affiliate','Review page'],['Review automation','Tool recommendation','AI review replies','Review tools','Community','Tool CTA','Tools page'],['Marketing with AI','Practical guide · content','restaurant marketing AI','Claude, ChatGPT','Official docs','Academy','Marketing guide'],['Comparison table','Decision support · conversion','comparison table','All tools','Reviews + official','Marketplace','Compare page'],['FAQs','AI overview optimization','FAQ schema','','PAA data','','Cluster'],['What to do next','CTA · next step','','','','Marketplace CTA','Collection']].map((s,i)=>`<div class="sb-ol-row"><div class="sb-ol-n">${i+1}</div><div class="sb-ol-body"><div class="sb-ol-h">${s[0]}</div><div class="sb-ol-grid"><div class="sb-og"><span class="sog-l">Purpose</span><span>${s[1]}</span></div><div class="sb-og"><span class="sog-l">Keywords</span><span>${s[2]}</span></div><div class="sb-og"><span class="sog-l">Entities</span><span>${s[3]}</span></div><div class="sb-og"><span class="sog-l">Evidence</span><span>${s[4]}</span></div><div class="sb-og"><span class="sog-l">CTA</span><span>${s[5]||'\u2014'}</span></div><div class="sb-og"><span class="sog-l">Internal link</span><span>${s[6]}</span></div></div></div></div>`).join('')}
    </div>
    <div class="sb-acts"><button class="b b-gold b-sm">Approve outline \u2192</button><button class="b b-line b-sm">Regenerate</button><button class="b b-ghost b-sm">Compare versions</button></div>`,
  13: () => `
    <div class="sb-ws-h">Final approval before AI Writer.</div>
    <div class="checklist sb-checklist">
      ${[['Opportunity approved',1],['Keyword strategy approved',1],['Audience approved',1],['Research approved',1],['Entities confirmed',1],['Competitors reviewed',1],['Questions selected',1],['Angle approved',1],['Monetization approved',1],['SEO approved',1],['Internal links approved',1],['Outline approved',1]].map(c=>cb(c[1],c[0])).join('')}
    </div>
    <div class="gap-alert" style="margin-top:16px"><span class="ic">\u2726</span><div><b>All 12 steps approved.</b> AGNUS will not write a single word until the strategy is complete. The AI Writer now has full context and can execute without thinking.</div></div>
    <div class="sb-acts"><button class="b b-gold" style="width:100%;margin-top:12px" onclick="sbGo(14)">Send to AI Writer \u2192</button></div>`,
  14: () => `
    <div class="sb-ws-h">Strategy complete. Sending to AI Writer.</div>
    <div class="council-banner"><div class="tx"></div><div class="glow"></div>
      <div class="seal">\u2726</div>
      <div class="grow"><h3>Ready for the AI Writer</h3><p>All 14 strategic steps are complete. The AI Writer has full context: keyword, audience, angle, research, entities, competitors, outline, SEO and monetization strategy.</p></div>
      <button class="b b-gold" onclick="GO('writer')">Open AI Writer \u2192</button>
    </div>`
};

V.story = () => {
  const steps = SB_STEPS.map((s,i) => `<button class="sb-step ${i===sbStep?'on':i<sbStep?'done':''}" onclick="sbGo(${i})">${i<sbStep?'\u2713':i+1} ${s}</button>`).join('');
  const ws = (SB_WORKSPACES[sbStep]||SB_WORKSPACES[0])();
  const sidebar = `<div class="sb-summary"><div class="sb-sum-h">\u2726 Strategic Summary</div>
    ${SB_SIDEBAR.map(s=>`<div class="sb-sum-row"><span class="sbsr-k">${s[0]}</span><span class="sbsr-v">${s[1]}</span></div>`).join('')}
    <div class="sb-sum-row" style="margin-top:12px;padding-top:12px;border-top:1px solid var(--line)"><span class="sbsr-k">Readiness</span><div style="flex:1">${m(62)}</div><b style="font-family:var(--font-mono);font-size:11px;color:var(--gold-deep)">62%</b></div>
  </div>
  <div class="chief-msg" style="margin-top:12px"><p>\u201cThis keyword is strongly commercial. Recommend Buying Guide. Expected \u20ac220/month. Confidence 93%.\u201d</p><div class="chief-impact">Step ${sbStep+1} of 15</div></div>`;

  return `<div class="page-h"><div class="eyebrow"><span class="ix">\u25c6</span> Story Builder \u00b7 Strategy first, writing second</div>
    <h1>What are we building \u2014 and why?</h1>
    <p>No article reaches the AI Writer until strategy, research, business objectives, and content architecture are fully approved.</p>
  </div>
  <div class="sb-steps-bar" id="sbStepsBar">${steps}</div>
  <div class="sb-layout">
    <div class="sb-main">
      <div class="sb-workspace fade" id="sbWorkspace">${ws}</div>
      <div class="sb-nav"><button class="b b-line" id="sbPrev" onclick="sbGo(Math.max(0,${sbStep}-1))" ${sbStep===0?'disabled':''}>\u2190 Previous</button><div class="grow"></div><span class="tiny muted">Step ${sbStep+1} of 15</span><div class="grow"></div><button class="b b-dark" id="sbNext" onclick="sbGo(Math.min(14,${sbStep}+1))">${sbStep===13?'Send to AI Writer \u2192':'Next \u2192'}</button></div>
    </div>
    <div class="sb-aside">${sidebar}</div>
  </div>`;
};
window.sbGo = function(n){ sbStep=Math.max(0,Math.min(14,n)); GO('story'); };
I.story = ()=>{};

/* ═══════════════════════════════ AI WRITER v2 ═══════════════════════════════ */
V.writer = () => {
  const STATUS_CARDS = [
    {l:'Status',v:'Drafting',cls:''},
    {l:'Writing Quality',v:'74',cls:''},
    {l:'Evidence',v:'91%',cls:'green'},
    {l:'SEO',v:'74',cls:''},
    {l:'GEO',v:'88',cls:'green'},
    {l:'AI Search',v:'82',cls:''},
    {l:'Authority',v:'72',cls:''},
    {l:'Readability',v:'86',cls:'green'},
    {l:'Entities',v:'12',cls:''},
    {l:'Int. Links',v:'3/8',cls:'warn'},
    {l:'Media',v:'2/4',cls:'warn'},
    {l:'Monetization',v:'High',cls:'green'},
    {l:'Schema',v:'\u26a0 Missing',cls:'warn'},
    {l:'Cluster',v:'Restaurants',cls:''},
    {l:'Traffic est.',v:'+250/mo',cls:''},
    {l:'Revenue',v:'\u20ac120/mo',cls:''},
    {l:'Read Time',v:'8 min',cls:''}
  ];

  const MODES = ['Normal','Writing Focus','Review','SEO','Evidence','Monetization','Collaboration'];
  const ALL_TABS = ['Draft','Outline','Research','Evidence','Sources','Entities','Competitors','SEO','GEO','Schema','Media','Assets','Internal Links','Affiliate','Marketplace','Academy','Knowledge Graph','History','Comments','Checklist','Publish'];

  const STATUS_BAR = `<div class="writer-status-bar">
    <div class="wsb-modes">${MODES.map((m,i)=>`<button class="wsb-mode ${i===0?'on':''}" onclick="this.closest('.wsb-modes').querySelectorAll('.wsb-mode').forEach(b=>b.classList.remove('on'));this.classList.add('on')">${m}</button>`).join('')}</div>
    <div class="wsb-cards">${STATUS_CARDS.map(c=>`<div class="wsb-card" title="Click to inspect ${c.l}"><div class="wsb-l">${c.l}</div><div class="wsb-v ${c.cls}">${c.v}</div></div>`).join('')}</div>
  </div>`;

  const OUTLINE_ITEMS = [
    {t:'Introduction',st:'done',wc:180,score:82},
    {t:'Why restaurants need AI',st:'writing',wc:240,score:74},
    {t:'Best booking tools',st:'needs-evidence',wc:0,score:0},
    {t:'Voice receptionists',st:'needs-review',wc:310,score:71},
    {t:'Review automation',st:'todo',wc:0,score:0},
    {t:'Marketing with AI',st:'todo',wc:0,score:0},
    {t:'Comparison table',st:'todo',wc:0,score:0},
    {t:'FAQs',st:'needs-citation',wc:120,score:68},
    {t:'What to do next',st:'todo',wc:0,score:0}
  ];
  const ST_LABEL = {done:'\u2713 Done','writing':'\u270e Writing','needs-evidence':'\u26a0 Needs Evidence','needs-review':'\u26a0 Needs Review','needs-citation':'! Needs Citation',todo:'\u25cb Todo',locked:'\ud83d\udd12 Locked'};
  const ST_CLS = {done:'green','writing':'blue','needs-evidence':'warn','needs-review':'warn','needs-citation':'warn',todo:'ghost',locked:'ghost'};

  const LEFT = `<div class="w-col" style="flex:0 0 220px">
    <div class="w-col-h">\u25a4 Outline <span class="grow"></span><span class="tiny muted">9 sections</span></div>
    <div class="w-col-body" style="padding:8px">
      ${OUTLINE_ITEMS.map((o,i)=>`<div class="sb-ol-item ${i===1?'on':''}" onclick="this.closest('.w-col-body').querySelectorAll('.sb-ol-item').forEach(x=>x.classList.remove('on'));this.classList.add('on')">
        <div class="soli-top"><span class="soli-t">${o.t}</span>${pill(ST_CLS[o.st]||'ghost',ST_LABEL[o.st]||o.st)}</div>
        ${o.wc?'<div class="soli-meta"><span class="tiny muted">'+o.wc+' words</span>'+(o.score?'<span class="tiny muted">Score '+o.score+'</span>':'')+'</div>':''}
      </div>`).join('')}
    </div>
  </div>`;

  const EDITOR = `<div class="w-col" style="flex:1;overflow:hidden">
    <div class="w-col-h">
      \u270e Editor <span class="grow"></span>
      <div class="writer-tabs" id="writerTabs">${ALL_TABS.slice(0,8).map((t,i)=>`<button class="writer-tab ${i===0?'on':''}" onclick="wSetTab('${t}')">${t}</button>`).join('')}
      <button class="writer-tab" onclick="this.nextElementSibling.classList.toggle('open');this.classList.toggle('open')">More \u25be</button>
      <div class="writer-tab-more">${ALL_TABS.slice(8).map(t=>`<button class="wmm-i" onclick="wSetTab('${t}')">${t}</button>`).join('')}</div>
      </div>
      <span class="tiny muted" style="margin-left:8px">auto-saved</span>
    </div>
    <div class="w-col-body" id="wMain">
      <div class="live-ev"><div class="le-h">\u25c9 Live evidence \u00b7 as you write</div>
        <div class="le-rows">
          <div class="le-row ok"><span class="le-claim">"AI booking cuts no-shows ~30%"</span><span class="le-v"><span class="trust official">OpenTable</span><span class="trust high">G2</span> \u2713 99%</span></div>
          <div class="le-row ok"><span class="le-claim">"Claude leads on reasoning"</span><span class="le-v"><span class="trust high">Reuters</span> \u2713 92%</span></div>
          <div class="le-row warn"><span class="le-claim">"Voice AI books while you sleep"</span><span class="le-v">\u26a0 Only Reddit \u00b7 43%</span></div>
        </div>
      </div>
      <div class="editor-doc" style="padding-bottom:40px">
        <h1>Best AI Tools for Restaurants in 2026</h1>
        <div class="ed-meta"><span>8 min read</span><span>\u00b7</span><span>Commercial intent</span><span>\u00b7</span><span>Cluster: Restaurants</span></div>
        <div class="para-hover-block">
          <p>Running a restaurant in 2026 means competing on more than food. The venues filling tables on a Tuesday night are the ones answering every booking instantly, never missing a call, and turning a great meal into a five-star review \u2014 automatically.</p>
          <div class="para-toolbar"><button class="pt-b" title="Rewrite">\u270e Rewrite</button><button class="pt-b" title="Expand">\u2b06 Expand</button><button class="pt-b" title="Shorten">\u2b07 Shorten</button><button class="pt-b" title="Simplify">\u25cc Simplify</button><button class="pt-b" title="Executive tone">\u2666 Executive</button><button class="pt-b" title="Add example">+ Example</button><button class="pt-b" title="Add stats">+ Stats</button><button class="pt-b" title="Add table">\u22a1 Table</button><button class="pt-b" title="Add FAQ">\u2753 FAQ</button></div>
        </div>
        <h2>Best booking tools</h2>
        <div class="para-hover-block">
          <p>The fastest win is an AI booking layer that takes reservations across phone, web and social. Pair it with the <span class="il">Voice Receptionist</span> agent and you'll never lose a Friday-night table to voicemail again. For a deeper comparison, see <span class="il">ChatGPT vs Claude</span> for handling guest messages.</p>
          <div class="para-toolbar"><button class="pt-b">\u270e Rewrite</button><button class="pt-b">\u2b06 Expand</button><button class="pt-b">+ Stats</button><button class="pt-b">\u2753 FAQ</button></div>
        </div>
      </div>
    </div>
  </div>`;

  const CHIEF_RIGHT = `<div class="w-col" style="flex:0 0 280px">
    <div class="w-col-h">\u2726 Chief Editor</div>
    <div class="w-col-body"><div class="chief">
      <div class="chief-intro"><div class="chief-orb">\u2726</div><div class="chief-hi">I read this draft against the Knowledge System. Here is what I would do.</div></div>

      <div class="chief-group-l">Writing</div>
      <div class="chief-msg"><p>This article has <b>no FAQ</b>. Adding one usually lifts AI-search visibility.</p><div class="chief-impact">Estimated impact <b>+4%</b></div><button class="b b-dark b-sm b-block">Generate FAQ</button></div>
      <div class="chief-msg"><p>The intro opens slowly. A sharper hook holds readers ~12s longer.</p><button class="b b-line b-sm b-block">Rewrite the intro</button></div>

      <div class="chief-group-l">Evidence</div>
      <div class="chief-msg"><p>Two claims have <b>no citation</b>. I found <b>three official sources</b> that back them.</p><div class="chief-cites"><span class="trust official">OpenAI</span><span class="trust high">Reuters</span><span class="trust official">Docs</span></div><button class="b b-dark b-sm b-block">Add citations</button></div>

      <div class="chief-group-l">SEO</div>
      <div class="chief-msg"><p><b>Schema markup</b> is missing. This reduces AI Overview eligibility.</p><div class="chief-impact">Estimated impact <b>+3%</b></div><button class="b b-line b-sm b-block">Generate schema</button></div>

      <div class="chief-group-l">GEO</div>
      <div class="chief-msg"><p>GEO readiness is <b>88%</b>. One FAQ block would complete it.</p><button class="b b-line b-sm b-block">Optimize for AI search</button></div>

      <div class="chief-group-l">Revenue</div>
      <div class="chief-msg ok"><p>\u2713 Affiliate links verified. OpenTable + ChatGPT Plus + Canva Pro correctly placed.</p></div>
      <div class="chief-msg"><p>A <b>Marketplace Collection</b> CTA at the end could add \u20ac30/mo.</p><button class="b b-line b-sm b-block">Add Marketplace CTA</button></div>

      <div style="padding:14px;background:var(--paper-warm);border:1px solid var(--line);border-radius:12px;margin-top:12px">
        <div style="font-family:var(--font-mono);font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:var(--gold-deep);margin-bottom:10px">Publish Readiness</div>
        <div class="qscore" style="background:transparent;padding:0;border:none;gap:12px">
          <div class="ring" style="--p:74;width:54px;height:54px"><span class="rn" style="font-size:15px">74%</span></div>
          <div><div style="font-weight:700">Not yet ready</div><div style="font-size:12px;color:var(--ink-soft);margin-top:3px">Fix 3 issues to reach 91%</div></div>
        </div>
      </div>
      <div class="tiny muted" style="margin-top:10px;line-height:1.5">I never publish. You remain the final editor.</div>
    </div></div>
  </div>`;

  return `<div class="page-h" style="margin-bottom:12px"><div class="row"><div>
    <div class="eyebrow"><span class="ix">\u25c6</span> AI Writer \u00b7 Enterprise Content Command Center</div>
    <h1>Best AI Tools for Restaurants</h1>
  </div><div class="grow"></div>
  <div class="row" style="gap:8px">
    <button class="b b-line b-sm" onclick="GO('Quality')">Publish Readiness: 74%</button>
    <button class="b b-gold b-sm" onclick="GO('review')">Send to Review</button>
  </div></div></div>
  ${STATUS_BAR}
  <div class="writer">${LEFT}${EDITOR}${CHIEF_RIGHT}</div>`;
};

/* ═══════════════════════════════ HUMAN REVIEW v2 ═══════════════════════════════ */
V.review = () => {
  const READINESS_CHECKS = [
    {k:'Evidence',v:'ok'},{k:'SEO',v:'ok'},{k:'GEO',v:'ok'},{k:'Voice Search',v:'ok'},
    {k:'Schema',v:'warn'},{k:'Entities',v:'ok'},{k:'Internal Links',v:'warn'},
    {k:'Affiliate',v:'ok'},{k:'Media',v:'warn'},{k:'Cluster',v:'ok'},
    {k:'AI Search',v:'ok'},{k:'Accessibility',v:'ok'}
  ];
  const Q_CATS = [
    {n:'Writing',icon:'\u270e',items:[['Title is clear and compelling',1],['Hook grabs attention in first sentence',1],['Readability grade appropriate for audience',1],['Flow is logical section to section',1],['Grammar is clean',1],['CTA is present and specific',0]]},
    {n:'Knowledge',icon:'\u2726',items:[['All claims have citations',0],['Evidence from official sources',1],['No contradictions detected',0],['Entities correctly named',1],['Facts match Knowledge Database',1]]},
    {n:'SEO',icon:'\u25d0',items:[['Primary keyword in title and H1',1],['Meta description written',1],['Schema markup present',0],['FAQ section present',0],['Internal links added',1],['Image alt tags written',1]]},
    {n:'GEO / AI Search',icon:'\u25ce',items:[['Voice search question answered',1],['Semantic coverage complete',1],['Entity density sufficient',1],['AI Overview target addressed',1],['Answer completeness score 90%+',0]]},
    {n:'Business',icon:'\u20ac',items:[['Affiliate products present',1],['Marketplace item linked',0],['Newsletter CTA present',1],['Lead magnet present',0],['Revenue potential maximized',0]]}
  ];
  const TIMELINE = [
    {s:'Idea',t:'June 28 09:12',u:'JD',d:'2 min'},
    {s:'Research',t:'June 28 10:34',u:'AI',d:'12 min'},
    {s:'Story Builder',t:'June 28 11:20',u:'JD',d:'18 min'},
    {s:'Draft',t:'June 28 14:05',u:'AI Writer',d:'8 min'},
    {s:'Evidence',t:'June 28 14:13',u:'AI',d:'3 min'},
    {s:'AI Revision',t:'June 28 14:16',u:'AI',d:'4 min'},
    {s:'Human Review',t:'Today 09:00',u:'JD',d:'In progress'},
    {s:'Approved',t:'\u2014','u':'','d':''},
    {s:'Published',t:'\u2014','u':'','d':''}
  ];

  const readinessHero = `<div class="hr-hero">
    <div class="hr-ring-wrap">
      <div class="ring" style="--p:91;width:110px;height:110px"><span class="rn" style="font-size:28px">91%</span></div>
      <div class="hr-ring-label">Publish Readiness</div>
    </div>
    <div class="hr-hero-detail">
      <div class="hr-status">${pill('gold','Ready with warnings')}</div>
      <div class="hr-meta-row">
        ${[['Confidence','94%','green'],['Evidence Score','91%','green'],['Publishing Risk','Low','green']].map(m=>`<div class="hr-meta"><div class="hrm-l">${m[0]}</div><div class="hrm-v" style="color:var(--${m[2]==='green'?'success':'warn'})">${m[1]}</div></div>`).join('')}
      </div>
      <div class="hr-checks">
        ${READINESS_CHECKS.map(c=>`<span class="hr-check ${c.v}" title="${c.k}">${c.v==='ok'?'\u2713':c.v==='warn'?'\u26a0':'\u2715'} ${c.k}</span>`).join('')}
      </div>
    </div>
  </div>`;

  const criticalIssues = `<div class="hr-critical">
    <div class="hrc-h">\u2691 Critical Issues</div>
    ${[['Missing FAQ','Frequently improves AI search visibility','+4%','Generate FAQ'],['Schema missing','No structured data detected. Google may misidentify article type.','+3%','Generate Schema'],['No Comparison Table','Comparative content outranks single recommendations.','+2%','Generate Table'],['Affiliate section empty','Revenue opportunity not captured.','+2%','Fix Now']].map(i=>`<div class="hrc-row"><div class="hrc-left"><div class="hrc-t">\u26a0 ${i[0]}</div><div class="hrc-d">${i[1]}</div></div><div class="hrc-right"><span class="hrc-gain">${i[2]}</span><button class="b b-gold b-sm">${i[3]}</button></div></div>`).join('')}
  </div>`;

  const articleSummary = `<div class="card hr-summary-card">
    <div class="hr-sh">Article Summary</div>
    <div class="hr-sum-grid">
      ${[['Title','Best AI Tools for Restaurants'],['Keyword','best ai tools restaurants'],['Intent','Commercial Investigation'],['Cluster','Restaurants'],['Article Type','Buying Guide'],['Words','2,400'],['Images','2'],['Videos','0'],['Tables','1'],['Entities','12'],['Sources','8'],['Reading Time','8 min'],['Est. Traffic','+250/mo'],['Revenue','\u20ac120/mo'],['Author','Jean-Daniel']].map(s=>`<div class="hr-sum-row"><span class="hrsr-k">${s[0]}</span><span class="hrsr-v">${s[1]}</span></div>`).join('')}
    </div>
  </div>`;

  const aiRecs = `<div class="hr-recs">
    <div class="hr-sh">AI Recommendations</div>
    ${[['Generate FAQ section','Frequently improves AI search and Google Featured Snippet eligibility.','+4%'],['Add schema markup','Enables rich results. Google Knowledge Panel coverage increases.','+3%'],['Add comparison table','Articles with comparison tables rank 2.4x more often for buying queries.','+2%'],['Shorten the introduction','Editors who reduce intro length below 80 words see 12s more average read time.','+8% engagement']].map(r=>`<div class="hr-rec-row"><div class="hrr-t">${r[0]}</div><div class="hrr-d">${r[1]}</div><div class="hrr-foot"><span class="hrr-gain">${r[2]}</span><button class="b b-gold b-sm">Apply</button></div></div>`).join('')}
  </div>`;

  const qualityCategories = `<div class="hr-quality">
    <div class="hr-sh">Quality Categories</div>
    ${Q_CATS.map(cat=>{
      const total=cat.items.length, passed=cat.items.filter(i=>i[1]).length;
      return `<div class="hr-qcat">
        <button class="hr-qcat-h" onclick="this.nextElementSibling.classList.toggle('open');this.classList.toggle('open')">
          <span class="hqh-ic">${cat.icon}</span><span class="hqh-t">${cat.n}</span>
          <span class="hqh-score">${passed}/${total}</span>
          ${pill(passed===total?'green':passed/total>=0.6?'gold':'warn',Math.round(passed/total*100)+'%')}
          <span class="acc-x" style="margin-left:auto">\u203a</span>
        </button>
        <div class="hr-qcat-body">
          <div class="checklist">${cat.items.map(c=>`<div class="check" onclick="this.querySelector('.why-block').style.display=this.querySelector('.why-block').style.display==='none'?'block':'none'">
            <span class="cb ${c[1]?'y':'n'}">${c[1]?'\u2713':'!'}</span> ${c[0]}
            ${!c[1]?'<div class="why-block" style="display:none"><div class="why-inner"><div class="why-l">Why</div><div class="why-v">This item is required for editorial standards and audience trust.</div><div class="why-l">Impact</div><div class="why-v">Affects article authority and readiness score.</div><div class="why-l">Estimated gain</div><div class="why-v">+2\u20133%</div><button class="b b-gold b-sm" style="margin-top:6px">Fix now</button></div></div>':''}
          </div>`).join('')}</div>
        </div>
      </div>`;
    }).join('')}
  </div>`;

  const timeline = `<div class="card" style="padding:20px 22px;margin-bottom:16px">
    <div class="hr-sh">Review Timeline</div>
    <div class="tl">
      ${TIMELINE.map((t,i)=>`<div class="tl-row" style="margin-bottom:8px">
        <div class="tl-rail"><div class="tl-dot ${t.u==='JD'?'recover':t.t==='\u2014'?'':'change'}" style="font-size:10px">${i+1}</div>${i<TIMELINE.length-1?'<div class="tl-line" style="min-height:16px"></div>':''}</div>
        <div class="tl-card" style="padding:10px 14px;margin-bottom:0"><div class="tl-top"><b>${t.s}</b><span class="tl-time mono">${t.t}</span></div><p style="margin:2px 0 0">${t.u?t.u+' \u00b7 '+t.d:''}</p></div>
      </div>`).join('')}
    </div>
  </div>`;

  const versionHistory = `<div class="card" style="padding:18px 20px;margin-bottom:16px">
    <div class="hr-sh">Version History</div>
    ${[['Draft v1','AI Writer · June 28 14:05'],['Draft v2','AI Revision · June 28 14:16'],['Draft v3','Human edit · June 29 10:14']].map((v,i)=>`<div class="rs-tl-i"><b>${v[0]}</b><span class="rs-tl-d" style="color:var(--ink-soft)">${v[1]}</span><div class="row" style="gap:6px;margin-left:auto"><button class="b b-line b-sm">Diff</button><button class="b b-ghost b-sm">Restore</button></div></div>`).join('')}
  </div>`;

  const aiMemory = `<div class="card" style="padding:18px 20px;margin-bottom:80px">
    <div class="hr-sh">\u2726 AI Memory \u00b7 Editor Preferences</div>
    <div class="rs-ev-list">
      ${['Usually adds FAQ section','Usually shortens introduction','Usually adds comparison tables','Usually removes redundant fluff','Prefers Buying Guide angle for commercial keywords'].map(p=>`<div class="rs-ev-i">\u25b7 ${p}</div>`).join('')}
    </div>
    <div class="tiny muted" style="margin-top:8px">AGNUS learns from your editing patterns to improve recommendations over time.</div>
  </div>`;

  return `<div class="page-h">
    <div class="eyebrow"><span class="ix">\u25c6</span> Human Review \u00b7 Final Editorial Decision</div>
    <h1>Pre-flight inspection.</h1>
    <p>Is this article ready? What is still wrong? Why? What is the expected impact? What happens if I publish now?</p>
  </div>
  ${readinessHero}
  ${criticalIssues}
  <div class="hr-two-col">
    <div>${articleSummary}${qualityCategories}${timeline}${versionHistory}${aiMemory}</div>
    <div>${aiRecs}</div>
  </div>
  <div class="hr-sticky-footer">
    <div class="hr-sf-left"><div class="hr-sf-title">Best AI Tools for Restaurants</div><div class="tiny muted">Readiness: 91% \u00b7 Ready with warnings</div></div>
    <div class="hr-sf-acts">
      <button class="b b-line b-sm" onclick="GO('writer')">Return to AI</button>
      <button class="b b-line b-sm">Request Rewrite</button>
      <button class="b b-ghost b-sm">Reject</button>
      <button class="b b-ghost b-sm">Archive</button>
      <button class="b b-line" onclick="showCert()">Approve & Schedule</button>
      <button class="b b-gold" onclick="showCert()">Approve \u2192</button>
    </div>
  </div>
  <div class="sd-drawer" id="certDrawer"><div class="sd-body"></div></div>`;
};
window.showCert = function(){
  const d=document.getElementById('certDrawer'); if(!d)return;
  const id='AGNUS-'+Math.random().toString(36).slice(2,8).toUpperCase();
  d.querySelector('.sd-body').innerHTML=`<div class="sd-h"><div><h3>Publication Certificate</h3><div class="sd-ident">${pill('green','\u2726 Approved')}</div></div><button class="x" onclick="document.getElementById('certDrawer').classList.remove('open')">\u00d7</button></div>
    <div style="text-align:center;padding:24px 0">
      <div style="width:80px;height:80px;border-radius:50%;background:var(--gold-grad);display:grid;place-items:center;margin:0 auto 18px;font-family:var(--font-serif);font-style:italic;font-size:32px;color:#241B07">\u2726</div>
      <div style="font-family:var(--font-sans);font-weight:800;font-size:22px;letter-spacing:-0.03em;margin-bottom:6px">Best AI Tools for Restaurants</div>
    </div>
    <div class="hr-sum-grid">${[['Approved by','Jean-Daniel'],['Date',new Date().toLocaleDateString()],['Quality Score','91/100'],['Evidence Version','Knowledge DB v4.2'],['Knowledge Version','2026-06-30'],['Reviewer','JD'],['Certificate ID',id]].map(s=>`<div class="hr-sum-row"><span class="hrsr-k">${s[0]}</span><span class="hrsr-v">${s[1]}</span></div>`).join('')}</div>
    <div class="sd-foot"><button class="b b-gold b-block" onclick="GO('calendar')">Schedule publication \u2192</button></div>`;
  d.classList.add('open');
};

/* ═══════════════════════════════ PUBLISHING CALENDAR v2 ═══════════════════════════════ */
const CAL_ITEMS = {
  3:['draft','AI accountants 2026','Business','Guide',62],5:['scheduled','Gemini 3 vs GPT-5','AI Models','Comparison',88],
  8:['published','OpenAI agent framework','AI Models','News',100],10:['update','ChatGPT review','AI Models','Review',44],
  12:['scheduled','Best AI for Restaurants','Restaurants','Buying Guide',91],15:['published','50 GPT-5 prompts','Prompts','Library',100],
  17:['draft','AI note-takers','Tools','Comparison',18],19:['scheduled','Weekly Intelligence','All','Newsletter',100],
  24:['published','AI for dental clinics','Healthcare','Guide',100],26:['scheduled','What is RAG?','RAG','Explainer',82]
};
const CAL_COLORS={'published':'var(--success)','scheduled':'var(--sapphire)','draft':'var(--ink-faint)','update':'var(--warn)'};

V.calendar = () => {
  const intel = `<div class="cal-intel">
    <div class="ci-stats">
      ${[['Ready to publish','4','green'],['Scheduled','6','blue'],['Needs update','3','warn'],['Cluster gaps','8',''],['Revenue forecast','\u20ac740/mo','green']].map(s=>`<div class="ci-stat"><div class="ci-n" style="color:var(--${s[2]||'ink'})">${s[0]==='Revenue forecast'?s[1]:s[1]}</div><div class="ci-l">${s[0]}</div></div>`).join('')}
    </div>
    <div class="ci-next">
      <div class="cin-l">Best next publish</div>
      <div class="cin-t">Restaurants Guide</div>
      <div class="cin-r">Keyword demand high + cluster weak (31%) + article approved · Sundays perform best</div>
      <button class="b b-gold b-sm" onclick="calItemDrw(12)">View \u2192</button>
    </div>
  </div>`;

  const views = `<div class="row" style="gap:8px;margin-bottom:14px">
    ${['Month','Week','Timeline','Queue'].map((v,i)=>`<button class="b ${i===0?'b-dark':'b-line'} b-sm">${v}</button>`).join('')}
    <div class="grow"></div>
    <button class="b b-gold b-sm">\u26a1 Optimize Calendar</button>
  </div>`;

  const warning = `<div class="gap-alert" style="margin-bottom:14px"><span class="ic">\u26a0</span><div>You haven\u2019t published in <b>AI Agents</b> for 12 days. The <b>Business</b> cluster needs 3 more articles, and the <b>Claude review</b> should be refreshed.</div></div>`;

  const legend = `<div class="row" style="gap:8px;margin-bottom:12px">${[['published','Published'],['scheduled','Scheduled'],['draft','Draft'],['update','Needs update']].map(l=>`<span class="cal-ev ${l[0]}">${l[1]}</span>`).join('')}</div>`;

  let cells=''; const offset=2;
  for(let i=0;i<35;i++){
    const d=i-offset+1; const inMonth=d>=1&&d<=30; const item=CAL_ITEMS[d];
    cells+=`<div class="cal-day ${inMonth?'':'dim'} ${d===30?'today':''}" ${item&&inMonth?'style="cursor:pointer"':''} ${item&&inMonth?'onclick="calItemDrw('+d+')"':''}>
      ${inMonth?`<div class="dn">${d}</div>`:''}
      ${item&&inMonth?`<div class="cal-ev ${item[0]}" title="${item[1]}">${item[1].slice(0,18)}${item[1].length>18?'\u2026':''}</div>
      <div class="cal-mini-meta"><span class="tiny muted">${item[2]}</span><span class="tiny muted">${item[4]}%</span></div>`:''}
    </div>`;
  }

  return `<div class="page-h"><div class="row" style="align-items:flex-start"><div>
    <div class="eyebrow"><span class="ix">\u25c6</span> Publishing Calendar \u00b7 Publishing Intelligence Center</div>
    <h1>Why this article, why this date, what impact?</h1>
  </div><div class="grow"></div><button class="b b-dark" onclick="openCreate()">+ Schedule article</button></div></div>
  ${intel}${views}${warning}${legend}
  <div class="cal">${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>`<div class="cal-hd">${d}</div>`).join('')}${cells}</div>
  <div class="sd-drawer" id="calDrawer"><div class="sd-body"></div></div>`;
};

window.calItemDrw = function(day){
  const item=CAL_ITEMS[day]; if(!item)return;
  const d=document.getElementById('calDrawer'); if(!d)return;
  const WHY_DATA = [
    ['Keyword Discovery','Opportunity score 8.7 \u00b7 rising 42% demand'],
    ['Topic Clusters','Restaurants cluster 31% \u00b7 gap present'],
    ['Human Review','Approved \u00b7 Quality 91/100'],
    ['AI Writer','Draft complete \u00b7 evidence 94%'],
    ['Affiliate','High value \u00b7 3 programs match'],
    ['Performance','Sundays perform +22% vs weekdays for this cluster'],
    ['AGNUS Brain','Recommended this week \u00b7 high priority']
  ];
  d.querySelector('.sd-body').innerHTML=`<div class="sd-h"><div><h3>${item[1]}</h3><div class="sd-ident">${pill('ghost',item[2])} ${pill(item[0]==='published'?'green':item[0]==='update'?'warn':'blue',item[0])}</div></div><button class="x" onclick="document.getElementById('calDrawer').classList.remove('open')">\u00d7</button></div>

    <div class="hr-sh">Article Summary</div>
    <div class="hr-sum-grid">${[['Type',item[3]],['Cluster',item[2]],['Readiness',item[4]+'%'],['Expected traffic','+250/mo'],['Revenue','\u20ac120/mo'],['Priority','High']].map(s=>`<div class="hr-sum-row"><span class="hrsr-k">${s[0]}</span><span class="hrsr-v">${s[1]}</span></div>`).join('')}</div>

    <div class="hr-sh" style="margin-top:18px">Why Scheduled Here</div>
    <div class="rs-ev-list">${WHY_DATA.map(w=>`<div class="rs-ev-i"><b>${w[0]}</b> \u2014 ${w[1]}</div>`).join('')}</div>

    <div class="hr-sh" style="margin-top:18px">Readiness Checklist</div>
    <div class="checklist">${[['Research approved',1],['Outline approved',1],['Draft generated',1],['Human review passed',1],['SEO optimized',1],['Schema added',0]].map(c=>cb(c[1],c[0])).join('')}</div>

    <div class="hr-sh" style="margin-top:18px">Cluster Impact</div>
    <div class="gap-alert"><span class="ic">\u2b06</span><div>Publishing this article advances the <b>Restaurants</b> cluster from <b>31% \u2192 47%</b> authority.</div></div>

    <div class="hr-sh" style="margin-top:18px">Revenue Forecast</div>
    <div class="rs-cards" style="grid-template-columns:repeat(3,1fr)">${[['Affiliate','\u20ac120/mo'],['Marketplace','\u20ac30/mo'],['Total','\u20ac150/mo']].map(s=>`<div class="rs-card"><div class="rs-n">${s[1]}</div><div class="rs-l">${s[0]}</div></div>`).join('')}</div>

    <div class="sd-foot" style="margin-top:16px">
      <button class="b b-ghost b-sm" onclick="document.getElementById('calDrawer').classList.remove('open')">Close</button>
      <button class="b b-line b-sm">Reschedule</button>
      <button class="b b-line b-sm">Optimize date</button>
      <button class="b b-gold b-sm">Publish now \u2192</button>
    </div>`;
  d.classList.add('open');
};

/* ═══════════════════════════════ CONTENT ARCHIVE v2 ═══════════════════════════════ */
const ARCHIVE_ARTS = [
  {id:0,ti:'OpenAI agent framework',tp:'News',cl:'AI Models',st:'Live',health:97,fresh:'Today',tr:'12,400',rv:'\u20ac210',ai:'High',lr:'2d ago',nr:'30d'},
  {id:1,ti:'Claude vs ChatGPT',tp:'Comparison',cl:'AI Models',st:'Needs Update',health:72,fresh:'Outdated',tr:'9,800',rv:'\u20ac160',ai:'High',lr:'21d ago',nr:'Overdue'},
  {id:2,ti:'AI for dental clinics',tp:'Guide',cl:'Healthcare',st:'Live',health:88,fresh:'8d ago',tr:'3,200',rv:'\u20ac140',ai:'Medium',lr:'8d ago',nr:'22d'},
  {id:3,ti:'Best AI agents for business',tp:'Buying Guide',cl:'AI Agents',st:'Growing',health:91,fresh:'Today',tr:'4,600',rv:'\u20ac190',ai:'High',lr:'3d ago',nr:'27d'},
  {id:4,ti:'What is RAG?',tp:'Explainer',cl:'RAG',st:'Live',health:84,fresh:'12d ago',tr:'6,400',rv:'\u20ac40',ai:'High',lr:'12d ago',nr:'18d'},
  {id:5,ti:'ChatGPT Review',tp:'Review',cl:'AI Models',st:'Critical',health:44,fresh:'Outdated',tr:'8,100',rv:'\u20ac160',ai:'High',lr:'21d ago',nr:'Overdue'},
  {id:6,ti:'AI for Restaurants guide',tp:'Guide',cl:'Restaurants',st:'Growing',health:86,fresh:'3d ago',tr:'2,400',rv:'\u20ac120',ai:'Medium',lr:'3d ago',nr:'27d'},
  {id:7,ti:'50 GPT-5 prompts',tp:'Library',cl:'Prompts',st:'Declining',health:61,fresh:'14d ago',tr:'5,600',rv:'\u20ac40',ai:'Medium',lr:'14d ago',nr:'Overdue'}
];
const ST_ARCHIVE = {
  Live:{cls:'green',label:'Live'},Declining:{cls:'warn',label:'Declining'},Growing:{cls:'green',label:'\u2191 Growing'},
  'Needs Update':{cls:'warn',label:'Needs Update'},Critical:{cls:'red',label:'\u26a0 Critical'},
  Archived:{cls:'ghost',label:'Archived'},'Merge Candidate':{cls:'blue',label:'Merge'},'Rewrite Suggested':{cls:'warn',label:'Rewrite'}
};

V.archive = () => {
  const healthHero = `<div class="arc-hero">
    <div class="arc-hero-stats">
      ${[['Total articles','214',''],['Healthy','187','green'],['Need refresh','18','warn'],['Critical','6','error'],['Archived','3',''],['Traffic','182K/mo','green'],['Revenue','\u20ac6,200/mo','green'],['AI Visibility','94%','green']].map(s=>`<div class="arc-stat"><div class="arc-n" style="color:var(--${s[2]||'ink'})">${s[1]}</div><div class="arc-l">${s[0]}</div></div>`).join('')}
    </div>
  </div>`;

  const filters = `<div class="kw-filters" style="margin-bottom:16px">
    ${['All','News','Reviews','Comparisons','Guides','Academy','Marketplace','Needs Update','High Traffic','High Revenue','Declining','Critical','By Cluster','By Language','By Author'].map((f,i)=>`<button class="kw-filter ${i===0?'on':''}" onclick="archFilter(this)">${f}</button>`).join('')}
  </div>`;

  const table = `<table class="an-table arc-table"><thead><tr>
    <th><input type="checkbox"></th>
    <th>Title</th><th>Type</th><th>Cluster</th><th>Status</th><th>Health</th><th>Freshness</th><th>Traffic</th><th>Revenue</th><th>AI Visibility</th><th>Last Review</th><th>Next Review</th><th>Actions</th>
  </tr></thead><tbody>
    ${ARCHIVE_ARTS.map(a=>{
      const st=ST_ARCHIVE[a.st]||ST_ARCHIVE.Live;
      const hCls=a.health>=80?'green':a.health>=60?'gold':'warn';
      const freshBad=a.fresh==='Outdated';
      return `<tr style="cursor:pointer" onclick="arcItemDrw(${a.id})">
        <td onclick="event.stopPropagation()"><input type="checkbox"></td>
        <td style="font-weight:600">${a.ti}</td>
        <td>${pill('ghost',a.tp)}</td>
        <td class="muted">${a.cl}</td>
        <td>${pill(st.cls,st.label)}</td>
        <td><span class="tnum ${hCls}">${a.health}</span></td>
        <td style="color:${freshBad?'var(--error)':'inherit'};${freshBad?'font-weight:600':''}">${a.fresh}</td>
        <td class="mono">${a.tr}</td>
        <td class="mono" style="color:var(--success);font-weight:600">${a.rv}</td>
        <td>${pill(a.ai==='High'?'green':'gold',a.ai)}</td>
        <td class="mono muted">${a.lr}</td>
        <td class="mono" style="color:${a.nr==='Overdue'?'var(--error)':'inherit'}">${a.nr}</td>
        <td onclick="event.stopPropagation()"><button class="b b-line b-sm" onclick="arcItemDrw(${a.id})">Open</button></td>
      </tr>`;
    }).join('')}
  </tbody></table>`;

  const analytics = `<div class="arc-analytics">
    <div class="sec-title"><h2>Archive Analytics</h2></div>
    <div class="an-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:22px">
      ${[['Total traffic','182K/mo',''],['Total revenue','\u20ac6,200/mo','green'],['Avg health','84%',''],['AI visibility','94%','green']].map(s=>`<div class="metric"><div class="ml">${s[0]}</div><div class="mv">${s[1]}</div><div class="md ${s[2]==='green'?'':''}">${s[2]==='green'?'<span class="up">\u25b2 trending</span>':'live'}</div></div>`).join('')}
    </div>
    <div class="hr-sh">Refresh Queue \u00b7 18 articles need attention</div>
    <div class="rs-ev-list">
      ${[['ChatGPT Review','Critical \u00b7 pricing outdated \u00b7 overdue'],['50 GPT-5 prompts','Declining \u00b7 lost 4 positions'],['AI for Restaurants','Outdated pricing section \u00b7 needs refresh']].map(r=>`<div class="rs-ev-i"><b>${r[0]}</b> \u2014 ${r[1]}<button class="b b-gold b-sm" style="margin-left:auto">Refresh</button></div>`).join('')}
    </div>
  </div>`;

  return `<div class="page-h"><div class="row"><div>
    <div class="eyebrow"><span class="ix">\u25c6</span> Content Archive \u00b7 Living Knowledge Library</div>
    <h1>Every article is still being watched.</h1>
    <p>Not a storage table. An active monitoring dashboard. Every asset is connected to live signals.</p>
  </div><div class="grow"></div><div class="row" style="gap:8px">
    <button class="b b-line b-sm">Export</button>
    <button class="b b-dark">Bulk Refresh</button>
  </div></div></div>
  ${healthHero}${filters}${table}${analytics}
  <div class="sd-drawer" id="arcDrawer"><div class="sd-body"></div></div>`;
};

window.arcItemDrw = function(id){
  const a=ARCHIVE_ARTS.find(x=>x.id===id)||ARCHIVE_ARTS[0];
  const d=document.getElementById('arcDrawer'); if(!d)return;
  const st=ST_ARCHIVE[a.st]||ST_ARCHIVE.Live;
  const WHY = a.st==='Needs Update'||a.st==='Critical'
    ? `<div class="rs-conflict" style="margin-bottom:14px"><div class="rsc-h"><span class="rsc-dot"></span><b>Why action is needed</b></div>${[['OpenAI pricing page changed','Official source updated 11 min ago'],['Search position dropped','#4 \u2192 #8 over 7 days'],['Two comparison pages cite old pricing','Contradictions detected in Knowledge Graph']].map(w=>`<div class="rsc-row"><span class="trust official">${w[0]}</span><span>${w[1]}</span></div>`).join('')}
    <div class="rsc-note">Recommended: Refresh pricing section. Expected: Recover ~180 visits/mo \u00b7 Protect \u20ac160/mo.</div><button class="b b-gold b-sm" style="margin-top:8px">Refresh now \u2192</button></div>` : '';

  d.querySelector('.sd-body').innerHTML=`<div class="sd-h"><div><h3>${a.ti}</h3><div class="sd-ident">${pill(st.cls,st.label)}${pill('ghost',a.tp)}</div></div><button class="x" onclick="document.getElementById('arcDrawer').classList.remove('open')">\u00d7</button></div>
    ${WHY}
    <div class="hr-sh">Performance</div>
    <div class="rs-cards" style="grid-template-columns:repeat(3,1fr)">${[['Traffic',a.tr],['Revenue',a.rv],['AI Visibility',a.ai]].map(s=>`<div class="rs-card"><div class="rs-n">${s[1]}</div><div class="rs-l">${s[0]}</div></div>`).join('')}</div>

    <div class="hr-sh" style="margin-top:16px">Knowledge Status</div>
    <div class="rs-ev-list">${[['Official docs','Verified '+a.fresh],['Pricing',''+a.fresh],['Entities','Tracked'],['Sources',''+a.health+'% health']].map(s=>`<div class="rs-ev-i"><b>${s[0]}</b> \u2014 ${s[1]}</div>`).join('')}</div>

    <div class="hr-sh" style="margin-top:16px">Entity Relationships</div>
    <div class="rs-ents">${['OpenAI','ChatGPT','GPT-5','Anthropic'].map(e=>`<button class="rs-ent" onclick="GO('know_entities')">${e}</button>`).join('')}</div>

    <div class="hr-sh" style="margin-top:16px">Cluster Position</div>
    <div class="gap-alert"><span class="ic">\u2295</span><div>Cluster: <b>${a.cl}</b> \u00b7 This article is a pillar for ${a.cl==='AI Models'?'9':'4'} supporting articles.</div></div>

    <div class="hr-sh" style="margin-top:16px">AI Recommendation</div>
    <div class="chief-msg"><p>\u201c${a.st==='Critical'?'Refresh immediately \u2014 pricing changed and positions dropped.':a.st==='Declining'?'Update with new examples and a comparison table.':'Article is healthy. Schedule review in 30 days.'}\u201d</p></div>

    <div class="hr-sh" style="margin-top:16px">Timeline</div>
    <div class="tl">${[['Published','June 14'],['Reviewed','June 22'],['Sources changed','June 29'],['Status',''+a.st]].map(t=>`<div class="tl-row" style="margin-bottom:6px"><div class="tl-rail"><div class="tl-dot" style="font-size:10px">\u25cf</div></div><div class="tl-card" style="padding:8px 12px;margin-bottom:0"><b>${t[0]}</b> \u00b7 ${t[1]}</div></div>`).join('')}</div>

    <div class="sd-foot" style="margin-top:16px">
      ${['Open','Refresh','Rewrite','Update sources','Recalculate','Merge','Split','Compare','Archive','Duplicate','View history'].map((act,i)=>`<button class="b ${i===0||i===1?'b-gold':i===8?'b-ghost':'b-line'} b-sm" onclick="this.closest('.sd-body').querySelector('h3').textContent">${act}</button>`).join('')}
    </div>`;
  d.classList.add('open');
};
window.archFilter = function(el){ document.querySelectorAll('.kw-filters .kw-filter').forEach(b=>b.classList.toggle('on',b===el)); };

})();
/* === dash-extras.js === */
/* AGNUS Dashboard — Extra AI Writer tabs + Story Builder v2 auto-generation + inline edit */
(function(){
const V = window.VIEWS = window.VIEWS || {};
const I = window.VIEW_INIT = window.VIEW_INIT || {};

/* ─── AI WRITER: 5 new tabs (Assets / Voice / Semantic / EEAT / Preview) ─── */
window.W_EXTRA = {
  assets:()=>`<div class="editor-doc">
    <h2 style="margin-top:0">Assets</h2>
    <p class="muted" style="font-size:13.5px">Every image, diagram and video for this article. Drop files or paste a URL.</p>
    <div class="kip-two" style="margin-bottom:14px">
      <div>
        <div class="kip-row"><span class="kip-k">Hero image</span><span class="kip-vt"><span class="pill warn">Missing</span></span></div>
        <div class="kip-row"><span class="kip-k">OG image</span><span class="kip-vt"><span class="pill warn">Missing</span></span></div>
        <div class="kip-row"><span class="kip-k">Section images</span><span class="kip-vt"><span class="pill ghost">0 of 4</span></span></div>
      </div>
      <div>
        <div class="kip-row"><span class="kip-k">Alt text</span><span class="kip-vt"><span class="pill ghost">Auto-generate on upload</span></span></div>
        <div class="kip-row"><span class="kip-k">Compression</span><span class="kip-vt"><span class="pill ghost">WebP ready</span></span></div>
        <div class="kip-row"><span class="kip-k">Image schema</span><span class="kip-vt"><span class="pill green">✓ Set</span></span></div>
      </div>
    </div>
    <div class="gap-alert"><span class="ic">⚠</span><div>Add a hero image and 4 section images before publishing. AGNUS will auto-generate alt text and compress to WebP.</div></div>
    <button class="b b-dark" style="margin-top:12px">Upload hero image</button>
  </div>`,

  voice:()=>`<div class="editor-doc">
    <h2 style="margin-top:0">Voice Search &amp; Featured Snippet</h2>
    <div class="qscore" style="margin-bottom:18px"><div class="ring" style="--p:88;width:54px;height:54px"><span class="rn" style="font-size:15px">88%</span></div>
      <div class="qt"><h4>Voice Search Readiness · 88%</h4><p>Add a direct-answer FAQ block to claim the featured snippet for "What AI tools help restaurants?"</p></div></div>
    <div class="checklist">${[['Has a clear direct answer in intro',1],['Has FAQ section',0],['Uses question-form headings',1],['Answer under 30 words',1],['Local intent handled',0]].map(c=>`<div class="check"><span class="cb ${c[1]?'y':'n'}">${c[1]?'✓':'!'}</span> ${c[0]}</div>`).join('')}</div>
    <div class="gap-alert" style="margin-top:14px"><span class="ic">⚡</span><div>AGNUS can generate the FAQ block automatically.<button class="b b-dark b-sm" style="margin-left:8px" onclick="this.textContent='Generated ✓'">Generate FAQ</button></div></div>
  </div>`,

  semantic:()=>`<div class="editor-doc">
    <h2 style="margin-top:0">Semantic Search Coverage</h2>
    <div class="qscore" style="margin-bottom:18px"><div class="ring" style="--p:72;width:54px;height:54px"><span class="rn" style="font-size:15px">72%</span></div>
      <div class="qt"><h4>Topical Coverage · 72%</h4><p>3 semantic concepts are missing that competing pages rank on.</p></div></div>
    <div class="kip-two" style="margin-bottom:14px">
      <div>
        <div class="kip-row"><span class="kip-k">Entities</span><span class="kip-vt">12 detected</span></div>
        <div class="kip-row"><span class="kip-k">Parent topic</span><span class="kip-vt">AI Restaurant Software</span></div>
        <div class="kip-row"><span class="kip-k">Related concepts</span><span class="kip-vt">9 covered / 12 total</span></div>
      </div>
      <div>
        <div class="kip-row"><span class="kip-k">Missing</span><span class="kip-vt" style="color:var(--warn)">ROI section</span></div>
        <div class="kip-row"><span class="kip-k">Missing</span><span class="kip-vt" style="color:var(--warn)">Integration guide</span></div>
        <div class="kip-row"><span class="kip-k">Missing</span><span class="kip-vt" style="color:var(--warn)">Comparison table</span></div>
      </div>
    </div>
    <button class="b b-dark" onclick="this.textContent='✓ 3 sections added to outline'">Add missing sections to outline</button>
  </div>`,

  eeat:()=>`<div class="editor-doc">
    <h2 style="margin-top:0">E-E-A-T Score</h2>
    <div class="qscore" style="margin-bottom:18px"><div class="ring" style="--p:94;width:54px;height:54px"><span class="rn" style="font-size:15px">94</span></div>
      <div class="qt"><h4>E-E-A-T Score · 94 / 100</h4><p>Excellent. Two improvements: add author bio and cite one academic source.</p></div></div>
    <div class="checklist">${[['Experience: practical examples included',1],['Expertise: expert sources cited',1],['Authoritativeness: original data referenced',1],['Trustworthiness: sources visible',1],['Author bio present',0],['Academic source cited',0]].map(c=>`<div class="check"><span class="cb ${c[1]?'y':'n'}">${c[1]?'✓':'!'}</span> ${c[0]}</div>`).join('')}</div>
    <div class="gap-alert" style="margin-top:14px"><span class="ic">⚡</span><div>Add an author bio section. AGNUS can generate a template.<button class="b b-line b-sm" style="margin-left:8px" onclick="this.textContent='Bio template added ✓'">Add author bio</button></div></div>
  </div>`,

  preview:()=>`<div class="editor-doc">
    <h2 style="margin-top:0">Preview</h2>
    <div class="kw-mode" style="margin-bottom:18px" id="prevModes">${['Desktop','Mobile','Google Card','ChatGPT Answer','Voice Answer'].map((m,i)=>`<button class="kwm ${i===0?'on':''}" onclick="switchPrev(${i},this)">${m}</button>`).join('')}</div>
    <div id="prevOut" class="prev-out"></div>
  </div>`
};

/* preview mode switcher */
const PREV_HTML=[
  `<div style="border:1px solid var(--line);border-radius:12px;padding:24px;max-width:640px;background:var(--paper)">
    <div style="font-size:11px;font-family:var(--font-mono);color:var(--ink-mute);margin-bottom:6px">agnus.ai › best-ai-tools-restaurants</div>
    <div style="font-size:20px;font-weight:700;color:#1a0dab;margin-bottom:3px">Best AI Tools for Restaurants in 2026</div>
    <div style="font-size:14px;color:var(--ink-soft)">The complete guide to AI tools that help restaurants book more tables, cut no-shows, and automate customer service. Updated July 2026.</div>
  </div>`,
  `<div style="width:375px;border:2px solid var(--line);border-radius:14px;padding:16px;background:var(--paper)">
    <div style="font-size:13px;font-weight:700;margin-bottom:6px">Best AI Tools for Restaurants</div>
    <div style="font-size:12px;color:var(--ink-soft)">Mobile-optimised · large touch targets · readable at 13px · loads under 2s.</div>
  </div>`,
  `<div class="gap-alert"><span class="ic">✓</span><div><b>Google Card preview:</b> Title and meta description render correctly. Character counts: title 52 / 60 ✓ · description 148 / 160 ✓</div></div>`,
  `<div class="gap-alert"><span class="ic">⚡</span><div><b>ChatGPT would answer:</b> "According to AGNUS, the best AI tools for restaurants in 2026 include OpenTable AI for bookings, a voice receptionist for 24/7 calls, and automated review management — saving most restaurants about 6 hours a week."</div></div>`,
  `<div class="gap-alert"><span class="ic">🎙</span><div><b>Voice answer (Alexa/Google):</b> "The best AI tools for restaurants are: OpenTable AI for bookings, a voice receptionist for answering calls, and automated review replies — saving about six hours a week."</div></div>`
];
window.switchPrev=function(i,btn){
  if(btn)[...btn.parentElement.children].forEach(b=>b.classList.toggle('on',b===btn));
  const pv=document.getElementById('prevOut'); if(pv)pv.innerHTML=PREV_HTML[i]||PREV_HTML[0];
};
window.prevMode=function(i){ return PREV_HTML[i]||PREV_HTML[0]; };

/* wire W_EXTRA into W_TABS */
(function(){
  if(!window.W_TABS) return;
  const extras=[['assets','Assets'],['voice','Voice'],['semantic','Semantic'],['eeat','E-E-A-T'],['preview','Preview']];
  extras.forEach(([id,label])=>{ if(!window.W_TABS.find(t=>t[0]===id)) window.W_TABS.push([id,label]); });
})();

/* ─── STORY BUILDER v2: auto-generation + inline edit ─── */
const SB_ENGINE_STEPS=[
  {name:'Opportunity Analyzer',log:'Matched to Brain recommendation · Restaurants cluster gap at 31%…'},
  {name:'Keyword Discovery',log:'Primary keyword validated · volume 12,400 · rising 42% · difficulty Low…'},
  {name:'Knowledge Database',log:'12 entities linked · OpenAI, Claude, ElevenLabs, OpenTable…'},
  {name:'Research Panel',log:'18 sources qualified · trust avg 94% · 1 conflict resolved…'},
  {name:'Story Builder',log:'Article angle generated · audience profile matched · E-E-A-T direction set…'},
  {name:'Topic Clusters',log:'Cluster gap identified · Restaurants 31% → 47% after this article…'},
  {name:'Monetization Engine',log:'Affiliate opportunities: OpenTable AI, ChatGPT Plus, Canva Pro · est. €180/mo…'}
];

const SB_OUTPUTS={
  opportunity:'Best AI Tools for Restaurants · Score 9.2 · Restaurants cluster',
  keyword:'best AI tools for restaurants · 12,400/mo · Rising 42%',
  audience:'Restaurant owners · SMB operators · non-technical',
  intent:'Commercial Investigation — comparing tools before purchase',
  angle:'Only guide targeting independent restaurant owners specifically',
  competitors:'Backlinko, HubSpot, Zapier — all missing the independent restaurant angle',
  entities:'OpenAI, ElevenLabs, OpenTable AI, Claude, Canva',
  questions:'"What AI tools help restaurants?" · "Can AI reduce no-shows?" · 4 more PAA',
  monetization:'Affiliate (OpenTable, ChatGPT Plus, Canva) + Marketplace Collection · €180/mo',
  seo:'H1 set · meta written · slug /best-ai-tools-restaurants-2026 · schema planned',
  internalLinks:'6 link targets identified in existing content',
  eeeat:'Add practical ROI example · cite Reuters · name Jean-Daniel as author'
};

/* patch the Story Builder view's Auto-Run buttons to use the new animation */
const _sbOldInit = window.VIEW_INIT && window.VIEW_INIT.story;
if(window.VIEW_INIT){
  window.VIEW_INIT.story = function(){
    if(_sbOldInit) _sbOldInit();
  };
}

window.runStoryAuto=function(btn, stepId){
  if(!btn) return;
  const container=btn.closest('.sb-workspace')||btn.closest('.step-card-body')||document.querySelector('#sbWorkspace');
  if(!container) return;
  btn.disabled=true; btn.textContent='Running…';
  /* find or create output panel */
  let out=container.querySelector('.sb-auto-out');
  if(!out){ out=document.createElement('div'); out.className='sb-auto-out step-outputs-panel'; btn.after(out); }

  out.innerHTML='<div class="ss-label">⚡ Running engines</div>'
    +'<div class="eng-chain" id="sbChain">'+SB_ENGINE_STEPS.map((e,i)=>`<div class="ec-step ec-pending" id="sbe${i}"><span class="ec-dot"></span>${e.name}</div>`).join('')+'</div>'
    +'<div class="sop-log" id="sbLog"></div>';

  SB_ENGINE_STEPS.forEach((e,i)=>{
    setTimeout(()=>{
      const el=document.getElementById('sbe'+i); if(el)el.className='ec-step ec-running';
      setTimeout(()=>{
        if(el)el.className='ec-step ec-done';
        const log=document.getElementById('sbLog'); if(log)log.innerHTML+=`<div class="spl-row">▷ ${e.log}</div>`;
      },340);
    },i*520);
  });

  setTimeout(()=>{
    const keys=Object.keys(SB_OUTPUTS);
    out.innerHTML+='<div class="ss-label" style="margin-top:14px">✦ GENERATED OUTPUT</div>'
      +'<div class="sop-grid">'+keys.map(k=>`<div class="sop-row"><span class="sop-k">${k}</span><span class="sop-v">${SB_OUTPUTS[k]}</span></div>`).join('')+'</div>'
      +'<div class="row" style="gap:10px;margin-top:14px">'
      +'<button class="b b-gold" onclick="GO(\'writer\')">Send to AI Writer →</button>'
      +'<button class="b b-line">Edit any field</button></div>';
    btn.textContent='✓ Complete'; btn.disabled=false;
  }, SB_ENGINE_STEPS.length*520+400);
};

/* ─── Story Builder inline editing ─── */
window.sbInlineEdit=function(field, currentVal, labelEl){
  /* check if already editing */
  const existing=labelEl.parentElement.querySelector('.sb-ie'); if(existing){existing.remove();return;}
  const ie=document.createElement('div'); ie.className='sb-ie inline-edit-panel';
  ie.innerHTML=`<div class="ie-label">Edit: ${field}</div>
    <input type="text" class="ie-input" id="sbief" value="${currentVal}" placeholder="${field}…">
    <div class="ie-acts">
      <button class="b b-gold b-sm" onclick="sbSaveEdit('${field}',this)">✓ Accept</button>
      <button class="b b-ghost b-sm" onclick="this.closest('.sb-ie').remove()">Discard</button>
    </div>`;
  labelEl.parentElement.appendChild(ie);
  const inp=ie.querySelector('#sbief'); if(inp){inp.focus();inp.select();}
};
window.sbSaveEdit=function(field, btn){
  const inp=btn.closest('.sb-ie').querySelector('#sbief'); if(!inp)return;
  /* update displayed value in the sidebar */
  const rows=document.querySelectorAll('.sb-sidebar-row');
  rows.forEach(r=>{ if(r.querySelector('.ss-k')&&r.querySelector('.ss-k').textContent===field){ const v=r.querySelector('.ss-v'); if(v)v.textContent=inp.value; } });
  btn.closest('.sb-ie').remove();
};

/* make sidebar rows editable on click */
document.addEventListener('click',function(e){
  const row=e.target.closest('.sb-sidebar-row');
  if(!row||e.target.closest('.sb-ie'))return;
  const k=row.querySelector('.ss-k'); const v=row.querySelector('.ss-v');
  if(k&&v) window.sbInlineEdit(k.textContent, v.textContent, v);
});

/* ─── CSS additions (injected inline) ─── */
const styleEl=document.createElement('style');
styleEl.textContent=`
.rs-auto-chain{ background:var(--paper-warm); border:1px solid var(--line); border-radius:12px; padding:16px 18px; margin:12px 0; animation:fade .2s ease both; }
.sb-auto-out{ margin-top:12px; }
.sb-ie{ margin-top:10px; }
.sb-sidebar-row{ cursor:pointer; transition:background .15s ease; border-radius:7px; padding:2px 4px; margin:-2px -4px; }
.sb-sidebar-row:hover{ background:var(--paper-warm); }
.prev-out{ min-height:80px; }
.prev-out .gap-alert{ margin:0; }
`;
document.head.appendChild(styleEl);

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
  progress:0, currentStep:1, estTime:'22 min', nextAction:'Discover a keyword'
};
var activeStep = window._activeStep = 0;

/* ── STEPS ── */
var STEPS=[
  {num:1,tag:'FIND',name:'Discover',mission:'Type your topic below — everything flows from it.',engine:'Keyword Discovery',connectedTo:['Keyword Discovery','Knowledge Database','Topic Clusters','Entity Manager'],
   autoActions:[{id:'discover',label:'Discover',engines:['Keyword Discovery','Knowledge Database','Topic Clusters','Entity Manager'],log:['Keyword Discovery scanned 53 sources…','Knowledge Database matched entities…','Topic Clusters found cluster gap…','Entity Manager linked affiliate programs…'],outputs:{}}],
   manualActions:[{id:'edit-kw',label:'Edit keyword',type:'text',field:'keyword',placeholder:'e.g. classic cars Fiat 500'}]},
  {num:2,tag:'DATA',name:'Research',mission:'Research Panel scans every connected source and produces verified data. Nothing gets edited here — it feeds Strategy.',engine:'Research Panel',connectedTo:['Knowledge Sources','Knowledge Database','Knowledge Graph','Source Scoring','Entity Manager','Intelligence Feed'],
   autoActions:[{id:'run-research',label:'Run Research',engines:['Knowledge Sources (53)','Knowledge Database','Knowledge Graph','Source Scoring','Entity Manager','Intelligence Feed'],log:['Knowledge Sources scanned…','Official sources verified…','Knowledge Graph extracted entities…','Source Scoring: avg trust 94%…'],outputs:{}},{id:'refresh',label:'Refresh Sources',engines:['Knowledge Sources'],log:['Re-scanning sources…'],outputs:{}}],
   manualActions:[{id:'add-source',label:'Add source',type:'url',field:'newSource',placeholder:'https://example.com'},{id:'edit-res',label:'Edit research notes',type:'textarea',field:'resNotes',placeholder:'Add context…'}]},
  {num:3,tag:'PLAN',name:'Article Strategy',mission:'Story Builder turns research into a clear strategic direction before writing begins.',engine:'Story Builder',connectedTo:['Story Builder','Knowledge Database','Topic Clusters'],
   autoActions:[{id:'gen-strategy',label:'Generate Strategy',engines:['Story Builder','Knowledge Database','Topic Clusters'],log:['Story Builder reading research…','Audience profile matched…','Topic Clusters identified gap…','E-E-A-T direction set…'],outputs:{}}],
   manualActions:[{id:'edit-angle',label:'Edit article angle',type:'text',field:'angle',placeholder:'Your unique angle…'},{id:'edit-audience',label:'Edit target audience',type:'text',field:'audience',placeholder:'Who is this for?'}]},
  {num:4,tag:'BRIEF',name:'Article Brief',mission:'Translate strategy into a detailed brief. Every H2 is a content contract — purpose, word count, entities, affiliate placement and internal link defined before writing begins.',engine:'Brief Builder',connectedTo:['Story Builder','Research Panel','Topic Clusters','Knowledge Database'],
   autoActions:[{id:'gen-brief',label:'Generate Brief',engines:['Brief Builder','Story Builder','Knowledge Database'],log:['Brief Builder reading strategy + audience profile…','H2 structure generated for '+(_lastKw||'this topic')+'…','Word allocation set per section (total ~2,400 words)…','Affiliate placements + internal links mapped…'],outputs:{}}],
   manualActions:[{id:'add-h2',label:'Add H2',type:'text',field:'newH2',placeholder:'New section heading…'}]},
  {num:5,tag:'BUILD',name:'Blueprint',mission:'Configure the AI writer. Writing style, prompt, schema, images, word allocation.',engine:'Blueprint Engine',connectedTo:['Blueprint Library','Prompt Library','AI Templates'],
   autoActions:[{id:'gen-blueprint',label:'Generate Blueprint',engines:['Blueprint Engine','Prompt Library','Blueprint Library'],log:['Blueprint Engine reading brief…','Prompt Library selected…','Schema plan set…','Image plan set…'],outputs:{}}],
   manualActions:[{id:'edit-prompt',label:'Edit prompt',type:'textarea',field:'prompt',placeholder:'Custom writing instructions…'}]},
  {num:6,tag:'WRITE',name:'Create Article',mission:'Generate the full article from the approved blueprint.',engine:'AI Writer',connectedTo:['AI Writer','Prompt Library','Knowledge Database'],
   autoActions:[{id:'generate',label:'Generate Full Article',engines:['AI Writer (GPT-5)','Prompt Library','Knowledge Database'],log:['AI Writer reading blueprint…','Generating Introduction…','Generating core sections…','Generating FAQs and metadata…'],outputs:{}}],
   manualActions:[{id:'write',label:'Open AI Writer → pre-loaded',type:'link',target:'writer'}]},
  {num:7,tag:'ENRICH',name:'Enrich Article',mission:'Run all enrichment engines — SEO, E-E-A-T, Semantic, Voice, AI Search, Links, Images, Schema.',engine:'8 Enrichment Engines',connectedTo:['SEO Analyzer','Trust Engine','Semantic Engine','Voice Engine','AI Search Optimizer','Knowledge Graph','Image Engine','Schema Engine'],
   enrichModules:[{id:'seo',name:'SEO',engine:'SEO Analyzer',output:['Keyword density','Title','Slug','Description']},{id:'eeat',name:'E-E-A-T',engine:'Trust Engine',output:['Experience','Expertise','Authority','Trust']},{id:'semantic',name:'Semantic',engine:'Semantic Engine',output:['Entities','Related concepts']},{id:'voice',name:'Voice',engine:'Voice Engine',output:['Voice questions','Featured snippet']},{id:'ai',name:'AI Search',engine:'AI Search Optimizer',output:['ChatGPT ready','Gemini ready']},{id:'links',name:'Internal Links',engine:'Knowledge Graph',output:['Link suggestions']},{id:'images',name:'Images',engine:'Image Engine',output:['Alt text','Compression']},{id:'schema',name:'Schema',engine:'Schema Engine',output:['Article','FAQ','HowTo']}],
   autoActions:[{id:'run-all',label:'Run All Engines',engines:['All 8 engines'],log:['Running all engines…'],outputs:{}}],
   manualActions:[{id:'edit-enrich',label:'Edit any output',type:'link',target:'writer'}]},
  {num:8,tag:'CHECK',name:'Verify',mission:'Confirm every enrichment passed.',engine:'Verification Engine',connectedTo:['All Enrichment Engines','Human Review','Publishing Calendar'],
   autoActions:[{id:'verify',label:'Run Verification',engines:['Verification Engine'],log:['Running all checks…','8 of 8 complete…','No failures detected…'],outputs:{}}],
   manualActions:[{id:'approve',label:'Manually approve',type:'link',target:'review'}]},
  {num:9,tag:'VIEW',name:'Preview',mission:'See the final experience in six preview modes before publishing.',engine:'Preview Engine',connectedTo:['Preview Engine','WordPress','Ghost','Webflow'],
   autoActions:[{id:'gen-preview',label:'Generate Previews',engines:['Preview Engine'],log:['Generating desktop…','Generating mobile…','Generating Google card…','Generating AI search answer…'],outputs:{}}],
   manualActions:[{id:'share',label:'Copy preview link',type:'link',target:null}]},
  {num:10,tag:'PUBLISH',name:'Publish',mission:'Push to your destination.',engine:'Publishing Engine',connectedTo:['Publishing Calendar','WordPress','Ghost','Webflow','Content Archive'],
   autoActions:[{id:'publish-now',label:'Publish Now',engines:['Publishing Engine','CMS Connector'],log:['Connecting to CMS…','Uploading article…','Setting canonical URL…','Updating sitemap…'],outputs:{}},{id:'schedule',label:'Schedule',engines:['Publishing Calendar'],log:['Opening calendar…'],outputs:{}}],
   manualActions:[{id:'export-html',label:'Export HTML',type:'link',target:null}]},
  {num:11,tag:'TRACK',name:'Performance',mission:'Monitor the living asset.',engine:'Analytics Engine',connectedTo:['Google Search Console','Google Analytics','Content Archive','AI Search Monitors'],
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
        +'<button class="b b-gold kw-discover-btn" id="kwDiscoverBtn" '+(kw?'':'disabled')+' onclick="runAuto(0,0)">Discover &rarr;</button></div>'
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
  return '<div class="page-h"><div class="eyebrow"><span class="ix">&#9670;</span> Article Pipeline &middot; Mission Control</div>'
    +'<h1>Every article is a guided mission.</h1>'
    +'<p style="max-width:64ch;color:var(--ink-soft)">Type a keyword in Step 1 and watch AGNUS guide you through 11 steps to a published article.</p>'
    +'<div class="row" style="gap:10px;margin-top:10px"><button class="b b-dark" onclick="openCreate()">+ New mission</button><button class="b b-line">See all articles</button></div></div>'
    +missionHeader()
    +'<div class="pipeline-steps" id="pipelineSteps">'+(window._consoleOpen?compactStepsList():STEPS.map(function(s,i){return stepCard(s,i);}).join(''))+'</div>';
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
  if(stepIdx===1) chainLogs=['Knowledge Sources scanned 53 sources for "'+kw+'"…',(t.car?'Hagerty, eBay Motors, FIAT Archive, Reuters verified…':t.ai?'OpenAI, Anthropic, Google, Reuters, G2 verified…':'Primary sources verified…'),'Knowledge Graph extracted entities for "'+kw+'"…','Source Scoring: avg trust 94%…'];
  else if(stepIdx===2) chainLogs=['Story Builder reading research for "'+kw+'"…','Audience profile matched…','Topic Clusters identified gap…','E-E-A-T direction set…'];

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
      window._agnusMission.progress=8; window._agnusMission.nextAction='Review Discovery results';
      activeMission=window._agnusMission;
      var mhT=document.querySelector('.mcm-title'); if(mhT)mhT.textContent=kw;
      var mhG=document.querySelector('.mcm-goal'); if(mhG)mhG.textContent=window._agnusMission.goal;
      /* clear stale research/strategy outputs */
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
      var sc=document.getElementById('sc0'); if(sc)sc.className='step-card step-done';
      activeStep=1; window._activeStep=1;
      /* if cluster mode, show cluster architecture */
      if(window._missionType==='cluster'){
        var clusterArch=buildClusterArchitecture(kw,t);
        var cpEl=document.getElementById('clusterPlanner');
        if(!cpEl){ cpEl=document.createElement('div'); cpEl.id='clusterPlanner'; cpEl.className='step-section'; var bdy2=document.querySelector('#sc0 .step-card-body'); if(bdy2)bdy2.insertBefore(cpEl,bdy2.querySelector('.step-continue')); }
        cpEl.innerHTML='<div class="ss-label">CLUSTER ARCHITECTURE</div>'+clusterArch;
      }

    } else if(stepIdx===1){
      /* Research: read keyword from Discovery output */
      var rKw=window._lastKw||kw||''; var rt=detectType(rKw);
      html=discPanel(rKw+' &mdash; Research Results',
        [['Sources','18 verified',''],['Official','6',''],['Research','5',''],['Community','7',''],['Avg trust','94%',''],['Conflicts',rt.car?'0':'1','']],
        [{icon:'&#9675;',label:'Competitor Analysis',body:'<div class="ds-comp-list">'+(rt.car?[rKw+' &mdash; Hagerty missing buyer guide','&mdash; AutoTrader no '+rKw+' focus','&mdash; Classic.com no SEO strategy']:rt.ai?['Backlinko &mdash; missing AI angle','HubSpot &mdash; generic coverage','Zapier &mdash; no specific use case']:rt.food?['Backlinko &mdash; missing restaurant angle','HubSpot &mdash; generic']:['Top competitors identified']).map(function(c){var p=c.split('&mdash;'); return '<div class="ds-comp"><div class="ds-comp-n">'+(p[0]||'Competitor').trim()+'</div><div class="ds-comp-g">Gap: '+(p[1]||'missing coverage').trim()+'</div><div class="ds-comp-a">&#10003; Your advantage: depth + specificity</div></div>';}).join('')+'</div>'},
         {icon:'?',label:'People Also Ask',body:'<div class="ds-paa-list">'+(rt.car?['"How much is a '+rKw+' worth?"','"What to look for when buying a '+rKw+'?"','"Is the '+rKw+' reliable?"','"Where can I find '+rKw+' parts?"']:rt.ai?['"What is the best '+rKw+'?"','"Is '+rKw+' free?"','"How does '+rKw+' work?"']:['"What is '+rKw+'?"','"How to get started with '+rKw+'?"']).map(function(q){return '<div class="ds-paa-row"><span class="ds-paa-q">'+q+'</span><span class="pill ghost">Snippet available</span></div>';}).join('')+'</div>'},
         {icon:'&#9654;',label:'Voice Search',body:'<div class="ds-grid"><div class="ds-row"><span class="ds-k">Top question</span><span class="ds-v">'+(rt.car?'"What should I check before buying a '+rKw+'?"':'"How does '+rKw.split(' ').slice(0,3).join(' ')+' work?"')+'&mdash; high demand</span></div><div class="ds-row"><span class="ds-k">Snippet</span><span class="ds-v" style="color:var(--success)">&#10003; Unowned &mdash; available</span></div></div>'},
         {icon:'&#9670;',label:'Entities Detected',body:'<div class="ds-grid">'+(rt.car?['Fiat','Alfa Romeo','eBay Motors','Bring a Trailer','Hagerty']:rt.ai?['OpenAI','Anthropic','Google','Claude','ChatGPT']:rt.food?['OpenTable','ElevenLabs','Toast','Square']:['Key entities extracted']).map(function(e){return '<div class="ds-row"><span class="ds-k">Entity</span><span class="ds-v">'+e+'</span></div>';}).join('')+'</div>'},
         {icon:'&#10003;',label:'Sources & Trust',body:'<div class="ds-grid"><div class="ds-row"><span class="ds-k">Official</span><span class="ds-v">'+(rt.car?'Hagerty, eBay Motors, FIAT Archive, Reuters':rt.ai?'OpenAI, Anthropic, Google, Reuters':'Industry primary sources')+'</span></div><div class="ds-row"><span class="ds-k">Conflicts</span><span class="ds-v" style="color:'+(rt.car?'var(--success)':'var(--warn)')+'">'+( rt.car?'0 — all sources agree':'1 — resolved via official source')+'</span></div><div class="ds-row"><span class="ds-k">Stats</span><span class="ds-v">'+(rt.car?'Classic car market +22% in EU 2025 (Hagerty)':rt.ai?'AI adoption +38% YoY (McKinsey)':'Industry data collected')+'</span></div></div>'},
         {icon:'&#9650;',label:'Research Completeness',body:'<div class="ds-grid"><div class="ds-row"><span class="ds-k">Overall</span><span class="ds-v" style="color:var(--success);font-weight:700">94%</span></div><div class="ds-row"><span class="ds-k">Official docs</span><span class="ds-v">&#10003; Covered</span></div><div class="ds-row"><span class="ds-k">Reviews</span><span class="ds-v">&#10003; Covered</span></div><div class="ds-row"><span class="ds-k">Academic</span><span class="ds-v" style="color:var(--warn)">! Missing</span></div></div>'}],
        '<div class="disc-deep"><button class="b b-line" onclick="GO(\'research\')">Open Research Panel &rarr;</button></div>'
      );

    } else if(stepIdx===2){
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

    } else if(stepIdx===3){
      /* Article Brief: content contract per section */
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

    } else if(stepIdx===4){
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

    } else if(stepIdx===6){
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
    /* scroll to result + reset UI */
    setTimeout(function(){
      existing.scrollIntoView({behavior:'smooth',block:'nearest'});
      var discBtn2=document.getElementById('kwDiscoverBtn');
      if(discBtn2){ discBtn2.textContent='Discover →'; discBtn2.disabled=false; discBtn2.style.opacity=''; }
      var sc0h=document.querySelector('#sc0 .step-card-head');
      if(sc0h) sc0h.style.boxShadow='';
      /* add a clear step-aware done banner */
      var stepNames={0:'Discovery',1:'Research',2:'Strategy',3:'Brief',4:'Blueprint',5:'Article generation',6:'Enrichment'};
      var doneBanner=document.createElement('div');
      doneBanner.className='disc-done-banner';
      if(window._consoleOpen && stepIdx<STEPS.length-1){
        doneBanner.innerHTML='&#10003; '+(stepNames[stepIdx]||'Step')+' complete &mdash; advancing to '+STEPS[stepIdx+1].name+' in <span id="advCount">3</span>s &nbsp;<button class="b b-ghost b-sm" onclick="cancelAutoAdvance()">Stay here</button>';
      } else {
        doneBanner.innerHTML='&#10003; '+(stepNames[stepIdx]||'Step')+' complete &mdash; expand any tab below to see the full analysis';
      }
      if(!existing.previousElementSibling||!existing.previousElementSibling.classList.contains('disc-done-banner')){
        existing.parentNode.insertBefore(doneBanner, existing);
      }
      if(window._consoleOpen && stepIdx<STEPS.length-1){
        if(window._advTimer){ clearInterval(window._advTimer); window._advTimer=null; }
        var n=3; var cel=document.getElementById('advCount');
        var timerId=setInterval(function(){
          n--; var el=document.getElementById('advCount'); if(el)el.textContent=n;
          if(n<=0){ clearInterval(timerId); if(window._advTimer===timerId) window._advTimer=null; consoleNext(); }
        },1000);
        window._advTimer=timerId;
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
    +'<div class="mc-shell">'
    +'<div class="mc-rail" id="mcRail"></div>'
    +'<div class="mc-body">'
    +'<div class="mc-topbar"><div class="mc-dots" id="mcDots"></div><button class="mc-close" onclick="closeConsole()">&#215;</button></div>'
    +'<div class="mc-main" id="mcMain"></div>'
    +'<div class="mc-bottombar"><button class="b b-ghost" id="mcBack" onclick="consolePrev()">&larr; Back</button><div class="grow"></div><button class="b b-gold" id="mcNext" onclick="consoleNext()">Continue &rarr;</button></div>'
    +'</div></div>';
  document.body.appendChild(wrap);
}
window.openConsoleAtStep=function(idx){
  ensureConsoleDom();
  activeStep=idx; window._activeStep=idx;
  window._consoleOpen=true;
  GO('pipeline'); /* re-render page in compact mode behind the blur */
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
function consoleRenderMain(){
  ensureConsoleDom();
  var rail=document.getElementById('mcRail'); var dots=document.getElementById('mcDots');
  var main=document.getElementById('mcMain'); if(!rail||!main) return;
  rail.innerHTML=STEPS.map(function(s,i){
    var isActive=i===activeStep, isDone=i<activeStep;
    var svgIcon=window.STEP_ICONS&&window.STEP_ICONS[s.tag]?window.STEP_ICONS[s.tag]:'';
    return '<div class="mc-rail-item '+(isActive?'on':'')+(isDone?' done':'')+'" onclick="consoleJump('+i+')">'
      +'<span class="mri-ic">'+svgIcon+'</span><span class="mri-n">'+s.name+'</span>'
      +(isDone?'<span class="mri-check">&#10003;</span>':'')+'</div>';
  }).join('');
  dots.innerHTML=STEPS.map(function(s,i){ return '<span class="mc-dot '+(i===activeStep?'on':i<activeStep?'done':'')+'"></span>'; }).join('');
  var scoreBar=document.getElementById('mcScores');
  if(!scoreBar){ scoreBar=document.createElement('div'); scoreBar.id='mcScores'; scoreBar.className='mc-scores'; dots.after(scoreBar); }
  var sc=computeSeoGeo();
  scoreBar.innerHTML='<span class="score-pill seo" onclick="toggleScorePop(\'seo\',this)">SEO <b>'+sc.seo+'</b></span><span class="score-pill geo" onclick="toggleScorePop(\'geo\',this)">GEO <b>'+sc.geo+'</b></span>';
  var fadeOld=main.firstElementChild;
  var html=stepCard(STEPS[activeStep], activeStep);
  if(fadeOld){ main.style.opacity='0'; }
  setTimeout(function(){
    main.innerHTML=html;
    main.style.opacity='1';
    enhanceTabs(main);
    var back=document.getElementById('mcBack'); if(back) back.style.visibility=activeStep===0?'hidden':'visible';
    var nxt=document.getElementById('mcNext'); if(nxt) nxt.textContent=activeStep<STEPS.length-1?'Continue \u2192':'Finish';
  }, fadeOld?120:0);
}
window.cancelAutoAdvance=function(){ if(window._advTimer){ clearInterval(window._advTimer); window._advTimer=null; } var el=document.querySelector('.disc-done-banner'); if(el)el.innerHTML='&#10003; Staying here &mdash; click Continue below when ready.'; };
window.consoleJump=function(idx){ cancelAutoAdvance(); activeStep=idx; window._activeStep=idx; consoleRenderMain(); };

/* ── SEO / GEO live score ── */
function computeSeoGeo(){
  var enrichCt=Object.keys(enrichDone||{}).length;
  var seo=10; var geo=10;
  var seoLeft=[]; var geoLeft=[];
  if(activeStep>=1){ seo+=15; } else { seoLeft.push(['Run Discovery to lock the target keyword',0]); }
  if(activeStep>=2){ geo+=15; } else { geoLeft.push(['Run Research to gather citable evidence',1]); }
  if(activeStep>=3){ seo+=10; geo+=10; } else { seoLeft.push(['Define Article Strategy (audience + intent)',2]); geoLeft.push(['Define Article Strategy (E-E-A-T direction)',2]); }
  if(activeStep>=4){ seo+=15; geo+=10; } else { seoLeft.push(['Generate the Article Brief (H2 structure)',3]); geoLeft.push(['Generate the Brief (FAQ + questions plan)',3]); }
  if(activeStep>=5){ seo+=15; geo+=15; } else { seoLeft.push(['Build the Blueprint (schema plan)',4]); geoLeft.push(['Build the Blueprint (semantic + voice plan)',4]); }
  if(enrichCt>0){ seo+=Math.min(20,enrichCt*3); geo+=Math.min(20,enrichCt*3); }
  if(enrichCt<8){ seoLeft.push(['Run all 8 Enrichment engines ('+enrichCt+'/8 done)',6]); geoLeft.push(['Run all 8 Enrichment engines ('+enrichCt+'/8 done)',6]); }
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

I.pipeline=function(){};
window._IK=window._IK||{};
window._IK.MISSIONS_V5=[{id:0,title:activeMission.title,step:activeStep,progress:activeMission.progress}];
})();
