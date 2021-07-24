import React from "react";
import uniqid from "uniqid";
import { format } from "date-fns";
class InputForm extends React.Component {
  constructor() {
    super();
    this.state = {
      description: "",
      date: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
      priority: "medium",
      id: uniqid(),
      tags: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    let dateArray;
    if (name === "date") {
      dateArray = value.split("-");
      console.log(dateArray);
      console.log(this.state.date, value);

      if (new Date() < value) {
        console.log("hi");
      }

      //[value] = [format(new Date(...dateArray), "dd-MM-yyyy ")];
      //2021-06-28"
    }
    this.setState({
      [name]:
        name === "date" ? format(new Date(...dateArray), "dd-MM-yyyy ") : value,
      id: uniqid(),
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
          required
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
          required
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
