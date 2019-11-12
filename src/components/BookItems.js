import React, { Component } from 'react';
import '../App.css';
import ShelfTransferMenu from './ShelfTransferMenu'
import arrowDropDown from '../icons/arrow-drop-down.svg';

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
        
        <img className="main-page__book-image" src={`${this.props.book.imageLinks.smallThumbnail}`} alt="movie image" />
        <div className="mainpage__formwrapper">
          {this.state.isSelectVisible === true && <ShelfTransferMenu isShelf={this.props.book.shelf} book={this.props.book} route={this.props.route} changeBookShelf={this.props.changeBookShelf} toggleOptionNoneSelect={this.toggleOptionNoneSelect}/>}
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

export default BookItems