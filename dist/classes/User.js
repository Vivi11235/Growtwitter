"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Base_1 = require("./Base");
class User extends Base_1.Base {
    constructor(_name, _username, _email, _password) {
        super();
        this._name = _name;
        this._username = _username;
        this._email = _email;
        this._password = _password;
        this._following = [];
        this._tweets = [];
    }
    sendTweet(tweet) {
        if (this._username !== tweet.getUser()) {
            console.log('Você só pode enviar tweets da sua própria conta.');
            return;
        }
        this._tweets.unshift(tweet);
    }
    follow(user) {
        if (user.id === this.id) {
            console.log('Não é possível seguir a si mesmo.');
            return;
        }
        this._following.push(user);
    }
    showFeed() {
        //this.showTweets();
        const userTweets = this.showTweets();
        console.log(userTweets);
        this._following.forEach((user) => console.log(`${user.showTweets()}`));
    }
    showTweets() {
        let result = '';
        this._tweets.forEach((tweet) => {
            result += `@${tweet.getUser()}: ${tweet.show().content}\n`;
            if (tweet.show().likes.length === 0) {
                result += "[0 likes]\n";
            }
            else if (tweet.show().likes.length === 1) {
                result += `[${tweet.show().likes[0].user.getUsername()} likes this!]\n`;
            }
            else {
                result += `[${tweet.show().likes[0].user.getUsername()} and others ${tweet.show().likes.length - 1} like this!]\n`;
            }
            const replies = tweet.showReplies();
            replies.forEach((reply) => {
                result += `>@${reply.username}: ${reply.content}\n`;
            });
            result += '\n'; // Espaço vazio para separar os tweets
        });
        return result;
        /*this._tweets.forEach((tweet) => {
            if(!tweet.show().likes.length){
                console.log(`@${this._username}:${tweet.show().content}\n`)
                if(tweet.showReplies().length){
                    tweet.showReplies().forEach((reply) => {
                        console.log(`>@${reply.username}: ${reply.content}`);
                      });
                }else{
                    return
                }
                
                return
            }

            if(tweet.show().likes.length===1){
                console.log(`@${this._username}:${tweet.show().content}\n[@${tweet.show().likes[0].user._username} likes this!]`)
                if(tweet.showReplies().length){
                    tweet.showReplies().forEach((reply) => {
                        console.log(`>@${reply.username}: ${reply.content}`);
                      });
                }else{
                    return
                }

                return
            }

            console.log(`@${this._username}:${tweet.show().content}\n[@${tweet.show().likes[0].user._username} and others ${tweet.show().likes.length-1} like this!]`)
            if(tweet.showReplies().length){
                tweet.showReplies().forEach((reply) => {
                    console.log(`>@${reply.username}: ${reply.content}`);
                  });
            }else{
                return
            }
        })*/
    }
    getUsername() {
        return this._username;
    }
}
exports.User = User;
