import React, {
  Component
} from 'react'
import {
  Link
} from 'react-router-dom'
import Select from './Select'
class Shelves extends Component {
  booksPsngr(x, y) {
    this.props.booksPsngr(x, y);
  }
  deleteBook(z, t) {
    this.props.deleteBook(z, t)
  }
  render() {
      const {
        books
      } = this.props
      return ( < div className = "list-books" > {
            console.log(books)
          } < div className = "list-books-title" > < h1 > MyReads < /h1> < /div> < div className = "list-books-content" > < div > < div className = "bookshelf" > < h2 className = "bookshelf-title" > Currently Reading < /h2> < div className = "bookshelf-books" > < ol className = "books-grid" > {
            books.map((book) => (book.shelf === "currentlyReading" && ( < li key = {
                  book.id
                }
                className = "book" > < div className = "book-top" > < div className = "book-cover"
                style = {
                  {
                    width: 128,
                    height: 193,
                    backgroundImage: (book.imageLinks ? book.imageLinks.thumbnail : null) && `url(${book.imageLinks.thumbnail})`
                  }
                } > < /div> < div className = "book-shelf-changer" > < Select book = {
                  book
                }
                mybooksPsngr = {
                  this.booksPsngr.bind(this)
                }
                /> < /div> < /div> < div className = "book-title" > {
                  book.title
                } < /div> < div className = "book-authors" > {
                  book.authors
                } < /div> < /li>)))
            } < /ol> < /div> < /div> < div className = "bookshelf" > < h2 className = "bookshelf-title" > Want to Read < /h2> < div className = "bookshelf-books" > < ol className = "books-grid" > {
              books.map((book) => (book.shelf === "wantToRead" && ( < li key = {
                    book.id
                  }
                  className = "book" > < div className = "book-top" > < div className = "book-cover"
                  style = {
                    {
                      width: 128,
                      height: 193,
                      backgroundImage: (book.imageLinks ? book.imageLinks.thumbnail : null) && `url(${book.imageLinks.thumbnail})`
                    }
                  } > < /div> < div className = "book-shelf-changer" > < Select book = {
                    book
                  }
                  mybooksPsngr = {
                    this.booksPsngr.bind(this)
                  }
                  /> < /div> < /div> < div className = "book-title" > {
                    book.title
                  } < /div> < div className = "book-authors" > {
                    book.authors
                  } < /div> < /li>)))
              } < /ol> < /div> < /div> < div className = "bookshelf" > < h2 className = "bookshelf-title" > Read < /h2> < div className = "bookshelf-books" > < ol className = "books-grid" > {
                books.map((book) => (book.shelf === "read" && ( < li key = {
                      book.id
                    }
                    className = "book" > < div className = "book-top" > < div className = "book-cover"
                    style = {
                      {
                        width: 128,
                        height: 193,
                        backgroundImage: (book.imageLinks ? book.imageLinks.thumbnail : null) && `url(${book.imageLinks.thumbnail})`
                      }
                    } > < /div> < div className = "book-shelf-changer" > < Select book = {
                      book
                    }
                    mybooksPsngr = {
                      this.booksPsngr.bind(this)
                    }
                    /> < /div> < /div> < div className = "book-title" > {
                      book.title
                    } < /div> < div className = "book-authors" > {
                      book.authors
                    } < /div> < /li>)))
                } < /ol> < /div> < /div> < /div> < div className = "open-search" > < Link className = "search-button"
                to = "/search" > < /Link> < /div> < /div> < /div>)
            }
          }
          export default Shelves