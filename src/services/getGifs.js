import {API_KEY, API_URL} from "./settings"

export default function getGifs({keyword = "Plissken", adultMode = false, page = 0, limit = 15 } = {}) {
    //console.log("desde getGif:" + adultMode)
    if(page === 0) window.scrollTo(0, 0);
    const rating = !adultMode ? "g" : "r";
    const apiURL =
    `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page*limit}&rating=${rating}&lang=en`;

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