import React, { Component } from 'react';
import '../App.css';
import BookItems from './BookItems'


class BookCategories extends Component {
  constructor(props) {
    super(props)

   
  }

  state = {
 
  }

  render() {    
      return (
      <React.Fragment>
        <h2 className="center-text">{this.props.categoryName}</h2>  
          <div className="main-page__book-wrapper">
            <ul className="main-page__book-categories">
          {
            this.props.books.map((book)=>{
                  return <BookItems key={book.id} book={book} changeBookShelf={this.props.changeBookShelf}/>
            })
          }
          </ul>   
          </div>
      </React.Fragment>
      )
  }
}

export default BookCategories