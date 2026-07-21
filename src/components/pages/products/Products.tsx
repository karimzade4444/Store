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
      {data?.map((el)=>(
        <div key={el.id} className="w-80 h-90 bg-card">
          
        </div>
      ))}
    </div>
  );
};

export default Products;
