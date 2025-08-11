import { defineClientConfig, useRoute } from "vuepress/client";
import { onMounted, watch } from "vue";

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

    onMounted(() => updateSectionClass(route.path));
    watch(
      () => route.path,
      (p) => updateSectionClass(p)
    );
  },
});
