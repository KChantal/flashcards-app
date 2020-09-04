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
          <p className="chinese-character">汉字</p>
        </div>
        <div className="back-of-card">
          <div>
            <p className="pinyin">Pīnyīn</p>
            <p className="english-text">English</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
