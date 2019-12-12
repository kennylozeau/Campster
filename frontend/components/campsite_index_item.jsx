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

    return (
      <article className="campsite-entry" onClick={this.handleClick}>
        <img src={window.camp1URL} height="200" />
        <summary className="campsite-details">
          <h1>{campsite.name}</h1>
          <h3>{campsite.description}</h3>
          <h2>${campsite.price}/night</h2>
        </summary>
      </article>
    )
  }
};

export default withRouter(CampsiteIndexItem);