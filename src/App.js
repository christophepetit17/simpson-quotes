import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quote from "./Quote";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on : true
      };
  }
  handleClick = () => {
    this.setState({ on: !this.state.on });
};
  render() {
    const working = this.state.on ? 'Working' : 'Chilling';
    const logoClass = this.state.on ? 'App-logo' : 'App-logo2';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={logoClass} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={this.handleClick}>{working.toUpperCase()}</button>
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
      </div>
    );
  }
}

export default App;