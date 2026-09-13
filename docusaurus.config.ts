import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here.

const config: Config = {
  title: 'Flour n Sugar Documentation',
  tagline: 'A community and discovery platform for local, home, and independent bakers',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.puza.shop',
  baseUrl: '/',

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
          to: '/overview/problem-and-opportunity',
          label: 'Overview',
          position: 'left',
        },
        {
          to: '/mvp-specifications/mvp-scope',
          label: 'MVP Specs',
          position: 'left',
        },
        {
          to: '/roadmap-and-vision/roadmap-phases',
          label: 'Roadmap',
          position: 'left',
        },
        {
          to: '/technical-architecture/technology-stack',
          label: 'Architecture',
          position: 'left',
        },
        {
          to: '/mvp-1-release-checklist/release-gates-and-framework',
          label: 'Release Checklist',
          position: 'left',
        },
        {
          href: 'https://puza.shop',
          label: 'Live Staging',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',

      links: [
        {
          title: 'Product & Vision',
          items: [
            {
              label: 'Overview & Philosophy',
              to: '/overview/problem-and-opportunity',
            },
            {
              label: 'Customer Journey',
              to: '/user-experience/customer-journey',
            },
            {
              label: 'Baker Experience',
              to: '/user-experience/baker-experience',
            },
            {
              label: 'Long-Term Ecosystem',
              to: '/roadmap-and-vision/long-term-ecosystem',
            },
          ],
        },
        {
          title: 'Specifications & Tech',
          items: [
            {
              label: 'MVP 1 Scope',
              to: '/mvp-specifications/mvp-scope',
            },
            {
              label: 'Catalog & Indian Units',
              to: '/mvp-specifications/catalog-and-units',
            },
            {
              label: 'Technical Architecture',
              to: '/technical-architecture/technology-stack',
            },
            {
              label: 'Data Models (Prisma)',
              to: '/technical-architecture/data-models',
            },
          ],
        },
        {
          title: 'Strategy & Ops',
          items: [
            {
              label: 'Marketplace Flywheel',
              to: '/business-strategy/marketplace-flywheel',
            },
            {
              label: 'Geographic Rollout (Lucknow)',
              to: '/business-strategy/geographic-rollout',
            },
            {
              label: 'Monetization Stages',
              to: '/business-strategy/monetization-strategy',
            },
            {
              label: 'Release Checklist & Gates',
              to: '/mvp-1-release-checklist/release-gates-and-framework',
            },
            {
              label: 'Live Staging (puza.shop)',
              href: 'https://puza.shop',
            },
          ],
        },
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