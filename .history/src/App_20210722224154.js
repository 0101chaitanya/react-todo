import React, { Component } from "react";
import TodoState from "./components/todoState";
class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <TodoState />;
      </div>
    );
  }
}

export default App;
