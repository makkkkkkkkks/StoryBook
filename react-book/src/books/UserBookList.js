import React from "react";
import {getBooks, postBooks} from "../util/APIUtils";
import CardGroup from "react-bootstrap/CardGroup";
import BookItem from "./book-pages/book-list/book-item/BookItem";
import "./book.css";
import BookAdd from "./book-pages/book-add/BookAdd";
import ModalWindow from "./book-pages/book-edit/ModalWindow";


class UserBookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booksList: [],
            isModalShowed: false,
            selectedBook: null,
        }
    }

    componentDidMount() {
        getBooks().then((data) => {
            this.setState({booksList: data});
        });
    }

    onHandleEditButtonClick(selectedBook) {
        this.setState({
            isModalShowed: true,
            selectedBook,
        });
    }


    handleModalClose = () => {
        this.setState({
            isModalShowed: false,
            selectedBook: null
        });
    }

    onSubmit = (form) => postBooks(form).then(this.handleModalClose);

    render() {
        return (
            <div className="book-container">
                <div className="row">
                    <CardGroup>
                        {this.state.booksList.map(book =>
                            <BookItem key={book.id} book={book} onClick={() => this.onHandleEditButtonClick(book)}/>)}
                    </CardGroup>
                </div>

                <ModalWindow className="book-item-edit"
                             childerComponent={<BookAdd book={this.state.selectedBook} onSubmit={this.onSubmit}/>}
                             show={this.state.isModalShowed}
                             handleClose={this.handleModalClose}/>
            </div>
        )
    }
}

export default UserBookList;