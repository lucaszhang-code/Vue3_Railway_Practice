<!-- ParentComponent.vue -->
<script setup lang="ts">
import Download from '@/components/Download.vue';
import { VideoPlay } from '@element-plus/icons-vue';
import { ref } from 'vue';
import VideoDisplay from '@/components/VideoDisplay.vue';

const videoDisplay = ref(false);
const overlayDisplay = ref(false);

const onOpenVideo = () => {
  overlayDisplay.value = true;
  videoDisplay.value = true;
};

const onCloseVideo = () => {
  overlayDisplay.value = false;
  videoDisplay.value = false;
};
</script>

<template>
  <div class="index">
    <!-- 背景视频 -->
    <video autoplay muted loop class="background-video">
      <source
        src="https://fastcdn.mihoyo.com/content-v2/hkrpg/101956/3ff792bf2bc4b5092e714f08b5d728a3_4296252783649092438.mp4"
        type="video/mp4"
      />
    </video>
    <div class="lcd-overlay"></div>
    <div class="content-download">
      <Download ref="myDownload"></Download>
      <el-icon size="100" color="white" id="icon-play" @click="onOpenVideo">
        <VideoPlay />
      </el-icon>
    </div>
    <!-- 使用 `v-model` 和事件绑定同步子组件状态 -->
    <VideoDisplay
      v-model:videoDisplay="videoDisplay"
      v-model:overlayDisplay="overlayDisplay"
    />
  </div>
</template>

<style scoped>
.index {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.background-video {
  height: 100vh;
  object-fit: cover;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
}

.lcd-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
  linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 4px 4px;
  pointer-events: none;
  z-index: 1;
  mix-blend-mode: overlay;
}

.content-download {
  width: 662px;
  height: 120px;
  display: flex;
  position: absolute;
  left: 5%;
  bottom: 15%;
}

#icon-play {
  position: absolute;
  right: 0;
  top: 5%;
  cursor: pointer;
}
</style>
