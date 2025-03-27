<script setup>
import { ref, onMounted } from 'vue';
import ProjectShowcase from './ProjectShowcase.vue';

import projectsData from '@/assets/models/projects.json';

const projects = ref([]);

onMounted(() => {
  projects.value = projectsData;
  console.log(projects.value);
});
</script>

<template>
  <main>
    <div v-for='(project, index) in projects' v-bind:key='index'>
      <ProjectShowcase
        style="grid-column: 2 / 10; margin-bottom: 141px"
        preview-height="493px"
        src="/src/assets/images/green_gradient.png"
        technos={{project.technos}}
        title="PEEKED"
        description="engineering and development for a camera trap visualization app"
        spline-url="/src/assets/spline/peeked.splinecode"
        :is3D="true"
        :on3d-loaded="
          (app) => {
            const phone = app.findObjectByName('phone')
            gsap.to(phone.rotation, { y: Math.PI * 2, repeat: -1, duration: 25, ease: 'none' })
          }
        "
      >
      </ProjectShowcase>

    </div>
  </main>
</template>

<style>
header {
  --selectedBackgroundColor: transparent;
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;
}

</style>
<style scoped>
main {
  overflow: hidden;
  height: 100vh;
  background-color: var(--background-dark);
  color: var(--background-light);
}

</style>
