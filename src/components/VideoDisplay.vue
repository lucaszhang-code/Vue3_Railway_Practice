<!-- VideoDisplay.vue -->
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  videoDisplay: boolean;
  overlayDisplay: boolean;
}>();

const emit = defineEmits<{
  (event: 'update:videoDisplay', value: boolean): void;
  (event: 'update:overlayDisplay', value: boolean): void;
}>();

const handleClose = () => {
  emit('update:videoDisplay', false);
  emit('update:overlayDisplay', false);
};
</script>

<template>
  <!-- 点击遮罩层时触发关闭事件 -->
  <div v-if="overlayDisplay" class="black-overlay" @click.self="handleClose"></div>
  <video
    v-if="videoDisplay"
    autoplay
    class="PV-video"
    src="https://fastcdn.mihoyo.com/content-v2/hkrpg/101956/05e02d391621128fe6ee03d6c23c42e3_1170417501551849349.mp4"
    controls
  ></video>
</template>

<style scoped>
.PV-video {
  position: absolute;
  width: 70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}

.black-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
