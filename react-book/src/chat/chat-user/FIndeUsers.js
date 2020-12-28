import React, {Component} from "react";
import {getAllUserByName, getAllUsersWhoStartChat} from "../../util/APIUtils";
import OneActiveUser from "./OneActiveUser";
import "../Chat.css";

class FindUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersList: [],
            text: "",
            contactValue: "",
        }
    };

    componentDidMount() {
        this.findChatMessage(this.props.currentUser.id)
    }

    findChatMessage() {
        console.log(getAllUsersWhoStartChat().then(response =>
            this.setState({usersList: response})
        ))
        console.log(this.props.currentUser.imageUrl)
    }


    render() {
        return (
            <div>
                <div className="pr-5 mt-1">
                    <div className="form-group">
                        <input
                            className="form-control mr-3  "
                            name="contact_input"
                            size="large"
                            placeholder="Enter user name..."
                            value={this.state.contactValue}
                            onChange={(event) => this.setState({contactValue: event.target.value})}
                            onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    getAllUserByName(this.state.contactValue).then(data => {
                                        this.setState({usersList: data})
                                    });
                                    this.setState({contactValue: ''})
                                }
                            }}
                        />
                    </div>
                </div>
                <div>{this.state.usersList.map(user =>
                    <OneActiveUser key={user.id} user={user} click={() => this.props.updateData(user)}/>)}
                </div>
            </div>
        )
    }
}

export default FindUsers;
