import axios from "axios";
import {IJokes} from "./interfaces/jokes";

export const getJokesBySearch = async (query: string): Promise<IJokes[]> => {
    const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`);
    return response.data.result
}