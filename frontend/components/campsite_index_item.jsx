import React from 'react';
import { withRouter } from 'react-router-dom';

class CampsiteIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const campsiteId = this.props.campsite.id;
    this.props.history.push(`/campsites/${campsiteId}`);
  }

  render() {
    
    const { campsite } = this.props;
    const price = campsite.price.toFixed(0);

    // TEMPORARY CODE FOR DEMONSTRATION
    let sitePhotoId = campsite.id % 27;
    if (sitePhotoId === 0) { sitePhotoId = 17 }
    const sitePhoto = `camp${sitePhotoId}URL`;

    return (
      <article className="campsite-entry" onClick={this.handleClick}>
        <div className="index-photo-container">
          <img src={window[sitePhoto]} className="index-photo" />
        </div>
        <summary className="campsite-details">
          <div>
            <h1>{campsite.name}</h1>
            <h3>{campsite.description}</h3>
          </div>
          <h2>${price}/night</h2>
        </summary>
      </article>
    )
  }
};

export default withRouter(CampsiteIndexItem);