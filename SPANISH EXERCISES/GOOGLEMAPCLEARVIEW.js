const elemsListArr = [
  '#pane',
  '#watermark',
  '#titlecard',
  '#image-header',
  '#minimap',
  '.app-vertical-widget-holder',
  '#fineprint',
];
elemsListArr.forEach((elemName) => {
  let elem = document.querySelector(elemName);
  elem.parentNode.removeChild(elem);
});


const clsListArr = [
    '.widget-titlecard-show-settings-menu .widget-titlecard-settings',
    '.widget-pane-visible .widget-pane-toggle-button-container',
    '.widget-titlecard-contentcontainer',
    '.app-imagery-viewer-mode .widget-minimap',
    '.widget-pane-content-shim',
    '.app-vertical-widget-holder',
    '#watermark',
];

clsListArr.forEach((elemName) => {
  let elem = document.querySelector(elemName);
  elem.parentNode.removeChild(elem);
});
