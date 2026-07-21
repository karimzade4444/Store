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
    <div>
      {data?.map((el)=>(
        <div key={el.id}>
          
        </div>
      ))}
    </div>
  );
};

export default Products;
