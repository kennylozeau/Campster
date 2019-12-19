import React from 'react';

const Carousel = props => {

  // const { photos } = props;

  const photos = [
    <img src={window.camp1URL} height="200" />,
    <img src={window.camp2URL} height="200" />,
    <img src={window.camp3URL} height="200" />
  ]

  return (
    <>
      {photos}
    </>
  )
}

export default Carousel;