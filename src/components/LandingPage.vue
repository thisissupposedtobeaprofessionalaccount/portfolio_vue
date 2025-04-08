<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

import themeColor from '@/assets/themeColors.json'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('main', {
    backgroundColor: themeColor.backgroundLight,
    color: themeColor.backgroundDark
  })

  gsap.from('header', {
    backgroundColor: themeColor.backgroundLight,
    color: themeColor.backgroundDark
  })
})
</script>

<template>
  <div class="landing-content">
    <div class="middle-elt">
      <div class="echo-container">
        <p id="portfolio-1">portfolio</p>
        <p id="portfolio-2">portfolio</p>
        <p id="portfolio-3">portfolio</p>
      </div>
      <div class="welcome-container">
        <h1>Hello, I'm Hugo.</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing-content {
  z-index: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  column-gap: 20px;
}

.echo-container {
  width: fit-content;
  display: flex;
  gap: 14px;
  font-family: 'Clash Display Variable';

  font-size: 64px;
  font-style: normal;
  font-variation-settings: 'wght' 600;
  line-height: normal;
}

.middle-elt {
  position: relative;
  top: 126px;
  display: flex;
  flex-direction: column;
  grid-column: 2 / 10;
}

#portfolio-1 {
  color: var(--white);
}
#portfolio-2 {
  color: transparent;
  -webkit-text-stroke: var(--lighter-dark) 2px;
}
#portfolio-3 {
  color: var(--accent-light);
}

.welcome-container {
  display: flex;
  padding-left: 25px;
  height: 531px;
  background-color: var(--darker-white);
  background: var(--white-700, #cccac1);
  box-shadow: 6px 6px 0px 0px var(--dark-400, #343541);
  align-items: center;
  margin-bottom: 199px;
}
.welcome-container h1 {
  width: 75%;
  height: fit-content;
}
@media screen and (max-width:900px) {
.welcome-container {
  height: 380px;
}
.echo-container{
  align-self: center;
  order: 2
}

#portfolio-1 {
  font-size: 32px;
}
#portfolio-2 {
  font-size: 32px;
}
#portfolio-3 {
  font-size: 32px;
}
  
}
</style>
