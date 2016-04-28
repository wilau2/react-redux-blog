import React, { Component } from 'react'
import LikeComment from '../containers/LikeComment'

class VisibleComments extends Component {
	render() { 
		const {
			comments,
		} = this.props

		const visibleComments = comments.filter(visibleComment=>{
  		if (visibleComment.approved === true) {
  			return visibleComment
  		}
		})

		return(
			<div>
				{visibleComments.map(comment=>
					<LikeComment 
						key={comment.id}
						comment={comment} 
					/>
				)}
			</div>
		)
	}
}
export default VisibleComments