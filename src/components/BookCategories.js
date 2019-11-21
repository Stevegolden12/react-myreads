import React, { Component } from 'react';
import '../App.css';
import BookItems from './BookItems';
import PropTypes from 'prop-types';


class BookCategories extends Component {
 
  render() {    
      return (
      <React.Fragment>
        <h2 className="center-text">{this.props.categoryName}</h2>  
          <div className="main-page__book-wrapper">
            <ul className="main-page__book-categories">
          {
            this.props.books.map((book)=>{
                  return <BookItems key={book.id} book={book} changeBookShelf={this.props.changeBookShelf} route="app"/>
            })
          }
          </ul>   
          </div>
      </React.Fragment>
      )
  }
}

BookCategories.propTypes = {
  categoryName: PropTypes.string,
  books:PropTypes.array,
  changeBookShelf: PropTypes.func,
}

export default BookCategories