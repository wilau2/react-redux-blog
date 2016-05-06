import * as types from '../constants/ActionTypes'

let nextArticleId = 2
export const addArticle = (name, content) => {
  return {
    type: types.ADD_ARTICLE,
    id: nextArticleId++,
    name,
    content
  }
}

export const editArticle = (id, name, content) => {
	return {
		type: types.EDIT_ARTICLE,
		id,
		name,
		content
	}
}