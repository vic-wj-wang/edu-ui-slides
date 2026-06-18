import type { OpenSlideConfig } from '@open-slide/core';

const isProduction = !!process.env.GITHUB_ACTIONS;

const openSlideConfig: OpenSlideConfig = {
  base: isProduction ? '/edu-ui-slides/' : '/',
  build: isProduction ? {
    showSlideUi: false,
    showSlideBrowser: false,
  } : {},
};

export default openSlideConfig;
