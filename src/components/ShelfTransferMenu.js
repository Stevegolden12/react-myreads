import React, { Component } from 'react';
import '../App.css';

class ShelfTransferMenu extends Component {
  constructor(props) {
    super(props)
  }

 


  render() {
    return (
      < form >
        <select className="mainpage__select" size="5" visiblity={this.props.isSelectVisible === true ? 'visible' : 'hidden'} >
          <option disabled>Move to...</option>
          <option className="mainpage__option" value="0">Currently Reading</option>
          <option className="mainpage__option" value="1">Want to Read</option>
          <option className="mainpage__option" value="2">Read</option>
          <option className="mainpage__option" value="">None</option>
        </select>
      </form >
      )
  }
}

export default ShelfTransferMenu