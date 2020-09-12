import React, { useEffect } from 'react';
import Flashcard from './Flashcard.jsx';
import { getWordFromDb, updateScore, updateTotal } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  englishWord: state.cards.englishWord,
  chineseWord: state.cards.chineseWord,
  pinyin: state.cards.pinyin,
  loading: state.cards.loading,
  error: state.cards.error,
});

const CardsContainer = (props) => {
  const { englishWord, chineseWord, pinyin, loading, error } = props;

  const increaseScore = () => {
    props.dispatch(updateScore());
    fetchWord();
  };

  const fetchWord = () => {
    props.dispatch(updateTotal());
    props.dispatch(getWordFromDb());
  };

  return (
    <div className="cards-container">
      <Flashcard
        character={chineseWord}
        pinyin={pinyin}
        english={englishWord}
      />

      <div className="buttons-div">
        <button className="card-buttons correct-button" onClick={increaseScore}>
          认识
        </button>
        <button className="card-buttons wrong-button" onClick={fetchWord}>
          不懂
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(CardsContainer);
