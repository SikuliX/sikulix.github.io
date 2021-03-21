module.exports = {
  title: 'SikuliX',
  tagline: 'Visual Automation and Testing',
  url: 'https://sikulix.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SikuliX', // Usually your GitHub org/user name.
  projectName: 'sikulix.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'SikuliX Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs',
          label: 'Docs _ 2.0.5+',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Newsblog',
          position: 'left'
        },
        {
          href: 'https://raiman.github.io/SikuliX1/downloads.html',
          label: 'Downloads',
          position: 'left',
        },
        {
          href: 'https://github.com/RaiMan',
          label: '★ GitHub',
          position: 'right',
        },
        {
          href: '/',
          label: ' Donate',
          position: 'right',
        },

      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Installation',
              to: 'docs/start/installation',
            },
            {
              label: 'Downloads',
              href: 'https://raiman.github.io/SikuliX1/downloads.html',
            },
          ],
        },
        {
          title: 'LaunchPad',
          items: [
            {
              label: 'Questions/Answers',
              href: 'https://answers.launchpad.net/sikuli',
            },
            {
              label: 'Issues/Bugs',
              href: 'https://bugs.launchpad.net/sikuli',
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'Issues',
              href: 'https://github.com/RaiMan/SikuliX1/issues',
            },
            {
              label: 'Wiki',
              href: 'https://github.com/RaiMan/SikuliX1/wiki',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/sikuli+or+sikuli-x+or+sikuli-script+or+sikuli-ide',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/sikulix',
            },
          ],
        },
        {
          title: 'Stuff',
          items: [
            {
              label: 'RaiMan',
              href: 'https://github.com/RaiMan',
            },
            {
              label: 'Legal',
              href: 'http://sikulix.com/disclaimer/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SikuliX. Built with Docusaurus by Panx Project.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/SikuliX/sikulix.github.io/edit/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/SikuliX/sikulix.github.io/edit/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
