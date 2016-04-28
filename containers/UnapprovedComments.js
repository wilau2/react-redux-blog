import React, { PropTypes, Component } from 'react'
import List from '../components/List'
import { connect } from 'react-redux'
import { approveComment } from '../actions'
import PageTitle from '../components/PageTitle'

class UnapproveComments extends Component {
	render() {
		const {
      id,
      comments,
      children,
    } = this.props

    const unapprovedComments = comments.filter(comment => {
      if(comment.approved == false){
        return comment
      }
    })

		return(
			<div>
        <PageTitle title={'Unapproved comments'}/>
				<List collection={unapprovedComments} collectionName={'unapprovedComments'} />
				{
          children && 
          React.cloneElement(
            children, 
            {
              comment: comments[id]
            }
          )
        }
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments,
    id: ownProps.params.id,
  }
}

export default connect(
  mapStateToProps,
  null
)(UnapproveComments)
