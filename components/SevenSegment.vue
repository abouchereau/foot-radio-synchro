<template>
  <div class="pure-g mt-1">
    <div class="pure-u-1 text-center">
      <p>Retard (secondes)</p>
      <div class="seg7-5">
        <span class="seg7off">88888</span>
        <span>{{delayDecimal()}}</span>
       </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['app']);

function delayDecimal() {
  return (0-props.app.delay).toFixed(1);
}
</script>

<style scoped>

@font-face {
  font-family: "7Seg";
  src: url(fonts/DSEG7ClassicMini-Bold.eot) format('eot');
  src: url(fonts/DSEG7ClassicMini-Bold.eot?) format('eot'),
  url(fonts/DSEG7ClassicMini-Bold.woff2) format('woff2'),
  url(fonts/DSEG7ClassicMini-Bold.woff) format('woff'),
  url(fonts/DSEG7ClassicMini-Bold.ttf) format('ttf');
}
.seg7-5 {
  background-color: #000;
  padding: 7px;
  position: relative;
  height: 50px;
  display: block;
  margin:auto;
  box-sizing: content-box;
  background-color:#222;
  border-radius: 5px;
  width:168px;

}

.seg7-5 span {
  text-align: right;
  position:absolute;
  right:10px;
  font-family: '7Seg', cursive;
  font-size:40px;
  color: #c00;
}

.seg7off {
  opacity:0.3;
}
</style>