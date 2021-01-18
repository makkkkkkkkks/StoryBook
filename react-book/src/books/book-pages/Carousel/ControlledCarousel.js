import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import First from '../Carousel/carousel-img/firts.jpg';
import Second from '../Carousel/carousel-img/second.jpg';
import Third from '../Carousel/carousel-img/thirst.jpg';
import "./container-custom.css";

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);

    };

    return (
        <Carousel className="container-custom" activeIndex={index} direction={direction} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={First}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Second}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Third}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;