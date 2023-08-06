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
        this.showTweets();
        this._following.forEach((user)=> console.log(`${user.showTweets()}`));
    }

    showTweets(){
        this._tweets.forEach((tweet) => {
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
        })
    }

    public getUsername(): string {
        return this._username;
    }


   
}