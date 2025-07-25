import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "河海大学不完全入学指北",
  description: "河海大学不完全入学指北的 VuePress 站点",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
