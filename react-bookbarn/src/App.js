import React, {Component} from 'react';
import './App.css';
import { directive } from '@babel/types';
import BookList from './BookList';
import Header from './Header'
import Footer from './Footer'
//import LanguageList from './Language'

class App extends Component {
  constructor(props){
    super(props) //calls the parent class constructor

    this.state = {
      books: []
    }
    

    this.fetchBooks()





  }
  fetchBooks = () => {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response => response.json())
    .then(books => {
      this.setState({
        books: books,
      })
    })
  }

  render(){
    return (
      <div>
      <Header />
      <BookList books = {this.state.books} />
      <Footer />
      </div>
    )
  }


}

export default App;
