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
    { text: "Le esigenze produttive sono più importanti delle emergenze ambientali.", level: 2, axis: "economico", orientation: "destra-riformista" }
];

// =============================
// STRUTTURA DOMANDE (invariata)
// =============================
const questions = [
    // ... (mantieni qui tutte le domande che hai già) ...
    // per brevità qui riporto solo un esempio: copia/incolla le tue domande complete
    { text: "Il corpo di ciascun individuo è sua proprietà e nessuno può disporne al suo posto.", level: 1, axis: "politico", orientation: "libertarismo" },
    { text: "L'autonomia del corpo si estende a tutti, compresi i portatori di disabilità, i criminali e i minori.", level: 1, axis: "politico", orientation: "libertarismo" },
    // ... (tutte le altre domande) ...
];

// =============================
// PUNTEGGI RISPOSTE (invariato tranne 'trasversale' per gestione sicura)
// =============================
const scoring = {
    "libertarismo":   [-3, -2, -1, 0, 1, 2, 3],
    "autoritarismo":  [3, 2, 1, 0, -1, -2, -3],
    "sinistra-riformista": [-3, -2, -1, 0, 1, 2, 3],
    "destra-riformista":   [3, 2, 1, 0, -1, -2, -3],
    "sinistra-filosofica": [-4, -3, -2, 0, 2, 3, 4],
    "destra-filosofica":   [4, 3, 2, 0, -2, -3, -4],
    "sinistra-radicale":   [-5, -4, -3, 0, 3, 4, 5],
    "destra-radicale":     [5, 4, 3, 0, -3, -4, -5],
    // "trasversale" gestito a parte: per ora lasciamo vuoto e gestiamo fallback
    "trasversale":         []
};

// =============================
// VARIABILI GLOBALI
// =============================
let currentQuestion = 0;
let score = { x: 0, y: 0 }; // x = economico, y = politico
let selectedQuestions = [];

// =============================
// INIZIO TEST
// =============================
function startTest() {
    const levels = [1, 2, 3, 4, 5];
    selectedQuestions = [];
    levels.forEach(lvl => {
        let group = questions.filter(q => q.level === lvl);
        group = shuffle(group);
        selectedQuestions = selectedQuestions.concat(group);
    });
    currentQuestion = 0;
    showQuestion();
}

// =============================
// MOSTRA DOMANDA
// =============================
function showQuestion() {
    if (currentQuestion >= selectedQuestions.length) {
        showResults();
        return;
    }

    const q = selectedQuestions[currentQuestion];
    const qNumEl = document.getElementById("question-number");
    const qTextEl = document.getElementById("question-text");
    const answersDiv = document.getElementById("answers");

    if (!qNumEl || !qTextEl || !answersDiv) {
        console.error("Elementi della pagina delle domande mancanti (question-number, question-text, answers).");
        return;
    }

    qNumEl.textContent = `Domanda ${currentQuestion + 1} di ${selectedQuestions.length}`;
    qTextEl.textContent = q.text;

    answersDiv.innerHTML = "";

    for (let i = 0; i < 7; i++) {
        const btn = document.createElement("button");
        btn.textContent = [
            "Completamente d'accordo",
            "D'accordo",
            "Parzialmente d'accordo",
            "Neutrale/dipende",
            "Parzialmente in disaccordo",
            "In disaccordo",
            "Completamente in disaccordo"
        ][i];
        btn.onclick = () => answerQuestion(i);
        answersDiv.appendChild(btn);
    }
}

// =============================
// RISPOSTA
// =============================
function answerQuestion(index) {
    const q = selectedQuestions[currentQuestion];
    const values = scoring[q.orientation];

    // se non esiste una mappatura per orientation, evitiamo NaN e logghiamo
    if (!values || !Array.isArray(values) || typeof values[index] === "undefined") {
        console.warn(`Scoring mancante per orientation="${q.orientation}". Considero il valore = 0 per sicurezza.`);
        // non modifico il punteggio
    } else {
        if (q.axis === "politico") {
            score.y += values[index];
        } else if (q.axis === "economico") {
            score.x += values[index];
        }
    }

    currentQuestion++;
    showQuestion();
}

// =============================
// RISULTATI (with robust rounding to quarters)
// =============================
function showResults() {
    // clamp ai massimi che hai definito
    let y = Math.max(-80, Math.min(80, score.y));
    let x = Math.max(-100, Math.min(100, score.x));

    // conversione alle coordinate (-10 .. +10)
    let yCoord = (y / 80) * 10;
    let xCoord = (x / 100) * 10;

    // arrotondamento robusto ai quarti (0.25)
    yCoord = roundToQuarter(yCoord);
    xCoord = roundToQuarter(xCoord);

    // evitiamo -0.00
    if (Math.abs(yCoord) < 1e-12) yCoord = 0;
    if (Math.abs(xCoord) < 1e-12) xCoord = 0;

    // formattazione stringa con due decimali
    const xStr = xCoord.toFixed(2);
    const yStr = yCoord.toFixed(2);

    document.body.innerHTML = `
        <div class="container">
            <h1>Risultati</h1>
            <p>Coordinata X (economico): ${xStr}</p>
            <p>Coordinata Y (politico): ${yStr}</p>
        </div>
    `;
}

// =============================
// ARROTONDAMENTO UTILITY
// =============================
function roundToQuarter(num) {
    // Number.EPSILON aiuta a mitigare errori di virgola mobile
    const eps = Number.EPSILON || 2.220446049250313e-16;
    return Math.round((num + eps) * 4) / 4;
}

// =============================
// SHUFFLE UTILITY
// =============================
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}
