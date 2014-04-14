jQuery(function($) {
    $('h1,h2,h3,li,p').each(function() {
        $(this).html($(this).html().replace(/\s([^\s<]+)\s*$/,'&nbsp;$1'));
    });
});

bespoke.horizontal.from('article', {
  bullets: 'li, .bullet',
  scale: true,
  hash: true
});