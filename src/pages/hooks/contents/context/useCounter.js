import { useContext } from "react";

import { CounterContext } from "./CounterProvider";

export function useCounter() {
  const value = useContext(CounterContext);

  if (value === undefined) {
    throw new Error("useCounterState should be used within CounterProvider");
  } else {
    return value;
  }
}
