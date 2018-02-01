// class VideoList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       main: true
//     }
//   }

//   onVideoListClick() {

//   }
// }


var VideoList = (props) => {

  console.log(props.onVideoSelect)
  
  return (<div className="video-list">
    {props.videos.map(video => 
      <VideoListEntry onVideoSelect={props.onVideoSelect} key={video.id.videoId} video={video} />
    )}
  </div>)
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;





// <div><h5><em>videoListEntry</em><VideoListEntry /></h5></div>
//     <div><h5><em>videoListEntry</em><VideoListEntry /></h5></div>
//     <div><h5><em>videoListEntry</em><VideoListEntry /></h5></div>
//     <div><h5><em>videoListEntry</em><VideoListEntry /></h5></div>
//     <div><h5><em>videoListEntry</em><VideoListEntry /></h5></div>