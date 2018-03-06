import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Getbook from './Getbook'
import { Switch, Route } from 'react-router-dom'
import Search from './Search'
import './App.css'

class BooksApp extends Component {

  state = {
    book : [],
    sbook : []
    
  }

  componentDidMount(){
    this.Booksload()
  }

  Booksload = () =>{
    BooksAPI.getAll().then((book)=>{
      this.setState({ book })

        })
  }

  changeShelf = (bookchange, shelf) => {
   BooksAPI.update(bookchange, shelf)
   .then(() => this.Booksload());
   this.setState(state => ({
     sbook: state.sbook.map(b => {
       if (b.id === bookchange.id) {
         b.shelf = shelf;
       }
       return b;
     })
   }))
 }

  BookSearch = (query) => {
    if(query){
      BooksAPI.search(query).then (sbook => {
        if (sbook.hasOwnProperty("error")){
          this.setState({sbook : []})
        }
        else {
          this.setState(state => ({
            sbook : sbook.map(b => {
            const bookInShelf = state.book.find(bis => bis.id === b.id);
            if (bookInShelf) b.shelf = bookInShelf.shelf;
            return b;
            })
          }))
        }
      })
    }
    else {
      this.setState({ sbook: [] })
    }
  }
  clearArray = () => {
       this.setState({ sbook: [] })
     }

  render() {
    return (
      <div className="app">
        <Switch>
        <Route exact path='/' render={()=>(
          <Getbook
            book = {this.state.book}
            onChange = {this.changeShelf}

          />
        )}/>
        <Route path='/search' render={()=>(
          <Search
            onClick = {this.clearArray}
            BookSearch = {this.BookSearch}
            book = {this.state.sbook}
            onChange = {this.changeShelf}

          />
        )}/>

        </Switch>
      </div>
    )
  }
}

export default BooksApp
