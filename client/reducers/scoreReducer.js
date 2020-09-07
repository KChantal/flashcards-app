import { UPDATE_SCORE } from '../constants/actionTypes';

const initialState = {
  score: 0,
};

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      let newScore = state.score + 1;

      return {
        ...state,
        score: newScore,
      };

    default:
      return state;
  }
};

export default scoreReducer;
