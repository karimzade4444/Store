import OrderButton from "@/components/custom/OrderButton";
import { useSearchStore } from "@/components/store/store";

import { getProducts } from "@/lib/api/api";
import {  useQuery } from "@tanstack/react-query";



const Products = () => {
  const {search}=useSearchStore()
  
  const {data} = useQuery({
    queryKey:["getProducts", search],
    queryFn: ()=>getProducts(search),
  });
  return (
    <div className=" grid grid-cols-4 gap-5 p-5">
      {data?.map((el) => (
        <div key={el.id} className="w-80 h-100 bg-card rounded-2xl">
          <div className="w-20 h-6 bg-chart-4/30 rounded-2xl flex justify-center items-center text-chart-1 m-3">
            <p>{el.stock} stock</p>
          </div>
          <div className="flex justify-center items-center mt-5">
            <img src={el.img} alt="" className="w-64 h-45" />
          </div>
          <p className="pl-5 pt-5 text-xl">{el.name}</p>
          <div className="pl-5 pt-2 flex items-center gap-5">
            <p>$ {Math.max(0, el.price - el.sale).toFixed(2)}</p>
            <p className="text-black/50 relative">
              $ {el.price.toFixed(2)}
              <div className="w-full h-0.5 rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 z-0"></div>
            </p>
          </div>
          <div className="p-5">
            <OrderButton/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
