import React, { useLayoutEffect, useRef } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

import "./layout.css";

export const Layout = () => {
  const pTag = useRef<HTMLParagraphElement>(null);

  const { counter, increment } = useCounter(1);
  const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
  //   const { author, quote } = data[0];
  let author, quote;
  if (data[0]) {
    author = data[0].author;
    quote = data[0].quote;
  }

  useLayoutEffect(() => {
    console.log(pTag.current?.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      <blockquote className="blockquote">
        <p ref={pTag} className="mb-2">
          {quote}
        </p>
        {/* <footer className="blockquote-footer">{author}</footer> */}
      </blockquote>

      <button onClick={() => increment(1)} className="btn btn-primary">
        Trae otro...
      </button>
    </div>
  );
};
