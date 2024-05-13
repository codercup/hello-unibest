// 标识必须独一无二 - 标识是为了使用insertText插入标识文本后，查找到标识所在delta位置的索引
export const linkFlag = '#-*=*-*=*-*=*@-link超链接标识link-@*=*-*=*-*=*-#'

export function addLink(editorCtx, attr) {
  // 先插入一段文本内容
  editorCtx.insertText({
    text: linkFlag
  })
  // 获取全文delta内容
  editorCtx.getContents({
    success(res) {
      let options = res.delta.ops
      const findex = options.findIndex(item => {
        return item.insert && typeof item.insert !== 'object' && item.insert?.indexOf(linkFlag) !== -1
      })
      // 根据标识查找到插入的位置
      if (findex > -1) {
        const findOption = options[findex]
        const findAttributes = findOption.attributes
        // 将该findOption分成三部分：前内容 要插入的link 后内容
        const [prefix, suffix] = findOption.insert.split(linkFlag);
        const handleOps = []
        // 前内容
        if (prefix) {
          const prefixOps = findAttributes ? {
            insert: prefix,
            attributes: findAttributes
          } : {
            insert: prefix
          }
          handleOps.push(prefixOps)
        }
        // 插入的link
        const linkOps = {
          insert: attr.text,
          attributes: {
            link: attr.href,
            textDecoration: attr.textDecoration || 'none', // 下划线
            color: attr.color || '#007aff'
          }
        }
        handleOps.push(linkOps)
        // 后内容
        if (suffix) {
          const suffixOps = findAttributes ? {
            insert: suffix,
            attributes: findAttributes
          } : {
            insert: suffix
          }
          handleOps.push(suffixOps)
        }
        // 删除原options[findex]并在findex位置插入上述三个ops
        options.splice(findex, 1);
        options.splice(findex, 0, ...handleOps);
        // 最后重新初始化内容，注意该方法会导致光标重置到最开始位置
        editorCtx.setContents({
          delta: {
            ops: options
          }
        })
        // 所以最后建议使富文本光标失焦，让用户手动聚焦光标
        editorCtx.blur()
      }
    }
  })

}