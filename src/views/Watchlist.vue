<template>
    <main class="watchlist">
        <MoviesList
          :title="title"
          :data="data"
          :showDetail="showDetail" />
        <MovieDetail
          v-if="isDetailShowed && detail.data"
          :detail="detail.data"
          :hideDetail="hideDetail"
          :toggleWatchlist="toggleWatchlist" />
    </main>
</template>

<script>
import API from '../api/index'
import MoviesList from '../components/MoviesList'
import MovieDetail from '../components/MovieDetail'
import Watchlist from '../util/LocalStorage'

export default {
  name: 'Watchlist',
  components: {
    MoviesList,
    MovieDetail
  },
  data () {
    return {
      title: 'Your Watchlist List',
      isDetailShowed: false,
      data: [],
      detail: { id: '', data: {} }
    }
  },
  created () {
    Watchlist.getLocalStorage()
    this.data = Watchlist.getWatchlist()
  },
  mounted () {
    document.documentElement.scrollTop = 0
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
      this.data = Watchlist.getWatchlist()
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

<style lang="scss">
  .watchlist {
    .movies-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px 10px;

      @media (min-width: 576px) {
        grid-template-columns: repeat(auto-fill, minmax(160px, 160px));
      }
    }
  }
</style>
