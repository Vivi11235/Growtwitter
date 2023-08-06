import {Base} from './Base';
import {Like} from './Like';
import {User} from './User';

type TypeTweet = 'normal'|'reply'

export class Tweet extends Base {
    private _replies:Tweet[];
    private _likes:Like[];

    constructor(private _content: string, private _type: TypeTweet, private _username: string){
        super()

        this._replies = [];
        this._likes = [];
        
    }
    
    public reply(tweet: Tweet) {
        this._replies.unshift(tweet);
    }

    public like(like: Like) {
        this._likes.push(like);
    }

    public show() {

        return {
            content: this._content,
            likes: this._likes,
            username: this._username
        }
    }

    public showReplies() {

        const replies = this._replies.map((reply) => reply.show());
        return replies;
    }

    public getUser(): string {
        return this._username;
    }

}