import React, { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const someHeavyCalculation = useMemo(() => {
    console.log("doing heavy calculations");

    const result = number1 + number2;
    return result;
  }, [number1, number2]);

  return (
    <>
      <h2>useMemo</h2>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(Number(e.target.value))}
      />

      <span> + </span>

      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(Number(e.target.value))}
      />

      <button
        onClick={() => {
          setNumber1(number1);
          setNumber2(number2);
        }}
      >
        Calculate
      </button>

      <p>The sum of this equation in {someHeavyCalculation}</p>
    </>
  );
};

export default UseMemoExample;
