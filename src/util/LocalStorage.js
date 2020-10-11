let storage = []

export default {
  toggle (item) {
    const { id } = item
    if (this.findMovie(id)) {
      storage = this.removeMovie(id)
    } else {
      this.addMovie(item)
    }
    this.updateLocalStorage()
  },
  findMovie (id) {
    return storage.find(item => item.id === id)
  },
  addMovie (item) {
    return storage.push(item)
  },
  removeMovie (id) {
    return storage.filter(item => item.id !== id)
  },
  getLocalStorage () {
    const localstorage = localStorage.getItem('watchlist')
    if (localstorage) {
      storage = JSON.parse(localstorage).slice()
    } else {
      this.updateLocalStorage()
    }
  },
  updateLocalStorage () {
    localStorage.setItem('watchlist', JSON.stringify(storage))
  },
  getWatchlist () {
    return storage
  }
}
