import React, { Component } from "react";

class ClassComponent2 extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    fetch("/api/classcomponent2").then((res) => {
      return res.text();
    }).then((data) => {
      this.setState({
        message: data
      });
    });
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default ClassComponent2;