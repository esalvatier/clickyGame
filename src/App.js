import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Row from "./components/Row";
import Clickable from "./components/Clickable";
import Header from "./components/Header";
import clickable from "./clickables.json";
import './App.css';

class App extends Component {
  state = {
    clickable: [],
    score: 0,
    highScore: 0,
    clickRes: null,
    start: true
  };

  componentDidMount() {
    this.setState({clickable: clickable});
  };

  handleClick = event => {
    event.preventDefault();
    if (this.state.start) {
      this.setState({start: false})
    }
    const id = event.target.dataset.index;
    this.setState({clickRes: this.state.clickable[id].clicked});
    this.state.clickable[id].clicked ? this.reset() : this.increment(id);
  };

  reset() {
    this.setState({score: 0});
    this.shuffle();
    for (let i = 0; i < this.state.clickable.length; i++) {
      this.setValue(i, false);
    }
  };

  increment = index => {
    let current = this.state.score;
    current += 1;
    let hs;
    if (current >= this.state.highScore) {
      hs = current;
    } else {
      hs = this.state.highScore;
    }
    this.setState({
      score: current,
      highScore: hs
    })
    this.setValue(index, true)
    this.shuffle();
  };

  shuffle() {
    const array = this.state.clickable;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({clickable: array});
  };

  setValue(index, value) {
    const tempObjs = this.state.clickable;
    let changeObj = tempObjs[index];
    changeObj.clicked = value;
    this.setState({clickable: tempObjs});
  }

  render() {
    return (
      <Wrapper>
        <Header
          start={this.state.start}
          score={this.state.score}
          highScore={this.state.highScore}
          click={this.state.clickRes}
        />
        <Row>
          {this.state.clickable.map((clickable, i) => 
          <Clickable
            key={clickable.id}
            data={clickable}
            index={i}
            handler={this.handleClick}
          />)}
        </Row>
      </Wrapper>
    );
  }
}

export default App;
