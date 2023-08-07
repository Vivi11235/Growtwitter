import {Base} from './Base';
import {Tweet} from './Tweet';
import {Like} from './Like';

export class User extends Base {
    private _following: User[]
    private _tweets: Tweet[]

    constructor(private _name: string, private _username: string, private _email: string, private _password: string) {
        super()

        this._following = [];
        this._tweets = [];
    }

    sendTweet(tweet:Tweet){
        if(this._username!==tweet.getUser()){
            console.log('Você só pode enviar tweets da sua própria conta.');
            return
        }
        
        this._tweets.unshift(tweet);
    }

    follow(user: User){
        if(user.id===this.id){
            console.log('Não é possível seguir a si mesmo.');
            return;
        }

        this._following.push(user);
    }

    showFeed(){
        //this.showTweets();
        const userTweets = this.showTweets();
        console.log(userTweets); 

        this._following.forEach((user)=> console.log(`${user.showTweets()}`));
    }

    showTweets(){

        let result = '';
    this._tweets.forEach((tweet) => {
        result += `@${tweet.getUser()}: ${tweet.show().content}\n`;

        if (tweet.show().likes.length === 0) {
            result += "[0 likes]\n";
        } else if (tweet.show().likes.length === 1) {
            result += `[${tweet.show().likes[0].user.getUsername()} likes this!]\n`;
        } else {
            result += `[${tweet.show().likes[0].user.getUsername()} and others ${tweet.show().likes.length - 1} like this!]\n`;
        }

        const replies = tweet.showReplies();
        replies.forEach((reply) => {
            result += `>@${reply.username}: ${reply.content}\n`;
        });

        result += '\n'; // Espaço vazio para separar os tweets
    });

    return result;
        
    }

    public getUsername(): string {
        return this._username;
    }


   
}