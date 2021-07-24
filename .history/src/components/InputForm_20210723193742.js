import React from "react";
import uniqid from "uniqid";
import { format } from "date-fns";
import parseISO from "date-fns/parseISO";
import differenceInDays from "date-fns/differenceInDays";
class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.item;
    this.cache = this.props.item;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    let DateTagger;
    if (name === "date") {
      console.log(this.state.date, e.target.value);
      console.log(
        differenceInDays(parseISO(this.state.date), parseISO(e.target.value))
      );
      const difference = differenceInDays(
        parseISO(this.state.date),
        parseISO(e.target.value)
      );
      if (difference > 0 && difference < 2) {
        DateTagger = "today";
      } else if (difference >= 2 && difference <= 7) {
        DateTagger = "This week";
      } else if (difference > 7 && difference < 31) {
        DateTagger = "This Month";
      }
    } //    tags: name === "date" ? (this.state.date )

    //2021-06-28"

    this.setState({
      priorityTags: name === "priority" ? [...value] : this.state.priorityTags,
      [name]: value,
      dateTags: name === "date" ? [DateTagger] : this.state.dateTags,
      id: uniqid(),
    });
  }

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.handleSubmit(this.state, e);
        }}
        onReset={(e) => {
          e.preventDefault();
          this.props.handleNoSubmission(e, this.cache);
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
