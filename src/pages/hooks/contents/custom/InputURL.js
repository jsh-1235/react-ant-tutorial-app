import React from "react";

import { useFetch, useFetchPreload } from "./hooks";

const baseUrl = "https://jsonplaceholder.typicode.com";

export default function InputURL({ ...props }) {
  const [data, handleFetch] = useFetch(baseUrl, "users");

  const { data: userData } = useFetchPreload(baseUrl, "users");
  const { data: postsData } = useFetchPreload(baseUrl, "posts");
  const { data: todosData } = useFetchPreload(baseUrl, "todos");

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div className="note">
        <button className="button" onClick={(e) => handleFetch("users")}>
          users
        </button>
        <button className="button" onClick={(e) => handleFetch("posts")}>
          posts
        </button>
        <button className="button" onClick={(e) => handleFetch("todos")}>
          todos
        </button>
      </div>
      <pre style={{ color: "pink" }}>{data && JSON.stringify(data, null, 2)}</pre>
      <span className="script-border" />
      {userData && <pre style={{ color: "red" }}>{JSON.stringify(userData[0], null, 2)}</pre>}
      <span className="script-border" />
      {postsData && <pre style={{ color: "green" }}>{JSON.stringify(postsData[0], null, 2)}</pre>}
      <span className="script-border" />
      {todosData && <pre style={{ color: "blue" }}>{JSON.stringify(todosData[0], null, 2)}</pre>}
    </>
  );
}
