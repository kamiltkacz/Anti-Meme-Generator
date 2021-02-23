import React, { Component } from "react";
import logo from "./haroldFirst.jpg";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      funnyText: "",
    };
  }

  render() {
    return (
      <header>
        <img src={logo} alt="harold greets" width="20%" height="30%" />

        <p>Harold's Meme Evaluator</p>
      </header>
    );
  }
}
export default Header;
