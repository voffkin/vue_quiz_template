<template>
  <div>
    start text
    <br>
    <div @click="$emit('onStart')" class="sip_btn">Start</div>
  </div>
</template>

<script>
export default {
  name: 'AppStart',
}
</script>

<style lang="stylus">
</style>
