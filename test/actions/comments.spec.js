import * as types from '../../constants/ActionTypes'
import expect from 'expect'
import * as actions from '../../actions'

describe('comment actions', () => {
  it('addComment should create ADD_COMMENT action', () => {
    expect(actions.addComment('Use Redux',1)).toEqual({
      type: types.ADD_COMMENT,
      id: 4,
      text: 'Use Redux',
      articleID:1,
    })
  })

  it('likeComment should create LIKE_COMMENT action', () => {
    expect(actions.likeComment(1)).toEqual({
      type: types.LIKE_COMMENT,
      id: 1
    })
  })

  it('approveComment should create APPROVE_COMMENT action', () => {
    expect(actions.approveComment(1)).toEqual({
      type: types.APPROVE_COMMENT,
      id: 1
    })
  })

})
