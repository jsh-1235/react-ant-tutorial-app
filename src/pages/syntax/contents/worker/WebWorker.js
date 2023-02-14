import styles from "../Common.module.css";

import React, { useEffect } from "react";

// Web Workers are a simple means for web content to run scripts in background threads.
export class WorkerBuilder extends Worker {
  constructor(worker) {
    const code = worker.toString();

    const blob = new Blob([`(${code})()`]);

    return new Worker(URL.createObjectURL(blob));
  }
}

export function Fibonacci() {
  // eslint-disable-next-line no-restricted-globals
  self.onmessage = (message) => {
    console.log(message);

    const size = message.data.size;

    let fn = 0;
    let fn_1 = 0;
    let fn_2 = 1;

    for (let i = 2; i <= size; i++) {
      fn = fn_1 + fn_2;
      fn_1 = fn_2;
      fn_2 = fn;
      console.log(message.data.id, i, fn);
    }

    const result = size ? fn_2 : fn_1;

    postMessage(result);
  };
}

const workers = [new WorkerBuilder(Fibonacci), new WorkerBuilder(Fibonacci)];

export default function WebWorker({ ...props }) {
  useEffect(() => {
    workers[0].onmessage = (message) => {
      if (message) {
        console.log("Message1 from worker", message.data);
      }
    };

    workers[1].onmessage = (message) => {
      if (message) {
        console.log("Message2 from worker", message.data);
      }
    };
  }, []);

  const handleClick = (e) => {
    workers[0].postMessage({ id: "worker1", size: 10 });
    workers[1].postMessage({ id: "worker2", size: 10 });
  };

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div className="note">
        <button className="button" onClick={handleClick}>
          Run
        </button>
      </div>
    </>
  );
}
