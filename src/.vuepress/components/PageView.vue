<template>
  <span class="pageview" v-if="enabled">
    阅读量：
    <span class="busuanzi-value" :id="id" data-flag-title="page-pv"></span>
  </span>
  <span v-else class="pageview">阅读量：--</span>
  <!-- 不蒜子会自动填充具有 class="busuanzi-value" 的元素，
       对于单页 PV 需要 id="busuanzi_value_page_pv" 或自定义容器并调用 fetch -->
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const enabled = ref(true);
const id = "busuanzi_value_page_pv";

onMounted(() => {
  // 如果脚本不可用，降级隐藏占位
  const scriptOk = typeof (window as any).BUSUANZI !== "undefined";
  if (!scriptOk) {
    // 延迟再试一次，等待脚本加载
    setTimeout(() => {
      if (typeof (window as any).BUSUANZI === "undefined")
        enabled.value = false;
    }, 2000);
  }
});
</script>

<style scoped>
.pageview {
  font-size: 0.9em;
  opacity: 0.8;
}
</style>
