<template>
  <view class="default-layout">
    <slot />
    <wd-toast />
    <wd-message-box />
  </view>
</template>

<style lang="scss">
.default-layout {
  height: 100vh;
  overflow: auto;
}
</style>
