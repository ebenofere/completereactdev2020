import React, { Component } from "react";
import logo from "./logo.svg";
class App extends Component {
  constructor() {
    super();

    this.state = {
      string: "Hello Starboy",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="'App-header">
          <img src={logo} className="App-logo" alt="logo">
            <p>{this.state}</p>
            <button onClick={() => this.setState({ string: "Hello Barzagli" })}>
              Change Text
            </button>
          </img>
        </header>
      </div>
    );
  }
}

export default App;
