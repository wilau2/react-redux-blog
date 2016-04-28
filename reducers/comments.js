import * as types from '../constants/ActionTypes'

const initialState = [
  {
    id:0,
    text:"hey",
    approved:true,
    likeCounter:3
  },{
    id:1,
    text:"ho",
    approved:false,
    likeCounter:0
  },{
    id:2,
    text:"let's go",
    approved:true,
    likeCounter:3
  },{
    id:3,
    text:"go go go",
    approved:false,
    likeCounter:0
  },
]

const comment = (state, action) => {
  switch (action.type) {
    case types.ADD_COMMENT:
      return {
        id: action.id,
        text: action.text,
        approved: false,
        likeCounter: 0,
      }
    case types.LIKE_COMMENT:
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        likeCounter: state.likeCounter + 1
      })
    case types.APPROVE_COMMENT:
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        approved: !state.approved
      })
    default:
      return state
  }
}

const comments = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COMMENT:
      return [
        ...state,
        comment(undefined, action)
      ]
    case types.LIKE_COMMENT:
      return state.map(c =>
        comment(c, action)
      )
    case types.APPROVE_COMMENT:
      return state.map(c =>
        comment(c, action)
      )
    default:
      return state
  }
}

export function getComment(state, commentId) {
  return state[commentId]
}

export default comments
