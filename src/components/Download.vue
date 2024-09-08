<script setup lang="ts">
import { VideoPlay } from '@element-plus/icons-vue'


</script>

<template>
  <div class="link-download">
    <img src="@/assets/home/扫码下载.png" height="110" alt="" />
    <img src="@/assets/home/云星铁.png" height="110" alt="" />
    <img src="@/assets/home/苹果下载.png" height="50" alt="" />
    <img src="@/assets/home/安卓下载.png" height="50" alt="" />
    <img src="@/assets/home/TapTap下载.png" height="50" alt="" />
    <img src="@/assets/home/米哈游启动器下载.png" height="50" alt="" />
    <div class="content-close"></div>
  </div>
</template>

<style scoped>
.link-download {
  height: 120px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.link-download img {
  cursor: pointer;
  padding: 5px;
}

.link-download img:hover {
  opacity: 0.8;
}

.content-close{
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
