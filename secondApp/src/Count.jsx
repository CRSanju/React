import React, { useEffect, useState } from "react";

export default function Count() {
  let [count, setCount] = useState(0);
  // const countIncrease = () => {
  //     setTimeout(() => {
  //     setCount(count + 1);
  //     }, 1000)
  // }
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  });
  return (
    <div>
      <h2>{count}....</h2>
      {/* <button onClick={countIncrease}>Change Count</button> */}
      {/* <button onClick={() = > setCount(count - 1)}>Count decrement</button> */}
    </div>
  );
}
