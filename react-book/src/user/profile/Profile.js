import React, {Component} from 'react';

import {Col, Container, Row} from 'reactstrap';
import './Profile.css';
import UserBookList from "../../books/UserBookList";
import ModalBookEditing from "../../books/book-pages/book-edit/ModalBookEditing";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.localButton = true
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="profile-container">
                                <div className="container">
                                    <div className="profile-info">
                                        <div className="profile-avatar">
                                            {
                                                this.props.currentUser.imageUrl ? (
                                                    <img src={this.props.currentUser.imageUrl}
                                                         alt={this.props.currentUser.name}/>
                                                ) : (
                                                    <div className="text-avatar">
                                                        <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="profile-name">

                                            <h2>{this.props.currentUser.name}</h2>
                                            <h2>{this.props.currentUser.id}</h2>
                                            <p className="profile-email">{this.props.currentUser.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={{span: 3, offset: 3}}>
                            <div><ModalBookEditing localButton={this.localButton} text={this.text}/></div>
                        </Col>
                    </Row>
                    <Row>
                        <UserBookList/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Profile