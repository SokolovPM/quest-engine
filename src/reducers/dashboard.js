import { find } from 'lodash';

import constants from '../constants';

import createReducer from '../utils/createReducer';

const {
  GET_LIST_OF_QUEST,
  GET_QUEST_INFO,
  SELECT_CHAPTER
} = constants;

const initialValues = {
  isLoading: false,
  error: null,
  listOfQuests: [],
  questName: '',
  questInfo: null,
  chapterId: '',
  chapterData: null
};

export default createReducer(initialValues, {
  [`${GET_LIST_OF_QUEST}_REQUEST`]: () => {
    return { isLoading: true };
  },
  [`${GET_LIST_OF_QUEST}_SUCCESS`]: (
    state,
    { listOfQuests }
  ) => {
    return {
      isLoading: false,
      listOfQuests
    };
  },
  [`${GET_LIST_OF_QUEST}_FAILURE`]: (state, { error }) => ({
    isLoading: false,
    error
  }),

  [GET_QUEST_INFO]: (state, { questName }) => {
    const questInfo = find(state.listOfQuests, quest => quest.id === questName);
    return { isLoading: true, questName, questInfo };
  },

  [`${SELECT_CHAPTER}_REQUEST`]: (state, { chapterId }) => {
    return { isLoading: true, selectedChapter: chapterId };
  },
  [`${SELECT_CHAPTER}_SUCCESS`]: (
    state,
    { chapterData }
  ) => {
    return {
      isLoading: false,
      chapterData
    };
  },
  [`${SELECT_CHAPTER}_FAILURE`]: (state, { error }) => ({
    isLoading: false,
    error
  })
});
