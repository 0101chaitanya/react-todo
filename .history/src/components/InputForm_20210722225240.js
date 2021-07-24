import React from "react";

class InputForm extends React.Component {
  constructor() {
    super();
      this.state = {
          description: "",
          date: 
  }
  }
  render() {
    return (
      <form>
        <input name="description" type="text" />
        <input name="date" type="datetime" />
        <select name="priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit" value="submit"></button>
        <button type="reset" value="reset"></button>
      </form>
    );
  }
}
