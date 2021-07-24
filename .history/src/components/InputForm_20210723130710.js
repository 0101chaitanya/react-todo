import React from "react";

class InputForm extends React.Component {
  constructor() {
    super();
    this.state = this.props.stateSet || {
      task: {
        description: "",
        date: new Date(),
        priority: "medium",
      },
      tasks: [],
      // JSON.parse(localStorage.getItem("state")) ||
    };
    //
    this.cache = this.state.tasks;
    console.log(this.state.tasks);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    this.setState({
      tasks: this.state.tasks.concat[this.state.task],
    });
    e.preventDefault();
    //localStorage.setItem("state", JSON.stringify(state.tasks));

    //e.target.submit();
  }

  handleChange(e) {
    console.log(this.state.task);

    const { name, value } = e.target;
    this.setState({
      task: { [name]: value },
    });
    console.log(this.state.task);
  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.task.description}
          name="task.description"
          type="text"
        />
        <input
          onChange={this.handleChange}
          value={this.state.task.date}
          name="task.date"
          type="date"
        />
        <select
          onChange={this.handleChange}
          value={this.state.task.priority}
          name="task.priority"
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
