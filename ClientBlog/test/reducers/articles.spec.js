import * as types from '../../constants/ActionTypes'
import expect from 'expect'
import articles from '../../reducers'
import deepFreeze from 'deep-freeze'

describe('articles reducer', () => {

  describe('add article', () => {
    const state = [
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

    it('given valid article, should return new article', () => {

    	const addArticle = {
        type: types.ADD_ARTICLE,
        title: 'title',
        content: 'content',
        id: 2
      }
      
      deepFreeze(state)

      expect(articles(state,addArticle)).toEqual({
      	articles: [
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
				  },{
				    id:2,
				    title:"title",
				    content:"content",
				    comments:[]
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
		    ],
        "routing": {
          "locationBeforeTransitions": null
        }
      })
    })
  })

})
