<script setup>
import TechChip from './TechChip.vue'
import { onMounted, ref } from 'vue'
import { Application } from '@splinetool/runtime'

const props = defineProps([
  'src',
  'title',
  'description',
  'technos',
  'previewHeight',
  'gridWidth',
  'splineUrl',
  'is3D',
  'on3dLoaded'
])


const canvas3d = ref(null)

onMounted(async () => {
  const app = new Application(canvas3d.value)
  app.load(props.splineUrl).then(() => props.on3dLoaded(app))
})
</script>
<template>
  <div class="project-showcase">
    <div class="preview">
      <img :src="src" />
      <canvas ref="canvas3d" v-if="is3D"></canvas>
      <img :src="non3dSrc" v-if="!is3D" />
    </div>
    <div class="tech">
      <TechChip v-for="techno in technos" :key="techno">
        {{ techno }}
      </TechChip>
    </div>
    <div class="explanations">
      <h3 class="title">{{ title }}</h3>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<style scoped>
.preview {
  height: v-bind('previewHeight');
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.project-showcase {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.preview {
  overflow: hidden;
  border-radius: 15px;
  position: relative;
}
.preview img {
  width: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 0;
  left: 0;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
}
.tech {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.description {
  font-size: 32px;
  width: 80%;
}
</style>
