import React from 'react';
import { connect } from 'react-redux';

import Main from './components/Main.jsx';
import Sidebar from './components/Sidebar.jsx';
import './styles/app.scss';

const App = () => {
  return (
    <div className="app">
      <Main />
      <Sidebar />
    </div>
  );
};
export default connect()(App);
