<route lang="json5" type="page">
{
  style: { navigationBarTitleText: 'uv ui' },
}
</route>

<template>
  <view class="mt-10">
    <uv-button type="primary" @click="remakeQc">重新生成二维码</uv-button>
    <view class="center mt-8">
      <uv-qrcode
        ref="qrcode"
        size="200px"
        value="https://h5.uvui.cn"
        :options="options"
      ></uv-qrcode>
    </view>
    <view class="m-4 flex">
      <uv-icon name="home"></uv-icon>
      <uv-icon name="home" color="red"></uv-icon>
      <uv-icon name="home" class="text-green"></uv-icon>
      <uv-icon name="home" color="red" class="text-green"></uv-icon>
      <uv-icon name="home" color="red" class="text-green" size="20"></uv-icon>
      <uv-icon name="home" color="red" class="text-green w-10 h-10" size="20"></uv-icon>
      <uv-icon name="home" color="red" class="text-green w-20 h-20"></uv-icon>
      <uv-icon name="home" color="red" class="text-green w-10" size="20"></uv-icon>

      <uv-icon :name="iconName"></uv-icon>
    </view>
    <view class="m-4">
      <view>富文本也是支持的：</view>
      <uv-parse :content="content"></uv-parse>
    </view>

    <uv-popup ref="popup" @change="change">
      <view>
        <text>
          丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。 明月几时有？把酒问青天。
          不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。
          转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。
          但愿人长久，千里共婵娟。
        </text>
      </view>
    </uv-popup>
    <button @click="open">打开</button>
  </view>
</template>

<script lang="ts" setup>
const content = `<div>
					<p style="color:red;" >露从今夜白，月是故乡明</p>
					<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
          </div>
				`

console.log(uni.$uv.os())
console.log(uni.$uv.sys())
console.log(uni.$uv.trim(' abc ')) // 去除两端空格
console.log(uni.$uv.random(1, 3)) // 获取随机数
const qrcode = ref(null)
const options = reactive({
  size: 300,
  useDynamicSize: false,
  margin: 10,
  backgroundColor: '#fff',
  // 指定二维码前景，一般可在中间放logo
  foregroundImageSrc: '/static/logo.svg',
})
const remakeQc = () => {
  qrcode.value.remake({
    success: () => {
      console.log('生成成功')
    },
    fail: (err) => {
      console.log(err)
    },
  })
}

const iconName = ref<string>('level')
onLoad(() => {
  setTimeout(() => {
    iconName.value = 'chat'
  }, 1000)
})

const popup = ref()
const open = () => {
  popup.value?.open()
}
const change = (e) => {
  console.log('弹窗状态改变：', e)
}
</script>

<style lang="scss" scoped>
//
</style>
