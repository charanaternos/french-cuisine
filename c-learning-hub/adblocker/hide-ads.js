(() => {
  const selectors = [
    '[id^="ad-"]',
    '[id*="-ad-"]',
    '[class^="ad-"]',
    '[class*=" ad-"]',
    '[class*="advert"]',
    '[class*="sponsor"]',
    '[aria-label*="advertisement" i]',
    '[data-ad-slot]'
  ];

  const hideAds = (root) => {
    if (!(root instanceof Element) && !(root instanceof Document)) return;
    root.querySelectorAll(selectors.join(',')).forEach((element) => {
      element.style.setProperty('display', 'none', 'important');
    });
  };

  hideAds(document);
  new MutationObserver((mutations) => {
    mutations.forEach(({ addedNodes }) => {
      addedNodes.forEach(hideAds);
    });
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
