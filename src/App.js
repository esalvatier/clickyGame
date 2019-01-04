import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Row from "./components/Row";
import Object from "./components/Object";
import Header from "./components/Header";
import objects from "./objects.json";
import './App.css';

class App extends Component {
  state = {
    objects: [],
    score: 0,
    highScore: 0
  };

  componentDidMount() {
    this.setState({objects: objects});
  };

  handleClick = event => {
    event.preventDefault();
    const id = event.target.dataset.index;
    this.state.objects[id].clicked ? this.reset() : this.increment(id);
  };

  reset() {
    this.setState({score: 0});
    this.shuffle();
    for (let i = 0; i < this.state.objects.length; i++) {
      this.setValue(i, false);
    }
  };

  increment(index) {
    let current = this.state.score;
    current += 1;
    this.setState({score: current})
    this.setValue(index, true)
    this.shuffle();
  };

  shuffle() {
    const array = this.state.objects;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({objects: array});
    if (this.state.score >= this.state.highScore) {
      this.setState({highScore: this.state.score});
    } 
  };

  setValue(index, value) {
    const tempObjs = this.state.objects;
    let changeObj = tempObjs[index];
    changeObj.clicked = value;
    this.setState({objects: tempObjs});
  }

  render() {
    return (
      <Wrapper>
        <Row>
          <Header 
            score={this.state.score}
            highScore={this.state.highScore}
          />
        </Row>
        <Row>
          {this.state.objects.map((object, i) => 
          <Object 
            data={object}
            index={i}
            handler={this.handleClick}
          />)}
        </Row>
      </Wrapper>
    );
  }
}

export default App;
