const questions = {
    EASY: [
        { q: "Which phytohormone is primarily synthesized via the methylerythritol phosphate (MEP) pathway in plastids?", options: ["Abscisic Acid", "Ethylene", "Gibberellins", "Auxins"], a: 0 },
        { q: "In the context of floral development, which class of homeotic genes is responsible for stamen identity in the ABC model?", options: ["Class A", "Class B + C", "Class C only", "Class D"], a: 1 },
        { q: "What is the primary function of the casparian strip in the endodermis?", options: ["Photosynthesis", "Symplastic transport block", "Apoplastic transport block", "Water storage"], a: 2 },
        { q: "Which enzyme catalyzes the fixation of CO2 into oxaloacetate in C4 plants?", options: ["RuBisCO", "PEP Carboxylase", "Carbonic Anhydrase", "Malate Dehydrogenase"], a: 1 },
        { q: "Arabidopsis thaliana belongs to which plant family?", options: ["Asteraceae", "Brassicaceae", "Fabaceae", "Solanaceae"], a: 1 },
        { q: "Which organelles are involved in the photorespiration cycle?", options: ["Chloroplast, Peroxisome, Mitochondria", "Chloroplast, Vacuole, Nucleus", "Chloroplast only", "Mitochondria and Vacuole"], a: 0 },
        { q: "The 'Triple Response' in seedlings is triggered by which gas?", options: ["CO2", "Ethylene", "Oxygen", "Methane"], a: 1 },
        { q: "What is the main component of the plant secondary cell wall that provides structural rigidity?", options: ["Pectin", "Cellulose", "Lignin", "Hemicellulose"], a: 2 },
        { q: "Which transcription factor is the 'master regulator' of the jasmonate signaling pathway?", options: ["MYC2", "ARF5", "ABI3", "EIN3"], a: 0 },
        { q: "The endosperm of an angiosperm seed is typically...", options: ["Haploid", "Diploid", "Triploid", "Tetraploid"], a: 2 },
        { q: "Which wavelength of light is primarily absorbed by Phytochrome Pr?", options: ["Red (660nm)", "Far-Red (730nm)", "Blue (450nm)", "Green (530nm)"], a: 0 },
        { q: "What is the primary nitrogen-fixing symbiont associated with legumes?", options: ["Azotobacter", "Rhizobium", "Frankia", "Anabaena"], a: 1 },
        { q: "Which Arabidopsis mutant was crucial for discovering the auxin receptor TIR1?", options: ["axr1", "tir1/afb", "etr1", "ga1"], a: 1 },
        { q: "What is the term for the programmed cell death of xylem vessels to form functional conduits?", options: ["Senescence", "Apoptosis", "Necrosis", "Xylogenesis Path"], a: 3 },
        { q: "Which sugar is the primary long-distance transport form in the phloem of most plants?", options: ["Glucose", "Fructose", "Sucrose", "Maltose"], a: 2 },
        { q: "What is the specialized parenchyma tissue in aquatic plants that facilitates gas exchange?", options: ["Chlorenchyma", "Aerenchyma", "Collenchyma", "Sclerenchyma"], a: 1 },
        { q: "Which complex in the thylakoid membrane is responsible for water photolysis?", options: ["Photosystem I", "Cytochrome b6f", "Photosystem II", "ATP Synthase"], a: 2 },
        { q: "The transition from gametophyte to sporophyte generation occurs at...", options: ["Meiosis", "Fertilization", "Germination", "Mitosis"], a: 1 },
        { q: "Which ion is the primary driver of turgor changes in guard cells?", options: ["Calcium", "Potassium", "Sodium", "Magnesium"], a: 1 },
        { q: "Which plant group was the first to evolve vascular tissues?", options: ["Bryophytes", "Pteridophytes", "Gymnosperms", "Angiosperms"], a: 1 },
        { q: "What is the precursor for ethylene biosynthesis?", options: ["Methionine", "Tryptophan", "Phenylalanine", "Tyrosine"], a: 0 },
        { q: "Which protein serves as the mobile 'Florigen' signal?", options: ["CO", "soc1", "FT", "Apetala1"], a: 2 },
        { q: "What is the polyploid nature of many modern wheat varieties?", options: ["Diploids", "Tetraploids", "Hexaploids", "Triploids"], a: 2 },
        { q: "Which technique is commonly used to visualize protein-protein interactions in vivo in plants?", options: ["Yeast Two-Hybrid", "BiFC (Bimolecular Fluorescence Complementation)", "Western Blot", "PCR"], a: 1 },
        { q: "The pO2 levels inside root nodules are strictly regulated by which protein?", options: ["Hemoglobin", "Leghemoglobin", "Myoglobin", "Cytochrome c"], a: 1 }
    ],
    MEDIUM: [
        { q: "Which E3 ubiquitin ligase component is essentially the auxin receptor itself?", options: ["COI1", "TIR1", "GID1", "BRI1"], a: 1 },
        { q: "The diurnal regulation of CAM photosynthesis involves the phosphorylation of PEP carboxylase by which specific kinase?", options: ["SnRK2", "PPCK", "MAPK", "CDPK"], a: 1 },
        { q: "Which class of small RNAs is primarily associated with transcriptional gene silencing in plants?", options: ["miRNA", "21-nt siRNA", "24-nt siRNA", "lncRNA"], a: 2 },
        { q: "The hypersensitive response (HR) in plant-pathogen interactions is often mediated by which second messenger?", options: ["ROS and NO", "cAMP", "IP3", "Sucrose"], a: 0 },
        { q: "Which mineral deficiency specifically leads to 'interveinal chlorosis' in younger leaves because it's immobile?", options: ["Nitrogen", "Magnesium", "Iron", "Potassium"], a: 2 },
        { q: "The 'Kranz anatomy' is a characteristic feature of...", options: ["C3 plants", "C4 plants", "CAM plants", "Parasitic plants"], a: 1 },
        { q: "Which specific domain in the CLAVATA1 receptor kinase is responsible for binding the CLV3 peptide?", options: ["LRR (Leucine-Rich Repeat)", "Kinase Domain", "PAS Domain", "WD40 Domain"], a: 0 },
        { q: "Epigenetic silencing of the FLC locus during vernalization involves which histone modification?", options: ["H3K4me3", "H3K27me3", "H3K9ac", "H4K16ac"], a: 1 },
        { q: "What is the primary role of the STRIGOLACTONE hormones in plant architecture?", options: ["Stimulating shoot branching", "Inhibiting shoot branching", "Promoting root hair elongation", "Inhibiting primary root growth"], a: 1 },
        { q: "The transition from proplastid to chloroplast is inhibited by which hormone under dark conditions?", options: ["Gibberellins", "Abscisic Acid", "Cytokinins", "Brassinosteroids"], a: 3 },
        { q: "Which protein complex is responsible for the transport of polar auxin across the plasma membrane?", options: ["PIN proteins", "PDI proteins", "MAP kinases", "SNARE proteins"], a: 0 },
        { q: "What is the function of the vacuolar H+-ATPase (V-ATPase) in plant cells?", options: ["Acidification of the vacuole", "ATP synthesis", "Sugar transport", "Nucleus maintenance"], a: 0 },
        { q: "The 'shikimate pathway' is essential for the biosynthesis of which group of compounds?", options: ["Fatty acids", "Aromatic amino acids", "Nucleotides", "Terpenes"], a: 1 },
        { q: "Which enzyme is the rate-limiting step in the biosynthesis of ABA from carotenoids?", options: ["NCED", "ZEP", "AO3", "SDR"], a: 0 },
        { q: "What is the nature of the relationship between PHYTOCHROME INTERACTING FACTORS (PIFs) and light?", options: ["PIFs are activated by light", "Red light promotes PIF degradation", "PIFs bind directly to Pr", "Far-red light degrades PIFs"], a: 1 },
        { q: "In wood formation, which cell type undergoes the most dramatic secondary wall deposition?", options: ["Sieve elements", "Tracheids/Vessels", "Phloem parenchyma", "Companion cells"], a: 1 },
        { q: "Which group of transcription factors regulates the development of the root apical meristem centering on the QC?", options: ["WOX genes", "MADS-box genes", "MYB genes", "WRKY genes"], a: 0 },
        { q: "The phenomenon of 'circadian gating' in plants allows them to...", options: ["Open stomata only at night", "Respond to stimuli only at specific times of day", "Grow 10 times faster", "Photosynthesize in the dark"], a: 1 },
        { q: "Which plant secondary metabolite class is derived from the mevalonate pathway?", options: ["Alkaloids", "Phenolics", "Terpenoids", "Glucosinolates"], a: 2 },
        { q: "The 'Shade Avoidance Syndrome' is primarily triggered by...", options: ["High R:FR ratio", "Low R:FR ratio", "Excessively high light", "Lack of CO2"], a: 1 },
        { q: "Which Arabidopsis gene is a negative regulator of the ethylene response pathway?", options: ["CTR1", "EIN2", "EIN3", "ERF1"], a: 0 },
        { q: "What is the role of the 'Exocyst complex' in plant cell plates during cytokinesis?", options: ["DNA replication", "Vesicle tethering and fusion", "Cell wall degradation", "Mitochondrial division"], a: 1 },
        { q: "Which hormone is critical for the differentiation of xylem and phloem from the procambium?", options: ["Abscisic Acid", "Brassinosteroids", "Auxin and Cytokinin ratio", "Ethylene"], a: 2 },
        { q: "The uptake of phosphate in roots is primarily mediated by which type of transporters?", options: ["H+/Pi symporters", "ATP-driven pumps", "Passive channels", "ABC transporters"], a: 0 },
        { q: "Which domain of life did the ancestral endosymbiont of the chloroplast belong to?", options: ["Archaea", "Cyanobacteria", "Proteobacteria", "Eukaryota"], a: 1 }
    ],
    HARD: [
        { q: "Molecularly, how does the DELLA protein inhibit gibberellin signaling?", options: ["By phosphorylating GID1", "By sequestering PIF transcription factors", "By directly degrading RuBisCO", "By blocking ABA receptors"], a: 1 },
        { q: "The specialized pore structure in the phloem of angiosperms, the sieve plate, is regulated by the deposition of...", options: ["Lignin", "Callose", "Suberin", "Sporopollenin"], a: 1 },
        { q: "Which specific mutation in the Cytochrome b6f complex would most likely inhibit cyclic electron flow (CEF) while sparing linear flow?", options: ["Loss of Hef1", "Loss of PGR5", "Loss of PSII", "Loss of Rubisco"], a: 1 },
        { q: "The 'Self-Incompatibility' system in Brassica is mediated by which receptor-ligand pair?", options: ["SCR/SRK", "CLV3/CLV1", "BRI1/BAK1", "FLS2/Flagellin"], a: 0 },
        { q: "Which transcription factor 'module' is responsible for the specification of the stomatal lineage from meristemoid mother cells?", options: ["SPCH, MUTE, FAMA", "WUS, CLV3, STM", "AP1, AP2, AP3", "PIN1, PIN2, PIN3"], a: 0 },
        { q: "In paleobotany, which feature of 'Cooksonia' proves it was one of the earliest vascular land plants?", options: ["Multicellular roots", "Terminal sporangia and simple tracheids", "Broad leaves with veins", "Flowers"], a: 1 },
        { q: "What is the primary mechanism of 'non-photochemical quenching' (NPQ) in the thylakoid membrane?", options: ["Dissipation of excess energy as heat via the xanthophyll cycle", "Fluorescence emission", "ATP hydrolysis", "Chlorophyll degradation"], a: 0 },
        { q: "The 'WUS-CLV' feedback loop in the shoot apical meristem maintains the stem cell niche. Where is WUS expressions localized?", options: ["In the L1 layer", "In the Organizing Center (OC)", "In the peripheral zone", "In the leaf primordia"], a: 1 },
        { q: "Which metabolite acts as a signal for high carbon availability to regulate starch synthesis in plastids?", options: ["G6P", "T6P (Trehalose-6-Phosphate)", "UDP-Glucose", "Fructose-2,6-BP"], a: 1 },
        { q: "Which mechanism allows plants to detect the duration of the night for photoperiodic flowering?", options: ["Phytochrome photo-equilibrium", "CO protein stability gated by the circadian clock", "Gibberellin pulses", "Stomatal conductance"], a: 1 },
        { q: "What is the biosynthetic origin of the pre-sporopollenin units found in the tapetum?", options: ["Phenylpropanoids and fatty acids", "Pure carbohydrates", "Amino acids only", "Silica"], a: 0 },
        { q: "Which secondary metabolite group is characterized by the presence of a sulfur-linked sugar and an N-hydroximinosulfate?", options: ["Alkaloids", "Cyanogenic glycosides", "Glucosinolates", "Flavonoids"], a: 2 },
        { q: "Molecularly, how does BRI1 sense Brassinosteroids?", options: ["Inside the cytoplasm", "External LRR domain with a co-receptor BAK1", "Nuclear receptor", "Mitochondrial binding"], a: 1 },
        { q: "The 'M-phase promoting factor' (MPF) activity in plants depends on which specific B-type cyclin?", options: ["CYCB1;1", "CYCD3;1", "CYCA2;3", "CYCH;1"], a: 0 },
        { q: "Which specialized cell wall polymer is found in the casparian strips of the endodermis and the periderm?", options: ["Cutin", "Suberin", "Callose", "Hemicellulose"], a: 1 },
        { q: "The mechanism of 'RNA-directed DNA methylation' (RdDM) in plants involves which unique DNA-dependent RNA polymerases?", options: ["Pol I & II", "Pol IV & V", "Pol Alpha & Beta", "Mitochondrial Polymerase"], a: 1 },
        { q: "Which specific mutation in Arabidopsis leads to 'homeotic' conversion of petals into stamens and sepals into carpels?", options: ["apetala2", "agamous", "apetala3", "pistillata"], a: 0 },
        { q: "What is the role of the 'Auxin Response Factors' (ARFs) when auxin levels are LOW?", options: ["They are active transcription factors", "They are repressed by bound Aux/IAA proteins", "They are degraded by the proteasome", "They bind directly to auxin"], a: 1 },
        { q: "Which protein serves as the calcium sensor that activates the SOS1 Na+/H+ antiporter under salt stress?", options: ["CBL4 (SOS3)", "Calmodulin", "CaX", "MAPK"], a: 0 },
        { q: "The 'preprophase band' is a microtubule array that predicts...", options: ["The location of the nucleus", "The plane of the future cell wall", "The site of root hair initiation", "The direction of gravity"], a: 1 },
        { q: "What is the primary evolutionary significance of the 'Hydroids' and 'Leptoids' in certain mosses?", options: ["They are the precursors to tracheids and sieve elements", "They allow photosynthesis in the dark", "They prevent water loss", "They produce seeds"], a: 0 },
        { q: "The 'pulp' of a strawberry is derived from which botanical structure?", options: ["Ovary wall", "Receptacle tissue", "Sepals", "Endosperm"], a: 1 },
        { q: "Which signaling molecule acts as the systemic signal for 'Systemic Acquired Resistance' (SAR)?", options: ["Jasmonic Acid", "Salicylic Acid (and Methyl Salicylate)", "Nitric Oxide", "Auxin"], a: 1 },
        { q: "The interaction between which two proteins governs the entry of the shoot meristem into the reproductive phase?", options: ["FT and FD", "CLV3 and CLV1", "WUS and STM", "PIN1 and PIN2"], a: 0 },
        { q: "In the context of the C4 cycle, which enzyme is found exclusively in the Bundle Sheath cells to decarboxylate malate?", options: ["PEPC", "NADP-malic enzyme", "Carbonic Anhydrase", "MDH"], a: 1 }
    ]
};

let currentDifficulty = 'EASY';
let currentQuestionIndex = 0;
let score = 0;
let quizQuestions = [];

const charArea = document.getElementById('character-section');
const mainChar = document.getElementById('main-character');
const feedback = document.getElementById('feedback-text');
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('results-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressText = document.getElementById('progress-text');
const scoreText = document.getElementById('score-text');

function startGame(difficulty) {
    currentDifficulty = difficulty;
    quizQuestions = [...questions[difficulty]];
    // Shuffle questions
    quizQuestions.sort(() => Math.random() - 0.5);

    currentQuestionIndex = 0;
    score = 0;

    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    updateScore();
    showQuestion();
}

function showQuestion() {
    resetState();
    const question = quizQuestions[currentQuestionIndex];
    questionText.innerText = question.q;
    progressText.innerText = `Question ${currentQuestionIndex + 1}/25`;

    question.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.classList.add('option-btn');
        btn.onclick = () => selectOption(btn, index);
        optionsContainer.appendChild(btn);
    });
}

function resetState() {
    setTheme('neutral');
    optionsContainer.innerHTML = '';
    charArea.className = 'character-area';
    feedback.innerText = getRandomDialogue('neutral');
}

function selectOption(btn, index) {
    const question = quizQuestions[currentQuestionIndex];
    const isCorrect = index === question.a;

    // Disable all buttons
    const allBtns = optionsContainer.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    if (isCorrect) {
        btn.classList.add('correct');
        score++;
        updateScore();
        setTheme('positive');
        charArea.classList.add('happy');
        feedback.innerText = getRandomDialogue('correct');
    } else {
        btn.classList.add('wrong');
        // Show correct answer
        allBtns[question.a].classList.add('correct');
        setTheme('negative');
        charArea.classList.add('sad');
        feedback.innerText = getRandomDialogue('wrong');
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < 25) {
            showQuestion();
        } else {
            showResults();
        }
    }, 2000);
}

function updateScore() {
    scoreText.innerText = `Score: ${score}`;
}

function setTheme(theme) {
    document.body.className = `theme-${theme}`;
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    document.getElementById('final-score-val').innerText = score;

    let rank = "";
    if (score === 25) rank = "Botanical Legend! 🏆 Your PI is weeping with joy.";
    else if (score > 18) rank = "Grant Proposal Accepted! 📜 Brilliant mind.";
    else if (score > 10) rank = "Research Fellow. 🧪 Keep studying the Arabidopsis.";
    else rank = "Undergrad intern... 🍂 Maybe try zoology?";

    document.getElementById('rank-text').innerText = rank;
}

const dialogues = {
    neutral: ["Think deep like a taproot...", "Analyzing chloroplast data...", "The soil is rich with knowledge.", "Wait, is that a hybrid?"],
    correct: ["Brilliant! Your synaptic clefts are blooming!", "A peer-reviewed answer! ✨", "Molecular genius detected!", "The flowers are dancing!"],
    wrong: ["Internal necrosis detected. 🍂", "Peer-review failed! 🌧️", "That's not even in the phylogenetic tree.", "My leaves are wilting..."]
};

function getRandomDialogue(type) {
    return dialogues[type][Math.floor(Math.random() * dialogues[type].length)];
}
