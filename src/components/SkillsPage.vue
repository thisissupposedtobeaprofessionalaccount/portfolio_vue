<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
import QualificationsSection from './QualificationsSection.vue'

import themeColor from '@/assets/themeColors.json'

import { useNavigationStore } from '@/stores/NavigationStore'
import ToolsSection from './ToolsSection.vue'

const navigation = useNavigationStore()
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.fromTo(
    'main',
    { backgroundColor: themeColor.accentLight, color: themeColor.black },
    {
      scrollTrigger: {
        trigger: '.skills-page',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'restart none none reverse'
      },
      duration: 0.5,
      backgroundColor: themeColor.backgroundLight,
      color: themeColor.backgroundDark
    }
  )

  gsap.fromTo(
    'header',
    {
      backgroundColor: themeColor.accentLight,
      color: themeColor.black,
      '--selectedBackgroundColor': themeColor.backgroundLight,
      '--selectedColor': themeColor.black
    },
    {
      scrollTrigger: {
        trigger: '.skills-page',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'restart none none reverse'
      },
      duration: 0.5,
      backgroundColor: themeColor.backgroundLight,
      color: themeColor.lighterDark,
      '--selectedBackgroundColor': themeColor.lighterDark,
      '--selectedColor': themeColor.backgroundLight
    }
  )

  ScrollTrigger.create({
    trigger: '.skills-page',
    start: 'top center',
    end: 'bottom center',
    onEnter: function () {
      navigation.setPage('skills')
    },
    onEnterBack: function () {
      navigation.setPage('skills')
    }
  })
})
</script>

<template>
  <div class="skills-page">
    <div class="skills-content">
      <QualificationsSection> </QualificationsSection>

      <ToolsSection> </ToolsSection>
    </div>
  </div>
</template>

<style scoped>
.skills-page {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  gap: 20px;
  padding-top: 183px;
  padding-bottom: 120px;
}
.skills-content {
  grid-column: 2/11;
  display: flex;
  flex-direction: column;
  gap: 144px;
}
.qualifications {
  display: flex;
  flex-direction: column;
  gap: 144px;
}
</style>
