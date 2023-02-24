import React, { Component } from "react";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome visitor"
    };
  }
  changeMessage() {
    this.setState({
      message: "thanks for clicking it"
    });
  }
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>click me</button>
      </>
    );
  }
}

export default Message;
