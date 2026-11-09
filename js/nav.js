(function () {
  var path = window.location.pathname.replace(/\/$/, '') || '/';

  var links = [
    { href: '/arms',           label: 'The Arms' },
    { href: '/triad',          label: 'The Triad' },
    { href: '/prayer-network', label: 'Prayer Network' },
  ];

  var navLinks = links.map(function (l) {
    var active = path === l.href ? ' class="active"' : '';
    return '<a href="' + l.href + '"' + active + '>' + l.label + '</a>';
  }).join('');

  var svg = '<svg width="28" height="28" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M395.95 937.81C288.662 912.311 194.471 848.305 131.261 757.941C68.0511 667.578 40.2227 557.151 53.0591 447.623C65.8956 338.096 118.503 237.095 200.894 163.797C283.285 90.4977 389.723 50.0044 500 50.0044C610.277 50.0044 716.715 90.4977 799.106 163.797C881.497 237.095 934.105 338.096 946.941 447.623C959.778 557.151 931.949 667.578 868.739 757.941C805.529 848.305 711.339 912.311 604.05 937.81" stroke="#E8E4DC" stroke-width="56" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M604.05 937.81C535.636 954.069 464.364 954.069 395.95 937.81" stroke="#A9502F" stroke-width="56" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M875 500C875 707.107 707.107 875 500 875C292.893 875 125 707.107 125 500C125 292.893 292.893 125 500 125C707.107 125 875 292.893 875 500Z" stroke="#E8E4DC" stroke-width="11"/>' +
    '<path d="M246.5 406.5H215.5V533.5H246.5V406.5Z M301.5 406.5H270.5V533.5H301.5V406.5Z M407.5 406.5H376.5V533.5H407.5V406.5Z M462.5 406.5H431.5V533.5H462.5V406.5Z M568.5 406.5H537.5V533.5H568.5V406.5Z M623.5 406.5H592.5V533.5H623.5V406.5Z M729.5 406.5H698.5V533.5H729.5V406.5Z M784.5 406.5H753.5V533.5H784.5V406.5Z M784.5 502.5H698.5V533.5H784.5V502.5Z M790 561.5H210V593.5H790V561.5Z" fill="#E8E4DC"/>' +
  '</svg>';

  var html = '<nav class="ttp-nav" aria-label="Main navigation">' +
    '<div class="ttp-nav__inner">' +
      '<a href="/" class="ttp-nav__logo" aria-label="The Timothy Pattern home">' +
        svg +
        '<span class="ttp-nav__brand">The Timothy Pattern</span>' +
      '</a>' +
      '<div class="ttp-nav__links">' +
        navLinks +
        '<a href="https://tally.so/r/laBE15" target="_blank" rel="noopener noreferrer" class="ttp-nav__cta">Join</a>' +
      '</div>' +
    '</div>' +
  '</nav>';

  document.write(html);
})();
