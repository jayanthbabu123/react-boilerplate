import React, { Component } from "react";
import Header from "../Components/Header/Header";
export const MainDecorator = (WrappedComponent, data) => {
  return class Main extends Component {
    render() {
      return (
        <React.Fragment>
          <Header {...data} />
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};
