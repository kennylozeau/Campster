import React from 'react'
import queryString from 'query-string';

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
      zoom: 10,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
      scaleControl: true,
      mapTypeId: 'terrain',
      scrollwheel: false
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    // const marker = new google.maps.Marker({
    //   position: { lat: latitude, lng: longitude },
    //   icon: {
    //     path: google.maps.SymbolPath.CIRCLE,
    //     scale: 75,
    //     strokeColor: "#40D9AC",
    //     strokeWeight: 2,
    //     fillColor: "#40D9AC",
    //     fillOpacity: 0.3
    //   },
    //   map: this.map
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