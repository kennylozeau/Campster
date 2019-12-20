# README

[Campster Live Site](https://campster-app.herokuapp.com/)

Campster is a clone of [HipCamp.com](https://www.hipcam.com). This app allows users (campers) to browse, search for, and book stays at campsites hosted by other campers. Campsites can be searched for by name and location, allowing campers to find the campsites that are most suitable for their planned trips. After completing a stay at a campsite, a camper has the opportunity to leave a review of the campsite, providing valuable feedback to other campers using Campster.

# Technologies Used
* React / Redux
* Ruby on Rails
* PostgreSQL
* CSS
* Webpack
* Google Maps API for JavaScript
* Google Geocoder API for JavaScript
* react-dates (AirBnB's custom date-picker)

# Significant Features

[Design Documents](https://github.com/kennylozeau/Campster/wiki)

## User Authentication
* Core Functionality
  * Campers are able to create a Campster account, which then allows them to sign in and sign out
  * A demo account is also available for browsing Campster as a guest
* Validations
  * Campers are required to used a valid unique email address
  * Passwords must be at least 6 characters in length
* Error Handling
  * User authentication errors are displayed temporarily on the page
  * Errors fade away after 5 seconds and are cleared on closing the form

![Login Demo](https://media.giphy.com/media/dXvBdE77Pug5lv4UY2/giphy.gif)

## Campsite Search
* Campsite Search Functionality
  * Campers are able to search for campsites by name, with matching results filtering instantaneously
  * Clicking a filtered search result brings the camper directly to the campsite's show page
* Geocoding Search Functionality
  * Campers are able to search for campsites by location on a map
  * Google Geocoding generates a relevant map based on the camper's query string
  * Campsite search results are filtered-out when no longer displayed on the map

The basis of the search bar's functionality lies in event listeners (onChange, onBlur, and onFocus) on a simple text input element.

```javascript
<form onSubmit={this.handleSubmit}>
  <div className="search-bar-container">
    <div className="search-bar">
      <input type="text"
        className="search-bar-input"
        placeholder="Find camping near..."
        value={this.state.searchValue}
        onChange={this.update}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus} />
      <ul className={`search-results-dropdown ${this.state.showResults}`}>
        {results}
      </ul>
    </div>
    <button className="search-btn">Search</button>
  </div>
</form>
```

The autocomplete aspect is accomplished by filtering campsite names through matching substrings. Any campsite names beginning with the current query string are pushed into an array of matches, which is then displayed in a dropdown list.

```javascript
matchingResults() {
  const matches = [];
  if (this.state.searchValue.length === 0) {
    return matches;
  }

  this.props.campsites.forEach(campsite => {
    const subString = campsite.name.slice(0, this.state.searchValue.length);
    if (subString.toLowerCase() === this.state.searchValue.toLowerCase()) {
      matches.push([campsite.name, campsite.id]);
    }
  });

  return matches;
}
```

When the camper submits the search query without selecting a campsite from the search results dropdown, the query string is passed to processSearch, the function that handles geocoding the query string to generate the origin location for the map displayed on the results page.

```javascript
processSearch(location, callback) {
  const geocoder = new google.maps.Geocoder();

  geocoder.geocode({ 'address': location }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      callback(results[0]);
    }
  });
}

handleSubmit(event) {
  event.preventDefault();
  const location = this.state.searchValue;

  this.processSearch(location, this.submitSearch);
}

handleBlur() {
  this.setState({showResults: "hidden"});
}

handleFocus() {
  this.setState({ showResults: "" });
}
```

# Future Features
* Integrated search results dropdown
  * Geocoded location suggestions will populate above the campsites results
* Allow campers to become campsite hosts
  * Campers will be able offer their property as a campsite
  * Campers will be able to upload descriptions, details, and photos
* Ability to attach photos to campsite reviews