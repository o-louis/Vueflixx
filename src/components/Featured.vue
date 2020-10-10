<template>
    <header>
        <div class="featured" :style="backgroundFeatured">
          <div class="featured__infos">
            <h2 class="featured__title">{{ featured.title }}</h2>
            <div class="featured__extra">
              <p class="featured__year">{{ getReleaseYear }}</p>
              <button><span>Trailer</span><font-awesome-icon icon="play"/></button>
            </div>
            <Button type="trailer" v-show="false"/>
          </div>
        </div>
    </header>
</template>

<script>
import Button from '../components/Button'
import Favorite from '../util/LocalStorage'

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280'

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
  computed: {
    backgroundFeatured () {
      const backgroundURL = this.image(this.featured.backdrop_path)
      return {
        backgroundImage:
        `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1) ),
        url(${backgroundURL})`
      }
    },
    getReleaseYear () {
      return new Date(this.featured.release_date).getFullYear()
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

<style lang="scss" scoped>
  $white: #fff;

  .featured {
    width: 100%;
    height: 400px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .featured__infos {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .featured__title {
    color: $white;
    text-transform: uppercase;
    font-size: 2.2rem;
  }

  .featured__extra  {
    display: flex;
    flex-direction: column;
    color:$white;
    font-size: 1.5rem;
    margin-top: 10px;
    button {
      background: transparent;
      border: 1px solid $white;
      color: $white;
      padding: 5px 10px;
      text-transform: uppercase;
      margin-left: auto;
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      svg {
        font-size: 0.8rem;
        margin-left: 4px;
      }
    }
  }
</style>
