import React, { Component } from "react";
import ArticleApiService from "../../services/article-api-service";
import { Button, Input } from "../Utils/Utils";

export default class AddArticleForm extends Component {
  static defaultProps = {
    onAddSuccess: () => {},
  };

  state = { error: null };

  handleSubmitUrl = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { url } = ev.target;

    ArticleApiService.postArticle(url.value)
      .then((_res) => {
        url.value = "";
        this.props.onAddSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="AddArticleForm" onSubmit={this.handleSubmitUrl}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="url">
          <label htmlFor="AddArticleForm__url">URL</label>
          <Input required name="url" id="AddArticleForm__url"></Input>
        </div>
        <Button type="submit">Submit URL</Button>
      </form>
    );
  }
}
