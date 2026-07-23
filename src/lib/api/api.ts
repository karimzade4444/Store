import axios from "axios";
import type { ICreatProduct, IDeleteProduct, IEditProduct, IGetProducts } from "../../components/types/types";

const api = "https://69e5ff70ce4e908a155ec5a1.mockapi.io/mmj";

export const getProducts = async (search:string): Promise<IGetProducts[]>=>{
    return(
        await axios.get(api, {
            params:search?{search}:{},
        })
    ).data;
};

export const deleteProduct = async (id:number):Promise<IDeleteProduct>=>{
    return (await axios.delete(`${api}/${id}`)).data
}

export const createProduct = async (data:ICreatProduct)=>{
    return (await axios.post(api,data)).data;  
}
export const updateProduct = async (id:number, data:IEditProduct)=>{
    return(await axios.put(`${api}/${id}`,data)).data;
}