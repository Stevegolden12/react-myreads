import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class ShelfTransferMenu extends Component {
  state = {
    shelf: this.props.isShelf
  }
  render() {
    let shelf;
    let isBookinMyBooks = false;
    let checkBookIndex = -1;
    
    if(this.props.route === 'app') {
      shelf = this.props.isShelf;  
    } else {

      let myBooksId = this.props.myBooks.map((book) => {
        return book.id
      })
      checkBookIndex = myBooksId.indexOf(this.props.book.id)


      if (checkBookIndex === -1) {
        shelf = ''
      } else {
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

ShelfTransferMenu.propTypes = {
  isShelf: PropTypes.string,
  book: PropTypes.array,
  changeBookShelf: PropTypes.func,
  route: PropTypes.string,
  toggleOptionNoneSelect: PropTypes.func,
  myBooks: PropTypes.array,
}

export default ShelfTransferMenu