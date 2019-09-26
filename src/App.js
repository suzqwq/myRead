import React from 'react'
import { Route } from 'react-router-dom'
import SearchScreen from './SearchScreen'
import Shelves from './Shelves'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
   selectedBooks: [],
   books: [],
   shelf:''
  }

 }



 updateMyAPI(newSelect, myshelf) {
  BooksAPI.update(newSelect, myshelf).then(() => {
   BooksAPI.getAll().then((selectedBooks) => {
    newSelect.shelf=myshelf
    this.setState ({
     selectedBooks: selectedBooks,
    })
   
    })



  })
 }


 booksPsngr = (newSelect, myshelf) => {
  console.log('latest book value', newSelect)
  if (!this.state.selectedBooks.includes(newSelect)) {
   this.setState((currentState) => ({
    selectedBooks: currentState.selectedBooks.concat(newSelect)
   }))


  }

  this.updateMyAPI(newSelect, myshelf)

 }




 deleteBook = (book, event) => {
  this.setState((currentState) => ({
   selectedBooks: currentState.selectedBooks.delete(book)
  }))
  this.updateMyAPI(book, event)

 }


 componentDidMount() {
  BooksAPI.getAll().then((selectedBooks) => {
   this.setState({
    selectedBooks: selectedBooks
   })
  })
 }


 render() {
console.log(this.state.selectedBooks)
  return ( <
   div className = "app" >
   <
   Route exact path = '/'
   render = {() => ( <Shelves books = {
      this.state.selectedBooks
     }
     deleteBook = { this.deleteBook}
     booksPsngr = {this.booksPsngr}
     updateMyAPI={this.updateMyAPI}
     />
    )
   }
   />

   <
   Route exact path = '/search'
   render = {
    () => ( <
     SearchScreen searchResults = {
      this.state.books
     }
     selectedBooks = {
      this.state.selectedBooks
     }
     deleteBook = {
      this.deleteBook
     }
     booksPsngr = {
      this.booksPsngr
     }

     />
    )
   }
   /> <
   /div>




  )
 }
}

export default BooksApp