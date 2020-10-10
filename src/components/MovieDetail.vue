<template>
    <aside>
        <font-awesome-icon icon="times" class="closeCross" @click="closeDetail" />
        <div class="detail">
            <div class="detail__view" :style="backgroundDetail">
              <div class="playLogo"><font-awesome-icon icon="play"/></div>
            </div>

            <div class="detail__content">
              <h2 class="detail__title">{{ detail.title }}</h2>
              <p class="detail__infos">
                  <span v-if="detail.release_date">{{ getReleaseYear }} |</span>
                  <span v-for="genre in detail.genres" :key="genre.id">{{ genre.name }} |</span>
                  <span v-if="detail.runtime">{{ convertTime }}</span>
              </p>
              <p class="detail__description">{{ detail.overview }}</p>
              <Button :type="btnType" :favorite="favorite" />
            </div>
        </div>
    </aside>
</template>

<script>
import Button from './Button'
import Favorite from '../util/LocalStorage'

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w780'

export default {
  name: 'MovieDetail',
  components: {
    Button
  },
  props: {
    detail: Object,
    hideDetail: Function,
    toggleFavorite: Function
  },
  data () {
    return {
      btnType: 'addFavorite'
    }
  },
  watch: {
    detail: function () {
      this.updateBtnType()
    }
  },
  computed: {
    backgroundDetail () {
      const backgroundURL = this.image()
      return {
        backgroundImage:
        `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1) ),
        url(${backgroundURL})`
      }
    },
    getReleaseYear () {
      return new Date(this.detail.release_date).getFullYear()
    },
    convertTime () {
      const hours = Math.floor(this.detail.runtime / 60)
      let minutes = this.detail.runtime % 60
      minutes = minutes < 10 ? `0${minutes}` : minutes
      return `${hours}h${minutes}min`
    }
  },
  methods: {
    image () {
      return `${IMG_BASE_URL}${this.detail.backdrop_path}`
    },
    favorite () {
      this.toggleFavorite(this.detail)
      this.updateBtnType()
    },
    updateBtnType () {
      this.btnType = (Favorite.findMovie(this.detail.id) ? 'removeFavorite' : 'addFavorite')
    },
    closeDetail () {
      this.hideDetail()
    }
  }
}
</script>

<style lang="scss">
  aside {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 11;
  }

  .detail__view {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.8rem;
    color: #eeeeee;
    .playLogo {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .detail__content {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 40px;
  }

  .detail__title {
    text-transform: uppercase;
    font-size: 2.2rem;
  }

  .detail__infos {
    margin-top: 30px;
    font-size: 1.4rem;
    color: #686868;
    span {
      margin-right: 5px;
    }
  }

  .detail__description {
    margin-top: 10px;
    font-size: 1.4rem;
    line-height: 150%;
    margin-bottom: 25px;
  }

  .closeCross {
    position: absolute;
    top: 10px;
    right: 20px;
    color: #eeeeee;
    font-size: 2.2rem;
  }
</style>
