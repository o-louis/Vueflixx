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

<style lang="scss">
  form {
    padding: 30px 0px 60px;
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    input {
      width: 100%;
      padding: 10px;
      font-size: clamp(1.6rem, 2vw, 1.9rem);
      background-color: #F7F8FB;
      color: #B0B4BF;
      color: black;
      border-radius: 5px;
      border: none;

      @media (min-width: 576px) {
        width: 400px;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      }
    }
  }
</style>
