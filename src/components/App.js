import React, { Component } from 'react';
import '../App.css';
import BookCategories from './BookCategories.js'
import * as BooksAPI from '../BooksAPI.js';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";




class App extends Component {
  constructor(props) {
    super(props)

    this.changeBookShelf = this.changeBookShelf.bind(this);
  }

  state = {
    myBooks: [], 
  }


  componentDidUpdate(prevProps) {
    // will be true
   
    let locationChanged = this.props.location !== prevProps.location;
        
    //console.log(prevProps.location.state) 
    console.log(this.props.location)
    console.log(prevProps.location)
    if (locationChanged) {
      console.log("if locationChanged triggered")
      /*
      this.setState({
        myBooks: this.props.location.state.myBooks,
      })
      */
    }
    console.log(this.props.location)
    
}

  componentDidMount() {
    console.log(this.props.location)
    const { location } = { ...this.props }
   
   /*
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
        myBooks: this.props.location.state.myBooks,
      })
    }
    */
    
   console.log(this.props.location.state)
    if (this.props.location.state === undefined || this.props.location.state.myBooks.length === 0) {
      console.log(this.props.location.state === undefined)
      BooksAPI.getAll()
        .then((books) => {
          console.log(books) 
          this.setState(() => ({
            myBooks: books
          }))
        })

      this.props.history.push('/', {
        myBooks: this.state.myBooks
      })
    
    } else if (this.props.location.state !== undefined) {
             this.setState(()=>({
              myBooks: this.props.location.state.myBooks,
      }))
      /*

    } else {
      //console.log("checking logic this.props.history")   
      //this.props.history.replace('/')
      //console.log(this.props.history.location.state.myBooks)
    }  
    */
    }

  }
 
  changeBookShelf(event, bookId) {
      console.log("changeBookShelf function triggered")
      const findBookIndex = this.state.myBooks.findIndex((book) => {
        return book.id === bookId
      })

      let newMyBooks = [...this.state.myBooks];
      newMyBooks[findBookIndex].shelf = event.target.value;
      this.setState(() => ({
        myBooks: [...newMyBooks]
    }))
 
    this.props.history.push('/', {
      myBooks: [...newMyBooks]
    })  
  }

  render() {
 
    return (
      <div className="App">
        <div className="main-page__main-page-link-wrapper">
          <Link
            href="/search"
            to={{
            pathname: '/search',
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
