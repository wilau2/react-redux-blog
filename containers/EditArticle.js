import React, { Component } from 'react'
import { editArticle } from '../actions'
import { connect } from 'react-redux'
import EditableForm from '../components/EditableForm'
import SectionTitle from '../components/SectionTitle'

class EditArticle extends Component {
	render(){
		const {
			dispatch,
			article,
		} = this.props
		const {
			id,
      name,
      content,
		} = article
		const defaultValues = {
			'name':name,
			'content':content,
		}
		return(
			<div>
				<SectionTitle title={'Editing Article'}/>
				<EditableForm 
					onAction={(inputs) => dispatch(editArticle(id, inputs[0].value, inputs[1].value))} 
					actionName={'Edit Article'} 
					fields={['name','content']}
					defaultValues={defaultValues} 
				/>
			</div>	   
		)
	}
}

EditArticle = connect()(EditArticle)

export default EditArticle