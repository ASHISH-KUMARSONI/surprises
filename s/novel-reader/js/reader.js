import { library } from './data.js';
import { updatePageProgress, setNovelProgress } from './storage.js';

let currentNovel = null;
let currentNovelData = null; // { title, author, pages: [] }
let currentPageIndex = 0;

// DOM Elements
const titleEl = document.getElementById('reader-title');
const pageInfoEl = document.getElementById('reader-page-info');
const pageTextEl = document.getElementById('page-text');
const btnPrev = document.getElementById('btn-prev-page');
const btnNext = document.getElementById('btn-next-page');

export const loadNovel = async (novelId, startIndex = 0) => {
    currentNovel = library[novelId];
    currentPageIndex = startIndex;

    // Save to local storage right away
    setNovelProgress(novelId, startIndex);

    titleEl.textContent = currentNovel.title;
    pageTextEl.innerHTML = '<p>Loading tale from the archives...</p>';

    try {
        // Fetch the json file
        const res = await fetch(`novels/${currentNovel.file}`);
        if (!res.ok) throw new Error("Could not load novel file.");

        currentNovelData = await res.json();

        // Render first view
        renderPage(currentPageIndex, 'none'); // 'none', 'right', or 'left'

    } catch (err) {
        console.error(err);
        pageTextEl.innerHTML = `<p style="color:red;">Alas, the pages of ${currentNovel.title} are currently lost to the wind.</p>`;
    }
};

const renderPage = (index, direction) => {
    if (!currentNovelData) return;

    // Safety boundaries
    if (index < 0) index = 0;
    if (index >= currentNovelData.pages.length) index = currentNovelData.pages.length - 1;

    currentPageIndex = index;
    updatePageProgress(currentPageIndex);

    // UI updates
    pageInfoEl.textContent = `${currentPageIndex + 1}/${currentNovelData.pages.length}`;
    btnPrev.disabled = currentPageIndex === 0;
    // We could change 'Next' to 'Finish' on the last page if desired
    btnNext.disabled = currentPageIndex === currentNovelData.pages.length - 1;

    // Handle Page Transition Animation
    // 1. apply out animation based on direction
    pageTextEl.style.opacity = '0';
    pageTextEl.classList.remove('slide-in-right', 'slide-in-left', 'slide-out-left', 'slide-out-right');

    // Small delay to allow the content to change while invisible, then animate in
    setTimeout(() => {
        // Format the content. A simple JSON array of paragraphs per string or raw HTML strings.
        // We'll treat the json elements as raw string that we can directly inject.
        // (Assuming each page is safe HTML string, if it's plaintext parse paragraphs)
        let pageRaw = currentNovelData.pages[currentPageIndex];

        // Wrap in <p> if it doesn't contain html
        if (!pageRaw.includes('<p>') && !pageRaw.includes('<h2>')) {
            pageRaw = `<p>${pageRaw.replace(/\n\n/g, '</p><p>')}</p>`;
        }

        pageTextEl.innerHTML = pageRaw;

        // apply IN animation
        if (direction === 'right') {
            // we went forward -> new page slides in from right
            pageTextEl.classList.add('slide-in-right');
        } else if (direction === 'left') {
            // we went backward -> old page slides in from left
            pageTextEl.classList.add('slide-in-left');
        } else {
            // no direction (initial load) simply fade in
            pageTextEl.style.opacity = '1';
        }
    }, 100);

    // Scroll to top of reader body
    document.querySelector('.reader-body').scrollTop = 0;
};

// Controls
btnNext.addEventListener('click', () => {
    if (currentNovelData && currentPageIndex < currentNovelData.pages.length - 1) {
        // apply out animation quickly (optional)
        renderPage(currentPageIndex + 1, 'right');
    }
});

btnPrev.addEventListener('click', () => {
    if (currentNovelData && currentPageIndex > 0) {
        renderPage(currentPageIndex - 1, 'left');
    }
});
