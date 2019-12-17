import React from 'react';
import { withRouter, Redirect } from 'react-router-dom'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      showResults: 'hidden'
    };

    this.update = this.update.bind(this);
    this.selectCampsite = this.selectCampsite.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  submitSearch(result) {
    const lat = result.geometry.location.lat();
    const lng = result.geometry.location.lng();
    this.props.history.push({
      pathname: '/discover',
      search: `?lat=${lat}&lng=${lng}`
    });
  }

  processSearch(location, callback) {
    const geocoder = new google.maps.Geocoder();
    // geocoder.geocode(location, function (data) {
    //   debugger
    //   var lat = data[0].geometry.location.lat();
    //   var lng = data[0].geometry.location.lng();
    //   var origin = new google.maps.LatLng(lat, lng);
    //   <Redirect to="/discover" />
    // });

    geocoder.geocode({ 'address': location }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        callback(results[0]);
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const location = this.state.searchValue;
    // debugger
    this.processSearch(location, this.submitSearch);
  }

  handleBlur() {
    this.setState({showResults: "hidden"});
  }

  handleFocus() {
    this.setState({ showResults: "" });
  }

  matchingResults() {
    const matches = [];
    if (this.state.searchValue.length === 0) {
      return matches;
    }

    this.props.campsites.forEach(campsite => {
      const sub = campsite.name.slice(0, this.state.searchValue.length);
      if (sub.toLowerCase() === this.state.searchValue.toLowerCase()) {
        matches.push([campsite.name, campsite.id]);
      }
    });

    // if (matches.length === 0) {
    //   matches.push(['No matches']);
    // }

    return matches;
  }

  selectCampsite(event) {
    // debugger
    const campsiteId = event.currentTarget.dataset.campsiteId;
    this.props.history.push(`/campsites/${campsiteId}`);
  }

  update(event) {
    // debugger
    this.setState({searchValue: event.currentTarget.value})
  }

  render() {
    // debugger
    let results = [];
    // debugger
    
    let matches = this.matchingResults().map((result, i) => {
      const campsiteId = result[1];
      // debugger
      return (
        <li key={i} data-campsite-id={campsiteId} onMouseDown={(event) => this.selectCampsite(event)}><h2>{result[0]}</h2></li>
      );
    });

    if (matches.length > 0) { results = matches }

    // debugger
    return (
      <header>
        <div className="main-header">
          <h1>
            Find yourself outdoors.
          </h1>
          <h2>
            Book private camping experiences at thousands of locations, anywhere you can imagine.
          </h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="search-bar-container">
            <div className="search-bar">
              <input type="text"
                className="search-bar-input"
                value={this.state.searchValue}
                onChange={this.update}
                onBlur={this.handleBlur}
                placeholder="Search..."

                onFocus={this.handleFocus} />
              <ul className={`search-results-dropdown ${this.state.showResults}`}>
                {results}
              </ul>
            </div>
            <button className="search-btn">Search</button>
          </div>
        </form>
      </header>
    )
  }
}

export default withRouter(SearchBar);