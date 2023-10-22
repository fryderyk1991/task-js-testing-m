import nodeFetch from "node-fetch";
global.fetch = nodeFetch;
import GitHubSDK from "../src/js/GitHubSDK";
import { secret } from "../src/js/secretToken";

describe("GitHubSdk", () => {
  it("should create an instance with user, token and default URL", () => {
    const user = "testuser";
    const token = "testtoken";
    const gh = new GitHubSDK(user, token);
    expect(gh.user).toBe(user);
    expect(gh.token).toBe(token);
    expect(gh.url).toBe("https://api.github.com");
  });
  describe("getUser", () => {
    it("return data when user is provided", async () => {
      const username = "fryderyk1991";
      const gh = new GitHubSDK(username, secret);
      const response = await gh.getUser(username);
      expect(response).toBe(response);
    });
    it("throw error when user is not provided", async () => {
      const username = "";
      const gh = new GitHubSDK();
      expect.assertions(1);
      try {
        await gh.getUser(username);
      } catch (e) {
        expect(e).toBe(e);
      }
    });
    it('should return user login', async () => {
      expect.assertions(1);
      const username = 'fryderyk1991';
      const gh = new GitHubSDK(username, secret);
      return gh.getUser(username).then(data => expect(data.login).toBe(username))
    })
    it('should return user full name', async () => {
      expect.assertions(1);
      const username = 'fryderyk1991';
      const userFullName = 'Fryderyk Jellinek'
      const gh = new GitHubSDK(username, secret);
      return gh.getUser(username).then(data => expect(data.name).toBe(userFullName))
    })
  });
  describe('sendInvitation', () => {
    it('should throw an error when task name is not defined', async () => {
      const taskName = "";
      const gh  = new GitHubSDK('fryderyk1991', secret);
      expect.assertions(1);
      try {
        await gh.sendInvitation(taskName, 'edek1020');
      } catch (e) {
        expect(e).toBe(e);
      }
  })
  it('should throw an error when user name is not defined', async () => {
    const userName = "";
    const gh  = new GitHubSDK('fryderyk1991', secret);
    expect.assertions(1);
    try {
      await gh.sendInvitation('task-js-basics', userName);
    } catch (e) {
      expect(e).toBe(e);
    }
})
  })
});
