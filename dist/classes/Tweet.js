"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tweet = void 0;
const Base_1 = require("./Base");
class Tweet extends Base_1.Base {
    constructor(_content, _type, _username) {
        super();
        this._content = _content;
        this._type = _type;
        this._username = _username;
        this._replies = [];
        this._likes = [];
    }
    reply(tweet) {
        this._replies.unshift(tweet);
    }
    like(like) {
        this._likes.push(like);
    }
    show() {
        return {
            content: this._content,
            likes: this._likes,
            username: this._username
        };
    }
    showReplies() {
        const replies = this._replies.map((reply) => reply.show());
        return replies;
    }
    getUser() {
        return this._username;
    }
}
exports.Tweet = Tweet;
