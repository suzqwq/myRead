import React, { Component } from 'react'

class Select extends Component{


/*stateHandler(x){
	this.sharedBooks(x)
}*/
sharedBooks(x){
	this.props.sharedBooks(this.state)
}




	render(){

		const { book, mySelectedBook }=this.props
		const sharedBooks=(x)=>{
	this.props.sharedBooks(this.state)
}

	const handleChange =(event, book)=> {
	
  let val=event.target.value;
  let mybook=book;
  mybook.shelf=val;
  console.log('booksPsngr: ', mybook);
  mybook=this.mySelectedBook
 // this.stateHandler(mybook)
 this.sharedBooks(mySelectedBook)
  /*this.setState({selectedBooks: mybook})

  this.secondSharedBooks(this.state.selectedBooks)*/
  
}
		
		

	return(
		   <select defaultValue="none" onChange={(event)=>{
                            this.handleChange(event, book)}}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading"
                               >Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
		)
	
}
}
export default Select
