import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';
import scoreReducer from './scoreReducer';

const reducers = combineReducers({
  cards: cardsReducer,
  score: scoreReducer,
});

export default reducers;
