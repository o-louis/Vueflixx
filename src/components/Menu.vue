<template>
    <nav>
        <div class="nav-wrapper">
            <div class="logo">
                <router-link :to="{ name: 'Home' }">vueFlix</router-link>
            </div>

            <ul class="nav-list">
                <li>
                    <router-link :to="{ name: 'Watchlist' }">Watchlist</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Menu',
  mounted () {
    // document.addEventListener('scroll', () => {
    //   if (window.scrollY === 0) {
    //     document.querySelector('nav').classList.remove('scrolling')
    //   } else {
    //     document.querySelector('nav').classList.add('scrolling')
    //   }
    // })
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
  $red: #B71C1C;
  $white: #fff;

  nav {
    padding: 15px 0;
    position: fixed;
    width: 100%;
    z-index: 10;
    top: 0;
    background-color: transparent;
    background-color: #005AEA;
    background-color: black;
    background-image: #171717;
    transition: background-color 0.3s ease-in-out;
    &.scrolling, &.backgroundNav {
      background-color: black;
    }
  }

  .nav-wrapper {
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-wrapper .logo {
    a {
      font-size: clamp(2.2rem, 2vw, 3rem);
      color: #41B883;
      font-family: 'Righteous', cursive;
    }
  }

  .nav-wrapper .nav-list {
    display: flex;
    li {
      font-size: clamp(1.6rem, 2vw, 2rem);
      a {
        color: white;
        font-weight: 500;
        font-family: 'Nunito Sans', sans-serif;
        &:hover, &:focus {
          color: #b9f7db;
        }
      }
    }
  }
</style>
