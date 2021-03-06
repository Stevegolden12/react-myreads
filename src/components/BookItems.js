import React, { Component } from 'react';
import '../App.css';
import ShelfTransferMenu from './ShelfTransferMenu'
import arrowDropDown from '../icons/arrow-drop-down.svg';
import noImageAvailable from '../icons/no-image-available.png'
import PropTypes from 'prop-types';

class BookItems extends Component {
  constructor(props) {
    super(props)

    this.toggleSelect = this.toggleSelect.bind(this);
    this.toggleOptionNoneSelect = this.toggleOptionNoneSelect.bind(this);
  }

  state = {
    isSelectVisible: false,
    authors: ''
  }

  componentDidMount() {
    let authors = ''
    if (this.props.book.authors !== undefined) {
      authors = Object.entries(this.props.book.authors).flat();
      authors = authors.filter((ignore, i) => {
        return i % 2 === 1
      })    
    }
    this.setState(() => ({
      authors: authors
    }))
  }

  toggleSelect() {
    this.setState(() => ({
      isSelectVisible: !this.state.isSelectVisible
    }))
  }

  toggleOptionNoneSelect() {

    this.setState(()=>({
      isSelectVisible: !this.state.isSelectVisible
    }))

  }

  render() {     
    return (
      <div className="main-page__book-items">   

        {this.props.book.imageLinks === undefined && <img className="main-page__book-image" src={noImageAvailable} alt="Book cover" />
        }
        {this.props.book.imageLinks !== undefined && <img className="main-page__book-image" src={`${this.props.book.imageLinks.smallThumbnail}`} alt="Book cover" />
        }

        <div className="mainpage__formwrapper">
          {this.state.isSelectVisible === true && <ShelfTransferMenu isShelf={this.props.book.shelf} book={this.props.book} route={this.props.route} changeBookShelf={this.props.changeBookShelf} toggleOptionNoneSelect={this.toggleOptionNoneSelect} myBooks={this.props.myBooks}/>}
        </div>
        <img className="main-page__show-shelf-transfer-image" src={arrowDropDown} alt="arrow drop down" onClick={() => { this.toggleSelect() }}/>
        <div className="main-page__book-info-wrapper">
          
            
          <h3 className="center-text main-page__book-title">{this.props.book.title}</h3>
          {  
           
           this.state.authors !== '' && 
       
          this.state.authors.map((author) => {
            return <h4 key={author} className="center-text remove-margin">{author}</h4>
          })

        }
     
       </div>
      </div>
        )
  }
}

BookItems.propTypes = {
  key: PropTypes.string,
  book: PropTypes.array,
  changeBookShelf: PropTypes.func,
  route: PropTypes.string
}

export default BookItems