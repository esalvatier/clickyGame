import React from "react";
import Wrapper from "../Wrapper";
import Col from "../Col";

function Header(props) {
  return (
    <Wrapper>
      <Col size="m-4">
        <h1>Clicky Game!</h1>
      </Col>
      <Col size="m-4" add="">
        <h3>{props.score === 0 ? "Click a Picture to Guess!" : props.click ? "You guessed incorrectly!" : "You guessed correctly!"}</h3>
      </Col>
      <Col size="m-4" add="">
        <h3>Score: {props.score} / High Score: {props.highScore}</h3>
      </Col>
    </Wrapper>
  );
};

export default Header;