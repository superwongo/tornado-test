<template>
  <div class="vf-header">
    <div class="blog-header">
      <span class="pull-left">
        <router-link class="blog-title" to="/">VFBlog</router-link>
      </span>
      <span class="toggle-menu pull-right" @click="toggleMenu">
        <router-link class="menus-item" to="#">
          <i class="fa fa-bars fa-fw" aria-hidden="true"/></router-link>
      </span>
      <span class="pull-right">
        <el-menu class="menus-items" mode="horizontal" router background-color="rgba(0,0,0,0)">
          <el-menu-item class="menus-item menu-bottom--animated" index="/">
            <i class="fa-fw fa fa-home"/>首页</el-menu-item>
          <el-menu-item class="menus-item menu-bottom--animated" index="/archives/">
            <i class="fa-fw fa fa-archive"/>归档</el-menu-item>
          <el-menu-item class="menus-item menu-bottom--animated" index="/tags/">
            <i class="fa-fw fa fa-tags"/>标签</el-menu-item>
          <el-menu-item class="menus-item menu-bottom--animated" index="/categories/">
            <i class="fa-fw fa fa-folder-open"/>分类</el-menu-item>
          <el-menu-item class="menus-item menu-bottom--animated" index="/about/">
            <i class="fa-fw fa fa-heart"/>关于</el-menu-item>
        </el-menu>
      </span>
    </div>
    <el-drawer :visible.sync="drawer" :with-header="false" size="30%" class="mobile-sidebar">
      <author-total-info/>
      <hr class="hr--animated">
      <el-menu class="mobile-menus-items" router background-color="rgba(0,0,0,0)">
        <el-menu-item class="mobile-menus-item" index="/">
          <i class="fa-fw fa fa-home"/><span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item class="mobile-menus-item" index="/archives/">
          <i class="fa-fw fa fa-archive"/><span slot="title">归档</span>
        </el-menu-item>
        <el-menu-item class="mobile-menus-item" index="/tags/">
          <i class="fa-fw fa fa-tags"/><span slot="title">标签</span>
        </el-menu-item>
        <el-menu-item class="mobile-menus-item" index="/categories/">
          <i class="fa-fw fa fa-folder-open"/><span slot="title">分类</span>
        </el-menu-item>
        <el-menu-item class="mobile-menus-item" index="/about/">
          <i class="fa-fw fa fa-heart"/><span slot="title">关于</span>
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </div>
</template>

<script>
import authorTotalInfo from '@/components/author-total-info'

export default {
  name: 'vf-header',
  components: {
    authorTotalInfo
  },
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    toggleMenu: function () {
      this.drawer = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/var.scss";

.vf-header {
  .blog-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    padding: 1rem 1.5rem;
    font-size: 18px;
    .pull-left {
      float: left;
      .blog-title {
        text-shadow: $textShadow;
        font-weight: bold;
        cursor: pointer;
        text-decoration: none;
        color: rgba(255,255,255,0.8);
      }
    }
    .pull-right {
      float: right;
    }
    .toggle-menu, .menus-items {
      border: none;
      .menus-item {
        i {
          color: $white;
          padding-right: 0.1rem;
        }
        padding: 0 0.4rem;
        color: $white;
        line-height: 2rem;
        height: 2rem
      }
    }
  }
  .mobile-sidebar {
    .mobile-menus-items > .mobile-menus-item {
        i {
          color: $grey;
          padding-left: 1rem;
          padding-right: 2rem;
        }
        font-size: 1rem;
        color: $grey;
        line-height: 3rem;
        height: 3rem;
        /*设置透明背景*/
        background-color: rgba(0,0,0,0) !important;
    }
  }
}
</style>
