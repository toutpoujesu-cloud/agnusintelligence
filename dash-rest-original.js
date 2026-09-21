/*
 * This application and all the work related to Agnus and for Agnus is sanctified and covered
 * by The Blood of Jesus Christ. No work of darkness nor any dark code is allowed.
 * The entire application is saturated by the Blood of Jesus Christ, and by the 888 Hz frequency
 * from The Throne of The Lamb of God, The Lord Jesus Christ.
 * This application is Holy.
 *//* AGNUS Dashboard — REST bundle (Knowledge, Control Center, Story Builder, extras) */

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
