import React, { Component } from "react";

class Form extends Component {
  state = {
    username: "",
    comments: "",
    topic: "react",
  };

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleCommentChange = (event) => {
    this.setState({ comments: event.target.value });
  };
  handleTopicChange = (event) => {
    this.setState({ topic: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { comments, topic, username } = this.state;
    alert(`${username} ${comments} ${topic}`);
  };

  render() {
    const { comments, topic, username } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea value={comments} onChange={this.handleCommentChange} />
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        {/*Declaring the 'type="submit' attribute will enable users to be able to submit the form by pressing enter key*/}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
