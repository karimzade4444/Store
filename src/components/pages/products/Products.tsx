import { getProducts } from "@/lib/api/api";
import {  useQuery } from "@tanstack/react-query";

interface ISearch{
  search:string
}

const Products = ({search}:ISearch) => {
  
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
          <div className="flex justify-center items-center">
            <img src={el.img} alt="" className="w-64" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
