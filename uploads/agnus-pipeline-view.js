/*
 * This application and all the work related to Agnus and for Agnus is sanctified and covered
 * by The Blood of Jesus Christ. No work of darkness nor any dark code is allowed.
 * The entire application is saturated by the Blood of Jesus Christ, and by the 888 Hz frequency
 * from The Throne of The Lamb of God, The Lord Jesus Christ.
 * This application is Holy.
 *//* AGNUS — New Article Pipeline View */

/* Close the mission console overlay when the pipeline view loads */
window.VIEW_INIT = window.VIEW_INIT || {};
window.VIEW_INIT['pipeline'] = function() {
  var overlay = document.querySelector('.mc-overlay');
  if (overlay) overlay.style.display = 'none';
  window._consoleOpen = false;
};

window._agnusPipelineView = function() {
  var D = window.AGNUS_DATA;
  if (!D) return '<div style="padding:60px;text-align:center;color:var(--ink-mute)">AGNUS data not loaded.</div>';
  var m = D.mission;
  var nums = ['❶','❷','❸','❹','❺','❻','❼','❽','❾','❿'];
  var iconMap = {search:'⌕',target:'◎',file:'▤',grid:'▦',star:'✦',sparkle:'✶',shield:'✓',monitor:'▣',upload:'↑',trending:'↗'};

  /* step cards */
  var stepsHtml = m.steps.map(function(s, i) {
    var isActive = s.status === 'in_progress';
    var isAI     = s.status === 'ai_working';
    var isDone   = s.status === 'completed';
    var border   = isActive ? '2px solid #3b82f6' : isAI ? '2px solid #8b5cf6' : isDone ? '1px solid #22c55e' : '1px solid var(--line)';
    var bg       = isActive ? 'rgba(59,130,246,0.08)' : isAI ? 'rgba(139,92,246,0.08)' : isDone ? 'rgba(34,197,94,0.06)' : 'var(--card)';
    var ac       = isActive ? '#3b82f6' : isAI ? '#8b5cf6' : isDone ? '#22c55e' : 'var(--ink-mute)';
    var label    = isDone ? 'Done' : isActive ? 'In Progress' : isAI ? 'AI Working' : 'Not Started';
    var pulse    = (isActive || isAI) ? 'animation:pipe-pulse 1.5s infinite;' : '';
    return '<div style="flex:1;border:' + border + ';border-radius:10px;padding:9px 8px;background:' + bg + ';cursor:pointer;min-width:0;" onclick="pipelineStepClick(' + i + ')">'
      + '<div style="font-size:13px;color:' + ac + ';margin-bottom:3px;">' + (iconMap[s.icon] || '◆') + '</div>'
      + '<div style="font-size:9px;color:' + ac + ';font-family:var(--font-mono);font-weight:700;">' + nums[i] + '</div>'
      + '<div style="font-weight:700;font-size:11px;color:var(--ink);margin:2px 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + s.label + '</div>'
      + '<div style="font-size:9px;color:' + ac + ';line-height:1.3;margin-bottom:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + s.desc + '</div>'
      + '<div style="display:flex;align-items:center;gap:3px;">'
      +   '<div style="width:5px;height:5px;border-radius:50%;background:' + (isDone ? '#22c55e' : isActive || isAI ? ac : 'var(--line)') + ';flex-shrink:0;' + pulse + '"></div>'
      +   '<span style="font-size:9px;color:' + ac + ';">' + label + '</span>'
      + '</div>'
      + (s.time ? '<div style="font-size:9px;color:var(--ink-mute);margin-top:1px;">' + s.time + '</div>' : '')
      + '</div>';
  }).join('');

  /* PAA table rows */
  var rowsHtml = D.paaQuestions.map(function(q, qi) {
    return '<div class="paa-row-click" onclick="window.showPaaPopup(this,' + qi + ')" style="display:grid;grid-template-columns:28px 28px 1fr 110px 80px 72px;gap:4px;padding:8px 14px;border-bottom:1px solid var(--line);align-items:center;' + (q.imported ? 'background:rgba(59,130,246,0.07);' : '') + '">'
      + '<input type="checkbox"' + (q.imported ? ' checked' : '') + ' style="accent-color:var(--blue);" onclick="event.stopPropagation()">'
      + '<span style="font-family:var(--font-mono);color:var(--ink-mute);font-size:10px;">' + (qi + 1) + '</span>'
      + '<span style="color:var(--ink);font-size:12px;font-weight:' + (q.imported ? '500' : '400') + ';overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="' + q.question + '">' + q.question + '</span>'
      + '<span style="font-size:11px;color:' + (q.intent === 'Commercial' ? 'var(--gold-deep)' : '#58a6ff') + ';">' + q.intent + '</span>'
      + '<span style="font-size:11px;color:var(--ink-mute);">' + (q.source || 'Google') + '</span>'
      + '<div style="display:flex;gap:8px;align-items:center;color:var(--ink-mute);font-size:11px;" onclick="event.stopPropagation()"><span style="cursor:pointer;font-size:13px;">👁</span><span style="cursor:pointer;">📌</span><span style="cursor:pointer;font-weight:700;">···</span></div>'
      + '</div>';
  }).join('');

  /* Ledger cards */
  var ledgerHtml = D.ledger.map(function(e) {
    return '<div style="flex-shrink:0;width:145px;background:var(--card);border:1px solid var(--line);border-radius:8px;padding:9px;">'
      + '<div style="font-size:9px;color:var(--ink-mute);font-family:var(--font-mono);margin-bottom:3px;">' + e.time + '</div>'
      + '<div style="font-size:11px;font-weight:700;color:var(--ink);margin-bottom:3px;">' + e.title + '</div>'
      + '<div style="font-size:10px;color:var(--ink-mute);">' + e.detail1 + '</div>'
      + '<div style="font-size:10px;color:var(--ink-mute);">' + e.detail2 + '</div>'
      + '</div>';
  }).join('');

  /* connected sources */
  var connHtml = D.knowledgeSources.map(function(s) {
    return '<div style="display:flex;align-items:center;gap:7px;">'
      + '<div style="width:7px;height:7px;border-radius:50%;background:var(--success);flex-shrink:0;"></div>'
      + '<span style="font-size:11px;color:var(--ink);">' + s.name + '</span>'
      + '</div>';
  }).join('');

  /* donut */
  var R = 20, C = 2 * Math.PI * R;
  var doneArc = C * m.overview.completed / 10;
  var progArc = C * m.overview.inProgress / 10;

  /* pagination */
  var paging = [1,2,3,4,5].map(function(n) {
    return '<button class="b b-ghost" style="width:24px;height:24px;padding:0;font-size:10px;font-family:var(--font-mono);' + (n===1?'border-color:var(--blue);color:var(--blue);':'') + '">' + n + '</button>';
  }).join('');

  /* detail panel */
  var pd = D.paaDetail;
  var appearsOnHtml = pd.appearsOn.map(function(a){ return '<span class="pill ghost">' + a + '</span>'; }).join('');
  var relKwHtml = pd.relatedKeywords.map(function(k){ return '<span class="pill ghost">' + k + '</span>'; }).join('');
  var voiceHtml = pd.voiceVariants.map(function(v){ return '<span style="font-size:11px;color:var(--ink-mute);">' + v + '</span>'; }).join('');

  /* score chips */
  var scores = [
    ['SEO',      m.metrics.seo,      '#f59e0b'],
    ['GEO',      m.metrics.geo,      '#22c55e'],
    ['EEAT',     m.metrics.eeat,     '#f97316'],
    ['Voice',    m.metrics.voice,    '#a78bfa'],
    ['AI Search',m.metrics.aiSearch, '#2dd4bf']
  ];
  var scoreHtml = scores.map(function(s) {
    return '<span style="font-size:10px;color:var(--ink-mute);">' + s[0] + ' <b style="color:' + s[2] + ';">' + s[1] + '%</b></span>';
  }).join('');

  /* tabs */
  var tabNames = ['Keyword Intel','Competitors','PAA','Voice Search','Semantic','Entities','Sources','Images','Videos','Studies'];
  var tabsHtml = tabNames.map(function(t, i) {
    return '<button class="b ' + (i===2 ? 'b-dark' : 'b-ghost') + '" style="padding:4px 10px;font-size:11px;white-space:nowrap;flex-shrink:0;" onclick="pipelineTab(this)">' + t + '</button>';
  }).join('');

  /* quick actions */
  var qActions = [['Open Brief','▤'],['View Outline','≡'],['See Keywords','⌕'],['Open Story Builder','✶'],['Run New Mission','↺']];
  var qActHtml = qActions.map(function(a) {
    return '<button class="b b-ghost" style="display:flex;align-items:center;gap:6px;padding:7px 9px;font-size:10px;text-align:left;width:100%;">'
      + '<span style="font-family:var(--font-mono);font-size:12px;">' + a[1] + '</span>' + a[0] + '</button>';
  }).join('');

  /* legend */
  var legend = [['#22c55e','Completed '+m.overview.completed],['#3b82f6','In Progress '+m.overview.inProgress],['#6b7280','Not Started '+m.overview.notStarted],['#ef4444','Blocked '+m.overview.blocked],['#f59e0b','Needs Review '+m.overview.needsReview]];
  var legendHtml = legend.map(function(l) {
    return '<div style="display:flex;align-items:center;gap:4px;"><div style="width:6px;height:6px;border-radius:50%;background:' + l[0] + ';flex-shrink:0;"></div><span style="font-size:9px;color:var(--ink-mute);">' + l[1] + '</span></div>';
  }).join('');

  return '<style>@keyframes pipe-pulse{0%,100%{opacity:1}50%{opacity:0.4}}.pipeline-mode{background:#0d1117 !important;--bg:#0d1117;--card:#161b22;--line:#2d333b;--ink:#c9d1d9;--ink-mute:#7d8590;--blue:#58a6ff;--success:#3fb950;--gold-deep:#d29922;}.pipeline-mode .sb-gl{color:#7d8590 !important;border-bottom-color:#2d333b !important;}.pipeline-mode .b-ghost{border-color:#2d333b !important;color:#c9d1d9 !important;background:transparent !important;}.pipeline-mode .b-ghost:hover{background:rgba(255,255,255,0.06) !important;}.pipeline-mode .b-dark{background:#58a6ff !important;color:#0d1117 !important;border-color:#58a6ff !important;}.pipeline-mode .pill{border-color:#2d333b !important;}.pipeline-mode .pill.ghost{background:rgba(201,209,217,0.1) !important;color:#c9d1d9 !important;}.pipeline-mode .pill.green{background:rgba(63,185,80,0.15) !important;color:#3fb950 !important;}.pipeline-mode .pill.gold{background:rgba(210,153,34,0.15) !important;color:#d29922 !important;}.pipeline-mode input[type="text"]{background:#161b22 !important;color:#c9d1d9 !important;border-color:#2d333b !important;}.pipeline-mode select{background:#161b22 !important;color:#c9d1d9 !important;border-color:#2d333b !important;}#paaPopup{position:fixed;background:#1c2128;border:1px solid #30363d;border-radius:12px;padding:18px;width:320px;box-shadow:0 20px 60px rgba(0,0,0,0.8);z-index:9999;display:none;flex-direction:column;gap:12px;}#paaPopup.show{display:flex;}.pop-row{display:flex;gap:12px;align-items:flex-start;}.pop-label{font-size:10px;color:#7d8590;width:100px;flex-shrink:0;padding-top:2px;}.pop-chip{font-size:10px;padding:2px 8px;border-radius:4px;background:rgba(201,209,217,0.08);color:#c9d1d9;border:1px solid #30363d;}.paa-row-click{cursor:pointer;transition:background 0.12s;}.paa-row-click:hover{background:rgba(88,166,255,0.07) !important;}</style>'
    /* metrics bar */
    + '<div style="display:flex;align-items:center;gap:14px;padding:7px 18px;background:var(--bg);border-bottom:1px solid var(--line);flex-shrink:0;">'
    +   '<span style="font-size:11px;color:var(--ink-mute);flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">Mission: <b style="color:var(--ink);">' + m.title + '</b></span>'
    +   scoreHtml
    +   '<div style="width:1px;height:16px;background:var(--line);"></div>'
    +   '<div style="display:flex;align-items:center;gap:5px;"><div style="width:7px;height:7px;border-radius:50%;background:#22c55e;"></div><span style="font-size:11px;color:#22c55e;font-weight:600;">In Progress</span></div>'
    +   '<span style="font-size:10px;color:var(--ink-mute);">⏱ ' + m.estRemaining + '</span>'
    + '</div>'
    /* step cards */
    + '<div style="display:flex;gap:5px;padding:8px 10px;background:var(--bg);border-bottom:1px solid var(--line);flex-shrink:0;">' + stepsHtml + '</div>'
    /* body */
    + '<div style="display:flex;flex:1;overflow:hidden;min-height:0;">'
      /* main panel */
      + '<div style="flex:1;display:flex;flex-direction:column;overflow:hidden;min-width:0;">'
        /* header */
        + '<div style="display:flex;align-items:center;gap:10px;padding:8px 16px;border-bottom:1px solid var(--line);flex-shrink:0;">'
        +   '<span style="font-weight:800;font-size:12px;letter-spacing:1px;color:var(--ink);" id="pipelineSection">RESEARCH</span>'
        +   '<span style="font-size:11px;color:var(--ink-mute);">Powered by ' + D.knowledgeSources.length + ' connected sources</span>'
        +   '<div style="flex:1;"></div>'
        +   '<button class="b b-ghost" style="padding:4px 10px;font-size:11px;">↓ Export CSV</button>'
        +   '<button class="b b-ghost" style="padding:4px 10px;font-size:11px;">↓ Export Excel</button>'
        +   '<button class="b b-ghost" style="padding:4px 10px;font-size:11px;">Save Snapshot</button>'
        + '</div>'
        /* tabs */
        + '<div id="pipelineTabs" style="display:flex;gap:4px;padding:6px 16px;border-bottom:1px solid var(--line);flex-shrink:0;overflow-x:auto;">' + tabsHtml + '</div>'
        /* tab toolbar — shown for PAA by default */
        /* content */
        + '<div style="flex:1;display:flex;flex-direction:column;overflow:hidden;min-height:0;padding:10px 16px;gap:8px;">'
          /* toolbar */
          + '<div style="display:flex;align-items:center;gap:8px;flex-shrink:0;flex-wrap:wrap;">'
          +   '<span style="font-weight:700;font-size:14px;color:var(--ink);" id="pipelineTabTitle">People Also Ask</span>'
          +   '<span class="ct" style="font-size:11px;">' + D.paaTotal + ' Questions Found</span>'
          +   '<span style="font-size:10px;color:var(--ink-mute);">from Knowledge Database · Google</span>'
          +   '<div style="flex:1;"></div>'
          +   '<label style="display:flex;align-items:center;gap:4px;color:var(--ink-mute);font-size:11px;cursor:pointer;"><input type="checkbox" style="accent-color:var(--blue);"> Select All</label>'
          +   '<button class="b b-ghost" style="padding:4px 10px;font-size:11px;">↓ Import Selected (' + D.paaQuestions.filter(function(q){return q.imported;}).length + ')</button>'
          +   '<button class="b b-ghost" style="padding:4px 10px;font-size:11px;">Add to Brief</button>'
          +   '<button class="b b-ghost" style="padding:4px 10px;font-size:11px;">Ignore Selected</button>'
          + '</div>'
          /* switchable tab body */
          + '<div id="pipelineTabBody" style="flex:1;display:flex;gap:10px;min-height:0;overflow:hidden;">'
            /* table */
            + '<div style="flex:1;min-width:0;display:flex;flex-direction:column;background:var(--card);border:1px solid var(--line);border-radius:10px;overflow:hidden;">'
            +   '<div style="display:grid;grid-template-columns:28px 28px 1fr 110px 80px 72px;gap:4px;padding:8px 14px;background:var(--bg);border-bottom:1px solid var(--line);font-size:9px;font-weight:700;color:var(--ink-mute);letter-spacing:0.5px;text-transform:uppercase;font-family:var(--font-mono);flex-shrink:0;"><div></div><div>#</div><div>Question</div><div>Intent</div><div>Source</div><div>Actions</div></div>'
            +   '<div style="flex:1;overflow-y:auto;">' + rowsHtml + '</div>'
            +   '<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 14px;border-top:1px solid var(--line);background:var(--bg);flex-shrink:0;">'
            +     '<span style="font-size:10px;color:var(--ink-mute);">Showing 1–10 of ' + D.paaTotal + ' · synced from Knowledge DB</span>'
            +     '<div style="display:flex;gap:3px;">' + paging + '<button class="b b-ghost" style="width:24px;height:24px;padding:0;font-size:10px;">→</button></div>'
            +   '</div>'
            + '</div>'
            /* detail is now a floating popup — see showPaaPopup */
            + ''
          + '</div>'
          /* ledger */
          + '<div style="flex-shrink:0;border:1px solid var(--line);border-radius:10px;padding:10px 14px;background:var(--bg);">'
          +   '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">'
          +     '<span style="font-weight:800;font-size:11px;letter-spacing:0.8px;color:var(--ink);">MISSION LEDGER / AI ACTIVITY</span>'
          +     '<select class="b b-ghost" style="font-size:10px;padding:2px 8px;"><option>All Events</option></select>'
          +     '<div style="flex:1;"></div>'
          +     '<a href="#" style="font-size:11px;color:var(--blue);text-decoration:none;">View All Logs →</a>'
          +   '</div>'
          +   '<div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;">' + ledgerHtml + '</div>'
          + '</div>'
        + '</div>'
      + '</div>'
      /* right sidebar */
      + '<div style="width:210px;flex-shrink:0;border-left:1px solid var(--line);overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:14px;">'
        /* overview */
        + '<div><div class="sb-gl">Mission Overview</div>'
        +   '<div style="font-size:10px;color:var(--ink-mute);margin-bottom:8px;">Overall Progress</div>'
        +   '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">'
        +     '<svg width="56" height="56" viewBox="0 0 56 56">'
        +       '<circle cx="28" cy="28" r="' + R + '" fill="none" stroke="var(--line)" stroke-width="7"/>'
        +       '<circle cx="28" cy="28" r="' + R + '" fill="none" stroke="#22c55e" stroke-width="7" stroke-dasharray="' + doneArc + ' ' + C + '" stroke-dashoffset="0" transform="rotate(-90 28 28)"/>'
        +       '<circle cx="28" cy="28" r="' + R + '" fill="none" stroke="#3b82f6" stroke-width="7" stroke-dasharray="' + progArc + ' ' + C + '" stroke-dashoffset="' + (-doneArc) + '" transform="rotate(-90 28 28)"/>'
        +       '<text x="28" y="33" text-anchor="middle" fill="var(--ink)" font-size="12" font-weight="700" font-family="Manrope,sans-serif">' + m.progress + '%</text>'
        +     '</svg>'
        +     '<div style="display:flex;flex-direction:column;gap:3px;">' + legendHtml + '</div>'
        +   '</div>'
        + '</div>'
        /* agent */
        + '<div><div class="sb-gl">AI Agent</div>'
        +   '<div style="display:flex;flex-direction:column;gap:6px;">'
        +     '<div style="display:flex;justify-content:space-between;"><span style="font-size:10px;color:var(--ink-mute);">Agent</span><span style="font-size:10px;color:var(--ink);font-weight:600;text-align:right;max-width:110px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + D.agent.name + '</span></div>'
        +     '<div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:10px;color:var(--ink-mute);">Mode</span><span class="pill" style="background:rgba(139,92,246,0.2);color:#a78bfa;">' + D.agent.mode + '</span></div>'
        +     '<div style="display:flex;justify-content:space-between;"><span style="font-size:10px;color:var(--ink-mute);">Temp</span><span style="font-size:10px;color:var(--ink);font-family:var(--font-mono);">' + D.agent.temperature + '</span></div>'
        +     '<div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:10px;color:var(--ink-mute);">Memory</span><span class="pill green">' + D.agent.memory + '</span></div>'
        +   '</div>'
        + '</div>'
        /* sources */
        + '<div><div class="sb-gl">Connected Sources</div>'
        +   '<div style="display:flex;flex-direction:column;gap:6px;">' + connHtml + '</div>'
        + '</div>'
        /* quick actions */
        + '<div><div class="sb-gl">Quick Actions</div>'
        +   '<div style="display:flex;flex-direction:column;gap:5px;">' + qActHtml + '</div>'
        + '</div>'
      + '</div>'
    + '</div>';
};

window.showPaaPopup = function(rowEl, idx) {
  var D = window.AGNUS_DATA;
  var q = D.paaQuestions[idx];
  if (!q) return;
  var popup = document.getElementById('paaPopup');
  if (!popup) {
    popup = document.createElement('div');
    popup.id = 'paaPopup';
    document.body.appendChild(popup);
  }
  popup.innerHTML = '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;">'
    + '<h3 style="font-size:13px;font-weight:700;color:#e6edf3;line-height:1.4;flex:1;margin:0;">' + q.question + '</h3>'
    + '<button onclick="document.getElementById(\'paaPopup\').className=\'\';" style="background:none;border:none;color:#7d8590;font-size:18px;cursor:pointer;padding:0;line-height:1;flex-shrink:0;">✕</button>'
    + '</div>'
    + '<div style="display:flex;flex-direction:column;gap:9px;">'
    + '<div class="pop-row"><span class="pop-label">Source</span><span style="font-size:12px;color:#c9d1d9;font-weight:500;">' + (q.source || 'Google Search') + '</span></div>'
    + '<div class="pop-row"><span class="pop-label">Search Intent</span><span style="font-size:11px;padding:2px 9px;border-radius:4px;background:rgba(88,166,255,0.15);color:#58a6ff;">' + q.intent + '</span></div>'
    + '<div class="pop-row"><span class="pop-label">Appears On</span><div style="display:flex;flex-wrap:wrap;gap:4px;"><span class="pop-chip">OpenAI</span><span class="pop-chip">HubSpot</span><span class="pop-chip">Toast</span><span class="pop-chip">Restaurant365</span><span style="font-size:10px;color:#58a6ff;padding:2px 6px;">+3 more</span></div></div>'
    + (function() { var w = (q.question||'').split(' ').filter(function(x){ return x.length > 3; }).slice(0,2).join(' '); return '<div class="pop-row"><span class="pop-label">Related Keywords</span><div style="display:flex;flex-wrap:wrap;gap:4px;"><span class="pop-chip">' + w + '</span><span class="pop-chip">restaurant AI</span><span class="pop-chip">automation</span></div></div>'; })()
    + (function() { var base = (q.question||'').replace(/\?$/,'').replace(/^what (is|are) /i,''); return '<div class="pop-row"><span class="pop-label">Voice Variants (3)</span><div style="display:flex;flex-direction:column;gap:5px;"><span style="font-size:11px;color:#7d8590;">🎤 What does ' + base + ' do?</span><span style="font-size:11px;color:#7d8590;">🎤 How is ' + base + ' used?</span><span style="font-size:11px;color:#7d8590;">🎤 What is the use of ' + base + '?</span></div></div>'; })()
    + '</div>'
    + '<div style="display:flex;gap:6px;flex-wrap:wrap;padding-top:10px;border-top:1px solid #30363d;">'
    + '<button class="b b-dark" style="padding:6px 14px;font-size:11px;" onclick="document.getElementById(\'paaPopup\').className=\'\'">↓ Import</button>'
    + '<button class="b b-ghost" style="padding:6px 10px;font-size:11px;" onclick="document.getElementById(\'paaPopup\').className=\'\'">📌 Pin to Brief</button>'
    + '<button class="b b-ghost" style="padding:6px 10px;font-size:11px;" onclick="document.getElementById(\'paaPopup\').className=\'\'">Ignore</button>'
    + '<button class="b b-ghost" style="padding:6px 10px;font-size:11px;" onclick="document.getElementById(\'paaPopup\').className=\'\'">Open Source ↗</button>'
    + '</div>';
  var rect = rowEl.getBoundingClientRect();
  var top = Math.max(10, Math.min(rect.top - 10, window.innerHeight - 470));
  popup.style.top = top + 'px';
  popup.style.left = Math.max(10, Math.min(rect.right + 14, window.innerWidth - 344)) + 'px';
  popup.className = 'show';
  setTimeout(function() {
    var pr = popup.getBoundingClientRect();
    if (pr.bottom > window.innerHeight - 10) { popup.style.top = Math.max(10, window.innerHeight - pr.height - 10) + 'px'; }
  }, 0);
};

window.pipelineTab = function(btn) {
  if (!btn) return;
  var tabs = document.querySelectorAll('#pipelineTabs button');
  tabs.forEach(function(b) {
    b.className = b === btn ? 'b b-dark' : 'b b-ghost';
    b.style.cssText = 'padding:4px 10px;font-size:11px;white-space:nowrap;flex-shrink:0;';
  });
  var tabName = btn.textContent.trim();
  var title = document.getElementById('pipelineTabTitle');
  if (title) title.textContent = tabName;
  var sec = document.getElementById('pipelineSection');
  if (sec) sec.textContent = tabName.toUpperCase();

  var D = window.AGNUS_DATA;
  var content = document.getElementById('pipelineTabBody');
  if (!content || !D) return;

  var paaHtml = (function() {
    var rowsHtml = D.paaQuestions.map(function(q, qi) {
      return '<div class="paa-row-click" onclick="window.showPaaPopup(this,' + qi + ')" style="display:grid;grid-template-columns:28px 28px 1fr 110px 80px 72px;gap:4px;padding:8px 14px;border-bottom:1px solid var(--line);align-items:center;' + (q.imported ? 'background:rgba(59,130,246,0.07);' : '') + '">'
        + '<input type="checkbox"' + (q.imported ? ' checked' : '') + ' style="accent-color:var(--blue);" onclick="event.stopPropagation()">'
        + '<span style="font-family:var(--font-mono);color:var(--ink-mute);font-size:10px;">' + (qi + 1) + '</span>'
        + '<span style="color:var(--ink);font-size:12px;font-weight:' + (q.imported ? '500' : '400') + ';overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="' + q.question + '">' + q.question + '</span>'
        + '<span style="font-size:11px;color:' + (q.intent === 'Commercial' ? 'var(--gold-deep)' : '#58a6ff') + ';">' + q.intent + '</span>'
        + '<span style="font-size:11px;color:var(--ink-mute);">' + (q.source || 'Google') + '</span>'
        + '<div style="display:flex;gap:8px;align-items:center;color:var(--ink-mute);font-size:11px;" onclick="event.stopPropagation()"><span style="cursor:pointer;font-size:13px;">👁</span><span style="cursor:pointer;">📌</span><span style="cursor:pointer;font-weight:700;">···</span></div>'
        + '</div>';
    }).join('');
    var paging = [1,2,3,4,5].map(function(n){ return '<button class="b b-ghost" style="width:24px;height:24px;padding:0;font-size:10px;' + (n===1?'border-color:var(--blue);color:var(--blue);':'') + '">' + n + '</button>'; }).join('');
    return '<div style="flex:1;min-width:0;display:flex;flex-direction:column;background:var(--card);border:1px solid var(--line);border-radius:10px;overflow:hidden;">'
      + '<div style="display:grid;grid-template-columns:28px 28px 1fr 110px 80px 72px;gap:4px;padding:8px 14px;background:var(--bg);border-bottom:1px solid var(--line);font-size:9px;font-weight:700;color:var(--ink-mute);letter-spacing:0.5px;text-transform:uppercase;font-family:var(--font-mono);"><div></div><div>#</div><div>Question</div><div>Intent</div><div>Source</div><div>Actions</div></div>'
      + '<div style="flex:1;overflow-y:auto;">' + rowsHtml + '</div>'
      + '<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 14px;border-top:1px solid var(--line);background:var(--bg);">'
      + '<span style="font-size:10px;color:var(--ink-mute);">Showing 1–10 of ' + D.paaTotal + ' · synced from Knowledge DB</span>'
      + '<div style="display:flex;gap:3px;">' + paging + '<button class="b b-ghost" style="width:24px;height:24px;padding:0;font-size:10px;">→</button></div>'
      + '</div></div>';
  })();

  var tabData = {
    'Keyword Intel': function() {
      var rows = [['Monthly Volume','12,400','#22c55e'],['Difficulty','31 / 100','#22c55e'],['Commercial Intent','High','#f59e0b'],['Business Value','★★★★★','#f59e0b'],['Voice Potential','Excellent','#a78bfa'],['AI Overview','High','#2dd4bf'],['Semantic Score','96%','#3b82f6'],['Trend','↑ Rising','#22c55e'],['Parent Topic','AI Restaurant Software','var(--ink)'],['Expected Traffic','+2,800/mo','#22c55e'],['Expected Revenue','€180/mo','#22c55e'],['Authority Gain','+12%','#22c55e']];
      return '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;overflow-y:auto;flex:1;">'
        + rows.map(function(r){ return '<div style="background:var(--card);border:1px solid var(--line);border-radius:8px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;"><span style="font-size:11px;color:var(--ink-mute);">' + r[0] + '</span><span style="font-size:12px;font-weight:700;color:' + r[2] + ';">' + r[1] + '</span></div>'; }).join('') + '</div>';
    },
    'Competitors': function() {
      var rawComps = D.competitors;
      var cColors = {'Gap':'rgba(239,68,68,0.15)','Thin':'rgba(245,158,11,0.15)','Weak':'rgba(107,114,128,0.15)','Partial':'rgba(59,130,246,0.15)'};
      var cText   = {'Gap':'#f87171','Thin':'#f59e0b','Weak':'#9ca3af','Partial':'#60a5fa'};
      if (rawComps && rawComps.length && rawComps[0].site !== undefined) {
        return '<div style="display:flex;flex-direction:column;gap:6px;overflow-y:auto;flex:1;">'
          + rawComps.map(function(c){ return '<div style="background:var(--card);border:1px solid var(--line);border-radius:8px;padding:10px 14px;display:grid;grid-template-columns:140px 70px 60px 1fr 80px;align-items:center;gap:8px;"><span style="font-size:12px;font-weight:600;color:var(--ink);">' + c.site + '</span><span class="pill ghost" style="font-size:10px;">DR ' + c.dr + '</span><span style="font-size:11px;color:var(--ink-mute);">Rank #' + c.rank + '</span><span style="font-size:11px;color:var(--ink-mute);">' + c.gap + '</span><span class="pill" style="font-size:10px;background:' + (cColors[c.colKey]||'rgba(239,68,68,0.15)') + ';color:' + (cText[c.colKey]||'#f87171') + ';">' + c.colKey + '</span></div>'; }).join('') + '</div>';
      }
      var comps = [['Backlinko','DR 92','#1','Missing buying-guide','Gap'],['HubSpot','DR 88','#2','No hospitality angle','Gap'],['Zapier','DR 85','#3','No restaurant use case','Gap'],['Toast POS','DR 74','#5','Weak affiliate coverage','Thin'],['G2','DR 79','#4','No comparison table','Gap']];
      return '<div style="display:flex;flex-direction:column;gap:6px;overflow-y:auto;flex:1;">'
        + comps.map(function(c){ return '<div style="background:var(--card);border:1px solid var(--line);border-radius:8px;padding:10px 14px;display:grid;grid-template-columns:140px 70px 60px 1fr 70px;align-items:center;gap:8px;"><span style="font-size:12px;font-weight:600;color:var(--ink);">' + c[0] + '</span><span class="pill ghost" style="font-size:10px;">' + c[1] + '</span><span style="font-size:11px;color:var(--ink-mute);">Rank ' + c[2] + '</span><span style="font-size:11px;color:var(--ink-mute);">' + c[3] + '</span><span class="pill" style="background:rgba(239,68,68,0.15);color:#f87171;">' + c[4] + '</span></div>'; }).join('') + '</div>';
    },
    'PAA': function() { return paaHtml; },
    'Voice Search': function() {
      var mic = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>';
      var phrases = D.voiceQueries;
      if (phrases && phrases.length && phrases[0].q !== undefined) {
        return '<div style="display:flex;flex-direction:column;gap:6px;overflow-y:auto;flex:1;">'
          + phrases.map(function(p){ return '<div style="background:var(--card);border:1px solid var(--line);border-radius:8px;padding:10px 14px;display:flex;align-items:center;gap:12px;">' + mic + '<span style="flex:1;font-size:12px;color:var(--ink);">' + p.q + '</span><span class="pill" style="font-size:10px;background:rgba(34,197,94,0.08);color:' + p.statusColor + ';">' + p.status + '</span></div>'; }).join('') + '</div>';
      }
      var fallback = [['What AI tools help restaurants manage bookings?','Featured Snippet','#22c55e'],['Can AI reduce restaurant no-shows?','Position 3','#f59e0b'],['Best AI for restaurant customer service?','Not ranked','#6b7280'],['How much does AI for restaurants cost?','Position 7','#f59e0b'],['Does OpenAI have a restaurant product?','AI Overview','#2dd4bf']];
      return '<div style="display:flex;flex-direction:column;gap:6px;overflow-y:auto;flex:1;">'
        + fallback.map(function(p){ return '<div style="background:var(--card);border:1px solid var(--line);border-radius:8px;padding:10px 14px;display:flex;align-items:center;gap:12px;">' + mic + '<span style="flex:1;font-size:12px;color:var(--ink);">' + p[0] + '</span><span class="pill" style="font-size:10px;background:rgba(34,197,94,0.08);color:' + p[2] + ';">' + p[1] + '</span></div>'; }).join('') + '</div>';
    },
    'Semantic': function() {
      var semEnts = D.semanticEntities;
      if (semEnts && semEnts.length && semEnts[0].label !== undefined) {
        return '<div style="display:flex;flex-wrap:wrap;gap:6px;overflow-y:auto;flex:1;align-content:flex-start;">'
          + semEnts.map(function(e){ return '<div style="background:var(--card);border:1px solid var(--line);border-radius:20px;padding:6px 14px;display:flex;align-items:center;gap:7px;"><div style="width:6px;height:6px;border-radius:50%;background:' + e.color + ';flex-shrink:0;"></div><span style="font-size:12px;color:var(--ink);">' + e.label + '</span><span style="font-size:10px;color:var(--ink-mute);">' + e.role + '</span></div>'; }).join('') + '</div>';
      }
      var entities = [['AI Agent','Core','#3b82f6'],['Restaurant Automation','Core','#3b82f6'],['OpenAI','Entity','#8b5cf6'],['Claude','Entity','#8b5cf6'],['ElevenLabs','Entity','#8b5cf6'],['OpenTable','Tool','#f59e0b'],['No-show Reduction','Concept','#22c55e'],['Voice Receptionist','Concept','#22c55e'],['Hospitality AI','Cluster','#2dd4bf'],['ROI Calculator','Supporting','#6b7280']];
      return '<div style="display:flex;flex-wrap:wrap;gap:6px;overflow-y:auto;flex:1;align-content:flex-start;">'
        + entities.map(function(e){ return '<div style="background:var(--card);border:1px solid var(--line);border-radius:20px;padding:6px 14px;display:flex;align-items:center;gap:7px;"><div style="width:6px;height:6px;border-radius:50%;background:' + e[2] + ';flex-shrink:0;"></div><span style="font-size:12px;color:var(--ink);">' + e[0] + '</span><span style="font-size:10px;color:var(--ink-mute);">' + e[1] + '</span></div>'; }).join('') + '</div>';
    },
    'Entities': function() {
      var dynEnts = D.entities;
      if (dynEnts && dynEnts.length && dynEnts[0].label !== undefined) {
        return '<div style="display:flex;flex-direction:column;gap:6px;overflow-y:auto;flex:1;">'
          + dynEnts.map(function(e){ return '<div style="background:var(--card);border:1px solid var(--line);border-radius:8px;padding:10px 14px;display:grid;grid-template-columns:1fr 100px 80px;align-items:center;gap:8px;"><span style="font-size:12px;font-weight:600;color:var(--ink);">' + e.label + '</span><span class="pill ghost" style="font-size:10px;">' + e.type + '</span><span class="pill" style="font-size:10px;background:rgba(34,197,94,0.08);color:' + e.color + ';">' + e.status + '</span></div>'; }).join('') + '</div>';
      }
      var ents = [['OpenAI','Organisation','Verified','#22c55e'],['Claude / Anthropic','Organisation','Verified','#22c55e'],['OpenTable','Product','Verified','#22c55e'],['ElevenLabs','Organisation','Linked','#3b82f6'],['Google','Organisation','Verified','#22c55e'],['Toast POS','Product','Linked','#3b82f6'],['Gemini','Product','Verified','#22c55e']];
      return '<div style="display:flex;flex-direction:column;gap:6px;overflow-y:auto;flex:1;">'
        + ents.map(function(e){ return '<div style="background:var(--card);border:1px solid var(--line);border-radius:8px;padding:10px 14px;display:grid;grid-template-columns:1fr 100px 80px;align-items:center;gap:8px;"><span style="font-size:12px;font-weight:600;color:var(--ink);">' + e[0] + '</span><span class="pill ghost" style="font-size:10px;">' + e[1] + '</span><span class="pill" style="font-size:10px;background:rgba(34,197,94,0.1);color:' + e[3] + ';">' + e[2] + '</span></div>'; }).join('') + '</div>';
    },
    'Sources': function() {
      var srcs = D.knowledgeSources.map(function(s, i){ return [s.name, 'Live', [94,91,88,85,97,78,92,86,89][i]||90]; });
      return '<div style="display:flex;flex-direction:column;gap:6px;overflow-y:auto;flex:1;">'
        + srcs.map(function(s){ return '<div style="background:var(--card);border:1px solid var(--line);border-radius:8px;padding:10px 14px;display:flex;align-items:center;gap:12px;"><div style="width:7px;height:7px;border-radius:50%;background:#22c55e;flex-shrink:0;"></div><span style="flex:1;font-size:12px;color:var(--ink);">' + s[0] + '</span><span class="pill green" style="font-size:10px;">' + s[1] + '</span><span style="font-size:11px;color:var(--ink-mute);">Trust ' + s[2] + '%</span></div>'; }).join('') + '</div>';
    }
  };

  var fn = tabData[tabName];
  content.innerHTML = fn ? fn() : '<div style="padding:24px;color:var(--ink-mute);font-size:12px;text-align:center;">' + tabName + ' data loading…</div>';
};

window.pipelineStepClick = function(i) {
  var D = window.AGNUS_DATA;
  if (!D) return;
  var step = D.mission.steps[i];
  if (!step) return;

  /* highlight active step card */
  document.querySelectorAll('.stage div[onclick^="pipelineStepClick"]').forEach(function(el, idx) {
    el.style.outline = idx === i ? '2px solid var(--blue)' : '';
    el.style.background = idx === i ? 'rgba(59,130,246,0.06)' : '';
  });

  /* update section label */
  var sec = document.getElementById('pipelineSection');
  if (sec) sec.textContent = step.label.toUpperCase();

  var body = document.getElementById('pipelineTabBody');
  if (!body) return;

  var stepContent = {
    0: function() {
      var D = window.AGNUS_DATA;
      body.innerHTML = '<div style="flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:14px;padding:4px 0;">'
        /* keyword input */
        + '<div style="background:var(--card);border:1px solid var(--line);border-radius:10px;padding:18px 20px;">'
        +   '<div style="font-size:10px;font-weight:700;color:var(--ink-mute);text-transform:uppercase;letter-spacing:0.6px;margin-bottom:10px;">Target Keyword</div>'
        +   '<div style="display:flex;gap:8px;align-items:center;">'
        +     '<input id="researchKwInput" type="text" value="best AI agents for restaurants" placeholder="Enter keyword or topic…" style="flex:1;background:var(--bg);border:1px solid var(--line);border-radius:7px;padding:9px 14px;font-size:13px;color:var(--ink);font-family:var(--font-sans);outline:none;" onfocus="this.style.borderColor=\'var(--blue)\'" onblur="this.style.borderColor=\'var(--line)\'">'
        +     '<button class="b b-dark" style="padding:9px 18px;font-size:12px;white-space:nowrap;" onclick="agnusResearchKeyword()">⌕ Research</button>'
        +   '</div>'
        +   '<div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap;" id="researchKwChips">'
        +     ['best AI agents for restaurants','AI restaurant automation','restaurant AI tools','AI booking system'].map(function(kw){
                return '<button class="b b-ghost" style="font-size:10px;padding:3px 10px;" onclick="document.getElementById(\'researchKwInput\').value=this.textContent.trim();this.closest(\'div\').querySelectorAll(\'button\').forEach(function(b){b.className=\'b b-ghost\';b.style.cssText=\'font-size:10px;padding:3px 10px;\'});this.className=\'b b-dark\';this.style.cssText=\'font-size:10px;padding:3px 10px;\'">' + kw + '</button>';
              }).join('')
        +   '</div>'
        + '</div>'
        /* keyword intel grid */
        + '<div style="background:var(--card);border:1px solid var(--line);border-radius:10px;padding:14px 16px;">'
        +   '<div style="font-size:10px;font-weight:700;color:var(--ink-mute);text-transform:uppercase;letter-spacing:0.6px;margin-bottom:10px;">Keyword Intel</div>'
        +   '<div id="researchIntelGrid" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">'
        +     [['Monthly Volume','12,400','#22c55e'],['Difficulty','31 / 100','#22c55e'],['Commercial Intent','High','#f59e0b'],['Business Value','★★★★★','#f59e0b'],['Voice Potential','Excellent','#a78bfa'],['AI Overview','High','#2dd4bf'],['Semantic Score','96%','#3b82f6'],['Trend','↑ Rising','#22c55e'],['Expected Traffic','+2,800/mo','#22c55e'],['Expected Revenue','€180/mo','#22c55e']].map(function(r){
                return '<div style="background:var(--bg);border:1px solid var(--line);border-radius:7px;padding:9px 12px;display:flex;justify-content:space-between;align-items:center;"><span style="font-size:11px;color:var(--ink-mute);">' + r[0] + '</span><span style="font-size:12px;font-weight:700;color:' + r[2] + ';">' + r[1] + '</span></div>';
              }).join('')
        +   '</div>'
        + '</div>'
        /* sources used */
        + '<div style="background:var(--card);border:1px solid var(--line);border-radius:10px;padding:14px 16px;">'
        +   '<div style="font-size:10px;font-weight:700;color:var(--ink-mute);text-transform:uppercase;letter-spacing:0.6px;margin-bottom:8px;">Sources Queried</div>'
        +   '<div style="display:flex;flex-wrap:wrap;gap:6px;">'
        +     (D && D.knowledgeSources ? D.knowledgeSources.map(function(s){ return '<span class="pill ghost" style="font-size:10px;display:flex;align-items:center;gap:5px;"><span style="width:5px;height:5px;border-radius:50%;background:var(--success);display:inline-block;"></span>' + s.name + '</span>'; }).join('') : '')
        +   '</div>'
        + '</div>'
        + '</div>';

      /* make "Research" chip active by default */
      var chips = document.querySelectorAll('#researchKwChips button');
      if (chips.length) { chips[0].className = 'b b-dark'; chips[0].style.cssText = 'font-size:10px;padding:3px 10px;'; }

      /* define research action */
      window.agnusResearchKeyword = function() {
        var kwEl = document.getElementById('researchKwInput');
        if (!kwEl) return;
        var val = kwEl.value.trim();
        if (!val) return;

        /* seed a deterministic hash from the keyword for consistent mock data */
        var hash = 0;
        for (var i = 0; i < val.length; i++) hash = (hash * 31 + val.charCodeAt(i)) & 0xfffff;
        var vol     = (1200 + (hash % 48) * 250).toLocaleString();
        var diff    = 18 + (hash % 60);
        var diffCol = diff < 35 ? '#22c55e' : diff < 60 ? '#f59e0b' : '#ef4444';
        var intents = ['Commercial','Informational','Navigational','Transactional'];
        var intent  = intents[hash % intents.length];
        var intentCol = intent === 'Commercial' || intent === 'Transactional' ? '#f59e0b' : '#3b82f6';
        var stars   = '★'.repeat(Math.max(2, 5 - (hash % 4))) + '☆'.repeat(Math.min(3, hash % 4));
        var voices  = ['Excellent','Good','Moderate','Low'];
        var voice   = voices[hash % voices.length];
        var voiceCol= voice === 'Excellent' ? '#22c55e' : voice === 'Good' ? '#a78bfa' : '#f59e0b';
        var aio     = ['High','Medium','Low'][hash % 3];
        var aioCol  = aio === 'High' ? '#2dd4bf' : aio === 'Medium' ? '#f59e0b' : '#6b7280';
        var sem     = (72 + (hash % 26)) + '%';
        var trends  = ['↑ Rising','→ Stable','↓ Declining','↑ Surging'];
        var trend   = trends[hash % trends.length];
        var trendCol= trend.startsWith('↑') ? '#22c55e' : trend.startsWith('→') ? '#f59e0b' : '#ef4444';
        var traffic = '+' + (400 + (hash % 50) * 80).toLocaleString() + '/mo';
        var rev     = '€' + (40 + (hash % 30) * 12) + '/mo';

        var rows = [
          ['Monthly Volume', vol, '#22c55e'],
          ['Difficulty', diff + ' / 100', diffCol],
          ['Commercial Intent', intent, intentCol],
          ['Business Value', stars, '#f59e0b'],
          ['Voice Potential', voice, voiceCol],
          ['AI Overview', aio, aioCol],
          ['Semantic Score', sem, '#3b82f6'],
          ['Trend', trend, trendCol],
          ['Expected Traffic', traffic, '#22c55e'],
          ['Expected Revenue', rev, '#22c55e']
        ];

        var grid = document.querySelector('#researchIntelGrid');
        if (!grid) return;

        /* flash */
        grid.style.opacity = '0.3';
        grid.style.transition = 'opacity 0.15s';
        setTimeout(function() {
          grid.innerHTML = rows.map(function(r){
            return '<div style="background:var(--bg);border:1px solid var(--line);border-radius:7px;padding:9px 12px;display:flex;justify-content:space-between;align-items:center;"><span style="font-size:11px;color:var(--ink-mute);">' + r[0] + '</span><span style="font-size:12px;font-weight:700;color:' + r[2] + ';">' + r[1] + '</span></div>';
          }).join('');
          grid.style.opacity = '1';

          /* also regenerate PAA questions for this keyword */
          var intTemplates = [
            'What is the best {kw}?',
            'How much does {kw} cost?',
            'Is {kw} worth it?',
            'What are the benefits of {kw}?',
            'How to choose a {kw}?',
            'What is the difference between {kw} and alternatives?',
            'How does {kw} work?',
            'What should I look for in {kw}?',
            'How long does {kw} take?',
            'Is {kw} safe?',
            'Can beginners use {kw}?',
            'What are the top {kw} near me?',
            'How to get started with {kw}?',
            'What are common mistakes with {kw}?',
            'What results can I expect from {kw}?',
            'How often should I use {kw}?',
            'Are there free options for {kw}?',
            'What are the pros and cons of {kw}?',
            'Who provides the best {kw}?',
            'What questions should I ask about {kw}?',
            'Can I find {kw} online?',
            'What makes a good {kw}?',
            'Why is {kw} important?',
            'What are alternatives to {kw}?',
            'How do I compare {kw} options?'
          ];
          var intents2 = ['Informational','Commercial','Navigational','Transactional'];
          var difficulties = ['Easy','Medium','Hard'];
          var newQ = [];
          for (var qi = 0; qi < 25; qi++) {
            var qhash = (hash * 7 + qi * 31 + qi * qi) & 0xfffff;
            var template = intTemplates[qhash % intTemplates.length];
            var q = template.replace(/{kw}/g, val);
            var imp = qi < 3;
            newQ.push({
              id: qi + 1,
              question: q,
              intent: intents2[qhash % intents2.length],
              difficulty: difficulties[qhash % difficulties.length],
              volume: 100 + (qhash % 40) * 50,
              source: 'Google',
              imported: imp
            });
          }
          D.paaQuestions = newQ;
          D.paaTotal = newQ.length;

          /* --- Generate competitors from keyword --- */
          var compSites = ['Wikipedia','Forbes','Healthline','WebMD','Reddit','Quora','HubSpot','Moz','Backlinko','Ahrefs','G2','Capterra','TechCrunch','Wired','PCMag','CNET','TheVerge','Investopedia','NerdWallet','Shopify','Buffer','Hootsuite','Semrush','Zapier','Notion','Medium'];
          var gapTypes  = ['Thin content','No comparison table','Missing buying guide','No expert quotes','Weak affiliate coverage','No local angle','Missing case studies','No video','Poor mobile UX','No schema markup','Outdated 2023','No FAQ section'];
          var gapKeys   = ['Gap','Thin','Weak','Partial','Gap','Gap','Thin','Weak','Gap','Partial','Thin','Gap'];
          var newComps = [];
          var usedSites = {};
          var ci = 0; var attempts = 0;
          while (ci < 6 && attempts < 40) {
            var chash2 = (hash * 13 + ci * 41 + attempts * 7) & 0xfffff;
            var site = compSites[chash2 % compSites.length];
            attempts++;
            if (usedSites[site]) continue;
            usedSites[site] = true;
            var dr   = 60 + (chash2 % 35);
            var gap2 = gapTypes[chash2 % gapTypes.length];
            var colk = gapKeys[chash2 % gapKeys.length];
            newComps.push({ site: site, dr: dr, rank: ci + 1, gap: gap2, colKey: colk });
            ci++;
          }
          D.competitors = newComps;

          /* --- Generate voice queries from keyword --- */
          var vTemplates = [
            'What is the best ' + val + '?',
            'Where can I find ' + val + ' near me?',
            'How do I choose the right ' + val + '?',
            'Is ' + val + ' worth it?',
            'Can you recommend a good ' + val + '?',
            'What should I look for in ' + val + '?',
            'How much does ' + val + ' cost?'
          ];
          var vStatuses = [['Featured Snippet','#22c55e'],['Position 3','#f59e0b'],['Not ranked','#6b7280'],['Position 7','#f59e0b'],['AI Overview','#2dd4bf'],['Position 2','#22c55e'],['Not ranked','#6b7280']];
          var newVoice = vTemplates.slice(0, 5).map(function(q, vi) {
            var vhash = (hash * 11 + vi * 37) & 0xfffff;
            var st = vStatuses[vhash % vStatuses.length];
            return { q: q, status: st[0], statusColor: st[1] };
          });
          D.voiceQueries = newVoice;

          /* --- Generate semantic entities from keyword --- */
          var words2 = val.split(/\s+/).filter(function(w){ return w.length > 2; });
          if (!words2.length) words2 = [val];
          var semRoles   = ['Core','Core','Entity','Entity','Entity','Tool','Concept','Concept','Cluster','Supporting'];
          var semColors  = {'Core':'#3b82f6','Entity':'#8b5cf6','Tool':'#f59e0b','Concept':'#22c55e','Cluster':'#2dd4bf','Supporting':'#6b7280'};
          var semSuffixes = [' Guide',' Review',' Tutorial',' Overview',' Analysis',' Expert',' Market',' Solutions',' Industry',' Insights'];
          var newSem = semRoles.map(function(role, si) {
            var shash2 = (hash * 17 + si * 43) & 0xfffff;
            var wrd = words2[shash2 % words2.length];
            var wCap = wrd.charAt(0).toUpperCase() + wrd.slice(1);
            var label2 = si === 0 ? val : si === 1 ? (val + ' Comparison') : wCap + semSuffixes[shash2 % semSuffixes.length];
            return { label: label2, role: role, color: semColors[role] };
          });
          D.semanticEntities = newSem;

          /* --- Generate entities from keyword --- */
          var entTypes2   = ['Concept','Organisation','Product','Location','Topic'];
          var entStatuses2= [['Verified','#22c55e'],['Linked','#3b82f6'],['Partial','#f59e0b']];
          var entSuffixes2= [' Industry','s',' Market',' Solutions',' Guide',' Expert','s'];
          var newEnts = [];
          for (var ei = 0; ei < 7; ei++) {
            var ehash = (hash * 19 + ei * 47) & 0xfffff;
            var wrd2 = words2[ehash % words2.length];
            var wCap2 = wrd2.charAt(0).toUpperCase() + wrd2.slice(1);
            var lbl = ei === 0 ? val : wCap2 + entSuffixes2[ehash % entSuffixes2.length];
            var typ = entTypes2[ehash % entTypes2.length];
            var est = entStatuses2[ehash % entStatuses2.length];
            newEnts.push({ label: lbl, type: typ, status: est[0], color: est[1] });
          }
          D.entities = newEnts;

          /* --- Update mission title --- */
          D.mission.title = val.charAt(0).toUpperCase() + val.slice(1);
          var missionEl = document.querySelector('[id="pipelineSection"]');
          var mBar = document.querySelector('.pipeline-mode [style*="Mission:"] b');
          if (mBar) mBar.textContent = D.mission.title;

          /* if any tab is active, refresh it */
          var pipelineTabs = document.getElementById('pipelineTabs');
          if (pipelineTabs) {
            var activeTab = pipelineTabs.querySelector('.b-dark');
            if (activeTab) { activeTab.click(); }
          }
        }, 200);
      };
    },
    1: function() {
      var kw = (D.mission.title || 'your topic');
      var kwL = kw.toLowerCase();
      var contentTypes = ['Buying Guide','Listicle','Deep Dive','Comparison','How-To Guide'];
      var audiences = ['Professionals in the field','Business owners','Researchers & students','Decision makers'];
      var hash1 = 0; for(var ci=0;ci<kwL.length;ci++) hash1=(hash1*31+kwL.charCodeAt(ci))&0xfffff;
      var sugTypes = [contentTypes[hash1%contentTypes.length], contentTypes[(hash1+1)%contentTypes.length]];
      var sugAud = [audiences[hash1%audiences.length], audiences[(hash1+2)%audiences.length]];
      var intents2 = ['Commercial Investigation','Informational','Transactional'];
      var formats = ['Long-form 2,500–3,500 words','Structured H2s','Comparison table','FAQ section'];
      var angles = ['Comprehensive comparison of options for '+kw,'Beginner-friendly guide to '+kw,'Expert deep-dive: '+kw+' best practices','ROI analysis: is '+kw+' worth it?'];
      var strategy = [
        ['Content Type', sugTypes],
        ['Audience', sugAud],
        ['Intent', [intents2[hash1%intents2.length]]],
        ['Format', [formats[hash1%formats.length], formats[(hash1+2)%formats.length]]],
        ['Angle', [angles[hash1%angles.length]]]
      ];
      body.innerHTML = '<div style="flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:10px;padding:4px 0;">'
        + '<div style="background:rgba(88,166,255,.06);border:1px solid rgba(88,166,255,.15);border-radius:8px;padding:10px 14px;font-size:11px;color:var(--ink-mute);">Strategy derived from keyword: <span style="color:var(--blue);font-weight:600;">'+kw+'</span></div>'
        + strategy.map(function(pair){
          return '<div style="background:var(--card);border:1px solid var(--line);border-radius:8px;padding:12px 16px;">'
            + '<div style="font-size:10px;font-weight:700;color:var(--ink-mute);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;">'+pair[0]+'</div>'
            + '<div style="display:flex;flex-wrap:wrap;gap:6px;">' + pair[1].map(function(v){ return '<span class="pill gold" style="font-size:11px;">'+v+'</span>'; }).join('') + '</div>'
            + '</div>';
        }).join('') + '</div>';
    },
    2: function() {
      var kw = (D.mission.title || 'your topic');
      var kwCap = kw.charAt(0).toUpperCase() + kw.slice(1);
      var kwL = kw.toLowerCase();
      var hash2 = 0; for(var ci=0;ci<kwL.length;ci++) hash2=(hash2*31+kwL.charCodeAt(ci))&0xfffff;
      var wc = (2400+(hash2%12)*100) + '–' + (3200+(hash2%8)*100) + ' words';
      var year = 2026;
      var schemas = ['Article + FAQ + HowTo','Article + FAQ + Product','Article + HowTo + Review','Article + FAQ + BreadcrumbList'];
      var secs = [
        ['Title', kwCap + ' — The Complete Buying Guide ('+year+')'],
        ['Meta Description', 'Discover the best '+kwL+' in '+year+'. Compare options, pricing, and features to find the right fit.'],
        ['Word Count', wc],
        ['Primary Keyword', kwL],
        ['Secondary Keywords', kwL+' guide, best '+kwL+', '+kwL+' comparison, '+kwL+' review'],
        ['EEAT Signals', 'Author bio, expert quotes, original data, case studies, last-reviewed date'],
        ['Schema', schemas[hash2%schemas.length]],
        ['Internal Links', '5 minimum — Reviews, Comparisons, Tools pages']
      ];
      body.innerHTML = '<div style="flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:8px;padding:4px 0;">'
        + '<div style="background:rgba(88,166,255,.06);border:1px solid rgba(88,166,255,.15);border-radius:8px;padding:10px 14px;font-size:11px;color:var(--ink-mute);">Brief generated for: <span style="color:var(--blue);font-weight:600;">'+kw+'</span></div>'
        + secs.map(function(r){ return '<div style="background:var(--card);border:1px solid var(--line);border-radius:8px;padding:10px 16px;display:grid;grid-template-columns:160px 1fr;gap:12px;align-items:start;"><span style="font-size:10px;font-weight:700;color:var(--ink-mute);text-transform:uppercase;letter-spacing:0.5px;padding-top:2px;">'+r[0]+'</span><span style="font-size:12px;color:var(--ink);line-height:1.5;">'+r[1]+'</span></div>'; }).join('') + '</div>';
    },
    3: function() {
      var kw = (D.mission.title || 'your topic');
      var kwCap = kw.charAt(0).toUpperCase() + kw.slice(1);
      var kwL = kw.toLowerCase();
      var hash3 = 0; for(var ci=0;ci<kwL.length;ci++) hash3=(hash3*31+kwL.charCodeAt(ci))&0xfffff;
      var topN = 5 + (hash3%8);
      var sections = [
        ['H1', kwCap + ' — The Complete Guide (2026)', 'Write a commanding H1 that includes the primary keyword naturally and signals value.'],
        ['H2', 'What Is '+kwCap+'?', 'Define the topic clearly. Cover what it is, why it matters, and who it is for.'],
        ['H2', 'Top '+topN+' Options Reviewed', 'List top options with name, key feature, price, rating, and best-for in a scannable format.'],
        ['H2', 'How to Choose the Right '+kwCap, 'Write a decision framework covering key criteria, budget, use case, and red flags.'],
        ['H2', 'Getting Started: Step-by-Step', 'Step-by-step onboarding guide. Include setup, first use, and measuring success.'],
        ['H2', kwCap+' vs Alternatives', 'Compare against 2–3 competing approaches. Honest pros/cons.'],
        ['FAQ', '5 Questions from PAA', 'Answer each PAA question in 60–80 words. Conversational, direct tone. Add schema markup.']
      ];
      body.innerHTML = '<div style="flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:6px;padding:4px 0;">'
        + '<div style="background:rgba(88,166,255,.06);border:1px solid rgba(88,166,255,.15);border-radius:8px;padding:10px 14px;font-size:11px;color:var(--ink-mute);">Blueprint generated for: <span style="color:var(--blue);font-weight:600;">'+kw+'</span></div>'
        + sections.map(function(s){ return '<div style="background:var(--card);border:1px solid var(--line);border-radius:8px;padding:10px 16px;">'
          + '<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;"><span class="pill ghost" style="font-size:10px;font-family:var(--font-mono);">'+s[0]+'</span><span style="font-size:12px;font-weight:600;color:var(--ink);">'+s[1]+'</span></div>'
          + '<div style="font-size:11px;color:var(--ink-mute);font-style:italic;padding-left:4px;">'+s[2]+'</div>'
          + '</div>'; }).join('') + '</div>';
    },
    4: function() {
      body.innerHTML = '<div style="flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;color:var(--ink-mute);">'
        + '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>'
        + '<div style="text-align:center;"><div style="font-size:14px;font-weight:600;color:var(--ink);margin-bottom:4px;">Create Draft</div><div style="font-size:12px;">Complete Brief &amp; Blueprint first, then AI Writer generates your draft.</div></div>'
        + '<button class="b b-gold b-lg" onclick="GO(\'writer\')">Open AI Writer \u2192</button>'
        + '</div>';
    }
  };

  var fn = stepContent[i];
  if (fn) fn();
  else {
    body.innerHTML = '<div style="flex:1;display:flex;align-items:center;justify-content:center;color:var(--ink-mute);font-size:12px;">'
      + step.label + ' \u2014 coming soon</div>';
  }
};
