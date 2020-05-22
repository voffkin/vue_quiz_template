<template>
  <div class="sip_container">
    <AppStart v-if="mode === 'start'" @onStart="onStartComp" />
    <AppGame v-if="mode === 'game'" @onFinish="onFinishComp" />
    <AppResult v-if="mode === 'result'" :result="result" @onAgain="onAgainComp" />
  </div>
</template>

<script>
import AppStart from './AppStart.vue'
import AppGame from './AppGame.vue'
import AppResult from './AppResult.vue'

export default {
  name: 'App',
  data () {
    return {
      mode: 'start',
      result: {}
    }
  },
  components: {AppStart, AppGame, AppResult},
  methods: {
    onStartComp () {
      this.mode = 'game'
    },
    onFinishComp (result) {
      this.result = result
      this.mode = 'result'
    },
    onAgainComp () {
      this.result = {}
      this.mode = 'start'
    }
  }
}
</script>

<style src="./App.styl" lang="stylus" />