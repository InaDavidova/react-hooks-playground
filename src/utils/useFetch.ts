import { useEffect, useState } from "react";

export const useFetch = (apiUrl: string) => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState<any>({});
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      setError("");

      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result.message);
      } catch (err) {
        setError(err.message);
      }

      setIsFetching(false);
    };
    getData();
  }, []);

  return [isFetching, data, error];
};
