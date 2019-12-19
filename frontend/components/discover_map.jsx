import React from 'react'
import queryString from 'query-string';
import MarkerManager from '../util/marker_manager';

class DiscoverMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { lat, lng } = queryString.parse(this.props.location.search);
    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);
    const mapOptions = {
      center: { lat: latitude, lng: longitude },
      zoom: 12,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
      scaleControl: true,
      mapTypeId: 'terrain',
      scrollwheel: false
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    this.MarkerManager = new MarkerManager(this.map);

    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.campsites)

  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.campsites);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateBounds(bounds);
    });
    // google.maps.event.addListener(this.map, 'click', (event) => {
    //   const coords = getCoordsObj(event.latLng);
    //   this.handleClick(coords);
    // });
  }

  render() {
    return (
      <div className="discover-map" ref={map => this.mapNode = map}>

      </div>
    )
  }
}

export default DiscoverMap;