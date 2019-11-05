import React, { Component } from 'react';
import '../App.css';

class BookItems extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.book)
    console.log(typeof this.props.book.imageLinks)
    return (
      <div className="MainPage__BookItems">    
        
        <img className="MainPage__BookImage" src={`${this.props.book.imageLinks.smallThumbnail}`} alt="Girl in a jacket" />
          
        <h3 className="center-text MainPage__bookTitle">{this.props.book.title}</h3>
        {
          this.props.book.authors.map((author) => {
            return <h4 className="center-text remove-margin">{author}</h4>
          })
        }
      
      </div>
        )
  }
}

export default BookItems