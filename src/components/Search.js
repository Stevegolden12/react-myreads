import React, { Component } from 'react';
import '../App.css';
import * as BooksAPI from '../BooksAPI.js'
import { BrowserRouter, Route, Link } from "react-router-dom";

class Search extends Component {

  render() {
    return (
      <React.Fragment>
      <h1>Search Page</h1>
        <Link to='/'>Go to Main Page</Link>
      </React.Fragment>
      )
  }
}

export default Search