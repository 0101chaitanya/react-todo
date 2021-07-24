import React from "react";
import uniqid from "uniqid";
import parseISO from "date-fns/parseISO";
import differenceInDays from "date-fns/differenceInDays";
import { format } from "date-fns";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.item || {
      description: "",
      date: format(new Date(), "yyyy-MM-dd"),
      priority: "medium",
      completed: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      ...this.state,

      [name]: value,
    });
  }

  render() {
    const bin = this.props.item;

    return (
      <form
        className="input-form"
        onSubmit={(e) => {
          this.props.handleSubmit(e, this.state, this);
          this.setState({
            description: "",
            date: format(new Date(), "yyyy-MM-dd"),
            priority: "medium",
            id: uniqid(),
            priorityTags: ["medium"],
            dateTags: [],
            completed: false,
          });
        }}
        onReset={(e) => {
          //e.preventDefault();
          this.setState({
            state: bin,
          });
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
          required
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
          <input type="reset" value="Reset" />
        </label>
      </form>
    );
  }
}
export default InputForm;
