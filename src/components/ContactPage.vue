<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

import themeColor from '@/assets/themeColors.json'

import { useNavigationStore } from '@/stores/NavigationStore'
import ContactForm from './ContactForm.vue'
import ContactPanel from './ContactPanel.vue'

const navigation = useNavigationStore()
gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  gsap.fromTo(
    'main',
    { backgroundColor: themeColor.backgroundDark, color: themeColor.backgroundLight },
    {
      scrollTrigger: {
        trigger: '.contact-page',
        start: 'top center',
        end: 'center center',
        toggleActions: 'restart none none reverse'
      },
      duration: 0.5,
      backgroundColor: themeColor.backgroundLight,
      color: themeColor.lighterDark
    }
  )

  gsap.fromTo(
    'header',
    {
      backgroundColor: themeColor.backgroundDark,
      color: themeColor.backgroundLight,
      '--selectedBackgroundColor': themeColor.backgroundLight,
      '--selectedColor': themeColor.backgroundDark
    },
    {
      scrollTrigger: {
        trigger: '.contact-page',
        start: 'top center',
        end: 'center center',
        toggleActions: 'restart none none reverse'
      },
      duration: 0.5,
      backgroundColor: themeColor.backgroundLight,
      color: themeColor.lighterDark,
      '--selectedBackgroundColor': themeColor.lighterDark,
      '--selectedColor': themeColor.backgroundLight
    }
  )
  gsap.fromTo(
    '.contact-title',
    {
      color: themeColor.backgroundLight
    },
    {
      scrollTrigger: {
        trigger: '.contact-page',
        start: 'top center',
        end: 'center center',
        toggleActions: 'restart none none reverse'
      },
      color: themeColor.backgroundDark,
      duration: 0.5
    }
  )
  gsap.to('.contact-title', {
    scrollTrigger: {
      trigger: '.contact-page',
      start: 'top center',
      end: 'center center'
    },
    duration: 1.25,
    visibility: 'visible',
    y: 0
  })

  ScrollTrigger.create({
    trigger: '.contact-page',
    start: 'top center',
    end: 'bottom center',
    onEnter: function () {
      navigation.setPage('contact')
    },
    onEnterBack: function () {
      navigation.setPage('contact')
    }
  })
})
</script>

<template>
  <div class="contact-page">
    <div class="contact-content">
      <h2 class="contact-title">WANT TO BRING LIFE TO YOUR PROJECTS ?</h2>
      <p class="personnal-intro">
        I am currently studying at INSA Lyon. You can still contact me.
      </p>
      <!--<ContactForm id="contact-form"></ContactForm>-->
      <ContactPanel id="contact-panel"></ContactPanel>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  min-height: 100vh;
  gap: 20px;
  padding-top: 100px;
  padding-bottom: 100px;
}

.contact-content {
  grid-column: 2 / 11;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  height: min-content;
}
h2 {
  color: v-bind('themeColor.black');
  visibility: hidden;
  transform: translateY(-50px);
  grid-column: 1 / 10;
  height: fit-content;
}
.personnal-intro {
  margin-top: 43px;
  margin-bottom: 130px;
  grid-column: 1 / 5;
  font-size: 32px;
}

#contact-form {
  grid-column: 1 / 7;
}

#contact-panel {
  grid-column: 9;
}

@media screen and (max-width:900px) {
h2 {
  visibility: visible;
  transform: translateY(-50px);
  grid-column: 1 / 10;
  height: fit-content;
}
.contact-content {
  grid-column: 2 / 11;
  display: flex;
  flex-direction: column;
  height: min-content;
}
  
}
</style>
