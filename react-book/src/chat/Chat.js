import React, {useEffect, useState} from 'react';
import {countNewMessages, findChatMessage, getChatMessages, getUsers} from "../util/APIUtils";
import Button from 'react-bootstrap/Button';
import FindUsers from "./chat-user/FIndeUsers";
import {RecipientMessage} from "./message/RecipientMessage";
import {SenderMessage} from "./message/SenderMessage";
import {ACCESS_TOKEN} from "../constants";
import ChatProfile from "./chat-profile/ChatProfile";
import {useRecoilState, useRecoilValue} from "recoil";
import {chatActiveContact, chatMessages, loggedInUser} from "../util/GlobalState";
import "./Chat.css";
import "./ChatGrid.css";

let stompClient = null;

const Chat = (props) => {
    const currentUser = useRecoilValue(loggedInUser);
    const [messages, setMessages] = useRecoilState(chatMessages);
    const [activeContact, setActiveContact] = useRecoilState(chatActiveContact);
    const [text, setText] = useState("");
    const [contacts, setContacts] = useState([]);
    const [updateMessage, setUpdateMessage] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
            openConnection();
        }, []
    )
    useEffect(() => {
        if (activeContact === undefined) return;
        getChatMessages(props.currentUser.id, activeContact.id).then(data => {
            setMessages(data);
        })
    }, count);

    const openConnection = () => {
        const Stomp = require("stompjs");
        var SockJS = require("sockjs-client");
        SockJS = new SockJS("http://localhost:8080/ws");
        stompClient = Stomp.over(SockJS);
        stompClient.connect({"Authorization": "Bearer " + localStorage.getItem(ACCESS_TOKEN)}, onConnected, onError);
    };

    const onConnected = () => {
        stompClient.subscribe("/user/" + props.currentUser.id + "/queue/messages", onMessageReceived);
        console.log(setCount(count + 1));

    };
    const onError = (err) => {
        console.log(err);
    };

    const onMessageReceived = (msg) => {
        const notification = JSON.parse(msg.body);
        const active = JSON.parse(sessionStorage.getItem("recoil-persist")).chatActiveContact;
        if (active.id === +notification.senderId) {
            //http://localhost:8080"/messages/" + id
            findChatMessage(notification.id).then((message) => {
                const newMessages = JSON.parse(sessionStorage.getItem("recoil-persist")).chatMessages;
                newMessages.push(message);
                setMessages(newMessages);
            });
        } else {
            console.log("Received a new message from " + notification.senderName);
        }
        loadContacts();
    };

    const loadContacts = () => {
        const promise = getUsers().then((users) =>
            users.map((contact) =>
                countNewMessages(contact.id, currentUser.id).then((count) => {
                    contact.newMessages = count;
                    return contact;
                })));
        promise.then((promises) =>
            Promise.all(promises).then((users) => {
                setContacts(users);
                if (activeContact === undefined && users.length > 0) {
                    setActiveContact(users[0]);
                }
            }));
    };

    const updateData = (value) => {
        setActiveContact(value);
        getChatMessages(props.currentUser.id, activeContact.id).then(data => {
            setMessages(data);
        })
        loadMessages(value.id);
    }

    const loadMessages = (recipientId) => {
        countNewMessages(props.currentUser.id, recipientId).then(response => {
            }
        )
    }

    const sendMessage = (msg) => {
        if (msg.trim() !== "") {
            const customMessage = {
                senderId: props.currentUser.id,
                recipientId: activeContact.id,
                senderName: props.currentUser.name,
                recipientName: activeContact.name,
                content: msg,
                timestamp: new Date(),
            };
            stompClient.send("/app/chat", {}, JSON.stringify(customMessage));
            const newMessages = {...customMessage};
            setMessages([...messages, newMessages]);
        }
    };

    const textInput = (e) => {
        setText(e.target.value)
    }

    return (
        <div id="frame">
            <div id="sidepanel">
                <ChatProfile currentUser={props.currentUser}/>
                <div>
                    <ul>
                        <div><FindUsers updateData={updateData} currentUser={props.currentUser}/></div>
                    </ul>
                </div>
            </div>

            <div className="content">
                <div className="contact-profile">
                    <img src={props.currentUser.name && props.currentUser.imgUrl} alt=""/>
                    <p>{props.currentUser.name && props.currentUser.imgUrl}</p>
                </div>

                <div className="message-scroll">
                    {messages.map((msg) => (+msg.senderId === props.currentUser.id ?
                        <SenderMessage key={msg.id} message={msg}/>
                        :
                        <RecipientMessage key={msg.id} message={msg}/>)
                    )}
                </div>
                <div className="message-input">
                    <div className="wrap">
                        <input
                            name="user_input"
                            size="large"
                            placeholder="Write your message..."
                            value={text}
                            onChange={textInput}
                            onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    sendMessage(text);
                                    setText("");
                                }
                            }}
                        />
                        <Button
                            icon={<i class="fa fa-paper-plane" aria-hidden="true"></i>}
                            onClick={() => {
                                sendMessage(text);
                                setText("");
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
