// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Temporal',
  tagline: 'Hear👂🏾 Think 🧠 Act 🏃🏾',
  url: 'https://github.com',
  baseUrl: '/project-temporal/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ringomar', // Usually your GitHub org/user name.
  projectName: 'project-temporal', // Usually your repo name.
  deploymentBranch: "gh-pages",
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Project Temporal',
        logo: {
          alt: 'My Site Logo',
          src: 'img/docusaurus.png',
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Blog",
          },
          {
            href: 'https://github.com/RingoMar',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Websites',
                href: 'https://ringomar.github.io/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/_ringomar',
              },
              {
                label: 'RingoMar',
                href: 'https://github.com/RingoMar',
              },
              {
                label: 'Photos',
                href: 'https://unsplash.com/@ringomar',
              },
            ],
          },
          {
            title: 'Sources',
            items: [
              {
                label: 'Hacker News',
                href: 'https://news.ycombinator.com/',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/all/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub Repository',
                href: 'https://github.com/ringomar/project-temporal',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RingoMar. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
