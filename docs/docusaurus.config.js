// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Inteli Júnior",
  tagline: "Dinosaurs are cool",
  favicon: "img/inteli.svg",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docusaurus/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Inteli Júnior", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/inteli.svg",
      navbar: {
        title: "Inteli Júnior",
        logo: {
          alt: "Logo Inteli Júnior",
          src: "img/inteli.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Introdução",
          },
          {
            type: "docSidebar",
            sidebarId: "githubSidebar",
            position: "left",
            label: "Github",
          },
          {
            type: "docSidebar",
            sidebarId: "figmaSidebar",
            position: "left",
            label: "Figma",
          },
          {
            type: "docSidebar",
            sidebarId: "frontendSidebar",
            position: "left",
            label: "Frontend",
          },
          {
            type: "docSidebar",
            sidebarId: "backendSidebar",
            position: "left",
            label: "Backend",
          },
          {
            type: "docSidebar",
            sidebarId: "dataSidebar",
            position: "left",
            label: "Data",
          },
          {
            href: "https://github.com/InteliJR/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
