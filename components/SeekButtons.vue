<template>
  <div>
    <div class="btn-container" v-for="i in [10, 2, 0.5]">
      <button @click="main.addDelay(i)" :disabled="main.audioElement.currentTime<i">-{{i}}</button>
    </div>
    <div class="btn-container">
      <button v-if="main.isPaused" @click="main.resume()">PLAY</button>
      <button v-else @click="main.pause()">PAUSE</button>
    </div>
    <div class="btn-container" v-for="i in [0.5, 2, 10]">>
      <button @click="main.addDelay(-i)" :disabled="main.delay<i">+{{i}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['main'],
  name: 'seek-buttons'
}
</script>
<style scoped>
.btn-container {
  width:60px;
  height:150px;
  text-align: center;
  display:inline-block;
}
</style>