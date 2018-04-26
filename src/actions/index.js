import axios from 'axios';

import constants from '../constants';

const {
  GET_LIST_OF_QUEST,
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
