var searchYouTube = (options, callback) => {

  $.get('https://www.googleapis.com/youtube/v3/search',
    options, function(data) {
      callback(data.items);
    });
};

window.searchYouTube = searchYouTube;
