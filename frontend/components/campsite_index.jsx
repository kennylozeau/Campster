import React from 'react';
import CampsiteIndexItem from './campsite_index_item';

class CampsiteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCampsites();
  }

  render() {
    const campsiteList = this.props.campsites.map(campsite => {
      return <CampsiteIndexItem key={campsite.id} campsite={campsite} />
    });

    return (
      <div className="campsite-list">
        {campsiteList}
      </div>
    )
  }
}

export default CampsiteIndex;