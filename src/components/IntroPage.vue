<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

import themeColor from '@/assets/themeColors.json'

import { useNavigationStore } from '@/stores/NavigationStore'

const navigation = useNavigationStore()
gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  gsap.fromTo(
    'main',
    { backgroundColor: themeColor.backgroundLight, color: themeColor.backgroundDark },
    {
      scrollTrigger: {
        trigger: '.intro-page',
        start: 'top center',
        end: 'center center',
        toggleActions: 'restart none none reverse'
      },
      duration: 0.5,
      backgroundColor: themeColor.backgroundDark,
      color: themeColor.backgroundLight
    }
  )

  gsap.fromTo(
    'header',
    { backgroundColor: themeColor.backgroundLight, color: themeColor.backgroundDark },
    {
      scrollTrigger: {
        trigger: '.intro-page',
        start: 'top center',
        end: 'center center',
        toggleActions: 'restart none none reverse'
      },
      duration: 0.5,
      backgroundColor: themeColor.backgroundDark,
      color: themeColor.whiteLight
    }
  )

  ScrollTrigger.create({
    trigger: '.intro-page',
    start: 'top center',
    end: 'bottom center',
    onEnter: function () {
      navigation.setPage('intro')
    },
    onEnterBack: function () {
      navigation.setPage('intro')
    }
  })
})
</script>

<template>
  <div class="intro-page">
    <div class="intro-content">
      <h2>Developping applications from front to back.</h2>
      <div class="bottom-row">
        <p>And much more.</p>
        <div class="scroll-invite"><p>keep scrolling to discover more</p></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro-page {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  min-height: 100vh;
  gap: 20px;
  padding-top: 217px;
  padding-bottom: 100px;
}

.intro-content {
  grid-column: 2 / 11;
  display: flex;
  flex-direction: column;
  gap: 102px;
}
h2 {
  grid-column: 2 / 8;
  height: fit-content;
  width: 60%;
}

.bottom-row {
  color: v-bind('themeColor.white');
  grid-column: 2 / 11;
  display: flex;
  justify-content: space-between;
  height: min-content;
  align-items: center;
}
.bottom-row > p {
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.scroll-invite {
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  background: var(--grey);
  box-shadow: 6px 6px 0px 0px var(--lighter-dark);
}

.scroll-invite p {
  width: 255px;
}
</style>
