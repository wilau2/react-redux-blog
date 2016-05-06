import * as types from '../../constants/ActionTypes'
import expect from 'expect'
import * as actions from '../../actions'

describe('article actions', () => {
  it('addArticle should create ADD_ARTICLE action', () => {
    expect(actions.addArticle('title','content')).toEqual({
      type: types.ADD_ARTICLE,
      id: 2,
      title: 'title',
      content: 'content'
    })
  })
})