// gzip压缩插件
const CompressionPlugin = require('compression-webpack-plugin')
// 打包分析插件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')
// 生产环境标志
const IS_PROD = process.env.NODE_ENV === 'production'
// 生产环境静态文件目录
const cdnDomain = '/'

module.exports = {
  publicPath: IS_PROD ? cdnDomain : '/',
  // css文件加载器，自动加载var.scss、mixin.scss样式文件
  css: {
    loaderOptions: {
      sass: {
        // prependData: `@import '~styles/var.scss';
        // @import '~styles/mixin.scss';`
      }
    }
  },
  configureWebpack: () => ({
    devtool: 'source-map',
    resolve: {
      // 目录别名
      alias: {
        '~styles': path.resolve('./src/assets/styles'),
        '~images': path.resolve('./src/assets/images')
      }
    }
  }),
  chainWebpack: config => {
    // 这里是对环境的配置，不同环境对应不同的BASE_URL，将参数从vue环境变量加载到webpack环境变量，以便axios的请求地址不同
    config.plugin('define').tap(args => {
      args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
      return args
    })

    // 解析svg文件
    const rule = config.module.rule('svg')
    rule.exclude.add(path.resolve('./src/assets/icons/svg'))
    // 找到svg-loader
    const svgRule = config.module.rule('auto-svg')
    // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.uses.clear()
    // 正则匹配排除node_modules目录
    // svgRule.exclude.add(/node_modules/)
    // 添加svg新的loader处理
    svgRule
      .test(/\.(svg)(\?.*)?$/)
      .exclude
      .add(/node_modules/) // 正则匹配排除node_modules目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    if (process.env.NODE_ENV === 'production') {
      // 图片压缩
      config.module
        .rule('images')
        .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        .exclude
        .add(path.resolve('src/assets/icons/svg'))
        .end()
        .use('img-loader')
        .loader('img-loader').options({
          plugins: [
            require('imagemin-jpegtran')(),
            require('imagemin-pngquant')({
              quality: [0.75, 0.85]
            })
          ]
        })

      // 启用GZip压缩
      config
        .plugin('compression')
        .use(CompressionPlugin, {
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8,
          cache: true
        })
        // .tap(args => { })

      // 忽略生成环境打包的文件
      const externals = {
        vue: 'Vue',
        axios: 'axios',
        'element-ui': 'ELEMENT',
        'vue-router': 'VueRouter',
        vuex: 'Vuex'
      }
      config.externals(externals)
      const cdn = {
        css: [
          // element-ui css
          '//cdn.bootcss.com/element-ui/2.12.0/theme-chalk/index.css',
          '//cdn.bootcss.com/font-awesome/5.11.2/css/fontawesome.min.css'
        ],
        js: [
          // vue
          '//cdn.bootcss.com/vue/2.6.10/vue.min.js',
          // vue-router
          '//cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js',
          // vuex
          '//cdn.bootcss.com/vuex/3.1.1/vuex.min.js',
          // axios
          '//cdn.bootcss.com/axios/0.19.0-beta.1/axios.min.js',
          // element-ui js
          '//cdn.bootcss.com/element-ui/2.12.0/index.js'
        ]
      }
      config.plugin('html')
        .tap(args => {
          args[0].cdn = cdn
          return args
        })

      // 分析打包体积
      if (process.env.IS_ANALYZE) {
        config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
          {
            analyzerMode: 'static'
          }
        ])
      }
    }
  }
}
