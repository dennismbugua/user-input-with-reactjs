import React from "react";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      gender: "",
      description: "",
      acceptTerms: false
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    alert(
      "\n UserName: " +
        this.state.userName +
        "\n Description: " +
        this.state.description +
        "\n Gender: " +
        this.state.gender
    );
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name<input
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Gender:{" "}
            <select
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange}
            >
              <option>Choose . . .</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Description:{" "}
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default UserForm;
