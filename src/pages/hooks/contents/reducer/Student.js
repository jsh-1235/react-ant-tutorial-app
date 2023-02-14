import styled from "styled-components";

import React from "react";

import { ACTION_TYPES } from "./Recorder";

const CONTAINER = styled.div`
  ${"" /* height: 100%; */}
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0px 0px;
  align-content: stretch;
  justify-content: stretch;
  align-items: center;
  justify-items: center;
  padding: 10px;
  font-size: 2rem;
  background-color: #29434e;
`;

export default function Student({ id, name, isHere, dispatch }) {
  const style = {
    textDecoration: isHere ? "none" : "line-through",
  };

  return (
    <CONTAINER>
      <span
        style={style}
        onClick={(e) => {
          dispatch({
            type: ACTION_TYPES.HERE,
            payload: id,
          });
        }}>
        {id}
      </span>
      <span style={style}>{name}</span>
      <button
        className="button"
        onClick={(e) =>
          dispatch({
            type: ACTION_TYPES.REMOVE,
            payload: id,
          })
        }>
        Remove
      </button>
    </CONTAINER>
  );
}
