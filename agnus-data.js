/*
 * This application and all the work related to Agnus and for Agnus is sanctified and covered
 * by The Blood of Jesus Christ. No work of darkness nor any dark code is allowed.
 * The entire application is saturated by the Blood of Jesus Christ, and by the 888 Hz frequency
 * from The Throne of The Lamb of God, The Lord Jesus Christ.
 * This application is Holy.
 *//* AGNUS shared data layer */
window.AGNUS_DATA = {
  mission: {
    title: 'Best AI Agents for Restaurants — Buying Guide',
    metrics: { seo: 65, geo: 58, eeat: 72, voice: 44, aiSearch: 81 },
    estRemaining: '1h 42min remaining',
    progress: 30,
    overview: { completed: 2, inProgress: 1, notStarted: 6, blocked: 0, needsReview: 1 },
    steps: [
      { label:'Research',    desc:'Keyword + PAA + competitor intelligence', icon:'search',   status:'completed',   time:'Done · 3 min' },
      { label:'Strategy',    desc:'Audience, intent, content type selection', icon:'target',   status:'completed',   time:'Done · 2 min' },
      { label:'Brief',       desc:'Full article brief with EEAT signals',     icon:'file',     status:'in_progress', time:'~12 min' },
      { label:'Blueprint',   desc:'H2 prompts, schema plan, image brief',     icon:'grid',     status:'not_started', time:'~8 min' },
      { label:'Create',      desc:'AI-generated first draft',                 icon:'star',     status:'not_started', time:'~14 min' },
      { label:'Media',       desc:'Image SEO, alt-text, infographic brief',   icon:'sparkle',  status:'not_started', time:'~6 min' },
      { label:'Enrich',      desc:'Meta, schema, internal links, entities',   icon:'sparkle',  status:'not_started', time:'~10 min' },
      { label:'Verify',      desc:'EEAT check, fact-verify, plagiarism scan', icon:'shield',   status:'not_started', time:'~5 min' },
      { label:'Publish',     desc:'Push to CMS, schedule, notify team',       icon:'upload',   status:'not_started', time:'~3 min' },
      { label:'Monitor',     desc:'Track rankings, clicks, conversions',      icon:'trending', status:'not_started', time:'Ongoing' }
    ]
  },
  paaTotal: 47,
  paaQuestions: [
    { id:'Q01', question:'What AI tools help restaurants manage bookings?',          intent:'Commercial',   source:'Google PAA', imported:true },
    { id:'Q02', question:'Can AI reduce restaurant no-shows?',                       intent:'Informational',source:'Google PAA', imported:true },
    { id:'Q03', question:'Best AI for restaurant customer service?',                 intent:'Commercial',   source:'Google PAA', imported:false },
    { id:'Q04', question:'How much does AI for restaurants cost?',                   intent:'Transactional',source:'Google PAA', imported:false },
    { id:'Q05', question:'What is an AI agent for hospitality?',                     intent:'Informational',source:'Google PAA', imported:false },
    { id:'Q06', question:'Which restaurants use AI successfully?',                   intent:'Informational',source:'Semrush',     imported:false },
    { id:'Q07', question:'Can AI write restaurant menu descriptions?',               intent:'Commercial',   source:'AlsoAsked',  imported:false },
    { id:'Q08', question:'How to automate restaurant review replies with AI?',       intent:'Commercial',   source:'AlsoAsked',  imported:true },
    { id:'Q09', question:'What is the ROI of AI for a restaurant?',                 intent:'Commercial',   source:'Google PAA', imported:false },
    { id:'Q10', question:'Does OpenAI offer a restaurant AI product?',              intent:'Informational',source:'Google PAA', imported:false }
  ],
  paaDetail: {
    question: 'What AI tools help restaurants manage bookings?',
    source: 'Google PAA · Position 1',
    intent: 'Commercial Investigation',
    appearsOn: ['OpenTable','Resy','Toast POS','SevenRooms'],
    appearsOnMore: 9,
    relatedKeywords: ['AI booking software','restaurant automation','AI receptionist'],
    voiceVariants: [
      'Hey Google, what AI tools help restaurants manage bookings?',
      'Alexa, best AI for restaurant reservations?',
      'Siri, which AI handles restaurant booking?'
    ]
  },
  knowledgeSources: [
    { name:'Google Search Console' },
    { name:'Google Trends' },
    { name:'Semrush API' },
    { name:'AlsoAsked' },
    { name:'Knowledge Database' },
    { name:'Competitor Monitor' },
    { name:'Entity Graph' },
    { name:'AGNUS Memory' },
    { name:'Affiliate Feed' }
  ],
  agent: {
    name: 'AGNUS Research Agent v2',
    mode: 'Deep Research',
    temperature: '0.3',
    memory: 'Active'
  },
  ledger: [
    { time:'09:14',  title:'Keyword locked',      detail1:'classic cars fiat 500',         detail2:'Confidence 94%' },
    { time:'09:15',  title:'PAA pulled',           detail1:'47 questions found',            detail2:'10 imported' },
    { time:'09:16',  title:'Competitors scanned',  detail1:'Backlinko · HubSpot · Zapier',  detail2:'3 gaps found' },
    { time:'09:17',  title:'Entities extracted',   detail1:'12 entities confirmed',         detail2:'OpenAI · Claude · Gemini' },
    { time:'09:18',  title:'Strategy set',         detail1:'Buying guide · SMB audience',   detail2:'Commercial intent' },
    { time:'09:19',  title:'Brief started',        detail1:'EEAT signals mapped',           detail2:'Score: 72/100' },
    { time:'09:20',  title:'Schema planned',       detail1:'Article + FAQ + HowTo',         detail2:'Auto-generated' }
  ]
};
