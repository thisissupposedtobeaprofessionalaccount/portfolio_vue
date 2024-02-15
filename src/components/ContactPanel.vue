<script setup>
import { ref } from 'vue'
import themeColor from '@/assets/themeColors.json'
const timeOptions = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
  timeZone: 'Europe/Paris'
}
const currentTime = ref(new Date().toLocaleString([], timeOptions))

function updateTime() {
  currentTime.value = new Date().toLocaleString([], timeOptions)
}

setInterval(updateTime, 1)
</script>
<template>
  <div class="contact-panel">
    <div class="location panel-section">
      <h6>Location</h6>
      <div class="content">
        <p>Lyon, France</p>
        <p>{{ currentTime }}</p>
      </div>
    </div>
    <div class="contact panel-section">
      <h6>Contact</h6>
      <div class="content">
        <p><a href="mailto:hugo.marin.adressepro@gmail.com">hugo.marin.adressepro@gmail.com</a></p>
        <p><a href="tel:+33645263258">+33645263258</a></p>
      </div>
    </div>
    <div class="external panel-section">
      <h6>Dedicated spaces</h6>
      <div class="content">
        <p><a href="">GitHub</a></p>
      </div>
    </div>
  </div>
</template>
<style scope>
.contact-panel {
  display: flex;
  flex-direction: column;
  gap: 60px;
}
.panel-section {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h6 {
  font-variation-settings: 'wght' 600;
  font-size: 32px;
}

a {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  transition: color ease 0.2s;
}
a::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: v-bind('themeColor.accent');
  transition: width 0.3s;
}
a:hover::after {
  text-decoration: none;
  color: v-bind('themeColor.accent');
  transition: color ease 0.2s;
  width: 100%;
  transition: width 0.3s;
}
</style>
