export default {
  "title": "SikuliX",
  "tagline": "Visual Automation and Testing",
  "url": "https://sikulix.github.io",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "SikuliX",
  "projectName": "sikulix.github.io",
  "themeConfig": {
    "navbar": {
      "title": "",
      "logo": {
        "alt": "SikuliX Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://raiman.github.io/SikuliX1/downloads.html",
          "label": "Downloads",
          "position": "right"
        },
        {
          "href": "https://github.com/RaiMan",
          "label": "★ GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "light",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Install",
              "to": "docs/installation"
            },
            {
              "label": "Downloads",
              "href": "https://raiman.github.io/SikuliX1/downloads.html"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Questions on LaunchPad",
              "href": "https://answers.launchpad.net/sikuli"
            },
            {
              "label": "Issues on LaunchPad",
              "href": "https://bugs.launchpad.net/sikuli"
            },
            {
              "label": "Issues on GitHub",
              "href": "https://github.com/RaiMan/SikuliX1/issues"
            },
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/sikuli-x"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/RaiMan"
            },
            {
              "label": "Disclaimer",
              "href": "http://sikulix.com/disclaimer/"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 SikuliX. Built with Docusaurus by Panx Project."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/raimundhocke/IdeaProjects/sikulix.github.io/sidebars.js",
          "editUrl": "https://github.com/SikuliX/sikulix.github.io/edit/master/docs/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/SikuliX/sikulix.github.io/edit/master/blog/"
        },
        "theme": {
          "customCss": "/Users/raimundhocke/IdeaProjects/sikulix.github.io/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};