<template>
    <main>
        <h1>Favorites</h1>
        <MoviesList
          :title="title"
          :data="data"
          :showDetail="showDetail" />
        <MovieDetail
          v-if="isDetailShowed && detail.data"
          :detail="detail.data"
          :hideDetail="hideDetail"
          :toggleFavorite="toggleFavorite" />
    </main>
</template>

<script>
import API from '../api/index'
import MoviesList from '../components/MoviesList'
import MovieDetail from '../components/MovieDetail'
import Favorite from '../util/LocalStorage'

export default {
  name: 'Favorites',
  components: {
    MoviesList,
    MovieDetail
  },
  data () {
    return {
      title: 'Your Favorites List',
      isDetailShowed: false,
      data: [],
      detail: { id: '', data: {} }
    }
  },
  created () {
    Favorite.getLocalStorage()
    this.data = Favorite.getFavorite()
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
      this.data = Favorite.getFavorite()
      this.hideDetail()
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
