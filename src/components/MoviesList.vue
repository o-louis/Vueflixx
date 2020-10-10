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
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  .movies__title {
    font-size: 2.25rem;
    margin-bottom: 20px;
  }

  .movies-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px 10px;
  }

  .movies-list__item {
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
</style>
