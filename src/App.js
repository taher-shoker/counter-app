import React, { Component } from "react";
import Counter from "./containers/Counter";

class App extends Component {
  render() {
 
    return (
      <div className="counter-group">
        <Counter />
      </div>
    );
  }
}

export default App;
