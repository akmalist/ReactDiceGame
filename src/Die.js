import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { dice: "one", dice2: "two" };
  //   // this.randDice = this.randDice.bind(this);
  // }

  render() {
    return (
      <i
        className={` faces fas fa-dice-${this.props.num} fa-10x ${
          this.props.rolling ? "shaking" : ""
        }`}
      />
    );
  }
}

export default Die;
