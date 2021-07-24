import React from "react";

class InputForm extends React.Component {
  constructor() {
    super();
    this.state = {
      description: "",
      date: new Date(),
      priority: "medium",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <form>
        <input
          onChange={this.handleChange}
          value={this.state.description}
          name="description"
          type="text"
        />
        <input
          onChange={this.handleChange}
          value={this.state.date}
          name="date"
          type="datetime"
        />
        <select
          onChange={this.handleChange}
          value={this.state.priority}
          name="priority"
        >
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
export default InputForm;
