import {
  FETCH_WORD_BEGIN,
  FETCH_WORD_SUCCESS,
  FETCH_WORD_FAILURE,
  UPDATE_SCORE,
} from '../constants/actionTypes';

export const fetchWordBegin = () => ({
  type: FETCH_WORD_BEGIN,
});

export const fetchWordSuccess = (words) => ({
  type: FETCH_WORD_SUCCESS,
  payload: { words },
});

export const fetchWordFailure = (err) => ({
  type: FETCH_WORD_FAILURE,
  payload: { err },
});

export const updateScore = () => ({
  type: UPDATE_SCORE,
});
