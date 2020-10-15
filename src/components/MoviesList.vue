<template>
    <section class="movies">
        <h1 class="movies__title">{{ title }}</h1>
        <div class="movies-list" v-if="data.length">
          <div class="movies-list__item"  v-for="(movie, index) in data" :key="`${movie.id}${index}`" @click="showDetail(movie.id)">
            <v-lazy-image
              :alt="movie.title"
              :src="image(movie.poster_path)"
              :src-placeholder="require('../assets/placeholder.png')" />
          </div>
        </div>
        <div v-if="isScrollContinue" class="movies__loading">Load more...</div>
        <div v-if="data.length === 0 && infiniteScroll" class="movies__error">Sorry, no results found</div>
        <div v-if="data.length === 0 && !infiniteScroll" class="movies__error"> You have added any content yet</div>
    </section>
</template>

<script>
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w185'
export default {
  name: 'MoviesList',
  props: {
    title: String,
    data: Array,
    showDetail: Function,
    infiniteScroll: Function,
    isScrollContinue: Boolean
  },
  mounted () {
    window.onscroll = () => {
      const bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight

      if (bottomOfWindow) {
        this.infiniteScroll()
      }
    }
  },
  methods: {
    image (url) {
      return `${IMG_BASE_URL}${url}`
    }
  }
}
</script>

<style lang="scss">
  .movies {
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    margin-bottom: 30px;
    min-height: 1120px;
  }

  .movies__title {
    font-size: clamp(2.25rem, 2vw, 3rem);
    margin-bottom: 20px;
    color: white;
    &:before {
      content: "";
      width: 3px;
      height: min(25px, 20px);
      display: inline-block;
      background: #41B883;
      display: inline-block;
      margin-right: 5px;
    }
  }

  .movies-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px 10px;

    @media (min-width: 576px) {
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    }
  }

  .movies-list__item {
    width: 100%;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    img {
      transition: transform 0.3s ease;
    }

    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      display: block;
      top: 0;
      background-color: rgba(65, 184,131 , 0.2);
      transition: background-color 0.3s ease;
    }
  }

  .movies-list__item:hover {
    img {
      transform: scale(1.1);
    }

    &:after {
      background-color: rgba(65, 184,131 , 0);
    }
  }

  .movies__error {
    color: white;
    font-size: clamp(2rem, 2vw, 2.75rem);
    margin-top: 60px;
  }

  .movies__loading {
    color: white;
    font-size: clamp(2.10rem, 2vw, 2.85rem);
    text-align: center;
    margin: 30px 0;
  }
</style>
