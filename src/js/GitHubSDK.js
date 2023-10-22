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
			}).then(res => {
				console.log(res);
				return res;
			})
		}
		getUser(user) {
			const options = {
				method: 'GET',
				headers: {
					Accept: 'application/vnd.github+json',
					Authorization: `token ${this.token}`,
				}
			}
			return this._fetch(options, `/users/${user}`)
		}


		sendInvitation(repoName, userName) {
			if(!repoName) {
				throw new Error('Pass repository name!!!')
			}
			if(!userName) {
				throw new Error('Pass username!!!')
			}
				const options = {
				method: 'PUT',
				headers: {
					Accept: 'application/vnd.github+json',
					Authorization: `token ${this.token}`,
				},
				body: JSON.stringify({
					permission: 'pull'
				}),
			}
			return this._fetch(options, `/repos/${this.user}/${repoName}/collaborators/${userName}`);
		}
		
}