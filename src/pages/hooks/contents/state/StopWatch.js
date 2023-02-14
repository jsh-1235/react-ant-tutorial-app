import React, { useState, useEffect } from "react";

export default function StopWatch({ value }) {
  const [time, setTime] = useState(value);

  useEffect(() => {
    console.log("mounted");

    const interval = setInterval(() => {
      setTime((prevState) => {
        return prevState + 1;
      });
    }, 100);

    return () => {
      clearInterval(interval);

      console.log("unmounted");
    };
  }, []);

  useEffect(() => {
    console.log(time);
  }, [time]);

  return <span>{time}</span>;
}
