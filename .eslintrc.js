module.exports = {
  root: true,
  env: {
    // 支持浏览器环境
    browser: true,
    // 识别 CommonJS
    node: true,
    // 识别 ES 的代码，使用 ECMAScript 2021 自动设置 ecmaVersion parser 为 12，
    es2021: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module', // 支持 import/export
    ecmaFeatures: {
      jsx: true
    },
    requireConfigFile: false
  },
  extends: [
    'eslint:recommended', // eslint 自己的推荐规则，最佳实践最小集
    'plugin:vue/vue3-strongly-recommended',
    'plugin:prettier/recommended' // 禁用 eslint 关于代码的风格的规则，使用 prettier 的风格
  ],
  rules: {
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: []
      }
    ]
  }
  // overrides: [
  //   // 处理 JS 文件
  //   {
  //     files: ['**/*.{js,jsx}'], // 只处理 js 和 jsx 文件
  //     parserOptions: {
  //       ecmaVersion: 'latest',
  //       sourceType: 'module', // 支持 import/export
  //       allowImportExportEverywhere: false,
  //       ecmaFeatures: {
  //         globalReturn: false
  //       },
  //       requireConfigFile: false
  //     },
  //     extends: [
  //       'plugin:prettier/recommended' // 禁用 eslint 关于代码的风格的规则，使用 prettier 的风格
  //     ]
  //   },
  //   // 处理 vue 文件
  //   {
  //     files: ['**/*.vue'], // 只处理 vue 文件
  //     extends: [
  //       'plugin:vue/vue3-strongly-recommended',
  //       'plugin:prettier/recommended'
  //     ] // 使用 vue3 的推荐规则
  //   }
  // ]
}
