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
// PUNTEGGI RISPOSTE
// =============================

// Set di pesi per ogni orientamento
const scoring = {
    "libertarismo":   [-3, -2, -1, 0, 1, 2, 3],
    "autoritarismo":  [3, 2, 1, 0, -1, -2, -3],
    "sinistra-riformista": [-3, -2, -1, 0, 1, 2, 3],
    "destra-riformista":   [3, 2, 1, 0, -1, -2, -3],
    "sinistra-filosofica": [-4, -3, -2, 0, 2, 3, 4],
    "destra-filosofica":   [4, 3, 2, 0, -2, -3, -4],
    "sinistra-radicale":   [-5, -4, -3, 0, 3, 4, 5],
    "destra-radicale":     [5, 4, 3, 0, -3, -4, -5],
    "trasversale":         [/* verrà gestito a parte */]
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
    // Ordiniamo per livello
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
    document.getElementById("question-number").textContent = `Domanda ${currentQuestion + 1} di ${selectedQuestions.length}`;
    document.getElementById("question-text").textContent = q.text;

    const answersDiv = document.getElementById("answers");
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

    if (q.axis === "politico") {
        score.y += values[index];
    } else if (q.axis === "economico") {
        score.x += values[index];
    }

    currentQuestion++;
    showQuestion();
}

// =============================
// RISULTATI
// =============================
function showResults() {
    let y = Math.max(-80, Math.min(80, score.y));
    let x = Math.max(-100, Math.min(100, score.x));

    let yCoord = (y / 80) * 10;
    let xCoord = (x / 100) * 10;

    document.body.innerHTML = `
        <div class="container">
            <h1>Risultati</h1>
            <p>Coordinata X (economico): ${xCoord.toFixed(2)}</p>
            <p>Coordinata Y (politico): ${yCoord.toFixed(2)}</p>
        </div>
    `;
}

// =============================
// UTILITY
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
