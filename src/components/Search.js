import React, { Component } from 'react';
import '../App.css';
import * as BooksAPI from '../BooksAPI.js';
import { BrowserRouter, Route, Link } from "react-router-dom";
import BookItems from './BookItems'

class Search extends Component {
  constructor(props) {
    super(props)

    this.changeInput = this.changeInput.bind(this);
    this.changeBookShelf = this.changeBookShelf.bind(this);
  }

  state = {
    searchInput: '',
    allBooks: [],
    searchBooks: []
  }

    componentDidMount() {
      BooksAPI.getAll()
        .then((books) => {
          console.log(books)
          this.setState(() => ({
            allBooks: books
          }))
        })

 
    }


  changeInput(event) {

    let value = event.target.value.toLowerCase()
  
    let filterSearch = this.state.allBooks.map(book => {
      let titles = book.title.toLowerCase();    
       if (titles.includes(value)) {         
        return book
       } else {   
        return null
      }
     })
      filterSearch = filterSearch.filter((book) => {
      return book !== null
    })
     this.setState({
      searchInput: event.target.value,
      searchBooks: filterSearch     
    })

    console.log(this.state.searchBooks)
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
      <React.Fragment>
        <div className="search-page__main-page-link-wrapper">
        <Link to='/'>Go to Main Page</Link>
        </div>
          <h1 className="center-text">Search Page</h1>      
        <br />
        <div className="search-page__search-button-wrapper">
          <input className="search-page__search-button" placeholder="Search by Title" onChange={this.changeInput} />
          </div>
        <br />
        <br />
        <div className="search-page__book-layout">
          {
            this.state.searchBooks.map((book) => {
              return <BookItems key={book.id} book={book} changeBookShelf={this.changeBookShelf} />
          })
          }
          </div>
      </React.Fragment>
      )
  }
}

export default Search