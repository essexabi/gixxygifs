import {API_KEY, API_URL} from "./settings";

export default function getTrendingGifs(adultMode) {
    const rating = !adultMode ? "g" : "r"
    const apiURL =
    `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=25&rating=${rating}`;
    return fetch(apiURL)
        .then((res) => res.json())
        .then((response) => {
            const { data } = response;
            const gifs = data.map(
            image => {
                const {images, title, id} = image;
                const {url, height, width} = images.downsized_medium;
                return {title, id, url, height, width }
            }
            );
            console.log(gifs);
            return gifs;
        });
}