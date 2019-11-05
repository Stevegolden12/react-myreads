import React, { Component } from 'react';
import '../App.css';
import * as BooksAPI from '../BooksAPI.js'
import { BrowserRouter, Route, Link } from "react-router-dom";
import BookItems from './BookItems'

class Search extends Component {
  constructor(props) {
    super(props)

    this.changeInput = this.changeInput.bind(this);
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

  render() {
   
    return (
      <React.Fragment>
      <h1>Search Page</h1>
        <Link to='/'>Go to Main Page</Link>
        <br />
        <input className="SearchPage__SearchButton" placeholder="Search by Title" onChange={this.changeInput} />
        <br />
        <br />
        <ul>
          {
            this.state.searchBooks.map((book) => {
              return <BookItems key={book.id} book={book} />
          })
          }
          </ul>
      </React.Fragment>
      )
  }
}

export default Search