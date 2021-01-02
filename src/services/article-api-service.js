import TokenService from "./token-service";
import config from "../config";

const ArticleApiService = {
  async getArticles() {
    // TODO: change /things to /articles
    const res = await fetch(`${config.API_ENDPOINT}/things`, {
      headers: {},
    });
    return await (!res.ok
      ? res.json().then((e) => Promise.reject(e))
      : res.json());
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
  async getArticleReviews(articleId) {
    const res = await fetch(
      `${config.API_ENDPOINT}/articles/${articleId}/reviews`,
      {
        headers: {
          Authorization: `bearer ${TokenService.getAuthToken()}`,
        },
      }
    );
    return await (!res.ok
      ? res.json().then((e) => Promise.reject(e))
      : res.json());
  },
  async postReview(articleId, text, rating) {
    const res = await fetch(`${config.API_ENDPOINT}/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        article_id: articleId,
        rating,
        text,
      }),
    });
    return await (!res.ok
      ? res.json().then((e) => Promise.reject(e))
      : res.json());
  },
};

export default ArticleApiService;
