import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Moderate WebComp',
  mode: 'site',
  // more config: https://d.umijs.org/config
  locales: [['zh-CN', '中文']],
  logo: '/images/logo.png',
  base: '/moderate-webcomp-starter',
  publicPath: '/moderate-webcomp-starter/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
});
