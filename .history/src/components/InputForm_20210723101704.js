import React from "react";

class InputForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: {
        description: "",
        date: new Date(),
        priority: "medium",
      },
      tasks: JSON.parse(localStorage.getItem("state")) || [],
    };
    //
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    console.log(this.state.task);

    const { name, value } = e.target;
    this.setState({
      task: { [name]: value },
    });
    console.log(this.state.task);
  }
  handleSubmit(e) {
    this.setState({
      tasks: this.state.tasks.concat[this.state.task],
    });
    e.preventDefault();
    console.log(this.state.tasks);
    localStorage.setItem("state", JSON.stringify(this.state.tasks));

    //e.target.submit();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
