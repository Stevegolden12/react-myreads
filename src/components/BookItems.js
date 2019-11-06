import React, { Component } from 'react';
import '../App.css';
import ShelfTransferMenu from './ShelfTransferMenu'
import arrowDropDown from '../icons/arrow-drop-down.svg';

class BookItems extends Component {
  constructor(props) {
    super(props)

    this.toggleSelect = this.toggleSelect.bind(this);
  }

  state = {
    isSelectVisible: false
  }

  toggleSelect() {


    this.setState(() => ({
      isSelectVisible: !this.state.isSelectVisible
    }))

    console.log(this.state.isSelectVisible)
  }

  render() {
    console.log(this.props.book)
    console.log(typeof this.props.book.imageLinks)
    return (
      <div className="MainPage__BookItems">    
        
        <img className="MainPage__BookImage" src={`${this.props.book.imageLinks.smallThumbnail}`} alt="movie image" />
        <div className="mainpage__formwrapper">
          {this.state.isSelectVisible===true && <ShelfTransferMenu />}
        </div>
        <img className="MainPage__ShowShelfTransferImage" src={arrowDropDown} alt="arrow drop down" onClick={()=>this.toggleSelect()}/>
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