import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogTile from './HogTile'
import Filter from './Filter'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      hogs: hogs
    }
  }

  sortHogsByName = () => {

  }

  sortHogsByWeight = () => {

  }

  sortHogsByGrease = () => {

  }

  handleButtonClick = (event) => {
    if(event.target.id === 'name'){
      let newHogs = this.sortHogsByName()
      this.setState({hogs: newHogs})
    } else if (event.target.id === 'weight'){
      let heavyHogs = this.sortHogsByWeight()
      this.setState({hogs: heavyHogs})
    } else if (event.target.id === 'greased'){
      let greasyHogs = this.sortHogsByGrease()
      this.setState({hogs: greasyHogs})
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
          < Nav />
          < HogTile hogs={this.state.hogs} />
          < Filter buttonFilter={this.handleButtonClick}/>
      </div>
    )
  }
}

export default App;
