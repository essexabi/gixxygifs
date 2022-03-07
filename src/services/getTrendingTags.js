import { API_KEY, API_URL } from "./settings"

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  return data
}

export default function getTrendingTags() {
    const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`

    return fetch(apiURL)
      .then(resp => resp.json())
      .then(fromApiResponseToGifs)
}