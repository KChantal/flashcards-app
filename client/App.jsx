import React from 'react';
import { connect } from 'react-redux';

import Main from './components/Main.jsx';
import './styles/app.scss';

const App = () => {
  return (
    <div className="app">
      <h1>Hello from React</h1>
      <Main />
    </div>
  );
};
export default connect()(App);
