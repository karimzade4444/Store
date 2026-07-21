import axios from "axios";

const api = "https://69e5ff70ce4e908a155ec5a1.mockapi.io/mmj";

export const getProducts = async (search:string): Promise<>=>{
    return(
        await axios.get(api, {
            params:search?{search}:{},
        })
    ).data;
};