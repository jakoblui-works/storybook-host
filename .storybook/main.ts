import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  framework: "@storybook/react-vite",
  refs: {
    "site-web": {
      title: "Hub",
      url: "https://sb-q4vk7z.jakoblui.com",
    },
    "cv-web": {
      title: "CV Generator",
      url: "https://sb-m7xq2d.jakoblui.com",
    },
  },
};

export default config;
