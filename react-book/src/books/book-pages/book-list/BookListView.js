import React, {Component} from 'react';
import BookList from "./book-item/BookList";
import ControlledCarouse from "../Carousel/ControlledCarousel"
import {Container, Row} from 'reactstrap';


class BookListView extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                        <ControlledCarouse/>
                    </Row>
                    <Row>
                        <BookList/>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default BookListView