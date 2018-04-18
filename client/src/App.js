import React, { Component } from 'react';
import { LogoHeader, About, PortfolioCards, Contact } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LogoHeader />
        <About />
        <PortfolioCards />
        <Contact />
      </div>
    );
  }
}

export default App;
