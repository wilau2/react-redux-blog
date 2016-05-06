import React, { Component } from 'react'
import { addArticle } from '../actions'
import { connect } from 'react-redux'
import EditableForm from '../components/EditableForm'
import SectionTitle from '../components/SectionTitle'

class AddArticle extends Component {
	render(){
		const {
      dispatch,
		} = this.props

		return(
			<div>
				<SectionTitle title={'Adding Article'}/>
				<EditableForm 
					onAction = {(inputs) => dispatch(addArticle(inputs[0].value, inputs[1].value))} 
					actionName = {'Add Article'} 
					fields = {['name','content']}
					redirect = {"/articles"}
				/>
			</div>
		)
	}
}

AddArticle = connect()(AddArticle)

export default AddArticle