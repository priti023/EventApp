import React from 'react';
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

class Samudra extends React.Component {

  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 crousal"
              src={require('../assets/1.PNG')}
              alt="First slide" />
            <Carousel.Caption>
              <h1>This is Samudra-Shastra Page</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100 crousal"
              src={require('../assets/2.PNG')}
              alt="Post Image" />
            <Carousel.Caption>
              <h1>This is Samudra-Shastra Page</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 crousal"
              src={require('../assets/3.PNG')}
              alt="Third slide" />
            <Carousel.Caption>
              <h1>This is Samudra-Shastra Page</h1>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }



}

export default Samudra;