import { combineReducers } from 'redux'
import { default as articles, getCommentsIds } from './articles'
import { default as comments, getComment } from './comments'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

export function getArticleComments(state, articleId) {
	if (articleId !== undefined) {
	  return getCommentsIds(state.articles, articleId).map(id => {
	    return getComment(state.comments, id)
	  })
	} else { 
		return []
	}
}

const rootReducer = combineReducers({
  articles,
  comments,
  routing: routerReducer
})

export default rootReducer
