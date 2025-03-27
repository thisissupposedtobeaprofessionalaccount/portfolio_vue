<script setup>
import AboutPage from './AboutPage.vue'
import ContactPage from './ContactPage.vue'
import IntroPage from './IntroPage.vue'
import LandingPage from './LandingPage.vue'
import SkillsPage from './SkillsPage.vue'
import StickyHeader from './StickyHeader.vue'
import WorkPage from './WorkPage.vue'
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
