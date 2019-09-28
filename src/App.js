import React, {Component} from 'react';

import './App.css';
import {robots} from './components/robot';
import CardList from './components/cards/CardList';
import SearchBox from './components/layout/searchBox';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      robots:robots,
      searchField:''
    }
    this.onSearchChange = this.onSearchChange.bind(this)
  }
  onSearchChange(e){
    this.setState({searchField:e.target.value}); 
  }

  render(){
     const robotFiltered = this.state.robots.filter((robot, id) =>{
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className='tc'>
        <h1 className='f2'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />      
        <CardList robots={robotFiltered} />
      </div>
  );
  }
}

export default App;
