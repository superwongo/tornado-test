<template>
  <div class="site-social-icons">
    <a :class="classObject" href="https://github.com/superwongo" target="_blank">
      <i class="fa fa-github"/>
    </a>
    <a :class="classObject" href="mailto:wangchao_198912@126.com" target="_blank">
      <i class="fa fa-envelope"/>
    </a>
  </div>
</template>

<script>
export default {
  name: 'site-social-icons',
  props: {
    iconColor: {
      type: String,
      default: 'white',
      validator: function (value) {
        return ['white', 'black'].indexOf(value) > -1
      }
    }
  },
  computed: {
    classObject: function () {
      return this.iconColor === 'white' ? ['social-icon', 'color-white'] : ['social-icon', 'color-black']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/var.scss';

.site-social-icons {
  margin-top: 0.5rem;
  .social-icon {
    margin: 0 0.6rem;
    text-shadow: $textShadow;
    font-size: 1rem;
    cursor: pointer;
  }
  .color-black {
    color: $black;
  }
  .color-white {
    color: $white;
  }
}
</style>
