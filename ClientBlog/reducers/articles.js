import * as types from '../constants/ActionTypes'

const initialState = {
  0:{
    id:0,
    name:"First blog article",
    content:"hey this is an article"
},
  1:{
    id:1,
    name:"Second blog article",
    content:"hey this is the second blog article"
  }
}

const article = (state, action) => {
  switch (action.type) {
    case types.ADD_ARTICLE:
      const { id } = action
      return Object.assign({}, state, {
          [id]: {
          id: action.id,
          name: action.name,
          content: action.content
        }
      })
    case types.EDIT_ARTICLE:
      return Object.assign({}, state, {
          [action.id]: {
          id: action.id,
          name: action.name,
          content: action.content
        }
      })

    default:
      return state
  }
}

const articles = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ARTICLE:
      return article(state, action)
    case types.EDIT_ARTICLE:
      return article(state, action)
    default:
      return state
  }
}

export default articles
