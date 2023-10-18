import nodeFetch from "node-fetch";
global.fetch = nodeFetch;
import GitHubSDK from "../src/js/GitHubSDK";

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
      const gh = new GitHubSDK();
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
    it("show login of provied user", async () => {
        const username = 'fryderyk1991';
        const gh = new GitHubSDK();
        const response = await gh.getUser(username)
        expect(response.login).toBe(username)
    })
  });
});
