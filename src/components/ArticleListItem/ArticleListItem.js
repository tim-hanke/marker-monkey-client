import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ArticleListItem.css";

export default class ArticleListItem extends Component {
  render() {
    const { article } = this.props;

    return (
      <Link
        to={{
          pathname:
            "https://catalins.tech/top-5-mistakes-i-made-as-a-junior-developer",
        }}
        target="_blank"
        className="ArticleListItem"
      >
        <div
          className="ArticleListItem__image"
          style={{ backgroundImage: `url(${article.image})` }}
        />

        <div className="ArticleListItem__details">
          <div className="ArticleListItem__text">
            <h2 className="ArticleListItem__title">{article.title}</h2>
            <p className="ArticleListItem__description">
              {truncate(article.description)}
            </p>
          </div>
        </div>
      </Link>
    );
  }
}

function truncate(text) {
  const words = text.split(" ");

  if (words.length > 40) {
    return words.slice(0, 40).join(" ") + " ...";
  }

  return text;
}
