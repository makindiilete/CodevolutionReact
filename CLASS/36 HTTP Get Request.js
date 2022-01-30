//PostList.js
import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  state = {
    posts: [],
    error: null,
  };

  async componentDidMount() {
    try {
      /*  const response = await axios.get(
              "https://jsonplaceholder.typicode.com/posts"
            ); */
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts1"
      );
      console.log(response);
      this.setState({ posts: response.data });
    } catch (error) {
      console.log(error);
      this.setState({ error: "Error retrieving data" });
    }
  }

  render() {
    const { posts, error } = this.state;
    return (
      <>
        <div>List of posts</div>
        {posts?.map((item) => (
          <p key={item?.id}>{item?.title}</p>
        ))}
        {error && <h5>{error}</h5>}
      </>
    );
  }
}

export default PostList;
