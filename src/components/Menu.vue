<template>
    <nav>
        <div class="nav">
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
  name: 'Menu'
}
</script>

<style lang="scss" scoped>
nav {
    padding: 20px 0;
  .nav {
      margin: 0 auto;
      max-width: 1200px;
      width: 90%;
      display: flex;
      justify-content: space-between;

      .logo {
          font-size: 4rem;
      }
  }
}
</style>
