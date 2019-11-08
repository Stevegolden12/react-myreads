import React, { Component } from 'react';
import '../App.css';
import BookCategories from './BookCategories.js'
import * as BooksAPI from '../BooksAPI.js';
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props)

    this.changeBookShelf = this.changeBookShelf.bind(this);
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

  changeBookShelf(event, bookId) {
    console.log(event.target.value)
    console.log(bookId)

   const findBookIndex = this.state.allBooks.findIndex((book) => {
      return book.id === bookId
    })

    let newAllBooks = [...this.state.allBooks];
    newAllBooks[findBookIndex].shelf = event.target.value;

    this.setState(() => ({
      allBooks: newAllBooks
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="mainpage__mainpagelinkWrapper">
          <Link to='/Search'>Search Book Library</Link>
        </div> 
        <h1 className="center-text">My Book Reads</h1>
        <header className="App-header">
          <BookCategories categoryName='Currently Reading' books={this.state.allBooks.filter((book) => book.shelf === 'currentlyReading')} changeBookShelf={this.changeBookShelf} />
          <BookCategories categoryName='Want to Read' books={this.state.allBooks.filter((book) => book.shelf === 'wantToRead')} changeBookShelf={this.changeBookShelf} />
          <BookCategories categoryName='Read' books={this.state.allBooks.filter((book) => book.shelf === 'read')} changeBookShelf={this.changeBookShelf} />
        </header>
        </div>
   
    );
  }
}

export default App;
