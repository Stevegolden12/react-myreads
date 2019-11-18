import React, { Component } from 'react';
import '../App.css';

class ShelfTransferMenu extends Component {
  state = {
    shelf: this.props.isShelf
  }
  render() {
    let shelf;
    let isBookinMyBooks = false;
    let checkBookIndex = -1;
    console.log(this.props.book.id)
    console.log(this.props.myBooks)
  
  
   
    if(this.props.route === 'app') {
      shelf = this.props.isShelf;  
      console.log(shelf)
    } else {

      let myBooksId = this.props.myBooks.map((book) => {
        return book.id
      })
      checkBookIndex = myBooksId.indexOf(this.props.book.id)


      if (checkBookIndex === -1) {
        shelf = ''
      } else {
        console.log(checkBookIndex)
        console.log(this.props.myBooks[checkBookIndex].shelf)
        shelf = this.props.myBooks[checkBookIndex].shelf
        isBookinMyBooks = true
      }
    }   
   return (
      < form >
        <select className="main-page__select" size="5" visiblity={this.props.isSelectVisible === true ? 'visible' : 'hidden'} defaultValue={shelf !== undefined ? shelf : 'noValue'} onChange={(event) => { this.props.changeBookShelf(event, this.props.book.id, isBookinMyBooks, checkBookIndex); this.props.toggleOptionNoneSelect() }} >
         <option hidden value='noValue'></option>
         <option disabled>Move to...</option> 
          <option className="main-page__option" value="currentlyReading">Currently Reading</option>
          <option className="main-page__option" value="wantToRead">Want to Read</option>
          <option className="main-page__option" value="read">Read</option>        
        <option className="main-page__option" value="none">None</option>
      
        </select>
      </form >
    )
  }
}

export default ShelfTransferMenu