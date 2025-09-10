const currentDomain = window.location.hostname;
const path = window.location.pathname;
if (
  currentDomain === 'coco-community.pages.dev' ||
  currentDomain === 'zitzhen.github.io'
) {
  window.location.replace(`https://cc.zitzhen.cn${path}`);
}