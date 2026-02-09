import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

function SelectQuantity() {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };
  return (
    <>
      <CiCircleMinus onClick={decrease} />
      <span className = "quantity-count">{count}</span>
      <CiCirclePlus onClick={increase} />
    </>
  );
}

export default SelectQuantity;
