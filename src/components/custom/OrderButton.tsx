import { Button } from "../ui/button";
import { useStore } from "../store/store";
import type { IGetProducts } from "../types/types";

interface Props {
  product: IGetProducts;
}

const OrderButton = ({ product }: Props) => {
  const { cart, addToCart, increment, decrement } = useStore();

  const item = cart.find((el) => el.id === product.id);
const count = item?.quantity ?? 0;

  return (
    <>
      {count === 0 ? (
        <Button
          className="w-full h-12 text-xl text-primary border-primary cursor-pointer"
          variant="outline"
          onClick={() => addToCart(product)}
        >
          Add to Order
        </Button>
      ) : (
        <div className="flex items-center justify-between w-full h-12 rounded-lg border px-4 py-2 bg-primary text-card">
          <button
            className="cursor-pointer text-2xl hover:opacity-30 duration-300"
            onClick={() => decrement(product.id)}
          >
            -
          </button>

          <span>{count}</span>

          <button
            className="cursor-pointer text-2xl hover:opacity-30 duration-300"
            onClick={() => increment(product.id)}
          >
            +
          </button>
        </div>
      )}
    </>
  );
};

export default OrderButton;
