import {API_KEY, API_URL} from "./settings"

export default function getGifs({keyword}, adultMode) {
    console.log("desde getGif:" + adultMode)
    const rating = !adultMode ? "g" : "r"
    const apiURL =
    `${API_URL}/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=${rating}&lang=en`;

    return fetch(apiURL)
        .then((res) => res.json())
        .then((response) => {
            const { data } = response;
            const gifs = data.map(
            image => {
                const {images, title, id} = image;
                const {url, height, width} = images.downsized_medium;
            console.log(url);
                
                return {title, id, url, height, width}
            }
            );
            return gifs;
        });
}