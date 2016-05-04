import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import List from '../components/List'
import PageTitle from '../components/PageTitle'

class Articles extends Component {
  render(){
    const {
      id,
      articles,
      children,
    } = this.props

    return (
      <div>
        <PageTitle title={'My super articles'} />
        <List collection={articles} collectionName={'articles'} />
        <Link to={"/articles/new"}><button>new</button></Link>
        {
          children && 
          React.cloneElement(
            children, {
              article: articles[id]
            })
        }
      </div>
    )
  }
} 

const mapStateToProps = (state, ownProps) => {
  return {
    articles: state.articles,
    id: ownProps.params.id,
  }
}

export default connect(
  mapStateToProps,
  null
)(Articles)
