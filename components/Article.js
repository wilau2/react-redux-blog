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
		  	<h1>Title : {title}</h1>
		  	<p>Content : {content}</p>
		  	<h2>Comment section</h2>

				<AddComment id={id}/>	

		  	<VisibleComments comments={comments} />
		 	</div>
		)
	}
}

export default Article
