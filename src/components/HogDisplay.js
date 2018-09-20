import React, { Component } from 'react'

export default class HogDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      clicked: false
    })
  }

  handleClick = (event) => {
    this.setState({
      clicked: true
    })
  }

  render() {
    return(

      <div onClick={this.handleClick} className="pigTile">
        <h1>{this.props.hog.name}</h1>
        <img src={this.props.image} alt="pigImage"/>

        {this.state.clicked ? <div>
          <h3>Specialty: {this.props.hog.specialty}</h3>
          <h3> Greased: {this.props.hog.greased ? "Yes" : "No"}</h3>
          <h3> Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h3>
          <h3> Highest Medal Achieved: {this.props.hog['highest medal achieved']}</h3>
        </div> : null}

      </div>



    )
  }

}
