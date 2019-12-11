import React from 'react';

const CampsiteIndexItem = ({ campsite }) => {

  return (
    <article className="campsite-entry">
      <img src={window.camp1URL} height="200"/>
      <summary className="campsite-details">
        <h1>{campsite.name}</h1>
        <h3>{campsite.description}</h3>
        <h2>${campsite.price}/night</h2>
      </summary>
    </article>
  )
};

export default CampsiteIndexItem;