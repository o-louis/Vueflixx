<template>
    <aside>
        <font-awesome-icon icon="times" class="closeCross" @click="closeDetail" />
        <div class="detail">
            <div class="detail__view" :style="backgroundDetail">
              <iframe
                v-if='videoUrl'
                :src="videoUrl"
                width="100%"
                height="100%"
                frameborder="0"
                type="text/html"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>

            <div class="detail__content">
              <p class="detail__genres">
                  <span v-for="(genre, index) in getGenres" :key="index">
                    {{ genre }}
                  </span>
              </p>
              <h2 class="detail__title">{{ detail.title }}</h2>
              <p class="detail__description">{{ detail.overview }}</p>
              <p class="detail__infos">
                  <span v-if="detail.release_date">
                    {{ getReleaseYear }}
                  </span>
                  <font-awesome-icon icon="circle" />
                  <span v-if="detail.runtime">
                    {{ convertTime }}
                  </span>
              </p>
              <Button :type="btnType" :watchlist="watchlist" />
            </div>
        </div>
    </aside>
</template>

<script>
import Button from './Button'
import Watchlist from '../util/LocalStorage'

import API from '../api/index'

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w780'
const YT_URL = 'https://www.youtube.com/embed/:id?controls=0&autoplay=true&rel=0'

export default {
  name: 'MovieDetail',
  components: {
    Button
  },
  data: () => (
    {
      videoUrl: '',
      btnType: 'addWatchlist'
    }
  ),
  props: {
    detail: Object,
    hideDetail: Function,
    toggleWatchlist: Function
  },
  watch: {
    detail: function () {
      this.updateBtnType()
    }
  },
  mounted () {
    setTimeout(() => {
      document.querySelector('aside').classList.add('slide-up')
    }, 200)
  },
  beforeUpdate () {
    API.fetchVideo(this.detail.id).then(data => {
      this.videoUrl = `${YT_URL.replace(':id', data.results[0].key)}`
    })
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
    },
    getGenres () {
      let genres = []
      if (this.detail.genres) {
        genres = this.detail.genres.map((item, index) => {
          if ((index + 1) < (this.detail.genres.length)) {
            return `${item.name} |`
          } else {
            return `${item.name}`
          }
        })
      }
      return genres
    }
  },
  methods: {
    image () {
      return `${IMG_BASE_URL}${this.detail.backdrop_path}`
    },
    watchlist () {
      this.toggleWatchlist(this.detail)
      this.updateBtnType()
    },
    updateBtnType () {
      this.btnType = (Watchlist.findMovie(this.detail.id) ? 'removeWatchlist' : 'addWatchlist')
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
    padding-bottom: 30px;
    transform: translateY(100vh);
    transition: transform 0.2s ease;
    color: white;
    overflow-y: auto;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;  /* Safari and Chrome */
    }
    &.slide-up {
      transform: translateY(0vh);
    }

    @media (min-width: 769px) {
      right: 0;
      width:35%;
      transition: transform 0.3s ease-in-out;
      transform: translateX(100vw);

      &.slide-up {
        transform: translateX(0vw);
      }
    }
  }

  .detail {
    max-width: 100%;
    display: flex;
    flex-direction: column;

    button {
      margin: auto;
      margin-top: 30px;
      display: block;
    }
  }

  .detail__view {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #eeeeee;
    padding-bottom: 56.25%; /* ratio 16/9 */
    height: 0;
    overflow: hidden;
    clear: both;

    iframe,
    object,
    embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
  }

  .detail__content {
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    margin-top: 25px;
  }

  .detail__title {
    text-transform: uppercase;
    font-size: clamp(2.2rem, 2vw, 5rem);
    margin-top: 8px;
  }

  .detail__genres {
    font-size: clamp(1.4rem, 2vw, 1.6rem);
    color: #686868;
    span {
      margin-right: 5px;
    }
  }

  .detail__infos {
    margin-top: 20px;
    margin-bottom: 20px;
    color: #686868;
    font-size: clamp(1.6rem, 2vw, 2.2rem);
    display: flex;
    align-items: center;
    font-size: clamp(1.4rem, 2vw, 1.6rem);
    svg {
      font-size: clamp(0.6rem, 2vw, 0.8rem);
      margin: 0 5px;
      opacity: 0.5;
    }
  }

  .detail__description {
    margin-top: 20px;
    font-size: clamp(1.6rem, 2vw, 1.8rem);
    line-height: 180%;
  }

  .closeCross {
    position: absolute;
    top: 5px;
    right: 10px;
    color: #eeeeee;
    font-size: clamp(2.2rem, 2vw, 2.5rem);
    z-index: 1100;
  }
</style>
