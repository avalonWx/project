/*
 * @Author: 王潇
 * @Date: 2020-04-21 09:59:10
 * @LastEditTime: 2020-04-27 15:49:03
 * @LastEditors: Please set LastEditors
 * @Description: api接口文件
 * @FilePath: /workspace/sie/github/src/utils/api/service.ts
 */

import { request } from '@/utils/request';

/**
 * @description: 指标库列表、关键字查找；
 * @param {string} params.keyword 可选参数，搜索的关键字,不传参为全部；传参为查找
 * @param {number} params.current 当前页码
 * @param {number} params.pageSize 每页显示条数
 * @returns {Promise<>} 返回值{list: Array, success: 'yes' | 'no'}
 */

interface TargetStoreItems {
  (params: TargetStoreParam): Promise<{
    data: TargetStoreItem[];
    total: number;
  }>;
}

export interface TargetStoreParam {
  keyword?: string;
  current: number;
  pageSize: number;
}

export interface TargetStoreItem {
  name: string;
  status: boolean;
  id: number;
}

export const getTargetStoreItems: TargetStoreItems = async params => {
  return await request
    .get('/target/search', {
      params,
    })
    .then(res => {
      let { list, total } = res;

      let data = list.map((item: TargetStoreItem) => {
        let { name, status, id } = item;
        return {
          id,
          name,
          status: status ? 'effective' : 'invalid',
        };
      });

      return {
        data,
        total,
      };
    });
};
