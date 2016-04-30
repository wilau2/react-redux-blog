import * as types from '../../constants/ActionTypes'
import expect from 'expect'
import comments from '../../reducers'
import deepFreeze from 'deep-freeze'

describe('comments reducer', () => {
  const state = {
    articles: [
        {
          id:0,
          title:"First blog article",
          content:"hey this is an article",
          comments:[0,1,2]
        }
      ],
      "comments": [
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
    }
  describe('add comment', () => {
    it('should add comment to comments and to article', () => {

    	const addComment = {
        type: types.ADD_COMMENT,
        text: 'text',
        articleID: 0,
        id: 4
      }
      
      deepFreeze(state)

      expect(comments(state, addComment)).toEqual({
      	articles: [ 
      		{
            id:0,
            title:"First blog article",
            content:"hey this is an article",
            comments:[0,1,2,4]
          } 
      	], 
      	comments: [ 
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
          },{
            id:4,
            text:"text",
            approved:false,
            likeCounter:0
          },
        ],
      	routing: {
      	locationBeforeTransitions: null } }   
        
      )
    })
  })

  describe('like comment', () => {

    it('should like comment', () => {

      const likeComment = {
        type: types.LIKE_COMMENT,
        id: 2
      }
      
      deepFreeze(state)

      expect(comments(state, likeComment)).toEqual({
        articles: [ 
          {
            id:0,
            title:"First blog article",
            content:"hey this is an article",
            comments:[0,1,2]
          } 
        ], 
        comments: [ 
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
            likeCounter:4
          },{
            id:3,
            text:"go go go",
            approved:false,
            likeCounter:0
          },
        ],
        routing: {
        locationBeforeTransitions: null } }   
        
      )
    })
  })

  describe('approve comment', () => {
    
    it('should approve comment', () => {

      const approveComment = {
        type: types.APPROVE_COMMENT,
        id: 1
      }
      
      deepFreeze(state)

      expect(comments(state, approveComment)).toEqual({
        articles: [ 
          {
            id:0,
            title:"First blog article",
            content:"hey this is an article",
            comments:[0,1,2]
          } 
        ], 
        comments: [ 
          {
            id:0,
            text:"hey",
            approved:true,
            likeCounter:3
          },{
            id:1,
            text:"ho",
            approved:true,
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
        ],
        routing: {
        locationBeforeTransitions: null } }   
        
      )
    })
  })

})