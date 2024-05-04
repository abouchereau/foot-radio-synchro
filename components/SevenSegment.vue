<template>
  <div>
    <h2>{{delayDecimal}} s.</h2>
  </div>
</template>

<script>
export default {
  props: ['main'],
  name: 'seven-segment',
  computed: {
    delayDecimal() {
      return (0-this.main.delay).toFixed(1);
    }
  }
}
</script>
<style scoped>
h2 {
  width:100%;
  text-align: center;
}
</style>