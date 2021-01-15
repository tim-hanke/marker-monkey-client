import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = (user) => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/articles";
    history.push(destination);

    // const { history } = this.props
    // history.push('/login')
  };

  render() {
    return (
      <Section className="RegistrationPage">
        <h2>Register</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    );
  }
}
