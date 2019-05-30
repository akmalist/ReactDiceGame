import React, { Component } from "react";
import "./RollDice.css";

import Die from "./Die";

class RollDice extends Component {
  static defaultProps = {
    face: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = { dice: "one", dice2: "five", rolled: false };
    this.randDice = this.randDice.bind(this);
  }

  randDice() {
    const rand1 = this.props.face[
      Math.floor(Math.random() * this.props.face.length)
    ];
    const rand2 = this.props.face[
      Math.floor(Math.random() * this.props.face.length)
    ];
    this.setState({ dice: rand1, dice2: rand2, rolled: true });

    setTimeout(() => this.setState({ rolled: false }), 1000);
  }

  render() {
    return (
      <div>
        {" "}
        <Die num={this.state.dice} rolling={this.state.rolled} />
        <Die num={this.state.dice2} rolling={this.state.rolled} />
        <div>
          <button
            className="btn"
            onClick={this.randDice}
            disabled={this.state.rolled}
          >
            {this.state.rolled ? "Rolling..." : "Roll "}
          </button>
        </div>
      </div>
    );
  }
}

export default RollDice;
