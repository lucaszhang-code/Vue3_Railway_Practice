<script setup lang="ts">
import { ref } from 'vue'
import { Close } from '@element-plus/icons-vue'
import Download from '@/components/DownloadLink.vue'

const drawer = ref(false)

defineExpose(['isDownload'])
</script>

<template>
  <div class="layout">
    <div class="navigate">
      <!--    <img src="@/assets/home/logo图标.png" alt="">-->
      <el-menu
        :default-active="activeIndex"
        class="el-menu"
        mode="horizontal"
        background-color="black"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
        default-openeds="/home"
        router
      >
        <el-menu-item index="/home"> 主页</el-menu-item>
        <el-menu-item index="/news"> 新闻</el-menu-item>
        <el-menu-item index="/characters"> 角色</el-menu-item>
        <el-menu-item index="/community"> 社区</el-menu-item>
      </el-menu>
      <el-button class="btn-download" @click="drawer = true">下载游戏</el-button>
    </div>
    <el-drawer v-model="drawer" direction="btt" :with-header="false" size="25%" :title="download">
      <template #default>
        <div class="drawer-content">
          <div class="content-center">
            <h3 style="color: orange; padding: 5px">游戏下载</h3>
            <Download></Download>
            <el-icon color="white" size="30px" id="btn-close" @click="drawer = false">
              <Close />
            </el-icon>
          </div>
        </div>
      </template>
    </el-drawer>
    <RouterView></RouterView>
  </div>
</template>
<style scoped lang="scss">
.layout {
  width: 100vw;
  position: relative;
}

.navigate {
  position: fixed;
  width: 100vw;
  z-index: 100;
  opacity: 0.8;

  .el-menu {
    height: 70px;
    border-bottom: none;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
  }

  .el-menu > .el-menu-item {
    font-size: 20px;
    width: 150px;
  }

  .btn-download {
    background-color: orange;
    border: none;
    border-bottom-left-radius: 20px;
    position: absolute;
    top: 0;
    right: 0;
    height: 70px;
    width: 180px;
    z-index: 1;
    opacity: 1;
    font-size: 20px;
    color: black;
  }
}

:deep(.el-drawer) {
  background-image: url('https://sr.mihoyo.com/_nuxt/img/download-dlg-bg.865a74f.png');
  background-size: cover;
}

:deep(.el-drawer__body) {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-center {
  position: relative;
}

.content-close {
  width: 100px;
  height: 120px;
}

#btn-close {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
</style>
