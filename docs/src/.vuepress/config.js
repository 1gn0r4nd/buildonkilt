const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Build on Kilt',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: '/img/logo.png',
    nav: [
      {
        text: 'Learn',
        link: '/learn/',
      },
      {
        text: 'Build',
        link: '/build/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'Contribute',
        items: [
          { text: 'GitHub', link: 'https://github.com/1gn0r4nd/buildonkilt', rel: false },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      {
        text: 'Kilt',
        link: 'https://www.kilt.io/',
        rel:false
      }
    ],
    sidebar: {
      '/learn/': [
        {
          title: 'About Us',
          collapsable: true,
          children: [
            'goal',
            'target_audience',
            'affiliation'
          ]
        },
        {
          title: 'KILT',
          collapsable: true,
          children: [
            'DID',
            'CType',
            'Issuer',
            'Credential',
            'Attester',
          ]
        },
        {
          title: 'Terminology',
          collapsable: true,
          children: [
            'DID',
            'CType',
            'Issuer',
            'Credential',
            'Attester',
          ]
        },
        {
          title: 'Success stories',
          collapsable: true,
          children: [
            'socialkyc'
          ]
        }

      ],
      '/build/': [
        {
          title: 'Developing on KILT',
          collapsable: false,
          children: [
            '',
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
