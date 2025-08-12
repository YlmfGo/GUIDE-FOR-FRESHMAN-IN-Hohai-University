import { defineClientConfig, useRoute } from "vuepress/client";
import { onMounted, watch, nextTick } from "vue";

const SECTION_CLASSES = [
  "sec-start",
  "sec-guide",
  "sec-life",
  "sec-facility",
  "sec-food",
  "sec-study",
];

export default defineClientConfig({
  setup() {
    const route = useRoute();

    const updateSectionClass = (path: string): void => {
      const body = document.body;
      SECTION_CLASSES.forEach((c) => body.classList.remove(c));

      if (path.startsWith("/开始/")) body.classList.add("sec-start");
      else if (path.startsWith("/新生指南/")) body.classList.add("sec-guide");
      else if (path.startsWith("/校园生活/")) body.classList.add("sec-life");
      else if (path.startsWith("/校内设施/"))
        body.classList.add("sec-facility");
      else if (path.startsWith("/商业中心与吃饭/"))
        body.classList.add("sec-food");
      else if (path.startsWith("/学习与个人发展/"))
        body.classList.add("sec-study");
    };

    const shouldEnablePv = (): boolean => {
      // 仅生产域名启用统计
      const host = location.hostname;
      return host === "avoider-leego.top" || host.endsWith("avoider-leego.top");
    };

    const ensureBusuanziLoaded = (): void => {
      if (!(window as any).BUSUANZI && shouldEnablePv()) {
        const existed = document.querySelector(
          'script[src*="busuanzi/2.3/busuanzi.pure.mini.js"]'
        );
        if (!existed) {
          const s = document.createElement("script");
          s.async = true;
          s.defer = true;
          s.src =
            "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
          document.head.appendChild(s);
          s.addEventListener("load", () => {
            // 显示隐藏的容器
            const pv = document.getElementById("busuanzi_container_site_pv");
            const uv = document.getElementById("busuanzi_container_site_uv");
            if (pv) pv.style.display = "inline";
            if (uv) uv.style.display = "inline";
          });
        }
      }
    };

    const refreshBusuanzi = (): void => {
      if (!shouldEnablePv()) return;
      // 触发不蒜子在路由切换后的重统计
      if ((window as any).BUSUANZI && (window as any).BUSUANZI.fetch) {
        (window as any).BUSUANZI.fetch();
      }
    };

    onMounted(() => {
      updateSectionClass(route.path);
      ensureBusuanziLoaded();
      // 初次渲染后尝试刷新一次
      nextTick(() => refreshBusuanzi());
    });
    watch(
      () => route.path,
      (p) => {
        updateSectionClass(p);
        nextTick(() => refreshBusuanzi());
      }
    );
  },
});
