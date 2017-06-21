import React, { Component } from "react";

class ClassComponent1 extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    fetch("/api/classcomponent1").then((res) => {
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

export default ClassComponent1;