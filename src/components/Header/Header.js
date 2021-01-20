import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TokenService from "../../services/token-service";
import "./Header.css";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.props.onLogout();
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link to="/addarticle">Add Article</Link>
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/login">Log in</Link>
        <Link to="/register">Register</Link>
      </div>
    );
  }

  render() {
    return (
      <>
        <nav className="Header">
          <h1>
            <Link to="/">
              <FontAwesomeIcon className="blue logo" icon={faPaw} /> Marker
              Monkey
            </Link>
          </h1>
          <span className="Header__tagline--wide">
            Let the Monkey remember it for you.
          </span>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>

        <span className="Header__tagline--narrow">
          Let the Monkey remember it for you.
        </span>
      </>
    );
  }
}
