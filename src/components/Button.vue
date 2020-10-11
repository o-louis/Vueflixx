<template>
    <button v-if="watchlist" @click='watchlist' :class="{ fav: type === 'addWatchlist' }">
      <font-awesome-icon :icon="['far', 'star']" v-if="type === 'addWatchlist'"/>
        {{ text }}
    </button>
    <button v-else>
        {{ text }}
    </button>
</template>

<script>
const ADD_TO_WATCHLIST = 'Add to Watchlist'
const REMOVE_TO_WATCHLIST = 'Remove from Watchlist'

export default {
  name: 'Button',
  props: {
    type: String,
    watchlist: Function
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
        case 'addWatchlist':
          this.text = ADD_TO_WATCHLIST
          break
        case 'removeWatchlist':
          this.text = REMOVE_TO_WATCHLIST
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $red: #B71C1C;
  $green: #41B883;
  button {
    border: none;
    background-color: none;
    padding: 10px 20px;
    text-transform: uppercase;
    background: $green;
    color: white;
    border-radius: 20px;
    font-weight: 700;
    &:hover, &:focus {
      background-color: #259462;
    }
  }
  .fav {
    background: #19181A;
    &:hover, &:focus {
      background-color: #19181A;
    }
  }
</style>
