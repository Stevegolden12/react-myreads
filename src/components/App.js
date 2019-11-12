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
    myBooks: [],
    isReRender: false,
  }

  componentDidMount() {
  
    if (this.props.location.state.myBooks === undefined) {
      BooksAPI.getAll()
        .then((books) => {
          console.log(books)
          this.setState(() => ({
            myBooks: books
          }))
        })
    } else {
      this.setState({
        myBooks: this.props.location.state.myBooks
      })
    }
  }

  changeBookShelf(event, bookId) {
   
      const findBookIndex = this.state.myBooks.findIndex((book) => {
        return book.id === bookId
      })

      let newMyBooks = [...this.state.myBooks];
      newMyBooks[findBookIndex].shelf = event.target.value;

      this.setState(() => ({
        myBooks: newMyBooks
      }))

  }

  render() {
   
    return (
      <div className="App">
        <div className="main-page__main-page-link-wrapper">
          <Link to={{
            pathname: '/Search',
            state: {
              myBooks: this.state.myBooks
            }
          }}>Search Book Library</Link>
        </div> 
        <h1 className="center-text">My Book Reads</h1>
        <header className="App-header">
          <BookCategories categoryName='Currently Reading' books={this.state.myBooks.filter((book) => book.shelf === 'currentlyReading')} changeBookShelf={this.changeBookShelf} />
          <BookCategories categoryName='Want to Read' books={this.state.myBooks.filter((book) => book.shelf === 'wantToRead')} changeBookShelf={this.changeBookShelf} />
          <BookCategories categoryName='Read' books={this.state.myBooks.filter((book) => book.shelf === 'read')} changeBookShelf={this.changeBookShelf} />
        </header>
        </div>
   
    );
  }
}

export default App;
