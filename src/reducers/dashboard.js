import constants from '../constants';

import createReducer from '../utils/createReducer';

const {
  GET_LIST_OF_QUEST,
} = constants;

const initialValues = {
  isLoading: false,
  error: null,
  listOfQuests: []
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
});
