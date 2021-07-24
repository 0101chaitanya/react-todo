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
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
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
          type="date"
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

        <label>
          <input type="submit" value="submit" />
          Submit
        </label>
        <label>
          <input type="reset" value="reset" />
          Reset
        </label>
      </form>
    );
  }
}
export default InputForm;
