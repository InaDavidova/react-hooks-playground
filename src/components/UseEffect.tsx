import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => console.log("interval trigger"), 1000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>useEffect</h2>

      <button onClick={handleButtonClick}>Click me</button>
      <p>You have clicked the button {count} times.</p>

      <ul>
        {users.map((el: any) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UseEffectExample;
