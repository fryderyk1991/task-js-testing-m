import {secret} from './secretToken.js'
export default class GitHubSDK {
    constructor (user, token = secret) {
        this.user = user;
        this.token = token;
        this.url = 'https://api.github.com';
    }         

    getUser(username) {
        const url = `${this.url}/users/${username}`;

        return fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'application/vnd.github+json',
				Authorization: `token ${this.token}`,
			},
		}).then((resp) => {
			if (resp.ok) {
				return resp.json();
			}
			return Promise.reject(resp);
		}).then(res => console.log(res))
    }
	
}