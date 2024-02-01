<p align="center">
  <a href="https://github.com/codercup/unibest">
    <img width="200" src="./src/static/logo.svg">
  </a>
</p>

<h1 align="center">
  <a href="https://github.com/codercup/unibest" target="_blank">unibest - 最好用的 uniapp 开发框架</a>
</h1>

<div align="center">

[![GitHub Repo stars](https://img.shields.io/github/stars/codercup/unibest?style=flat&logo=github)](https://github.com/codercup/unibest)
[![GitHub forks](https://img.shields.io/github/forks/codercup/unibest?style=flat&logo=github)](https://github.com/codercup/unibest)
[![star](https://gitee.com/codercup/unibest/badge/star.svg?theme=dark)](https://gitee.com/codercup/unibest/stargazers)
[![fork](https://gitee.com/codercup/unibest/badge/fork.svg?theme=dark)](https://gitee.com/codercup/unibest/members)![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/codercup/unibest)
![GitHub License](https://img.shields.io/github/license/codercup/unibest)

</div>

<div align="center"><b>unibest 是由 uniapp + Vue3 + Ts + Vite4 + UnoCss + UniUI 驱动的跨端快速启动模板，使用 VS Code 开发，具有代码提示、自动格式化、统一配置、代码片段等功能，同时内置了大量平时开发常用的基本组件，开箱即用，让你编写 uniapp 拥有 best 体验。</b></div>

![](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## ✨ 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - 就是快！

- 🔥 最新语法：使用新的 `<script setup>` 语法

- 🎨 [UnoCSS](https://unocss.dev/) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 🍍 [pinia](https://pinia.vuejs.org/) & [pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/) - 全端适配的全局数据管理

- 🦾 [TypeScript](https://www.typescriptlang.org/) & [ESLint](https://eslint.org/) & [stylelint](https://stylelint.io/) - 保证代码质量

- 😃 [UnoCSS Icons](https://unocss.dev/presets/icons) & [icones](https://icones.js.org/) - 海量图标供你选择

- 📦 [组件自动化加载](./src/components) - 可配置化的组件加载方式，轻松加载组件

- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入

- 🌈 [husky](https://typicode.github.io/husky/) & [lint-staged](https://github.com/lint-staged/lint-staged) + [commitlint](https://commitlint.js.org/) - 保证代码提交质量

- 🎉 `v3` Code Snippets 加快你的页面生成

- 🗂 `uni.request` & `uni.addInterceptor` - 封装好的请求拦截，一键引入

- 💡 ES6 import 顺序自动排序，css 属性自动排序，增强编码一致性

- 🖥 多环境配置分开，想则怎么配置就怎么配置

## 🗂 业务功能

- [x] 页面下拉刷新（全局+局部）
- [x] 页面上拉加载
- [x] 导航栏返回 or 去首页
- [x] 导航栏渐变（微信+h5+App)
- [x] 自定义导航栏顶部机型适配
- [x] 微信小程序分享（好友+朋友圈）
- [x] 微信登录
- [x] 非微信登录（h5 和 App)
- [x] 微信小程序获取头像昵称+隐私协议
- [x] 微信小程序 vconsole 调试
- [ ] 微信一键登录（基于手机号）- 需要非个人认证用户
- [ ] 仿 BOSS 直聘-个人中心
- [ ] 仿华为商城-个人中心
- [ ] 页面悬浮球(floating bubble)
- [ ] 多 tab 列表功能
- [ ] 瀑布流
- [ ] 头像上传
- [x] 抽奖-九宫格抽奖
- [x] 抽奖-大转盘抽奖
- [ ] 仿网易云音乐 APP（独立项目）
- [ ] 仿网易云音乐 APP（独立项目）

## ⚙️ 环境

- pnpm>=7.30
- node>=18

## 📦 运行（支持热更新）

- web平台： `pnpm dev:h5`, 然后打开 [http://localhost:9100/](http://localhost:9100/)。
- weixin平台：`pnpm dev:mp-weixin` 然后打开微信开发者工具，导入本地文件夹，选择本项目的`dist/dev/mp-weixin` 文件。
- APP平台：`pnpm dev:app`, 然后打开 `HBuilderX`，导入刚刚生成的`dist/dev/app` 文件夹，选择运行到模拟器(开发时优先使用)，或者运行的安卓/ios基座。

## 🔗 发布

- web平台： `pnpm build:h5`，打包后的文件在 `dist/build/h5`，可以放到web服务器，如nginx运行。如果最终不是放在根目录，可以在 `vite.config.ts` 的 `base` 属性进行配置。[vite官网](https://cn.vitejs.dev/config/shared-options.html#base)
- weixin平台：`pnpm build:h5`, 打包后的文件在 `dist/build/mp-weixin`，然后通过微信开发者工具导入，并点击右上角的“上传”按钮进行上传。
- APP平台：`pnpm build:app`, 然后打开 `HBuilderX`，导入刚刚生成的`dist/build/app` 文件夹，选择发行 - APP云打包。

## 🎨 `v3` 代码段

在 `vue` 文件里面输入 `v3` 触发这个代码段。如下图，用户可以在`.vscode/vue3.code-snippets` 里面自行修改。

![v3 snippets](./screenshots/snippets.gif)

## 🌍 License

[MIT](https://opensource.org/license/mit/)

Copyright (c) 2024 菲鸽

## 🤝 给作者加鸡腿

如果对你有帮助，请给作者加鸡腿~

> 一毛钱也是鼓励 ^\_^

<p align='center'>
<img alt="special sponsor appwrite" src="./screenshots/pay-weixin.png" width="200">
<img alt="special sponsor appwrite" src="./screenshots/pay-ali.png" width="200">
</p>

## 官方微信群、QQ群

- 扫码进微信群，如果群名片已过期，请进QQ群（QQ群不会过期）

- 扫码进 QQ 群，备注 `unibest` 即可。

> 微信群7天过期，作者会定期维护，争取读者每次打开都是可用的。

<p align='center'>
<img alt="special sponsor appwrite" src="./screenshots/wx-group.png" width="200">
<img alt="special sponsor appwrite" src="./screenshots/qq-group.png" width="200">
</p>
