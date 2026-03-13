// Keys used in localStorage
const KEYS = {
    NOVEL_ID: 'nr_current_novel_id',
    PAGE_INDEX: 'nr_current_page_index',
    SURVEY_COMPLETED: 'nr_survey_completed'
};

export const getProgress = () => {
    const novelId = localStorage.getItem(KEYS.NOVEL_ID);
    const pageIndex = parseInt(localStorage.getItem(KEYS.PAGE_INDEX) || '0', 10);
    const completed = localStorage.getItem(KEYS.SURVEY_COMPLETED) === 'true';

    return { novelId, pageIndex, completed };
};

export const setNovelProgress = (novelId, pageIndex) => {
    localStorage.setItem(KEYS.NOVEL_ID, novelId);
    localStorage.setItem(KEYS.PAGE_INDEX, pageIndex.toString());
    localStorage.setItem(KEYS.SURVEY_COMPLETED, 'true');
};

export const updatePageProgress = (pageIndex) => {
    localStorage.setItem(KEYS.PAGE_INDEX, pageIndex.toString());
};

export const clearAllProgress = () => {
    localStorage.removeItem(KEYS.NOVEL_ID);
    localStorage.removeItem(KEYS.PAGE_INDEX);
    localStorage.removeItem(KEYS.SURVEY_COMPLETED);
};
