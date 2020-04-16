<template>
  <div class="vf-content">
    <div class="site-info">
      <div class="site-title">
        <span class="blog-title">VFBlog</span>
      </div>
      <div class="site-sub-title">
        <span class="sub-title"/>
      </div>
      <site-social-icons/>
    </div>
    <div class="scroll-down"><i class="fa fa-angle-down scroll-down-effects"/></div>
  </div>
</template>

<script>
import Typed from 'typed.js'
import siteSocialIcons from '@/components/site-social-icons'

export default {
  name: 'vf-content',
  components: {
    siteSocialIcons
  },
  mounted() {
    new Typed(".sub-title", {
      strings: '今日事&#44;今日毕,Never put off till tomorrow what you can do today'.split(","),
      startDelay: 300,
      typeSpeed: 100,
      loop: true,
      backSpeed: 50
    });
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/var.scss';
@import '~styles/mixin.scss';

.vf-content {
  @include center();
  height: 80vh;
  .site-info,
  .site-sub-title {
    color: $white;
    text-align: center;
    text-shadow: $textShadow;
    line-height: 1.5;
  }
  .site-title {
    font-weight: bold;
    font-size: 2rem;
  }
  .site-sub-title {
    font-size: 1rem;
  }
  .scroll-down {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3rem;
    text-align: center;
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
