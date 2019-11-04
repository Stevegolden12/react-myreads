import React, { Component } from 'react';
import '../App.css';
import BookCategories from './BookCategories.js'
import * as BooksAPI from '../BooksAPI.js'

class App extends Component {
  constructor(props) {
  super(props)
  }

  state = {
    allBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          allBooks: books
        }))
      })
  }

  render() {
    console.log(this.state.allBooks)
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Book Reads</h1> 
          <BookCategories categoryName='Currently Reading' books={this.state.allBooks.filter((book) => book.shelf === 'currentlyReading')} />
          <BookCategories categoryName='Want to Read' books={this.state.allBooks.filter((book) => book.shelf === 'wantToRead')} />
          <BookCategories categoryName='Read' books={this.state.allBooks.filter((book) => book.shelf === 'read')} />
        </header>
      </div>
    );
  }
}

export default App;
