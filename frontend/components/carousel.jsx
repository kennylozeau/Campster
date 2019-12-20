import React from 'react';
import CarouselItem from './carousel_item';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageUrls: this.props.imageUrls
    };

    this.goBack = this.goBack.bind(this);
    this.goForward = this.goForward.bind(this);
  }

  goBack() {
    // event.stopPropagation();
    let newArray = this.state.imageUrls;
    newArray.push(newArray.shift());
    this.setState({imageUrls: newArray});
  }

  goForward() {
    // event.stopPropagation();
    let newArray = this.state.imageUrls;
    newArray.unshift(newArray.pop());
    this.setState({ imageUrls: newArray });
  }

  render() {

    return (
      <>
        <div className="go-back" onClick={() => this.goBack()}>❮</div>
        <div className="carousel-container">
          <CarouselItem imageUrl={this.state.imageUrls[0]} />
          <CarouselItem imageUrl={this.state.imageUrls[1]} />
          <CarouselItem imageUrl={this.state.imageUrls[2]} />
        </div>
        <div className="go-forward" onClick={() => this.goForward()}>❯</div>
      </>
    )    
  }
}

export default Carousel;