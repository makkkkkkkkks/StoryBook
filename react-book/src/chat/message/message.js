import React, {Component} from 'react';
import "./message.css";

class Message extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="custom-message-container">
                <div className="message-blue">
                    <p className="message-content">This is an awesome message! This is an 123 awesome message! This is an awesome message!</p>
                    <div className="message-timestamp-left">SMS 13:37</div>
                </div>

                <div className="message-orange">
                    <p className="message-content">I agree that your message is awesome!</p>
                    <div className="message-timestamp-right">SMS 13:37</div>
                </div>

                <div className="message-blue">
                    <p className="message-content">Thanks !</p>
                    <div className="message-timestamp-left">SMS 13:37</div>
                </div>
            </div>
        )
    }
}

export default Message;