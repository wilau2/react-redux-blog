import React, { Component } from 'react'
import { editArticle } from '../actions'
import { connect } from 'react-redux'
import EditForm from '../components/EditForm'
import SectionTitle from '../components/SectionTitle'

class EditArticle extends Component {
	render(){
		const {
			dispatch,
		} = this.props
		const {
			id,
      name,
      content,
		} = this.props.article
		const values = {
			'name':name,
			'content':content,
		}
		return(
			<div>
				<SectionTitle title={'Editing Article'}/>
				<EditForm 
					onAdd={(inputs) => dispatch(editArticle(id, inputs[0].value, inputs[1].value))} 
					fields={['name','content']}
					values={values} 
					actionName={'Edit Article'} 
				/>
			</div>	   
		)
	}
}

EditArticle = connect()(EditArticle)

export default EditArticle