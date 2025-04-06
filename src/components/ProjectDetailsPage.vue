<script setup>
import { ref, onMounted } from 'vue';
import ProjectShowcase from './ProjectShowcase.vue';

import projectsData from '@/assets/models/projects.json';

const projects = ref([]);

onMounted(() => {
  projects.value = projectsData;
});

</script>

<template>
  <div class="projects-page">
    <div class="projects-content" >
      <h2>My projects </h2>
      <div v-for='(project, index) in projects' :key='index'>
        <ProjectShowcase
            style="grid-column: 2 / 6; margin-bottom: 141px"
            preview-height="300px"
            :src="project.src"
            :technos="project.technos"
            :title="project.title"
            :description="project.description"
            :non3dSrc = "project.image"
            :link = "project.link"
            >
        </ProjectShowcase>
        </div>
    </div >
  </div >
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
.projects-page {
  overflow: hidden;
  background-color: var(--background-dark);
  color: var(--background-light);
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  min-height: 100vh;
  gap: 20px;
  padding-top: 95px;
  padding-bottom: 105px;
}

.projects-content {
  grid-column: 2 / 8;
}
h2 {
  height: min-content;
  margin-bottom: 119px;
}
</style>
