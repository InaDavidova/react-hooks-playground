import React, { useEffect, useState } from "react";
import { useFetch } from "../utils/useFetch.ts";

const CustomHooksExample = () => {
  //   const [isFetching, data, error] = useFetch(
  //     "https://dog.ceo/api/breeds/image/random"
  //   );
  //   const [isFetchingList, dogList, errorDogList] = useFetch(
  //     "https://dog.ceo/api/breeds/list/all"
  //   );

  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState<any>({});
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      setError("");

      try {
        const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
        const result = await response.json();
        setData(result.message);
      } catch (err) {
        setError(err.message);
      }

      setIsFetching(false);
    };
    getData();
  }, []);

  return (
    <>
      <h2>Custom Hooks</h2>

      <div>
        <h3>Random Dog Photo</h3>

        {isFetching ? <p>Loading ...</p> : <img src={data} alt="Random dog" />}

        {error && <p>{error}</p>}
      </div>

      {/* <div>
        <h3>List of dog breeds</h3>

        {isFetchingList ? (
          <p>Loading ...</p>
        ) : (
          <ul  id="dogList">
            {Object.keys(dogList).map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        )}

        {errorDogList && <p>{errorDogList}</p>}
      </div>                               */}
    </>
  );
};

export default CustomHooksExample;
