import React, { PropTypes, Component } from 'react'
import AddComment from '../containers/AddComment'
import VisibleComments from './VisibleComments'

class Article extends Component {
	render(){
		const {
			id,
			title,
			content,
		} = this.props.article

		const { 
			comments,
		} = this.props
	
		return(
			<div>
				<h2>Article section</h2>
		  	<h3>Title : {title}</h3>
		  	<p>Content : {content}</p>

		  	<h2>Comment section</h2>
				<AddComment id={id}/>	
		  	<VisibleComments comments={comments} />

		 	</div>
		)
	}
}

export default Article
