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