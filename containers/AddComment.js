import React, { Component } from 'react'
import { addComment } from '../actions'
import { connect } from 'react-redux'
import AddForm from '../components/AddForm'

class AddComment extends Component {
	render(){
		const {
      id,
			dispatch,
		} = this.props

		return(
			<AddForm 
        onAdd={(inputs) => dispatch(addComment(inputs[0].value, id))}
        feilds ={['Comment']}
        actionName={'Add Comment'} 
      />   
		)
	}
}

AddComment = connect()(AddComment)

export default AddComment