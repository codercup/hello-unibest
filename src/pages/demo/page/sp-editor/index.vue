<route lang="json5">
{
  layout: 'demo',
  style: { navigationBarTitleText: '富文本' },
}
</route>

<template>
  <view class="home">
    <view class="editor-box">
      <sp-editor
        :toolbar-config="{
          excludeKeys: ['direction', 'date', 'lineHeight', 'letterSpacing', 'listCheck'],
          iconSize: '18px',
        }"
        @init="initEditor"
        @input="inputOver"
        @upinImage="upinImage"
        @overMax="overMax"
        @addLink="addLink"
        @exportHtml="exportHtml"
      ></sp-editor>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const editorIns = ref(null)

/**
 * 获取输入内容
 * @param {Object} e {html,text} 内容的html文本，和text文本
 */
function inputOver(e) {
  // 可以在此处获取到编辑器已编辑的内容
  console.log('==== inputOver :', e)
}

/**
 * 超出最大内容限制
 * @param {Object} e {html,text} 内容的html文本，和text文本
 */
function overMax(e) {
  // 若设置了最大字数限制，可在此处触发超出限制的回调
  console.log('==== overMax :', e)
}

/**
 * 编辑器就绪
 * @param {Object} editor 编辑器实例，你可以自定义调用editor实例的方法
 * @tutorial editor组件 https://uniapp.dcloud.net.cn/component/editor.html#editor-%E7%BB%84%E4%BB%B6
 * @tutorial 相关api https://uniapp.dcloud.net.cn/api/media/editor-context.html
 */
function initEditor(editor) {
  editorIns.value = editor // 保存编辑器实例
  // 保存编辑器实例后，可以在此处获取后端数据，并赋值给编辑器初始化内容
  preRender()
}

function preRender() {
  setTimeout(() => {
    // 异步获取后端数据后，初始化编辑器内容
    editorIns.value.setContents({
      html: `<div>&nbsp;&nbsp;猫猫<img src="https://img.yzcdn.cn/vant/cat.jpeg"/></div>`,
    })
  }, 1000)
}

/**
 * 直接运行示例工程插入图片无法正常显示的看这里
 * 因为插件默认采用云端存储图片的方式
 * 以$emit('upinImage', tempFiles, this.editorCtx)的方式回调
 * @param {Object} tempFiles
 * @param {Object} editorCtx
 */
function upinImage(tempFiles, editorCtx) {
  /**
   * 本地临时插入图片预览
   * 注意：这里仅是示例本地图片预览，因为需要将图片先上传到云端，再将图片插入到编辑器中
   * 正式开发时，还请将此处注释，并解开下面 使用 uniCloud.uploadFile 上传图片的示例方法 的注释
   * @tutorial https://uniapp.dcloud.net.cn/api/media/editor-context.html#editorcontext-insertimage
   */
  // #ifdef MP-WEIXIN
  // 注意微信小程序的图片路径是在tempFilePath字段中
  editorCtx.insertImage({
    src: tempFiles[0].tempFilePath,
    width: '80%', // 默认不建议铺满宽度100%，预留一点空隙以便用户编辑
    success: function () {},
  })
  // #endif

  // #ifndef MP-WEIXIN
  editorCtx.insertImage({
    src: tempFiles[0].path,
    width: '80%', // 默认不建议铺满宽度100%，预留一点空隙以便用户编辑
    success: function () {},
  })
  // #endif

  /**
   * 使用 uniCloud.uploadFile 上传图片的示例方法（可适用多选上传）
   * 正式开发环境中，请将上面 本地临时插入图片预览 注释后，模仿以下写法
   */
  // tempFiles.forEach(async (item) => {
  //   uni.showLoading({
  //     title: '上传中请稍后',
  //     mask: true
  //   })
  //   let upfile = await uniCloud.uploadFile({
  //     filePath: item.path,
  //     // 同名会导致报错 policy_does_not_allow_file_overwrite
  //     // cloudPath可由 想要存储的文件夹/文件名 拼接，若不拼文件夹名则默认存储在cloudstorage文件夹中
  //     cloudPath: `cloudstorage/${item.name}`,
  //     cloudPathAsRealPath: true
  //   })
  //   editorCtx.insertImage({
  //     src: upfile.fileID,
  //     width: '80%', // 默认不建议铺满宽度100%，预留一点空隙以便用户编辑
  //     success: function () {
  //       uni.hideLoading()
  //     }
  //   })
  // })
}

/**
 * 导出 - toolbar需要开启export工具
 * @param {string} e 导出的html内容
 */
function exportHtml(e) {
  uni.navigateTo({
    url: '/pages/out/out',
    success(res) {
      // 传至导出页面解析即可
      res.eventChannel.emit('e-transmit-html', {
        data: e,
      })
    },
  })
}

/**
 * 添加超链接
 * @param {Object} e { text: '链接描述', href: '链接地址' }
 */
function addLink(e) {
  console.log('==== addLink :', e)
}
</script>
