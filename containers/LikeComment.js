import React, { Component } from 'react'
import Comment from '../components/Comment'
import { likeComment } from '../actions'
import { connect } from 'react-redux'

class LikeComment extends Component {
	render() {
		const {
			comment,
			dispatch
		} = this.props

		return(
			<div>
				<Comment comment={comment} />
				<p>Likes : {comment.likeCounter} <button onClick={() => dispatch(likeComment(comment.id))}>+</button></p>
			</div>
		)
	}
}

LikeComment = connect()(LikeComment)

export default LikeComment
