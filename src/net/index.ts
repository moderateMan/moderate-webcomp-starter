/**
 * 网络请求配置
 */
import axios from "axios";
const { NODE_ENV } = process.env;

let publicPath = "/api";
if (NODE_ENV === "development") {
  /*联调服务器地址，前提是该地址的服务支持跨域请求*/
  // publicPath = "http://*.*.*.*:*/api";
}
const ERR_CODE_LIST = {
  //常见错误码列表
  [400]: "请求错误",
  [401]: "登录失效或在其他地方已登录",
  [403]: "拒绝访问",
  [404]: "请求地址出错",
  [408]: "请求超时",
  [500]: "服务器内部错误",
  [501]: "服务未实现",
  [502]: "网关错误",
  [503]: "服务不可用",
  [504]: "网关超时",
  [505]: "HTTP版本不受支持",
};
class Request {
  _axiosInstance: any;
  constructor(props?: any) {
    /* 创建axios实例，在这里可以设置请求的默认配置 */
    this._axiosInstance = axios.create({
      /* 超时10s */
      timeout: 10000,
      /* 发布环境的baseURL或开发环境的反向代理所匹配的值 */
      baseURL: publicPath,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "X-Requested-With": "XMLHttpRequest",
      },
      /* 是给服务器用的,标识是ajax(异步)请求 */
    });
  }
  
  
  /**
   * 封装get方法
   * @param url  请求url
   * @param params  请求参数
   * @returns {Promise}
   */
  get(url: string, params = {}) {
    return new Promise((resolve, reject) => {
      this._axiosInstance
        .get(url, {
          params: params,
        })
        .then((response: any) => {
          resolve(response.data);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  /**
   * 封装post请求
   * @param url
   * @param params
   * @returns {Promise}
   */
  post(url: string, params = {}, config: { [key: string]: any } = {}) {
    return new Promise((resolve, reject) => {
      if (typeof params === "object") {
        if (params.constructor.name === "FormData") {
          config["Content-Type"] = "multipart/form-data";
        }
      }
      this._axiosInstance.post(url, params, config).then(
        (response: any) => {
          resolve(response.data);
        },
        (err: any) => {
          reject(err);
        }
      );
    });
  }

  /**
   * 封装patch请求
   * @param url
   * @param params
   * @returns {Promise}
   */
  patch(url: string, params = {}) {
    return new Promise((resolve, reject) => {
      this._axiosInstance.patch(url, params).then(
        (response: any) => {
          resolve(response.data);
        },
        (err: any) => {
          reject(err);
        }
      );
    });
  }

  /**
   * 封装put请求
   * @param url
   * @param params
   * @returns {Promise}
   */
  put(url: string, params = {}) {
    return new Promise((resolve, reject) => {
      this._axiosInstance.put(url, params).then(
        (response: any) => {
          resolve(response.data);
        },
        (err: any) => {
          reject(err);
        }
      );
    });
  }
}

export default new Request();
