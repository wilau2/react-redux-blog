import React, { PropTypes, Component } from 'react'
import List from '../components/List'
import { connect } from 'react-redux'
import { getArticleComments } from '../reducers'
import AddArticle from './AddArticle'

class Articles extends Component {
  render(){
    const {
      id,
      articles,
      comments,
      children,
    } = this.props

    return (
      <div>
        <h1> My super articles </h1>
        <List collection={articles} collectionName={'articles'} />
        <AddArticle />
        {
          children && 
          React.cloneElement(
            children, 
            {
              article: articles[id],
              comments: comments,
            }
          )
        }
        
      </div>
    )
  }
} 

const mapStateToProps = (state, ownProps) => {
  return {
    articles: state.articles,
    comments: getArticleComments(state, ownProps.params.id),
    id: ownProps.params.id,
  }
}

export default connect(
  mapStateToProps,
  null
)(Articles)
