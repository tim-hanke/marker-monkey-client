import React from "react";
import { Route, Redirect } from "react-router-dom";
import TokenService from "../../services/token-service";

export default function PublicOnlyRoute({
  component,
  componentProps = {},
  ...props
}) {
  const Component = component;
  return (
    <Route
      {...props}
      render={(routeProps) =>
        TokenService.hasAuthToken() ? (
          <Redirect to={"/"} />
        ) : (
          <Component {...routeProps} {...componentProps} />
        )
      }
    />
  );
}
