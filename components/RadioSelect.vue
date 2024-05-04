<template>
  <div>
        <div v-for="radio in radios">
            <h3>{{ radio.name }}</h3>
            <button @click="$main.setFlow(radio.flow)"></button>
  </div>
</template>

<script>


export default {
  name: 'radio-select',
  data() {
    return {
      radios: [
        {"name": "France Bleu Paris", "flow":"https://icecast.radiofrance.fr/fb1071-midfi.mp3"},
        {"name": "RMC", "flow":"https://audio.bfmtv.com/rmcradio_128.mp3"},
        {"name": "RTL", "flow":"https://streamer-02.rtl.fr/rtl-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg"}
      ],
    }
  }
}
</script>
<style>

  h1, h2, h3, h4, h5, h6, .card-header {
    font-family: Audiowide !important;
  }
  h2 {
    text-align: center;
  }
</style>