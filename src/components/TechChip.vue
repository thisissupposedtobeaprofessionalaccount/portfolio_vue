<script setup>
import themeColor from '@/assets/themeColors.json'
</script>
<template>
  <div class="chip">
    <slot />
  </div>
</template>
<style scoped>
.chip {
  font-size: 23px;
  padding: 7px 25px;
  border-radius: 50px;
  border: solid 2px v-bind('themeColor.white');
  width: min-content;
  transition: all 0.2s ease;
  max-height: 55px;
}
.chip:hover {
  color: v-bind('themeColor.backgroundDark');
  background-color: v-bind('themeColor.white');
  cursor: pointer;
  transition: all 0.2s ease;
}
::slotted {
  height: fit-content;
  width: max-content;
  color: red;
  max-height: 55px;
}
</style>
