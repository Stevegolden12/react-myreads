import React, { Component } from 'react';
import '../App.css';
import * as BooksAPI from '../BooksAPI.js';
import { Link } from "react-router-dom";
import BookItems from './BookItems'

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


  changeInput(event) {
    console.log(event.target.value)
    
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
    }
    
    /*
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

    //console.log(this.state.searchBooks)
  
  */
  }

  changeBookShelf(event, bookId) {

    let newSearchBooks = [...this.state.searchBooks ]

    console.log()
    
    let findBookIndex = newSearchBooks.findIndex((book) => {
      return book.id === bookId
    })
    newSearchBooks[findBookIndex].shelf = event.target.value;
    

    let addBook = newSearchBooks[findBookIndex]

    this.setState(() => ({
      myBooks: [...this.state.myBooks, addBook ] 
    }))
   
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
              
              return <BookItems key={book.id} book={book} changeBookShelf={this.changeBookShelf} route="search" />
           
           })
          
          }
          </div>
      </React.Fragment>
      )
  }
}

export default Search