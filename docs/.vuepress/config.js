module.exports = {
  title: 'Encyclolist',
  description: 'A versatile list browser.',
  dest: 'public/docs',
  base: '/docs/',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Parisienne&display=swap' }],
  ],
  plugins: [
    [ 
      '@vuepress/google-analytics',
      {
        'ga': 'UA-43410269-6' // UA-00000000-0
      }
    ],
    [
      'vuepress-plugin-google-adsense',
      {
        'google_ad_client': 'ca-pub-1717720203982550', // ca-pub-0000000000000000
        'enable_page_level_ads': true
      }
    ],
  ],
  themeConfig: {
    sidebar: 'auto',
    nav: [
      {text: 'Why Encyclolist', link: '/whyEncyclolist/'},
      {text: 'Get Started', link: '/getStarted/'},
/*      {text: 'Docs', 
       items: [
        {text: ''},
       ]
      },
*/
    ],
    lastUpdated: 'Last Updated', // string | boolean
  }
}