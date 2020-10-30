import axios from "axios";
import React, { Component } from "react";
import "./App.css";
import CardList from "./components/cards/CardList";
import Error from "./components/layout/errorBoundary";
import SearchBox from "./components/layout/searchBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: "",
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  onSearchChange(e) {
    this.setState({ searchField: e.target.value });
  }

  async componentDidMount() {
    const { data: robots } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({ robots });
  }

  render() {
    const robotFiltered = this.state.robots.filter((robot, id) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Error>
          <CardList robots={robotFiltered} />
        </Error>
      </div>
    );
  }
}

export default App;
