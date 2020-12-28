import React from "react";
import moment from "moment";
import "./message.css";

export function RecipientMessage(props) {
    const a = moment(props.message.timestamp);
    return (
        <div>
            <div className="message-orange">
                <p className="message-content">{props.message.content}</p>
                <div className="message-timestamp-right">{a.format("DD MMM YY HH:mm ")}</div>
            </div>
        </div>
    )
}

