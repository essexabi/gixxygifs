export default function getGifDetail(params){
    const paramsId = params.id.split("=");
    const id =paramsId[1]
    const gifURL = `https://api.giphy.com/v1/gifs/${id}`
    fetch(gifURL)
    .then(res => res.json())
    .then((response) => {
        const { data } = response;
        console.log(data);
    })
}