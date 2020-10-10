<template>
    <main>
      <!-- HEADER -->
      <Featured :featured="featured" :toggleFavorite="toggleFavorite" />

      <!-- SEARCH FORM -->
      <Search @getResult="getResult" />

      <!-- LIST OF THE MOVIES -->
      <MoviesList
        :title="title"
        :data="dataMovies"
        :showDetail="showDetail" />

      <!--  MOVIE DETAIL -->
      <MovieDetail
        v-if="isDetailShowed"
        :detail="detail.data"
        :hideDetail="hideDetail"
        :toggleFavorite="toggleFavorite" />
    </main>
</template>

<script>
import API from '../api/index'
import Search from '../components/Search'
import Featured from '../components/Featured'
import MoviesList from '../components/MoviesList'
import MovieDetail from '../components/MovieDetail'

import Favorite from '../util/LocalStorage'

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
      detail: { id: '', data: {} }
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
      this.isDetailShowed = false
    },
    toggleFavorite (item) {
      Favorite.toggle(item)
    },
    getResult (query) {
      if (query && query.length >= 2) {
        this.title = `${SEARCH_TITLE} ${query}`
        API.fetchSearch(query)
          .then(data => {
            this.dataMovies = data.results
          })
      } else {
        this.loadPopularMovies()
      }
    },
    loadPopularMovies () {
      this.title = POPULAR_MOVIES_TITLE
      API.fetchPopularMovie()
        .then(data => {
          this.dataMovies = data.results
        })
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

<style lang="scss" scoped></style>
