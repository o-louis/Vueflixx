const API_KEY = `api_key=${process.env.VUE_APP_API_KEY}`

export default {
  async fetchPopularMovie (page) {
    const POPULAR_MOVIES = `https://api.themoviedb.org/3/movie/popular?page=${page}&${API_KEY}`
    const response = await fetch(POPULAR_MOVIES)
    const data = await response.json()
    return data
  },
  async fetchTopRated () {
    const TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?page=1&${API_KEY}`
    const response = await fetch(TOP_RATED)
    const data = await response.json()
    return data
  },
  async fetchDetail (id) {
    const TOP_RATED = `https://api.themoviedb.org/3/movie/${id}?${API_KEY}`
    const response = await fetch(TOP_RATED)
    const data = await response.json()
    return data
  },
  async fetchSearch (query) {
    const SEARCH = `https://api.themoviedb.org/3/search/movie?${API_KEY}&query=${query}&page=1`
    const response = await fetch(SEARCH)
    const data = await response.json()
    return data
  },
  async fetchVideo (id) {
    const VIDEO_QUERY = `https://api.themoviedb.org/3/movie/${id}/videos?${API_KEY}`
    const response = await fetch(VIDEO_QUERY)
    const data = await response.json()
    return data
  }
}
