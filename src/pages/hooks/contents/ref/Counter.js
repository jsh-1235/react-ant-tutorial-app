import React, { useState, useEffect, useRef } from "react";

export default function Counter({ ...props }) {
  const [student, setStudent] = useState("");

  const inputRef = useRef(0);

  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const handleStateClick = (e) => {
    e.preventDefault();

    setCount((prevState) => {
      return prevState + 1;
    });

    inputRef.current.focus();
  };

  useEffect(() => {
    console.log("state", count);
  }, [count]);

  const handleRefClick = (e) => {
    e.preventDefault();

    countRef.current = countRef.current + 1;

    console.log("ref", countRef.current);

    inputRef.current.value = "";
  };

  const handleVarClick = (e) => {
    e.preventDefault();

    countVar++;

    console.log("variable", countVar);

    setStudent("");
  };

  const handleChange = (e) => {
    // e.preventDefault();

    setStudent(e.target.value);
  };

  console.log(`๐๏ธ Rendering`);

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div className="note">
        <button className="button" onClick={handleStateClick}>
          {`state : ${count}`}
        </button>
        <button className="button" onClick={handleRefClick}>
          {`ref : ${countRef.current}`}
        </button>
        <button className="button" onClick={handleVarClick}>
          {`variable : ${countVar}`}
        </button>

        <input ref={inputRef} className="input" type="text" value={student} onChange={handleChange} />
      </div>
    </>
  );
}

//=====================================================================
// state์ ๋ณํ -> Rendering -> ์ปดํฌ๋ํธ ๋ด๋ถ ๋ณ์ (Variable) ์ด๊ธฐํ
// ref์ ๋ณํ -> No Rendering -> ์ปดํฌ๋ํธ ๋ด๋ถ ๋ณ์์ ์ํ ์ ์ง
