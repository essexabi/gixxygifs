
const apiKey = "E3KMC1SQpG1QzsBzwluhO0A7NK81WdvM";

export default function getGifs({keyword}, adultMode) {
    console.log("desde getGif:" + adultMode)
    const rating = !adultMode ? "g" : "r"
    const apiURL =
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=${rating}&lang=en`;

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