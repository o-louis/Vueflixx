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

<style lang="scss"></style>
