import React, { Component } from 'react';
import '../App.css';
import * as BooksAPI from '../BooksAPI.js'


class BookCategories extends Component {
  state = {
    allBooks: [],
  }

  componentDidMount() {
    BooksAPI.getAll = () =>
         .then((allBooks) => {
          this.setState(() => ({
          allBooks
        }))
      })
  }

  render() { 
    return (
      <h2>BookCategories</h2>
      )
  }
}

export default BookCategories