/*
 * This application and all the work related to Agnus and for Agnus is sanctified and covered
 * by The Blood of Jesus Christ. No work of darkness nor any dark code is allowed.
 * The entire application is saturated by the Blood of Jesus Christ, and by the 888 Hz frequency
 * from The Throne of The Lamb of God, The Lord Jesus Christ.
 * This application is Holy.
 *//* AGNUS Dashboard — Phase 2 views: Brain, Story Builder, Coverage, Opportunity, Reports, Databases, Library. */
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
