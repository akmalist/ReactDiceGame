import React, { Component } from "react";
// import { render } from "react-dom";

import Die from "./Die";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = { dice: "one", dice2: "two" };
    this.randDice = this.randDice.bind(this);
  }

  randDice() {
    let randNum = Math.floor(Math.random() * 6 + 1);
    if (randNum === 1) {
      return this.setState({ dice: "one" });
    } else if (randNum === 2) {
      return this.setState({ dice: "two" });
    } else if (randNum === 3) {
      return this.setState({ dice: "three" });
    } else if (randNum === 4) {
      return this.setState({ dice: "four" });
    } else if (randNum === 5) {
      return this.setState({ dice: "five" });
    } else {
      return this.setState({ dice: "six" });
    }
  }
  render() {
    return (
      <div>
        {" "}
        <h1>Test!</h1>
        <Die />
        <Die />
        <h2>{this.state.dice}</h2>
        <button onClick={this.randDice}>Roll Dice</button>
      </div>
    );
  }
}

export default RollDice;
