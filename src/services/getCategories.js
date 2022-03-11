import { API_KEY, API_URL } from "./settings";

const fromApiResponseToCategories = (apiResponse) => {
    const { data = [] } = apiResponse;
    return data;
    
};

export default function getCategories() {
    const apiURL = `${API_URL}/gifs/categories?api_key=${API_KEY}`;

    return fetch(apiURL)
        .then((resp) => resp.json())
        .then(fromApiResponseToCategories);
}
