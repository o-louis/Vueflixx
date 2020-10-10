<template>
    <button v-if="favorite" @click='favorite' :class="{ fav: type === 'addFavorite' }">
      <font-awesome-icon :icon="['far', 'heart']" v-if="type === 'addFavorite'"/>
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

<style lang="scss">
  $red: #B71C1C;
  button {
    border: none;
    background-color: none;
    padding: 10px 20px;
    text-transform: uppercase;
    background: $red;
    color: white;
    border-radius: 20px;
  }
  .fav {
    background: #19181A;
  }
</style>
