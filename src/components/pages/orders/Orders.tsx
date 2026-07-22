import { useStore } from "@/components/store/store";
import { Button } from "@/components/ui/button";



const Orders = () => {
  const { cart, increment, decrement } = useStore();
  

  return (
    <>
      <div>
        <p className="p-5 text-3xl font-bold">Order details</p>
        <div className=" p-5 flex flex-col gap-5">
          {cart.map((item) => (
            <div
              key={item.id}
              className="max-w-[50%] h-30 bg-border flex items-start justify-between gap-5 border rounded-2xl shadow"
            >
              <div>
                <img src={item.img} alt="" className="w-42 rounded-2xl" />
              </div>
              <div className="p-5 leading-12">
                <p className=" text-2xl">{item.name}</p>
                <div className="w-40 flex  items-center gap-5">
                  <p>$ {Math.max(0, item.price - item.sale).toFixed(2)}</p>
                  <p className="text-black/50 relative">
                    $ {item.price.toFixed(2)}
                    <div className="w-full h-0.5 rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 z-0"></div>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-10 w-50 h-12 rounded-lg border px-4 py-2 bg-secondary text-primary">
                <button
                  className="cursor-pointer text-2xl hover:opacity-30 duration-300"
                  onClick={() => decrement(item.id)}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  className="cursor-pointer text-2xl hover:opacity-30 duration-300"
                  onClick={() => increment(item.id)}
                >
                  +
                </button>
              </div>
              <Button variant="destructive"  className="cursor-pointer" onClick={item.filter()}>X</Button>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Orders