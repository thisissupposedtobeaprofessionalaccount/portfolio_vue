<script setup>
  import {ref, onMounted, onBeforeUnmount}  from 'vue';
  import UnavailablePage from './components/UnavailablePage.vue'

const isAvailable = ref(true);
const updateAvailabilty = () => {
  isAvailable.value = true// window.innerWidth >=900;
}

onMounted(() => {
  window.addEventListener('resize', updateAvailabilty);
});

onBeforeUnmount(()=>{
  window.removeEventListener('resize', updateAvailabilty);
});

</script>

<template>
  <router-view v-if="isAvailable" ></router-view>
  <UnavailablePage v-else></UnavailablePage>
</template>

<style>
header {
  --selectedBackgroundColor: transparent;
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--background-light);
}
main {
  overflow-x: hidden;
}
</style>
<style scoped>

</style>
