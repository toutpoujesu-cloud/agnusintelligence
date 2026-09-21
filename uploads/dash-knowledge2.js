/*
 * This application and all the work related to Agnus and for Agnus is sanctified and covered
 * by The Blood of Jesus Christ. No work of darkness nor any dark code is allowed.
 * The entire application is saturated by the Blood of Jesus Christ, and by the 888 Hz frequency
 * from The Throne of The Lamb of God, The Lord Jesus Christ.
 * This application is Holy.
 *//* AGNUS Dashboard — Knowledge Sources v3, Source Scoring v2, Knowledge Database v2, Knowledge Graph v2 */
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
