/**
* Thooja Custom JS
* https://thooja.com
* We help grow sustainable ecommerce brands on Shopify
*/

/* Open external links in a new tab */
var links = document.links;
for (let i = 0, linksLength = links.length ; i < linksLength ; i++) {
  if (links[i].hostname !== window.location.hostname) {
    links[i].target = '_blank';
    links[i].rel = 'noreferrer noopener';
  }
}