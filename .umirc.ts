import { defineConfig } from 'umi';
import { routes } from './config/route';

export default defineConfig({
  antd: {
    dark: true,
  },
  layout: {
    theme: 'pro',
    fixedHeader: true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  sass: {
    implementation: require('node-sass'),
  },
});
