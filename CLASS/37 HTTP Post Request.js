import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  state = {
    userId: "",
    title: "",
    body: "",
  };

  changerHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        this.state
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { userId, body, title } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changerHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changerHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changerHandler}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
