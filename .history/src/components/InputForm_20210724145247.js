import React from "react";
import uniqid from "uniqid";
import parseISO from "date-fns/parseISO";
import differenceInDays from "date-fns/differenceInDays";
class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.item;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    let DateTagger;
    if (name === "date") {
      const difference = differenceInDays(
        parseISO(this.state.date),
        parseISO(e.target.value)
      );
      if (difference < 0) {
        DateTagger = "Expired";
      } else if (difference > 0 && difference < 2) {
        DateTagger = "Today";
      } else if (difference >= 2 && difference <= 7) {
        DateTagger = "This week";
      } else if (difference > 7 && difference < 31) {
        DateTagger = "This Month";
      }
    }
    this.setState({
      priorityTags: name === "priority" ? [...value] : this.state.priorityTags,
      ...this.state,
      [name]: value,
      dateTags: name === "date" ? [DateTagger] : this.state.dateTags,
      id: new uniqid(),
    });
  }

  render() {
    const bin = this.props.item;

    return (
      <form
        className="input-form"
        onSubmit={(e) => {
          this.props.handleSubmit(e, this.state);
        }}
        onReset={(e) => {
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
          <input type="reset" value="reset" />
        </label>
      </form>
    );
  }
}
export default InputForm;
