import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI.js';
import '../App.css';

class ShelfTransferMenu extends Component {
  constructor(props) {
    super(props)

    this.changeShelf = this.changeShelf.bind(this)

  }
  
 
 
  changeShelf(event) {

    /***** Callback to parent Allbooks to change shelf *****/



    if (event.target.value !== this.props.isShelf) { 
      console.log(event.target.value)
      BooksAPI.update(this.props.book, event.target.value)
        .then((shelf) => {
          console.log(shelf)

        })
      window.location.reload();
     }
    
  }

  render() {  
    let shelf = this.props.isShelf;
     return (
      < form >
         <select className="mainpage__select" size="5" visiblity={this.props.isSelectVisible === true ? 'visible' : 'hidden'} defaultValue={this.props.shelf} onChange={(event) => this.changeShelf(event)} >
          <option disabled>Move to...</option>
           <option className="mainpage__option" value="currentlyReading">Currently Reading</option>
           <option className="mainpage__option" value="wantToRead">Want to Read</option>
           <option className="mainpage__option" value="read">Read</option>
          <option className="mainpage__option" value="none">None</option>
        </select>
      </form >
      )
  }
}

export default ShelfTransferMenu