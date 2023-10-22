export default class GitHubSDK {
    constructor (user, token) {
        this.user = user;
        this.token = token;
        this.url = 'https://api.github.com';
    }         

		_fetch(options, additionalPath = '') {
			const url = this.url + additionalPath;

			return fetch(url, options)
			.then(res => {
				if(res.ok) {
					return res.json()
				}
				return Promise.reject(res)
			}).then(res => {return res})
		}
		getUser(username) {
			const options = {
				method: 'GET',
				headers: {
					Accept: 'application/vnd.github+json',
					Authorization: `token ${this.token}`,
				}
			}
			return this._fetch(options, `/users/${username}`)
		}
}