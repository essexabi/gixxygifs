import {API_URL} from "./settings"

export default function getGifDetail(params){
    const paramsId = params.id.split("=");
    const id =paramsId[1]
    const gifURL = `${API_URL}/gifs/${id}`;
    fetch(gifURL)
    .then(res => res.json())
    .then((response) => {
        const { data } = response;
        console.log(data);
    })
}