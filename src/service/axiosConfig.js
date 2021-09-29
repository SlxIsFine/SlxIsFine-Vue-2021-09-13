/**
 * axios 配置
 */
// import Vue from "vue";
import axios from "axios";
// import { Message, Loading } from "element-ui";
// 响应时间
axios.defaults.timeout = 10 * 1000;
// 配置cookie
// axios.defaults.withCredentials = true
// 配置请求头
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded,application/xml;charset=UTF-8";
// 静态资源
// Vue.prototype.$static = "";
// let _this = new Vue();

// 配置接口地址
axios.defaults.baseURL = "";
var loadingInstance;
let loadText = "";

// const //initLoading = (loading = {}) => {
//     if (loading) {
//         _this.$loading.show();
//     }
// };
// const loadingCLose = () => {
//     _this.$loading.close();
// };
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
    (config) => {
        // _this.$loading.show();
        // if (loadText !== "") {
        //   loadingInstance = Loading.service({
        //     lock: true,
        //     text: loadText === undefined ? "数据加载中，请稍后..." : loadText,
        //     spinner: "el-icon-loading",
        //     background: "rgba(0, 0, 0, .1)",
        //   });
        // }

        // if (config.method === 'post') {
        //     config.data = qs.stringify(config.data)
        // }
        // config.headers.common.Accept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;image/png";
        return config;
    },
    (err) => {
        // //loadingCLose()
        // loadingInstance ? (loadingInstance ? loadingInstance.close() : "") : "";
        // Message.error('请求错误')
        return Promise.reject(err);
    }
);
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
    (res) => {
        // debugger
        if (
            res.data.Collections ||
            res.data.success === true ||
            res.data.CODE === "1" ||
            res.data.CODE === "2" ||
            res.data.code === "1" ||
            res.data.code === 1 ||
            res.data.code === "2" ||
            res.data.length >= 0 ||
            res.data.status === "ok" ||
            res.data instanceof Blob ||
            res.data.data.code === "1" ||
            res.config.url.endsWith(".json")
        ) {
            // //loadingCLose()
            return res;
        } else {
            // //loadingCLose()
            // Message.error(res.data.msg);
        }
    },
    (err) => {
        // //loadingCLose()
        // Message.error('请求失败，请稍后再试')
        return Promise.reject(err);
    }
);
// 发送请求
export function fetchPost(url, params, config, loading) {
    //initLoading(loading)
    return new Promise((resolve, reject) => {
        axios
            .post(url, params, config)
            .then(
                (res) => {
                    resolve(res.data);
                    //loadingCLose()
                },
                (err) => {
                    reject(err.data);
                    //loadingCLose()
                }
            )
            .catch((err) => {
                reject(err.data);
                ////loadingCLose()
            });
    });
}
/**
 * 发送formdata，返回值第二个参数以防需要用到header 信息
 * @param {*} url 地址
 * @param {*} formData 
 * @param {*} loading 加载组件，不需要
 * @returns 
 */
export function postForm(url, formData, loading) {
    let data = formData
    if (!(formData instanceof FormData) && formData) {
        data = new FormData()
        for (let key in formData) {
            data.append(key, formData[key])
        }
    }
    //initLoading(loading)
    return new Promise((resolve, reject) => {
        axios
            .post(url, data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(
                (res) => {
                    resolve(res.data);
                    //loadingCLose()
                },
                (err) => {
                    reject(err.data);
                    //loadingCLose()
                }
            )
            .catch((err) => {
                reject(err.data);
                ////loadingCLose()
            });
    });
}
export function fetchGet(url, params, loading) {
    //initLoading(loading)

    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params,
            })
            .then((res) => {
                resolve(res.data);
                //loadingCLose()
            })
            .catch((err) => {
                reject(err.data);
                //loadingCLose()
            });
    });
}

export function fetchGetImg(url, params, loading) {
    //initLoading(loading)
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params,
                responseType: "blob",
                headers: {
                    "Content-Type": "image/png",
                },
            })
            .then((res) => {
                resolve(res.data);
                //loadingCLose()
            })
            .catch((err) => {
                reject(err.data);
                //loadingCLose()
            });
    });
}

export function fetchPostImg(url, params, loading) {
    loadText = text;
    return new Promise((resolve, reject) => {
        axios
            .post(url, params, {
                responseType: "blob",
                // headers: {
                //     'Content-Type': 'image/png'
                // }
            })
            .then(
                (res) => {
                    resolve(res.data);
                    //loadingCLose()
                },
                (err) => {
                    reject(err.data);
                    //loadingCLose()
                }
            )
            .catch((err) => {
                reject(err.data);
                //loadingCLose()
            });
    });
}
export function fetchDelete(url, params, loading) {
    //initLoading(loading)
    return new Promise((resolve, reject) => {
        axios.delete(url, { params }).then((res) => {
            resolve(res.data)
        }).catch(err => reject(err.data)).finally(() => {
            //loadingCLose()
        })
    })
}
export function fetchPut(url, data, config, loading) {
    //initLoading(loading)
    return new Promise((resolve, reject) => {
        axios.put(url, data, config).then((res) => {
            resolve(res.data)
        }).catch(err => reject(err.data)).finally(() => {
            //loadingCLose()
        })
    })

}