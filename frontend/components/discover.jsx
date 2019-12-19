import React from 'react';

// import FilterForm from './filter_form';
import DiscoverIndex from './discover_index';
import DiscoverMap from './discover_map';

const Discover = (props) => {

  return (
    <div className="discover-container">
      <DiscoverIndex campsites={props.campsites} />
      <div className="discover-map-container">
        <DiscoverMap
          campsites={props.campsites}
          location={props.location}
          updateBounds={props.updateBounds} />
      </div>
    </div>
  )
};

export default Discover;