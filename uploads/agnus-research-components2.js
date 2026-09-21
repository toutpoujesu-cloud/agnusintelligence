/*
 * This application and all the work related to Agnus and for Agnus is sanctified and covered
 * by The Blood of Jesus Christ. No work of darkness nor any dark code is allowed.
 * The entire application is saturated by the Blood of Jesus Christ, and by the 888 Hz frequency
 * from The Throne of The Lamb of God, The Lord Jesus Christ.
 * This application is Holy.
 *//* =====================================================================
   AGNUS RESEARCH · TEMPLATE COMPONENTS  (Phase II)
   ---------------------------------------------------------------------
   Renders from window.AR (agnus-research-data.js). No content lives here.
   Every component takes a record and returns markup, so a page is an
   arrangement of components rather than hand-written HTML.

   Mount: <div data-rc="componentName" data-rc-arg="AR-000142"></div>
   ===================================================================== */

window.RC = (function () {

const D = () => window.AR;
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const demoTag = rec => (rec && rec._demo) ? '<span class="dq" title="Demonstration data — not verified research">demo</span>' : '';

/* ═══════════ 1 · RESEARCH STATUS ═══════════ */
function statusPill(key) {
  const s = D().RESEARCH_STATUS[key] || D().RESEARCH_STATUS.current;
  return '<span class="rstatus ' + key + '" title="' + esc(s.note) + '"><span class="sd"></span>' + s.label + '</span>';
}
function implPill(key) {
  const s = D().IMPLEMENTATION_STATUS[key] || D().IMPLEMENTATION_STATUS.monitored;
  return '<span class="impl-status impl-' + key + '"><span class="sd"></span>' + s.label + '</span>';
}
function authorityLabel(level) {
  const a = D().AUTHORITY[level] || D().AUTHORITY.supporting;
  const cls = {primary:'ev-primary', standard:'ev-standard', academic:'ev-research', supporting:'ev-emerging'}[level] || 'ev-unrev';
  return '<span class="ev-label ' + cls + '" title="' + esc(a.note) + '">' + a.label + '</span>';
}

/* ═══════════ 2 · AUTHOR BYLINE ═══════════ */
function authorByline(slug) {
  const a = D().byAuthor(slug);
  if (!a) return '';
  const initials = a.name.split(/[\s-]/).filter(Boolean).map(w => w[0]).join('').slice(0,2).toUpperCase();
  return '<a class="au-byline" href="AGNUS - Research Author.html">'
    + '<span class="au-ava">' + initials + '</span>'
    + '<span class="au-txt"><b>' + esc(a.name) + '</b><span>' + esc(a.role) + '</span></span>'
    + '</a>';
}

/* ═══════════ 3 · ARTICLE METADATA BAR ═══════════ */
function articleMeta(id) {
  const a = D().byArticleId(id); if (!a) return '';
  const AR = D();
  const rows = [
    ['Published',      AR.fmtDate(a.published)],
    ['Last updated',   AR.fmtDate(a.last_updated)],
    ['Last reviewed',  AR.fmtDate(a.last_reviewed)],
    ['Jurisdiction',   esc(a.jurisdiction || '—')],
    ['Research type',  esc(AR.CONTENT_TYPE[a.content_type] || a.content_type)],
    ['Reading time',   a.reading_time + ' minutes']
  ];
  return '<div class="art-metabar">'
    + '<div class="mi mi-author"><span class="mk">Written by</span><span class="mv">' + authorByline(a.author) + '</span></div>'
    + rows.map(r => '<div class="mi"><span class="mk">' + r[0] + '</span><span class="mv">' + r[1] + '</span></div>').join('')
    + '<div class="mi"><span class="mk">Status</span><span class="mv">' + statusPill(a.status) + '</span></div>'
    + '</div>';
}

/* ═══════════ 4 · AT A GLANCE ═══════════ */
function atAGlance(id) {
  const a = D().byArticleId(id); if (!a) return '';
  const AR = D();
  const reg = AR.REGULATIONS[a.regulation];
  const stds = (a.standards || []).map(AR.bySourceId).filter(Boolean);
  const obls = AR.obligationsForArticle ? AR.OBLIGATIONS.filter(o => (o.research_articles||[]).indexOf(id) > -1) : [];
  const chips = list => (list && list.length)
    ? list.map(x => '<span class="ag-chip">' + esc(x) + '</span>').join('')
    : '<span class="ag-none">Not applicable</span>';

  const rows = [
    ['Jurisdiction',            esc(a.jurisdiction || '—')],
    ['Regulation',              reg ? esc(reg.name) + ' <span class="ag-cite">' + esc(reg.citation) + '</span>' : '<span class="ag-none">Not regulation-specific</span>'],
    ['Obligations',             obls.length ? obls.map(o => '<span class="ag-chip is-actor">' + esc(o.article) + ' — ' + esc(o.name) + '</span>').join('') : '<span class="ag-none">None mapped</span>'],
    ['Relevant articles',       chips(a.relevant_articles)],
    ['Relevant annexes',        chips(a.relevant_annexes)],
    ['Actors affected',         (a.actors_affected||[]).map(x => '<span class="ag-chip is-actor">' + esc(x) + '</span>').join('') || '<span class="ag-none">—</span>'],
    ['AI system category',      esc(a.ai_system_type || '—')],
    ['Risk classification',     esc(a.risk_category || '—')],
    ['Effective date',          AR.fmtDate(a.effective_date)],
    ['Relevant deadline',       a.deadline ? '<b class="ag-deadline">' + AR.fmtDate(a.deadline) + '</b>' : '<span class="ag-none">None</span>'],
    ['Authorities',             chips(a.authorities)],
    ['Standards involved',      stds.length ? stds.map(s => '<span class="ag-chip">' + esc(s.title.split('—')[0].trim()) + '</span>').join('') : '<span class="ag-none">None cited</span>'],
    ['Research status',         statusPill(a.status)],
    ['Last verification',       AR.fmtDate(a.last_reviewed)]
  ];
  return '<section class="ataglance" id="at-a-glance" aria-labelledby="ag-h">'
    + '<div class="ag-head"><h2 id="ag-h">At a glance</h2>' + demoTag(a) + '</div>'
    + '<dl class="ag-rows">'
    + rows.map(r => '<div class="ag-row"><dt>' + r[0] + '</dt><dd>' + r[1] + '</dd></div>').join('')
    + '</dl></section>';
}

/* ═══════════ 5 · EVIDENCE / SOURCES ═══════════ */
/* Grouped by authority level. Legislation must never sit level with媒体. */
function evidence(id) {
  const a = D().byArticleId(id); if (!a) return '';
  const AR = D();
  const all = AR.sourcesForArticle(a);
  const groups = [
    ['primary',    'Primary sources',            'Legislation, regulators, competent authorities, official guidance and consultations.'],
    ['standard',   'Standards & technical',      'Published standards and technical frameworks.'],
    ['academic',   'Academic sources',           'Peer-reviewed and institutional research.'],
    ['supporting', 'Supporting sources',         'Reliable secondary research. Not equivalent in authority to the above.']
  ];
  const blocks = groups.map(g => {
    const list = AR.sourcesByAuthority(all, g[0]);
    if (!list.length) return '';
    return '<div class="ev-group ev-g-' + g[0] + '">'
      + '<div class="ev-gh"><h3>' + g[1] + '</h3>' + authorityLabel(g[0]) + '</div>'
      + '<p class="ev-gnote">' + g[2] + '</p>'
      + '<ol class="ev-list">'
      + list.map(s => '<li class="ev-item">'
          + '<div class="ev-main"><a class="ev-title" href="AGNUS - Research Sources.html">' + esc(s.title) + '</a>'
          + '<span class="ev-org">' + esc(s.issuing_organization) + '</span></div>'
          + '<div class="ev-meta">'
            + '<span>' + esc(s.source_type) + '</span>'
            + '<span>' + esc(s.jurisdiction) + '</span>'
            + '<span>' + AR.fmtShort(s.publication_date) + '</span>'
            + '<span class="ev-ver">Verified ' + AR.fmtShort(s.verification_date) + '</span>'
          + '</div></li>').join('')
      + '</ol></div>';
  }).join('');

  return '<section class="evidence" id="sources" aria-labelledby="ev-h">'
    + '<div class="ev-head"><h2 id="ev-h">Sources &amp; evidence</h2>'
      + '<span class="src-count"><b>' + all.length + '</b> sources<span class="sc-sep"></span><b>'
      + AR.sourcesByAuthority(all,'primary').length + '</b> primary ' + demoTag(a) + '</span></div>'
    + blocks
    + '<p class="ev-foot">Sources are structured records reused across AGNUS Research. A correction to a source propagates to every article citing it. <a href="AGNUS - Research Sources.html">Open the Source Library →</a></p>'
    + '</section>';
}

/* ═══════════ 6 · AGNUS ANALYSIS ═══════════ */
/* Interpretation must never be mistaken for the text it interprets (§17). */
function analysis(opts) {
  const o = opts || {};
  return '<aside class="agnus-analysis">'
    + '<div class="aa-h"><span class="aa-k">AGNUS analysis</span>'
      + '<span class="ev-label ev-analysis" title="AGNUS interpretation — not legal text.">Interpretation</span></div>'
    + '<div class="aa-body">' + (o.html || '<p>' + esc(o.text || '') + '</p>') + '</div>'
    + '<p class="aa-note">This is AGNUS interpretation of the sources cited above, not a statement of law.</p>'
    + '</aside>';
}
/* Stated fact, attributable to a source */
function fact(opts) {
  const o = opts || {};
  const s = o.source_id ? D().bySourceId(o.source_id) : null;
  return '<aside class="fact-block">'
    + '<div class="fb-h"><span class="fb-k">What the source states</span>' + authorityLabel(s ? s.authority_level : 'primary') + '</div>'
    + '<div class="fb-body">' + (o.html || '<p>' + esc(o.text || '') + '</p>') + '</div>'
    + (s ? '<div class="fb-cite">' + esc(s.title) + (o.locator ? ' · ' + esc(o.locator) : '') + ' — ' + esc(s.issuing_organization) + '</div>' : '')
    + '</aside>';
}

/* ═══════════ 7 · RESEARCH HISTORY ═══════════ */
function history(id) {
  const a = D().byArticleId(id); if (!a || !a.history) return '';
  const AR = D();
  return '<section class="res-history" id="history" aria-labelledby="rh-h">'
    + '<div class="rh-head"><h2 id="rh-h">Research history</h2>' + statusPill(a.status) + '</div>'
    + '<ol class="rh-list">'
    + a.history.map(h => '<li class="rh-item">'
        + '<div class="rh-when">' + AR.fmtShort(h.date) + '</div>'
        + '<div class="rh-body"><span class="rh-type rh-' + h.type.toLowerCase() + '">' + esc(h.type) + '</span>'
        + '<p>' + esc(h.note) + '</p>'
        + (h.sections ? '<span class="rh-sec">Sections: ' + esc(h.sections) + '</span>' : '')
        + (h.reviewer ? '<span class="rh-sec">Reviewed by ' + esc(h.reviewer) + '</span>' : '')
        + '</div></li>').join('')
    + '</ol></section>';
}

/* ═══════════ 8 · RELATED RESEARCH / REGULATION / STANDARDS / JURISDICTION ═══════════ */
function related(id) {
  const a = D().byArticleId(id); if (!a) return '';
  const AR = D();
  const arts = (a.related_articles||[]).map(AR.byArticleId).filter(Boolean);
  const artUrl = AR.articleUrl || function(){return 'AGNUS - Research Article.html';};
  const reg  = AR.REGULATIONS[a.regulation];
  const stds = (a.standards||[]).map(AR.bySourceId).filter(Boolean);
  const juris= (a.related_jurisdictions||[]).map(AR.byJurisdiction).filter(Boolean);

  const col = (title, body) => '<div class="rel-col"><h3>' + title + '</h3>' + body + '</div>';

  return '<section class="related-block" id="related" aria-labelledby="rb-h">'
    + '<h2 id="rb-h" class="rb-title">Related research</h2>'
    + '<div class="rel-grid-4">'
    + col('Research', arts.length
        ? '<ul class="rel-list">' + arts.map(x =>
            '<li><a href="' + artUrl(x.article_id) + '"><span class="rl-t">' + esc(x.title) + '</span>'
            + '<span class="rl-m">' + esc(AR.byPillar(x.pillar) ? AR.byPillar(x.pillar).name : '') + ' · ' + x.reading_time + ' min</span></a></li>').join('')
          + '</ul>'
        : '<p class="rel-none">None yet.</p>')
    + col('Regulation', reg
        ? '<ul class="rel-list"><li><a href="AGNUS - Research Topic.html"><span class="rl-t">' + esc(reg.name) + '</span>'
          + '<span class="rl-m">' + esc(reg.citation) + '</span></a></li>'
          + (a.relevant_articles||[]).map(x => '<li><a href="AGNUS - Research Topic.html"><span class="rl-t">' + esc(x) + '</span><span class="rl-m">' + esc(reg.name) + '</span></a></li>').join('')
          + '</ul>'
        : '<p class="rel-none">Not regulation-specific.</p>')
    + col('Standards', stds.length
        ? '<ul class="rel-list">' + stds.map(s =>
            '<li><a href="AGNUS - Research Sources.html"><span class="rl-t">' + esc(s.title.split('—')[0].trim()) + '</span>'
            + '<span class="rl-m">' + esc(s.issuing_organization) + '</span></a></li>').join('') + '</ul>'
        : '<p class="rel-none">None cited.</p>')
    + col('Jurisdictions', juris.length
        ? '<ul class="rel-list">' + juris.map(j =>
            '<li><a href="AGNUS - Research Country.html"><span class="rl-t">' + esc(j.name) + '</span>'
            + '<span class="rl-m">National implementation</span></a></li>').join('') + '</ul>'
        : '<p class="rel-none">—</p>')
    + '</div></section>';
}

/* ═══════════ 9 · TRACK / ALERTS ═══════════ */
const TKEY = 'agnus:research:tracked';
const tracked = () => { try { return JSON.parse(localStorage.getItem(TKEY) || '[]'); } catch(e){ return []; } };
function trackButton(subject, mode) {
  const on = tracked().indexOf(subject) > -1;
  return '<button class="track-btn' + (on ? ' on' : '') + (mode === 'block' ? ' block' : '')
    + '" data-track="' + esc(subject) + '" onclick="RC.toggleTrack(this)" aria-pressed="' + on + '">'
    + '<span class="tb-star">' + (on ? '★' : '☆') + '</span>'
    + '<span class="tb-label">' + (on ? 'Tracking' : 'Track') + ' ' + esc(subject) + '</span></button>';
}
function toggleTrack(btn) {
  const s = btn.dataset.track, list = tracked(), i = list.indexOf(s), on = i > -1;
  if (on) list.splice(i,1); else list.push(s);
  try { localStorage.setItem(TKEY, JSON.stringify(list)); } catch(e){}
  btn.classList.toggle('on', !on);
  btn.setAttribute('aria-pressed', String(!on));
  btn.querySelector('.tb-star').textContent = !on ? '★' : '☆';
  btn.querySelector('.tb-label').textContent = (!on ? 'Tracking ' : 'Track ') + s;
  toast(!on
    ? 'Tracking “' + s + '”. You will be alerted when sources, deadlines or research change. Alerts require an AGNUS account.'
    : 'No longer tracking “' + s + '”.');
}
function toast(msg) {
  let t = document.getElementById('rcToast');
  if (!t) { t = document.createElement('div'); t.id = 'rcToast'; t.className = 'rs-toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 4200);
}

/* ═══════════ 10 · CITATION ═══════════ */
function citation(id) {
  const a = D().byArticleId(id); if (!a) return '';
  const AR = D();
  const au = AR.byAuthor(a.author) || {name:'AGNUS Research'};
  const yr = (a.last_updated || a.published || '').slice(0,4);
  const url = 'https://agnus.example/research/' + a.pillar + '/' + a.slug + '/';
  const f = {
    plain:   au.name + '. “' + a.title + '.” AGNUS Research, ' + AR.fmtDate(a.last_updated) + '. ' + url,
    apa:     au.name + ' (' + yr + '). ' + a.title + '. AGNUS Research. ' + url,
    chicago: au.name + '. “' + a.title + '.” AGNUS Research. Last modified ' + AR.fmtDate(a.last_updated) + '. ' + url + '.',
    bibtex:  '@misc{agnus' + a.article_id.replace(/\W/g,'') + ',\n  author = {' + au.name + '},\n  title  = {' + a.title + '},\n  year   = {' + yr + '},\n  note   = {AGNUS Research, ' + a.article_id + '},\n  url    = {' + url + '}\n}'
  };
  const tabs = ['plain','apa','chicago','bibtex'];
  return '<section class="citebox" id="cite">'
    + '<div class="cb-head"><h2>Cite this research</h2><div class="cb-tabs">'
    + tabs.map((t,i) => '<button class="cb-tab' + (i===0?' on':'') + '" data-fmt="' + t + '" onclick="RC.pickCite(this)">'
        + (t==='bibtex'?'BibTeX':t==='apa'?'APA':t.charAt(0).toUpperCase()+t.slice(1)) + '</button>').join('')
    + '</div></div>'
    + '<pre class="cb-out" id="citeOut">' + esc(f.plain) + '</pre>'
    + '<div class="cb-actions"><button class="cb-copy" onclick="RC.copyCite()">Copy citation</button>'
    + '<span class="cb-id">' + a.article_id + '</span></div>'
    + '<script type="application/json" id="citeData">' + JSON.stringify(f) + '</scr' + 'ipt></section>';
}
function pickCite(btn) {
  document.querySelectorAll('.cb-tab').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('citeOut').textContent = JSON.parse(document.getElementById('citeData').textContent)[btn.dataset.fmt];
}
function copyCite() {
  const t = document.getElementById('citeOut').textContent;
  if (navigator.clipboard) navigator.clipboard.writeText(t).then(() => toast('Citation copied.'));
}

/* ═══════════ 11 · ARTICLE CLASSIFICATION HEADER ═══════════ */
function classification(id) {
  const a = D().byArticleId(id); if (!a) return '';
  const p = D().byPillar(a.pillar);
  return '<nav class="art-class" aria-label="Research classification">'
    + '<a href="AGNUS - Research.html">Research</a><span class="sep">/</span>'
    + '<a href="AGNUS - Research Topic.html">' + esc(p ? p.name : a.pillar) + '</a>'
    + (a.subtopic ? '<span class="sep">/</span><span class="here">' + esc(a.subtopic) + '</span>' : '')
    + '</nav>';
}

/* ═══════════ 12 · KEY TAKEAWAYS ═══════════ */
function takeaways(items) {
  return '<section class="takeaways" id="takeaways">'
    + '<h2>Key takeaways</h2><ol>'
    + items.map((t,i) => '<li><span class="kn">' + String(i+1).padStart(2,'0') + '</span><span class="kt">' + t + '</span></li>').join('')
    + '</ol></section>';
}

/* ═══════════ 13 · LANGUAGE EDITIONS ═══════════ */
function languageBar(id) {
  const a = D().byArticleId(id); if (!a) return '';
  const editions = a.editions || ['en'];
  return '<div class="lang-bar"><span class="lb-k">Language editions</span>'
    + D().LANGUAGES.map(l => {
        const live = editions.indexOf(l.code) > -1;
        return '<button class="lb-opt' + (live ? ' on' : '') + '"' + (live ? ' aria-current="true"' : ' disabled title="Planned"') + '>'
          + l.label + '</button>';
      }).join('')
    + '<span class="lb-note">One canonical research object (' + a.article_id + '). Translations share its sources and change history.</span></div>';
}

/* ═══════════ MOUNT ═══════════ */
function mount(root) {
  (root || document).querySelectorAll('[data-rc]').forEach(el => {
    const fn = api[el.dataset.rc];
    if (typeof fn !== 'function') return;
    let arg = el.dataset.rcArg;
    if (arg && (arg.trim().startsWith('[') || arg.trim().startsWith('{'))) {
      try { arg = JSON.parse(arg); } catch (e) {}
    }
    el.innerHTML = fn(arg, el.dataset.rcMode);
  });
}

const api = {
  statusPill, implPill, authorityLabel, authorByline, articleMeta, atAGlance,
  evidence, analysis, fact, history, related, trackButton, toggleTrack, toast,
  citation, pickCite, copyCite, classification, takeaways, languageBar, mount
};
return api;

})();

document.addEventListener('DOMContentLoaded', () => window.RC.mount());
