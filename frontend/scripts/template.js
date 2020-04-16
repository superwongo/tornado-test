/**vue文件模板**/
module.exports = {
  // 配置模板样式
  vueTemplate: componentName => {
    return `<template>
  <div class="${componentName}">
    ${componentName}组件
  </div>
</template>

<script>
export default {
  name: '${componentName}'
}
</script>

<style lang="scss" scoped>
.${componentName} {

}
</style>
`
  },
  // 配置模板入口
  entryTemplate: `import Main from './main.vue'
export default Main
`
}

