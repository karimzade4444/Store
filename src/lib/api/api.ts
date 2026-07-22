import axios from "axios";
import type { IGetProducts } from "../../components/types/types";

const api = "https://69e5ff70ce4e908a155ec5a1.mockapi.io/mmj";

export const getProducts = async (search:string): Promise<IGetProducts[]>=>{
    return(
        await axios.get(api, {
            params:search?{search}:{},
        })
    ).data;
};