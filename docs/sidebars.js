/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  installSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'intro',
    },
    {
      type: "category",
      label: "Install Continue",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'quickstart',
          label: 'VS Code',
        },
        {
          type: 'link',
          label: 'InteliJ',
          href: '#',
        },
      ],
    },
    {
      type: 'doc',
      label: 'How to user continue',
      id: 'how-to-use-continue',
    },
    {
      type: 'doc',
      label: 'Troubleshooting',
      id: 'troubleshooting',
    },
  ],
  tutorialsSidebar: [
    {
      type: 'html',
      value: '<div><small>🚀 &nbsp; Get Started</small></div>',
      defaultStyle: true,
    },
    {
      type: 'link',
      label: 'Overview',
      href: '#',
    },
    {
      type: 'link',
      label: 'Exploring with Free Trial',
      href: '#',
    },
    {
      type: 'link',
      label: 'Getting along with Config File',
      href: '#',
    },

    {
      type: 'html',
      value: '<div><small>🧩 &nbsp; Fundamentals</small></div>',
      defaultStyle: true,
    },

    {
      type: 'link',
      label: 'Open-Source vs Commercial Models',
      href: '#',
    },

    {
      type: 'link',
      label: 'What are the Providers',
      href: '#',
    },

    {
      type: 'link',
      label: 'Authentication',
      href: '#',
    },

    {
      type: 'link',
      label: 'Understanding Codebase Indexing',
      href: '#',
    },

    {
      type: 'link',
      label: 'Experience the Context Providers',
      href: '#',
    },

    {
      type: 'html',
      value: '<div><small>📚 &nbsp; Basics</small></div>',
      defaultStyle: true,
    },

    {
      type: 'link',
      label: 'Setting up Chat Models',
      href: '#',
    },

    {
      type: 'doc',
      label: 'Tab Autocompletion with Codestral',
      id: 'walkthroughs/set-up-codestral',
    },

    "walkthroughs/codellama",
    "walkthroughs/codebase-embeddings",
    "walkthroughs/running-continue-without-internet",
    {
      type: 'html',
      value: '<div><small>🛠️ &nbsp; Advanced</small></div>',
      defaultStyle: true,
    },
    {
      type: 'link',
      label: 'Self-hosting an open-source model',
      href: '#',
    },
    {
      type: 'link',
      label: 'Customizing the /edit Prompt',
      href: '#',
    },
    {
      type: 'link',
      label: 'Customizing the Chat Template',
      href: '#',
    },
    {
      type: 'link',
      label: 'Defining a Custom LLM Provider',
      href: '#',
    },
  ],
  docsSidebar: [
    // "customization/overview", TODO: merge this
    "setup/overview",
    "setup/configuration",
    {
      type: 'doc',
      label: 'Supported Models',
      id: "setup/select-model",
    },
    {
      type: 'html',
      value: '<hr style="margin: 0"/>',
      defaultStyle: true,
    },
    "setup/model-providers",
    {
      type: 'link',
      label: 'Embedding Providers',
      href: '#',
    },
    {
      type: 'link',
      label: 'Reranking Providers',
      href: '#',
    },
    "customization/context-providers",
    {
      type: 'html',
      value: '<hr style="margin: 0"/>',
      defaultStyle: true,
    },
    "customization/slash-commands",
    "walkthroughs/tab-autocomplete",
    "walkthroughs/prompt-files",
    "walkthroughs/quick-actions",
  ],
  privacySidebar: [
    {
      type: 'link',
      label: 'Overview',
      href: '#',
    },
    {
      type: 'doc',
      label: 'Development Data',
      id: 'development-data',
    },
    {
      type: 'doc',
      label: 'Telemetry',
      id: 'telemetry',
    },
    {
      type: 'link',
      label: 'Privacy Policy',
      href: '#',
    },
  ],
  communitySidebar: [
    {
      type: 'link',
      label: 'Code of Conduct',
      href: '#',
    },
    {
      type: 'link',
      label: 'Roadmap',
      href: '#',
    },
    {
      type: 'link',
      label: 'Release process',
      href: '#',
    },
    {
      type: 'link',
      label: 'FAQ',
      href: '#',
    },
    {
      type: 'link',
      label: 'Contributing',
      href: '#',
    },
    {
      type: "category",
      label: "Changelog",
      collapsible: false,
      collapsed: false,
      items: [
        // 'changelog',
        {
          type: 'doc',
          id: 'changelog',
          label: 'VS Code',
        },
        {
          type: 'link',
          label: 'InteliJ',
          href: '#',
        },
      ],
    },
    {
      type: 'link',
      label: 'Support',
      href: '#',
    },
    {
      type: 'link',
      label: 'Team',
      href: '#',
    },
  ],
};

module.exports = sidebars;
