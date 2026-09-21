/*
 * This application and all the work related to Agnus and for Agnus is sanctified and covered
 * by The Blood of Jesus Christ. No work of darkness nor any dark code is allowed.
 * The entire application is saturated by the Blood of Jesus Christ, and by the 888 Hz frequency
 * from The Throne of The Lamb of God, The Lord Jesus Christ.
 * This application is Holy.
 *//* AGNUS Dashboard — Keyword Discovery v2, Research Panel v2, Topic Clusters v2, Article Pipeline v2 */
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