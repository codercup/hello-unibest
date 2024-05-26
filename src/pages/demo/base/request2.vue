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
    <view class="text-2xl my-2 text-red-600">1-普通请求</view>
    <RequestComp />

    <view class="text-2xl my-2 text-red-600">2-上传图片</view>
    <UploadComp />
    <view class="text-2xl my-2 text-red-600">3-并发请求</view>
    <Request2Comp />
  </view>
</template>

<script lang="ts" setup>
import RequestComp from './components/request.vue'
import Request2Comp from './components/request2.vue'
import UploadComp from './components/upload.vue'
</script>
