import Carousel from 'react-bootstrap/Carousel';
import { ExampleCarouselImage } from './image/CarouselsImage/ExampleCarouselImage';

export const Carousels = () => {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

