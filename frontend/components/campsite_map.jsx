import React from 'react'

class CampsiteMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { latitude, longitude } = this.props.campsite;
    const mapOptions = {
      center: { lat: latitude, lng: longitude },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return (
      <div className={this.props.mapType} ref={ map => this.mapNode = map }>

      </div>
    )
  }
}

export default CampsiteMap;