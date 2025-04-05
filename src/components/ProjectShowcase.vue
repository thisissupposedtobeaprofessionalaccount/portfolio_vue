<script setup>
import TechChip from './TechChip.vue'
import { onMounted, ref } from 'vue'
import { Application } from '@splinetool/runtime'

const props = defineProps({
  src : String,
  title : String,
  description: String,
  technos: Object,
  previewHeight : [Number, String],
  gridWidth : [Number, String],
  splineUrl: String,
  is3D : Boolean,
  on3dLoaded :Function,
  non3dSrc : {type: String, default : ""}
})


const canvas3d = ref(null)

onMounted(async () => {
  const app = new Application(canvas3d.value)
  app.load(props.splineUrl).then(() => props.on3dLoaded(app))
})

const hasImg = props.non3dSrc.length !== 0 ;

</script>
<template>
  <div class="project-showcase">
    <div class="preview">
      <img class="bg" :src="src" />
      <canvas ref="canvas3d" v-if="is3D"></canvas>
      <div class="img-container">
        <img class="image-foregnd" :src="non3dSrc" v-if="!is3D && hasImg" />
      </div>
    </div>
    <div class="tech">
      <TechChip v-for="techno in technos" :key="techno" :title = "techno">
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
.preview .bg {
  height: 100%;
  width : 100%;
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
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
}

.description {
  font-size: 32px;
  width: 80%;
}


.img-container{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-foregnd{
  position: absolute;
  height:60%;
}
</style>
