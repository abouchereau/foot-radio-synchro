<template>
    <div class="pure-g mt-3">
      <div class="pure-u-1-6"></div>
      <div class="pure-u-2-3 text-center">
          <select v-model="radioId">
              <option value="-1" disabled>Sélectionner une radio</option>
              <option v-for="(radio, id) in props.app.radios" :key="id" :value="id">
                {{ radio.name }}
              </option>
          </select>
      </div>
      <div class="pure-u-1-6 text-white text-center">
        <i v-if="props.app.state=='paused'" class="fa-3x fa-solid fa-pause"></i>
        <i v-if="props.app.state=='stopped'" class="fa-3x fa-solid fa-volume-xmark"></i>
        <i v-if="props.app.state=='playing'" class="fa-3x fa-solid fa-radio"></i>
        <i v-if="props.app.state=='loading'" class="fa-3x fa-solid fa-circle-notch fa-spin"></i>

      </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
const props = defineProps(['app']);
const radioId = ref(-1);

watch(radioId, async (newId) => {
  props.app.setRadio(newId)
});
</script>
<style scoped>
select {
  width:100%;
  border:none;
  border-radius:15px;
  padding:15px;
}
option {
  padding:20px;
}
</style>