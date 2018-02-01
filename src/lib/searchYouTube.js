var searchYouTube = (options, callback) => {
  fetchData() {
    $.ajax({
    url:'https://www.googleapis.com/youtube/v3/search',
    type:'GET',
    success:function(data) {
        console.log(data)
      }
    })
  }
};

window.searchYouTube = searchYouTube;
