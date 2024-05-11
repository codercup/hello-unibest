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
    <view :class="iconName3" />
    <view class="my-4 text-red">经过测试，动态图片从别的文件导入无法生效</view>
    <wd-tabbar-item title="首页" icon="home"></wd-tabbar-item>
    <wd-tabbar-item :value="2" icon="cart" title="分类">
      <template #icon>
        <view :class="iconName2" />
      </template>
    </wd-tabbar-item>
    <wd-tabbar-item :value="2" icon="cart" title="分类">
      <template #icon>
        <view :class="iconName3" />
      </template>
    </wd-tabbar-item>
  </view>
</template>

<script lang="ts" setup>
import { icon, nest } from './unocss-icon'
import { icon2, nest2 } from './unocss-icon.json'

// 只需要把外面的在这里写一遍就能生效了！注释掉也是生效的，但是必须要有
// 'i-carbon-3d-cursor-alt'
const iconName = ref<string>('i-carbon-car')
const iconName2 = ref<string>('i-carbon-car')
const iconName3 = ref<string>('i-carbon-car')
onLoad(() => {
  setTimeout(() => {
    iconName.value = 'i-carbon-4k'
    iconName2.value = icon
    iconName3.value = icon2
  }, 1000)
  setTimeout(() => {
    console.log(nest.nest.icon, nest2.nest2.icon)
    iconName2.value = nest.nest.icon
    iconName3.value = nest2.nest2.icon
  }, 2000)
})
</script>
