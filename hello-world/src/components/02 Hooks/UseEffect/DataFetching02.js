import React, { useEffect, useState } from "react";
import axios from "axios";

export function DataFetching02(props) {
  const [post, setPost] = useState({});
  const [id, setId] = useState("1");
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <p>{post?.title}</p>
    </div>
  );
}
