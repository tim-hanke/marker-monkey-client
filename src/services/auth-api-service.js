import config from "../config";
import STORE from "./dummy-store";

const AuthApiService = {
  async postLogin(credentials) {
    const dbUser = STORE.users.find(
      (u) => u.user_name === credentials.user_name
    );
    if (!dbUser) {
      return { error: "Incorrect user_name or password" };
    }
    const passwordMatch = dbUser.password === credentials.password;
    if (!passwordMatch) {
      return { error: "Incorrect user_name or password" };
    }
    return { authToken: "my-fake-testing-token" };
    // API version
    // const res = await fetch(`${config.API_ENDPOINT}/auth/login`, {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(credentials),
    // });
    // return await (!res.ok
    //   ? res.json().then((e) => Promise.reject(e))
    //   : res.json());
  },
  async postUser(user) {
    const res = await fetch(`${config.API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await (!res.ok
      ? res.json().then((e) => Promise.reject(e))
      : res.json());
  },
};

export default AuthApiService;
