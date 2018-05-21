import { find, maxBy, minBy, map } from 'lodash';
import { createSelector } from 'reselect';

const questInfoSelector = state => state.dashboard.questInfo;
const languageSelector = state => state.dashboard.language;

export const getQuestInfo = createSelector(
  questInfoSelector,
  languageSelector,
  (questInfo, language) => {
    console.log('selector2', questInfo, language);
    const result = {
      ...questInfo,
      name: questInfo.name[language.code] || questInfo.name[questInfo.defaultLanguage],
      description: questInfo.description[language.code] || questInfo.description[questInfo.defaultLanguage],
      chapters: map(questInfo.chapters, chapter => {
        return {
          ...chapter,
          name: chapter.name[language.code] || chapter.name[questInfo.defaultLanguage],
          description: chapter.description[language.code] || chapter.description[questInfo.defaultLanguage]

        }
      })
    };
    return result;
  }
);
