<template>
  <div class="vf-main">
    <el-card :body-style="{ padding: 0 }" shadow="hover" v-for="v in [1,2,3]" :key="v">
      <div class="content-card">
        <div class="content-card-image">
          <img src="https://goss.veer.com/creative/vcg/veer/800water/veer-136658645.jpg"
               alt="Docker部署Mongodb副本集集群"
               title="Docker部署Mongodb副本集集群"
               class="lazyload">
        </div>
        <div class="content-card-info">
          <router-link class="article-title link--animated" to="/posts/1/" title="Docker部署Mongodb副本集集群" tag="div">
            Docker部署Mongodb副本集集群
          </router-link>
          <span class="article-meta">
            <span>
              <i class="fa fa-calendar article-meta__icon"/>
              <span class="article-meta__calendar">2019-12-23</span>
            </span>
            <span class="article-meta__separator">|</span>
            <span>
              <i class="fa fa-inbox article-meta__icon"/>
              <router-link class="link--animated" to="/categories/1/" tag="span">数据库</router-link>
            </span>
            <span><i class="fa fa-angle-right"/></span>
            <span>
              <i class="fa fa-inbox article-meta__icon"/>
              <router-link class="link--animated" to="/categories/2/" tag="span">mongo</router-link>
            </span>
            <span><i class="fa fa-angle-right"/></span>
            <span>
              <i class="fa fa-inbox article-meta__icon"/>
            <router-link class="link--animated" to="/categories/3/" tag="span">docker</router-link>
            </span>
            <span><i class="fa fa-angle-right"/></span>
            <span>
              <i class="fa fa-inbox article-meta__icon"/>
              <router-link class="link--animated" to="/categories/4/" tag="span">mongo</router-link>
            </span>
            <span class="content">
              Mongodb简介目前常用的数据库主要分为两种：关系型数据库、非关系型数据库。其中关系型数据库常见的包括：Oracle、Mysql、PostgreSQL、SqlSever等，其主要特点就是大多数都遵循SQL（结构化查询语言，Structured
              Query Language）标准，针对结构化的数据支 ...
            </span>
          </span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import 'lazysizes'

export default {
  name: 'vf-main'
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
