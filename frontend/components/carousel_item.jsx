import React from 'react';

const CarouselItem = props => {

  const { imageUrl } = props;

  // const styles = {
  //   backgroundImage: `${imageUrl}`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center'
  // };

  // return (
  //   <div className="carousel-container">
  //     <div className="carousel-img" style={styles}></div> 
  //   </div>
  // )

  return (
    <img className="carousel-img" src={imageUrl} />
  )
}

export default CarouselItem;