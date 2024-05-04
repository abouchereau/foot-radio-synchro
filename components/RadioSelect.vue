<template>
    <div>
        <div class="radio-option" v-for="(radio, id) in main.radios" :key="id">
            <h3>{{ radio.name }}</h3>
            <button :class="{'active':main.curRadioIndex==id}" @click="main.setRadio(id)">{{id+1}}</button>
        </div>
    </div>
</template>

<script>
export default {
  props: ['main'],
  name: 'radio-select'
}
</script>
<style scoped>
.radio-option {
  height: 100px;
  width:200px;
  display: inline-block;
  text-align:center;
}
button.active {
  background-color:green;
}
</style>