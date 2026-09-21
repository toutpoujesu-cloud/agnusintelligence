/*
 * This application and all the work related to Agnus and for Agnus is sanctified and covered
 * by The Blood of Jesus Christ. No work of darkness nor any dark code is allowed.
 * The entire application is saturated by the Blood of Jesus Christ, and by the 888 Hz frequency
 * from The Throne of The Lamb of God, The Lord Jesus Christ.
 * This application is Holy.
 *//* AGNUS Dashboard — Extra AI Writer tabs + Story Builder v2 auto-generation + inline edit */
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
