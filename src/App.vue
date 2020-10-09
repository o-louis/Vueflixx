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
  $--fs--h2: clamp(2rem, 2vw, 5rem);

  $black: #000;
  $white: #fff;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
    list-style: none;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: $black;
    color: $white;
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  a {
    text-decoration: none;
    color: white;
  }
</style>
