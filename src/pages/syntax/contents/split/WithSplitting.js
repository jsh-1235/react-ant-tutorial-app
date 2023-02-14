import React, { Component } from "react";

const WithSplitting = (getComponent) => {
  class Splitting extends Component {
    state = {
      Message: null,
    };

    constructor(props) {
      super(props);

      getComponent().then(({ default: Message }) => {
        this.setState({
          Message,
        });
      });
    }

    render() {
      if (!this.state.Message) {
        return null;
      } else {
        return <this.state.Message {...this.props} />;
      }
    }
  }

  return Splitting;
};

export default WithSplitting;
