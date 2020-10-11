<template>
    <main>
      <!-- HEADER -->
      <Featured
        :featured="featured"
        :toggleWatchlist="toggleWatchlist"
        :showDetail="showDetail" />

      <!-- SEARCH FORM -->
      <Search @getResult="getResult" />

      <!-- LIST OF THE MOVIES -->
      <MoviesList
        :title="title"
        :data="dataMovies"
        :showDetail="showDetail"
        :infiniteScroll="infiniteScroll"
        :isScrollContinue="isScrollContinue" />

      <!--  MOVIE DETAIL -->
      <MovieDetail
        v-if="isDetailShowed"
        :detail="detail.data"
        :hideDetail="hideDetail"
        :toggleWatchlist="toggleWatchlist" />
    </main>
</template>

<script>
import API from '../api/index'
import Search from '../components/Search'
import Featured from '../components/Featured'
import MoviesList from '../components/MoviesList'
import MovieDetail from '../components/MovieDetail'

import Watchlist from '../util/LocalStorage'

const POPULAR_MOVIES_TITLE = 'Most Popular Movies'
const SEARCH_TITLE = 'Search for'

export default {
  name: 'Home',
  components: {
    Search,
    Featured,
    MoviesList,
    MovieDetail
  },
  data () {
    return {
      title: '',
      featured: {},
      dataMovies: [],
      isDetailShowed: false,
      detail: { id: '', data: {} },

      // Pagination scroll infinite
      nbPage: 0,
      page: 1,
      isScrollContinue: false
    }
  },
  created () {
    API.fetchTopRated()
      .then(({ results }) => {
        const random = Math.floor(Math.random() * results.length)
        this.featured = results[random]
      })
    this.loadPopularMovies()
  },
  methods: {
    showDetail (id) {
      this.detail = { ...this.detail, id }
      this.isDetailShowed = true
    },
    hideDetail () {
      this.detail = { id: '', data: {} }
      this.isDetailShowed = false
    },
    toggleWatchlist (item) {
      Watchlist.toggle(item)
    },
    getResult (query) {
      if (query && query.length >= 2) {
        this.title = `${SEARCH_TITLE} ${query}`
        API.fetchSearch(query)
          .then(data => {
            this.dataMovies = data.results
          }).catch(err => {
            this.dataMovies = []
            console.log(err)
          })
      } else {
        this.loadPopularMovies()
      }
    },
    loadPopularMovies () {
      this.title = POPULAR_MOVIES_TITLE
      API.fetchPopularMovie(this.page)
        .then(data => {
          this.nbPage = data.total_pages
          this.dataMovies = data.results
        })
    },
    infiniteScroll () {
      this.isScrollContinue = false
      if (this.page + 1 <= this.nbPage) {
        API.fetchPopularMovie(++this.page).then(data => {
          this.isScrollContinue = true
          this.dataMovies = [...this.dataMovies, ...data.results]
        })
      }
    }
  },
  watch: {
    detail: function () {
      if (this.detail.id && this.isDetailShowed) {
        API.fetchDetail(this.detail.id)
          .then(data => {
            this.detail.data = data
          })
      }
    }
  }
}
</script>

<style lang="scss">
  main {
    position: relative;
    margin-top: 64px;
  }
</style>
