import React, { useState, useEffect } from "react";

const heavy = () => {
  console.log("heavy job");

  // for (let index = 0; index < 10 ** 5; index++) {}

  return ["정승훈", "강아름"];
};

export default function HeavyJob({ ...props }) {
  const [student, setStudent] = useState("");

  const [students, setStudents] = useState(heavy);

  useEffect(() => {
    console.log(students);
  }, [students]);

  const handleChange = (e) => {
    // e.preventDefault();

    setStudent(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    setStudents((prevState) => {
      return [...prevState, student];
    });
  };

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div className="note">
        <div className="button-label">{student}</div>
        <input className="input" type="text" value={student} onChange={handleChange} />
        <button className="button" onClick={handleClick}>
          add
        </button>
        <ul style={{ padding: "20px" }}>
          {students.map((student, index) => {
            return <li key={index}>{student}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
