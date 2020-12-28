import React, {Component} from "react";
import './ChatProfile.css';


class ChatProfile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className=" chat-profile-border">
                    <div className="row">
                        <div className="col-sm">
                            <div className="profile-avatar">
                                {
                                    this.props.currentUser.imageUrl ? (
                                        <div className="profile-avatar" >
                                            <img src={this.props.currentUser.imageUrl}
                                                 alt={this.props.currentUser.name}/>
                                        </div>
                                    ) : (
                                        <div className="text-avatar">
                                            <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="chat-profile-name">
                                {this.props.currentUser.name}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ChatProfile;