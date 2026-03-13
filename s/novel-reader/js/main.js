import { getProgress, clearAllProgress } from './storage.js';
import { initQuiz } from './quiz.js';
import { loadNovel } from './reader.js';

// Views
const views = {
    welcome: document.getElementById('view-welcome'),
    quiz: document.getElementById('view-quiz'),
    recommendations: document.getElementById('view-recommendations'),
    reader: document.getElementById('view-reader'),
};

// Switch view helper
const showView = (viewName) => {
    Object.values(views).forEach(v => {
        v.classList.remove('active');
        v.classList.add('hidden');
    });
    views[viewName].classList.remove('hidden');
    // small delay to allow display:flex to apply before animation
    setTimeout(() => {
        views[viewName].classList.add('active');
    }, 10);
};

// Welcome View Logic
const btnStartFresh = document.getElementById('btn-start-fresh');
const btnContinue = document.getElementById('btn-continue');

const initApp = () => {
    const progress = getProgress();

    if (progress.novelId !== null) {
        btnContinue.classList.remove('hidden');
    } else {
        btnContinue.classList.add('hidden');
    }
};

btnStartFresh.addEventListener('click', () => {
    clearAllProgress();
    showView('quiz');
    initQuiz(handleQuizCompletion);
});

btnContinue.addEventListener('click', () => {
    const progress = getProgress();
    if (progress.novelId) {
        showView('reader');
        loadNovel(progress.novelId, progress.pageIndex);
    }
});

// Recommendations Logic
const recommendationsListEl = document.getElementById('novel-recommendations-list');
const btnRestartQuiz = document.getElementById('btn-restart-quiz');

const handleQuizCompletion = (recommendedNovels) => {
    showView('recommendations');

    recommendationsListEl.innerHTML = '';

    recommendedNovels.forEach(novel => {
        const item = document.createElement('div');
        item.className = 'novel-item';
        // HTML Structure of a card
        item.innerHTML = `
            <div class="novel-title">${novel.title}</div>
            <div class="novel-author">By ${novel.author}</div>
            <div class="novel-match">Perfect Match ✦</div>
        `;
        // Click to Open!
        item.addEventListener('click', () => {
            showView('reader');
            loadNovel(novel.id, 0); // Open at page 0
        });

        recommendationsListEl.appendChild(item);
    });
};

btnRestartQuiz.addEventListener('click', () => {
    showView('quiz');
    initQuiz(handleQuizCompletion);
});

// Back from reader to menu
document.getElementById('btn-back-to-menu').addEventListener('click', () => {
    // If they were just in a book, we show them Welcome with Continue available
    initApp();
    showView('welcome');
});

// Bootstrap
initApp();
