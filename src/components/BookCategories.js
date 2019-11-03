import React, { Component } from 'react';
import '../App.css';
import * as BooksAPI from '../BooksAPI.js'


class BookCategories extends Component {
  state = {
    allBooks: [],
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
      <h2>BookCategories</h2>
      )
  }
}

export default BookCategories