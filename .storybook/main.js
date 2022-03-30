module.exports = {
  stories: ["../src/app/**/*.stories.ts"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-designs",
  ],
  framework: "@storybook/angular",
  core: {
    builder: "webpack5",
  },
};
