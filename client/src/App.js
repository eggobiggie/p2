import React, { Component } from 'react';
import { LogoHeader, About, PortfolioCards } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LogoHeader />
        <About />
        <PortfolioCards />
      </div>
    );
  }
}

export default App;
