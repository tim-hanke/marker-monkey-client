import TokenService from "./token-service";
import config from "../config";
import STORE from "./dummy-store";

const ArticleApiService = {
  async getArticles() {
    return STORE.articles;
    // API version
    // TODO: change /things to /articles
    // const res = await fetch(`${config.API_ENDPOINT}/things`, {
    //   headers: {},
    // });
    // return await (!res.ok
    //   ? res.json().then((e) => Promise.reject(e))
    //   : res.json());
  },
  async postArticle(articleUrl) {
    // a mock article to insert into STORE to test the front end
    // eventually the back-end will fill in the details when
    // given an URL
    let newArticle = {
      id: STORE.articles.length + 1,
      url: articleUrl,
      title: "This Is Not Really The Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.",
      image: `https://loremflickr.com/750/300/landscape?random=${STORE.articles.length}`,
    };
    STORE.articles.push(newArticle);
  },
  async getArticle(articleId) {
    const res = await fetch(`${config.API_ENDPOINT}/articles/${articleId}`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    });
    return await (!res.ok
      ? res.json().then((e) => Promise.reject(e))
      : res.json());
  },
};

export default ArticleApiService;
