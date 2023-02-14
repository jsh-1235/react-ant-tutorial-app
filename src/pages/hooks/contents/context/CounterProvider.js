import { useState, useMemo, createContext } from "react";

export const CounterContext = createContext(0);

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const actions = useMemo(
    () => ({
      increase(e) {
        e.stopPropagation();
        setCount((prev) => prev + 1);
      },
      decrease(e) {
        e.stopPropagation();
        setCount((prev) => prev - 1);
      },
    }),
    []
  );

  const value = useMemo(() => {
    return [count, actions];
  }, [count, actions]);

  return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>;
}

// ==================================================================
// Context 안에는 Provider 와 Consumer 라는게 존재합니다.
// ==================================================================
