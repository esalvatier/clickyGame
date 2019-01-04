import React from "react";
import Col from "../Col";
import Container from "../Container";

function Object(props) {
  return (
    <Col size="md-4">
      <Container>
        <input type="image" src={props.data.src} alt="" onClick={props.handler} data-index={props.index} height="200px" width="200px"></input>
      </Container>
    </Col>
  );
}

export default Object;