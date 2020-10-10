<template>
    <nav>
        <div class="nav-wrapper">
            <div class="logo">
                <router-link :to="{ name: 'Home' }">vFlix</router-link>
            </div>

            <ul class="nav-list">
                <li>
                    <router-link :to="{ name: 'Favorites' }">Favorites</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Menu',
  mounted () {
    document.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        document.querySelector('nav').classList.remove('scrolling')
      } else {
        document.querySelector('nav').classList.add('scrolling')
      }
    })
  }
}
</script>

<style lang="scss">
  $red: #B71C1C;
  $white: #fff;

  nav {
    // background: black;
    padding: 10px;
    position: fixed;
    width: 100%;
  }

  .nav-wrapper {
    width: 90;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-wrapper .logo {
    a {
      font-size: 3rem;
      color: $red;
    }
  }

  .nav-wrapper .nav-list {
    display: flex;
    li {
      font-size: 1.8rem;
      a {
        color: $white;
      }
    }
  }
</style>
