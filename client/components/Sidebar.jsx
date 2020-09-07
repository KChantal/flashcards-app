import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  score: state.score.score,
});

const Sidebar = (props) => {
  const { score } = props;

  return (
    <div className="sidebar">
      <h1>Sidebar</h1>

      <p className="sidebar-text">
        Score: <span className="score-num">{score}</span>
      </p>
    </div>
  );
};

export default connect(mapStateToProps)(Sidebar);
