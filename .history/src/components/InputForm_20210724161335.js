import React from "react";
import uniqid from "uniqid";
import parseISO from "date-fns/parseISO";

import { format } from "date-fns";

import differenceInDays from "date-fns/differenceInDays";
class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.item || {
      description: "",
      date: format(new Date(), "yyyy-MM-dd"),
      priority: "medium",
      priorityTags: ["medium"],
      dateTags: [],
      completed: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    function date() {
      let DateTagger;
      if (name === "date") {
        const difference = differenceInDays(
          parseISO(this.state.date),
          parseISO(value)
        );
        console.log(difference);
        if (difference < 0) {
          DateTagger = "Expired";
          return DateTagger;
        } else if (difference > 0 && difference < 2) {
          DateTagger = "Today";
          return DateTagger;
        } else if (difference >= 2 && difference <= 7) {
          DateTagger = "This week";
          return DateTagger;
        } else if (difference > 7 && difference < 31) {
          DateTagger = "This Month";
          return DateTagger;
        }
      }
    }
    this.setState({
      [name]: value,

      priorityTags: name === "priority" ? [...value] 
      ...this.state,
      dateTags: name === "date" ? date() : this.state.dateTags,
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
