import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

const initState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: "Something went wrong",
        post: {},
      };
    default:
      return state;
  }
};

export function UseReducerFetchingData(props) {
  const [state, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => dispatch({ type: "FETCH_ERROR" }));
  }, []);

  return (
    <div>
      {state.loading ? <p>Loading...</p> : <p>{state.post.title}</p>}
      {state.error ? <p>{state.error}</p> : null}
    </div>
  );
}
