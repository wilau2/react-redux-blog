import * as types from '../constants/ActionTypes'

let nextArticleId = 2
export const addArticle = (title, content) => {
  return {
    type: types.ADD_ARTICLE,
    id: nextArticleId++,
    title,
    content
  }
}

let nextCommentId = 4
export const addComment = (text, articleID) => {
  return {
    type: types.ADD_COMMENT,
    id: nextCommentId++,
    articleID: articleID,
    text
  }
}

export const approveComment = (id) => {
  return {
    type: types.APPROVE_COMMENT,
    id: id,
  }
}

export const likeComment = (id) => {
  return {
    type: types.LIKE_COMMENT,
    id: id,
  }
}
