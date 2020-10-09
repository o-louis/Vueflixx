<template>
    <button v-if="favorite" @click='favorite'>
        {{ text }}
    </button>
    <button v-else>
        {{ text }}
    </button>
</template>

<script>
const ADD_TO_FAVORITE = 'Add to Favorite'
const REMOVE_TO_FAVORITE = 'Remove from Favorite'
const WATCH_TRAILER = 'Trailer'

export default {
  name: 'Button',
  props: {
    type: String,
    favorite: Function
  },
  data () {
    return {
      text: String
    }
  },
  mounted () {
    this.getType()
  },
  watch: {
    type: function (val) {
      this.getType()
    }
  },
  methods: {
    getType () {
      switch (this.type) {
        case 'addFavorite':
          this.text = ADD_TO_FAVORITE
          break
        case 'removeFavorite':
          this.text = REMOVE_TO_FAVORITE
          break
        default:
          this.text = WATCH_TRAILER
      }
    }
  }
}
</script>

<style lang="scss"></style>
