<template>
  <div>
        <div v-for="(radio, id) in $main.radios" :key="id">
            <h3>{{ radio.name }}</h3>
            <button :class="{'active':$main.curRadioIndex==id}" @click="$main.setRadio(id)">{{id+1}}</button>
        </div>
  </div>
</template>

<script>
export default {
  name: 'radio-select'
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