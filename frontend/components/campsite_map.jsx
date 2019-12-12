import React from 'react'

class CampsiteMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.702037, lng: -73.915075 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return (
      <div id='map-container' ref={ map => this.mapNode = map }>

      </div>
    )
  }
}

export default CampsiteMap;