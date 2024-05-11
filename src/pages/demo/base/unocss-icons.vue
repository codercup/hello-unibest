<route lang="json5">
{
  layout: 'demo',
  style: { navigationBarTitleText: 'UnoCss Icons 使用' },
}
</route>

<template>
  <view class="m-4">
    <view class="mb-2">
      这里只装了carbon的图表库，网址：
      <a href="https://icones.js.org/collection/carbon" target="_blank">
        https://icones.js.org/collection/carbon
      </a>
      (非H5环境，请使用浏览器打开)
    </view>
    <view class="i-carbon-car" />
    <view class="i-carbon-car text-red" />
    <button class="i-carbon-sun dark:i-carbon-moon" />
    <view class="h-10"></view>
    <view class="i-carbon-user-avatar text-red" />
    <view :class="`i-carbon-user-avatar`" />
    <view class="ml-2"></view>
    <view :class="iconName" />
    <view :class="iconName2" />
    <view>经过测试，动态图片只在同一个文件里面生效，从别的文件导入的不生效</view>
  </view>
</template>

<script lang="ts" setup>
import { icon } from './unocss-icon'
const iconName = ref<string>('i-carbon-car')
const iconName2 = ref<string>('i-carbon-car')
onLoad(() => {
  setTimeout(() => {
    iconName.value = 'i-carbon-user-avatar'
    iconName.value = icon
  }, 1000)
})
</script>
