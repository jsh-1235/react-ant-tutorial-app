import styled from "styled-components";

import React, { useState } from "react";

import Column from "./Column";

const TABLE = styled.table`
  border: 1px solid white;
  ${"" /* border-collapse: collapse; */}
  margin: 10px;

  tr,
  td {
    text-align: center;
    border: 1px solid white;
    background-color: #0d47a1;
    padding: 10px;
  }

  td: hover {
    color: black;
    background-color: #ffd95a;
  }
`;

export default function Keys({ ...props }) {
  const [name, setName] = useState("");
  const [items, setItems] = useState(["1", "2", "3"]);

  const handleAdd = (e) => {
    setItems([...items, name]);
  };

  const handleRemove = (e) => {
    setItems((prevState) => {
      return prevState.filter((item) => item !== name);
    });
  };

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div className="note">
        <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button className="button" onClick={handleAdd}>
          add
        </button>
        <button className="button" onClick={handleRemove}>
          remove
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
