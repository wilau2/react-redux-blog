import * as types from '../constants/ActionTypes'

const initialState = [
  {
    id:0,
    title:"First blog article",
    content:"hey this is an article",
    comments:[0,1,2]
  },{
    id:1,
    title:"Second blog article",
    content:"hey this is the second blog article",
    comments:[]
  }
]

const article = (state, action) => {
  switch (action.type) {
    case types.ADD_ARTICLE:
      return {
        id: action.id,
        title: action.title,
        content: action.content,
        comments:[]
      }
    case types.ADD_COMMENT:
      if (state.id === action.articleID) {
        return Object.assign({}, state, {
          comments: [
            ...state.comments,
            action.id
          ]
        })
      }
    default:
      return state
  }
}

const articles = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ARTICLE:
      return [
        ...state,
        article(undefined, action)
      ]
    case types.ADD_COMMENT:
      return state.map(c =>
        article(c, action)
      )
    default:
      return state
  }
}

export default articles

export function getCommentsIds(state, articleId) {
  return state[articleId].comments
}


