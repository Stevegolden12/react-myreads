import React from 'react';
import '../App.css';
import BookCategories from './BookCategories.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">     
        <h1>My Book Reads</h1>  
        <BookCategories />
        <BookCategories />
        <BookCategories />
      </header>
    </div>
  );
}

export default App;
