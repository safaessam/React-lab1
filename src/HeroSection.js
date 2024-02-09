import React, { Component } from 'react';
import './HeroSection.css';
import Button from './Button'; 


class HeroSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Safa Essam Eldeen Said',
      position: 'FullStack- Developer',
      buttonText: 'more details',
      image: 'myimages/hhhh.jpeg',
    };
  }
  render() {
    const { name, position, buttonText, image } = this.state;

    return (
      <div className="hero-section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${image})` }}>
        <div className="overlay-container">
          <div className="overlay">
            <h1>{name}</h1>
            <h3>{position}</h3>
            <Button text={buttonText} />
          </div>
        </div>
      </div>
    );
  }
}

export default HeroSection;
  