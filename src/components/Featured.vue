<template>
    <header>
        <div class="featured" :style="backgroundFeatured">
          <div class="featured__infos">
            <h2 class="featured__title">{{ featured.title }}</h2>
            <div class="featured__extra">
              <p class="featured__year">{{ getReleaseYear }}</p>
              <button @click="showDetail(featured.id)">
                <span>
                  Read more
                </span>
                </button>
            </div>
          </div>
        </div>
    </header>
</template>

<script>
import Watchlist from '../util/LocalStorage'

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280'

export default {
  name: 'Featured',
  props: {
    featured: Object,
    showDetail: Function,
    toggleWatchlist: Function
  },
  data () {
    return {
      btnType: 'addWatchlist'
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
        `linear-gradient( rgba(65, 184,131 , 0.3), rgba(0, 0, 0, 1) ),
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
    watchlist () {
      Watchlist.toggle(this.featured)
      this.updateBtnType()
    },
    updateBtnType () {
      this.btnType = (Watchlist.findMovie(this.featured.id) ? 'removeWatchlist' : 'addWatchlist')
    }
  }
}
</script>

<style lang="scss" scoped>
  $white: #fff;

  .featured {
    width: 100%;
    height: 400px;
    max-width: 1100px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @media (min-width: 576px) {
      background-position: top;
      height: 500px;
    }
  }

  .featured__infos {
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  .featured__title {
    color: white;
    text-transform: uppercase;
    font-size: clamp(2.3rem, 2vw, 4rem);
  }

  .featured__extra  {
    display: flex;
    flex-direction: column;
    color:white;
    font-size: clamp(1.5rem, 2vw, 2rem);
    margin-top: 10px;
    button {
      background: transparent;
      border: 1px solid white;
      color: white;
      padding: 10px 20px;
      text-transform: uppercase;
      margin-left: auto;
      display: flex;
      align-items: center;
      font-size: clamp(1.4rem, 2vw, 1.6rem);
      font-weight: 700;
      transition: transform 0.3s ease;
      &:hover {
        background-color: white;
        border-color: transparent;
        background: #41B883;
        transform: scale(1.1);
      }
    }
  }
</style>
