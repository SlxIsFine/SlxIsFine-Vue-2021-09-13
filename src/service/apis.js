import { postForm } from "./axiosConfig.js"
import URL from "./urls.js"
/**
 * 检查用户名是否合法
 * @param {*} userName 
 * @returns 
 */
export function checkUserName(userName) {
    let url = URL.checkUser.checkName
    return postForm(url, { userName: userName })
}
/**
 * 获取验证码
 */
export function getCaptcha() {
    let url = URL.captcha.getCaptcha
    return postForm(url)
}
/**
 * 验证验证码
 */
export function verifyCaptcha() {
    let url = URL.captcha.verifyCaptcha
    return postForm(url)
}
