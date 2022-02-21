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

import React, { useEffect, useState } from "react";
import axios from "axios";

export function DataFetching03(props) {
  const [post, setPost] = useState({});
  const [id, setId] = useState("1");
  const [idFromButtonClick, setIdFromButtonClick] = useState("1");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [idFromButtonClick]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <button onClick={() => setIdFromButtonClick(id)}>Fetch Data</button>
      <p>{post?.title}</p>
    </div>
  );
}
