import React from "react";

import BookItem from "./BookItem";
import {getBooks} from '../../../../util/APIUtils';

import CardGroup from 'react-bootstrap/CardGroup';
import "../cardimg.css"

export default class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booksList: [],

        }
    }

    componentDidMount() {
        console.log(getBooks);
        getBooks().then((data) => {
            // console.log(data);
            this.setState({booksList: data});
        });
    }

    onBookClick = (book) => {
        console.log(book);
    };

    render() {
        const a = this.state.booksList.splice(0, 3);
        console.log(a);
        return (
            <div className="card_img">
                <CardGroup>
                    {a.map(book =>
                        <BookItem key={book.id} book={book}
                                  onBookClick={() => this.onBookClick(book)}
                        />)}
                </CardGroup>
            </div>
        )
    }
}