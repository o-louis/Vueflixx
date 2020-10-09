<template>
    <form>
      <input
        v-model="searchInput"
        type="text"
        placeholder="Search a movie..." />
    </form>
</template>

<script>
export default {
  name: 'Search',
  props: {
  },
  data () {
    return {
      searchInput: ''
    }
  },
  watch: {
    searchInput: function (val) {
      this.$emit('getResult', val)
    }
  }
}
</script>

<style lang="scss"></style>
