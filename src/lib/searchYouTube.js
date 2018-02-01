var searchYouTube = (options, callback) => {
  // fetchData() {
  //   $.ajax({
  //   url:'https://www.googleapis.com/youtube/v3/search',
  //   type:'GET',
  //   success:function(data) {
  //       console.log(data)
  //     }
  //   })
  // }
  $.get('https://www.googleapis.com/youtube/v3/search', function(data){
    console.log(data)
  },{ 'key':window.YOUTUBE_API_KEY,
      'maxResults': '5',
      'part': 'snippet',
      'q': 'surfing',
      'type': ''})
};

window.searchYouTube = searchYouTube;
