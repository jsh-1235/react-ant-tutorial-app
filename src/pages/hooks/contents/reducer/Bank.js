import React, { useReducer, useState } from "react";

const ACTION_TYPES = {
  DEPOSIT: "DEPOSIT",
  WITHDRAW: "WITHDRAW",
};

const reducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case ACTION_TYPES.DEPOSIT:
      return state + action.payload;
    case ACTION_TYPES.WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};

export default function Bank({ ...props }) {
  const [number, setNumber] = useState(0);

  const [money, dispatch] = useReducer(reducer, 1000);

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div className="note">
        <div style={{ fontSize: "2rem" }}>Bank</div>
        <div style={{ fontSize: "1rem" }}>Balance : {money}</div>
        <div>
          <input className="input" type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} step="1000" />
          <button className="button" onClick={(e) => dispatch({ type: ACTION_TYPES.DEPOSIT, payload: number })}>
            {ACTION_TYPES.DEPOSIT}
          </button>
          <button className="button" onClick={(e) => dispatch({ type: ACTION_TYPES.WITHDRAW, payload: number })}>
            {ACTION_TYPES.WITHDRAW}
          </button>
        </div>
      </div>
    </>
  );
}
