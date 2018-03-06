import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'

class Search extends Component {
  state = {
    query: '',
  }


  updateQuery = (query) => {

    this.setState({ query: query.trim() })

      this.props.BookSearch(query)

}


  render(){
    return(
      <div className="search-books">
            <div className="search-books-bar">
              <Link onClick = {this.props.onClick} className='close-search' to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={this.state.query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.props.book && this.props.book.length && this.props.book.map((sbooks, i)=>(
                  <Book
                    key = {sbooks.id}
                    book = {sbooks}
                    onChange = {this.props.onChange}
                  />
                ))}
              </ol>
            </div>
      </div>
    )
  }
}

export default Search
