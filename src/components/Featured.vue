<template>
    <header>
        <div class="featured">
          <h2>{{ featured.title }}</h2>
          <p>{{ featured.overview }}</p>
          <p>{{ featured.release_date}}</p>
          <img :src="image(featured.backdrop_path)" :alt="featured.title">
          <Button :type="btnType" :favorite="favorite" />
          <Button type="trailer" />
        </div>
    </header>
</template>

<script>
import Button from '../components/Button'
import Favorite from '../util/LocalStorage'

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original'

export default {
  name: 'Featured',
  components: {
    Button
  },
  props: {
    featured: Object,
    toggleFavorite: Function
  },
  data () {
    return {
      btnType: 'addFavorite'
    }
  },
  watch: {
    featured: function () {
      this.updateBtnType()
    }
  },
  methods: {
    image (url) {
      return `${IMG_BASE_URL}${url}`
    },
    favorite () {
      Favorite.toggle(this.featured)
      this.updateBtnType()
    },
    updateBtnType () {
      this.btnType = (Favorite.findMovie(this.featured.id) ? 'removeFavorite' : 'addFavorite')
    }
  }
}
</script>

<style lang="scss" scoped></style>
