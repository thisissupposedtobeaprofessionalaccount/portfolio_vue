<script setup>
import themeColor from '@/assets/themeColors.json'
</script>

<template>
  <div class="skill-card">
    <slot />
  </div>
</template>

<style scoped>
.skill-card {
  background-color: v-bind('themeColor.white');
  color: v-bind('themeColor.accent');
  box-shadow: 6px 6px 0px 0px v-bind('themeColor.accentLight');
  padding: 10px;
  padding-right: auto;
  font-variation-settings: 'wght' 700;
  font-size: 45px;
}
</style>
