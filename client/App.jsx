import React from 'react';
import { connect } from 'react-redux';

const App = () => {
  return (
    <div className="main">
      <h1>Hello from React</h1>
    </div>
  );
};
export default connect()(App);
