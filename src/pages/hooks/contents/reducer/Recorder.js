import React, { useReducer, useState, useRef } from "react";

import Student from "./Student";

export const ACTION_TYPES = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  HERE: "HERE",
};

const reducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case ACTION_TYPES.ADD:
      return {
        count: state.count + 1,
        students: [
          ...state.students,
          {
            id: Date.now(),
            name: action.payload,
            isHere: true,
          },
        ],
      };
    case ACTION_TYPES.REMOVE:
      return {
        count: state.count - 1,
        students: state.students.filter((student) => student.id !== action.payload),
      };
    case ACTION_TYPES.HERE:
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload) {
            return { ...student, isHere: !student.isHere };
          } else {
            return student;
          }
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};

export default function Recorder({ ...props }) {
  const inputRef = useRef(null);

  const [name, setName] = useState("");

  const [recorder, dispatch] = useReducer(reducer, initialState);

  // console.log(recorder);

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div className="note">
        <div style={{ fontSize: "2rem" }}>{`Recorder (${recorder.count})`}</div>
        <div>
          <input ref={inputRef} className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <button
            className="button"
            onClick={(e) => {
              dispatch({ type: ACTION_TYPES.ADD, payload: name });

              setName("");

              inputRef.current.focus();
            }}>
            {ACTION_TYPES.ADD}
          </button>
        </div>
        <div>
          {recorder.students.map((record) => {
            return <Student key={record.id} id={record.id} name={record.name} isHere={record.isHere} dispatch={dispatch} />;
          })}
        </div>
      </div>
    </>
  );
}
