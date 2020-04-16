<template>
  <div id="app">
    <el-container class="first-page">
      <el-header>
        <vf-header/>
      </el-header>
      <el-main>
        <vf-content/>
      </el-main>
    </el-container>
    <el-container class="content-page">
      <el-container>
        <el-main>
          <vf-main/>
        </el-main>
        <el-aside width="25%">
          <vf-aside/>
        </el-aside>
      </el-container>
      <el-footer>
        <vf-footer/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import vfHeader from "@/views/vf-header"
import vfContent from "@/views/vf-content"
import vfMain from "@/views/vf-main"
import vfAside from "@/views/vf-aside"
import vfFooter from "@/views/vf-footer"

export default {
  name: 'app',
  components: {
    vfHeader,
    vfContent,
    vfMain,
    vfAside,
    vfFooter
  }
}
</script>

<style lang="scss" scoped>
#app {
  .first-page {
    height: 100vh;
    /*background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579796259631&di=87e3e94eee16c1a8c0dad5917c49ddfc&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0388a4d58535baba801219c77f16fb0.jpg);*/
    background-image: url(https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/index.jpg);
    background-attachment: local;
    background-position: center;
    background-size: cover;
    animation: header 1s;
  }
  .content-page {
    padding: 0 1rem;
    .el-main {
      padding: 1rem 1rem 0 2rem;
    }
  }
  @keyframes header {
    0% {
      opacity: 0;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
      filter: alpha(opacity=0);
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      -ms-filter: none;
      filter: none;
      transform: translateY(0);
    }
  }
}
</style>
