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

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif  ;
  }

  html {
    font-size: 62.5%;
  }

  img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    // height: 100%;
    object-fit: cover;
  }
</style>
