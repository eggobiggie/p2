import React, { Component } from 'react';
import { LogoHeader, About } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LogoHeader />
        <About />
      </div>
    );
  }
}

export default App;
