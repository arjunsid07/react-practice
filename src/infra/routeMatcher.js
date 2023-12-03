import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routeConfiguration from "./routeConfig";

const withRouteContainer = (WrappedComponent) => {
  return class HOC extends React.Component {
    render() {
      return (
        <>
          <BrowserRouter>
            <WrappedComponent />
            <Routes>
              {routeConfiguration.map((routeConfig) => (
                <Route
                  path={routeConfig.path}
                  element={<routeConfig.element />}
                />
              ))}
            </Routes>
          </BrowserRouter>
        </>
      );
    }
  };
};

export default withRouteContainer;
