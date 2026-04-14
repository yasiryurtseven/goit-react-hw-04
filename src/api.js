import axios from "axios";


const API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const BASE_URL = "https://api.unsplash.com";


async function fetchImages(searchQuery, page) {
    const url = `${BASE_URL}/search/photos?`;
   
    const response = await axios.get(url, {
        params: {
            query: searchQuery,
            page: page,
            per_page: 12,
            client_id: API_KEY
        }
    })
    return response.data;
}
       
export { fetchImages };
