import { IRoute } from 'umi-types'

export const routes: IRoute[] =  [
    { 
        path: '/', 
        component: '@/pages/index',
        menu: {
            name: '首页',
            icon: 'HomeOutlined',
        },
    },
    { 
        path: '/target',
        component: '@/layouts/index',
        menu: {
            name: '指标',
            icon: 'PicRightOutlined',
        },
        routes:[
            { 
                path: '/target/store',
                component: '@/pages/TargetStore',
                menu: {
                    name: '指标库',
                    icon: 'GoldOutlined',
                }
            },
            { 
                path: '/target/setting', 
                component: '@/pages/TargetSetting',
                menu: {
                    name: '指标设置',
                    icon: 'SettingOutlined',
                }
            },
        ]
    },
    { 
        path: '/login', 
        component: '@/pages/Login',
        layout : {
            hideMenu : true,
            hideNav  : true
        }
    },
    {
        path: '/404', 
        component: '@/pages/404',
        layout : {
            hideMenu : true,
            hideNav  : true
        }
    },
]