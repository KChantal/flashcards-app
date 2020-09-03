import React from 'react';
import Flashcard from './Flashcard.jsx';

const CardsContainer = (props) => {
  return (
    <div className="cards-container">
      <Flashcard />

      <div className="buttons-div">
        <button className="card-buttons correct-button">认识</button>
        <button className="card-buttons wrong-button">不懂</button>
      </div>
    </div>
  );
};

export default CardsContainer;
