import { useState } from "react";

const OrderButton = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {count === 0 ? (
        <button onClick={() => setCount(1)}>Add to Order</button>
      ) : (
        <div className="flex items-center justify-between w-36 rounded-lg border px-4 py-2">
          <button
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

          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      )}
    </>
  );
};

export default OrderButton;
