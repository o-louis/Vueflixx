<template>
    <section class="movies">
        <h1 class="movies__title">{{ title }}</h1>
        <div class="movies-list">
          <div class="movies-list__item"  v-for="movie in data" :key="movie.id" @click="showDetail(movie.id)">
            <img :src="image(movie.poster_path)" :alt="movie.title">
          </div>
        </div>
    </section>
</template>

<script>
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original'
export default {
  name: 'MoviesList',
  props: {
    title: String,
    data: Array,
    showDetail: Function
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
  }

  .movies__title {
    font-size: clamp(2.25rem, 2vw, 3rem);
    margin-bottom: 20px;
    color: white;
    &:before {
      content: "";
      width: 5px;
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
</style>
