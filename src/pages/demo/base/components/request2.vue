<route lang="json5">
{
  layout: 'demo',
  style: {
    navigationBarTitleText: '请求',
  },
}
</route>

<template>
  <view class="p-6 text-center">
    <!-- http://localhost:9000/#/pages/index/request -->
    <wd-button @click="getFoo" class="my-6">发送请求</wd-button>
    <view class="h-12">
      <view v-if="loading1">loading...</view>
      <block v-else>
        <view class="text-xl">请求数据如下</view>
        <view class="text-green leading-8">{{ JSON.stringify(data1) }}</view>
      </block>
    </view>
    <wd-button @click="getBar" class="my-6">发送请求2</wd-button>
    <view class="h-12">
      <view v-if="loading2">loading...</view>
      <block v-else>
        <view class="text-xl">请求数据如下</view>
        <view class="text-green leading-8">{{ JSON.stringify(data2) }}</view>
      </block>
    </view>
    <wd-button type="error" @click="reset" class="my-6" :disabled="!data1 || !data2">
      重置数据
    </wd-button>
    <wd-button type="success" @click="getAllData" class="my-6 ml-2" :disabled="!!data1 || !!data2">
      同时发送请求
    </wd-button>
  </view>
</template>

<script lang="ts" setup>
import { getFooAPI, postFooAPI, IFooItem } from '@/service/foo'

// 适合少部分全局性的接口————多个页面都需要的请求接口，额外编写一个 Service 层
const {
  loading: loading1,
  error: err1,
  data: data1,
  run: getFoo,
} = useRequest<IFooItem>(() => getFooAPI('菲鸽'))
const {
  loading: loading2,
  error: err2,
  data: data2,
  run: getBar,
} = useRequest<IFooItem>(() => postFooAPI('菲鸽222'))
const reset = () => {
  data1.value = undefined
  data2.value = undefined
}
const getAllData = () => {
  getFoo()
  getBar()
}
</script>
