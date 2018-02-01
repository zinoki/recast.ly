class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectVideo: exampleVideoData[0],
      videoData: exampleVideoData
    };
  }
  
  setNewData(data) {
    console.log(data);
    this.setState({videoData: data});
  }
  onVideoSelected(video) {
    this.setState({selectVideo: video});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search setNewData={this.setNewData.bind(this)}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.selectVideo}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em><VideoList onVideoSelect={this.onVideoSelected.bind(this)} videos={this.state.videoData} /></h5></div>
          </div>
        </div>
      </div>
    );
    
  }
    



}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
