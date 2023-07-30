import {User} from './classes/User';
import {Tweet} from './classes/Tweet';

const User1 = new User('Francisco', 'Fran8354', 'fran1123@email.com', '12345');
const User2 = new User('Penélope', 'Pen9876', 'penelopecharmosa@email.com', '123456');
const User3 = new User('Carlos', 'carlos1234', 'carlinhos1123@email.com', '54321');

const Tweet1 = new Tweet('Faltam 3 anos para a próxima copa do mundo', 'normal');
User1.sendTweet(Tweet1);

const Tweet2 = new Tweet('Vai ser nos Estados Unidos.', 'reply');
User3.sendTweet(Tweet2);

const Tweet3 = new Tweet('Odeio clima frio!', 'normal');
User2.sendTweet(Tweet3);

Tweet1.reply(Tweet2);

console.log(Tweet1.show());

const replies = Tweet1.showReplies();
console.log(replies)