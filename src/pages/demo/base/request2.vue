<route lang="json5">
{
  layout: 'demo',
  style: {
    navigationBarTitleText: '请求(状态一体化)',
  },
}
</route>

<template>
  <view class="mt-6">
    <RequestComp />
    <UploadComp />
  </view>
</template>

<script lang="ts" setup>
import RequestComp from './components/request.vue'
import UploadComp from './components/upload.vue'
</script>
