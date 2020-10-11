<template>
  <div id="app">
    <Menu />
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu'
import Watchlist from './util/LocalStorage'

export default {
  name: 'App',
  components: {
    Menu
  },
  mounted () {
    Watchlist.getLocalStorage()
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
    font-family: 'Nunito Sans', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  body {
    background-color: black;
    color: white;

    background-color:black;
    background-image: #171717;
    color: black;
  }
</style>
