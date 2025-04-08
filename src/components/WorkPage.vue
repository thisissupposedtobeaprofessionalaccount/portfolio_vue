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
      <p class="mobile-ad">You can see a better display of my work on the larger screen version of this site !</p>
      <ProjectShowcase
        style="grid-column: 2 / 10; margin-bottom: 141px"
        preview-height="493px"
        src="/images/green_gradient.png"
        :technos="['Vue.js', 'Express.js', 'Docker', 'Figma', 'ESP-8266']"
        title="PEEKED"
        description="engineering and development for a camera trap visualization app"
        spline-url="/spline/peeked.splinecode"
        is3D = true
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
        is3D="true"
        non3dSrc="/images/picpals.png"
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
        style="grid-column: 8 / 11; margin-bottom: 100px"
        preview-height="560px"
        src="/images/yellow_gradient.png"
        :technos="['Vue.js', 'GSAP', 'Figma']"
        title="This site"
        description="design and development"
        :is3D="false"
        non3dSrc="/images/portfolio.png"
      ></ProjectShowcase>
    <a class="discover-btn"><router-link to='/projects'>discover more.</router-link></a>
  </div>
    </div>
</template>

<style scoped>
.mobile-ad{
  display: none;
}
.discover-btn{
  margin-top: 10px;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  background: var(--grey);
  color: var(--background-light);
  box-shadow: 6px 6px 0px 0px var(--lighter-dark);
  transition: all ease 0.5s;
}

.discover-btn:hover{
  transform: translate(-5px, -5px);
  box-shadow: 11px 11px 0px 0px var(--lighter-dark);
  transition: all ease 0.5s;
}
a {
  grid-column: 10 / 11;
  display: inline-block;
  text-decoration: none;
  color: inherit;
  transition: color ease 0.2s;
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

@media screen and (max-width:900px) {
.mobile-ad{
  font-size: 23px;
  display: block;
  grid-column: 1 / 11;
  height: fit-content;
}

.discover-btn{
  margin-top: 10px;

  grid-column: 1 / 11;
  height: min-content;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  background: var(--grey);
  color: var(--background-light);
  box-shadow: 6px 6px 0px 0px var(--lighter-dark);
  transition: all ease 0.5s;
}
  
  .project-showcase {
    display: none;
  }
}

</style>
