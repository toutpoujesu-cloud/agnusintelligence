/*
 * This application and all the work related to Agnus and for Agnus is sanctified and covered
 * by The Blood of Jesus Christ. No work of darkness nor any dark code is allowed.
 * The entire application is saturated by the Blood of Jesus Christ, and by the 888 Hz frequency
 * from The Throne of The Lamb of God, The Lord Jesus Christ.
 * This application is Holy.
 *//* AGNUS Dashboard — Article Pipeline v5 (clean rebuild) */
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
    +'<div class="pipeline-steps" id="pipelineSteps">'+compactStepsList()+'</div>';
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
    +[['Open Brief',3],['View Outline',3],['See Keywords','keywords'],['Open Story Builder','story']]
      .map(function(q){return '<button class="mc2-qa" onclick="'+(typeof q[1]==='number'?'consoleJump('+q[1]+')':'GO(\''+q[1]+'\')')+'">'+q[0]+'</button>';}).join('')
    +'</div>';

  /* ── main workspace: reuse existing step body content, dark-wrapped ── */
  var main=document.getElementById('mcMain');
  main.style.opacity='0';
  setTimeout(function(){
    main.innerHTML=stepCard(STEPS[activeStep], activeStep);
    main.style.opacity='1';
    enhanceTabs(main);
  },80);

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

I.pipeline=function(){ if(!window._consoleOpen){ openConsoleAtStep(activeStep); } };
window._IK=window._IK||{};
window._IK.MISSIONS_V5=[{id:0,title:activeMission.title,step:activeStep,progress:activeMission.progress}];
})();
