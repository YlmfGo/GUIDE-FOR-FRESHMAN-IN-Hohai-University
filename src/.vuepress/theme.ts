import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://avoider-leego.top",

  author: {
    name: "河海大学不完全入学指北编辑部",
  },

  logo: "/logo.png",
  logoDark: "/logo.png",

  // 恢复 repo 配置
  repo: "Avoidman2233/GUIDE-FOR-FRESHMAN-IN-Hohai-University",
  repoLabel: "GitHub",
  docsRepo: "Avoidman2233/GUIDE-FOR-FRESHMAN-IN-Hohai-University",
  docsBranch: "main",
  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  displayFooter: true,
  footer:
    '<div style="width:100%;max-width:720px;margin:0 auto;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' +
    '<a href="https://beian.miit.gov.cn/" target="_blank" style="text-decoration:none;" rel="noopener">' +
    '<span style="color:#939393;font-size:12px;vertical-align:middle;">苏ICP备2025175705号</span>' +
    "</a>" +
    '<span id="busuanzi_container_site_pv" style="display:none;margin-left:12px;color:#939393;font-size:12px;">总访问量 ' +
    '<span id="busuanzi_value_site_pv"></span>' +
    "</span>" +
    '<span id="busuanzi_container_site_uv" style="display:none;margin-left:12px;color:#939393;font-size:12px;">总访客数 ' +
    '<span id="busuanzi_value_site_uv"></span>' +
    "</span>" +
    "</div>",
  copyright:
    "GPL Licensed | Copyright © 河海大学不完全入学指北编辑部 2024 all right reserved",

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
    },
  },

  // 恢复编辑链接
  editLink: true,

  // 使用 metaLocales 配置多语言下的编辑链接文字
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 禁用贡献者列表
  contributors: false,

  // 保留最后更新时间
  lastUpdated: true,

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    flowchart: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // 取消注释它们如果你需要 TeX 支持
    math: {
      type: "katex",
    },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    // 禁用评论功能
    comment: false,

    components: {
      components: ["Badge", "VPCard"],
    },
    // 通过主题内置方式启用 sitemap 与 git，hostname 已在上方 theme 配置中提供
    sitemap: true,
    git: true,

    icon: {
      prefix: "fluent-emoji:",
    },

    copyright: {
      // 禁用复制
      disableCopy: true,

      // 禁用选择
      disableSelection: true,
    },

    watermark: {
      watermarkOptions: {
        content: "河海大学入学指北编辑部",
        movable: true,
        globalAlpha: 0.08,
      },
    },
    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
