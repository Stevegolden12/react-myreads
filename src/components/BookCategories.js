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
          <div className="MainPage__bookWrapper">
          <ul className="MainPage__BookCategories">
          {
            this.props.books.map((book)=>{
                return <BookItems key={book.id} book={book} shouldReRender={this.props.shouldReRender}/>
            })
          }
          </ul>   
          </div>
      </React.Fragment>
      )
  }
}

export default BookCategories