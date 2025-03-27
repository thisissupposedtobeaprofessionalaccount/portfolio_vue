<script setup>
import AboutPage from './components/AboutPage.vue'
import ContactPage from './components/ContactPage.vue'
import IntroPage from './components/IntroPage.vue'
import LandingPage from './components/LandingPage.vue'
import SkillsPage from './components/SkillsPage.vue'
import StickyHeader from './components/StickyHeader.vue'
import WorkPage from './components/WorkPage.vue'
</script>

<template>
  <header>
    <StickyHeader></StickyHeader>
  </header>

  <main>
    <LandingPage></LandingPage>
    <IntroPage></IntroPage>
    <AboutPage id="about"></AboutPage>
    <SkillsPage id="skills"></SkillsPage>
    <WorkPage id="work"></WorkPage>
    <ContactPage id="contact"></ContactPage>
  </main>
</template>

<style>
header {
  --selectedBackgroundColor: transparent;
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--background-light);
}
</style>
<style scoped>
main {
  overflow: hidden;
}

</style>
