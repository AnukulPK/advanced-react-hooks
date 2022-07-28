import React, { useState, useEffect, useRef, useMemo } from "react";

const useMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  //   const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  const reRenderHandler = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        type="number"
        className="form-control w-25"
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2 className="my-3">{`The square root of ${number} is ${sqrt}`}</h2>
      <button className="btn btn-primary" onClick={reRenderHandler}>
        Re-Render
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
};

const getSqrt = (n) => {
  for (let i = 0; i <= 1000; i++) {
    console.log(i);
  }
  console.log("Expensive function called");
  return Math.sqrt(n);
};

export default useMemoExample;
