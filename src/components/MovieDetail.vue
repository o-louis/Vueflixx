<template>
    <aside>
        <div class="detail">
            <div class="detail__video"></div>
            <h2>{{ detail.title }}</h2>
            <p>
                <span v-if="detail.release_date">{{ detail.release_date }}</span>
                <span v-if="detail.genres">{{ detail.genres[0].name }}</span>
                <span v-if="detail.runtime">{{ detail.runtime }}</span>
            </p>
            <p>{{ detail.overview }}</p>
            <Button :type="btnType" :favorite="favorite" />
            <Button type='trailer' />
        </div>
    </aside>
</template>

<script>
import Button from './Button'
import Favorite from '../util/LocalStorage'

export default {
  name: 'MovieDetail',
  components: {
    Button
  },
  props: {
    detail: Object,
    hideDetail: Function,
    toggleFavorite: Function
  },
  data () {
    return {
      btnType: 'addFavorite'
    }
  },
  watch: {
    detail: function () {
      this.updateBtnType()
    }
  },
  methods: {
    favorite () {
      this.toggleFavorite(this.detail)
      this.updateBtnType()
    },
    updateBtnType () {
      this.btnType = (Favorite.findMovie(this.detail.id) ? 'removeFavorite' : 'addFavorite')
    }
  }
}
</script>

<style lang="scss" scoped></style>
