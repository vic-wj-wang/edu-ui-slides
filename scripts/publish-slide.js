#!/usr/bin/env node
// 將簡報從 Draft 移至 Publish 資料夾（或反向 unpublish）
// 用法：node scripts/publish-slide.js <slideId>
//       node scripts/publish-slide.js <slideId> --unpublish

import { readFileSync, writeFileSync } from 'fs';

const FOLDERS_PATH = 'slides/.folders.json';
const DRAFT_ID = 'f-draft';
const PUBLISH_ID = 'f-3f4148a6';

const [, , slideId, flag] = process.argv;
const unpublish = flag === '--unpublish';

if (!slideId) {
  console.error('用法：node scripts/publish-slide.js <slideId> [--unpublish]');
  process.exit(1);
}

const data = JSON.parse(readFileSync(FOLDERS_PATH, 'utf8'));
const targetFolder = unpublish ? DRAFT_ID : PUBLISH_ID;
const currentFolder = data.assignments[slideId];

if (currentFolder === targetFolder) {
  console.log(`"${slideId}" 已經在 ${unpublish ? 'Draft' : 'Publish'} 資料夾，無需變更。`);
  process.exit(0);
}

data.assignments[slideId] = targetFolder;
writeFileSync(FOLDERS_PATH, JSON.stringify(data, null, 2) + '\n');

if (unpublish) {
  console.log(`✓ "${slideId}" 已移回 Draft 資料夾`);
} else {
  console.log(`✓ "${slideId}" 已發佈至 Publish 資料夾`);
}
