import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here.

const config: Config = {
  title: 'flour-n-sugar Documentation',
  tagline: 'Documentation for the flour-n-sugar project',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Update this when you have the actual documentation domain.
  url: 'https://docs.puza.shop',
  baseUrl: '/',

  // GitHub Pages deployment config.
  // Update these if the documentation is deployed through GitHub Pages.
  organizationName: 'flour-n-sugar',
  projectName: 'flour-n-sugar',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Flour-n-Sugar',
      logo: {
        alt: 'Flour-n-Sugar Logo',
        src: 'img/logo.png',
      },

      items: [
        {
          href: 'https://puza.shop',
          label: 'Flour-n-Sugar Staging',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',

      links: [
        {
          items: [
            {
              label: 'Flour-n-Sugar Staging',
              href: 'https://puza.shop',
            }
          ]

        },
        // {
        //   title: 'Documentation',
        //   items: [
        //     {
        //       label: 'Overview',
        //       to: '/',
        //     },
        //     {
        //       label: 'Example Page',
        //       to: '/User%20Expectations/test',
        //     },
        //   ],
        // },

      ],

      copyright: `Copyright © ${new Date().getFullYear()} Flour-n-Sugar. All rights reserved.`,
    },

    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.nightOwl,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;