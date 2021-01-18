import React from "react";
import './bookItem.css';
import Button from 'react-bootstrap/Button'


class BookItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            justClicked: null,
        }
    }

    onBookClick = (book) => {
        this.props.history.push({
            pathname: '/editBook',
            state: {book}
        })
    };

    render() {
        return (
            <div className="bookItem  mr-1">
                <img className=" book-item-img"
                     variant="top"
                     src="http://www.pxleyes.com/images/contests/book-reproduction/fullsize/Book-of-all-Book-4d586083c9985_hires.jpg"
                     alt=""
                />
                <div className="book-item-text">
                    <div>{this.props.book.bookName}</div>
                    <div>{this.props.book.bookAuthor}</div>
                </div>
                <div className="book-item-buttons">
                    <Button className="book-item-button" variant="primary"
                            onClick={() => this.onBookClick(this.props.book)}>View</Button>
                    <Button className="book-item-button" variant="primary"
                            onClick={this.props.onClick}>Edit</Button>
                </div>
            </div>)
    }
}

export default BookItem;