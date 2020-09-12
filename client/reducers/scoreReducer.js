import { UPDATE_SCORE, UPDATE_TOTAL } from '../constants/actionTypes';

const initialState = {
  score: 0,
  total: 0,
};

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      let newScore = state.score + 1;

      return {
        ...state,
        score: newScore,
      };

    case UPDATE_TOTAL:
      let newTotal = state.total + 1;

      return {
        ...state,
        total: newTotal,
      };

    default:
      return state;
  }
};

export default scoreReducer;
