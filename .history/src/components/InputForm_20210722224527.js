import React from "react";

class InputForm extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <form>
        <input type="text" />
        <input type="datetime-local" />
      </form>
    );
  }
}
