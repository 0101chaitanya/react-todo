import React from "react";
import uniqid from "uniqid";
import { format } from "date-fns";
import parseISO from "date-fns/parseISO";
import differenceInCalendarYears from "date-fns/differenceInCalendarYears";
class InputForm extends React.Component {
  constructor() {
    super();
    this.state = {
      description: "",
      date: format(new Date(), "dd-MM-yyyy"),
      priority: "medium",
      id: uniqid(),
      tags: ["medium"],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    if (name === "date") {
      let param1 = this.state.date;
      let param2 = e.target.value.split("-").reverse().join("-");
      console.log(param1, param2);
      console.log(
        differenceInCalendarYears(parseISO(param1), parseISO(param2))
      );
    } //    tags: name === "date" ? (this.state.date )

    //2021-06-28"

    this.setState({
      tags: name === "priority" ? [...value] : this.state.tags,
      [name]: value,

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
          <input type="reset" value="reset" />
        </label>
      </form>
    );
  }
}
export default InputForm;
