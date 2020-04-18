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
  },
  antd: {
    dark: true,
  },
});
