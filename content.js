$('[href]').each(function(index, ref) {
  var href = $(ref).attr('href');
  if (href.match(/^.*\.torrent$/)) {
    if (href.match(/^\/.*/)) {
      href = 'http://' + location.host + href;
    }
    $(ref).click(function(event) {
      event.preventDefault();
      $(ref).text('...');
      fetch('https://hook.io/bernardstanislas/torrent-downloader?torrent=' + href)
      .then(function() {
        $(ref).text(':-)');
      });
    });
  }
});
