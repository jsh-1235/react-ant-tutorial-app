import React, { useState, useEffect } from "react";

import axios from "axios";

export default function Ajax({ ...props }) {
  const [data, setData] = useState({});
  const [id, setID] = useState(1);

  useEffect(() => {
    console.log("mount");

    getPost();

    return () => {
      console.log("cleanup");
    };
  }, []);

  useEffect(() => {
    getPost();
  }, [id]);

  const getPost = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

      setData({
        data: response.data,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    setID(id + 1);
  };

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <button className="button" onClick={handleClick}>
        {id}
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
