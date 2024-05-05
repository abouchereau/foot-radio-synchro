<template>
  <div>
    <h2>{{delayDecimal()}} s.</h2>
  </div>
</template>

<script setup>
const props = defineProps(['main']);

function delayDecimal() {
  return (0-props.main.delay).toFixed(1);
}
</script>

<style scoped>
h2 {
  width:100%;
  text-align: center;
}
</style>