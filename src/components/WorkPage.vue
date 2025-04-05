<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

import { useNavigationStore } from '@/stores/NavigationStore'

const navigation = useNavigationStore()
import themeColor from '@/assets/themeColors.json'
import ProjectShowcase from './ProjectShowcase.vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.fromTo(
    'main',
    { backgroundColor: themeColor.backgroundLight, color: themeColor.lighterDark },
    {
      scrollTrigger: {
        trigger: '.work-page',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'restart none none reverse'
      },
      duration: 0.5,
      backgroundColor: themeColor.backgroundDark,
      color: themeColor.backgroundLight
    }
  )

  gsap.fromTo(
    'header',
    {
      backgroundColor: themeColor.backgroundLight,
      color: themeColor.lighterDark,
      '--selectedBackgroundColor': themeColor.lighterDark,
      '--selectedColor': themeColor.backgroundLight
    },
    {
      scrollTrigger: {
        trigger: '.work-page',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'restart none none reverse'
      },
      duration: 0.5,
      backgroundColor: themeColor.backgroundDark,
      color: themeColor.backgroundLight,
      '--selectedBackgroundColor': themeColor.backgroundLight,
      '--selectedColor': themeColor.backgroundDark
    }
  )

  ScrollTrigger.create({
    trigger: '.work-page',
    start: 'top center',
    end: 'bottom center',
    onEnter: function () {
      navigation.setPage('work')
    },
    onEnterBack: function () {
      navigation.setPage('work')
    }
  })
})
</script>

<template>
  <div class="work-page">
    <div class="work-content">
      <h2>MY WORK</h2>
      <ProjectShowcase
        style="grid-column: 2 / 10; margin-bottom: 141px"
        preview-height="493px"
        src="/images/green_gradient.png"
        :technos="['Vue.js', 'Express.js', 'Docker', 'Figma', 'ESP-8266']"
        title="PEEKED"
        description="engineering and development for a camera trap visualization app"
        spline-url="/spline/peeked.splinecode"
        is3D
        :on3d-loaded="
          (app) => {
            const phone = app.findObjectByName('phone')
            gsap.to(phone.rotation, { y: Math.PI * 2, repeat: -1, duration: 25, ease: 'none' })
          }
        "
      >
      </ProjectShowcase>
      <ProjectShowcase
        style="grid-column: 1 / 5"
        preview-height="582px"
        src="/images/pink_gradient.png"
        :technos="['Flutter', 'Express.js', 'MongoDB']"
        title="PicPals"
        description="time-based social network for artists"
        spline-url="/spline/picpals.splinecode"
        :is3D="false"
      ></ProjectShowcase>
      <ProjectShowcase
        style="grid-column: 6 / 11"
        preview-height="443px"
        src="/images/red_gradient.png"
        :technos="['cpp', 'Ogre3D', 'SQL']"
        title="3D software maintenance"
        description="internship at Ice Development"
        spline-url="/spline/cppproj.splinecode"
        :is3D="true"
        :on3d-loaded="
          (app) => {
            const phone = app.findObjectByName('computer')
            gsap.to(phone.rotation, { y: -Math.PI * 2, repeat: -1, duration: 10, ease: 'none' })
          }
        "
      ></ProjectShowcase>
      <ProjectShowcase
        style="grid-column: 1 / 7; margin-top: 148px"
        preview-height="458px"
        src="/images/blue_gradient.png"
        :technos="['Flutter', 'NMEA2000']"
        title="App for boaters"
        description="front end mobile development at Amiltone"
        :is3D="false"
      ></ProjectShowcase>
      <ProjectShowcase
        style="grid-column: 8 / 11; margin-bottom: 250px"
        preview-height="560px"
        src="/images/yellow_gradient.png"
        :technos="['Vue.js', 'GSAP', 'Figma']"
        title="This site"
        description="design and development"
        :is3D="false"
      ></ProjectShowcase>
    </div>
    <a><router-link to='/projects'>Discover more.</router-link></a>
  </div>
</template>

<style scoped>
a {
  grid-column: 10 / 11;
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

.work-page {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  min-height: 100vh;
  gap: 20px;
  padding-top: 95px;
  padding-bottom: 105px;
}

.work-content {
  grid-column: 2 / 11;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 20px;
}
h2 {
  grid-column: 1 / 5;
  height: min-content;
  margin-bottom: 119px;
}
</style>
