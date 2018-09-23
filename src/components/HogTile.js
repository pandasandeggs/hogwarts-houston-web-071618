import React, { Component } from 'react';
import HogDisplay from './HogDisplay'

export default class HogTile extends Component {

  getHogImage = (hog) => {
    let hogName = hog.name.split(' ').join('_').toLowerCase()
    let hogImage = require(`../hog-imgs/${hogName}.jpg`)
    return hogImage
  }

  generateHogTiles = () => {
    return this.props.hogs.map((hog) => < HogDisplay key={hog.name} hog={hog} image={this.getHogImage(hog)}/>);
  }

  //^^^was 'this.props.hogs' ^^^

  render() {
    return(
      <div>
        {this.generateHogTiles()}
      </div>
    )
  }

}
