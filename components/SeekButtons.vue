<template>
  <div>
    <div class="btn-container">
      <button @click="main.addDelay(10)" :disabled="main.audioElement.currentTime<10">-10</button>
    </div>
    <div class="btn-container">
      <button @click="main.addDelay(2)" :disabled="main.audioElement.currentTime<2">-2</button>
    </div>
    <div class="btn-container">
      <button @click="main.addDelay(0.5)" :disabled="main.audioElement.currentTime<0.5">-0.5</button>
    </div>
    <div class="btn-container">
      <button v-if="main.isPaused" @click="main.resume()">PLAY</button>
      <button v-else @click="main.pause()">PAUSE</button>
    </div>
    <div class="btn-container">
      <button @click="main.addDelay(-0.5)" :disabled="main.delay<0.5">+0.5</button>
    </div>
    <div class="btn-container">
      <button @click="main.addDelay(-2)" :disabled="main.delay<2">+2</button>
    </div>
    <div class="btn-container">
      <button @click="main.addDelay(-10)" :disabled="main.delay<10">+10</button>
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