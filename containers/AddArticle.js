import React, { Component } from 'react'
import { addArticle } from '../actions'
import { connect } from 'react-redux'
import AddForm from '../components/AddForm'
import SectionTitle from '../components/SectionTitle'

class AddArticle extends Component {
	render(){
		const {
      dispatch,
		} = this.props

		return(
			<div>
				<SectionTitle title={'Adding Article'}/>
				<AddForm 
					onAdd={(inputs) => dispatch(addArticle(inputs[0].value, inputs[1].value))} 
					fields ={['name','content']}
					actionName={'Add Article'} 
				/>
			</div>
		)
	}
}

AddArticle = connect()(AddArticle)

export default AddArticle