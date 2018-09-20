import React, { Component } from 'react'


export default class Filter extends Component {

  constructor() {
    super();
    this.state = ({
      currentFilter: "all"
    });
  }


  render() {
    return (
      <div>
        <button id="name" onClick={this.props.buttonFilter}>Sort Hogs By Name</button>
        <button id="weight" onClick={this.props.buttonFilter}>Sort Hogs By Weight</button>
        <button id="greased" onClick={this.props.buttonFilter}>Show Only Greased Hogs</button>
      </div>
    )
  }

}
