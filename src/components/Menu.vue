<template>
    <nav>
        <div class="logo">
            <router-link :to="{ name: 'Home' }">vFlix</router-link>
        </div>

        <ul class="nav-list">
            <li>
                <router-link :to="{ name: 'Favorites' }">Favorites</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style lang="scss" scoped></style>
