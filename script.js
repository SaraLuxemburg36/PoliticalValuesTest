// =============================
// STRUTTURA DOMANDE
// =============================

// Ogni domanda ha: testo, livello, asse (politico/economico), orientamento (es. libertarismo, autoritarismo...), valori di punteggio
const questions = [
    // =====================
    // LIVELLO 1 - POLITICO
    // =====================
    { text: "Il corpo di ciascun individuo è sua proprietà e nessuno può disporne al suo posto.", level: 1, axis: "politico", orientation: "libertarismo" },
    { text: "L'autonomia del corpo si estende a tutti, compresi i portatori di disabilità, i criminali e i minori.", level: 1, axis: "politico", orientation: "libertarismo" },
    { text: "La democrazia, ossia il potere popolare, è fondamentale per una società sviluppata.", level: 1, axis: "politico", orientation: "libertarismo" },
    { text: "Lo Stato è un ostacolo alla libertà individuale.", level: 1, axis: "politico", orientation: "libertarismo" },
    { text: "Le scuole statali sono dannose per la società perché indottrinano i ragazzi.", level: 1, axis: "politico", orientation: "libertarismo" },
    { text: "Il nazionalismo e il patriottismo sono ideali inaccettabili in una società sviluppata.", level: 1, axis: "politico", orientation: "libertarismo" },
    { text: "In generale, droga e fumo andrebbero legalizzati.", level: 1, axis: "politico", orientation: "libertarismo" },
    { text: "Ogni forma di autorità dovrebbe essere soppressa.", level: 1, axis: "politico", orientation: "libertarismo" },
    { text: "I tre poteri dello Stato (legislativo, esecutivo e giudiziario) devono essere separati per evitare il dispotismo.", level: 1, axis: "politico", orientation: "libertarismo" },
    { text: "Ogni limitazione della libertà deve essere giustificata da un bene superiore e ridotta al minimo indispensabile.", level: 1, axis: "politico", orientation: "libertarismo" },
    { text: "Un individuo può essere punito solo nel momento in cui reca danno a un altro individuo.", level: 1, axis: "politico", orientation: "libertarismo" },
    { text: "Le carceri sono istituzioni oppressive e andrebbero abolite.", level: 1, axis: "politico", orientation: "libertarismo" },
    { text: "La libertà è sempre la libertà di chi la pensa diversamente.", level: 1, axis: "politico", orientation: "libertarismo" },
    { text: "Nessuno dovrebbe essere costretto a seguire un'ideologia.", level: 1, axis: "politico", orientation: "libertarismo" },
    { text: "Ognuno dovrebbe essere libero di professare la religione che preferisce.", level: 1, axis: "politico", orientation: "libertarismo" },

    { text: "In tempi di crisi, la sicurezza è più importante delle libertà civili.", level: 1, axis: "politico", orientation: "autoritarismo" },
    { text: "Le figure autoritarie, se moralmente corrette, sono positive per la società.", level: 1, axis: "politico", orientation: "autoritarismo" },
    { text: "Le dittature tendono ad essere più efficienti delle democrazie.", level: 1, axis: "politico", orientation: "autoritarismo" },
    { text: "Lo Stato dovrebbe essere di natura totalitaria.", level: 1, axis: "politico", orientation: "autoritarismo" },
    { text: "La forza coercitiva è necessaria perché un governo possa funzionare.", level: 1, axis: "politico", orientation: "autoritarismo" },
    { text: "Lo Stato e la comunità devono essere al centro della vita del cittadino.", level: 1, axis: "politico", orientation: "autoritarismo" },
    { text: "Introdurrei o reintrodurrei la leva militare nel mio paese.", level: 1, axis: "politico", orientation: "autoritarismo" },
    { text: "Il governo deve controllare l'economia per indirizzarla agli interessi della nazione e della collettività.", level: 1, axis: "politico", orientation: "autoritarismo" },
    { text: "Le scuole dovrebbero insegnare i valori della nazione per formare buoni cittadini.", level: 1, axis: "politico", orientation: "autoritarismo" },
    { text: "Il governo dovrebbe monitorare i cittadini per garantire la sicurezza e l'ordine.", level: 1, axis: "politico", orientation: "autoritarismo" },
    { text: "Un cittadino deve essere leale nei confronti dello Stato.", level: 1, axis: "politico", orientation: "autoritarismo" },
    { text: "Bisogna dare più importanza ai simboli nazionali (bandiera, inni, monumenti...).", level: 1, axis: "politico", orientation: "autoritarismo" },
    { text: "È necessaria una figura carismatica e forte per guidare la nazione.", level: 1, axis: "politico", orientation: "autoritarismo" },
    { text: "La forza militare è essenziale per proteggere la nazione e i suoi valori.", level: 1, axis: "politico", orientation: "autoritarismo" },
    { text: "Bisogna dare più potere alle forze dell'ordine per garantire la sicurezza.", level: 1, axis: "politico", orientation: "autoritarismo" },

    // =====================
    // LIVELLO 2 - ECONOMICO (RIFORMISTA)
    // =====================
    { text: "È necessario stabilire un reddito di base.", level: 2, axis: "economico", orientation: "sinistra-riformista" },
    { text: "Chi guadagna di più dovrebbe pagare più tasse.", level: 2, axis: "economico", orientation: "sinistra-riformista" },
    { text: "Bisogna aumentare il welfare per diminuire le disuguaglianze.", level: 2, axis: "economico", orientation: "sinistra-riformista" },
    { text: "Le grandi aziende devono essere regolamentate per proteggere i lavoratori e l'ambiente.", level: 2, axis: "economico", orientation: "sinistra-riformista" },
    { text: "Gli squilibri economici tra regioni devono essere ridotti.", level: 2, axis: "economico", orientation: "sinistra-riformista" },
    { text: "Le cooperative e le imprese sociali dovrebbero avere priorità sulle aziende private.", level: 2, axis: "economico", orientation: "sinistra-riformista" },
    { text: "I programmi sociali devono essere universali e accessibili a tutti.", level: 2, axis: "economico", orientation: "sinistra-riformista" },

    { text: "Il libero mercato dev'essere incentivato, ma con alcune regole per evitare squilibri e crisi.", level: 2, axis: "economico", orientation: "destra-riformista" },
    { text: "È utile offrire incentivi economici a chi crea lavoro o occupazione.", level: 2, axis: "economico", orientation: "destra-riformista" },
    { text: "Lo Stato dovrebbe intervenire solo in caso di emergenze economiche o sociali.", level: 2, axis: "economico", orientation: "destra-riformista" },
    { text: "Incentivare la concorrenza tra imprese porta a prodotti migliori e a più innovazione.", level: 2, axis: "economico", orientation: "destra-riformista" },
    { text: "Le politiche economiche devono premiare il merito e l’iniziativa individuale.", level: 2, axis: "economico", orientation: "destra-riformista" },
    { text: "Se il welfare è proprio necessario, dev'essere mirato unicamente a chi ne ha veramente bisogno.", level: 2, axis: "economico", orientation: "destra-riformista" },
    { text: "Le esigenze produttive sono più importanti delle emergenze ambientali.", level: 2, axis: "economico", orientation: "destra-riformista" },
    
    // =====================
    // LIVELLO 3 - ECONOMICO (FILOSOFICO)
    // =====================
    { text: "Da ognuno secondo le sue capacità, a ognuno secondo i suoi bisogni.", level: 3, axis: "economico", orientation: "sinistra-filosofica" },
    { text: "Il valore di una società si misura da come tratta i più deboli.", level: 3, axis: "economico", orientation: "sinistra-filosofica" },
    { text: "Nessuna ricchezza è legittima se nasce dallo sfruttamento.", level: 3, axis: "economico", orientation: "sinistra-filosofica" },
    { text: "Chi accumula troppa ricchezza, accumula potere. Il potere divide.", level: 3, axis: "economico", orientation: "sinistra-filosofica" },
    { text: "La storia di ogni società esistita finora è la storia di lotte di classe.", level: 3, axis: "economico", orientation: "sinistra-filosofica" },

    { text: "La libertà di impresa è il modo più efficiente per lo sviluppo della società.", level: 3, axis: "economico", orientation: "destra-filosofica" },
    { text: "Seppure il capitalismo fosse imperfetto, rimarrebbe il sistema migliore.", level: 3, axis: "economico", orientation: "destra-filosofica" },
    { text: "L'uguaglianza economica assoluta è contro natura.", level: 3, axis: "economico", orientation: "destra-filosofica" },
    { text: "Il comunismo è un ideale che non potrebbe mai funzionare nella pratica.", level: 3, axis: "economico", orientation: "destra-filosofica" },
    { text: "L'umanità trae maggior beneficio dal permettere a ciascuno di vivere come ritiene giusto, piuttosto che costringere ciascuno a vivere come ritengono giusto gli altri.", level: 3, axis: "economico", orientation: "destra-filosofica" },

    // =====================
    // LIVELLO 4 - ECONOMICO (RADICALE)
    // =====================
    { text: "Bisogna abolire la proprietà privata dei mezzi di produzione.", level: 4, axis: "economico", orientation: "sinistra-radicale" },
    { text: "Seppure gli esperimenti socialisti del passato avessero fallito, non bisognerebbe comunque abbandonare l'idea di un cambiamento radicale della società.", level: 4, axis: "economico", orientation: "sinistra-radicale" },
    { text: "L'autogestione dei lavoratori sui luoghi di lavoro è necessaria per una società realmente democratica.", level: 4, axis: "economico", orientation: "sinistra-radicale" },
    { text: "La rivoluzione è necessaria per un vero cambiamento della società.", level: 4, axis: "economico", orientation: "sinistra-radicale" },

    { text: "La proprietà privata è un diritto naturale dell'uomo.", level: 4, axis: "economico", orientation: "destra-radicale" },
    { text: "Il mercato si autoregola.", level: 4, axis: "economico", orientation: "destra-radicale" },
    { text: "La libertà economica è inviolabile.", level: 4, axis: "economico", orientation: "destra-radicale" },
    { text: "La privatizzazione totale di ogni aspetto della vita è auspicabile.", level: 4, axis: "economico", orientation: "destra-radicale" },

   // =====================
   // LIVELLO 5 - ECONOMICO (TRASVERSALE)
   // =====================
   // prime 5 = Centrismo
   { text: "Bisogna creare un terzo polo liberale trasversale che si opponga sia alla destra che alla sinistra.", level: 5, axis: "economico", orientation: "trasversale", subtype: "centrismo" },
   { text: "Nessun estremismo è mai giustificato.", level: 5, axis: "economico", orientation: "trasversale", subtype: "centrismo" },
   { text: "La stabilità nasce dall'equilibrio tra mercato e Stato.", level: 5, axis: "economico", orientation: "trasversale", subtype: "centrismo" },
   { text: "Le decisioni politiche devono essere guidate dal buon senso, non dall’ideologia.", level: 5, axis: "economico", orientation: "trasversale", subtype: "centrismo" },
   { text: "Bisogna tornare ai valori del liberalismo classico elaborato dagli illuministi.", level: 5, axis: "economico", orientation: "trasversale", subtype: "centrismo" },

   // successive 5 = Terzoposizionismo
   { text: "Bisogna superare la lotta tra classi in favore della collaborazione.", level: 5, axis: "economico", orientation: "trasversale", subtype: "terzoposizionismo" },
   { text: "Credo nel concetto della democrazia organica.", level: 5, axis: "economico", orientation: "trasversale", subtype: "terzoposizionismo" },
   { text: "Sia il socialismo che il capitalismo hanno fallito: serve una terza posizione.", level: 5, axis: "economico", orientation: "trasversale", subtype: "terzoposizionismo" },
   { text: "I sindacati dovrebbero essere sostituiti dalle corporazioni.", level: 5, axis: "economico", orientation: "trasversale", subtype: "terzoposizionismo" },
   { text: "Bisogna mettere da parte le ideologie e concentrarsi sul bene della nazione.", level: 5, axis: "economico", orientation: "trasversale", subtype: "terzoposizionismo" }
];

let transverseMoved = {
  centrismo: 0,
  terzoposizionismo: 0
};

// =============================
// PUNTEGGI
// =============================
const scoring = {
  "libertarismo": [-3, -2, -1, 0, 1, 2, 3],
  "autoritarismo": [3, 2, 1, 0, -1, -2, -3],
  "sinistra-riformista": [-3, -2, -1, 0, 1, 2, 3],
  "destra-riformista": [3, 2, 1, 0, -1, -2, -3],
  "sinistra-filosofica": [-4, -3, -2, 0, 2, 3, 4],
  "destra-filosofica": [4, 3, 2, 0, -2, -3, -4],
  "sinistra-radicale": [-5, -4, -3, 0, 3, 4, 5],
  "destra-radicale": [5, 4, 3, 0, -3, -4, -5],
  "trasversale": [] // gestita separatamente
};

// =============================
// STATE
// =============================
let currentQuestion = 0;
let score = { x: 0, y: 0 };
let selectedQuestions = [];

// =============================
// UTILITIES
// =============================
function shuffle(array) {
  let a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function roundToQuarter(num) {
  const eps = Number.EPSILON || 2.220446049250313e-16;
  return Math.round((num + eps) * 4) / 4;
}

// =============================
// LOGICA TEST
// =============================
function buildQuestionSet() {
  const levels = [1, 2, 3, 4, 5];
  selectedQuestions = [];
  levels.forEach(lvl => {
    let group = questions.filter(q => q.level === lvl);
    if (group.length) group = shuffle(group);
    selectedQuestions = selectedQuestions.concat(group);
  });
}

function startTest() {
  currentQuestion = 0;
  score = { x: 0, y: 0 };
  transverseMoved = { centrismo: 0, terzoposizionismo: 0 }; // 🔧 reset trasversali
  buildQuestionSet();
  if (!selectedQuestions.length) {
    console.error("Nessuna domanda selezionata!");
    return;
  }
  showQuestion();
}

function showQuestion() {
  ensureQuestionUI();

  if (currentQuestion >= selectedQuestions.length) {
    showResults();
    return;
  }

  const q = selectedQuestions[currentQuestion];
  const qNumEl = document.getElementById('question-number');
  const qTextEl = document.getElementById('question-text');
  const answersDiv = document.getElementById('answers');

  qNumEl.textContent = `Domanda ${currentQuestion + 1} di ${selectedQuestions.length}`;
  qTextEl.textContent = q.text;
  answersDiv.innerHTML = '';

  if (q.orientation === 'trasversale') {
    answersDiv.classList.add('five');
    const labels5 = [
      "D'accordo",
      "In disaccordo (destra)",
      "In disaccordo (sinistra)",
      "Completamente in disaccordo (destra)",
      "Completamente in disaccordo (sinistra)"
    ];
    for (let i = 0; i < labels5.length; i++) {
      const btn = document.createElement('button');
      btn.textContent = labels5[i];
      btn.onclick = () => answerQuestionTransverse(i, q);
      btn.style.display = 'block';
      btn.style.width = '100%';
      btn.style.margin = '6px 0';
      answersDiv.appendChild(btn);
    }
  } else {
    answersDiv.classList.remove('five');
    const labels = [
      "Completamente d'accordo",
      "D'accordo",
      "Parzialmente d'accordo",
      "Neutrale/dipende",
      "Parzialmente in disaccordo",
      "In disaccordo",
      "Completamente in disaccordo"
    ];
    for (let i = 0; i < labels.length; i++) {
      const btn = document.createElement('button');
      btn.textContent = labels[i];
      btn.onclick = () => answerQuestion(i);
      btn.style.display = 'block';
      btn.style.width = '100%';
      btn.style.margin = '6px 0';
      answersDiv.appendChild(btn);
    }
  }

  const back = document.getElementById('back-button');
  if (back) back.style.display = currentQuestion > 0 ? 'block' : 'none';
}

// =============================
// RISPOSTE NORMALI
// =============================
function answerQuestion(index) {
  const q = selectedQuestions[currentQuestion];
  if (q.orientation !== "trasversale") {
    const values = scoring[q.orientation];
    if (values && typeof values[index] !== 'undefined') {
      if (q.axis === 'politico') score.y += values[index];
      else if (q.axis === 'economico') score.x += values[index];
    }
  }
  currentQuestion++;
  showQuestion();
}

// =============================
// RISPOSTE TRASVERSALI (centrismo/terzoposizionismo)
// =============================
function answerQuestionTransverse(index, q) {
  const subtype = q.subtype || 'centrismo';

  // 🔧 FIX: blocca se l'utente è già a ±100
  if (Math.abs(score.x) >= 100) {
    currentQuestion++;
    showQuestion();
    return;
  }

  // helper per muovere verso il centro con cap 20 e senza oltrepassare 0
  function moveTowardCenter(amount) {
    const remaining = 20 - Math.abs(transverseMoved[subtype] || 0);
    if (remaining <= 0) return 0;
    const actual = Math.min(Math.abs(amount), remaining);

    if (score.x > 0) score.x = Math.max(0, score.x - actual);
    else if (score.x < 0) score.x = Math.min(0, score.x + actual);

    transverseMoved[subtype] += actual;
    return actual;
  }

  // 🔧 Gestione risposte
  if (index === 0) {
    moveTowardCenter(4);
  } else if (index === 1) {
    if (score.x < 0) moveTowardCenter(2);
    else if (score.x > 0) score.x = Math.min(100, score.x + 2);
  } else if (index === 2) {
    if (score.x > 0) moveTowardCenter(2);
    else if (score.x < 0) score.x = Math.max(-100, score.x - 2);
  } // 3 e 4 non fanno nulla

  currentQuestion++;
  showQuestion();
}

// =============================
// RISULTATI
// =============================
function showResults() {
  // 🔧 FIX: applica il cap SOLO in fase di conversione
  const cappedY = Math.max(-80, Math.min(80, score.y));
  const cappedX = Math.max(-100, Math.min(100, score.x));

  let yCoord = (cappedY / 80) * 10;
  let xCoord = (cappedX / 100) * 10;

  yCoord = roundToQuarter(yCoord);
  xCoord = roundToQuarter(xCoord);

  if (Math.abs(yCoord) < 1e-12) yCoord = 0;
  if (Math.abs(xCoord) < 1e-12) xCoord = 0;

  localStorage.setItem("userX", xCoord.toFixed(2));
  localStorage.setItem("userY", yCoord.toFixed(2));

  window.location.href = "results.html";
}

// =============================
// AUTO-INIT
// =============================
document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('answers')) startTest();
});

