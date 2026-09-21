/*
 * This application and all the work related to Agnus and for Agnus is sanctified and covered
 * by The Blood of Jesus Christ. No work of darkness nor any dark code is allowed.
 * The entire application is saturated by the Blood of Jesus Christ, and by the 888 Hz frequency
 * from The Throne of The Lamb of God, The Lord Jesus Christ.
 * This application is Holy.
 *//* AGNUS Dashboard — Editorial views. Registered into window.VIEWS / window.VIEW_INIT. */
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
