<template>
    <section class="movies">
        <h1 class="movies__title">{{ title }}</h1>
        <div class="movies-list">
          <div class="movies-list__item" v-for="movie in data" :key="movie.id" @click="showDetail(movie.id)">
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

<style lang="scss" scoped>
  section {
    .movies-list {
      display: grid;
      grid-gap: 5px;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    }
  }
</style>
