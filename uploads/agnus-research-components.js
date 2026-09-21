/*
 * This application and all the work related to Agnus and for Agnus is sanctified and covered
 * by The Blood of Jesus Christ. No work of darkness nor any dark code is allowed.
 * The entire application is saturated by the Blood of Jesus Christ, and by the 888 Hz frequency
 * from The Throne of The Lamb of God, The Lord Jesus Christ.
 * This application is Holy.
 *//* =====================================================================
   AGNUS RESEARCH · TRUST COMPONENT LAYER
   ---------------------------------------------------------------------
   Reusable components shared by every Research surface (homepage,
   article, topic, country, report).

   Two rules this file exists to enforce:
     1. Controlled vocabularies — research status and evidence authority
        are DATA STATES, never free text typed into markup.
     2. Provenance is structural — every claim-bearing component can say
        where it came from and how authoritative it is.

   All values here are DEMO data. In production these objects are
   populated from the AGNUS intelligence database. Shape is deliberate:
   it mirrors the intended entity model (Source, Claim, ResearchArticle,
   Obligation, Actor, Jurisdiction, ChangeEvent, ResearchVersion).
   ===================================================================== */

window.RS = (function () {

/* ═══════════ CONTROLLED VOCABULARIES ═══════════ */

/* Research status — the only four permitted states (directive §17) */
const STATUS = {
  current:  { label: 'Current',      cls: 'current',  note: 'Evidence reviewed. No known update currently requires revision.' },
  review:   { label: 'Under Review', cls: 'review',   note: 'A relevant source or regulatory development may affect this research.' },
  updated:  { label: 'Updated',      cls: 'updated',  note: 'Material revision recently completed.' },
  archived: { label: 'Archived',     cls: 'archived', note: 'Historical research retained but no longer current.' }
};

/* Evidence authority — describes the NATURE of evidence.
   Deliberately no numeric confidence scores (directive §6). */
const EVIDENCE = {
  primary:   { label: 'Primary source',         cls: 'ev-primary',  note: 'Legislation or official legal text.' },
  guidance:  { label: 'Official guidance',      cls: 'ev-guidance', note: 'Published by a regulator or competent authority.' },
  standard:  { label: 'Standard',               cls: 'ev-standard', note: 'Technical or governance standard.' },
  authored:  { label: 'Authoritative research', cls: 'ev-research', note: 'Peer-reviewed or institutional research.' },
  analysis:  { label: 'AGNUS analysis',         cls: 'ev-analysis', note: 'AGNUS interpretation — not legal text.' },
  emerging:  { label: 'Emerging practice',      cls: 'ev-emerging', note: 'Observed industry pattern, not a legal requirement.' },
  unverified:{ label: 'Under review',           cls: 'ev-unrev',    note: 'Awaiting source verification.' }
};

/* Implementation status — jurisdictions, NOT research.
   Kept separate so regulatory reality is never confused with
   editorial review state. */
const IMPL = {
  inforce:   { label: 'In force',    cls: 'impl-inforce' },
  phased:    { label: 'Phased',      cls: 'impl-phased' },
  progress:  { label: 'In progress', cls: 'impl-progress' },
  monitored: { label: 'Monitored',   cls: 'impl-monitored' }
};

/* Actors (directive §11) */
const ACTORS = ['Provider','Deployer','Importer','Distributor','Product manufacturer',
  'Authorised representative','GPAI provider','Public authority','Employer','High-risk system operator'];

/* Industries (directive §12) — metadata + filtering only for now */
const INDUSTRIES = ['Financial Services','Healthcare','Public Sector','Manufacturing','Legal',
  'Employment / HR','Education','Insurance','Critical Infrastructure','Technology / SaaS'];

/* ═══════════ HELPERS ═══════════ */
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const demo = () => '<span class="dq">demo</span>';

/* ═══════════ 1 · RESEARCH STATUS ═══════════ */
function statusPill(key, opts) {
  const s = STATUS[key] || STATUS.current;
  const t = (opts && opts.title) || s.note;
  return '<span class="rstatus ' + s.cls + '" title="' + esc(t) + '"><span class="sd"></span>' + s.label + '</span>';
}
function implPill(key) {
  const s = IMPL[key] || IMPL.monitored;
  return '<span class="impl-status ' + s.cls + '"><span class="sd"></span>' + s.label + '</span>';
}

/* ═══════════ 2 · EVIDENCE AUTHORITY LABEL ═══════════ */
function evidenceLabel(key) {
  const e = EVIDENCE[key] || EVIDENCE.analysis;
  return '<span class="ev-label ' + e.cls + '" title="' + esc(e.note) + '">' + e.label + '</span>';
}

/* ═══════════ 3 · ABOUT THIS RESEARCH ═══════════
   Combines source count, last source verification, last regulatory
   review, evidence basis and reviewer into one provenance panel. */
function aboutResearch(d) {
  const rows = [
    ['Status',                 statusPill(d.status), true],
    ['Jurisdiction',           esc(d.jurisdiction)],
    ['Primary sources',        esc(d.primarySources) + ' ' + demo()],
    ['Supporting sources',     esc(d.supportingSources) + ' ' + demo()],
    ['Last regulatory review', esc(d.lastRegulatoryReview)],
    ['Last source verification', esc(d.lastSourceVerification)],
    ['Evidence basis',         evidenceLabel(d.evidenceBasis), true],
    ['Reviewer',               esc(d.reviewer)]
  ];
  return '<div class="trustpanel about-research">'
    + '<div class="tp-h"><h4>About this research</h4>' + statusPill(d.status) + '</div>'
    + '<div class="tp-rows">'
    + rows.map(r => '<div class="tp-row"><span class="k">' + r[0] + '</span>'
        + '<span class="v' + (r[2] ? '' : ' soft') + '">' + r[1] + '</span></div>').join('')
    + '</div>'
    + '<div class="tp-disclaim">' + (STATUS[d.status] || STATUS.current).note
    + ' AGNUS Research is an independent publication and does not provide legal advice.</div>'
    + '</div>';
}

/* ═══════════ 4 · SOURCE COUNT (compact inline variant) ═══════════ */
function sourceCount(d) {
  const total = Number(d.primarySources) + Number(d.supportingSources);
  return '<span class="src-count">'
    + '<b>' + total + '</b> sources'
    + '<span class="sc-sep"></span><b>' + d.primarySources + '</b> primary'
    + '<span class="sc-sep"></span>Verified ' + esc(d.lastSourceVerification)
    + ' ' + demo() + '</span>';
}

/* ═══════════ 5 · WHAT CHANGED ═══════════
   Research articles are living objects — revisions are surfaced,
   never silently overwritten (directive §8). */
function whatChanged(changes, historyHref) {
  return '<section class="whatchanged" id="what-changed">'
    + '<div class="wc-h"><h3>What changed</h3>' + statusPill('updated') + '</div>'
    + '<div class="wc-list">'
    + changes.map(c =>
        '<div class="wc-item">'
        + '<div class="wc-date">' + esc(c.date) + '</div>'
        + '<div class="wc-body"><p>' + esc(c.summary) + '</p>'
        + (c.trigger ? '<span class="wc-trigger">Triggered by: ' + esc(c.trigger) + '</span>' : '')
        + '</div></div>').join('')
    + '</div>'
    + '<a class="wc-more" href="' + (historyHref || '#update-history') + '">View complete update history <span class="arr">→</span></a>'
    + '</section>';
}

/* ═══════════ 6 · UPDATE HISTORY (versioned) ═══════════ */
function updateHistory(versions) {
  return '<ul class="updates versioned">'
    + versions.map(v =>
        '<li><span class="ud">' + esc(v.date) + '</span>'
        + '<span class="ut"><b class="uv">v' + esc(v.version) + '</b> ' + esc(v.reason)
        + (v.sections ? '<span class="usec">Sections: ' + esc(v.sections) + '</span>' : '')
        + (v.reviewer ? '<span class="usec">Reviewed by ' + esc(v.reviewer) + '</span>' : '')
        + '</span></li>').join('')
    + '</ul>';
}

/* ═══════════ 7 · WHO THIS AFFECTS ═══════════ */
function whoAffects(d) {
  const grp = (label, items, cls) =>
    '<div class="wa-group"><span class="wa-k">' + label + '</span><div class="wa-chips">'
    + items.map(i => '<a class="wa-chip ' + (cls || '') + '" href="AGNUS - Research Topic.html">' + esc(i) + '</a>').join('')
    + '</div></div>';
  return '<section class="whoaffects" id="who-affects">'
    + '<h3>Who this affects</h3>'
    + '<div class="wa-groups">'
    + grp('Affected actors', d.actors, 'is-actor')
    + grp('System type', d.systemTypes)
    + grp('Jurisdiction', d.jurisdictions)
    + (d.industries && d.industries.length ? grp('Industries', d.industries) : '')
    + '</div>'
    + '<p class="wa-note">Actor and system-type classifications are taxonomy objects. ' + demo() + '</p>'
    + '</section>';
}

/* ═══════════ 8 · WHY IT MATTERS ═══════════
   Turns information into intelligence (directive §25). */
function whyItMatters(d) {
  const block = (k, v) => '<div class="wim-row"><span class="wim-k">' + k + '</span><p class="wim-v">' + esc(v) + '</p></div>';
  return '<section class="whyitmatters" id="why-it-matters">'
    + '<h3>Why it matters</h3>'
    + '<div class="wim-rows">'
    + block('What changed', d.whatChanged)
    + block('Why it matters', d.whyItMatters)
    + block('Who is affected', d.whoIsAffected)
    + block('What to do', d.whatToDo)
    + '</div></section>';
}

/* ═══════════ 9 · PRACTICAL ACTION ═══════════
   Governance guidance, explicitly separated from legal requirement. */
function practicalAction(steps) {
  return '<section class="practical" id="practical-action">'
    + '<div class="pa-h"><h3>What organizations should do</h3>' + evidenceLabel('analysis') + '</div>'
    + '<ol class="pa-list">'
    + steps.map((s, i) =>
        '<li><span class="pa-n">' + String(i + 1).padStart(2, '0') + '</span>'
        + '<div><b>' + esc(s.title) + '</b><span>' + esc(s.detail) + '</span></div></li>').join('')
    + '</ol>'
    + '<p class="pa-note">Practical governance guidance from AGNUS. This is not legal advice and does not itself establish compliance.</p>'
    + '</section>';
}

/* ═══════════ 10 · TRACK THIS TOPIC ═══════════
   The promise is not "follow a category" — it is
   "tell me when something meaningful changes" (directive §15). */
const TRACK_KEY = 'agnus:research:tracked';
function _tracked() {
  try { return JSON.parse(localStorage.getItem(TRACK_KEY) || '[]'); } catch (e) { return []; }
}
function _saveTracked(list) {
  try { localStorage.setItem(TRACK_KEY, JSON.stringify(list)); } catch (e) {}
}
function trackButton(subject, opts) {
  const o = typeof opts === 'string' ? { block: opts === 'block' } : (opts || {});
  const on = _tracked().indexOf(subject) > -1;
  return '<button class="track-btn' + (on ? ' on' : '') + (o.block ? ' block' : '')
    + '" data-track="' + esc(subject) + '" onclick="RS.toggleTrack(this)" aria-pressed="' + on + '">'
    + '<span class="tb-star">' + (on ? '★' : '☆') + '</span>'
    + '<span class="tb-label">' + (on ? 'Tracking' : 'Track') + ' ' + esc(subject) + '</span>'
    + '</button>';
}
function toggleTrack(btn) {
  const subject = btn.dataset.track;
  const list = _tracked();
  const i = list.indexOf(subject);
  const on = i > -1;
  if (on) list.splice(i, 1); else list.push(subject);
  _saveTracked(list);
  btn.classList.toggle('on', !on);
  btn.setAttribute('aria-pressed', String(!on));
  btn.querySelector('.tb-star').textContent = !on ? '★' : '☆';
  btn.querySelector('.tb-label').textContent = (!on ? 'Tracking ' : 'Track ') + subject;
  if (!on) toast('Tracking “' + subject + '”. You’ll be alerted when sources, deadlines or research change. Alerts require an AGNUS account.');
  else toast('No longer tracking “' + subject + '”.');
}
function toast(msg) {
  let t = document.getElementById('rsToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'rsToast'; t.className = 'rs-toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove('show'), 4200);
}

/* ═══════════ 11 · EVIDENCE CALLOUTS ═══════════
   Distinguishes law from interpretation (directive §18). */
function callout(kind, opts) {
  const o = opts || {};
  const map = {
    legal:    { cls: 'co-legal',    k: 'Legal text',       ev: 'primary'  },
    guidance: { cls: 'co-guidance', k: 'Official guidance', ev: 'guidance' },
    standard: { cls: 'co-standard', k: 'Standard',          ev: 'standard' },
    analysis: { cls: 'co-analysis', k: 'AGNUS analysis',    ev: 'analysis' },
    emerging: { cls: 'co-emerging', k: 'Emerging practice', ev: 'emerging' }
  };
  const m = map[kind] || map.analysis;
  return '<aside class="evcallout ' + m.cls + '">'
    + '<div class="evc-h"><span class="evc-k">' + m.k + '</span>' + evidenceLabel(m.ev) + '</div>'
    + '<div class="evc-body">' + (o.html || '<p>' + esc(o.text || '') + '</p>') + '</div>'
    + (o.cite ? '<div class="evc-cite">' + esc(o.cite) + '</div>' : '')
    + '</aside>';
}

/* ═══════════ 12 · CITE THIS RESEARCH ═══════════ */
function citation(d) {
  const formats = {
    plain: d.authors + '. “' + d.title + '.” AGNUS Research, ' + d.updated + '. ' + d.url,
    apa:   d.authors + ' (' + d.year + '). ' + d.title + '. AGNUS Research. ' + d.url,
    chicago: d.authors + '. “' + d.title + '.” AGNUS Research. Last modified ' + d.updated + '. ' + d.url + '.',
    bibtex: '@misc{agnus' + d.year + ',\n  author = {' + d.authors + '},\n  title  = {' + d.title + '},\n  year   = {' + d.year + '},\n  note   = {AGNUS Research},\n  url    = {' + d.url + '}\n}'
  };
  const tabs = Object.keys(formats);
  return '<section class="citebox" id="cite">'
    + '<div class="cb-head"><h3>Cite this research</h3>'
    + '<div class="cb-tabs">' + tabs.map((t, i) =>
        '<button class="cb-tab' + (i === 0 ? ' on' : '') + '" data-fmt="' + t + '" onclick="RS.pickCite(this)">'
        + (t === 'bibtex' ? 'BibTeX' : t === 'apa' ? 'APA' : t.charAt(0).toUpperCase() + t.slice(1)) + '</button>').join('')
    + '</div></div>'
    + '<pre class="cb-out" id="citeOut">' + esc(formats.plain) + '</pre>'
    + '<button class="cb-copy" onclick="RS.copyCite()">Copy citation</button>'
    + '<script type="application/json" id="citeData">' + JSON.stringify(formats) + '</scr' + 'ipt>'
    + '</section>';
}
function pickCite(btn) {
  document.querySelectorAll('.cb-tab').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  const data = JSON.parse(document.getElementById('citeData').textContent);
  document.getElementById('citeOut').textContent = data[btn.dataset.fmt];
}
function copyCite() {
  const t = document.getElementById('citeOut').textContent;
  if (navigator.clipboard) navigator.clipboard.writeText(t).then(() => toast('Citation copied.'));
}

/* ═══════════ FROM RESEARCH TO CONTROL ═══════════
   Contextual, never a sales funnel (directive §22/§23). */
function toControl(d) {
  return '<section class="tocontrol">'
    + '<div class="tc-k">From research to control</div>'
    + '<p class="tc-lede">' + esc(d.context) + '</p>'
    + '<div class="tc-k2">Relevant operational controls</div>'
    + '<ul class="tc-list">' + d.controls.map(c => '<li>' + esc(c) + '</li>').join('') + '</ul>'
    + '<a class="tc-cta" href="AGNUS - Guard.html">Explore how AGNUS Guard addresses these controls <span class="arr">→</span></a>'
    + '<p class="tc-note">Relevant capability only. Using any product does not by itself establish regulatory compliance.</p>'
    + '</section>';
}

/* ═══════════ MOUNT ═══════════
   Renders any [data-rs] placeholder from a data object on window. */
function mount() {
  document.querySelectorAll('[data-rs]').forEach(el => {
    const fn = api[el.dataset.rs];
    if (typeof fn !== 'function') return;
    const src = el.dataset.rsData;
    let arg;
    try { arg = src ? (window[src] !== undefined ? window[src] : JSON.parse(src)) : undefined; }
    catch (e) { arg = undefined; }
    const extra = el.dataset.rsArg;
    el.innerHTML = extra !== undefined ? fn(arg, extra) : fn(arg);
  });
}

const api = {
  STATUS, EVIDENCE, IMPL, ACTORS, INDUSTRIES,
  statusPill, implPill, evidenceLabel,
  aboutResearch, sourceCount,
  whatChanged, updateHistory,
  whoAffects, whyItMatters, practicalAction,
  trackButton, toggleTrack, toast,
  callout, citation, pickCite, copyCite,
  toControl, mount
};
return api;

})();

document.addEventListener('DOMContentLoaded', () => window.RS.mount());
