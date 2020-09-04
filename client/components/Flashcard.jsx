import React, { useState } from 'react';

const Flashcard = (props) => {
  const [flipped, setFlipped] = useState(false);

  const flipCard = (event) => {
    console.log(flipped);
    setFlipped(!flipped);
  };

  return (
    <div className="container-3D-space">
      <div
        className={!flipped ? 'flashcard' : 'flashcard flipped'}
        onClick={flipCard}
      >
        <div className="front-of-card">
          <p className="chinese-character">{props.character}</p>
        </div>
        <div className="back-of-card">
          <div>
            <p className="pinyin">{props.pinyin}</p>
            <p className="english-text">{props.english}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
