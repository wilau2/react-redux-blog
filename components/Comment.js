import React, { PropTypes, Component } from 'react'

class Comment extends Component {
	render(){
		const {
			text,
			likeCounter,
		} = this.props.comment

		return(
			<div>
		  	<p>Comment : {text}</p>
		 	</div>
		)
	}
}

export default Comment