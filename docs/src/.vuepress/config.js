import { umamiAnalyticsPlugin } from 'vuepress-plugin-umami-analytics'
import { defaultTheme } from 'vuepress'

const { description } = require('../../package')

let isProd = process.env.NODE_ENV === 'production'

export default {
  locales: {
    '/': {
      lang: 'en-US',
    }
  },
  theme: defaultTheme({
    // default theme config
    colorModeSwitch: true,
    logo: '/img/logo.png',
    logoDark: '/img/logo.png',
    repo: 'https://github.com/1gn0r4nd/buildonkilt',
    repoLabel: 'GitHub',
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Learn',
        link: '/learn/',
      },
      {
        text: 'Build',
        link: '/build/',
      },
      // {
      //   text: 'Contribute',
      //   children: [
      //     { text: 'GitHub', link: 'https://github.com/1gn0r4nd/buildonkilt', rel: false }
      //   ]
      // },
      {
        text: 'Kilt',
        link: 'https://www.kilt.io/',
        rel:false
      }
    ],
    sidebar: {
      '/learn/': [
        {
          text: 'About Us',
          link: '/learn/',
          collapsable: true,
          children: [

            'about_goal',
            'about_target_audience',
            'about_affiliation'
          ]
        },
        {
          text: 'KILT',
          collapsable: true,
          children: [
            'kilt_what',
            'kilt_links.md'
          ]
        },
        {
          text: 'Terminology',
          collapsable: true,
          children: [
            'terminology_identity'
          ]
        },
      ],
      '/build/': [
        {
          text: 'Build',
          link: '/build/',
          collapsable: true,
          children: [
            'build_requirements.md',
            'build_wallet.md',
            'build_blockchain.md',
            'build_dapp.md',
            'build_examples.md'
          ]
        },
      ]
    }
  }),
}

