import React, { Component } from 'react'


class Select extends Component{


 mybooksPsngr=(x, y)=>{
  this.props.mybooksPsngr(x, y)
}

handleChange =(event, book)=> {
let val=event.target.value;

  book.shelf=val
  this.value=val
  console.log( 'value', this.value);

  this.mybooksPsngr(book, val);

}
deleteBook(book, event){
  this.props.deleteBook(book, event)


}


  render(){


  const { book }=this.props


  return(

       <select value={book.shelf} defaultValue="none"  onChange={(event)=>{
                            this.handleChange(event, book)}}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading"
                               >Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none" onClick={(event)=>{
                this.deleteBook(book, event)}}>None</option>
                              </select>
    )
  
}
}
export default Select
