import { API_KEY, API_URL } from "./settings"

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse;
  console.log(data)
  return data
}

export default function getTrendingTags() {
    const apiURL = `${API_URL}/gifs/categories?api_key=${API_KEY}`

    return fetch(apiURL)
      .then(resp => resp.json())
      .then(fromApiResponseToGifs)
}