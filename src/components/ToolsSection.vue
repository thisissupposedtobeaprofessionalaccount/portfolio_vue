<script setup>
import themeColor from '@/assets/themeColors.json'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SkillCard from './SkillCard.vue'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.to('.sector', {
    scrollTrigger: {
      trigger: '.toolkit',
      start: 'top center',
      end: 'bottom bottom',
      scrub: true,

      pinnedContainer: '.toolkit'
    },
    autoAlpha: 1,
    y: 0,
    stagger: 1.5
  })
})
</script>
<template>
  <div class="title">
    <div class="align-wrapper">
      <h3>Toolkit</h3>
      <h5>All the tools I use in my digital journey.</h5>
    </div>
  </div>

  <div class="toolkit">
    <div class="toolkit-line">
      <div class="sector">
        <SkillCard>front end</SkillCard>
        <div class="sector-content">
          <p>HTML 5</p>
          <p>Vue.js</p>
          <p>CSS</p>
          <p>Flutter</p>
          <p>JavaScript</p>
        </div>
      </div>
      <div class="sector">
        <SkillCard>design</SkillCard>
        <div class="sector-content">
          <p>Figma</p>
        </div>
      </div>
    </div>
    <div class="toolkit-line">
      <div class="sector">
        <SkillCard>back end</SkillCard>
        <div class="sector-content">
          <p>Express.js</p>
        </div>
      </div>
      <div class="sector">
        <SkillCard>database</SkillCard>
        <div class="sector-content">
          <p>MongoDB</p>
          <p>Neo4J</p>
          <p>SQL</p>
        </div>
      </div>
      <div class="sector">
        <SkillCard>CI/CD</SkillCard>
        <div class="sector-content">
          <p>Docker</p>
          <p>Gitlab</p>
        </div>
      </div>
    </div>
    <div class="toolkit-line">
      <div class="sector">
        <SkillCard>software</SkillCard>
        <div class="sector-content">
          <p>C</p>
          <p>C++</p>
          <p>Java</p>
          <p>Dart</p>
        </div>
      </div>

      <div class="sector">
        <SkillCard>cybersecurity</SkillCard>
        <div class="sector-content">
          <p>Burp Suite</p>
          <p>Metasploit</p>
          <p>Nmap</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.title {
  align-items: flex-end;
  color: v-bind('themeColor.lighterDark');
}
h5 {
  color: v-bind('themeColor.grey');
}
.align-wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.toolkit {
  display: flex;
  flex-direction: column;
  gap: 101px;
}

.toolkit-line {
  width: 100%;
  display: flex;
  gap: 12%;
}
.sector {
  display: flex;
  flex-direction: column;
  gap: 44px;
  visibility: hidden;
  transform: translateY(20px);
}

.sector-content {
  width: 100%;
  font-variation-settings: 'wght' 700;
  font-size: 45px;
  color: v-bind('themeColor.accent');
  display: flex;
  flex-wrap: wrap;
  gap: 24%;
}
.sector-content p {
  width: 250px;
}

.toolkit-line:nth-child(1) .sector:nth-of-type(1) {
  width: 49%;
}
.toolkit-line:nth-child(1) .sector:nth-of-type(2) {
  width: 29%;
}

.toolkit-line:nth-child(2) .sector {
  width: 29%;
}

.toolkit-line:nth-child(2) .sector.sector:nth-of-type(3) {
  width: 18%;
}
</style>
