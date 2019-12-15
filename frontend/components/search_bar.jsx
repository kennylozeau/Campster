import React from 'react';
import { withRouter } from 'react-router-dom'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };

    this.update = this.update.bind(this);
    this.selectCampsite = this.selectCampsite.bind(this);
  }

  matchingResults() {
    const matches = [[]];
    if (this.state.searchValue.length === 0) {
      return matches;
    }

    this.props.campsites.forEach(campsite => {
      const sub = campsite.name.slice(0, this.state.searchValue.length);
      if (sub.toLowerCase() === this.state.searchValue.toLowerCase()) {
        matches.push([campsite.name, campsite.id]);
      }
    });

    if (matches.length === 0) {
      matches.push(['No matches']);
    }

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
    results = this.matchingResults().map((result, i) => {
      const campsiteId = result[1];
      // debugger
      return (
        <li key={i} data-campsite-id={campsiteId} onClick={(event) => this.selectCampsite(event)}><h2>{result[0]}</h2></li>
      );
    });

    return (
      <div className="search-bar-container">
        <input type="text"
               className="search-bar-input"
               value={this.state.searchValue}
               onChange={this.update}
               placeholder="Search..."/>
        <ul className="search-results-dropdown">
            {results}
        </ul>
      </div>
    )
  }
}

export default withRouter(SearchBar);