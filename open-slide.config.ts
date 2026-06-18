import type { OpenSlideConfig } from '@open-slide/core';

const openSlideConfig: OpenSlideConfig = {
  base: process.env.GITHUB_ACTIONS ? '/edu-ui-slides/' : '/',
};

export default openSlideConfig;
