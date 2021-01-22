import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import ArticleListPage from "../../routes/ArticleListPage/ArticleListPage";
import LandingPage from "../../routes/LandingPage/LandingPage";
// import ArticlePage from "../../routes/ArticlePage/ArticlePage";
import TokenService from "../../services/token-service";
import LoginPage from "../../routes/LoginPage/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import AddArticlePage from "../../routes/AddArticlePage/AddArticlePage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";
import "./App.css";

class App extends Component {
  state = { hasError: false, isLoggedIn: TokenService.hasAuthToken() };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  handleLogInLogOut = () => {
    this.setState({ isLoggedIn: TokenService.hasAuthToken() });
  };

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header onLogout={this.handleLogInLogOut} />
        </header>
        <main className="App__main">
          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}
          <Switch>
            <Route
              exact
              path={"/"}
              component={this.state.isLoggedIn ? ArticleListPage : LandingPage}
            />
            <PublicOnlyRoute
              path={"/login"}
              component={LoginPage}
              componentProps={{ onLogin: this.handleLogInLogOut }}
            />
            <PublicOnlyRoute
              path={"/register"}
              component={RegistrationPage}
              componentProps={{ onLogin: this.handleLogInLogOut }}
            />
            <PrivateRoute path={"/articles"} component={ArticleListPage} />
            <PrivateRoute path={"/addarticle"} component={AddArticlePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
