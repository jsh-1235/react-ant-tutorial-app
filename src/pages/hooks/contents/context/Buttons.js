import React from "react";

import { useCounter } from "./useCounter";

export default function Buttons() {
  const [count, actions] = useCounter();

  return (
    <div>
      <button className="button" onClick={actions.increase}>
        +
      </button>
      {count}
      <button className="button" onClick={actions.decrease}>
        -
      </button>
    </div>
  );
}
