import {
  FETCH_WORD_BEGIN,
  FETCH_WORD_SUCCESS,
  FETCH_WORD_FAILURE,
} from '../constants/actionTypes';

const initialState = {
  englishWord: 'English',
  chineseWord: '汉字',
  pinyin: 'Pīnyīn',
  words: [],
  loading: false,
  error: null,
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORD_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_WORD_SUCCESS:
      return {
        ...state,
        loading: false,
        words: action.payload.words,
      };

    case FETCH_WORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        words: [],
      };

    default:
      return state;
  }
};

export default cardsReducer;
