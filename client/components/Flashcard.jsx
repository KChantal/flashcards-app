import React, { useState } from 'react';

const Flashcard = (props) => {
  const { character, pinyin, english } = props;
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="container-3D-space">
      <div
        className={!flipped ? 'flashcard' : 'flashcard flipped'}
        onClick={flipCard}
      >
        <div className="front-of-card">
          <p className="chinese-character">{character}</p>
        </div>
        <div className="back-of-card">
          <div>
            <p className="pinyin">{pinyin}</p>
            <p className="english-text">{english}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
