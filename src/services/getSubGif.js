import { API_KEY, API_URL } from "services/settings";

export default function getSubGif(name) {
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${name}&limit=1&offset=0&rating=g&lang=en`;
    console.log(apiURL);
    return fetch(apiURL)
        .then((res) => res.json())
        .then((response) => {
            const { data } = response;
            const gif = data.map((image) => {
                const { images, title, id } = image;
                const { url, height, width } = images.downsized_medium;

                return { title, id, url, height, width };
            });

            return gif;
        });
}