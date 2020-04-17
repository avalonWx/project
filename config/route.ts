import { IRoute } from 'umi-types';

export const routes: IRoute[] = [
  {
    path: '/',
    component: '@/pages/index',
    icon: 'HomeOutlined',
    menu: {
      name: '首页',
    },
  },
  {
    path: '/target',
    component: '@/layouts/index',
    menu: {
      name: '指标',
    },
    routes: [
      {
        path: '/target/store',
        component: '@/pages/TargetStore',
        icon: 'GoldOutlined',
        menu: {
          name: '指标库',
        },
      },
      {
        path: '/target/setting',
        component: '@/pages/TargetSetting',
        icon: 'SettingOutlined',
        menu: {
          name: '指标设置',
        },
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
