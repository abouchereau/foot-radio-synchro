<template>
    <div class="pure-g text-center mt-3">
      <div class="pure-u-1-1">
        <button class="button-xlarge pure-button button-secondary"  :disabled="app.audioElement == null" v-if="app.state=='paused'" @click="app.resume()"><i class="fa-solid fa-play"></i> PLAY</button>
        <button v-if="app.state=='playing'" class="button-xlarge pure-button button-secondary" :disabled="app.audioElement == null" @click="app.pause()"> <i class="fa-solid fa-pause"></i> PAUSE</button>
      </div>
    </div>
    <div class="pure-g mt-4">
        <div class="pure-u-1-6 text-center" v-for="i in [10, 2, 0.5]">
          -{{i}}s.<br />
            <button class="pure-button button-secondary" @click="app.addDelay(i)" :disabled="!enableGoBack(i) || app.state!='playing'"><i class="fa-solid fa-backward"></i></button>
        </div>
        <div class="pure-u-1-6 text-center" v-for="i in [0.5, 2, 10]">
          +{{i}}s.<br />
            <button class="pure-button button-secondary" @click="app.addDelay(-i)" :disabled="!enableGoForward(i) || app.state!='playing'"><i class="fa-solid fa-forward"></i></button>
        </div>
    </div>

</template>


<script setup>
const props = defineProps(['app']);

function enableGoBack(seconds) {
    return props.app != null && props.app.audioElement != null && props.app.currentTime > seconds;
 }

function enableGoForward(seconds) {
    return props.app != null && props.app.audioElement != null && props.app.delay > seconds;
}
</script>

<style scoped>

</style>