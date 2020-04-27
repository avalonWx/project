/*
 * @Author: 王潇
 * @Date: 2020-04-18 09:58:53
 * @LastEditTime: 2020-04-22 00:41:51
 * @LastEditors: Please set LastEditors
 * @Description: 全局路由配置文件，导航栏的配置根据路由自动化生成
 * @FilePath: /workspace/sie/github/config/route.ts
 */

export const routes = [
  {
    path: '/',
    component: '@/pages/index',
    icon: 'HomeOutlined',
    name: '首页',
  },
  {
    path: '/target',
    component: '@/layouts/index',
    icon: 'FileProtectOutlined',
    name: '指标',
    routes: [
      {
        path: '/target/store',
        component: '@/pages/TargetStore',
        icon: 'GoldOutlined',
        name: '指标库',
      },
      {
        path: '/target/setting',
        component: '@/pages/TargetSetting',
        icon: 'SettingOutlined',
        name: '指标设置',
      },
    ],
  },
  {
    path: '/login',
    component: '@/pages/Login',
    layout: {
      hideMenu: true,
      hideNav: true,
    },
  },
  {
    path: '/404',
    component: '@/pages/404',
    layout: {
      hideMenu: true,
      hideNav: true,
    },
  },
];
