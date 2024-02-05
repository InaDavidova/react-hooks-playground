import React, { useState, useEffect, useRef } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const UseRefExample = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startItem = (page - 1) * 10;
    const endItem = startItem + 10;
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${startItem}&_end=${endItem}`
    )
      .then((response) => response.json())
      .then((data) => setPosts((prevState) => [...prevState, ...data]));
  }, [page]);

  useEffect(() => {
    if (ref == null) return;

    const observer = new IntersectionObserver((entries) => {
      const markerState = entries[0];
      console.log(markerState);

      if (markerState.isIntersecting) {
        setPage((prevState) => prevState + 1);
      }
    });

    observer.observe(ref.current as Element);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return (
    <>
      <h2>useRef</h2>

      {posts.length ? (
        posts.map((el, index) => (
          <div key={index} id="post">
            <p>Post number: <span>{el.id}</span></p>
            <p>User: {el.userId}</p>
            <p>Title: {el.title}</p>
            <p>Post: {el.body}</p>
          </div>
        ))
      ) : (
        <div id="loading-div">
          <p>Loading...</p>
        </div>
      )}

      <div id="marker" ref={ref} />
    </>
  );
};

export default UseRefExample;
