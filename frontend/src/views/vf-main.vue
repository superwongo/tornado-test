<template>
  <div class="vf-main">
    <el-card :body-style="{ padding: 0 }" shadow="hover" v-for="(post, index) in posts" :key="index">
      <div class="content-card">
        <div class="content-card-image">
          <img src="https://goss.veer.com/creative/vcg/veer/800water/veer-136658645.jpg"
               :alt="post.title"
               :title="post.title"
               class="lazyload">
        </div>
        <div class="content-card-info">
          <router-link class="article-title link--animated" :to="`/posts/${index}/`" title="Docker部署Mongodb副本集集群" tag="div">
            {{ post.title }}
          </router-link>
          <span class="article-meta">
            <span>
              <i class="fa fa-calendar article-meta__icon"/>
              <span class="article-meta__calendar">{{ post.calendar }}</span>
            </span>
            <span class="article-meta__separator">|</span>
            <span v-for="(category, id) in post.categories" :key="id">
              <span>
                <i class="fa fa-inbox article-meta__icon"/>
                <router-link class="link--animated" :to="`/categories/${id}/`" tag="span">{{ category }}</router-link>
              </span>
              <span v-if="id < post.categories.length - 1"><i class="fa fa-angle-right"/></span>
            </span>
            <span class="content">{{ post.content }}</span>
          </span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import 'lazysizes'
import { getPostData } from '@/api/posts'

export default {
  name: 'vf-main',
  data () {
    return {
      posts: []
    }
  },
  mounted() {
    this.getPostInfo()
  },
  methods: {
    getPostInfo: function () {
      getPostData().then(response => {
        this.posts = response.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/var.scss";
@import '~styles/mixin.scss';

.vf-main {
  .el-card {
    margin: 1rem 0 !important;
  }
  .content-card {
    .content-card-image {
      overflow: hidden;
      width: 45%;
      height: 16rem;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.6s;
      }
    }
    .content-card-info {
      width: 55%;
      padding: 2rem;
      @include center(column, center, null);
      .article-title {
        margin-bottom: 0.3rem;
        color: $light-black;
        font-size: 1.2rem;
        line-height: 1.4;
        @include text-overflow(2);
      }
      .article-meta {
        color: $grey;
        span {
          padding: 0 0.1rem;
          .article-meta__icon {
            padding: 0 0.1rem;
          }
          .article-meta__icon:first-child {
            padding-left: 0;
          }
        }
        .content {
          @include text-overflow(3);
          color: $grey;
          padding-top: 0.5rem;
        }
      }
    }
  }
  .content-card:hover img {
    transform: scale(1.1);
  }
  .el-card:nth-child(odd) {
    .content-card {
      @include space-between(row);
    }
  }
  .el-card:nth-child(even) {
    .content-card {
      @include space-between(row-reverse);
    }
  }
}
</style>
