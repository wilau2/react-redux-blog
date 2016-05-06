import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

class Article extends Component {
	render(){
		const {
			id,
			name,
			content,
		} = this.props.article
	
		return(
			<div>
				<h2>Article section</h2>
		  	<h3>Title : {name}</h3>
		  	<p>Content : {content}</p>
		 	</div>
		)
	}
}

export default Article
