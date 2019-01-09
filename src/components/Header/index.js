import React from "react";
import Row from "../Row";
import Col from "../Col";
import Container from "../Container";

function Header(props) {
  return (
    <Container fluid={true}>
      <Row>
        <Col size="md-4">
          <h1>Clicky Game!</h1>
        </Col>
        <Col size="md-4">
          <h3>{props.start ? "Click a Picture to Guess!" : props.click ? "You guessed incorrectly!" : "You guessed correctly!"}</h3>
        </Col>
        <Col size="md-4">
          <h3>Score: {props.score} / High Score: {props.highScore}</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;