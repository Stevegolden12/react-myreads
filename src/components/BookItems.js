import React, { Component } from 'react';
import '../App.css';

class BookItems extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h3 key={this.props.book.id}>{this.props.book.title}</h3>
      )
  }
}

export default BookItems