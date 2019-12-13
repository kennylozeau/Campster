import React from 'react';
import CampsiteMap from './campsite_map';

class CampsiteShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCampsite(this.props.match.params.campsiteId);
  }

  render() {
    
    if (this.props.campsite) {
      
      const { campsite } = this.props;
      const price = campsite.price.toFixed(0);

      return (
        <>
          <div className="campsite-show-container">
            <div className="photo-comp-placeholder">
              <img src={window.camp1URL} width="100%"/>
            </div>
            <div className="campsite-details-container">
              <h1>{campsite.name}</h1>
            </div>
            <div className="show-page-map"></div>
            <div className="res-widget">
              <h1>${price}</h1>
              <h3>per night</h3>
            </div>
            <div className="content-filler"></div>
          </div>
        </>
      )
    } else {
      return (
        null
      )
    }
  }
}

export default CampsiteShow;

// THIS CODE WILL REPLACE THE MAP PLACEHOLDER
// <CampsiteMap mapType={"show-page-map"} campsite={this.props.campsite}/>

{/* <div className="res-widget-container">
  <div className="res-widget"></div>
</div> */}