import React, { Component } from 'react';
import '../App.css';

class ShelfTransferMenu extends Component {
  state = {
    shelf: this.props.isShelf
  }
  render() {
    let shelf;

    
    if(this.props.route === 'app') {
      shelf = this.props.isShelf;  
      console.log(shelf)
    } else {
       shelf = ''
    }   
   return (
      < form >
        <select className="main-page__select" size="5" visiblity={this.props.isSelectVisible === true ? 'visible' : 'hidden'} defaultValue={this.state.shelf !== undefined ? this.state.shelf : 'noValue'} onChange={(event) => { this.props.changeBookShelf(event, this.props.book.id); this.props.toggleOptionNoneSelect() }} >
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