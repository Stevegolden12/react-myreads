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
    console.log(this.props)
    return (
      <React.Fragment>
      <h2>{this.props.categoryName}</h2>
      <ul>
          {
            this.props.books.map((book)=>{
              return <BookItems key={book.id} book={book}/>
            })
          }
       </ul>
      </React.Fragment>
      )
  }
}

export default BookCategories