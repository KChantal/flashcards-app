import React, { useEffect } from 'react';
import Flashcard from './Flashcard.jsx';
import { getWordFromDb, updateScore, updateTotal } from '../actions/actions';
import { connect } from 'react-redux';

const CardsContainer = (props) => {
  const { englishWord, chineseWord, pinyin, loading, error, onUpdateScore, onUpdateTotal, onUpdateGetWordFromDb } = props;

  const increaseScore = () => {
    onUpdateScore();
    fetchWord();
  };

  const fetchWord = () => {
    onUpdateTotal();
    onUpdateGetWordFromDb();
  };

  return (
    <div className="cards-container">
      <Flashcard
        character={chineseWord}
        pinyin={pinyin}
        english={englishWord}
      />

      <div className="buttons-div">
        <button className="card-buttons wrong-button" onClick={fetchWord}>
          不懂
        </button>
        <button className="card-buttons correct-button" onClick={increaseScore}>
          认识
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { cards } = state;
  const { englishWord, chineseWord, pinyin, loading, error } = cards;

  return {
    englishWord,
    chineseWord,
    pinyin,
    loading,
    error,
  }
};

const mapDispatchToProps = (dispatch) => ({
  onUpdateScore: () => dispatch(updateScore()),
  onUpdateTotal: () => dispatch(updateTotal()),
  onUpdateGetWordFromDb: () => dispatch(getWordFromDb()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
