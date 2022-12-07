module.exports = {
    plugins: {
        "postcss-plugin-px2rem": {
            rootValue: 37.5,// 换算基准，配合lib-flexible使用 750 的设计稿 如果使用 rem.js 则基准为 16
            unitPrecision: 5,
            mediaQuery: true,
            exclude: /(node_module)/i,
            selectorBlackList: ['html', 'mint-', 'mt-', 'mpvue-', 'calendar', 'iconfont'], // 在rem.js全局作用下，排除指定的文件的影响
            propBlackList: ['border'] // 过滤属性
        }
    }
}
