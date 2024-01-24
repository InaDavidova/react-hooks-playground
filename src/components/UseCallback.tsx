import React, { useCallback, useEffect, useState } from "react";

const UseCallbackExample = () => {
  const [number, setNumber] = useState(0);

  const getRandomNumber = useCallback(() => {
    console.log("inside getRandomNumber");
    return Math.floor(Math.random() * 1000);
  }, []);

  useEffect(() => {
    const randomNumber = getRandomNumber();
    setNumber(randomNumber);
  }, [getRandomNumber]);

  const onClickHandler = () => {
    const randomNumber = getRandomNumber();
    setNumber(randomNumber);
  };

  return (
    <>
      <h2>useCallback</h2>
      <p>Your lucky number is {number}</p>
      <button onClick={onClickHandler}>Get another number</button>
    </>
  );
};

export default UseCallbackExample;
