import React from 'react';
import { connect } from 'react-redux';
import './styles/app.scss';

const App = () => {
  return (
    <div className="app">
      <h1>Hello from React</h1>
    </div>
  );
};
export default connect()(App);
