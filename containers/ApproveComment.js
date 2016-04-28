import React, { PropTypes, Component } from 'react'
import Comment from '../components/Comment'
import { Link } from 'react-router'
import { approveComment } from '../actions'
import { connect } from 'react-redux'

class ApproveComment extends Component {
	render(){
		const {
			comment,
			dispatch,
		} = this.props

		return(
			<div>
				<Comment comment={comment} />
				<button onClick={() => dispatch(approveComment(comment.id))}>
					<Link to={"/unapprovedComments"}> Approve </Link>
				</button>
			</div>
		)
	}
}

ApproveComment = connect()(ApproveComment)

export default ApproveComment
