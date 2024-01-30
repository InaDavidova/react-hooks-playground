import React, { useContext, useState } from "react";

const UseStateExample = () => {
  const [count, setCount] = useState(0);
  let count2 = 0;

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const handleButtonClick2 = () => {
    count2 = count2 + 1;
    console.log(count2);
  };

  return (
    <>
      <h2>useState</h2>
      <button onClick={handleButtonClick}>Click me</button>
      <p>You have clicked the button {count} times.</p>

      <button onClick={handleButtonClick2}>Click me</button>
      <p>You have clicked the second button {count2} times.</p>
    </>
  );
};

export default UseStateExample;
