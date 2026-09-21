/*
 * This application and all the work related to Agnus and for Agnus is sanctified and covered
 * by The Blood of Jesus Christ. No work of darkness nor any dark code is allowed.
 * The entire application is saturated by the Blood of Jesus Christ, and by the 888 Hz frequency
 * from The Throne of The Lamb of God, The Lord Jesus Christ.
 * This application is Holy.
 *//* AGNUS Dashboard — Control Center + AI Council views. */
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
