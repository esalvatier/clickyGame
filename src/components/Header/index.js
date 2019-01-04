import React from "react";

function Header(props) {
  return (
    <div className="page-header">
      <h1>Score: {props.score} / High Score: {props.highScore}</h1>
    </div>
  );
};

export default Header;