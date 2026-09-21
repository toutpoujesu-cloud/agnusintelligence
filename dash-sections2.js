/*
 * This application and all the work related to Agnus and for Agnus is sanctified and covered
 * by The Blood of Jesus Christ. No work of darkness nor any dark code is allowed.
 * The entire application is saturated by the Blood of Jesus Christ, and by the 888 Hz frequency
 * from The Throne of The Lamb of God, The Lord Jesus Christ.
 * This application is Holy.
 *//* AGNUS Dashboard — Story Builder v2, AI Writer v2, Human Review, Publishing Calendar v2, Content Archive v2 */
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