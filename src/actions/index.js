import axios from 'axios';
import { browserHistory } from 'react-router';

import constants from '../constants';

const {
  GET_LIST_OF_QUEST,
  GET_QUEST_INFO
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
