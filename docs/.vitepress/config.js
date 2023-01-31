import { defineConfig } from 'vitepress'
import nav from './configs/nav'
import sidebar from './configs/sidebar'
import footer from './configs/footer'

const base = '/'

export default defineConfig({
  title: 'niubility-ui',
  description: 'zhangzechao de ui',
  appearance: 'dark',
  base,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/images/much-more-icon.svg'
      }
    ]
  ],
  lastUpdated: true,
  themeConfig: {
    logo: '/images/much-more-icon.svg',
    nav,
    sidebar,
    footer,
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: "最近更新时间"
  }
})
