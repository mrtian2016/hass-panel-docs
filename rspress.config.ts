import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Hass Panel',
  logoText: 'Hass Panel',
  lang: 'zh',
  icon: '/icon.png',
  logo: {
    light: '/icon.png',
    dark: '/icon.png',
  },
  locales: [
    {
      lang: 'en',
      // 导航栏切换语言的标签
      label: 'English',
      title: 'Hass Panel',
      description: 'A modern home automation control panel, fully integrated with Home Assistant',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: 'Hass Panel',
      description: '一个现代化的智能家居控制面板，完美集成Home Assistant',
    },
  ],
  themeConfig: {
    nav: [
      {
        text: 'guide',
        link: '/guide/install',
      },
      {
        text: 'community',
        link: '/community/index',
      },
      {
        text: 'sponsor',
        link: '/sponsor/index',
      },  
    ],
    footer: {
      message: 'Copyright © 2024-2025 Hass Panel｜备案号：<a href="https://beian.miit.gov.cn/">冀ICP备16022207号-5</a>',
    },
    sidebar: {
      // 中文侧边栏
      '/guide/': [
        {
          text: '安装',
          link: '/guide/install',
        },
        {
          text: '使用',
          link: '/guide/usage',
        },
      ],
      '/community/': [
        {
          text: '社区',
          link: '/community/index',
        },
      ],
      '/sponsor/': [
        {
          text: '赞赏',
          link: '/sponsor/index',
        },
      ],
      // 英文侧边栏
      '/en/guide/': [
        {
          text: 'Installation',
          link: '/en/guide/install',
        },
        {
          text: 'Usage',
          link: '/en/guide/usage',
        },
      ],
      '/en/community/': [
        {
          text: 'Community',
          link: '/en/community/index',
        },
      ],
      '/en/sponsor/': [
        {
          text: 'Sponsor',
          link: '/en/sponsor/index',
        },
      ],
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/mrtian2016/hass-panel',
      },
    ],
  },
});
