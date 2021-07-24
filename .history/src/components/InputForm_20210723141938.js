import React from "react";
import uniqid from "uniqid";
class InputForm extends React.Component {
  constructor() {
    super();
    this.state = {
      description: "",
      date: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      priority: "medium",
      id: uniqid(),
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.changeState(this.state);
        }}
      >
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
        </label>
        <label>
          <input type="reset" value="reset" />
        </label>
      </form>
    );
  }
}
export default InputForm;
