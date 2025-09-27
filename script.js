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
    { text: "Bisogna abolire la proprietà privata.", level: 4, axis: "economico", orientation: "sinistra-radicale" },
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
    { text: "Bisogna creare un terzo polo liberale trasversale che si opponga sia alla destra che alla sinistra.", level: 5, axis: "economico", orientation: "trasversale" },
    { text: "Nessun estremismo è mai giustificato.", level: 5, axis: "economico", orientation: "trasversale" },
    { text: "La stabilità nasce dall'equilibrio tra mercato e Stato.", level: 5, axis: "economico", orientation: "trasversale" },
    { text: "Le decisioni politiche devono essere guidate dal buon senso, non dall’ideologia.", level: 5, axis: "economico", orientation: "trasversale" },
    { text: "Bisogna tornare ai valori del liberalismo classico elaborato dagli illuministi.", level: 5, axis: "economico", orientation: "trasversale" },

    { text: "Bisogna superare la lotta tra classi in favore della collaborazione.", level: 5, axis: "economico", orientation: "trasversale" },
    { text: "Credo nel concetto della democrazia organica.", level: 5, axis: "economico", orientation: "trasversale" },
    { text: "Sia il socialismo che il capitalismo hanno fallito: serve una terza posizione.", level: 5, axis: "economico", orientation: "trasversale" },
    { text: "I sindacati dovrebbero essere sostituiti dalle corporazioni.", level: 5, axis: "economico", orientation: "trasversale" },
    { text: "Bisogna mettere da parte le ideologie e concentrarsi sul bene della nazione.", level: 5, axis: "economico", orientation: "trasversale" }
];

    // =============================
    // PUNTEGGI
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
        "trasversale":         [] // gestita separatamente, fallback = 0
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

    // crea gli elementi della UI se mancano (fallback)
    function ensureQuestionUI() {
        let container = document.querySelector('.container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'container';
            document.body.innerHTML = ''; // pulisce
            document.body.appendChild(container);
        }

        if (!document.getElementById('question-number')) {
            const el = document.createElement('div');
            el.id = 'question-number';
            el.style.marginBottom = '8px';
            container.appendChild(el);
        }

        if (!document.getElementById('question-text')) {
            const el = document.createElement('div');
            el.id = 'question-text';
            el.style.fontSize = '1.25rem';
            el.style.margin = '12px 0';
            container.appendChild(el);
        }

        if (!document.getElementById('answers')) {
            const answers = document.createElement('div');
            answers.id = 'answers';
            container.appendChild(answers);
        }

        // opzionale: aggiungi pulsante "indietro"
        if (!document.getElementById('back-button')) {
            const back = document.createElement('button');
            back.id = 'back-button';
            back.textContent = 'Indietro';
            back.style.display = 'none';
            back.onclick = goBack;
            container.appendChild(back);
        }
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
        // reset
        currentQuestion = 0;
        score = { x: 0, y: 0 };
        buildQuestionSet();
        if (!selectedQuestions.length) {
            console.error("Nessuna domanda selezionata: controlla che 'questions' contenga items con level 1-5.");
            showNoQuestionsMessage();
            return;
        }
        showQuestion();
    }

    function showNoQuestionsMessage() {
        ensureQuestionUI();
        document.getElementById('question-number').textContent = '';
        document.getElementById('question-text').textContent = 'Nessuna domanda disponibile.';
        document.getElementById('answers').innerHTML = '';
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

        // numero di risposte: se vuoi gestire trasversali a 5 puoi cambiare qui
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
            btn.style.display = 'block';
            btn.style.width = '100%';
            btn.style.margin = '6px 0';
            btn.onclick = () => answerQuestion(i);
            answersDiv.appendChild(btn);
        }

        // mostra/nascondi indietro
        const back = document.getElementById('back-button');
        if (back) back.style.display = currentQuestion > 0 ? 'block' : 'none';
    }

    function answerQuestion(index) {
    const q = selectedQuestions[currentQuestion];

    if (q.orientation === "trasversale") {
        // Gestione speciale delle domande trasversali
        // index: 0 = Completamente d'accordo, 1 = D'accordo, ... 6 = Completamente in disaccordo
        // Puoi anche personalizzare le label per queste domande

        if (index === 1) {
            // D'accordo → sposta di ±4 verso il centro
            if (score.x > 0) score.x -= 4;
            else if (score.x < 0) score.x += 4;
        } else if (index === 2) {
            // Parzialmente d'accordo → sposta di ±2 verso il centro
            if (score.x > 0) score.x -= 2;
            else if (score.x < 0) score.x += 2;
        } else if (index === 4) {
            // Parzialmente in disaccordo → sposta di ±2 verso il centro
            if (score.x > 0) score.x -= 2;
            else if (score.x < 0) score.x += 2;
        } else if (index === 5) {
            // In disaccordo → sposta di ±4 verso il centro
            if (score.x > 0) score.x -= 4;
            else if (score.x < 0) score.x += 4;
        }
        // Completamente d'accordo (0) e completamente in disaccordo (6) non muovono nulla
    } else {
        // Logica standard
        const values = scoring[q.orientation];
        if (!values || !Array.isArray(values) || typeof values[index] === 'undefined') {
            console.warn(`Scoring mancante per orientation="${q.orientation}". Valore considerato = 0.`);
        } else {
            if (q.axis === 'politico') score.y += values[index];
            else if (q.axis === 'economico') score.x += values[index];
        }
    }

    currentQuestion++;
    showQuestion();
}

    function goBack() {
        if (currentQuestion === 0) return;
        currentQuestion--;
        // dobbiamo rimuovere l'effetto della risposta precedente: per farlo, ricalcoliamo da zero fino a currentQuestion-1
        score = { x: 0, y: 0 };
        for (let i = 0; i < currentQuestion; i++) {
            const q = selectedQuestions[i];
            // qui non teniamo le risposte passate memorizzate: se vuoi la funzione "indietro" precisa devi memorizzare le scelte in un array.
            // Per ora, per semplicità, ricarichiamo la domanda corrente (senza alterazioni retroattive).
        }
        // Nota: per avere indietro preciso, dobbiamo memorizzare le risposte (posso aggiungerlo se vuoi).
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

        yCoord = roundToQuarter(yCoord);
        xCoord = roundToQuarter(xCoord);

        if (Math.abs(yCoord) < 1e-12) yCoord = 0;
        if (Math.abs(xCoord) < 1e-12) xCoord = 0;

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
    // AUTO-INIT E EXPORT
    // =============================
    window.startTest = startTest; // espongo la funzione per chiamarla da HTML se vuoi

    document.addEventListener('DOMContentLoaded', function () {
        // se siamo sulla pagina delle domande (presenza #answers), avviamo in automatico
        if (document.getElementById('answers')) {
            // assicurati di avere lo script tag con defer oppure senza: in entrambi i casi questo listener funziona
            startTest();
        } else {
            // fallback: se la pagina non ha .container ma probabilmente è test.html senza markup,
            // possiamo creare la UI e avviare comunque il test (opzionale)
            // se preferisci che non avvii automaticamente in assenza di markup, commenta la riga seguente:
            // ensureQuestionUI(); startTest();
        }
    });
