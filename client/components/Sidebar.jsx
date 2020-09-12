import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  score: state.score.score,
  total: state.score.total,
});

const Sidebar = (props) => {
  const { score, total } = props;

  return (
    <div className="sidebar">
      <img
        className="sidebar-img"
        src="../assets/china-unsplash-annie-spratt.jpg"
      ></img>

      <p className="sidebar-text">
        Current Score: <br />
        <span className="score-num">{score}</span>
      </p>

      <p className="sidebar-text">
        Out of Total: <br />
        <span className="total-num">{total}</span>
      </p>
    </div>
  );
};

export default connect(mapStateToProps)(Sidebar);
