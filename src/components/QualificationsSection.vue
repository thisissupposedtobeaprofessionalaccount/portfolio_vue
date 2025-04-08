<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SkillCard from './SkillCard.vue'
import { onMounted } from 'vue'

import themeColor from '@/assets/themeColors.json'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.to('.capacities .skill-card', {
    scrollTrigger: {
      trigger: '.capacities',
      start: 'top center',
      end: 'bottom bottom'
    },
    autoAlpha: 1,
    duration: 1,
    stagger: 0.5,
    x: 0
  })
})
</script>

<template>
  <div class="title">
    <h3>Qualifications</h3>
    <h5>I have a very specific set of skills.</h5>
  </div>

  <div class="capacities">
    <SkillCard class="skill-card">application engineering</SkillCard>
    <SkillCard class="skill-card">software developpment</SkillCard>
    <SkillCard class="skill-card">front-end developpment</SkillCard>
    <SkillCard class="skill-card">UI/UX design</SkillCard>
    <SkillCard class="skill-card">back-end developpment</SkillCard>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  flex-direction: column;
  gap: 50px;
  color: v-bind('themeColor.lighterDark');
}
h5 {
  color: v-bind('themeColor.grey');
}

.capacities {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.capacities .skill-card {
  position: relative;

  visibility: hidden;
}
.skill-card:nth-child(odd) {
  transform: translateX(-20px);
}
.skill-card:nth-child(even) {
  transform: translateX(20px);
}
.skill-card:nth-child(1),
.skill-card:nth-child(2),
.skill-card:nth-child(5) {
  min-width: 49%;
}

.skill-card:nth-child(3) {
  min-width: 59%;
}
.skill-card:nth-child(4) {
  min-width: 39%;
}
@media screen and (max-width:900px) {
.capacities .skill-card {
  position: relative;
  visibility: visible;
}
.skill-card:nth-child(odd) {
  transform: translateX(0px);
}
.skill-card:nth-child(even) {
  transform: translateX(0px);
}
  
}
</style>
