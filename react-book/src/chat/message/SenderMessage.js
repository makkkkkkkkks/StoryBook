import React from "react";
import moment from "moment";

export function SenderMessage(props) {
    const a = moment(props.message.timestamp);
    return (
        <div>
            <div className="message-blue">
                <p className="message-content">{props.message.content} </p>
                <div className="message-timestamp-left">{a.format("DD MMM YY HH:mm ")}</div>
            </div>
        </div>
    )
}