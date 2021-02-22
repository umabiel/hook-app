import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

import "./examples.css";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(
    `https://breakingbadapi.com/api/quotes/${counter}`
  );
  //   const { author, quote } = data[0];
  let author, quote;
  if (data[0]) {
    author = data[0].author;
    quote = data[0].quote;
  }

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote">
          <p className="mb-2">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      <button onClick={() => increment(1)} className="btn btn-primary">
        Trae otro...
      </button>
    </div>
  );
};
