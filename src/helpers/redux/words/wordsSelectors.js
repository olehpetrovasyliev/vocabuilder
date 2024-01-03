export const selectWords = (state) => state.words.wordsData.results;
export const selectPage = (state) => state.words.wordsData.page;
export const selectTotalPages = (state) => state.words.wordsData.totalPages;
export const selectCategories = (state) => state.words.categories;
export const selectStats = (state) => state.words.stats;
export const selectTasks = (state) => state.words.tasks;
export const selectWordToPost = (state) => state.words.wordToPost;
export const selectCurrentWord = (state) => state.words.currentWord;
export const selectCurrentWordProgress = (state) =>
  state.words.currentWord.progress;

export const selectAreWordsLoading = (state) => state.words.loading;
export const selectWordsError = (state) => state.words.error;
