<template>
  <div class="vf-aside">
    <span class="aside-card">
      <el-card :body-style="{ padding: 0 }" shadow="hover" class="aside-card-content">
        <author-total-info show-username class="aside-card-info"/>
        <div class="aside-card-option">
          <el-button type="primary" icon="fa fa-bookmark" size="medium" class="button--animated">&nbsp;加入书签</el-button>
          <site-social-icons icon-color="black"/>
        </div>
      </el-card>
    </span>
  </div>
</template>

<script>
import authorTotalInfo from '@/components/author-total-info'
import siteSocialIcons from '@/components/site-social-icons'

export default {
  name: 'vf-aside',
  components: {
    authorTotalInfo,
    siteSocialIcons
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/var.scss";
@import "~styles/mixin.scss";

.vf-aside {
  .aside-card {
    @include center();
    .aside-card-content {
      margin-top: 2rem;
      margin-left: 0.5rem;
      width: 90%;
      .aside-card-option {
        text-align: center;
        padding: 1rem 0.5rem;
        .el-button {
          width: 80%;
        }
      }
    }
  }
}
</style>
