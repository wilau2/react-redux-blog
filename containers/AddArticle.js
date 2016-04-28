import React, { Component } from 'react'
import { addArticle } from '../actions'
import { connect } from 'react-redux'
import AddForm from '../components/AddForm'

class AddArticle extends Component {
	render(){
		const {
      id,
			dispatch,
		} = this.props

		return(
			<AddForm 
				onAdd={(inputs) => dispatch(addArticle(inputs[0].value, inputs[1].value))} 
				feilds ={['title','content']}
				actionName={'Add Article'} 
			/>   
		)
	}
}

AddArticle = connect()(AddArticle)

export default AddArticle