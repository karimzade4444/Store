import { useState } from "react";
import { Button } from "../ui/button";

const OrderButton = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {count === 0 ? (
        <Button
          className="w-full h-12 text-xl text-primary border-primary cursor-pointer"
          variant="outline"
          onClick={() => setCount(1)}
        >
          Add to Order
        </Button>
      ) : (
        <div className="flex items-center justify-between w-full h-12 rounded-lg border px-4 py-2 bg-primary text-card">
          <button
            className="cursor-pointer text-2xl  hover:opacity-30 duration-300"
            onClick={() => {
              if (count === 1) {
                setCount(0);
              } else {
                setCount(count - 1);
              }
            }}
          >
            -
          </button>

          <span>{count}</span>

          <button
            className="cursor-pointer text-2xl hover:opacity-30 duration-300"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      )}
    </>
  );
};

export default OrderButton;
