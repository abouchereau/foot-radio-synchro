<template>
  <div>
    <div class="btn-container" v-for="i in [10, 2, 0.5]">
      <button @click="main.addDelay(i)" :disabled="!enableGoBack(i)">-{{i}}</button>
    </div>
    <div class="btn-container" v-for="i in [0.5, 2, 10]">
      <button @click="main.addDelay(-i)" :disabled="!enableGoForward(i)">+{{i}}</button>
    </div>
    <div>
      <button :disabled="main.audioElement == null" v-if="main.isPaused" @click="main.resume()">PLAY</button>
      <button v-else :disabled="main.audioElement == null" @click="main.pause()">PAUSE</button>
    </div>
  </div>
</template>


<script setup>
const props = defineProps(['main']);

function enableGoBack(seconds) {
    return props.main != null && props.main.audioElement != null && props.main.currentTime > seconds;
 }

function enableGoForward(seconds) {
    return props.main != null && props.main.audioElement != null && props.main.delay > seconds;
}
</script>

<style scoped>
.btn-container {
  width:60px;
  height:60px;
  text-align: center;
  display:inline-block;
}
</style>