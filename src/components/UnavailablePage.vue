<script setup>
</script>

<template>
  <div class="unavailable-page">
    <div class="unavailable-content">
      <h2> Sorry ... </h2>
      <p>but this site is not yet available for your device width ...</p>
      <p>Try again on a larger device !</p>
    </div>
  </div>
</template>

<style>

.unavailable-page {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  gap: 20px;
  padding-top: 132px;
  padding-bottom: 105px;
  background-color: v-bind('themeColor.accentLight');
  color: v-bind('themeColor.black');
}
.unavailable-content {
  grid-column: 2 / 11;
  display: flex;
  flex-direction: column;
  gap: 62px;
}
header {
  --selectedBackgroundColor: transparent;
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--background-light);
}
</style>
<style scoped>
</style>
