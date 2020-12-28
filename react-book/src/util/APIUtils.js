import {ACCESS_TOKEN, API_BASE_URL} from '../constants';


export const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append("Authorization", 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }
    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};


export function getCurrentUser() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function getBooks() {
    return request({
        url: API_BASE_URL + "/book/getAllUserBooks",
        method: 'GET',
    });
}

export function postBooks(postBooksRequest) {
    return request({
        url: API_BASE_URL + "/book",
        method: 'POST',
        body: JSON.stringify(postBooksRequest)
    });
}

export function getBookById(id) {
    return request({
        url: API_BASE_URL + "/book/" + id,
        method: 'GET',
    });
}

export function getAllUserByName(name) {
    return request({
        url: API_BASE_URL + "/user/allUsers/" + name,
        method: 'GET',
    });
}

export function countNewMessages(senderId, recipientId) {
    if (!localStorage.getItem("accessToken")) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/messages/" + senderId + "/" + recipientId + "/count",
        method: "GET",
    });
}

export function getChatMessages(senderId, recipientId) {
    if (!localStorage.getItem("accessToken")) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/messages/" + senderId + "/" + recipientId,
        method: "GET",
    });
}

export function findChatMessage(id) {
    if (!localStorage.getItem("accessToken")) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/messages/" + id,
        method: "GET",
    });
}

export function getAllUsersWhoStartChat() {
    if (!localStorage.getItem("accessToken")) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/messages/get_active_room/",
        method: "GET",
    });
}



