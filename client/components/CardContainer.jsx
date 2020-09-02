import React from 'react';
import Flashcard from './Flashcard.jsx';

const CardsContainer = (props) => {
  return (
    <div className="cards-container">
      <Flashcard />

      <div className="buttons-div">
        <button className="card-buttons correct-button">我知道</button>
        <button className="card-buttons wrong-button">我不知道</button>
      </div>
    </div>
  );
};

export default CardsContainer;
