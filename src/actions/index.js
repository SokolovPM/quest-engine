import axios from 'axios';
import { browserHistory } from 'react-router';

import constants from '../constants';

const {
  GET_LIST_OF_QUEST,
  GET_QUEST_INFO,
  SELECT_CHAPTER,
  SELECT_LANGUAGE
} = constants;

const getListOfQuestRequest = () => ({
  type: `${GET_LIST_OF_QUEST}_REQUEST`
});

const getListOfQuestSuccess = (listOfQuests) => ({
  type: `${GET_LIST_OF_QUEST}_SUCCESS`,
  listOfQuests
});

const getListOfQuestFailure = error => ({
  type: `${GET_LIST_OF_QUEST}_FAILURE`,
  error
});

export const getListOfQuest = () => {
  return (dispatch) => {
    dispatch(getListOfQuestRequest());
    axios
      .get('/listOfQuests')
      .then(response => {
        dispatch(getListOfQuestSuccess(response.data));
        return Promise.resolve();
      })
      .catch(error => {
        dispatch(getListOfQuestFailure(error));
        return Promise.reject();
      });
  };
};

export const getQuestInfo = (questName) => {
  browserHistory.push('quest');
  return {
    type: GET_QUEST_INFO,
    questName
  }
}


const selectChapterRequest = (chapterId) => ({
  type: `${SELECT_CHAPTER}_REQUEST`,
  chapterId
});

const selectChapterSuccess = (chapterData) => ({
  type: `${SELECT_CHAPTER}_SUCCESS`,
  chapterData
});

const selectChapterFailure = error => ({
  type: `${SELECT_CHAPTER}_FAILURE`,
  error
});

export const selectChapter = (chapterId) => {
  return (dispatch, getState) => {
    dispatch(selectChapterRequest(chapterId));
    axios
      .get(`/quests/${getState().dashboard.questName}/${chapterId}`)
      .then(response => {
        dispatch(selectChapterSuccess(response.data));
        browserHistory.push('chapter');
        return Promise.resolve();
      })
      .catch(error => {
        dispatch(selectChapterFailure(error));
        return Promise.reject();
      });
  };
};

export const selectLanguage = (code) => ({
  type: SELECT_LANGUAGE,
  code
});
