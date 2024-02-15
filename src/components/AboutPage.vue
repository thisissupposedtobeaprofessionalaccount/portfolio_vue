<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

import { useNavigationStore } from '@/stores/NavigationStore'

const navigation = useNavigationStore()
import themeColor from '@/assets/themeColors.json'

gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  gsap.fromTo(
    'main',
    { backgroundColor: themeColor.backgroundDark, color: themeColor.whiteLight },
    {
      scrollTrigger: {
        trigger: '.about-page',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'restart none none reverse'
      },
      duration: 0.5,
      backgroundColor: themeColor.accentLight,
      color: themeColor.black
    }
  )

  gsap.fromTo(
    'header',
    { backgroundColor: themeColor.backgroundDark, color: themeColor.whiteLight },
    {
      scrollTrigger: {
        trigger: '.about-page',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'restart none none reverse'
      },
      duration: 0.5,
      backgroundColor: themeColor.accentLight,
      color: themeColor.black,
      '--selectedBackgroundColor': themeColor.backgroundLight,
      '--selectedColor': themeColor.black
    }
  )

  ScrollTrigger.create({
    trigger: '.about-page',
    start: 'top center',
    end: 'bottom center',
    onEnter: function () {
      navigation.setPage('about')
    },
    onEnterBack: function () {
      navigation.setPage('about')
    }
  })
})
</script>

<template>
  <div class="about-page">
    <div class="about-content">
      <h2>ABOUT ME</h2>
      <div class="article">
        <div class="image-container">
          <img
            src="https://global-uploads.webflow.com/63bb7d51076d755de475e3a3/63be715117f71cb9333928f1_456841119-min.jpeg"
            alt=""
          />
        </div>
        <div class="text">
          <p>
            My name is Hugo, I am a french IT student passionate about technologies and designs.
          </p>
          <br />
          <p>I love creating full-stack application and adding a clean touch to every layers.</p>
          <br />
          <p>
            I thrive in learning new things and concepts. This includes technologies, tools or even
            disciplines.
          </p>
          <br />
          <p>
            My fields cover design, front end and back end development, cybersecurity and
            electronic.
          </p>
          <br />
          <p>
            As a way to break clichés, I’m looking forward to add a kind and human touch to IT
            sectors.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  min-height: 100vh;
  gap: 20px;
  padding-top: 132px;
  padding-bottom: 105px;
  background-color: v-bind('themeColor.accentLight');
  color: v-bind('themeColor.black');
}

.about-content {
  grid-column: 2 / 11;
  display: flex;
  flex-direction: column;
  gap: 62px;
}
h2 {
  grid-column: 2 / 5;
  height: fit-content;
  width: 60%;
  font-family: 'Clash Display Variable';
  font-weight: 600;
  line-height: normal;
  color: v-bind('themeColor.backgroundDark');
}

.article {
  display: flex;
  justify-content: space-between;
}
.image-container {
  height: 0;
  width: calc(43% - 20px);
  padding-bottom: calc(43% - 20px);
  box-shadow: 6px 6px 0px 0px v-bind('themeColor.backgroundDark');

  border: solid 3px v-bind('themeColor.backgroundLight');
  overflow: hidden;
  transition: all ease 0.5s;
}
.image-container:hover {
  transform: translate(-5px, -5px);
  box-shadow: 11px 11px 0px 0px v-bind('themeColor.backgroundDark');

  transition: all ease 0.5s;
}

.image-container > img {
  object-fit: cover;
  width: 110%;
}
.text {
  padding: 20px;
  font-variation-settings: 'wght' 500;
  font-size: 23px;
  width: 35%;
  box-shadow: 6px 6px 0px 0px v-bind('themeColor.backgroundDark');
  background-color: v-bind('themeColor.backgroundLight');
}
</style>
