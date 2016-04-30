import * as types from '../../constants/ActionTypes'
import expect from 'expect'
import { getArticleComments } from '../../reducers'
import deepFreeze from 'deep-freeze'

describe('selectors', () => {

  describe('getArticleComments', () => {
    const state = {
        articles: {
          0:{
            title:"First blog article",
            content:"hey this is an article",
            comments:[0,1,2]
          },
          1:{
            title:"Second blog article",
            content:"hey this is the second blog article",
            comments:[]
          }
        },
        comments: [
          {
            id:0,
            text:"hey",
            approved:true,
            likeCounter:3
          },
          {
            id:1,
            text:"ho",
            approved:false,
            likeCounter:0
          },
          {
            id:2,
            text:"let's go",
            approved:true,
            likeCounter:3
          },
          {
            id:3,
            text:"go go go",
            approved:false,
            likeCounter:0
          },
        ]
      }

    it('given article with comments, should return not empty comments', () => {
      
      deepFreeze(state)

      expect(getArticleComments(state,0)).toEqual([  
        {
          id:0,
          text:"hey",
          approved:true,
          likeCounter:3
        },
        {
          id:1,
          text:"ho",
          approved:false,
          likeCounter:0
        },
        {
          id:2,
          text:"let's go",
          approved:true,
          likeCounter:3
        }
      ])
    })

    it('given article without comments, should return empty comments', () => {

      deepFreeze(state)

      expect(getArticleComments(state,1)).toEqual([])
    })

    it('given undefined articleId, should return empty comments', () => {

      deepFreeze(state)

      expect(getArticleComments(state, undefined)).toEqual([])
    })
  })

})
