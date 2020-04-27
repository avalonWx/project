/*
 * @Author: 王潇
 * @Date: 2020-04-22 00:25:25
 * @LastEditTime: 2020-04-27 11:03:43
 * @LastEditors: Please set LastEditors
 * @Description: mock api 模拟本地接口
 * @FilePath: /workspace/sie/github/mock/api.ts
 */

import { mock } from 'mockjs';

export default {
  // 支持值为 Object 和 Array
  '/target/search': mock({
    'list|100': [
      {
        name: '@pick(["学历", "部门经历", "工作经验"])',
        status: '@boolean',
        id: '@guid',
      },
    ],
    'total|1-100': 100,
    success: 'yes',
    messages: '数据异常，请联系管理员！',
  }),
  '/target/search2': (req: any, res: any) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(500).send({ message: 'something blew up' });
    /* res.send(mock({
                'list|100': [{ name: '@pick(["学历", "部门经历", "工作经验"])', status:'@boolean', id: '@guid' }],
                'ok' : false
            })) */
  },
};
