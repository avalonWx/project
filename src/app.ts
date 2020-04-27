/*
 * @Author: 王潇
 * @Date: 2020-04-13 17:24:37
 * @LastEditTime: 2020-04-27 11:03:23
 * @LastEditors: Please set LastEditors
 * @Description: 项目运行中的配置文件，打包前的配置文件请移步根目录的.umirc.ts
 * @FilePath: /workspace/sie/github/src/app.ts
 */
import rightContentRender from './components/GlobalHeader/RightContent';

interface User {
  name: string;
  useid: number;
}

export interface Initial {
  user: User;
}

export const getInitialState = async (): Promise<Initial> => {
  const user: User = {
    name: 'wangxiao',
    useid: 123456,
  };

  return { user };
};

export const layout = {
  logout: () => {},
  rightContentRender,
};
