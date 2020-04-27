/*
 * @Author: 请求库
 * @Date: 2020-04-22 21:10:27
 * @LastEditTime: 2020-04-27 11:03:04
 * @LastEditors: Please set LastEditors
 * @Description: 请求方法的实例进行二次封装，使用的是umi-request
 * @FilePath: /workspace/sie/github/src/utils/request.ts
 */
import { getStatusText } from 'http-status-codes';
import { extend } from 'umi-request';
import { message, notification } from 'antd';

export const request = extend({
  /* prefix: '/api', */
  timeout: 1000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  throwErrIfParseFail: true,
  errorHandler: error => {
    let {
      data,
      request,
      response: { status, headers },
    } = error;

    if (error.response) {
      // 请求已发送但服务端返回状态码非 2xx 的响应
      console.log(status);
      console.log(headers);
      console.log(data);
      console.log(request);

      notification.error({
        message: `服务器错误！${status}`,
        description: getStatusText(status),
      });
    } else {
      // 请求初始化时出错或者没有响应返回的异常
      console.log(error.message);

      notification.error({
        message: `请求错误！`,
        description: error.message,
      });
    }
    throw error; // 如果throw. 错误将继续抛出.
    //如果return, 则将值作为返回. 'return;' 相当于return undefined, 在处理结果时判断response是否有值即可.
    // return {some: 'data'};
  },
});
/**
 * @description: 响应数据拦截器，可在这里做登录过期跳转登录页面的拦截
 */
request.interceptors.response.use(async response => {
  return response;
});

/**
 * @description: 类 koa 的洋葱机制，让开发者优雅地做请求前后的增强处理，支持创建实例、全局、内核中间件。
 * @param: {Object} ctx 上下文对象，包括req和res对象
 * @return: {Function} 调用下一个中间件的函数
 */
request.use(async (ctx, next) => {
  await next();

  const { res } = ctx;

  const { success = 'no', messages } = res;
  if (success === 'no' || success === false) {
    // 对异常情况做对应处理
    message.error(messages);
    throw { message: messages };
  }
});
