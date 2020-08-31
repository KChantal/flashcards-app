import React from 'react';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>

      <p className="sidebar-text">
        Score: <span className="score-num">5</span>
      </p>
    </div>
  );
};

export default Sidebar;
