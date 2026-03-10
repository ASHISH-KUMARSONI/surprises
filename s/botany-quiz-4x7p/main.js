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
        { q: "The pO2 levels inside root nodules are strictly regulated by which protein?", options: ["Hemoglobin", "Leghemoglobin", "Myoglobin", "Cytochrome c"], a: 1 },
        { q: "What is the primary site of cellulose biosynthesis in the plant cell?", options: ["Golgi apparatus", "Endoplasmic reticulum", "Plasma membrane", "Plastids"], a: 2 },
        { q: "Which metal ion is the central coordinating atom in the chlorophyll molecule?", options: ["Fe2+", "Mg2+", "Zn2+", "Cu2+"], a: 1 },
        { q: "The movement of water through the cell wall and intercellular spaces is known as...", options: ["Symplastic", "Apoplastic", "Transcellular", "Vacuolar"], a: 1 },
        { q: "Which group of plants lacks a true vascular system?", options: ["Pteridophytes", "Bryophytes", "Gymnosperms", "Angiosperms"], a: 1 },
        { q: "What is the primary function of the tapetum in the anther?", options: ["Pollen nutrition", "Protection", "Dehiscence", "Water storage"], a: 0 },
        { q: "Which enzyme is responsible for the reduction of nitrate to nitrite in plants?", options: ["Nitrite reductase", "Nitrate reductase", "Glutamine synthetase", "Nitrogenase"], a: 1 },
        { q: "The developmental transition from juvenile to adult phase in plants is often regulated by...", options: ["miR156", "Auxin", "GA", "CK"], a: 0 },
        { q: "Which organelle is the site of the TCA cycle in plant cells?", options: ["Chloroplast", "Mitochondrion", "Peroxisome", "Glyoxysome"], a: 1 },
        { q: "What is the term for the fruit development without fertilization?", options: ["Apomixis", "Parthenocarpy", "Parthenogenesis", "Polyembryony"], a: 1 },
        { q: "Which Arabidopsis gene is primarily involved in the circadian clock loop?", options: ["TOC1", "FLC", "CO", "FT"], a: 0 },
        { q: "The transport of sucrose into the sieve element-companion cell complex is usually...", options: ["Passive", "Active via H+/sucrose symporter", "Facilitated diffusion", "Endocytosis"], a: 1 },
        { q: "Which component is NOT part of the plant cytoskeleton?", options: ["Microtubules", "Actin filaments", "Intermediate filaments (limited)", "Myosin"], a: 3 },
        { q: "What is the primary function of leghemoglobin in root nodules?", options: ["Oxygen delivery to Rhizobium", "Oxygen sequestration for nitrogenase", "Nitrogen transport", "Water regulation"], a: 1 },
        { q: "Which type of plant grows in high-salinity environments?", options: ["Mesophyte", "Halophyte", "Xerophyte", "Hydrophyte"], a: 1 },
        { q: "The accumulation of which solute is a common response to osmotic stress?", options: ["Starch", "Proline", "Chlorophyll", "Callose"], a: 1 },
        { q: "Which Arabidopsis mutant shows a complete lack of root hairs?", options: ["rhd2", "wer", "gl2", "gl3"], a: 1 },
        { q: "The 'Hutchinsonian niche' concept applied to plants focuses on...", options: ["Hypervolume of environmental factors", "Solely light availability", "Soil pH", "Altitude"], a: 0 },
        { q: "What is the function of the phellogen?", options: ["Primary growth", "Lateral growth (Cork cambium)", "Water transport", "Food storage"], a: 1 },
        { q: "Which pigment is responsible for the blue and purple colors in flowers?", options: ["Carotenoids", "Anthocyanins", "Chlorophyll b", "Xanthophylls"], a: 1 },
        { q: "The major site of lipid biosynthesis in plant cells is the...", options: ["Mitochondria", "Endoplasmic Reticulum", "Chloroplast", "Golgi"], a: 1 },
        { q: "Which process involves the movement of molecules against their concentration gradient?", options: ["Simple diffusion", "Facilitated diffusion", "Active transport", "Osmosis"], a: 2 },
        { q: "The protein Shell in oil palm is a major determinant of...", options: ["Oil content", "Fruit color", "Tree height", "Pollen size"], a: 0 },
        { q: "Which enzyme is involved in the detoxification of reactive oxygen species (ROS)?", options: ["Amylase", "Catalase", "Protease", "Lipase"], a: 1 },
        { q: "What is the significance of the root cap?", options: ["Gravity sensing and protection", "Nutrient absorption", "Anchor", "Water storage"], a: 0 },
        { q: "Which hormone promotes seed dormancy?", options: ["Gibberellin", "Auxin", "Abscisic Acid", "Cytokinin"], a: 2 },
        { q: "What is the term for the symbiotic relationship between fungi and plant roots?", options: ["Lichen", "Mycorrhiza", "Nodule", "Parasitism"], a: 1 },
        { q: "Which tissue is responsible for the transport of water and minerals in plants?", options: ["Phloem", "Xylem", "Parenchyma", "Collenchyma"], a: 1 },
        { q: "The 'Pressure Flow Hypothesis' explains...", options: ["Stomatal opening", "Xylem transport", "Phloem translocation", "Root pressure"], a: 2 },
        { q: "Which wavelength of light triggers phototropism?", options: ["Red", "Far-Red", "Blue", "Green"], a: 2 },
        { q: "The cellular response to heat stress often involves...", options: ["Heat Shock Proteins (HSPs)", "Growth arrest", "Chlorophyll degradation", "All of the above"], a: 3 },
        { q: "What is the role of the generative cell in a pollen grain?", options: ["Forms the pollen tube", "Produces sperm cells", "Provides nutrition", "Protects the pollen"], a: 1 },
        { q: "Which group of enzymes is responsible for cell wall loosening during growth?", options: ["Expansins", "Cellulases", "Pectinases", "Proteases"], a: 0 },
        { q: "What is the primary source of carbon for plants?", options: ["Soil organic matter", "Atmospheric CO2", "Dissolved carbonates", "Methane"], a: 1 },
        { q: "The conversion of glucose to pyruvate through glycolysis occurs in the...", options: ["Mitochondria", "Cytosol", "Chloroplast", "Vacuole"], a: 1 },
        { q: "Which plant hormone is a gas?", options: ["Auxin", "Ethylene", "Gibberellin", "Cytokinin"], a: 1 },
        { q: "What is the function of the sclerenchyma tissue?", options: ["Photosynthesis", "Structural support", "Storage", "Transport"], a: 1 },
        { q: "The 'Guttation' process involves the loss of water in liquid form through...", options: ["Stomata", "Lenticels", "Hydathodes", "Cuticle"], a: 2 },
        { q: "Which factor primarily drives the transpiration pull in the xylem?", options: ["Active pumping", "Root pressure", "Cohesion and adhesion", "Energy from ATP"], a: 2 },
        { q: "The sequence of floral organs is determined by...", options: ["Light intensity", "Phytohormone gradients", "Homeotic gene expression", "Soil nutrients"], a: 2 },
        { q: "Which protein marks proteins for degradation in the proteasome?", options: ["Ubiquitin", "Actin", "Rubisco", "Histone"], a: 0 },
        { q: "What is the main function of the plastids called amyloplasts?", options: ["Fat synthesis", "Coloring", "Starch storage", "Photosynthesis"], a: 2 },
        { q: "The 'Self-Thinning Rule' in plant ecology relates...", options: ["Height and weight", "Density and biomass", "Roots and shoots", "Leaves and fruit"], a: 1 },
        { q: "Which process is responsible for the generation of ATP in the chloroplast?", options: ["Substrate-level phosphorylation", "Photophosphorylation", "Fermentation", "Nitrogen fixation"], a: 1 },
        { q: "What is the primary role of the cuticle in leaves?", options: ["Photosynthesis", "Defense against pathogens", "Prevention of water loss", "Gas exchange"], a: 2 },
        { q: "Which Arabidopsis mutant is famous for its inability to sense light?", options: ["det1", "cop1", "hy5", "phyB"], a: 2 },
        { q: "The pH of the plant vacuole is typically...", options: ["Acidic", "Neutral", "Alkaline", "Extremely basic"], a: 0 },
        { q: "Which specialized cell type provides flexibility and support in young stems?", options: ["Parenchyma", "Collenchyma", "Sclerenchyma", "Tracheids"], a: 1 },
        { q: "The 'Triple Response' includes which of the following?", options: ["Shoot elongation", "Stem thickening and horizontal growth", "Root hair loss", "Leaf senescence"], a: 1 },
        { q: "Which biosynthetic pathway produces flavonoids?", options: ["Shikimate and polyketide pathway", "Mevalonate pathway", "Pentose phosphate pathway", "Glycolysis"], a: 0 },
        { q: "What is the major storage protein in maize seeds?", options: ["Gluten", "Zein", "Albumin", "Globulin"], a: 1 },
        { q: "Which enzyme removes introns from pre-mRNA?", options: ["DNA polymerase", "Spliceosome", "Ribosome", "Ligase"], a: 1 },
        { q: "The 'Phyllotaxy' of a plant refers to...", options: ["The arrangement of flowers", "The arrangement of leaves on a stem", "The structure of roots", "The type of fruit"], a: 1 },
        { q: "Which organelle is responsible for the final stages of protein glycosylation?", options: ["ER", "Golgi", "Mitochondria", "Nucleus"], a: 1 },
        { q: "What is the function of the bundle sheath cells in C3 plants?", options: ["Major site of CO2 fixation", "Mechanical support and protection", "Water storage", "None of the above"], a: 1 },
        { q: "The transport of auxin is fundamentally...", options: ["Symmetric", "Polar (Directional)", "Passive", "Via phloem only"], a: 1 },
        { q: "Which gene is required for the maintenance of the root quiescent center?", options: ["WUS", "SCR", "PLT", "AP2"], a: 1 },
        { q: "The process of 'Strigolactones' signaling inhibits...", options: ["Root growth", "Shoot branching", "Germination", "Flowering"], a: 1 },
        { q: "Which structural protein is a major constituent of the cell wall?", options: ["Extensin", "Hemoglobin", "Porin", "Calmodulin"], a: 0 },
        { q: "The primary photosynthetic pigment in cyanobacteria is...", options: ["Chl a", "Chl c", "Chl d", "Bacteriochlorophyll"], a: 0 },
        { q: "What is the role of salicylic acid in plants?", options: ["Growth promotion", "Systemic Acquired Resistance (SAR)", "Drought tolerance", "Seed germination"], a: 1 },
        { q: "The 'Hardy-Weinberg equilibrium' applied to plants assumes...", options: ["Large population and random mating", "Selective breeding", "Limited resources", "Mutation only"], a: 0 },
        { q: "Which complex is responsible for the 'Z-scheme' of electron transport?", options: ["PSII, Cytb6f, PSI", "Mitochondrial complex I", "RuBisCO", "NADP reductase"], a: 0 },
        { q: "The biosynthesis of carotenoids occurs in the...", options: ["ER", "Plastid", "Vacuole", "Mitochondria"], a: 1 },
        { q: "Which Arabidopsis gene acts as an integrator of multiple flowering signals?", options: ["FLC", "CO", "FT", "SOC1"], a: 3 },
        { q: "What is the primary function of the root hair?", options: ["Stability", "Protection", "Absorption of water and minerals", "Sensing gravity"], a: 2 },
        { q: "Which technique uses light to measure the concentration of compounds in solution?", options: ["PCR", "Spectrophotometry", "Centrifugation", "Electrophoresis"], a: 1 },
        { q: "The 'Hormone receptor' for ethylene is located in the...", options: ["Plasma membrane", "Nucleus", "ER membrane", "Vacuole"], a: 2 },
        { q: "What is the term for the movement of elements from older to younger leaves?", options: ["Fixation", "Remobilization", "Senescence", "Leaching"], a: 1 },
        { q: "Which plant structure is equivalent to the animal stem cell niche?", options: ["Phloem", "Meristem", "Epidermis", "Cortex"], a: 1 },
        { q: "The 'Tepal' refers to which flower part when sepals and petals are identical?", options: ["Bract", "Petaloid", "Tepal", "Calyx"], a: 2 },
        { q: "Which complex is the main protease in the cell?", options: ["Spliceosome", "Proteasome", "Ribosome", "Nucleosome"], a: 1 },
        { q: "The induction of 'α-amylase' in barley seeds is triggered by...", options: ["ABA", "GA", "CK", "Ethylene"], a: 1 },
        { q: "What is the primary role of the lignin in the xylem?", options: ["Waterproofing and support", "Storage of sugars", "Defense", "None"], a: 0 },
        { q: "Which gene family encodes the core components of the circadian clock in Arabidopsis?", options: ["LHY/CCA1", "MADS", "WRKY", "PIN"], a: 0 },
        { q: "The 'Embryo Sac' of an angiosperm is the...", options: ["Male gametophyte", "Female gametophyte", "Sporophyte", "Seed coat"], a: 1 }
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
        { q: "Which domain of life did the ancestral endosymbiont of the chloroplast belong to?", options: ["Archaea", "Cyanobacteria", "Proteobacteria", "Eukaryota"], a: 1 },
        { q: "Which transcription factor is the primary regulator of seed maturation and desiccation tolerance?", options: ["ABI3", "LEC1", "FUS3", "All of the above"], a: 3 },
        { q: "The 'M-phase promoting factor' in plants is a complex of which CDK and Cyclin?", options: ["CDKA;1 and CYCB1;1", "CDKB1;1 and CYCA1;1", "CDKC;1 and CYCD3;1", "CDKD;1 and CYCH;1"], a: 0 },
        { q: "Which specialized cell wall polymer is found in the casparian strip?", options: ["Cutin", "Suberin", "Callose", "Hemicellulose"], a: 1 },
        { q: "The biosynthesis of salicylic acid primarily proceeds through which two pathways?", options: ["Isoleucine and Valine", "Isochorismate and Phenylalanine", "Tryptophan and Tyrosine", "Methionine and Cysteine"], a: 1 },
        { q: "Which membrane protein is essential for the sensing of calcium signals in the cytoplasm?", options: ["Calmodulin", "CBLs", "CDPKs", "All of the above acting as sensors"], a: 3 },
        { q: "The 'receptacle' tissue in a pome fruit (like an apple) primarily develops into the...", options: ["Flesh", "Core", "Seed", "Skin"], a: 0 },
        { q: "Which complex is responsible for the transport of proteins into the chloroplast lumen?", options: ["TOC complex", "TIC complex", "SEC/TAT pathways", "TOM complex"], a: 2 },
        { q: "Heterotrimeric G-proteins in plants are primarily involved in the signaling of which hormone?", options: ["Auxin", "Gibberellins and ABA", "Cytokinin", "Ethylene"], a: 1 },
        { q: "Which process is inhibited by the pharmacological agent 'Brefeldin A' in plant cells?", options: ["ER-to-Golgi transport", "Cytokinesis", "Photosynthesis", "DNA replication"], a: 0 },
        { q: "The 'Velamen' tissue in epiphytic orchids is specialized for...", options: ["Photosynthesis", "Water absorption and storage", "Protection from pests", "Support"], a: 1 },
        { q: "Which enzyme catalyzes the reaction producing Jasmonic Acid from linolenic acid?", options: ["Lipoxygenase (LOX)", "AOS", "AOC", "All of the above in sequence"], a: 3 },
        { q: "What is the primary function of the 'R-genes' in plant immunity?", options: ["Nutrient uptake", "Perception of specific pathogen effectors", "Cell wall synthesis", "Photosynthesis"], a: 1 },
        { q: "The 'Preprophase Band' predictably localized the...", options: ["Future site of the phragmoplast", "Nuclear envelope breakdown", "Spindle poles", "Chloroplast division site"], a: 0 },
        { q: "Which protein serves as the sulfur donor for the biosynthesis of iron-sulfur clusters in plants?", options: ["NifS-like cysteine desulfurase", "Glutathione", "Cysteine", "Methionine"], a: 0 },
        { q: "The accumulation of 'Anthocyanins' in vacuoles is often triggered by...", options: ["High UV light", "Phosphate deficiency", "Cold stress", "All of the above"], a: 3 },
        { q: "Which Arabidopsis mutant was critical for defining the role of the quiescent center?", options: ["scr", "shr", "wus", "plt"], a: 0 },
        { q: "The 'Shikimate 3-phosphate' is the precursor for which key metabolite in plants?", options: ["EPSP", "Chorismate", "Anthranilate", "Prephenate"], a: 1 },
        { q: "Which hormone is primarily responsible for 'Apical Dominance'?", options: ["Cytokinin", "Auxin (indirectly via Strigolactones)", "Gibberellin", "Ethylene"], a: 1 },
        { q: "What is the role of the 'SNARE proteins' in plant cells?", options: ["Vesicle fusion and targeting", "Cytoskeleton assembly", "DNA repair", "Metabolite transport"], a: 0 },
        { q: "The 'Xanthophyll cycle' protects plants from high light by...", options: ["Converting violaxanthin to zeaxanthin", "Emitting fluorescence", "Storing starch", "Increasing stomatal density"], a: 0 },
        { q: "Which Arabidopsis gene acts as a 'molecular brake' on starch degradation at night?", options: ["SEX1", "BAM3", "MEX1", "LHY"], a: 0 },
        { q: "What is the function of the 'Hydroids' in some bryophytes?", options: ["Water conduction", "Photosynthesis", "Sugar conduction", "Stability"], a: 0 },
        { q: "Which protein is the core component of the plant circadian clock central oscillator?", options: ["TOC1", "CCA1", "LHY", "All of these in a reciprocal loop"], a: 3 },
        { q: "The 'PDI (Protein Disulfide Isomerase)' in the ER is essential for...", options: ["Protein folding", "Lipid synthesis", "Sugar transport", "ATP generation"], a: 0 },
        { q: "Which hormone is involved in the induction of 'Systemic Acquired Resistance' (SAR)?", options: ["Salicylic Acid", "Jasmonic Acid", "Auxin", "Ethylene"], a: 0 },
        { q: "What is the primary role of the 'Callose' during plant development?", options: ["Reinforcement at wound sites", "Sieve plate formation", "Pollen wall development", "All of the above"], a: 3 },
        { q: "Which Arabidopsis mutant lacks both petals and stamens?", options: ["ap1", "ap2", "ap3", "ag"], a: 2 },
        { q: "The 'G-box' sequence in plant promoters is typically bound by...", options: ["bZIP transcription factors", "MYB proteins", "WRKY proteins", "MADS-box proteins"], a: 0 },
        { q: "What is the physiological role of 'Aerenchyma' in roots?", options: ["Provide oxygen to submerged tissues", "Increase root surface area", "Store water", "Resist mechanical stress"], a: 0 },
        { q: "Which enzyme is responsible for 'Chromatin Remodeling' during plant development?", options: ["SWI/SNF complex", "DNA Polymerase", "RuBisCO", "Amylase"], a: 0 },
        { q: "What is the primary mechanism of 'Polar Auxin Transport'?", options: ["Asymmetric localization of PIN proteins", "Bulk flow through phloem", "Diffusion", "Active transport via ATP pumps only"], a: 0 },
        { q: "Which hormone level increases significantly during leaf abscission?", options: ["Auxin", "Ethylene", "Gibberellins", "Cytokinins"], a: 1 },
        { q: "The 'Z-scheme' of photosynthesis involves which two photosystems?", options: ["PSI and PSII", "PSII and PSIII", "PSI and LHCI", "PSII and LHCII"], a: 0 },
        { q: "Which Arabidopsis gene regulates the spacing of stomata?", options: ["TMM", "SDD1", "SPCH", "All of the above"], a: 3 },
        { q: "What is the function of the 'Peroxisomes' in plants?", options: ["Photorespiration and Beta-oxidation of fatty acids", "Photosynthesis", "DNA Storage", "Protein synthesis"], a: 0 },
        { q: "Which nutrient deficiency causes 'whiptail' in cauliflower?", options: ["Nitrogen", "Molybdenum", "Boron", "Iron"], a: 1 },
        { q: "The 'Gibberellin' signal is perceived by which receptor?", options: ["GID1", "TIR1", "BRI1", "ETR1"], a: 0 },
        { q: "What is the term for the growth of a plant towards a light source?", options: ["Gravitropism", "Thigmotropism", "Phototropism", "Hydrotropism"], a: 2 },
        { q: "Which enzyme is responsible for de-epoxidation in the xanthophyll cycle?", options: ["VDE", "ZE", "LHCB", "D1"], a: 0 },
        { q: "The 'Agamous (AG)' gene is a member of which family?", options: ["WRKY", "MYB", "MADS-box", "NAC"], a: 2 },
        { q: "Which complex mediates the loading of small RNAs into the RISC complex?", options: ["Dicer", "AGO (Argonaute)", "Pol IV", "SDE3"], a: 1 },
        { q: "What is the significance of the 'Q-loop' in the Calvin cycle?", options: ["Regeneration of RuBP", "CO2 fixation", "ATP production", "None of these (It's a typo for another cycle if not careful)"], a: 0 },
        { q: "Which hormone promotes fruit ripening?", options: ["Auxin", "Ethylene", "ABA", "CK"], a: 1 },
        { q: "What is the function of 'Plastocyanin' in electron transport?", options: ["Mobile electron carrier between Cytb6f and PSI", "Fixes CO2", "ATP synthesis", "Water oxidation"], a: 0 },
        { q: "Which organelle is correctly matched with its marker enzyme?", options: ["Chloroplast - RuBisCO", "Mitochondria - Cytochrome oxidase", "Golgi - IDPase", "All of the above"], a: 3 },
        { q: "The 'MYB' transcription factors are famously involved in the regulation of...", options: ["Flavonoid biosynthesis", "Growth", "Clock", "Division"], a: 0 },
        { q: "What is the role of the 'Auxin Response Elements (AuxREs)' in promoters?", options: ["Binding site for ARFs", "Binding site for Aux/IAAs", "Repressor site", "All of the above"], a: 0 },
        { q: "Which metal is a part of the 'Oxygen Evolving Complex (OEC)'?", options: ["Mg", "Mn", "Fe", "Cu"], a: 1 },
        { q: "The 'WUS (WUSCHEL)' protein is essential for maintaining...", options: ["Root growth", "Shoot stem cell pool", "Pollen development", "Seed germination"], a: 1 },
        { q: "Which Arabidopsis mutant is 'constitutively' in the triple response even without ethylene?", options: ["ctr1", "ein2", "etr1", "ers1"], a: 0 },
        { q: "Which sugar is used for starch synthesis in plastids?", options: ["ADP-Glucose", "UDP-Glucose", "Glucose-1-P", "Sucrose"], a: 0 },
        { q: "What is the role of 'H2O2' in plant defense?", options: ["Direct antimicrobial and signaling molecule", "Sugar carrier", "Enzyme inhibitor", "None"], a: 0 },
        { q: "Which complex is responsible for N-glycosylation in the ER?", options: ["OST complex", "Ribosome", "Spliceosome", "Proteasome"], a: 0 },
        { q: "The 'Phytoene synthase (PSY)' is the rate-limiting enzyme in...", options: ["Carotenoid biosynthesis", "Auxin synthesis", "Lignin synthesis", "Sugar synthesis"], a: 0 },
        { q: "What is the function of the 'Casparian strip' in roots?", options: ["Selective nutrient uptake blocking apoplastic flow", "Photosynthesis", "Strength", "Storage"], a: 0 },
        { q: "Which hormone is synthesized from the carotenoid 9-cis-epoxycarotenoid?", options: ["ABA", "GA", "CK", "Ethylene"], a: 0 },
        { q: "The 'LEAFY' gene in Arabidopsis is a master regulator of...", options: ["Floral transition and identity", "Root development", "Trichome formation", "Seed color"], a: 0 },
        { q: "Which technique is best for determining the 'transcriptome' of a single cell?", options: ["Microarray", "Bulk RNA-seq", "scRNA-seq (Single-cell RNA sequencing)", "Northern Blot"], a: 2 },
        { q: "What is the role of 'Glutathione' in plants?", options: ["Redox buffer and antioxidant", "Amino acid source", "Sugar", "Metals"], a: 0 },
        { q: "Which Arabidopsis gene controls the identity of the 'Organizing Center' in the SAM?", options: ["WUS", "CLV3", "STM", "KNAT1"], a: 0 },
        { q: "What is the primary function of the 'Pulvinus' in some plants?", options: ["Facilitating turgor-driven movements (e.g. Mimosa)", "Photosynthesis", "Defense", "Storage"], a: 0 },
        { q: "Which hormone acts in an 'antagonistic' manner to ABA during germination?", options: ["Auxin", "Gibberellins", "Ethylene", "Cytokinins"], a: 1 },
        { q: "Which enzyme performs the methylation of DNA at CG sites in plants?", options: ["MET1", "DRM2", "CMT3", "RDR2"], a: 0 },
        { q: "What is the significance of 'Polyembryony' in citrus?", options: ["Multiple embryos per seed", "Fast growth", "Pest resistance", "Color"], a: 0 },
        { q: "Which structure connects the cytoplasm of adjacent plant cells?", options: ["Stomata", "Plasmodesmata", "Pits", "Gap junctions"], a: 1 },
        { q: "The 'Vitreous' nature of seeds refers to their...", options: ["High water content", "Glassy, desiccation-tolerant state", "Inability to grow", "Hardness"], a: 1 },
        { q: "Which hormone is necessary for 'Tracheary Element' differentiation in vitro?", options: ["Auxin and Cytokinin", "Ethylene only", "ABA", "GA"], a: 0 },
        { q: "What is the role of 'Phytochrome A' in de-etiolation?", options: ["High irradiance response (HIR)", "Low irradiance response", "None", "Storage"], a: 0 },
        { q: "Which biosynthetic pathway is the source of Cyanogenic Glycosides?", options: ["Amino acids", "Sugars", "Fatty acids", "Isoprenoids"], a: 0 },
        { q: "The 'F-box' protein COI1 is the receptor for...", options: ["Auxin", "Jasmonates (JA-Ile)", "ABA", "GA"], a: 1 },
        { q: "Which technique is used to measure the rate of photosynthesis by CO2 uptake?", options: ["Li-COR Infrared Gas Analyzer (IRGA)", "Thermometer", "Scale", "Centrifuge"], a: 0 },
        { q: "What is the function of 'Starch synthase'?", options: ["Elongating alpha-1,4-glucan chains", "Branching starch", "Degrading starch", "Storing glucose"], a: 0 },
        { q: "Which complex mediates the import of pre-proteins into the mitochondria?", options: ["TOM and TIM complexes", "TOC and TIC", "SEC", "SRP"], a: 0 },
        { q: "What is the primary factor limiting growth in most forest ecosystems?", options: ["Light", "Nitrogen/Phosphate", "CO2", "Water"], a: 1 },
        { q: "The 'ABA (Abscisic Acid)' signaling pathway involves which protein phosphatase?", options: ["PP2C", "PP1", "PP2A", "Calcincurein"], a: 0 }
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
        { q: "In the context of the C4 cycle, which enzyme is found exclusively in the Bundle Sheath cells to decarboxylate malate?", options: ["PEPC", "NADP-malic enzyme", "Carbonic Anhydrase", "MDH"], a: 1 },
        { q: "Which chloroplast complex performs the primary charge separation in response to a photon?", options: ["LHCII", "Reaction Center P680", "Cytb6f", "ATP Synthase"], a: 1 },
        { q: "The 'Gate-Latch-Lock' mechanism is central to the binding of ABA by which receptor family?", options: ["PYR/PYL/RCAR", "TIR1", "BRI1", "GID1"], a: 0 },
        { q: "Which gene is the 'integrator' of vernalization, photoperiod, and autonomous pathways in Arabidopsis?", options: ["FLC", "CO", "SOC1", "FT"], a: 3 },
        { q: "The 'Phosphate Starvation Response' (PSR) in plants is primarily regulated by which transcription factor?", options: ["PHR1", "WRKY75", "MYB2", "NAC1"], a: 0 },
        { q: "What is the role of 'AGO4' in the RdDM pathway?", options: ["Slicing mRNA", "Binding 24-nt siRNAs and recruiting Pol V", "Methylating DNA", "Transcription"], a: 1 },
        { q: "Which enzyme catalyzes the final step of lignin polymerization in the cell wall?", options: ["Phenylalanine ammonia-lyase (PAL)", "Peroxidases and Laccases", "Cinnamoyl-CoA reductase", "Methyltransferase"], a: 1 },
        { q: "The 'Tension Wood' in angiosperms is characterized by the presence of a...", options: ["G-layer (Gelatinous layer)", "Lignified S2 layer", "Thick cuticle", "Lack of vessels"], a: 0 },
        { q: "Which protein complex is responsible for the 'Air-Seeding' prevention in gymnosperm tracheids?", options: ["Torus-margo structure", "Sieve plate", "Casparian strip", "Perforation plate"], a: 0 },
        { q: "The 'Karrikin' signaling pathway shares core components with which hormone pathway?", options: ["Auxin", "Strigolactones (D14/MAX2)", "Gibberellins", "ABA"], a: 1 },
        { q: "Which Arabidopsis mutant displays a 'shoot-to-root' conversion in the embryo?", options: ["topless (tpl)", "gnom", "monopteros (mp)", "gurke"], a: 0 },
        { q: "What is the primary function of the 'NAC' transcription factor group in wood formation?", options: ["Master regulators of secondary wall biosynthesis", "Photosynthesis", "Sugar transport", "Starch degradation"], a: 0 },
        { q: "The 'Xylem Cavitation' is most accurately measured by detecting...", options: ["Ultrasonic Acoustic Emissions (UAE)", "Color changes", "Leaf weight", "Root pressure"], a: 0 },
        { q: "Which complex in the thylakoid facilitates the 'Cyclic Electron Flow'?", options: ["NDH complex or PGR5/PGRL1 dependent path", "PSII reaction center", "RuBisCO", "Cytochrome c oxidase"], a: 0 },
        { q: "The 'Self-Pollination' in Arabidopsis is avoided in nature by...", options: ["It isn't; it's a primary selfer", "SRK/SCR system", "Differential timing of pollen release", "None"], a: 0 },
        { q: "Which secondary metabolite class is synthesized via the 'Mevalonate (MVA)' pathway in the cytoplasm?", options: ["Sesquiterpenes and Sterols", "Monoterpenes", "Diterpenes", "Tetraterpenes"], a: 0 },
        { q: "What is the molecular function of the 'LHP1' protein in plants?", options: ["Structural component of the wall", "Plant version of Heterochromatin Protein 1, binding H3K27me3", "Auxin transporter", "Kinase"], a: 1 },
        { q: "The 'Crinoid' fossil record is used to date the evolution of which plant feature?", options: ["Flowers", "Vascular tissue", "Seeds", "None (Crinoids are animals)"], a: 3 },
        { q: "Which gene family encodes the 'Cyclin-dependent kinase inhibitors' in plants?", options: ["KRP (Kip-Related Proteins)", "CYCD", "CDKB", "E2F"], a: 0 },
        { q: "The 'Bimolecular Fluorescence Complementation (BiFC)' is used to...", options: ["Quantify DNA", "Visualize protein-protein interactions in vivo", "Measure pH", "Detect mRNA"], a: 1 },
        { q: "Which protein mediates the active transport of ABA out of the endosperm?", options: ["AtABCG25", "PIN1", "AUX1", "PDR8"], a: 0 },
        { q: "The 'Crassulacean Acid Metabolism (CAM)' evolved primarily as an adaptation to...", options: ["Water scarcity", "Nitrogen lack", "High CO2", "Cold"], a: 0 },
        { q: "Which enzyme is the primary target of the herbicide 'Glyphosate'?", options: ["EPSPS", "ALS", "HPP", "ACC"], a: 0 },
        { q: "What is the function of the 'S-domain' in certain plant receptor kinases?", options: ["Self-incompatibility and defense signaling", "Photosynthesis", "Sugar sensing", "Gravity sensing"], a: 0 },
        { q: "The 'Auxin-binding protein 1 (ABP1)' has been controversially linked to...", options: ["Non-transcriptional auxin responses", "Nuclear transcription", "Root hair growth", "None"], a: 0 },
        { q: "Which transcription factor regulates the transition from 'Meristemoid' to 'Guard Mother Cell'?", options: ["SPCH", "MUTE", "FAMA", "SCRM"], a: 1 },
        { q: "The 'Apostatic core' of the plant circadian clock includes...", options: ["PRR9, PRR7, PRR5", "RuBisCO", "Actin", "PIN1"], a: 0 },
        { q: "The 'Flooding' response in plants is characterized by the accumulation of...", options: ["Ethylene and ROS", "Ethylene and GA", "ABA and CK", "Sugar"], a: 0 },
        { q: "Which complex performs the N-linked glycosylation of proteins in the ER?", options: ["Oligosaccharyltransferase (OST)", "Signal peptidase", "BiP", "COPII"], a: 0 },
        { q: "What is the molecular mechanism of 'Vernalization' memory?", options: ["Stable epigenetic silencing of FLC via H3K27me3", "Cytoplasmic protein storage", "DNA mutation", "Starch accumulation"], a: 0 },
        { q: "Which Arabidopsis mutant shows a 'tuber-like' root phenotype?", options: ["shr", "scr", "wus", "None"], a: 3 },
        { q: "The 'Symplastic' connection between the sieve element and companion cell is via...", options: ["Branched plasmodesmata", "Simple pits", "Gap junctions", "None"], a: 0 },
        { q: "Which hormone is critical for the 'Systemic Acquired Resistance' (SAR)?", options: ["Salicylic Acid", "Jasmonic Acid", "ABA", "Auxin"], a: 0 },
        { q: "What is the role of 'DCL3' in plants?", options: ["Processing 24-nt siRNAs for RdDM", "Processing miRNAs", "DNA methylation", "Transcription"], a: 0 },
        { q: "Which metal is the cofactor for the enzyme 'Nitrogenase'?", options: ["Mo-Fe", "Cu-Zn", "Mg", "Mn"], a: 0 },
        { q: "The 'C4' cycle decarboxylation step in 'NADP-ME' type plants occurs in the...", options: ["Bundle sheath chloroplasts", "Mesophyll chloroplasts", "Cytosol", "Mitochondria"], a: 0 },
        { q: "Which Arabidopsis gene is a master regulator of 'Trichome' development?", options: ["GL1", "GL2", "TTG1", "All of the above"], a: 3 },
        { q: "What is the primary factor driving 'Cyclic Photophosphorylation'?", options: ["High ATP/ADP ratio or low NADP+", "High light only", "CO2 lack", "Water stress"], a: 0 },
        { q: "The 'Sieve Element Pellets' in some plants are composed of...", options: ["P-protein", "Starch", "Callose", "DNA"], a: 0 },
        { q: "Which enzyme is the 'molecular clock' determining the rate of the Calvin cycle?", options: ["RuBisCO", "SBPase", "FBPase", "All are regulated"], a: 3 },
        { q: "The 'Brassinosteroid' signaling pathway involves the degradation of which repressor?", options: ["BZR1", "BES1", "BIN2 (phosphorylates reps)", "None; it involves phosphorylation state changes"], a: 2 },
        { q: "Which plant group has the largest known genomes?", options: ["Gymnosperms (e.g. Pinus)", "Angiosperms (e.g. Paris japonica)", "Ferns", "Mosses"], a: 1 },
        { q: "What is the function of the 'TIR domain' in plant NLR receptors?", options: ["NAD+ cleavage signaling", "Protein-protein interaction", "DNA binding", "ATP hydrolysis"], a: 0 },
        { q: "The 'Pol V' RNA polymerase is unique to plants and functions in...", options: ["RdDM pathway", "Photosynthesis", "Translation", "Xylem formation"], a: 0 },
        { q: "Which gene family regulates 'Radial' patterning in the root?", options: ["SHR/SCR (GRAS family)", "WUS/CLV", "PIN", "ARF"], a: 0 },
        { q: "What is the role of 'Strigolactones' in the soil?", options: ["Signaling to mycorrhizal fungi and parasitic plants", "Killing pests", "Nutrient source", "None"], a: 0 },
        { q: "The 'PDI' enzymes in the ER facilitate...", options: ["Disulfide bond formation and isomerization", "Sugar addition", "Lipid assembly", "Protein cleavage"], a: 0 },
        { q: "Which hormone is perceived by the 'SCFTIR1' complex?", options: ["Auxin", "JA", "ABA", "GA"], a: 0 },
        { q: "The 'Z-scheme' was first proposed based on the discovery of...", options: ["Cytochrome b6 and f", "RuBisCO", "Chlorophyll a", "ATP"], a: 0 },
        { q: "Which enzyme converts 'Vialaxanthin' to 'Antheraxanthin'?", options: ["Vialaxanthin de-epoxidase (VDE)", "ZE", "LHC", "D1"], a: 0 },
        { q: "The 'Homeodomain-leucine zipper (HD-Zip)' family is involved in...", options: ["Vascular development and shade response", "Photosynthesis", "Root hair growth", "None"], a: 0 },
        { q: "What is the molecular function of 'FRIGIDA (FRI)'?", options: ["Upregulating FLC expression for winter-annual habit", "Inhibiting flowering", "GA synthesis", "ABA perception"], a: 0 },
        { q: "Which Arabidopsis mutant is 'pale-green' due to defective chloroplast development?", options: ["cla1", "det1", "cop1", "hy5"], a: 0 },
        { q: "The 'Phloem Unloading' in sink tissues is primarily...", options: ["Symplastic or Apoplastic depending on sink type", "Always active", "Always passive", "None"], a: 0 },
        { q: "Which gene family encodes the 'Potassium channels' in guard cells?", options: ["Shaker-type (e.g. KAT1)", "ABC", "MATE", "NRT"], a: 0 },
        { q: "What is the function of the 'Exodermis' in roots?", options: ["A secondary barrier to water and solute movement", "Photosynthesis", "Mechanical support", "Sugar storage"], a: 0 },
        { q: "Which hormone is synthesized via the 'Deoxyxylulose circular' pathway?", options: ["GA and ABA precursors", "Auxin", "Ethylene", "JA"], a: 0 },
        { q: "The 'NAC' domain stands for...", options: ["NAM, ATAF1,2, CUC2", "Nitrate, Auxin, Cytokinin", "Nucleus, Actin, Cytoskeleton", "None"], a: 0 },
        { q: "Which secondary metabolite is the precursor to 'Taxol'?", options: ["Geranylgeranyl pyrophosphate", "Phenylalanine", "Tyrosine", "Acetate"], a: 0 },
        { q: "The 'S-nitrosylation' of proteins is a post-translational modification by...", options: ["Nitric Oxide (NO)", "ROS", "Sugar", "ATP"], a: 0 },
        { q: "What is the role of 'XTH' enzymes in the cell wall?", options: ["Cleaving and rejoining xyloglucan chains", "Degrading cellulose", "Synthesizing pectin", "None"], a: 0 },
        { q: "Which Arabidopsis gene is required for 'Quiescent Center' identity and stem cell maintenance?", options: ["WOX5", "WUS", "PLT", "SCR"], a: 0 },
        { q: "The 'ABA' receptor complex PYL-ABA-PP2C inhibits which kinase?", options: ["SnRK2", "MAPK", "CDK", "None"], a: 0 },
        { q: "Which plant group evolved 'Polysporangiate' sporophytes first?", options: ["Tracheophytes", "Bryophytes", "Charophytes", "Algae"], a: 0 },
        { q: "What is the molecular function of the 'PEBP' protein family in plants?", options: ["Mobile signals like FT (Florigen) and MFT", "Photosynthesis", "DNA repair", "Sugar transport"], a: 0 },
        { q: "The 'Phosphate' uptake in roots is an active process coupled with...", options: ["H+ gradient (symport)", "K+ exchange", "Na+ symport", "ATP hydrolysis directly"], a: 0 },
        { q: "Which Arabidopsis mutant shows 'stomata-in-row' phenotype?", options: ["tmm", "sdd1", "spch", "mute"], a: 0 },
        { q: "The 'Lignin' monomers (monolignols) are synthesized in the...", options: ["Cytosol and exported to the wall", "Chloroplast", "Vacuole", "Mitochondria"], a: 0 },
        { q: "Which hormone inhibits 'Senescence'?", options: ["Cytokinin", "Ethylene", "ABA", "JA"], a: 0 },
        { q: "What is the primary factor limiting the 'CO2 Diffusion' into the leaf?", options: ["Stomatal and Mesophyll conductance", "Boundary layer", "Chloroplast number", "None"], a: 0 },
        { q: "Which gene encodes the 'Rice' SD1 protein (Green Revolution gene)?", options: ["GA20ox2", "Rht-1", "D1", "SLR1"], a: 0 },
        { q: "The 'Torus' in the conifer pit membrane is made of...", options: ["Cellulose and Pectin", "Lignin", "Suberin", "Callose"], a: 0 },
        { q: "What is the role of 'VPE (Vacuolar Processing Enzyme)'?", options: ["Programmed cell death and protein processing", "Sugar synthesis", "Water storage", "None"], a: 0 },
        { q: "Which complex mediates 'Double Fertilization' in angiosperms?", options: ["Two sperm cells fusing with egg and central cell", "Pollen and stigma", "Root and fungi", "None"], a: 0 },
        { q: "The 'F-box' protein TIR1 is part of which E3 ligase complex?", options: ["SCF", "APC/C", "RING", "HECT"], a: 0 },
        { q: "Which Arabidopsis gene is the 'Ortholog' of the Snapdragon Floricaula gene?", options: ["LEAFY", "AP1", "FT", "FUL"], a: 0 }
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
