import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI.js';
import '../App.css';

class ShelfTransferMenu extends Component {
  constructor(props) {
    super(props)


  }

  render() {
    let shelf = this.props.isShelf;
    console.log(shelf)
    console.log()
    return (
      < form >
        <select className="main-page__select" size="5" visiblity={this.props.isSelectVisible === true ? 'visible' : 'hidden'} defaultValue={this.props.shelf} onChange={(event) => { this.props.changeBookShelf(event, this.props.book.id); this.props.toggleOptionNoneSelect() }} >
          <option disabled>Move to...</option>
          <option className="main-page__option" value="currentlyReading" selected={shelf === 'currentlyReading' ? true : false}>Currently Reading</option>
          <option className="main-page__option" value="wantToRead" selected={shelf === 'wantToRead' ? true : false}>Want to Read</option>
          <option className="main-page__option" value="read" selected={shelf === 'read' ? true : false}>Read</option>
          <option className="main-page__option" value="none">None</option>
        </select>
      </form >
    )
  }
}

export default ShelfTransferMenu