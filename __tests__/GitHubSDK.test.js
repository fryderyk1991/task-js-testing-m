import nodeFetch from "node-fetch";
global.fetch = nodeFetch;
import GitHubSDK from '../src/js/GitHubSDK';




describe('GitHubSdk', () => {
    it('should create  an instance with user, token and default URL', () => {
        const user = 'testuser';
        const token = 'testtoken';
        const gh = new GitHubSDK(user, token);
        expect(gh.user).toBe(user);
        expect(gh.token).toBe(token);
        expect(gh.url).toBe('https://api.github.com')
    })
})


