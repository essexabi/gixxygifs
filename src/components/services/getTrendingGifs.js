const apiKey = "E3KMC1SQpG1QzsBzwluhO0A7NK81WdvM";

export default function getTrendingGifs(adultMode) {
    const rating = !adultMode ? "g" : "r"
    const apiURL =
    `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&rating=${rating}`;
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