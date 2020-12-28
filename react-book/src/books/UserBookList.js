import React from "react";
import {getBooks} from "../util/APIUtils";
import CardGroup from "react-bootstrap/CardGroup";
import BookItem from "./book-pages/book-list/book-item/BookItem";

class UserBookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booksList: []
        }
    }

    componentDidMount() {
        getBooks().then((data) => {
            this.setState({booksList: data});
        });
    }

    onBookClick = (book) => {
        this.props.history.push({
            pathname: '/editBook',
            state: {book}
        })
    };

    render() {
        return (
            <div className="row">
                <CardGroup>
                    {this.state.booksList.map(book => <BookItem key={book.id} book={book}
                                                                onBookClick={() => this.onBookClick(book)}/>)}
                </CardGroup>
            </div>
        )
    }
}

export default UserBookList;