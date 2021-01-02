import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArticleContext from "../../contexts/ArticleContext";
import ArticleApiService from "../../services/article-api-service";
import { Hyph, Section } from "../../components/Utils/Utils";
import { ArticleStarRating } from "../../components/ArticleStarRating/ArticleStarRating";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import "./ArticlePage.css";

export default class ArticlePage extends Component {
  static defaultProps = {
    match: { params: {} },
  };

  static contextType = ArticleContext;

  componentDidMount() {
    const { articleId } = this.props.match.params;
    this.context.clearError();
    ArticleApiService.getArticle(articleId)
      .then(this.context.setArticle)
      .catch(this.context.setError);
    ArticleApiService.getArticleReviews(articleId)
      .then(this.context.setReviews)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearArticle();
  }

  renderArticle() {
    const { article, reviews } = this.context;
    return (
      <>
        <div
          className="ArticlePage__image"
          style={{ backgroundImage: `url(${article.image})` }}
        />
        <h2>{article.title}</h2>
        <ArticleContent article={article} />
        <ArticleReviews reviews={reviews} />
        <ReviewForm />
      </>
    );
  }

  render() {
    const { error, article } = this.context;
    let content;
    if (error) {
      content =
        error.error === `Article doesn't exist` ? (
          <p className="red">Article not found</p>
        ) : (
          <p className="red">There was an error</p>
        );
    } else if (!article.id) {
      content = <div className="loading" />;
    } else {
      content = this.renderArticle();
    }
    return <Section className="ArticlePage">{content}</Section>;
  }
}

function ArticleContent({ article }) {
  return <p className="ArticlePage__content">{article.content}</p>;
}

function ArticleReviews({ reviews = [] }) {
  return (
    <ul className="ArticlePage__review-list">
      {reviews.map((review) => (
        <li key={review.id} className="ArticlePage__review">
          <p className="ArticlePage__review-text">
            <FontAwesomeIcon
              size="lg"
              icon="quote-left"
              className="ArticlePage__review-icon blue"
            />
            {review.text}
          </p>
          <p className="ArticlePage__review-user">
            <ArticleStarRating rating={review.rating} />
            <Hyph />
            {review.user.full_name}
          </p>
        </li>
      ))}
    </ul>
  );
}
