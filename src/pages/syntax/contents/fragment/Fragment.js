import styled from "styled-components";

import React, { useState } from "react";

import Column from "./Column";

const TABLE = styled.table`
  width: 100%;
  border: 1px solid white;
  ${"" /* border-collapse: collapse; */}
  margin: 10px auto;

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

const initialItems = [
  {
    id: 1,
    title: "a",
  },
  {
    id: 2,
    title: "b",
  },
  {
    id: 3,
    title: "c",
  },
];

export default function Fragment({ ...props }) {
  const [items, setItems] = useState(initialItems);

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div className="note">
        <TABLE>
          <tbody>
            <tr>
              <Column items={items} />
            </tr>
            <tr>
              <Column items={items} />
            </tr>
            <tr>
              <Column items={items} />
            </tr>
          </tbody>
        </TABLE>
      </div>
    </>
  );
}
