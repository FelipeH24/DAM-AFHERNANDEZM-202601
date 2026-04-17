import { useState, useEffect } from "react";

export const useCalculator = () => {
  const [current, setCurrent] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [operation, setOperation] = useState<string | null>(null);

  useEffect(() => {
    console.log({ current, total, operation });
  }, [current, total, operation]);

  const handleNumber = (value: number) => {
    setCurrent((prev) => prev * 10 + value);
  };

  const handleOperation = (op: string) => {
    setTotal(current);
    setOperation(op);
    setCurrent(0);
  };

  const calculate = () => {
    let result = total;

    switch (operation) {
      case "+": result = total + current; break;
      case "-": result = total - current; break;
      case "*": result = total * current; break;
      case "/": result = current !== 0 ? total / current : 0; break;
    }

    setTotal(result);
    setCurrent(0);
    setOperation(null);
  };

  return { current, total, handleNumber, handleOperation, calculate };
};