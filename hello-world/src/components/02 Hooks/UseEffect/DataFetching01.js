import React, { useEffect, useState } from "react";
import axios from "axios";

export function DataFetching01(props) {
  const [post, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <ul>
        {post?.map((item) => (
          <li key={item?.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
