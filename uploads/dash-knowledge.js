/*
 * This application and all the work related to Agnus and for Agnus is sanctified and covered
 * by The Blood of Jesus Christ. No work of darkness nor any dark code is allowed.
 * The entire application is saturated by the Blood of Jesus Christ, and by the 888 Hz frequency
 * from The Throne of The Lamb of God, The Lord Jesus Christ.
 * This application is Holy.
 *//* AGNUS Dashboard — KNOWLEDGE SYSTEM (intelligence layer).
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
