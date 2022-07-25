import React, { useState, useEffect, useRef } from "react";

const UseRefExample2 = () => {
  const [name, setName] = useState("");
  const renders = useRef(1);
  const prevName = useRef("");

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  const setNameHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h1>Prev Name State: {prevName.current}</h1>
      <input
        type="text"
        value={name}
        onChange={setNameHandler}
        className="form-control mb-3"
      />
    </div>
  );
};

export default UseRefExample2;
