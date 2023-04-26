import React, { useMemo } from "react";
import { useState } from "react";

export default {
  title: "components/UseState"
};

function generateData() {
    return Math.floor(Math.random() * 1000000)
}
export const Example1 = () => {

    // const initValue = useMemo(generateData, []);
    const [counter, setCounter] = useState(generateData);

    const changer = (state: number) => state + 1
  return (
    <>
      <button onClick={() => setCounter(changer)}>+</button>
      <hr />      
      {counter}
    </>
  );
};