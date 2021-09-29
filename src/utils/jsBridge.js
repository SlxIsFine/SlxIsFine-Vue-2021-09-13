import { getCaptcha,verifyCaptcha } from "@/service/apis.js"
const apiMap = {
    getCaptcha,
    verifyCaptcha
}
window.onIframeMessage = function (name, args) {
    //根据映射关系找到相应的函数并调用
    let func = apiMap[name]
    if (func) {
        return func(...args)
    }
    //默认返回错误信息
    return new Promise((resolve, reject) => {
        reject({ code: 0, msg: "cannot find function" })
    })

}

