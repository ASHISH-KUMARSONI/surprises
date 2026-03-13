import { questions, library } from './data.js';

let currentQuestionIndex = 0;
let userTags = [];
let onQuizComplete = null;

// DOM Elements
const trackerEl = document.getElementById('quiz-tracker');
const progressFillEl = document.getElementById('quiz-progress');
const contentAreaEl = document.getElementById('quiz-content-area');
const questionTextEl = document.getElementById('question-text');
const optionsContainerEl = document.getElementById('options-container');

export const initQuiz = (completionCallback) => {
    currentQuestionIndex = 0;
    userTags = [];
    onQuizComplete = completionCallback;
    renderQuestion();
};

const renderQuestion = () => {
    if (currentQuestionIndex >= questions.length) {
        completeQuiz();
        return;
    }

    const q = questions[currentQuestionIndex];

    // UI Update
    trackerEl.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
    progressFillEl.style.width = `${((currentQuestionIndex) / questions.length) * 100}%`;

    // Fade Out effect
    contentAreaEl.classList.add('fade-out');

    setTimeout(() => {
        questionTextEl.textContent = q.text;
        optionsContainerEl.innerHTML = '';

        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'btn-option';
            btn.textContent = opt.text;
            btn.onclick = () => handleOptionSelect(opt.tags);
            optionsContainerEl.appendChild(btn);
        });

        // Fade In
        contentAreaEl.classList.remove('fade-out');
    }, 300); // matches css transition time
};

const handleOptionSelect = (tags) => {
    // Merge chosen tags
    userTags = [...userTags, ...tags];

    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        // Last question just answered!
        progressFillEl.style.width = '100%';
        setTimeout(() => {
            completeQuiz();
        }, 600);
    } else {
        renderQuestion();
    }
};

const completeQuiz = () => {
    // 1. Tally tag frequencies
    const tagCounts = {};
    userTags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });

    // 2. Score novels based on tag overlap
    const novelScores = Object.values(library).map(novel => {
        let score = 0;
        novel.tags.forEach(t => {
            if (tagCounts[t]) {
                score += tagCounts[t]; // Weighting logic
            }
        });
        return { novel, score };
    });

    // 3. Sort descending by score
    novelScores.sort((a, b) => b.score - a.score);

    // 4. Send top 3 (or more if tie) to callback
    const topNovels = novelScores.slice(0, 3).map(item => item.novel);

    if (onQuizComplete) {
        onQuizComplete(topNovels);
    }
};
