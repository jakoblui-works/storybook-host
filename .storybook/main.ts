import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  framework: "@storybook/react-vite",
  refs: {
    "site-web": {
      title: "Site Web",
      url: "https://sb-q4vk7z.jakoblui.com",
    },
  },
};

export default config;
