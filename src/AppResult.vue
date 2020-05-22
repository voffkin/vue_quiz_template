<template>
  <div>
    result: {{result}}
    <br>
    <div @click="$emit('onAgain')" class="sip_btn" >Еще раз</div>
  </div>
</template>

<script>
export default {
  name: 'AppResult',
  props: ['result']
}
</script>

<style lang="stylus">
</style>
