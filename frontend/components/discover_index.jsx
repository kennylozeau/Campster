import React from 'react';
import CampsiteIndexItem from './campsite_index_item';

class DiscoverIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const campsiteList = this.props.campsites.map(campsite => {
      return <CampsiteIndexItem key={campsite.id} campsite={campsite} />
    });

    return (
      <div className="discover-list">
        {campsiteList}
      </div>
    )
  }
}

export default DiscoverIndex;