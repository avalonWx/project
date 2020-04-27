/*
 * @Author: 王潇
 * @Date: 2020-04-18 09:58:53
 * @LastEditTime: 2020-04-27 11:02:55
 * @LastEditors: Please set LastEditors
 * @Description: 构建时的配置文件，运行时的配置文件请移步src/app.ts
 * @FilePath: /workspace/sie/github/.umirc.ts
 */
import path from 'path';
import { defineConfig } from 'umi';
import { routes } from './config/route';

export default defineConfig({
  layout: {
    fixedHeader: true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  sass: {
    implementation: require('node-sass'),
    sourceMap: true,
    /* prependData: '@import "./src/global.scss";' */
  },
  proxy: {
    '/api': {
      target: 'http://alions.cn/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    memo.module
      .rule('scss-less-custom')
      .test(/\.(scss|less)$/)
      .post()
      .oneOf('normal')
      .use('style-resources')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, './src/utils/style/*.scss'),
          path.resolve(__dirname, './src/utils/style/*.less'),
        ],
        injector: 'append',
      })

      .end()
      .end()
      .end();
    /* .rule('less-custom')
				.test(/\.less$/)
				.oneOf('normal')
					.use('style-resources')
						.loader('style-resources-loader')
						.options({
							patterns: path.resolve(__dirname, './src/global/*.less'),
							injector:'append'
						})
						.end()
					.end()
				.end() */
  },
});
