import {
  FETCH_WORD_BEGIN,
  FETCH_WORD_SUCCESS,
  FETCH_WORD_FAILURE,
  UPDATE_SCORE,
  UPDATE_TOTAL,
} from '../constants/actionTypes';

export const getWordFromDb = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_WORD_BEGIN,
    });

    fetch('/getWords')
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: FETCH_WORD_SUCCESS,
          payload: data,
        })
      )
      .catch((err) => {
        dispatch({
          type: FETCH_WORD_FAILURE,
          payload: err,
        });
      });
  };
};

export const updateScore = () => ({
  type: UPDATE_SCORE,
});

export const updateTotal = () => ({
  type: UPDATE_TOTAL,
});
