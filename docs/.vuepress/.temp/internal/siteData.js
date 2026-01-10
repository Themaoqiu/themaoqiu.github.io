export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"Xingjian Wang\",\"description\":\"Xingjian Wang's Personal Website | Undergraduate Student at Shanghai University of Electric Power, IMIS. Focus on AI Research, Deep Learning, and Multimodal Large Language Models\",\"head\":[[\"meta\",{\"name\":\"keywords\",\"content\":\"Xingjian Wang, AI Research, Deep Learning, MLLM, Machine Learning, VuePress\"}],[\"meta\",{\"name\":\"author\",\"content\":\"Xingjian Wang\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Xingjian Wang - Undergraduate @ Shanghai University of Electric Power, IMIS\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Personal website of Xingjian Wang, Undergraduate Student at Shanghai University of Electric Power, IMIS. Research interests in AI, Deep Learning, and Multimodal Large Language Models.\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://themaoqiu.github.io\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://themaoqiu.github.io/avatar.png\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"link\",{\"rel\":\"canonical\",\"href\":\"https://themaoqiu.github.io\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
