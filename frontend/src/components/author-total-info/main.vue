<template>
  <div class="author-total-info">
    <div class="author-icon">
      <el-avatar>
        <img src="@/assets/images/avatar.png"
             onerror="onerror=null;src='@/assets/images/friend_404.gif'"
             alt="avatar">
      </el-avatar>
    </div>
    <div v-if="showUsername" class="author-name">super.wong</div>
    <div class="post-data">
      <div class="data-item">
        <router-link to="/archives/" class="data-link">
          <div class="headline">文章</div><div class="length-num">2</div>
        </router-link>
      </div>
      <div class="data-item">
        <router-link to="/tags/" class="data-link">
          <div class="headline">标签</div><div class="length-num">2</div>
        </router-link>
      </div>
      <div class="data-item">
        <router-link to="/categories/" class="data-link">
          <div class="headline">分类</div><div class="length-num">4</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'author-total-info',
  props: {
    showUsername: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.author-total-info {
  .author-icon {
    padding: 1rem 1.5rem;
    text-align: center;
  }
  .post-data {
    display: flex;
    justify-content: center;
    padding: 0.5rem 1rem;
    .data-item {
      flex: 1;
      .data-link {
        text-decoration: none;
        text-align: center;
        cursor: pointer;
        .headline {
          color: #4c4948;
          text-transform: uppercase;
          font-size: 0.9rem;
          padding-bottom: 0.5rem;
        }
        .length-num {
          color: #000000;
          font-size: 1.1rem;
          font-weight: 500;
        }
      }
    }
  }
  .author-name {
    font-weight: 500;
    font-size: 1.3rem;
    text-align: center;
    color: #4c4948;
  }
  .el-avatar {
    height: 7rem;
    width: 7rem;
  }
}
</style>
