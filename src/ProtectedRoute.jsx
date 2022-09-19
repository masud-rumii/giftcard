import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute({ component: Component, redirectRoute, ...rest }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) return <Component {...props} />;
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
}
