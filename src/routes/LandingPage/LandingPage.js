import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Section } from "../../components/Utils/Utils";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <Section className="LandingPage">
        <h2>
          A place to store all the things you just don't have time to read now.
        </h2>
        <Link to="/register">Register</Link>
        <p className="LandingPage__hint">
          Hint: you can also login with <span>demo/Pass123!</span> to try it
          out!
        </p>
      </Section>
    );
  }
}
