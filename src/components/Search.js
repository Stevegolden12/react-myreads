import React, { Component } from 'react';
import '../App.css';
import * as BooksAPI from '../BooksAPI.js';
import { Link } from "react-router-dom";
import BookItems from './BookItems';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props)

    this.changeInput = this.changeInput.bind(this);
    this.changeBookShelf = this.changeBookShelf.bind(this);
  }

  state = {
    searchInput: '',
    myBooks: [],
    searchBooks: [],
    getMyBooks: true,
  }

 
  
  componentDidMount() {
    if (this.props.location.state === undefined) {

      BooksAPI.getAll()
        .then((books) => {
          this.setState(() => ({
            myBooks: books
          }))
        })

      this.props.history.push('/', {
        myBooks: this.state.myBooks
      })

    } else if (this.props.location.state !== undefined) {
      this.setState(() => ({
        myBooks: this.props.location.state.myBooks,
      }))
    }

  }


  changeInput(event) {
     
    if(event.target.value !== '') {
      this.setState({
        searchInput: event.target.value
      })
      BooksAPI.search(event.target.value)
        .then((result) => {
          this.setState(() => ({
            searchBooks: result
          }))
        })
    } else {
      this.setState(() => ({
        searchBooks: []
      }))
    }  
    
  }

  changeBookShelf(event, bookId, isBookinMyBooks, checkBookIndex) {  
   
    let newSearchBooks = [...this.state.searchBooks ]
    
    let findBookIndex = newSearchBooks.findIndex((book) => {
      return book.id === bookId
    })
    newSearchBooks[findBookIndex].shelf = event.target.value;
    

    let addBook = newSearchBooks[findBookIndex]

    if (isBookinMyBooks === false) {
      this.setState(() => ({
        myBooks: [...this.state.myBooks, addBook]
      }))
    } else {   
      let changeMyBooks = [...this.state.myBooks]
      changeMyBooks[checkBookIndex].shelf = event.target.value      
      this.setState(() => ({
        myBooks: changeMyBooks
      }))      
    }
   
  }

  render() { 
    return (
      <React.Fragment>
        <div className="search-page__main-page-link-wrapper">
          <Link to={{
            pathname: '/',
            state: {
              myBooks: this.state.myBooks
            }
          }}>Go to Main Page</Link>
        </div>
          <h1 className="center-text">Search Page</h1>      
        <br />
        <div className="search-page__search-button-wrapper">
          <input className="search-page__search-button" placeholder="Search by Title" onChange={this.changeInput} />
          </div>
        <br />
        <br />
        <div className="search-page__book-layout">

          {this.state.searchBooks[0] !== undefined && 
            this.state.searchBooks.map((book) => {  
              
            return <BookItems key={book.id} book={book} changeBookShelf={this.changeBookShelf} route="search" myBooks={this.state.myBooks}/>
           
           })
          
          }
          </div>
      </React.Fragment>
      )
  }
}

Search.propTypes = {
  searchInput: PropTypes.string,
  myBooks: PropTypes.array,
  searchBooks: PropTypes.array,
  getMyBooks: PropTypes.bool,
  myBooks: PropTypes.array,
}

export default Search