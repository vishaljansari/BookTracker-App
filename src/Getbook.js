import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'

class Getbook extends Component {

  renderUserMessage(ready){
    return this.props.book.map((gbook) => {
      // console.log(bookks)
      if (gbook.shelf === ready) {
        return (

           <Book
             key = {gbook.id}
             book={gbook}
             onChange = {this.props.onChange}
           />
        );
      }

    })
 }
 render (){
   return(
     <div className="list-books">
       <div className="list-books-title">
          <h1>MyReads</h1>
       </div>
       <div className="list-books-content">
         <div>
           <div className="bookshelf">
             <h2 className="bookshelf-title">Currently Reading</h2>
           <div className="bookshelf-books">
             <ol className="books-grid">
               { this.renderUserMessage('currentlyReading') }
             </ol>
           </div>
          </div>
       </div>
       <div>
         <div className="bookshelf">
           <h2 className="bookshelf-title">Want to Read</h2>
         <div className="bookshelf-books">
           <ol className="books-grid">
             { this.renderUserMessage('wantToRead') }
           </ol>
         </div>
        </div>
     </div>
     <div>
       <div className="bookshelf">
         <h2 className="bookshelf-title">Read</h2>
       <div className="bookshelf-books">
         <ol className="books-grid">
           { this.renderUserMessage('read') }
         </ol>
       </div>
      </div>
   </div>
     </div>
     <div className="open-search">
       <Link to = "/search" className = 'open-search'></Link>
     </div>
   </div>
   )
 }
}


export default Getbook
