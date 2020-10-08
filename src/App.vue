<template>
  <div id="app">
    <Menu />
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu'
import Favorite from './util/LocalStorage'

export default {
  name: 'App',
  components: {
    Menu
  },
  mounted () {
    Favorite.getLocalStorage()
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  main {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
