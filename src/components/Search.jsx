class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input id="search" className="form-control" type="text" />
        <button onClick={this.handleClick} className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>);
  }
  handleClick() {
  console.log(this.props.setNewData, 'this is the funtion')
    var value = $('#search').val();
    var option = {
      'key':window.YOUTUBE_API_KEY,
      'maxResults': '5',
      'part': 'snippet',
      'q': value,
      'type': ''
    };
    searchYouTube(option, this.props.setNewData);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
