import React, {Component} from "react";
import '../Chat.css';

class OneActiveUser extends Component {

    render() {
        return (
            <div onClick={() => this.props.click()}>
                <div className="mx-auto mt-1 pr-5">
                    <div className="border rounded-sm border-primary  bg-light">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="rounded-circle ml-0 mt-1 mb-1 w-25">
                                        {this.props.user.img === null ? <img
                                                src={this.props.user.imgUrl}
                                                className="rounded-circle border bg-info"
                                                alt="..."
                                                width="50px"
                                            />
                                            :
                                            <div className="chat-text-avatar">
                                                <span>{this.props.user.name && this.props.user.name[0]}</span>
                                            </div>}
                                    </div>
                                </div>
                                <div className="col m-auto text-body font-weight-bold">
                                    {this.props.user.name} {this.props.user.id}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OneActiveUser;