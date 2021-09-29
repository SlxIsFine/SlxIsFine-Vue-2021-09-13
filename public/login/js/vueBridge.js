/**
 * 连接vue的中间文件。
 */
let parent = window.parent
function invokeVue(name, ...params) {
    if (parent && parent.onIframeMessage) {
        return parent.onIframeMessage(name, params)
    }
    return new Promise((resolve, reject) => {
        reject("cannot find parent")
    })
}