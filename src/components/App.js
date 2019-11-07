import React, { Component } from 'react';
import '../App.css';
import BookCategories from './BookCategories.js'
import * as BooksAPI from '../BooksAPI.js';
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props)

    this.shouldReRender = this.shouldReRender.bind(this);
  }

  state = {
    allBooks: [],
    isReRender: false,
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          allBooks: books
        }))
      })
  }

  shouldReRender() {
    console.log("shouldReRender")
    this.setState((currentState) => ({
      isReRender: !this.state.isReRender
    }))

    console.log(this.state.isReRender)
  }

  render() {
    return (
      <div className="App">
        <div className="mainpage__mainpagelinkWrapper">
          <Link to='/Search'>Search Book Library</Link>
        </div> 
        <h1 className="center-text">My Book Reads</h1>
        <header className="App-header">
          <BookCategories categoryName='Currently Reading' books={this.state.allBooks.filter((book) => book.shelf === 'currentlyReading')} shouldReRender={this.shouldReRender} />
          <BookCategories categoryName='Want to Read' books={this.state.allBooks.filter((book) => book.shelf === 'wantToRead')} shouldReRender={this.shouldReRender} />
          <BookCategories categoryName='Read' books={this.state.allBooks.filter((book) => book.shelf === 'read')} shouldReRender={this.shouldReRender} />
        </header>
        </div>
   
    );
  }
}

export default App;
