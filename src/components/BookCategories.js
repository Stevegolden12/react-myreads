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
        <h2 className="center-text">{this.props.categoryName}</h2>  
          <div className="MainPage__bookWrapper">
          <ul className="MainPage__BookCategories">
          {
            this.props.books.map((book)=>{
              return <BookItems key={book.id} book={book}/>
            })
          }
          </ul>   
          </div>
      </React.Fragment>
      )
  }
}

export default BookCategories