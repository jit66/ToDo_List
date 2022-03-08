import React, { Component } from "react";
import "./App.css";

import List from "./List";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: [],
    };
  }

  onChange = (e) => {
    this.setState({ term: e.target.value });
  };

  ontypeHandler = (e) => {
    e.preventDefault();
    if(this.state.term.length>0){
      this.setState({
        term: "",
        items: [...this.state.items, this.state.term],
      });
    }
    
  };

  handleRemove = (e) => {
    let items = [...this.state.items];
    let newitems = items.filter((value, key) => {
      return e !== key;
    });
    this.setState({ items: newitems });
  };

  render() {
    return (
      <div>
        <h1>Welcome to TODO APP</h1>
        <input
          type="text"
          value={this.state.term}
          placeholder="Enter item"
          onChange={this.onChange}
        />
        <button  onClick={this.ontypeHandler}> ADD ITEM</button>
        <List
          items={this.state.items}
          handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}
