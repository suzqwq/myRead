import React, {
	Component
} from 'react'
import {
	Link
} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Select from './Select'
class SearchScreen extends Component {
	state = {
		query: '',
		searchResults: [],
	}
	booksPsngr(x, y) {
		this.props.booksPsngr(x, y);
	}
	deleteBook(z, t) {
		this.props.deleteBook(z, t)
	}
	updateQuery = (query) => {
		this.setState(() => ({
			query: query
		}))
		this.updateSearchResults(query)
	}
	updateSearchResults = (query) => {
		if (query) {
			BooksAPI.search(query).then((searchResults) => {
				searchResults.error ? this.setState({
					searchResults: []
				}) : this.setState({
					searchResults: searchResults
				})
			})
		} else {
			this.setState({
				searchResults: []
			});
		}
	}
	render() {
		const {
			query,
			searchResults
		} = this.state
		return ( < div className = "search-books" > < div className = "search-books-bar" > < Link className = "close-search"
			to = '/' > Close < /Link> < div className = "search-books-input-wrapper" > < input type = "text"
			value = {
				query
			}
			placeholder = "Search by title or author"
			onChange = {
				(event) => this.updateQuery(event.target.value)
			}
			/> < div className = "search-books-results" > < ul className = "books-grid" > {
				searchResults.map((book) => ( < li key = {
						book.id
					}
					className = "book" > < div className = "book-top" > < div className = "book-cover"
					style = {
						{
							width: 128,
							height: 193,
							backgroundImage: (book.imageLinks ? book.imageLinks.thumbnail : null) && `url(${book.imageLinks.thumbnail})`
						}
					} > < /div> <
					div className = "book-shelf-changer" > < Select book = {
						book
					}
					mybooksPsngr = {
						this.booksPsngr.bind(this)
					}
					deleteBook = {
						this.deleteBook.bind(this)
					}
					/> < / div > < /div> <
					div className = "book-title" > {
						book.title
					} < /div> <
					div className = "book-authors" > {
						book.authors
					} < /div> < /li>))
			} < /ul> < / div > < /div> < / div > < /div>)
	}
}
export default SearchScreen
