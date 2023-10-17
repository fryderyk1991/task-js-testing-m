import {secret} from './secretToken.js'
export default class GitHubSDK {
    constructor (user, token) {
        this.user = user;
        this.token = token;
        this.url = 'https://api.github.com';
    }         
}