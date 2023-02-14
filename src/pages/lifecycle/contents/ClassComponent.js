import styles from "./Common.module.css";

import React, { Component } from "react";
import PropTypes from "prop-types";

import * as utils from "../../../lib/utility";

class ClassComponent extends Component {
  //===============================================================
  // Mounting
  //===============================================================
  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.state = {
      number: this.props.number,
      date: this.props.date,
    };

    this.handleMessage.bind(this);

    // console.clear();

    utils.print("constructor", "red");
  }

  componentWillMount() {
    utils.print("componentWillMount", "blue");
  }

  componentDidMount() {
    utils.print("componentDidMount", "blue");
  }

  //===============================================================
  // Unmounting
  //===============================================================
  componentWillUnmount() {
    utils.print("componentWillUnmount", "red");
  }

  //===============================================================
  // Updating
  //===============================================================
  componentWillReceiveProps(nextProps) {
    utils.print("componentWillReceiveProps", "green");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      utils.print("shouldComponentUpdate", "green");

      return true;
    } else {
      return false;
    }
  }

  componentWillUpdate() {
    utils.print("componentWillUpdate", "green");
  }

  componentDidUpdate() {
    utils.print("componentDidUpdate", "green");
  }

  handleClick = (e) => {
    e.preventDefault();

    console.log(e.target.name);

    this.setState({ ...this.state, number: this.state.number + 1, date: new Date().toString() }, () => {
      console.log("callback", this.state.number);

      this.props.handleUpdate(this.state.number);
    });

    console.log(this.state.number);

    console.log(this.ref.current.innerText);
  };

  handleMessage(self) {
    console.log(self.target.name, self);
  }

  handleAlert(alert, option, self) {
    console.log(alert, option, self);
  }

  render() {
    utils.print("render", "blue");

    return (
      <>
        <span ref={this.ref} className="script-title">
          {this.props.url.title}
        </span>
        <span className="script-border" />
        <span className={styles.number}>{this.state.number}</span>
        <span className={styles.date}>{this.state.date}</span>
        <button className="button" name="update" onClick={this.handleClick}>
          Update
        </button>
        <button className="button" name="message" onClick={this.handleMessage}>
          Message
        </button>
        <button className="button" name="alert" onClick={this.handleAlert.bind(this, "alert", "option")}>
          Alert
        </button>
      </>
    );
  }
}

ClassComponent.propTypes = {
  number: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

ClassComponent.defaultProps = {
  number: 0,
  date: "---",
};

export default ClassComponent;
