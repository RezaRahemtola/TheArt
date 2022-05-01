import axios from "axios";
import { Art } from "../types/types";

const getPosts = async (address: string): Promise<Art[]> => {
    const result: Art[] = [];

    const http = axios.create({
        baseURL: "https://api.starton.io/v2",
        headers: {
            "x-api-key": (process.env.REACT_APP_API_KEY as string),
        },
    })

    for (let i = 0; i != -1; i += 1) {
        try {
            const response = await http.post(`/smart-contract/polygon-mumbai/${process.env.REACT_APP_SMART_CONTRACT_ADDRESS}/read`,
                {
                    "functionName": 'posts',
                    "params": [
                        address,
                        i
                    ],
                })
            result.push(response.data);
        } catch (err)  {
            i = -2;
        };
    }

    return (result);
};

export default getPosts;
