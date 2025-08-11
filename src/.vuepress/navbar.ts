import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    link: "/",
    icon: "fluent-emoji:house",
  },
  {
    text: "开始",
    link: "/开始/",
    icon: "fluent-emoji:rocket",
  },
  {
    text: "新生指南",
    link: "/新生指南/",
    icon: "fluent-emoji:open-book",
  },
  {
    text: "校园生活",
    link: "/校园生活/",
    icon: "fluent-emoji:school",
  },
  {
    text: "设施服务",
    icon: "fluent-emoji:office-building",
    children: [
      {
        text: "校内设施",
        link: "/校内设施/",
        icon: "fluent-emoji:office-building",
      },
      {
        text: "商业中心与吃饭",
        link: "/商业中心与吃饭/",
        icon: "fluent-emoji:fork-and-knife",
      },
    ],
  },
  {
    text: "学习发展",
    link: "/学习与个人发展/",
    icon: "fluent-emoji:graduation-cap",
  },
]);
