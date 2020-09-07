import { UPDATE_SCORE } from '../constants/actionTypes';

const initialState = {
  score: 0,
};

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      return {
        ...state,
        score: score + 1,
      };

    default:
      return state;
  }
};

export default scoreReducer;
