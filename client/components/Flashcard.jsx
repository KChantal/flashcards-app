import React from 'react';

const Flashcard = (props) => {
  return (
    <div className="container-3D-space">
      <div className="flashcard">
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
