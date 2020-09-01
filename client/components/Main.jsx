import React from 'react';

import CardsContainer from './CardContainer.jsx';
import '../styles/main.scss';

const Main = (props) => {
  return (
    <div className="main">
      <div>
        <h1>Chinese Flashcards</h1>
      </div>
      <CardsContainer />
    </div>
  );
};

export default Main;
